import file from 'resources/compiled/Entity limit.json'

import type {Array, NullableString, NullOr, NullOrBoolean, NullOrNumber, NullOrString} from '@joookiwi/type'
import {toReversedByArray}                                                             from '@joookiwi/collection'

import type {LanguageContent}                                                                                                               from 'core/_template/LanguageContent'
import type {AlternativeLimit}                                                                                                              from 'core/limit/AlternativeLimit'
import type {Limit}                                                                                                                         from 'core/limit/Limit'
import type {PossibleAcronym, PossibleAlternativeAcronym, PossibleAlternativeEnglishName, PossibleEnglishName}                              from 'core/limit/Limits.types'
import type {PossibleEnglishName as PossibleEnglishName_LimitType}                                                                          from 'core/limit/LimitTypes.types'
import type {PossibleLimitAmount_Comment, PossibleLimitAmount_SMM1And3DS_Amount, PossibleLimitAmount_SMM2_Amount, PossibleLimitDescription} from 'core/limit/loader.types'
import type {Loader}                                                                                                                        from 'util/loader/Loader'

import {isInDevelopment}           from 'variables'
import {AlternativeLimitContainer} from 'core/limit/AlternativeLimit.container'
import {EmptyAlternativeLimit}     from 'core/limit/EmptyAlternativeLimit'
import {LimitContainer}            from 'core/limit/Limit.container'
import {LimitTypes}                from 'core/limit/LimitTypes'
import {createNameFromContent}     from 'lang/name/createNameFromContent'

import TypeCompanion = LimitTypes.Companion

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

    #map?: ReadonlyMap<PossibleEnglishName, Limit>

    public load(): ReadonlyMap<PossibleEnglishName, Limit> {
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleEnglishName, Limit>()
        const regularReferences = new Map<PossibleEnglishName, Limit>()
        const alternativeReferences = new Map<PossibleAlternativeEnglishName, AlternativeLimit>()
        toReversedByArray(file as Array<Content>,).forEach(content => {
            const englishName = (content.english ?? content.americanEnglish)!
            if (content.type == null)
                alternativeReferences.set(englishName as PossibleAlternativeEnglishName, createAlternativeReference(content,),)
            else {
                const reference = createReference(content, alternativeReferences,)
                references.set(englishName, reference,)
                regularReferences.set(englishName, reference,)
            }
        },)

        if (isInDevelopment)
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

    //region -------------------- Language --------------------

    readonly english: PossibleEnglishName
    readonly americanEnglish: null
    readonly europeanEnglish: null

    //endregion -------------------- Language --------------------

    readonly isAlternativeLimit: boolean
    readonly alternative: NullOrString<PossibleAlternativeEnglishName>

    readonly type: NullOrString<PossibleEnglishName_LimitType>
    readonly acronym: NullOrString<| PossibleAcronym | PossibleAlternativeAcronym>

    readonly description: NullOrString<PossibleLimitDescription>

    readonly limit_SMM1And3DS: NullOr<| PossibleLimitAmount_SMM1And3DS_Amount | NotApplicable>
    readonly limit_SMM1And3DS_isUnknown: NullOrBoolean
    readonly limit_SMM2: NullOrNumber<PossibleLimitAmount_SMM2_Amount>
    readonly limit_SMM2_isUnknown: NullOrBoolean
    readonly limit_note: NullOrString<PossibleLimitAmount_Comment>

}


function createReference(content: Content, alternativeReferences: ReadonlyMap<PossibleAlternativeEnglishName, AlternativeLimit>,): Limit {
    return new LimitContainer(
        createNameFromContent(content, 2, false,),
        content.acronym as NullOrString<PossibleAcronym>,
        getAlternativeLimitBy(content.alternative, alternativeReferences,),
        TypeCompanion.getValueByName(content.type,),
        content.limit_SMM1And3DS!, content.limit_SMM1And3DS_isUnknown!,
        content.limit_SMM2!, content.limit_SMM2_isUnknown!,
        content.limit_note,
        content.description!,
    )
}

function createAlternativeReference(content: Content,): AlternativeLimit {
    return new AlternativeLimitContainer(
        createNameFromContent(content, 2, false,),
        content.acronym as NullOrString<PossibleAlternativeAcronym>,
    )
}


function getAlternativeLimitBy(value: NullableString<PossibleAlternativeEnglishName>, alternativeReferences: ReadonlyMap<PossibleAlternativeEnglishName, AlternativeLimit>): AlternativeLimit {
    if (value == null)
        return EmptyAlternativeLimit.get

    const alternativeReferenceFound = alternativeReferences.get(value,)
    if (alternativeReferenceFound == null)
        throw new ReferenceError(`No alternative reference ${value} could be found.`,)
    return alternativeReferenceFound
}
