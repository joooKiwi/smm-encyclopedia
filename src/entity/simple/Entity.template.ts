import type {EntityLink, PossibleLightSource, ProjectileEntityLimitType} from '../entityTypes';
import type {EntityReferencesTemplate}                                   from '../properties/EntityReferences.template';
import type {PossibleEntityCategories}                                   from '../category/EntityCategories.types';
import type {PossibleEntityLimits} from '../limit/EntityLimits.types';
import type {PropertyTemplate} from '../properties/Property.template';
import type {SMM2NameTemplate} from '../lang/SMM2Name.template';

/**
 * @template
 */
export interface EntityTemplate {

    properties: {
        //region ---------- Basic properties ----------

        isIn: PropertyTemplate

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

        limits: {
            editor: | PossibleEntityLimits | '?' | null
            whilePlaying: {
                isInGEL: {
                    value: | boolean | 2 | null
                    isSuperGlobal: | boolean | null
                }
                isInPEL: | boolean | null
                isInPJL: ProjectileEntityLimitType
                customLimit: | PossibleEntityLimits | '?' | null
                offscreenRange: {
                    spawning: {
                        horizontal: | number | 'Variable' | null
                        vertical: {
                            upward: | number | null
                            downward: | number | null
                        }
                    }
                    despawning: {
                        horizontal: | number | 'Variable' | 'Infinity' | null
                        vertical: {
                            upward: | number | null
                            downward: | number | null
                        }
                    }
                }
            }
        }

        reference: EntityReferencesTemplate
    }

    name: SMM2NameTemplate

}
