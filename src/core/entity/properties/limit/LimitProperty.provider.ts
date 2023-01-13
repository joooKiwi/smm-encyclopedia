import type {CollectedCoinLimitType, EditorLimitType_SMM1And3DS, EditorLimitType_SMM2, GeneralEntityLimitType, GeneralGlobalEntityLimitType, OtherLimitCommentType, OtherLimitType, PowerUpEntityLimitType, ProjectileEntityLimitType, RenderedObjectLimitType} from 'core/entity/properties/limit/loader.types'
import type {GameStructureForEditorLimit, LimitProperty, PossibleIsInCollectedCoinLimit, PossibleIsInGeneralGlobalLimit, PossibleIsInGeneralLimit, PossibleIsInPowerUpLimit, PossibleIsInProjectileLimit, PossibleIsInRenderedObjectLimit, PossibleOtherLimit}  from 'core/entity/properties/limit/LimitProperty'
import type {ProviderWithKey}                                                                                                                                                                                                                                   from 'util/provider/ProviderWithKey'

import {LimitPropertyContainer} from 'core/entity/properties/limit/LimitProperty.container'
import {AbstractProvider}       from 'util/provider/AbstractProvider'

/**
 * @singleton
 */
export class LimitPropertyProvider
    extends AbstractProvider<Key, LimitProperty>
    implements ProviderWithKey<LimitProperty, Key, ArgumentsReceived> {

    //region -------------------- Singleton usage --------------------

    static #instance?: LimitPropertyProvider

    private constructor() {
        super()
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public get(key: Key, ...argumentsReceived: ArgumentsReceived): LimitProperty {
        return this.everyContainers.if(map => map.has(key))
            .isNotMet(map => map.set(key, new LimitPropertyContainer(...argumentsReceived),))
            .get(key)
    }

}

type Key = readonly [
    editorLimit: readonly [EditorLimitType_SMM1And3DS, EditorLimitType_SMM2,],
    generalLimit: readonly [GeneralEntityLimitType, GeneralGlobalEntityLimitType,],
    powerUpLimit: PowerUpEntityLimitType,
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
