import file from 'resources/compiled/Character name.json'

import type {Loader}                    from 'util/loader/Loader'
import type {CharacterName}             from 'core/characterName/CharacterName'
import type {LanguageContent}           from 'core/_template/LanguageContent'
import type {UniqueNameContent}         from 'core/_template/UniqueNameContent'
import type {PossibleUniqueEnglishName} from 'core/characterName/CharacterNames.types'
import type {GameContentFromAllGames}   from 'core/game/Loader.types'
import type {CharacterNameTemplate}     from 'core/characterName/CharacterName.template'

import * as TemplateMethods from 'core/_template/templateMethods'
import {createContent}      from 'core/characterName/CharacterName.creator'
import {isInProduction}     from 'variables'

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
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleUniqueEnglishName, CharacterName>()
        let index = file.length
        while (index-- > 0) {
            const template = createTemplate(file[index] as Content,)
            references.set(template.uniqueName as PossibleUniqueEnglishName, createContent(template,),)
        }

        if (!isInProduction)
            console.info(
                '-------------------- "character name" has been loaded --------------------\n',
                references,
                '\n-------------------- "character name" has been loaded --------------------',
            )

        return this.#map = references
    }
}


interface Content
    extends LanguageContent, GameContentFromAllGames, UniqueNameContent<PossibleUniqueEnglishName> {

    readonly hasNameSaidInTheEditor: boolean

}

function createTemplate(content: Content,): CharacterNameTemplate {
    return {
        name: TemplateMethods.createNameTemplate(content,),
        uniqueName: content.uniqueName,
        properties: {isIn: {game: TemplateMethods.createGameTemplateFromAllGames(content,),},}
    }
}
