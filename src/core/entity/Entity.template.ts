import type {TemplateWithNameTemplate}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               from 'core/_template/TemplateWithName.template'
import type {PossibleAcronym as PossibleBehaviourAcronym}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            from 'core/behaviour/EntityBehaviours.types'
import type {CanRespawnOnlineOutOfABlockType, CanRespawnOnlineType, CanRespawnType}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  from 'core/behaviour/loader.types'
import type {EntityReferencesTemplate}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               from 'core/entity/properties/EntityReferences.template'
import type {IsInPropertyTemplate}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   from 'core/entity/properties/IsInProperty.template'
import type {BasicPropertyTemplate}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  from 'core/entity/properties/basic/BasicProperty.template'
import type {InstrumentPropertyTemplate}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             from 'core/entity/properties/instrument/InstrumentProperty.template'
import type {LimitPropertyTemplate}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  from 'core/entity/properties/limit/LimitProperty.template'
import type {OffscreenDespawningDownwardVerticalRangeLimitType, OffscreenDespawningHorizontalRangeLimitType, OffscreenDespawningUpwardVerticalRangeLimitType, OffscreenSpawningAndDespawningReferencePoint, OffscreenSpawningDownwardVerticalRangeLimitType, OffscreenSpawningHorizontalRangeLimitType, OffscreenSpawningUpwardVerticalRangeLimitType}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               from 'core/entity/properties/limit/loader.types'
import type {PossibleEnglishName as PossibleEnglishName_Category}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    from 'core/entityCategory/EntityCategories.types'
import type {PossibleEnglishName as PossibleEnglishName_Limit}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       from 'core/entityLimit/EntityLimits.types'
import type {CanBeAffectedByATwister, CanBeBrokenOrKilledByABobOmb, CanBeFiredOutOfABulletLauncher, CanBePutInABlock, CanBePutInAClownCar, CanBePutInALakituCloud, CanBePutInASwingingClaw, CanBePutInATree, CanBePutOnATrack, CanBeSpawnedByMagikoopa, CanBeSpawnedByWingedMagikoopa, CanBeStacked, CanBeThrownByALakitu, CanBeThrownByBowserInClownCar, CanBeThrownByBowserJr, CanBeThrownByBowserJrInClownCar, CanBeTransformedByMagikoopa, CanContainOrSpawnAKey, CanGoThroughWalls, CanGoThroughWallsInSM3DW, CanIgniteABobOmb, CanSpawnOutOfAPipe, CanSurviveInTheLavaOrThePoison, HasALightSourceEmittedInSMB, HasAReferenceInMarioMaker, IsAffectedDirectlyByAnOnOrOffState, IsGlobalGroundOrGlobal, PossibleDimension, PossibleDimensionDifferentInSM3DW, PossibleEntityType, PossibleFirstAppearanceInMarioMaker, PossibleLightSource, PossibleMaximumDimension, PossibleMaximumDimensionDifferentInSM3DW, PossibleWeight} from 'core/entityTypes'
import type {PossibleName as PossibleMarioMakerVersion}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              from 'core/version/Versions.types'
import type {NameTemplate}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           from 'lang/name/Name.template'

/** @template */
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
            editorLimit: NullOr<PossibleEnglishName_Limit>
            whilePlaying: NullOr<PossibleEnglishName_Limit>
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
            solo: readonly PossibleBehaviourAcronym[]
            localCoop: readonly PossibleBehaviourAcronym[]
            online: {
                coop: readonly PossibleBehaviourAcronym[]
                versus: readonly PossibleBehaviourAcronym[]
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

    categoryInTheEditor: NullOr<PossibleEnglishName_Category>

}

/** @template */
export interface EntityNameTemplate
    extends NameTemplate {

    hasAReferenceInMarioMaker: HasAReferenceInMarioMaker

}

/** @template */
export interface DimensionTemplate
    extends SimpleDimensionTemplate<PossibleDimension, PossibleMaximumDimension> {

    differentInSM3DW: SimpleDimensionTemplateDifferentInSM3DW

}

export type SimpleDimensionTemplateDifferentInSM3DW = SimpleDimensionTemplate<PossibleDimensionDifferentInSM3DW, PossibleMaximumDimensionDifferentInSM3DW>

export interface SimpleDimensionTemplate<V extends | PossibleDimension | PossibleDimensionDifferentInSM3DW, M extends | PossibleMaximumDimension | PossibleMaximumDimensionDifferentInSM3DW, > {

    value: V

    maximum: M

}