import file from 'resources/compiled/Game reference.json'

import type {LanguageContent}                      from 'core/_template/LanguageContent'
import type {GameReference}                        from 'core/gameReference/GameReference'
import type {PossibleAcronym, PossibleEnglishName} from 'core/gameReference/GameReferences.types'
import type {GameReferenceTemplate}                from 'core/gameReference/GameReference.template'
import type {Loader}                               from 'util/loader/Loader'

import {isInProduction}       from 'variables'
import * as TemplateMethods   from 'core/_template/templateMethods'
import {GameReferenceCreator} from 'core/gameReference/GameReference.creator'

/** @singleton */
export class GameReferenceLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, GameReference>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: GameReferenceLoader

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------
    #map?: Map<PossibleEnglishName, GameReference>

    public load(): ReadonlyMap<PossibleEnglishName, GameReference> {
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleEnglishName, GameReference>()

        file.map(it => new GameReferenceCreator(createTemplate(it as Content,),).create(),)
            .forEach(it => references.set(it.english as PossibleEnglishName, it,))

        if (!isInProduction)
            console.info(
                '-------------------- "game references" has been loaded (start) --------------------\n',
                references,
                '\n-------------------- "game references" has been loaded (end) --------------------',
            )

        return this.#map = references
    }
}


interface Content
    extends LanguageContent {

    readonly acronym: PossibleAcronym

}

function createTemplate(content: Content,): GameReferenceTemplate {
    return {
        acronym: content.acronym,
        name: TemplateMethods.createNameTemplate(content,),
    }
}
