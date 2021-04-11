import {
    CategoryType,
    EntityLimit,
    EntityLink,
    NullableBoolean,
    NullableBooleanOrNSMBU,
    NullableBooleanOrSM3DW, NullableNumber,
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

        limits:{
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
                    horizontal: NullableNumber | 'Variable'
                    vertical: NullableNumber
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
        }
    }

    name: {
        japanese: string

        english: {
            simple: string
            american: null | string
            european: null | string
        }

        spanish: {
            simple: string
            american: null | string
            european: null | string
        }

        french: {
            simple: string
            canadian: null | string
            european: null | string
        }

        dutch: string

        german: string

        italian: string

        russian: string

        korean: string

        chinese: {
            simple: string
            simplified: null | string
            traditional: null | string
        }
    }

}