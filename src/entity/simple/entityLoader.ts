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

export interface EntityFilePropertiesArrayAndTemplate {
    originalContent: string[];
    arrayConverted: EntityFilePropertiesArray;
    template: EntityFilePropertiesTemplate;
}

export function loadEveryEntities() {
    const [unknownCharacter, thisText,] = ['?', 'this',];
    const englishNames: Map<string, EntityFilePropertiesArrayAndTemplate> = new Map();
    const englishReferencesToWatch: { reference: EntityFilePropertiesTemplate, value: EntityLink, errorIfNeverFound: () => ReferenceError }[] = [];

    return () => new CSVLoader<EntityFilePropertiesArray, EntityFilePropertiesTemplate>(everyEntities, arrayOfContent => ({
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

                otherReference: null,
            },
        },
        name: {
            japanese: arrayOfContent[58],
            english: {
                simple: arrayOfContent[59],
                american: arrayOfContent[60],
                european: arrayOfContent[61],
            },
            spanish: {
                simple: arrayOfContent[62],
                american: arrayOfContent[63],
                european: arrayOfContent[64],
            },
            french: {
                simple: arrayOfContent[65],
                canadian: arrayOfContent[66],
                european: arrayOfContent[67],
            },
            dutch: arrayOfContent[68],
            german: arrayOfContent[69],
            italian: arrayOfContent[70],
            russian: arrayOfContent[71],
            korean: arrayOfContent[72],
            chinese: {
                simple: arrayOfContent[73],
                simplified: arrayOfContent[74],
                traditional: arrayOfContent[75],
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
        .convertToNullableBoolean('canContainOrSpawnAKey', 'canBePutInAOnOffBlock',)
        .convertToNullableBooleanAnd(unknownCharacter, 'canBePutOnATrack',)
        .convertToNullableBoolean('canSpawnOutOfAPipe', 'canBePutInASwingingClaw',)
        .convertToNullableBooleanAnd(unknownCharacter, 'canBeThrownByALakitu', 'canBePutInALakituCloud',)
        .convertToNullableBoolean('canBePutInAClownCar', 'canBeFiredOutOfABulletLauncher', 'canBePutInABlock', 'canBePutInATree',)

        .convertTo(['emptyable string', unknownCharacter, 'Full light', 'Dim light', 'Project a light in front of them', 'Variable', 'Custom',], 'lightSourceEmitted')
        .convertToNullableBooleanAnd(unknownCharacter, 'lightSourceEmitted_isInSMB',)
        .convertToNullableBooleanAnd('NSMBU', 'canIgniteABobOmb',)
        .convertToNullableBoolean('canGoThroughWalls', 'canBeStacked',)
        .convertToNullableBooleanAnd('SM3DW', 'isGlobalGroundOrGlobal',)
        .convertToNullableBooleanAnd(unknownCharacter, 'canMakeASoundOutOfAMusicBlock',)

        .convertToNullableBoolean('whilePlaying_isInGEL_isSuperGlobal',)
        .convertToNullableBooleanAnd('number', 'whilePlaying_isInGEL',)
        .convertToNullableBoolean('whilePlaying_isInPEL',)
        .convertTo(['emptyable string', 'boolean', unknownCharacter, 'Temporary as it comes out',], 'whilePlaying_isInPJL',)
        .convertToNullableNumberAnd('Variable', 'whilePlaying_offscreenHorizontalRange',)
        .convertToNullableNumber('whilePlaying_offscreenVerticalRange',)

        .convertToStringAnd(thisText, 'inDayTheme',)
        .convertToEmptyableStringAnd(thisText, 'inNightTheme',)
        .convertToStringAnd(thisText, 'inGroundTheme',)
        .convertToEmptyableStringAnd(thisText, 'inUndergroundTheme', 'inUnderwaterTheme', 'inDesertTheme', 'inSnowTheme', 'inSkyTheme', 'inForestTheme', 'inGhostHouseTheme', 'inAirshipTheme', 'inCastleTheme',)
        .convertToEmptyableStringAnd(thisText, 'inSMBGameStyle', 'inSMB3GameStyle', 'inSMWGameStyle', 'inNSMBUGameStyle', 'inSM3DWGameStyle',)

        .convertToEmptyableString(
            'japanese',
            'english', 'americanEnglish', 'europeanEnglish',
            'spanish', 'americanSpanish', 'europeanSpanish',
            'french', 'canadianFrench', 'europeanFrench',
            'dutch', 'german', 'italian', 'russian', 'korean',
            'chinese', 'simplifiedChinese', 'traditionalChinese',
        )
        .onFinalObjectCreated((finalContent, convertedContent, originalContent,) => {
            const name = finalContent.name;
            //README since some references are still not complete, they are in comment
            if (name.english.simple === null && (name.english.american === null || name.english.european === null))
                throw new ReferenceError(`The english name ("${name.english.simple}") can either have a single english name or both "american"("${name.english.american}") and "european"("${name.english.european}") name separated.`);
            // if (name.spanish.simple === null && (name.spanish.american === null || name.spanish.european === null))
            //     throw new ReferenceError(`The spanish name ("${name.spanish.simple}") can either have a single spanish name or both "american"("${name.spanish.american}") and "european"("${name.spanish.european}") name separated.`);
            // if (name.french.simple === null && (name.french.canadian === null || name.french.european === null))
            //     throw new ReferenceError(`The french name ("${name.french.simple}") can either have a single french name or both "canadian"("${name.french.canadian}") and "european"("${name.french.european}") name separated.`);
            // if (name.chinese.simple === null && (name.chinese.simplified === null || name.chinese.traditional === null))
            //     throw new ReferenceError(`The chinese name ("${name.chinese.simple}") can either have a single chinese name or both "simplified"("${name.chinese.simplified}") and "traditional"("${name.chinese.traditional}") name separated.`);

            const englishReferenceName = name.english.simple ?? name.english.american;
            if (englishReferenceName == null)
                throw new ReferenceError('No english name can be null since they are used as a key for the references.');
            if (englishNames.get(englishReferenceName) !== undefined)
                throw new ReferenceError(`The english name ("${englishReferenceName}") can't be used as a reference since there is already another value.`);
            englishNames.set(englishReferenceName, {originalContent: originalContent, arrayConverted: convertedContent, template: finalContent,});

            const reference = finalContent.properties.reference;
            [
                reference.dayTheme, reference.nightTheme,
                reference.superMarioBrosStyle, reference.superMarioBros3Style, reference.superMarioWorldStyle, reference.newSuperMarioBrosUStyle, reference.superMario3DWorldStyle,
                reference.groundTheme, reference.undergroundTheme, reference.underwaterTheme, reference.desertTheme, reference.snowTheme, reference.skyTheme, reference.forestTheme, reference.ghostHouseTheme, reference.airshipTheme, reference.castleTheme,
            ].forEach(reference => {
                if (reference !== null && reference !== 'this' && englishNames.get(reference) === undefined) {
                    if (reference.includes("/")) {
                        reference.split(' / ').forEach((splitReference, index) => {
                            if (splitReference !== 'this' && englishNames.get(splitReference) === undefined)
                                englishReferencesToWatch.push({
                                    reference: finalContent,
                                    value: splitReference,
                                    errorIfNeverFound: () => new ReferenceError(`The reference[${index}] ("${splitReference}") is not within the english map`),
                                });
                        });
                    } else
                        englishReferencesToWatch.push({
                            reference: finalContent,
                            value: reference,
                            errorIfNeverFound: () => new ReferenceError(`The reference value ("${reference}") is not within the english map.`),
                        });
                }
            });
        })
        .onInitialisationEnd(() => {
            englishReferencesToWatch.forEach(englishReferenceToWatch => {
                const referenceWatched = englishNames.get(englishReferenceToWatch.value);
                if (referenceWatched === undefined)
                    throw englishReferenceToWatch.errorIfNeverFound();

                //Addition on both references to their other reference table.
                referenceWatched.template.properties.reference.otherReference = referenceWatched.template.properties.reference.otherReference ?? [];
                referenceWatched.template.properties.reference.otherReference.push(englishReferenceToWatch.reference);

                englishReferenceToWatch.reference.properties.reference.otherReference = englishReferenceToWatch.reference.properties.reference.otherReference ?? [];
                englishReferenceToWatch.reference.properties.reference.otherReference.push(referenceWatched.template);
            })
        })
        .content;
}