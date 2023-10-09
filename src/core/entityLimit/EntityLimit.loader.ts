import file from 'resources/compiled/Entity limit.json'

import {lazy} from '@joookiwi/lazy'

import type {LanguageContent}                                                                                                                      from 'core/_template/LanguageContent'
import type {AlternativeEntityLimit, EntityLimit}                                                                                                  from 'core/entityLimit/EntityLimit'
import type {PossibleAcronym, PossibleAlternativeAcronym, PossibleAlternativeEnglishName, PossibleEnglishName}                                     from 'core/entityLimit/EntityLimits.types'
import type {PossibleEnglishName as PossibleEnglishName_LimitType}                                                                                 from 'core/entityLimit/EntityLimitTypes.types'
import type {PossibleLimitAmount_Comment, PossibleLimitAmount_SMM1And3DS, PossibleLimitAmount_SMM2, PossibleLimitAmount_SMM2_UnknownAmount_Amount} from 'core/entityLimit/loader.types'
import type {EntityLimitAmount}                                                                                                                    from 'core/entityLimit/properties/EntityLimitAmount'
import type {Loader}                                                                                                                               from 'util/loader/Loader'

import {isInProduction}                    from 'variables'
import {PropertyContainer}                 from 'core/_properties/Property.container'
import {AlternativeEntityLimitContainer}   from 'core/entityLimit/AlternativeEntityLimit.container'
import {EmptyEntityLimit}                  from 'core/entityLimit/EmptyEntityLimit'
import {EntityLimitContainer}              from 'core/entityLimit/EntityLimit.container'
import {EntityLimits}                      from 'core/entityLimit/EntityLimits'
import {EntityLimitTypes}                  from 'core/entityLimit/EntityLimitTypes'
import {EntityLimitAmountContainer}        from 'core/entityLimit/properties/EntityLimitAmount.container'
import {EmptyEntityLimitAmount}            from 'core/entityLimit/properties/EmptyEntityLimitAmount'
import {createNameFromContent}             from 'lang/name/createNameFromContent'
import {NOT_APPLICABLE, UNKNOWN_CHARACTER} from 'util/commonVariables'

/**
 * @dependsOn<{@link EntityLimits}>
 * @recursiveReference<{@link EntityLimits}>
 * @singleton
 */
export class EntityLimitLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, EntityLimit>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EntityLimitLoader

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, EntityLimit>

    public load(): ReadonlyMap<PossibleEnglishName, EntityLimit> {
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleEnglishName, EntityLimit>()
        const regularReferences = new Map<PossibleEnglishName, EntityLimit>()
        const alternativeReferences = new Map<PossibleAlternativeEnglishName, AlternativeEntityLimit>()
        let index = file.length
        while (index-- > 0) {
            const content = file[index] as Content
            const englishName = (content.english ?? content.americanEnglish)!
            if (content.type == null) {
                alternativeReferences.set(englishName as PossibleAlternativeEnglishName, createAlternativeReference(content, regularReferences,),)
                continue
            }
            const reference = createReference(content, alternativeReferences,)
            references.set(englishName, reference,)
            regularReferences.set(englishName, reference,)
        }

        if (!isInProduction)
            console.info(
                '-------------------- "limit" has been loaded --------------------\n',
                references,
                '\n-------------------- "limit" has been loaded --------------------',
            )

        return this.#map = references
    }

}


interface Content
    extends LanguageContent {

    readonly english: NullOr<PossibleEnglishName>
    readonly americanEnglish: NullOr<PossibleEnglishName>

    readonly alternative: NullOr<PossibleAlternativeEnglishName>

    readonly type: NullOr<PossibleEnglishName_LimitType>
    readonly acronym: NullOr<| PossibleAcronym | PossibleAlternativeAcronym>

    readonly limit_SMM1And3DS: PossibleLimitAmount_SMM1And3DS
    readonly limit_SMM2: PossibleLimitAmount_SMM2
    readonly limit_comment: PossibleLimitAmount_Comment

}


function createReference(content: Content, alternativeReferences: ReadonlyMap<PossibleAlternativeEnglishName, AlternativeEntityLimit>,): EntityLimit {
    return new EntityLimitContainer(
        createNameFromContent(content, 2, false,),
        content.acronym as NullOr<PossibleAcronym>,
        getAlternativeEntityLimitBy(content.alternative, alternativeReferences),
        EntityLimitTypes.CompanionEnum.get.getValueByName(content.type,),
        createLimitAmount(content,),
    )
}

function createAlternativeReference(content: Content, regularReferences: Map<PossibleEnglishName, EntityLimit>,): AlternativeEntityLimit {
    return new AlternativeEntityLimitContainer(
        createNameFromContent(content, 2, false,),
        content.acronym as NullOr<PossibleAlternativeAcronym>,
        lazy(() => EntityLimits.CompanionEnum.get.getValueByName(content.english ?? content.americanEnglish,).reference.type,),
        createLimitAmount(content,),
    )
}


function createLimitTemplateInSMM1And3DS(amount: NonNullable<PossibleLimitAmount_SMM1And3DS>,) {
    if (amount === NOT_APPLICABLE)
        return PropertyContainer.NOT_APPLICABLE_CONTAINER
    if (amount === UNKNOWN_CHARACTER)
        return PropertyContainer.UNKNOWN_CONTAINER
    return new PropertyContainer(amount,)
}

function createLimitTemplateInSMM2(amount: NonNullable<PossibleLimitAmount_SMM2>,) {
    if (amount === UNKNOWN_CHARACTER)
        return PropertyContainer.UNKNOWN_CONTAINER
    if (typeof amount == 'number')
        return new PropertyContainer(amount,)
    return new PropertyContainer(Number(amount.substring(0, amount.length - 1),) as PossibleLimitAmount_SMM2_UnknownAmount_Amount, true,)
}

function getAlternativeEntityLimitBy(value: Nullable<PossibleAlternativeEnglishName>, alternativeReferences: ReadonlyMap<PossibleAlternativeEnglishName, AlternativeEntityLimit>): AlternativeEntityLimit {
    if (value == null)
        return EmptyEntityLimit.get

    const alternativeReferenceFound = alternativeReferences.get(value,)
    if (alternativeReferenceFound == null)
        throw new ReferenceError(`No alternative reference ${value} could be found.`,)
    return alternativeReferenceFound
}


/**
 * Create the {@link EntityLimitAmount} from the proper amount
 *
 *
 * @param content The content to retrieve the limit fields
 * @canContainDuplicateObjects
 */
function createLimitAmount(content: Content,): EntityLimitAmount {
    const amountInSMM1And3DS = content.limit_SMM1And3DS
    const amountInSMM2 = content.limit_SMM2
    const comment = content.limit_comment

    if (amountInSMM1And3DS == null || amountInSMM2 == null)
        return EmptyEntityLimitAmount.get
    return new EntityLimitAmountContainer(
        createLimitTemplateInSMM1And3DS(amountInSMM1And3DS,),
        createLimitTemplateInSMM2(amountInSMM2,),
        comment,
    )
}
