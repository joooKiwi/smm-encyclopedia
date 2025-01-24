import file from 'resources/compiled/Character name.json'

import type {Array}     from '@joookiwi/type'
import {forEachByArray} from '@joookiwi/collection'

import type {Loader}                    from 'util/loader/Loader'
import type {CharacterName}             from 'core/characterName/CharacterName'
import type {LanguageContent}           from 'core/_template/LanguageContent'
import type {UniqueNameContent}         from 'core/_template/UniqueNameContent'
import type {PossibleUniqueEnglishName} from 'core/characterName/CharacterNames.types'
import type {GameContentFromAllGames}   from 'core/game/Loader.types'

import {isInDevelopment}        from 'variables'
import {CharacterNameContainer} from 'core/characterName/CharacterName.container'
import {createNameFromContent}  from 'lang/name/createNameFromContent'

export class CharacterNameLoader
    implements Loader<ReadonlyMap<PossibleUniqueEnglishName, CharacterName>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: CharacterNameLoader

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: ReadonlyMap<PossibleUniqueEnglishName, CharacterName>

    public load(): ReadonlyMap<PossibleUniqueEnglishName, CharacterName> {
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleUniqueEnglishName, CharacterName>()
        forEachByArray(file as Array<Content>, content =>
            references.set(content.uniqueName, createReference(content,),),)

        if (isInDevelopment)
            console.info(
                '-------------------- "character name" has been loaded --------------------\n',
                references,
                '\n-------------------- "character name" has been loaded --------------------',
            )

        return this.#map = references
    }
}


interface Content
    extends LanguageContent,
        GameContentFromAllGames,
        UniqueNameContent<PossibleUniqueEnglishName> {

    readonly isInDayTime: boolean
    readonly isInNightTime: boolean

    readonly hasNameSaidInTheEditor: boolean

}

function createReference(content: Content,): CharacterName {
    return new CharacterNameContainer(
        createNameFromContent(content, 'all', false,),
        content.isInSuperMarioMaker1, content.isInSuperMarioMakerFor3DS, content.isInSuperMarioMaker2,
        content.isInDayTime, content.isInNightTime,
        content.hasNameSaidInTheEditor,
    )
}
