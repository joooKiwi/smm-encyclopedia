import {CategoryType, EntityLimit, EntityLink, PossibleLightSource, ProjectileEntityLimitType} from "../entityTypes";
import CSVLoader from "../../loader/CSVLoader";
import everyEntities from "../../resources/Every Super Mario Maker 2 entities properties - Entities.csv";
import {EntityFilePropertiesTemplate} from "./EntityFilePropertiesTemplate";
import {SMM2NameTemplate} from "../lang/SMM2NameTemplate";
import {GenericEntity} from "./GenericEntity";
import {SMM2NameContainer} from "../lang/SMM2NameContainer";
import {Entity} from "./Entity";

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

export interface EntityReferences {
    originalContent: string[];
    arrayConverted: EntityFilePropertiesArray;
    template: EntityFilePropertiesTemplate;
    entity?: Entity;
}

export function loadEveryEntities() {
    const [unknownCharacter, thisText,] = ['?', 'this',];
    const templateCreator = new TemplateCreator();
    const references: Map<string, EntityReferences> = new Map();
    const referencesToWatch = new ReferencesToWatch(references);

    const csvLoader = new CSVLoader<EntityFilePropertiesArray, EntityFilePropertiesTemplate>(everyEntities, arrayOfContent => templateCreator.createTemplate(arrayOfContent))
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
            testName(name);
            addEnglishReference(name, references, originalContent, convertedContent, finalContent);
            referencesToWatch.addReference(finalContent);
        })
        .onInitialisationEnd(() => {
            referencesToWatch.testReferences();
            references.forEach(reference => reference.entity = createEntity(reference.template));
        });
    console.log(csvLoader.content);
    return () => references;
}

//region -------------------- Template related methods & classes --------------------

class TemplateCreator {

    public createTemplate(content: EntityFilePropertiesArray): EntityFilePropertiesTemplate {
        const [groundLink, undergroundLink, underwaterLink, desertLink, snowLink, skyLink, forestLink, ghostHouseLink, airshipLink, castleLink,] =
            [content[47], content[48], content[49], content[50], content[51], content[52], content[53], content[54], content[55], content[56],];

        return {
            properties: {
                //region ---------- Basic properties ----------
                isIn: {
                    game: {
                        1: content[0],
                        2: content[1],
                    },

                    style: {
                        superMarioBros: content[2],
                        superMarioBros3: content[3],
                        superMarioWorld: content[4],
                        newSuperMarioBrosU: content[5],
                        superMario3DWorld: content[6],
                    },
                    theme: {
                        ground: groundLink === 'this',
                        underground: undergroundLink === 'this',
                        underwater: underwaterLink === 'this',
                        desert: desertLink === null ? null : desertLink === 'this',
                        snow: snowLink === null ? null : snowLink === 'this',
                        sky: skyLink === null ? null : skyLink === 'this',
                        forest: forestLink === null ? null : forestLink === 'this',
                        ghostHouse: ghostHouseLink === 'this',
                        airship: airshipLink === 'this',
                        castle: castleLink === 'this',
                    },

                    day: content[7],
                    night: content[8],
                },

                categoryInTheEditor: content[9],

                hasAMushroomVariant: content[10],
                canBeInAParachute: content[11],
                canHaveWings: content[12],
                //endregion ---------- Basic properties ----------

                //region ---------- Specific properties ----------
                canContainOrSpawnAKey: content[13],

                canBePutInAOnOffBlock: content[14],

                canBePutOnATrack: {
                    value: content[15],
                    editorLimit: content[16],
                    whilePlaying: content[17],
                },

                canSpawnOutOfAPipe: content[18],

                canBePutInASwingingClaw: content[19],

                canBeThrownByALakitu: content[20],
                canBePutInALakituCloud: content[21],

                canBePutInAClownCar: content[22],

                canBeFiredOutOfABulletLauncher: content[23],

                canBePutInABlock: content[24],

                canBePutInATree: content[25],

                lightSourceEmitted: {
                    value: content[26],
                    isInSMB: content[27]
                },

                canIgniteABobOmb: content[28],

                canGoThroughWalls: content[29],

                canBeStacked: content[30],

                isGlobalGroundOrGlobal: content[31],

                canMakeASoundOutOfAMusicBlock: content[32],
                //endregion ---------- Specific properties ----------

                limits: {
                    editor: content[33],
                    whilePlaying: {
                        isInGEL: {
                            value: content[34],
                            isSuperGlobal: content[35],
                        },
                        isInPEL: content[36],
                        isInPJL: content[37],
                        customLimit: content[38],
                        offscreenRange: {
                            spawning: {
                                horizontal: content[39],
                                vertical: {
                                    upward: content[41],
                                    downward: content[43],
                                },
                            },
                            despawning: {
                                horizontal: content[40],
                                vertical: {
                                    upward: content[42],
                                    downward: content[44],
                                },
                            },
                        },
                    },
                },

                reference: {
                    dayTheme: content[45],
                    nightTheme: content[46],

                    superMarioBrosStyle: content[57],
                    superMarioBros3Style: content[58],
                    superMarioWorldStyle: content[59],
                    newSuperMarioBrosUStyle: content[60],
                    superMario3DWorldStyle: content[61],

                    groundTheme: groundLink,
                    undergroundTheme: undergroundLink,
                    underwaterTheme: underwaterLink,
                    desertTheme: desertLink,
                    snowTheme: snowLink,
                    skyTheme: skyLink,
                    forestTheme: forestLink,
                    ghostHouseTheme: ghostHouseLink,
                    airshipTheme: airshipLink,
                    castleTheme: castleLink,

                    all: null,
                },
            },
            name: {
                japanese: content[62],
                english: {
                    simple: content[63],
                    american: content[64],
                    european: content[65],
                },
                spanish: {
                    simple: content[66],
                    american: content[67],
                    european: content[68],
                },
                french: {
                    simple: content[69],
                    canadian: content[70],
                    european: content[71],
                },
                dutch: content[72],
                german: content[73],
                italian: content[74],
                russian: content[75],
                korean: content[76],
                chinese: {
                    simple: content[77],
                    simplified: content[78],
                    traditional: content[79],
                },
            },
        };
    }

}

function testName(name: SMM2NameTemplate): void {
    //README since some references are still not complete, they are in comment
    if (name.english.simple === null && (name.english.american === null || name.english.european === null))
        throw new ReferenceError(`The english name ("${name.english.simple}") can either have a single english name or both "american"("${name.english.american}") and "european"("${name.english.european}") name separated.`);
    // if (name.spanish.simple === null && (name.spanish.american === null || name.spanish.european === null))
    //     throw new ReferenceError(`The spanish name ("${name.spanish.simple}") can either have a single spanish name or both "american"("${name.spanish.american}") and "european"("${name.spanish.european}") name separated.`);
    // if (name.french.simple === null && (name.french.canadian === null || name.french.european === null))
    //     throw new ReferenceError(`The french name ("${name.french.simple}") can either have a single french name or both "canadian"("${name.french.canadian}") and "european"("${name.french.european}") name separated.`);
    // if (name.chinese.simple === null && (name.chinese.simplified === null || name.chinese.traditional === null))
    //     throw new ReferenceError(`The chinese name ("${name.chinese.simple}") can either have a single chinese name or both "simplified"("${name.chinese.simplified}") and "traditional"("${name.chinese.traditional}") name separated.`);
}

function addEnglishReference(name: SMM2NameTemplate,
                             englishNames: Map<string, EntityReferences>,
                             originalContent: string[],
                             convertedContent: EntityFilePropertiesArray,
                             template: EntityFilePropertiesTemplate,): void {

    const englishReferenceName = name.english.simple ?? name.english.american;
    if (englishReferenceName == null)
        throw new ReferenceError('No english name can be null since they are used as a key for the references.');
    if (englishNames.get(englishReferenceName) !== undefined)
        throw new ReferenceError(`The english name ("${englishReferenceName}") can't be used as a reference since there is already another value.`);
    englishNames.set(englishReferenceName, {originalContent: originalContent, arrayConverted: convertedContent, template: template,});
}

class ReferencesToWatch {
    readonly #englishNames;
    readonly #alreadyAddedName: string[];
    readonly #references: { reference: EntityFilePropertiesTemplate, value: EntityLink, errorIfNeverFound: () => ReferenceError }[];

    public constructor(englishNames: Map<string, EntityReferences>) {
        this.#englishNames = englishNames;
        this.#alreadyAddedName = [];
        this.#references = [];
    }


    public get englishNames() {
        return this.#englishNames;
    }

    public get alreadyAddedName() {
        return this.#alreadyAddedName;
    }

    public get references() {
        return this.#references;
    }


    public addReference(reference: EntityFilePropertiesTemplate): void {
        const otherReference = reference.properties.reference;
        [
            otherReference.dayTheme, otherReference.nightTheme,
            otherReference.superMarioBrosStyle, otherReference.superMarioBros3Style, otherReference.superMarioWorldStyle, otherReference.newSuperMarioBrosUStyle, otherReference.superMario3DWorldStyle,
            otherReference.groundTheme, otherReference.undergroundTheme, otherReference.underwaterTheme, otherReference.desertTheme, otherReference.snowTheme, otherReference.skyTheme, otherReference.forestTheme, otherReference.ghostHouseTheme, otherReference.airshipTheme, otherReference.castleTheme,
        ].filter(otherReference => otherReference !== null)
            .filter(otherReference => otherReference !== 'this')
            .filter(otherReference => !this.alreadyAddedName.includes(otherReference as string))
            .forEach(otherReference => this._addReference(reference, otherReference as string));
    }

    private _addReference(template: EntityFilePropertiesTemplate, reference: string): void {
        if (reference.includes("/"))
            reference.split(' / ')
                .filter(splitReference => splitReference !== 'this')
                .forEach((splitReference, index) => this._addReferenceToArray(template, splitReference, () => new ReferenceError(`The reference[${index}] ("${splitReference}") is not within the english map`)));
        else
            this._addReferenceToArray(template, reference, () => new ReferenceError(`The reference value ("${reference}") is not within the english map.`));
        this.alreadyAddedName.push(reference);
    }

    private _addReferenceToArray(template: EntityFilePropertiesTemplate, reference: string, errorIfNeverFound: () => ReferenceError) {
        this.references.push({
            reference: template,
            value: reference,
            errorIfNeverFound: errorIfNeverFound,
        });
    }

    public testReferences(): void {
        this.references.forEach(englishReferenceToWatch => {
            const referenceWatched = this.englishNames.get(englishReferenceToWatch.value);
            if (referenceWatched === undefined)
                throw englishReferenceToWatch.errorIfNeverFound();

            //Addition on both references to their other reference table.
            referenceWatched.template.properties.reference.all = referenceWatched.template.properties.reference.all ?? [];
            referenceWatched.template.properties.reference.all.push(englishReferenceToWatch.reference);

            englishReferenceToWatch.reference.properties.reference.all = englishReferenceToWatch.reference.properties.reference.all ?? [];
            englishReferenceToWatch.reference.properties.reference.all.push(referenceWatched.template);
        });
    }

}

//endregion -------------------- Template related methods & classes --------------------


function createEntity(template: EntityFilePropertiesTemplate): Entity {
    const temporaryVariableToAvoidError = 'temp';
    const japaneseReference = template.name.japanese ?? temporaryVariableToAvoidError as string;
    const englishReference = template.name.english.simple ?? [template.name.english.american ?? temporaryVariableToAvoidError, template.name.english.european ?? temporaryVariableToAvoidError] as string | [string, string];
    const spanishReference = template.name.spanish.simple ?? [template.name.spanish.american ?? temporaryVariableToAvoidError, template.name.spanish.european ?? temporaryVariableToAvoidError] as string | [string, string];
    const frenchReference = template.name.french.simple ?? [template.name.french.canadian ?? temporaryVariableToAvoidError, template.name.french.european ?? temporaryVariableToAvoidError] as string | [string, string];
    const dutchReference = template.name.dutch ?? temporaryVariableToAvoidError as string;
    const germanReference = template.name.german ?? temporaryVariableToAvoidError as string;
    const italianReference = template.name.italian ?? temporaryVariableToAvoidError as string;
    const russianReference = template.name.russian ?? temporaryVariableToAvoidError as string;
    const koreanReference = template.name.korean ?? temporaryVariableToAvoidError as string;
    const chineseReference = template.name.chinese.simple ?? [template.name.chinese.simplified ?? temporaryVariableToAvoidError, template.name.chinese.traditional ?? temporaryVariableToAvoidError] as string | [string, string];
    return new GenericEntity(new SMM2NameContainer(japaneseReference, englishReference, spanishReference, frenchReference, dutchReference, germanReference, italianReference, russianReference, koreanReference, chineseReference));
}