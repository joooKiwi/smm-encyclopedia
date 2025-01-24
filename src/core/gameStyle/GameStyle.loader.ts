import file from 'resources/compiled/Game style.json'

import type {Array, NullOrBoolean, NullOrTrue} from '@joookiwi/type'
import {forEachByArray}                        from '@joookiwi/collection'
import {lazy}                                  from '@joookiwi/lazy'

import type {GameContentFrom1And2}                                               from 'core/game/Loader.types'
import type {GameStyle, PossibleNightDesertWindTranslationKey}                   from 'core/gameStyle/GameStyle'
import type {PossibleAcronym, PossibleEnglishName}                               from 'core/gameStyle/GameStyles.types'
import type {PossibleNightDesertWindDirection, PossibleNightDesertWindFrequency} from 'core/gameStyle/loader.types'
import type {Loader}                                                             from 'util/loader/Loader'

import {isInDevelopment}    from 'variables'
import {GameStyleContainer} from 'core/gameStyle/GameStyle.container'
import {GameReferences}     from 'core/gameReference/GameReferences'
import {Import}             from 'util/DynamicImporter'

import GameReferenceCompanion = GameReferences.Companion

/**
 * @dependsOn<{@link GameReferences}>
 * @indirectlyDependsOn<{@link GameReferenceLoader}>
 * @dependsOn<{@link GameStyles}>
 * @dependsOn<{@link Entities}>
 * @indirectlyDependsOn<{@link EntityLoader}>
 * @recursiveReference<{@link GameStyles}>
 * @singleton
 */
export class GameStyleLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, GameStyle>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: GameStyleLoader

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: ReadonlyMap<PossibleEnglishName, GameStyle>

    public load(): ReadonlyMap<PossibleEnglishName, GameStyle> {
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleEnglishName, GameStyle>()
        forEachByArray(file as Array<Content>, content => {
            const reference = createReference(content,)
            references.set(reference.english as PossibleEnglishName, reference,)
        },)

        if (isInDevelopment)
            console.info(
                '-------------------- "game style" has been loaded --------------------\n',
                references,
                '\n-------------------- "game style" has been loaded --------------------',
            )

        return this.#map = references
    }

}


interface Content
    extends GameContentFrom1And2 {

    readonly isInSuperMarioMaker2: true

    readonly isAvailableFromTheStart_Smm1: NullOrBoolean
    readonly isAvailableFromTheStart_Smm3ds: NullOrTrue
    readonly reference: PossibleAcronym
    readonly nightDesertWindDirection: PossibleNightDesertWindDirection
    readonly nightDesertWindFrequency: PossibleNightDesertWindFrequency

}

function createReference(content: Content,): GameStyle {
    return new GameStyleContainer(
        GameReferenceCompanion.getValueByAcronym(content.reference,).reference.nameContainer,
        content.isInSuperMarioMaker1And3DS,
        content.isAvailableFromTheStart_Smm1,
        content.isAvailableFromTheStart_Smm3ds,
        lazy(() => {
            const gameStyle = Import.GameStyles.Companion.getValueByAcronym(content.reference,)

            return Import.Entities.Companion.values.map(it => it.reference,)
                .filter(reference => gameStyle.get(reference,),)
        },),
        createNightDesertWindTranslationKey(content,),
    )
}

function createNightDesertWindTranslationKey(content: Content,): PossibleNightDesertWindTranslationKey {
    const direction = content.nightDesertWindDirection
    if (direction == null)
        return null
    return `${direction} ${content.nightDesertWindFrequency}` as PossibleNightDesertWindTranslationKey
}
