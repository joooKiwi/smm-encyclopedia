import type {CanBeAffectedByATwister, CanBeFiredOutOfABulletLauncher, CanBeInAParachute, CanBePutInABlock, CanBePutInAClownCar, CanBePutInALakituCloud, CanBePutInASwingingClaw, CanBePutInATree, CanBePutOnATrack, CanBeStacked, CanBeThrownByALakitu, CanContainOrSpawnAKey, CanGoThroughWalls, CanHaveWings, CanIgniteABobOmb, CanMakeASoundOutOfAMusicBlock, CanSpawnOutOfAPipe, CanSurviveInTheLavaOrThePoison, EntityLink, HasALightSourceEmittedInSMB, HasAMushroomVariant, HasAReferenceInMarioMaker, IsAffectedDirectlyByAnOnOrOffState, IsGlobalGroundOrGlobal, PossibleEntityType, PossibleLightSource} from '../entityTypes';
import type {CanRespawnOnlineOutOfABlockType, CanRespawnOnlineType, CanRespawnType, EveryPossibleLinkedBehaviourAcronymArray}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      from '../behaviours/Loader.types';
import type {EntityReferencesTemplate}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             from '../properties/EntityReferences.template';
import type {IsInPropertyTemplate}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 from '../properties/IsInProperty.template';
import type {LimitPropertyTemplate}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                from '../properties/limit/LimitProperty.template';
import type {OffscreenDespawningDownwardVerticalRangeLimitType, OffscreenDespawningHorizontalRangeLimitType, OffscreenDespawningUpwardVerticalRangeLimitType, OffscreenSpawningAndDespawningReferencePoint, OffscreenSpawningDownwardVerticalRangeLimitType, OffscreenSpawningHorizontalRangeLimitType, OffscreenSpawningUpwardVerticalRangeLimitType}                                                                                                                                                                                                                                                             from '../properties/limit/Loader.types';
import type {PossibleEntityCategoriesName}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         from '../category/EntityCategories.types';
import type {SMM2NameTemplateWithPortuguese}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       from '../lang/SMM2Name.template';

/**
 * @template
 */
export interface EntityTemplate {

    properties: {
        editorType: PossibleEntityType

        //region ---------- Basic properties ----------

        isIn: IsInPropertyTemplate

        categoryInTheEditor: | PossibleEntityCategoriesName | null

        hasAMushroomVariant: HasAMushroomVariant
        canBeInAParachute: CanBeInAParachute
        canHaveWings: CanHaveWings

        //endregion ---------- Basic properties ----------

        //region ---------- Specific properties ----------

        canContainOrSpawnAKey: CanContainOrSpawnAKey

        isAffectedDirectlyByAnOnOrOffState: IsAffectedDirectlyByAnOnOrOffState

        canBePutOnATrack: {
            value: CanBePutOnATrack
            editorLimit: | EntityLink | null
            whilePlaying: | EntityLink | null
        }

        canSpawnOutOfAPipe: CanSpawnOutOfAPipe

        canBePutInASwingingClaw: CanBePutInASwingingClaw

        canBeThrownByALakitu: CanBeThrownByALakitu
        canBePutInALakituCloud: CanBePutInALakituCloud

        canBePutInAClownCar: CanBePutInAClownCar

        canBeFiredOutOfABulletLauncher: CanBeFiredOutOfABulletLauncher

        canBePutInABlock: CanBePutInABlock

        canBePutInATree: CanBePutInATree

        lightSourceEmitted: {
            value: PossibleLightSource
            isInSMB: HasALightSourceEmittedInSMB
        }

        canSurviveInTheLavaOrThePoison: CanSurviveInTheLavaOrThePoison

        canIgniteABobOmb: CanIgniteABobOmb

        canBeAffectedByATwister: CanBeAffectedByATwister

        canGoThroughWalls: CanGoThroughWalls

        canBeStacked: CanBeStacked

        isGlobalGroundOrGlobal: IsGlobalGroundOrGlobal

        canMakeASoundOutOfAMusicBlock: CanMakeASoundOutOfAMusicBlock

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

    name: EntityNameTemplate

}

interface EntityNameTemplate
    extends SMM2NameTemplateWithPortuguese {

    hasAReferenceInMarioMaker: HasAReferenceInMarioMaker

}