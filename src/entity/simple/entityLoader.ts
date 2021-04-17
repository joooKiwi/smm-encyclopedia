import {CategoryType, EntityLimit, EntityLink, PossibleLightSource, ProjectileEntityLimitType} from "../entityTypes";
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
    isInNightTheme: null | boolean,

    categoryInTheEditor: null | CategoryType,

    hasAMushroomVariant: null | boolean,
    canBeInAParachute: null | boolean | '?',
    canHaveWings: boolean | '?',
    //endregion ---------- Basic properties ----------

    //region ---------- Specific properties ----------
    canContainOrSpawnAKey: null | boolean,

    canBePutInAOnOffBlock: null | boolean,

    canBePutOnATrack: null | boolean | '?',
    editorLimit_canBePutOnATrack: EntityLimit,
    whilePlaying_canBePutOnATrack: EntityLimit,

    canSpawnOutOfAPipe: null | boolean,

    canBePutInASwingingClaw: null | boolean,

    canBeThrownByALakitu: null | boolean | '?',
    canBePutInALakituCloud: null | boolean | '?',

    canBePutInAClownCar: null | boolean,

    canBeFiredOutOfABulletLauncher: null | boolean,

    canBePutInABlock: null | boolean,

    canBePutInATree: null | boolean,

    lightSourceEmitted: PossibleLightSource,
    lightSourceEmitted_isInSMB: null | boolean,

    canIgniteABobOmb: null | boolean | 'NSMBU',

    canGoThroughWalls: null | boolean,

    canBeStacked: null | boolean,

    isGlobalGroundOrGlobal: null | boolean | 'SM3DW',
    canMakeASoundOutOfAMusicBlock: null | boolean | '?',
    //endregion ---------- Specific properties ----------

    //region ---------- Entity limit properties ----------
    editorLimit: EntityLimit | '?',

    whilePlaying_isInGEL: null | boolean | 2,
    whilePlaying_isInGEL_isSuperGlobal: null | boolean,

    whilePlaying_isInPEL: null | boolean,

    whilePlaying_isInPJL: ProjectileEntityLimitType,

    whilePlaying_customLimit: EntityLimit,
    //endregion ---------- Entity limit properties ----------

    //region ---------- Spawning / Despawning range properties ----------
    whilePlaying_offscreenSpawningHorizontalRange: null | number | 'Variable',
    whilePlaying_offscreenDespawningHorizontalRange: null | number | 'Variable' | 'Infinity',

    whilePlaying_offscreenSpawingUpwardVerticalRange: null | number,
    whilePlaying_offscreenDespawningUpwardVerticalRange: null | number,

    whilePlaying_offscreenSpawningDownwardVerticalRange: null | number,
    whilePlaying_offscreenDespawningDownwardVerticalRange: null | number,
    //endregion ---------- Spawning / Despawning range properties ----------

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
    japanese: null | string,

    english: null | string,
    americanEnglish: null | string,
    europeanEnglish: null | string,

    spanish: null | string,
    americanSpanish: null | string,
    europeanSpanish: null | string,

    french: null | string,
    canadianFrench: null | string,
    europeanFrench: null | string,

    dutch: null | string,

    german: null | string,

    italian: null | string,

    russian: null | string,

    korean: null | string,

    chinese: null | string,
    simplifiedChinese: null | string,
    tradionalChinese: null | string,
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
                        loading: {
                            horizontal: arrayOfContent[39],
                            vertical: {
                                upward: arrayOfContent[41],
                                downward: arrayOfContent[43],
                            },
                        },
                        unloading: {
                            horizontal: arrayOfContent[40],
                            vertical: {
                                upward: arrayOfContent[42],
                                downward: arrayOfContent[44],
                            },
                        },
                    },
                },
            },

            reference: {
                dayTheme: arrayOfContent[45],
                nightTheme: arrayOfContent[46],

                superMarioBrosStyle: arrayOfContent[57],
                superMarioBros3Style: arrayOfContent[58],
                superMarioWorldStyle: arrayOfContent[59],
                newSuperMarioBrosUStyle: arrayOfContent[60],
                superMario3DWorldStyle: arrayOfContent[61],

                groundTheme: arrayOfContent[47],
                undergroundTheme: arrayOfContent[48],
                underwaterTheme: arrayOfContent[49],
                desertTheme: arrayOfContent[50],
                snowTheme: arrayOfContent[51],
                skyTheme: arrayOfContent[52],
                forestTheme: arrayOfContent[53],
                ghostHouseTheme: arrayOfContent[54],
                airshipTheme: arrayOfContent[55],
                castleTheme: arrayOfContent[56],

                otherReference: null,
            },
        },
        name: {
            japanese: arrayOfContent[62],
            english: {
                simple: arrayOfContent[63],
                american: arrayOfContent[64],
                european: arrayOfContent[65],
            },
            spanish: {
                simple: arrayOfContent[66],
                american: arrayOfContent[67],
                european: arrayOfContent[68],
            },
            french: {
                simple: arrayOfContent[69],
                canadian: arrayOfContent[70],
                european: arrayOfContent[71],
            },
            dutch: arrayOfContent[72],
            german: arrayOfContent[73],
            italian: arrayOfContent[74],
            russian: arrayOfContent[75],
            korean: arrayOfContent[76],
            chinese: {
                simple: arrayOfContent[77],
                simplified: arrayOfContent[78],
                traditional: arrayOfContent[79],
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
        .convertToNullableNumberAnd('Variable', 'whilePlaying_offscreenSpawningHorizontalRange',)
        .convertTo(['nullable number', 'Variable', 'Infinity'], 'whilePlaying_offscreenDespawningHorizontalRange',)
        .convertToNullableNumber('whilePlaying_offscreenSpawningUpwardVerticalRange', 'whilePlaying_offscreenDespawningUpwardVerticalRange',
            'whilePlaying_offscreenSpawningDownwardVerticalRange', 'whilePlaying_offscreenDespawningDownwardVerticalRange',)

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