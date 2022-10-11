import type {EditorLimitType_SMM1And3DS, EditorLimitType_SMM2, GeneralEntityLimitType, GeneralGlobalEntityLimitType, OtherLimitCommentType, OtherLimitType, PowerUpEntityLimitType, ProjectileEntityLimitType}             from './Loader.types'
import type {LimitProperty, PossibleEditorLimit_SMM1And3DS, PossibleEditorLimit_SMM2, PossibleIsInGeneralGlobalLimit, PossibleIsInGeneralLimit, PossibleIsInPowerUpLimit, PossibleIsInProjectileLimit, PossibleOtherLimit} from './LimitProperty'
import type {GameStructure}                                                                                                                                                                                                from '../../../game/GameStructure'
import type {ProviderWithKey}                                                                                                                                                                                              from '../../../../util/provider/ProviderWithKey'

import {AbstractProvider}       from '../../../../util/provider/AbstractProvider'
import {LimitPropertyContainer} from './LimitProperty.container'

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
    otherLimit: readonly [OtherLimitType, OtherLimitCommentType,],
]
type ArgumentsReceived = readonly [
    editorLimit: GameStructure<PossibleEditorLimit_SMM1And3DS, PossibleEditorLimit_SMM1And3DS, PossibleEditorLimit_SMM2>,
    generalLimit: readonly [value: PossibleIsInGeneralLimit, superGlobal: PossibleIsInGeneralGlobalLimit,],
    powerUpLimit: PossibleIsInPowerUpLimit,
    projectileLimit: PossibleIsInProjectileLimit,
    otherLimit: PossibleOtherLimit,
]
