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
        if (this.#map == null) {
            const references = new Map<PossibleEnglishName_Singular, OtherSingularWordInTheGame>(),
                templateReferences = new Map<PossibleEnglishName, OtherWordInTheGameTemplate>(),
                templateReferencesToFollow = new Map<PossibleEnglishName_Singular, OtherWordInTheGameTemplate>()

            file.map(it => {
                const template = createTemplate(it as Content,)
                const englishName = (template.name.english.simple ?? template.name.english.american) as PossibleEnglishName

                templateReferences.set(englishName, template,)

                return [englishName, template, it as Content,] as const
            }).forEach(([name, template, content,]) => {
                if (content.pluralFormOf == null) {
                    templateReferencesToFollow.set(name as PossibleEnglishName_Singular, template,)
                    return
                }
                templateReferences.get(content.pluralFormOf)!.properties.pluralForm = template
            });

            templateReferencesToFollow.forEach((template, name,) => references.set(name, new OtherSingularWordInTheGameCreator(template).create(),))

            if (!isInProduction)
                console.info(
                    '-------------------- "other word in the game" has been loaded --------------------\n',
                    references,
                    '\n-------------------- "other word in the game" has been loaded --------------------',
                )

            this.#map = references
        }
        return this.#map
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
