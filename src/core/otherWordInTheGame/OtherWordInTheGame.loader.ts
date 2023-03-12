import file                                                                                 from 'resources/compiled/Other word in the game.json'

import type {LanguageContent}                                                               from 'core/_template/LanguageContent'
import type {GameContentFromAllGames}                                                       from 'core/game/Loader.types'
import type {OtherSingularWordInTheGame}                                                    from 'core/otherWordInTheGame/OtherSingularWordInTheGame'
import type {OtherWordInTheGameTemplate}                                                    from 'core/otherWordInTheGame/OtherWordInTheGame.template'
import type {PossibleEnglishName, PossibleEnglishName_Plural, PossibleEnglishName_Singular} from 'core/otherWordInTheGame/OtherWordInTheGames.types'
import type {Loader}                                                                        from 'util/loader/Loader'
import type {NullOr}                                                                        from 'util/types/nullable'

import {isInProduction}            from 'variables'
import {AbstractTemplateCreator}           from 'core/_template/AbstractTemplate.creator'
import {OtherSingularWordInTheGameCreator} from 'core/otherWordInTheGame/OtherSingularWordInTheGame.creator'

/**
 * @singleton
 */

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
                templateReferences = new Map<PossibleEnglishName, OtherWordInTheGameTemplate>()

            file.map(it => {
                const template = new TemplateCreator(it as Content).create(),
                    englishName = (template.name.english.simple ?? template.name.english.american) as PossibleEnglishName

                templateReferences.set(englishName, template,)

                return [englishName, template,] as const
            }).forEach(it => {
                const [name, template,] = it

                if (template.properties.pluralForm != null)
                    templateReferences.get(name)!.properties.pluralForm = template
                return it
            });

            ([...templateReferences.entries()]
                .filter(([, template,]) => template.properties.pluralForm == null) as [PossibleEnglishName_Singular, OtherWordInTheGameTemplate][])
                .forEach(([name, template,]) => references.set(name, new OtherSingularWordInTheGameCreator(template).create(),))

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

class TemplateCreator
    extends AbstractTemplateCreator<OtherWordInTheGameTemplate, Content> {

    public constructor(content: Content,) {
        super(content,)
    }

    public override create(): OtherWordInTheGameTemplate {
        return {
            properties: {
                isIn: {game: this._createGameTemplateFromAllGames(),},
                pluralForm: null,
            },
            name: this._createNameTemplate(),
        }
    }

}
