import type {OffscreenDespawningDownwardVerticalRangeLimitType, OffscreenDespawningHorizontalRangeLimitType, OffscreenDespawningUpwardVerticalRangeLimitType, OffscreenSpawningDownwardVerticalRangeLimitType, OffscreenSpawningHorizontalRangeLimitType, OffscreenSpawningUpwardVerticalRangeLimitType} from '../properties/limit/Loader.types';
import type {EntityLink, PossibleLightSource}                                                                                                                                                                                                                                                            from '../entityTypes';
import type {EntityReferencesTemplate}                                                                                                                                                                                                                                                                   from '../properties/EntityReferences.template';
import type {LimitPropertyTemplate}                                                                                                                                                                                                                                                                      from '../properties/limit/LimitProperty.template';
import type {PossibleEntityCategories}                                                                                                                                                                                                                                                                   from '../category/EntityCategories.types';
import type {IsInPropertyTemplate}                                                                                                                                                                                                                                                                       from '../properties/IsInProperty.template';
import type {SMM2NameTemplate}                                                                                                                                                                                                                                                                           from '../lang/SMM2Name.template';

/**
 * @template
 */
export interface EntityTemplate {

    properties: {
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
        offscreenRange: {
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

