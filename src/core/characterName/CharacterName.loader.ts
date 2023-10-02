import file from 'resources/compiled/Character name.json'

import type {Loader}                    from 'util/loader/Loader'
import type {CharacterName}             from 'core/characterName/CharacterName'
import type {LanguageContent}           from 'core/_template/LanguageContent'
import type {UniqueNameContent}         from 'core/_template/UniqueNameContent'
import type {PossibleUniqueEnglishName} from 'core/characterName/CharacterNames.types'
import type {GameContentFromAllGames}   from 'core/game/Loader.types'
import type {CharacterNameTemplate}     from 'core/characterName/CharacterName.template'

import {AbstractTemplateCreator} from 'core/_template/AbstractTemplate.creator'
import * as TemplateMethods      from 'core/_template/templateMethods'
import {CharacterNameCreator}    from 'core/characterName/CharacterName.creator'
import {isInProduction}          from 'variables'

export class CharacterNameLoader
    implements Loader<ReadonlyMap<PossibleUniqueEnglishName, CharacterName>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: CharacterNameLoader

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleUniqueEnglishName, CharacterName>

    public load(): ReadonlyMap<PossibleUniqueEnglishName, CharacterName> {
        if (this.#map == null) {
            const references = new Map<PossibleUniqueEnglishName, CharacterName>()

            file.map(it => new CharacterNameCreator(new TemplateCreator(it as Content).create()))
                .forEach(it => references.set(it.template.uniqueName as PossibleUniqueEnglishName, it.create(),))

            if (!isInProduction)
                console.info(
                    '-------------------- "character name" has been loaded --------------------\n',
                    references,
                    '\n-------------------- "character name" has been loaded --------------------',
                )

            this.#map = references
        }
        return this.#map
    }
}


interface Content
    extends LanguageContent, GameContentFromAllGames, UniqueNameContent<PossibleUniqueEnglishName> {

    hasNameSaidInTheEditor: boolean

}

class TemplateCreator
    extends AbstractTemplateCreator<CharacterNameTemplate, Content> {

    public constructor(content: Content,) {
        super(content,)
    }

    public override create(): CharacterNameTemplate {
        const content = this._content

        return {
            name: TemplateMethods.createNameTemplate(content,),
            uniqueName: content.uniqueName,
            properties: {isIn: {game: TemplateMethods.createGameTemplateFromAllGames(content,),},}
        }
    }
}
