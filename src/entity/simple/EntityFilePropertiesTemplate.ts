import {CategoryType, EntityLimit, EntityLink, PossibleLightSource, ProjectileEntityLimitType} from "../entityTypes";

export interface EntityFilePropertiesTemplate {

    properties: {
        //region ---------- Basic properties ----------
        isIn: {
            superMarioMaker1: boolean
            superMarioMaker2: boolean

            superMarioBrosStyle: boolean
            superMarioBros3Style: boolean
            superMarioWorldStyle: boolean
            newSuperMarioBrosUStyle: boolean
            superMario3DWorldStyle: boolean

            dayTheme: boolean
            nightTheme: null | boolean
        }

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
                    loading: {
                        horizontal: null | number | 'Variable'
                        vertical: {
                            upward: null | number
                            downward: null | number
                        }
                    }
                    unloading: {
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

            otherReference: null | EntityFilePropertiesTemplate[]
        }
    }

    name: {
        japanese: null | string

        english: {
            simple: null | string
            american: null | string
            european: null | string
        }

        spanish: {
            simple: null | string
            american: null | string
            european: null | string
        }

        french: {
            simple: null | string
            canadian: null | string
            european: null | string
        }

        dutch: null | string

        german: null | string

        italian: null | string

        russian: null | string

        korean: null | string

        chinese: {
            simple: null | string
            simplified: null | string
            traditional: null | string
        }
    },

}