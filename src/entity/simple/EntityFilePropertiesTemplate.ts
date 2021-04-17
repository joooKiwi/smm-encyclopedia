import {
    CategoryType,
    EntityLimit,
    EntityLink,
    NullableBoolean,
    NullableBooleanOrNSMBU,
    NullableBooleanOrSM3DW,
    NullableNumber,
    PossibleLightSource,
    ProjectileEntityLimitType,
    UnknownOrBoolean,
    UnknownOrNullableBoolean
} from "../entityTypes";

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
            nightTheme: NullableBoolean
        }

        categoryInTheEditor: null | CategoryType

        hasAMushroomVariant: NullableBoolean
        canBeInAParachute: UnknownOrNullableBoolean
        canHaveWings: UnknownOrBoolean
        //endregion ---------- Basic properties ----------

        //region ---------- Specific properties ----------
        canContainOrSpawnAKey: NullableBoolean

        canBePutInAOnOffBlock: NullableBoolean

        canBePutOnATrack: {
            value: UnknownOrNullableBoolean
            editorLimit: EntityLink
            whilePlaying: EntityLink
        }

        canSpawnOutOfAPipe: NullableBoolean

        canBePutInASwingingClaw: NullableBoolean

        canBeThrownByALakitu: UnknownOrNullableBoolean
        canBePutInALakituCloud: UnknownOrNullableBoolean

        canBePutInAClownCar: NullableBoolean

        canBeFiredOutOfABulletLauncher: NullableBoolean

        canBePutInABlock: NullableBoolean

        canBePutInATree: NullableBoolean

        lightSourceEmitted: {
            value: PossibleLightSource
            isInSMB: NullableBoolean
        }

        canIgniteABobOmb: NullableBooleanOrNSMBU

        canGoThroughWalls: NullableBoolean

        canBeStacked: NullableBoolean

        isGlobalGroundOrGlobal: NullableBooleanOrSM3DW

        canMakeASoundOutOfAMusicBlock: UnknownOrNullableBoolean
        //endregion ---------- Specific properties ----------

        limits: {
            editor: EntityLimit | '?'
            whilePlaying: {
                isInGEL: {
                    value: NullableBoolean | 2
                    isSuperGlobal: NullableBoolean
                }
                isInPEL: NullableBoolean
                isInPJL: ProjectileEntityLimitType
                customLimit: EntityLimit
                offscreenRange: {
                    loading: {
                        horizontal: NullableNumber | 'Variable'
                        vertical: {
                            upward: NullableNumber
                            downward: NullableNumber
                        }
                    }
                    unloading: {
                        horizontal: NullableNumber | 'Variable'
                        vertical: {
                            upward: NullableNumber
                            downward: NullableNumber
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