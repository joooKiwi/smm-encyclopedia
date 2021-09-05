import type {CanRespawnOnlineOutOfABlockType, CanRespawnOnlineType, CanRespawnType, EntityLink, EveryPossibleLinkedBehaviourAcronymArray, PossibleEntityType, PossibleLightSource}                                                                                                                                                                     from '../entityTypes';
import type {EntityReferencesTemplate}                                                                                                                                                                                                                                                                                                                 from '../properties/EntityReferences.template';
import type {IsInPropertyTemplate}                                                                                                                                                                                                                                                                                                                     from '../properties/IsInProperty.template';
import type {LimitPropertyTemplate}                                                                                                                                                                                                                                                                                                                    from '../properties/limit/LimitProperty.template';
import type {OffscreenDespawningDownwardVerticalRangeLimitType, OffscreenDespawningHorizontalRangeLimitType, OffscreenDespawningUpwardVerticalRangeLimitType, OffscreenSpawningAndDespawningReferencePoint, OffscreenSpawningDownwardVerticalRangeLimitType, OffscreenSpawningHorizontalRangeLimitType, OffscreenSpawningUpwardVerticalRangeLimitType} from '../properties/limit/Loader.types';
import type {PossibleEntityCategories}                                                                                                                                                                                                                                                                                                                 from '../category/EntityCategories.types';
import type {SMM2NameTemplate}                                                                                                                                                                                                                                                                                                                         from '../lang/SMM2Name.template';

/**
 * @template
 */
export interface EntityTemplate {

    properties: {
        editorType: PossibleEntityType

        //region ---------- Basic properties ----------

        isIn: IsInPropertyTemplate

        categoryInTheEditor: | PossibleEntityCategories | null

        hasAMushroomVariant: | boolean | null
        canBeInAParachute: | boolean | '?' | null
        canHaveWings: boolean | '?'

        //endregion ---------- Basic properties ----------

        //region ---------- Specific properties ----------

        canContainOrSpawnAKey: | boolean | null

        canBePutInAOnOffBlock: | boolean | null

        canBePutOnATrack: {
            value: | boolean | '?' | null
            editorLimit: | EntityLink | null
            whilePlaying: | EntityLink | null
        }

        canSpawnOutOfAPipe: | boolean | null

        canBePutInASwingingClaw: | boolean | null

        canBeThrownByALakitu: | boolean | '?' | null
        canBePutInALakituCloud: | boolean | '?' | null

        canBePutInAClownCar: | boolean | null

        canBeFiredOutOfABulletLauncher: | boolean | null

        canBePutInABlock: | boolean | null

        canBePutInATree: | boolean | null

        lightSourceEmitted: {
            value: PossibleLightSource
            isInSMB: | boolean | null
        }

        canIgniteABobOmb: | boolean | 'NSMBU' | null

        canGoThroughWalls: | boolean | null

        canBeStacked: | boolean | null

        isGlobalGroundOrGlobal: | boolean | 'SM3DW' | null

        canMakeASoundOutOfAMusicBlock: | boolean | '?' | null

        //endregion ---------- Specific properties ----------

        limits: LimitPropertyTemplate
        canRespawn: {
            value: CanRespawnType
            online: {
                value: CanRespawnOnlineType
                insideABlock: CanRespawnOnlineOutOfABlockType
            }
        }
        behaviour: {
            solo: EveryPossibleLinkedBehaviourAcronymArray
            localCoop: EveryPossibleLinkedBehaviourAcronymArray
            online: {
                coop: EveryPossibleLinkedBehaviourAcronymArray
                versus: EveryPossibleLinkedBehaviourAcronymArray
            }
        }
        offscreenRange: {
            referencePoint: OffscreenSpawningAndDespawningReferencePoint
            spawning: {
                horizontal: OffscreenSpawningHorizontalRangeLimitType
                vertical: {
                    upward: OffscreenSpawningUpwardVerticalRangeLimitType
                    downward: OffscreenSpawningDownwardVerticalRangeLimitType
                }
            }
            despawning: {
                horizontal: OffscreenDespawningHorizontalRangeLimitType
                vertical: {
                    upward: OffscreenDespawningUpwardVerticalRangeLimitType
                    downward: OffscreenDespawningDownwardVerticalRangeLimitType
                }
            }
        }

        reference: EntityReferencesTemplate
    }

    name: SMM2NameTemplate

}

