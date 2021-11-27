import type {BasicPropertyTemplate}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                from '../properties/basic/BasicProperty.template';
import type {CanBeAffectedByATwister, CanBeFiredOutOfABulletLauncher, CanBePutInABlock, CanBePutInAClownCar, CanBePutInALakituCloud, CanBePutInASwingingClaw, CanBePutInATree, CanBePutOnATrack, CanBeSpawnedByMagikoopa, CanBeSpawnedByWingedMagikoopa, CanBeStacked, CanBeThrownByALakitu, CanBeThrownByBowserInClownCar, CanBeThrownByBowserJr, CanBeThrownByBowserJrInClownCar, CanBeTransformedByMagikoopa, CanContainOrSpawnAKey, CanGoThroughWalls, CanGoThroughWallsInSM3DW, CanIgniteABobOmb, CanMakeASoundOutOfAMusicBlock, CanSpawnOutOfAPipe, CanSurviveInTheLavaOrThePoison, EntityLink, HasALightSourceEmittedInSMB, HasAReferenceInMarioMaker, IsAffectedDirectlyByAnOnOrOffState, IsGlobalGroundOrGlobal, PossibleEntityType, PossibleLightSource} from '../entityTypes';
import type {CanRespawnOnlineOutOfABlockType, CanRespawnOnlineType, CanRespawnType, EveryPossibleLinkedBehaviourAcronymArray}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      from '../behaviours/Loader.types';
import type {EntityReferencesTemplate}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             from '../properties/EntityReferences.template';
import type {IsInPropertyTemplate}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 from '../properties/IsInProperty.template';
import type {LimitPropertyTemplate}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                from '../properties/limit/LimitProperty.template';
import type {OffscreenDespawningDownwardVerticalRangeLimitType, OffscreenDespawningHorizontalRangeLimitType, OffscreenDespawningUpwardVerticalRangeLimitType, OffscreenSpawningAndDespawningReferencePoint, OffscreenSpawningDownwardVerticalRangeLimitType, OffscreenSpawningHorizontalRangeLimitType, OffscreenSpawningUpwardVerticalRangeLimitType}                                                                                                                                                                                                                                                                                                                                                                                                             from '../properties/limit/Loader.types';
import type {NameTemplateWithOptionalLanguages}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    from '../../lang/name/Name.template';
import type {PossibleEnglishName as PossibleEntityCategoryEnglishName}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             from '../category/EntityCategories.types';
import type {TemplateWithNameTemplate}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             from '../_template/TemplateWithName.template';

/**
 * @template
 */
export interface EntityTemplate
    extends TemplateWithNameTemplate<EntityNameTemplate> {

    properties: {
        entityType: PossibleEntityType

        //region ---------- Basic properties ----------

        isIn: IsInPropertyTemplate

        basic: BasicPropertyTemplate

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

        canGoThroughWalls: {
            value: CanGoThroughWalls,
            inSM3DW: CanGoThroughWallsInSM3DW,
        }

        canBeStacked: CanBeStacked

        isGlobalGroundOrGlobal: IsGlobalGroundOrGlobal

        canMakeASoundOutOfAMusicBlock: CanMakeASoundOutOfAMusicBlock

        //endregion ---------- Specific properties ----------
        //region -------------------- Bowser / Bowser Jr. / Magikoopa properties --------------------

        bowserBowserJrMagikoopa: {
            bowser: {
                clownCar: CanBeThrownByBowserInClownCar
            }
            bowserJr: {
                value: CanBeThrownByBowserJr
                clownCar: CanBeThrownByBowserJrInClownCar
            }
            magikoopa: {
                transformed: CanBeTransformedByMagikoopa
                spawn: {
                    value: CanBeSpawnedByMagikoopa
                    wing: CanBeSpawnedByWingedMagikoopa
                }
            }
        }

        //region -------------------- Bowser / Bowser Jr. / Magikoopa properties --------------------

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

    categoryInTheEditor: | PossibleEntityCategoryEnglishName | null

}

/**
 * @template
 */
export interface EntityNameTemplate
    extends NameTemplateWithOptionalLanguages {

    hasAReferenceInMarioMaker: HasAReferenceInMarioMaker

}