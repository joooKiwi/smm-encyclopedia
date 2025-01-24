import file from 'resources/compiled/Other word in the game.json'

import type {Array, NullOrString} from '@joookiwi/type'
import {toReversedByArray}        from '@joookiwi/collection'

import type {LanguageContent}                                                               from 'core/_template/LanguageContent'
import type {GameContentFromAllGames}                                                       from 'core/game/Loader.types'
import type {OtherPluralWordInTheGame}                                                      from 'core/otherWordInTheGame/OtherPluralWordInTheGame'
import type {OtherWordInTheGame}                                                            from 'core/otherWordInTheGame/OtherWordInTheGame'
import type {PossibleEnglishName, PossibleEnglishName_Plural, PossibleEnglishName_Singular} from 'core/otherWordInTheGame/OtherWordInTheGames.types'
import type {Loader}                                                                        from 'util/loader/Loader'

import {isInDevelopment}                   from 'variables'
import {OtherPluralWordInTheGameContainer} from 'core/otherWordInTheGame/OtherPluralWordInTheGame.container'
import {OtherWordInTheGameContainer}       from 'core/otherWordInTheGame/OtherWordInTheGame.container'
import {createNameFromContent}             from 'lang/name/createNameFromContent'

/** @singleton */

export class OtherWordInTheGameLoader
    implements Loader<ReadonlyMap<PossibleEnglishName_Singular, OtherWordInTheGame>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: OtherWordInTheGameLoader

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------


    #map?: Map<PossibleEnglishName_Singular, OtherWordInTheGame>

    public load(): ReadonlyMap<PossibleEnglishName_Singular, OtherWordInTheGame> {
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleEnglishName_Singular, OtherWordInTheGame>()
        const pluralReferences = new Map<PossibleEnglishName_Plural, OtherPluralWordInTheGame>()
        toReversedByArray(file as Array<Content>,).forEach(content => {
            const englishName = (content.english ?? content.americanEnglish)!
            if (content.isPlural) {
                pluralReferences.set(englishName as PossibleEnglishName_Plural, createPluralContent(content,),)
                return
            }
            references.set(englishName as PossibleEnglishName_Singular, createSingularContent(content, pluralReferences,),)
        },)

        if (isInDevelopment)
            console.info(
                '-------------------- "other word in the game" has been loaded --------------------\n',
                references,
                '\n-------------------- "other word in the game" has been loaded --------------------',
            )

        return this.#map = references
    }
}

interface Content
    extends LanguageContent, GameContentFromAllGames {

    readonly english: NullOrString<PossibleEnglishName>
    readonly americanEnglish: NullOrString<PossibleEnglishName>

    readonly isPlural: boolean
    readonly pluralForm: NullOrString<PossibleEnglishName_Plural>

}

function createSingularContent(content: Content, pluralContents: ReadonlyMap<PossibleEnglishName_Plural, OtherPluralWordInTheGame>,): OtherWordInTheGame {
    const pluralForm = content.pluralForm
    const name = createNameFromContent(content, 'all', false,)//TODO change it to true once other translations are completed

    if (pluralForm == null)
        return new OtherWordInTheGameContainer(name, content.isInSuperMarioMaker1, content.isInSuperMarioMakerFor3DS, content.isInSuperMarioMaker2, null,)

    const pluralFormFound = pluralContents.get(pluralForm,)
    if (pluralFormFound == null)
        throw new ReferenceError(`No plural reference "${pluralForm}" was found for the singular "${content.english ?? content.americanEnglish}".`,)
    return new OtherWordInTheGameContainer(name, content.isInSuperMarioMaker1, content.isInSuperMarioMakerFor3DS, content.isInSuperMarioMaker2, pluralFormFound,)
}

function createPluralContent(content: Content,): OtherPluralWordInTheGame {
    return new OtherPluralWordInTheGameContainer(createNameFromContent(content, 'all', false,),)
}
