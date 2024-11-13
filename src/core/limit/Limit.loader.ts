import file from 'resources/compiled/Entity limit.json'

import type {Array, NullableString, NullOr, NullOrBoolean} from '@joookiwi/type'
import {forEachByArray}                                    from '@joookiwi/collection'
import {lazy}                                              from '@joookiwi/lazy'

import type {LanguageContent}                                                                                     from 'core/_template/LanguageContent'
import type {AlternativeLimit, Limit}                                                                             from 'core/limit/Limit'
import type {PossibleAcronym, PossibleAlternativeAcronym, PossibleAlternativeEnglishName, PossibleEnglishName}    from 'core/limit/Limits.types'
import type {PossibleEnglishName as PossibleEnglishName_LimitType}                                                from 'core/limit/LimitTypes.types'
import type {PossibleLimitAmount_Comment, PossibleLimitAmount_SMM1And3DS_Amount, PossibleLimitAmount_SMM2_Amount} from 'core/limit/loader.types'
import type {Loader}                                                                                              from 'util/loader/Loader'

import {isInProduction}            from 'variables'
import {AlternativeLimitContainer} from 'core/limit/AlternativeLimit.container'
import {EmptyLimit}                from 'core/limit/EmptyLimit'
import {LimitContainer}            from 'core/limit/Limit.container'
import {Limits}                    from 'core/limit/Limits'
import {LimitTypes}                from 'core/limit/LimitTypes'
import {createNameFromContent}     from 'lang/name/createNameFromContent'

/**
 * @dependsOn<{@link Limits}>
 * @recursiveReference<{@link Limits}>
 * @singleton
 */
export class LimitLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, Limit>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: LimitLoader

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, Limit>

    public load(): ReadonlyMap<PossibleEnglishName, Limit> {
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleEnglishName, Limit>()
        const regularReferences = new Map<PossibleEnglishName, Limit>()
        const alternativeReferences = new Map<PossibleAlternativeEnglishName, AlternativeLimit>()
        forEachByArray(file as Array<Content>, content => {
            const englishName = (content.english ?? content.americanEnglish)!
            if (content.type == null)
                alternativeReferences.set(englishName as PossibleAlternativeEnglishName, createAlternativeReference(content, regularReferences,),)
            else {
                const reference = createReference(content, alternativeReferences,)
                references.set(englishName, reference,)
                regularReferences.set(englishName, reference,)
            }
        },)

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

    readonly isAlternativeLimit: boolean
    readonly alternative: NullOr<PossibleAlternativeEnglishName>

    readonly type: NullOr<PossibleEnglishName_LimitType>
    readonly acronym: NullOr<| PossibleAcronym | PossibleAlternativeAcronym>

    readonly limit_SMM1And3DS: NullOr<| PossibleLimitAmount_SMM1And3DS_Amount | NotApplicable>
    readonly limit_SMM1And3DS_isUnknown: NullOrBoolean
    readonly limit_SMM2: NullOr<PossibleLimitAmount_SMM2_Amount>
    readonly limit_SMM2_isUnknown: NullOrBoolean
    readonly limit_comment: NullOr<PossibleLimitAmount_Comment>

}


function createReference(content: Content, alternativeReferences: ReadonlyMap<PossibleAlternativeEnglishName, AlternativeLimit>,): Limit {
    return new LimitContainer(
        createNameFromContent(content, 2, false,),
        content.acronym as NullOr<PossibleAcronym>,
        getAlternativeLimitBy(content.alternative, alternativeReferences,),
        LimitTypes.CompanionEnum.get.getValueByName(content.type,),
        content.limit_SMM1And3DS!, content.limit_SMM1And3DS_isUnknown!,
        content.limit_SMM2!, content.limit_SMM2_isUnknown!,
        content.limit_comment,
    )
}

function createAlternativeReference(content: Content, regularReferences: Map<PossibleEnglishName, Limit>,): AlternativeLimit {
    return new AlternativeLimitContainer(
        createNameFromContent(content, 2, false,),
        content.acronym as NullOr<PossibleAlternativeAcronym>,
        lazy(() => Limits.CompanionEnum.get.getValueByName(content.english ?? content.americanEnglish,).reference.type,),
    )
}


function getAlternativeLimitBy(value: NullableString<PossibleAlternativeEnglishName>, alternativeReferences: ReadonlyMap<PossibleAlternativeEnglishName, AlternativeLimit>): AlternativeLimit {
    if (value == null)
        return EmptyLimit.get

    const alternativeReferenceFound = alternativeReferences.get(value,)
    if (alternativeReferenceFound == null)
        throw new ReferenceError(`No alternative reference ${value} could be found.`,)
    return alternativeReferenceFound
}
