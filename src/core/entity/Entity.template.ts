import type {BasicPropertyTemplate}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  from './properties/basic/BasicProperty.template';
import type {CanBeAffectedByATwister, CanBeBrokenOrKilledByABobOmb, CanBeFiredOutOfABulletLauncher, CanBePutInABlock, CanBePutInAClownCar, CanBePutInALakituCloud, CanBePutInASwingingClaw, CanBePutInATree, CanBePutOnATrack, CanBeSpawnedByMagikoopa, CanBeSpawnedByWingedMagikoopa, CanBeStacked, CanBeThrownByALakitu, CanBeThrownByBowserInClownCar, CanBeThrownByBowserJr, CanBeThrownByBowserJrInClownCar, CanBeTransformedByMagikoopa, CanContainOrSpawnAKey, CanGoThroughWalls, CanGoThroughWallsInSM3DW, CanIgniteABobOmb, CanSpawnOutOfAPipe, CanSurviveInTheLavaOrThePoison, HasALightSourceEmittedInSMB, HasAReferenceInMarioMaker, IsAffectedDirectlyByAnOnOrOffState, IsGlobalGroundOrGlobal, PossibleDimension, PossibleDimensionDifferentInSM3DW, PossibleEntityType, PossibleFirstAppearanceInMarioMaker, PossibleLightSource, PossibleMaximumDimension, PossibleMaximumDimensionDifferentInSM3DW, PossibleWeight} from '../entityTypes';
import type {CanRespawnOnlineOutOfABlockType, CanRespawnOnlineType, CanRespawnType, EveryPossibleLinkedBehaviourAcronymArray}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        from '../behaviour/Loader.types';
import type {EntityReferencesTemplate}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               from './properties/EntityReferences.template';
import type {IsInPropertyTemplate}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   from './properties/IsInProperty.template';
import type {InstrumentPropertyTemplate}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             from './properties/instrument/InstrumentProperty.template';
import type {LimitPropertyTemplate}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  from './properties/limit/LimitProperty.template';
import type {OffscreenDespawningDownwardVerticalRangeLimitType, OffscreenDespawningHorizontalRangeLimitType, OffscreenDespawningUpwardVerticalRangeLimitType, OffscreenSpawningAndDespawningReferencePoint, OffscreenSpawningDownwardVerticalRangeLimitType, OffscreenSpawningHorizontalRangeLimitType, OffscreenSpawningUpwardVerticalRangeLimitType}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               from './properties/limit/Loader.types';
import type {NameTemplateWithOptionalLanguages}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      from '../../lang/name/Name.template';
import type {PossibleEnglishName as PossibleEnglishName_Category}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    from '../entityCategory/EntityCategories.types';
import type {PossibleEnglishName as PossibleEnglishName_Limit}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       from '../entityLimit/EntityLimits.types';
import type {PossibleName as PossibleMarioMakerVersion}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              from '../version/Versions.types';
import type {TemplateWithNameTemplate}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               from '../_template/TemplateWithName.template';

/**
 * @template
 */
export interface EntityTemplate
    extends TemplateWithNameTemplate<EntityNameTemplate> {

    properties: {
        entityType: PossibleEntityType

        firstAppearance: {
            game: PossibleFirstAppearanceInMarioMaker
            version: PossibleMarioMakerVersion
        }

        //region ---------- Basic properties ----------

        isIn: IsInPropertyTemplate

        basic: BasicPropertyTemplate

        //endregion ---------- Basic properties ----------

        //region ---------- Specific properties ----------

        canContainOrSpawnAKey: CanContainOrSpawnAKey

        isAffectedDirectlyByAnOnOrOffState: IsAffectedDirectlyByAnOnOrOffState

        canBePutOnATrack: {
            value: CanBePutOnATrack
            editorLimit: | PossibleEnglishName_Limit | null
            whilePlaying: | PossibleEnglishName_Limit | null
        }

        canSpawnOutOfAPipe: CanSpawnOutOfAPipe

        canBePutInASwingingClaw: CanBePutInASwingingClaw

        canBeThrownByALakitu: CanBeThrownByALakitu
        canBePutInALakituCloud: CanBePutInALakituCloud

        canBePutInAClownCar: CanBePutInAClownCar

        canBeFiredOutOfABulletLauncher: CanBeFiredOutOfABulletLauncher

        canBePutInABlock: CanBePutInABlock

        canBePutInATree: CanBePutInATree

        weight: PossibleWeight

        lightSourceEmitted: {
            value: PossibleLightSource
            isInSMB: HasALightSourceEmittedInSMB
        }

        canSurviveInTheLavaOrThePoison: CanSurviveInTheLavaOrThePoison

        bobOmb: {
            canIgnite: CanIgniteABobOmb
            canBeBrokenOrKilled: CanBeBrokenOrKilledByABobOmb
        }

        canBeAffectedByATwister: CanBeAffectedByATwister

        canGoThroughWalls: {
            value: CanGoThroughWalls,
            inSM3DW: CanGoThroughWallsInSM3DW,
        }

        canBeStacked: CanBeStacked

        isGlobalGroundOrGlobal: IsGlobalGroundOrGlobal

        sound: InstrumentPropertyTemplate

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

        //endregion -------------------- Bowser / Bowser Jr. / Magikoopa properties --------------------

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
        dimension: DimensionTemplate

        reference: EntityReferencesTemplate
    }

    categoryInTheEditor: | PossibleEnglishName_Category | null

}

/**
 * @template
 */
export interface EntityNameTemplate
    extends NameTemplateWithOptionalLanguages {

    hasAReferenceInMarioMaker: HasAReferenceInMarioMaker

}

/**
 * @template
 */
export interface DimensionTemplate
    extends SimpleDimensionTemplate<PossibleDimension, PossibleMaximumDimension> {

    differentInSM3DW: SimpleDimensionTemplateDifferentInSM3DW

}

export type SimpleDimensionTemplateDifferentInSM3DW = SimpleDimensionTemplate<PossibleDimensionDifferentInSM3DW, PossibleMaximumDimensionDifferentInSM3DW>;

export interface SimpleDimensionTemplate<V extends | PossibleDimension | PossibleDimensionDifferentInSM3DW, M extends | PossibleMaximumDimension | PossibleMaximumDimensionDifferentInSM3DW, > {

    value: V

    maximum: M

}