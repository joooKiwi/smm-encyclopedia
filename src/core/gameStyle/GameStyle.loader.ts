import file from 'resources/compiled/Game style.json'

import {lazy} from '@joookiwi/lazy'

import type {GameContentFrom1And2}                                               from 'core/game/Loader.types'
import type {GameStyle, PossibleNightDesertWindTranslationKey}                   from 'core/gameStyle/GameStyle'
import type {PossibleAcronym, PossibleEnglishName}                               from 'core/gameStyle/GameStyles.types'
import type {PossibleNightDesertWindDirection, PossibleNightDesertWindFrequency} from 'core/gameStyle/loader.types'
import type {CompanionEnumByAcronymOrName}                                       from 'util/enumerable/companion/CompanionEnumByAcronymOrName'
import type {Loader}                                                             from 'util/loader/Loader'

import {isInProduction}     from 'variables'
import {GameStyleContainer} from 'core/gameStyle/GameStyle.container'
import {GameReferences}     from 'core/gameReference/GameReferences'
import {Import}             from 'util/DynamicImporter'

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

    #map?: Map<PossibleEnglishName, GameStyle>

    public load(): ReadonlyMap<PossibleEnglishName, GameStyle> {
        if (this.#map != null)
            return this.#map

        const gameReferenceCompanion = GameReferences.CompanionEnum.get
        const references = new Map<PossibleEnglishName, GameStyle>()
        let index = file.length
        while (index-- > 0) {
            const reference = createReference(file[index] as Content, gameReferenceCompanion,)
            references.set(reference.english as PossibleEnglishName, reference,)
        }

        if (!isInProduction)
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

    readonly isAvailableFromTheStart_SMM1: NullOrBoolean
    readonly reference: PossibleAcronym
    readonly nightDesertWindDirection: PossibleNightDesertWindDirection
    readonly nightDesertWindFrequency: PossibleNightDesertWindFrequency

}

/** A type-alias definition of the {@link GameReferences.CompanionEnum} */
type GameReferenceCompanion = CompanionEnumByAcronymOrName<GameReferences, typeof GameReferences>

function createReference(content: Content, gameReferenceCompanion: GameReferenceCompanion,): GameStyle {
    return new GameStyleContainer(
        gameReferenceCompanion.getValueByAcronym(content.reference,).reference.nameContainer,
        content.isInSuperMarioMaker1And3DS, content.isAvailableFromTheStart_SMM1,
        lazy(() => {
            const gameStyle = Import.GameStyles.CompanionEnum.get.getValueByAcronym(content.reference,)

            return Import.Entities.CompanionEnum.get.values.map(it => it.reference,)
                .filter(reference => gameStyle.get(reference,),)
                .toArray()
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
