import {CategoryType, EntityLimit, EntityLink, PossibleLightSource, ProjectileEntityLimitType} from "../entityTypes";
import {SMM2NameTemplate} from "../lang/SMM2NameTemplate";
import {IsInPropertyTemplate} from "../properties/IsInPropertyTemplate";

export interface EntityFilePropertiesTemplate {

    properties: {
        //region ---------- Basic properties ----------
        isIn: IsInPropertyTemplate

        categoryInTheEditor: null | CategoryType

        hasAMushroomVariant: null | boolean
        canBeInAParachute: null | boolean | '?'
        canHaveWings: boolean | '?'
        //endregion ---------- Basic properties ----------

        //region ---------- Specific properties ----------
        canContainOrSpawnAKey: null | boolean

        canBePutInAOnOffBlock: null | boolean

        canBePutOnATrack: {
            value: null | boolean | '?'
            editorLimit: EntityLink
            whilePlaying: EntityLink
        }

        canSpawnOutOfAPipe: null | boolean

        canBePutInASwingingClaw: null | boolean

        canBeThrownByALakitu: null | boolean | '?'
        canBePutInALakituCloud: null | boolean | '?'

        canBePutInAClownCar: null | boolean

        canBeFiredOutOfABulletLauncher: null | boolean

        canBePutInABlock: null | boolean

        canBePutInATree: null | boolean

        lightSourceEmitted: {
            value: PossibleLightSource
            isInSMB: null | boolean
        }

        canIgniteABobOmb: null | boolean | 'NSMBU'

        canGoThroughWalls: null | boolean

        canBeStacked: null | boolean

        isGlobalGroundOrGlobal: null | boolean | 'SM3DW'

        canMakeASoundOutOfAMusicBlock: null | boolean | '?'
        //endregion ---------- Specific properties ----------

        limits: {
            editor: EntityLimit | '?'
            whilePlaying: {
                isInGEL: {
                    value: null | boolean | 2
                    isSuperGlobal: null | boolean
                }
                isInPEL: null | boolean
                isInPJL: ProjectileEntityLimitType
                customLimit: EntityLimit
                offscreenRange: {
                    spawning: {
                        horizontal: null | number | 'Variable'
                        vertical: {
                            upward: null | number
                            downward: null | number
                        }
                    }
                    despawning: {
                        horizontal: null | number | 'Variable' | 'Infinity'
                        vertical: {
                            upward: null | number
                            downward: null | number
                        }
                    }
                }
            }
        }

        reference: {
            dayTheme: EntityLink
            nightTheme: null | EntityLink

            superMarioBrosStyle: EntityLink
            superMarioBros3Style: EntityLink
            superMarioWorldStyle: EntityLink
            newSuperMarioBrosUStyle: EntityLink
            superMario3DWorldStyle: null | EntityLink

            groundTheme: EntityLink
            undergroundTheme: EntityLink
            underwaterTheme: EntityLink
            desertTheme: null | EntityLink
            snowTheme: null | EntityLink
            skyTheme: null | EntityLink
            forestTheme: null | EntityLink
            ghostHouseTheme: EntityLink
            airshipTheme: EntityLink
            castleTheme: EntityLink

            all: null | EntityFilePropertiesTemplate[]
        }
    }

    name: SMM2NameTemplate

}