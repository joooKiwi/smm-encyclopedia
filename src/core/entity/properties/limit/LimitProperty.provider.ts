import type {CollectedCoinLimitType, EditorLimitType_SMM1And3DS, EditorLimitType_SMM2, GeneralEntityLimitType, GeneralGlobalEntityLimitType, OtherLimitCommentType, OtherLimitType, PowerUpLimitType, ProjectileEntityLimitType, RenderedObjectLimitType}      from 'core/entity/properties/limit/loader.types'
import type {GameStructureForEditorLimit, LimitProperty, PossibleIsInCollectedCoinLimit, PossibleIsInGeneralGlobalLimit, PossibleIsInGeneralLimit, PossibleIsInPowerUpLimit, PossibleIsInProjectileLimit, PossibleIsInRenderedObjectLimit, PossibleOtherLimit} from 'core/entity/properties/limit/LimitProperty'
import type {ProviderWithExplicitKey}                                                                                                                                                                                                                          from 'util/provider/ProviderWithExplicitKey'

import {LimitPropertyContainer} from 'core/entity/properties/limit/LimitProperty.container'
import {isArrayEquals}          from 'util/utilitiesMethods'
import {AbstractProvider}       from 'util/provider/AbstractProvider'

/** @singleton */
export class LimitPropertyProvider
    extends AbstractProvider<Key, LimitProperty>
    implements ProviderWithExplicitKey<LimitProperty, Key, ArgumentsReceived> {

    //region -------------------- Singleton usage --------------------

    static #instance?: LimitPropertyProvider

    private constructor() {
        super()
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public get(key: Key, editorLimit: GameStructureForEditorLimit, generalLimit: readonly [value: PossibleIsInGeneralLimit, superGlobal: PossibleIsInGeneralGlobalLimit,], powerUpLimit: PossibleIsInPowerUpLimit, projectileLimit: PossibleIsInProjectileLimit, renderedObjectLimit: PossibleIsInRenderedObjectLimit, collectedCoinLimit: PossibleIsInCollectedCoinLimit, otherLimit: PossibleOtherLimit,): LimitProperty {
        const everyContainer = this.everyContainers
        let keyReferenced = key
        for (let [keyInMap,] of everyContainer) {
            if (!isArrayEquals(keyInMap, key,))
                continue
            keyReferenced = keyInMap
            break
        }
        if (keyReferenced === key)
            everyContainer.set(key, new LimitPropertyContainer(editorLimit, generalLimit, powerUpLimit, projectileLimit, renderedObjectLimit, collectedCoinLimit, otherLimit,),)
        return everyContainer.get(keyReferenced,)!
    }

}

type Key = readonly [
    editorLimit: readonly [EditorLimitType_SMM1And3DS, EditorLimitType_SMM2,],
    generalLimit: readonly [GeneralEntityLimitType, GeneralGlobalEntityLimitType,],
    powerUpLimit: PowerUpLimitType,
    projectileLimit: ProjectileEntityLimitType,
    renderedObjectLimit: RenderedObjectLimitType,
    collectedCoinLimit: CollectedCoinLimitType,
    otherLimit: readonly [OtherLimitType, OtherLimitCommentType,],
]
type ArgumentsReceived = readonly [
    editorLimit: GameStructureForEditorLimit,
    generalLimit: readonly [value: PossibleIsInGeneralLimit, superGlobal: PossibleIsInGeneralGlobalLimit,],
    powerUpLimit: PossibleIsInPowerUpLimit,
    projectileLimit: PossibleIsInProjectileLimit,
    renderedObjectLimit: PossibleIsInRenderedObjectLimit,
    collectedCoinLimit: PossibleIsInCollectedCoinLimit,
    otherLimit: PossibleOtherLimit,
]
