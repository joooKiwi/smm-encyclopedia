import file from 'resources/compiled/Game reference.json'

import type {LanguageContent}                      from 'core/_template/LanguageContent'
import type {GameReference}                        from 'core/gameReference/GameReference'
import type {PossibleAcronym, PossibleEnglishName} from 'core/gameReference/GameReferences.types'
import type {Loader}                               from 'util/loader/Loader'

import {isInProduction}         from 'variables'
import {GameReferenceContainer} from 'core/gameReference/GameReference.container'
import {createNameFromContent}  from 'lang/name/createNameFromContent'

/** @singleton */
export class GameReferenceLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, GameReference>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: GameReferenceLoader

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, GameReference>

    public load(): ReadonlyMap<PossibleEnglishName, GameReference> {
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleEnglishName, GameReference>()
        let index = file.length
        while (index-- > 0) {
            const reference = createReference(file[index] as Content,)
            references.set(reference.english as PossibleEnglishName, reference,)
        }

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

function createReference(content: Content,): GameReference {
    return new GameReferenceContainer(
        content.acronym,
        createNameFromContent(content, 'all', false,),
    )
}
