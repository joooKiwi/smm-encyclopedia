import file from 'resources/compiled/Other word in the game.json'

import type {LanguageContent}                                                               from 'core/_template/LanguageContent'
import type {GameContentFromAllGames}                                                       from 'core/game/Loader.types'
import type {OtherSingularWordInTheGame}                                                    from 'core/otherWordInTheGame/OtherSingularWordInTheGame'
import type {OtherWordInTheGameTemplate}                                                    from 'core/otherWordInTheGame/OtherWordInTheGame.template'
import type {PossibleEnglishName, PossibleEnglishName_Plural, PossibleEnglishName_Singular} from 'core/otherWordInTheGame/OtherWordInTheGames.types'
import type {Loader}                                                                        from 'util/loader/Loader'

import {isInProduction}                    from 'variables'
import * as TemplateMethods                from 'core/_template/templateMethods'
import {OtherSingularWordInTheGameCreator} from 'core/otherWordInTheGame/OtherSingularWordInTheGame.creator'

/** @singleton */

export class OtherWordInTheGameLoader
    implements Loader<ReadonlyMap<PossibleEnglishName_Singular, OtherSingularWordInTheGame>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: OtherWordInTheGameLoader

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------


    #map?: Map<PossibleEnglishName_Singular, OtherSingularWordInTheGame>

    public load(): ReadonlyMap<PossibleEnglishName_Singular, OtherSingularWordInTheGame> {
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleEnglishName_Singular, OtherSingularWordInTheGame>()
        const templateReferences = new Map<PossibleEnglishName, OtherWordInTheGameTemplate>()
        const templateReferencesToFollow = new Map<PossibleEnglishName_Singular, OtherWordInTheGameTemplate>()
        //#region -------------------- Associating the template to the english name ----------------------------------------

        const size = file.length
        let index = size
        const temporaryArray = new Array<readonly [PossibleEnglishName, OtherWordInTheGameTemplate, Content,]>(size,)
        while (index-- > 0) {
            const content = file[index] as Content
            const template = createTemplate(content,)
            const englishName = (template.name.english.simple ?? template.name.english.american) as PossibleEnglishName

            templateReferences.set(englishName, template,)
            temporaryArray[index] = [englishName, template, content,]
        }

        //#endregion -------------------- Associating the template to the english name ----------------------------------------
        //#region -------------------- Setting the template references ----------------------------------------

        index = size
        while (index-- > 0) {
            const value = temporaryArray[index]
            const content = value[2]

            if (content.pluralFormOf != null) {
                templateReferences.get(content.pluralFormOf)!.properties.pluralForm = value[1]
                continue
            }

            templateReferencesToFollow.set(value[0] as PossibleEnglishName_Singular, value[1],)
        }

        //#endregion -------------------- Setting the template references ----------------------------------------
        //#region -------------------- Associating the references to the english name ----------------------------------------

        const iterator = templateReferencesToFollow[Symbol.iterator]()
        let iteratorResult: IteratorResult<readonly [PossibleEnglishName_Singular, OtherWordInTheGameTemplate,], unknown>
        while (!(iteratorResult = iterator.next()).done)
            references.set(iteratorResult.value[0], new OtherSingularWordInTheGameCreator(iteratorResult.value[1],).create(),)

        //#endregion -------------------- Associating the references to the english name ----------------------------------------

        if (!isInProduction)
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

    readonly english: NullOr<PossibleEnglishName>
    readonly americanEnglish: NullOr<PossibleEnglishName>

    readonly pluralFormOf: NullOr<PossibleEnglishName_Plural>

}

function createTemplate(content: Content,): OtherWordInTheGameTemplate {
    return {
        properties: {
            isIn: {game: TemplateMethods.createGameTemplateFromAllGames(content,),},
            pluralForm: null,
        },
        name: TemplateMethods.createNameTemplate(content,),
    }
}
