import {
    CategoryType,
    EntityLimit,
    EntityLink,
    NullableBoolean,
    NullableBooleanOrNSMBU,
    NullableBooleanOrSM3DW,
    NullableNumber,
    NullableString,
    PossibleLightSource,
    ProjectileEntityLimitType,
    UnknownOrBoolean,
    UnknownOrNullableBoolean
} from "../entityTypes";
import CSVLoader from "../../loader/CSVLoader";
import everyEntities from "../../resources/Every Super Mario Maker 2 entities properties - Entities.csv";
import memoizeOne from "memoize-one";
import {EntityFilePropertiesTemplate} from "./EntityFilePropertiesTemplate";

type EntityFilePropertiesArray = [
    //region ---------- Basic properties ----------
    isInSuperMarioMaker1: boolean,
    isInSuperMarioMaker2: boolean,

    isInSuperMarioBros: boolean,
    isInSuperMarioBros3: boolean,
    isInSuperMarioWorld: boolean,
    isInNewSuperMarioBrosU: boolean,
    isInSuperMario3DWorld: boolean,

    isInDayTheme: boolean,
    isInNightTheme: NullableBoolean,

    categoryInTheEditor: null | CategoryType,

    hasAMushroomVariant: NullableBoolean,
    canBeInAParachute: UnknownOrNullableBoolean,
    canHaveWings: UnknownOrBoolean,
    //endregion ---------- Basic properties ----------

    //region ---------- Specific properties ----------
    canContainOrSpawnAKey: NullableBoolean,

    canBePutInAOnOffBlock: NullableBoolean,

    canBePutOnATrack: UnknownOrNullableBoolean,
    editorLimit_canBePutOnATrack: EntityLimit,
    whilePlaying_canBePutOnATrack: EntityLimit,

    canSpawnOutOfAPipe: NullableBoolean,

    canBePutInASwingingClaw: NullableBoolean,

    canBeThrownByALakitu: UnknownOrNullableBoolean,
    canBePutInALakituCloud: UnknownOrNullableBoolean,

    canBePutInAClownCar: NullableBoolean,

    canBeFiredOutOfABulletLauncher: NullableBoolean,

    canBePutInABlock: NullableBoolean,

    canBePutInATree: NullableBoolean,

    lightSourceEmitted: PossibleLightSource,
    lightSourceEmitted_isInSMB: NullableBoolean,

    canIgniteABobOmb: NullableBooleanOrNSMBU,

    canGoThroughWalls: NullableBoolean,

    canBeStacked: NullableBoolean,

    isGlobalGroundOrGlobal: NullableBooleanOrSM3DW,
    canMakeASoundOutOfAMusicBlock: UnknownOrNullableBoolean,
    //endregion ---------- Specific properties ----------

    //region ---------- Entity limit properties ----------
    editorLimit: EntityLimit | '?',

    whilePlaying_isInGEL: NullableBoolean | 2,
    whilePlaying_isInGEL_isSuperGlobal: NullableBoolean,

    whilePlaying_isInPEL: NullableBoolean,

    whilePlaying_isInPJL: ProjectileEntityLimitType,

    whilePlaying_customLimit: EntityLimit,

    whilePlaying_offscreenHorizontalRange: NullableNumber | 'Variable',
    whilePlaying_offscreenVerticalRange: NullableNumber,
    //endregion ---------- Entity limit properties ----------

    //region ---------- Reference on specific condition properties ----------
    isInDayTheme: EntityLink,
    isInNightTheme: null | EntityLink,

    inGroundTheme: EntityLink,
    inUndergroundTheme: EntityLink,
    inUnderwaterTheme: EntityLink,
    inDesertTheme: null | EntityLink,
    inSnowTheme: null | EntityLink,
    inSkyTheme: null | EntityLink,
    inForestTheme: null | EntityLink,
    inGhostHouseTheme: EntityLink,
    inAirshipTheme: EntityLink,
    inCastleTheme: EntityLink,

    inSMBGameStyle: EntityLink,
    inSMB3GameStyle: EntityLink,
    inSMWGameStyle: EntityLink,
    inNSMBUGameStyle: EntityLink,
    inSM3DWGameStyle: null | EntityLink,
    //endregion ---------- Reference on specific condition properties ----------

    //region ---------- Language properties ----------
    japanese: NullableString,

    english: NullableString,
    americanEnglish: NullableString,
    europeanEnglish: NullableString,

    spanish: NullableString,
    americanSpanish: NullableString,
    europeanSpanish: NullableString,

    french: NullableString,
    canadianFrench: NullableString,
    europeanFrench: NullableString,

    dutch: NullableString,

    german: NullableString,

    italian: NullableString,

    russian: NullableString,

    korean: NullableString,

    chinese: NullableString,
    simplifiedChinese: NullableString,
    tradionalChinese: NullableString,
    //endregion ---------- Language properties ----------
];

export function loadEveryEntities() {
    const [unknownCharacter, thisText,] = ['?', 'this',];
    return memoizeOne(() => new CSVLoader<EntityFilePropertiesArray, EntityFilePropertiesTemplate>(everyEntities, arrayOfContent => ({
        properties: {
            //region ---------- Basic properties ----------
            isIn: {
                superMarioMaker1: arrayOfContent[0],
                superMarioMaker2: arrayOfContent[1],

                superMarioBrosStyle: arrayOfContent[2],
                superMarioBros3Style: arrayOfContent[3],
                superMarioWorldStyle: arrayOfContent[4],
                newSuperMarioBrosUStyle: arrayOfContent[5],
                superMario3DWorldStyle: arrayOfContent[6],

                dayTheme: arrayOfContent[7],
                nightTheme: arrayOfContent[8],
            },

            categoryInTheEditor: arrayOfContent[9],

            hasAMushroomVariant: arrayOfContent[10],
            canBeInAParachute: arrayOfContent[11],
            canHaveWings: arrayOfContent[12],
            //endregion ---------- Basic properties ----------

            //region ---------- Specific properties ----------
            canContainOrSpawnAKey: arrayOfContent[13],

            canBePutInAOnOffBlock: arrayOfContent[14],

            canBePutOnATrack: {
                value: arrayOfContent[15],
                editorLimit: arrayOfContent[16],
                whilePlaying: arrayOfContent[17],
            },

            canSpawnOutOfAPipe: arrayOfContent[18],

            canBePutInASwingingClaw: arrayOfContent[19],

            canBeThrownByALakitu: arrayOfContent[20],
            canBePutInALakituCloud: arrayOfContent[21],

            canBePutInAClownCar: arrayOfContent[22],

            canBeFiredOutOfABulletLauncher: arrayOfContent[23],

            canBePutInABlock: arrayOfContent[24],

            canBePutInATree: arrayOfContent[25],

            lightSourceEmitted: {
                value: arrayOfContent[26],
                isInSMB: arrayOfContent[27]
            },

            canIgniteABobOmb: arrayOfContent[28],

            canGoThroughWalls: arrayOfContent[29],

            canBeStacked: arrayOfContent[30],

            isGlobalGroundOrGlobal: arrayOfContent[31],

            canMakeASoundOutOfAMusicBlock: arrayOfContent[32],
            //endregion ---------- Specific properties ----------

            limits: {
                editor: arrayOfContent[33],
                whilePlaying: {
                    isInGEL: {
                        value: arrayOfContent[34],
                        isSuperGlobal: arrayOfContent[35],
                    },
                    isInPEL: arrayOfContent[36],
                    isInPJL: arrayOfContent[37],
                    customLimit: arrayOfContent[38],
                    offscreenRange: {
                        horizontal: arrayOfContent[39],
                        vertical: arrayOfContent[40],
                    },
                },
            },

            reference: {
                dayTheme: arrayOfContent[41],
                nightTheme: arrayOfContent[42],

                superMarioBrosStyle: arrayOfContent[53],
                superMarioBros3Style: arrayOfContent[54],
                superMarioWorldStyle: arrayOfContent[55],
                newSuperMarioBrosUStyle: arrayOfContent[56],
                superMario3DWorldStyle: arrayOfContent[57],

                groundTheme: arrayOfContent[43],
                undergroundTheme: arrayOfContent[44],
                underwaterTheme: arrayOfContent[45],
                desertTheme: arrayOfContent[46],
                snowTheme: arrayOfContent[47],
                skyTheme: arrayOfContent[48],
                forestTheme: arrayOfContent[49],
                ghostHouseTheme: arrayOfContent[50],
                airshipTheme: arrayOfContent[51],
                castleTheme: arrayOfContent[52],
            },
        },
        name: {
            japanese: arrayOfContent[58] ?? '',
            english: {
                simple: arrayOfContent[59] ?? '',
                american: arrayOfContent[60] ?? '',
                european: arrayOfContent[61] ?? '',
            },
            spanish: {
                simple: arrayOfContent[62] ?? '',
                american: arrayOfContent[63] ?? '',
                european: arrayOfContent[64] ?? '',
            },
            french: {
                simple: arrayOfContent[65] ?? '',
                canadian: arrayOfContent[66] ?? '',
                european: arrayOfContent[67] ?? '',
            },
            dutch: arrayOfContent[68] ?? '',
            german: arrayOfContent[69] ?? '',
            italian: arrayOfContent[70] ?? '',
            russian: arrayOfContent[71] ?? '',
            korean: arrayOfContent[72] ?? '',
            chinese: {
                simple: arrayOfContent[73] ?? '',
                simplified: arrayOfContent[74] ?? '',
                traditional: arrayOfContent[75] ?? '',
            },
        }
    }))
        .convertToNullableBoolean(
            'isInSuperMarioMaker1', 'isInSuperMarioMaker2',
            'isInSuperMarioBros', 'isInSuperMarioBros3', 'isInSuperMarioWorld', 'isInNewSuperMarioBrosU', 'isInSuperMario3DWorld',
            'isInDayTheme', 'isInNightTheme',
            'hasAMushroomVariant',
        )
        .convertToNullableBooleanAnd(unknownCharacter, 'canBeInAParachute', 'canHaveWings',)
        .convertToBoolean('canContainOrSpawnAKey', 'canBePutInAOnOffBlock',)
        .convertToNullableBooleanAnd(unknownCharacter, 'canBePutOnATrack',)
        .convertToBoolean('canSpawnOutOfAPipe', 'canBePutInASwingingClaw',)
        .convertToNullableBooleanAnd(unknownCharacter, 'canBeThrownByALakitu', 'canBePutInALakituCloud',)
        .convertToBoolean('canBePutInAClownCar', 'canBeFiredOutOfABulletLauncher', 'canBePutInABlock', 'canBePutInATree',)

        .convertTo(['nullable string', unknownCharacter, 'Full light', 'Dim light', 'Project a light in front of them', 'Variable', 'Custom',], 'lightSourceEmitted')
        .convertToNullableBooleanAnd(unknownCharacter, 'lightSourceEmitted_isInSMB',)
        .convertToNullableBooleanAnd('NSMBU', 'canIgniteABobOmb',)
        .convertToBoolean('canGoThroughWalls', 'canBeStacked',)
        .convertToNullableBooleanAnd('SM3DW', 'isGlobalGroundOrGlobal',)
        .convertToNullableBooleanAnd(unknownCharacter, 'canMakeASoundOutOfAMusicBlock',)

        .convertToBoolean('whilePlaying_isInGEL_isSuperGlobal',)
        .convertToNullableBooleanAnd('number', 'whilePlaying_isInGEL',)
        .convertToBoolean('whilePlaying_isInPEL',)
        .convertTo(['nullable string', 'boolean', unknownCharacter, 'Temporary as it comes out',], 'whilePlaying_isInPJL',)
        .convertToNullableNumberAnd('Variable', 'whilePlaying_offscreenHorizontalRange',)
        .convertToNullableNumber('whilePlaying_offscreenVerticalRange',)

        .convertToStringAnd(thisText, 'inDayTheme',)
        .convertToEmptyableStringAnd(thisText, 'inNightTheme',)
        .convertToStringAnd(thisText, 'inGroundTheme', 'inUndergroundTheme', 'inUnderwaterTheme',)
        .convertToEmptyableStringAnd(thisText, 'inDesertTheme', 'inSnowTheme', 'inSkyTheme', 'inForestTheme',)
        .convertToStringAnd(thisText,
            'inGhostHouseTheme', 'inAirshipTheme', 'inCastleTheme',
            'inSMBGameStyle', 'inSMB3GameStyle', 'inSMWGameStyle', 'inNSMBUGameStyle',
        )
        .convertToEmptyableStringAnd(thisText, 'inSM3DWGameStyle',)

        .convertToEmptyableString(
            'japanese',
            'english', 'americanEnglish', 'europeanEnglish',
            'spanish', 'americanSpanish', 'europeanSpanish',
            'french', 'canadianFrench', 'europeanFrench',
            'dutch', 'german', 'italian', 'russian', 'korean',
            'chinese', 'simplifiedChinese', 'traditionalChinese',
        )
        .content);
}