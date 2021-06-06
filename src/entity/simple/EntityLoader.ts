import everyEntities from '../../resources/Every Super Mario Maker 2 entities properties - Entities.csv';

import {CallbackCaller}                                                          from '../../util/CallbackCaller';
import {CategoryType, EntityCategoryLoader}                                      from '../category/EntityCategoryLoader';
import {CSVLoader}                                                               from '../../util/loader/CSVLoader';
import {Entity}                                                                  from './Entity';
import {EntityBuilder}                                                           from './EntityBuilder';
import {EntityCategory}                                                          from '../category/EntityCategory';
import {EntityLimit, EntityLink, PossibleLightSource, ProjectileEntityLimitType} from '../entityTypes';
import {EntityTemplate}                                                          from './EntityTemplate';
import {GenericSingleInstanceBuilder}                                            from '../../util/GenericSingleInstanceBuilder';
import {Loader}                                                                  from '../../util/Loader';
import {SMM2NameTemplate}                                                        from '../lang/SMM2NameTemplate';

type EntityFilePropertiesArray = [
    //region ---------- Basic properties ----------
    isInSuperMarioMaker1: boolean,
    isInSuperMarioMaker2: boolean,

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

    inSMBGameStyle: null | EntityLink,
    inSMB3GameStyle: null | EntityLink,
    inSMWGameStyle: null | EntityLink,
    inNSMBUGameStyle: null | EntityLink,
    inSM3DWGameStyle: null | EntityLink,
    //endregion ---------- Reference on specific condition properties ----------
    //region ---------- Language properties ----------

    english: null | string,
    americanEnglish: null | string,
    europeanEnglish: null | string,

    french: null | string,
    canadianFrench: null | string,
    europeanFrench: null | string,

    german: null | string,

    spanish: null | string,
    americanSpanish: null | string,
    europeanSpanish: null | string,

    italian: null | string,

    dutch: null | string,

    portuguese: null | string,
    americanPortuguese: null | string,
    europeanPortuguese: null | string,

    russian: null | string,

    japanese: null | string,

    chinese: null | string,
    simplifiedChinese: null | string,
    tradionalChinese: null | string,

    korean: null | string,
    //endregion ---------- Language properties ----------
];

export interface DebugEntityReferences {

    originalContent: string[]
    arrayConverted: EntityFilePropertiesArray
    template: EntityTemplate
    entity?: Entity

}

/**
 * @singleton
 */
export class EntityLoader
    implements Loader<Map<string, DebugEntityReferences>> {

    static readonly #instance = new EntityLoader();

    //region ---------- external object references ----------

    readonly #everyEntityCategories: CallbackCaller<Map<string, EntityCategory>>;
    readonly #everyEntitiesMap: CallbackCaller<Map<string, DebugEntityReferences>>;

    //endregion ---------- external object references ----------

    private constructor() {
        this.#everyEntityCategories = new CallbackCaller(() => EntityCategoryLoader.get.load());
        this.#everyEntitiesMap = new CallbackCaller(() => {
            const [unknownCharacter, thisText,] = ['?', 'this',];
            const references: Map<string, DebugEntityReferences> = new Map();
            const referencesToWatch = new ReferencesToWatch(references);
            EntityBuilder.references = references;
            EntityBuilder.categoriesMap = this.entityCategories;

            const csvLoader = new CSVLoader<EntityFilePropertiesArray, EntityTemplate>(everyEntities, convertedContent => TemplateCreator.createTemplate(convertedContent))
                .convertToNullableBoolean(
                    'isInSuperMarioMaker1', 'isInSuperMarioMaker2',
                    'isInSuperMarioBros', 'isInSuperMarioBros3', 'isInSuperMarioWorld', 'isInNewSuperMarioBrosU', 'isInSuperMario3DWorld',
                    'isInDayTheme', 'isInNightTheme',
                )
                .convertTo(['emptyable string', ...this.entityCategoriesNames], 'categoryInTheEditor',)
                .convertToNullableBoolean('hasAMushroomVariant',)
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

                .convertToStringAnd(thisText, 'inGroundTheme', 'inUndergroundTheme', 'inUnderwaterTheme',)
                .convertToEmptyableStringAnd(thisText, 'inDesertTheme', 'inSnowTheme', 'inSkyTheme', 'inForestTheme',)
                .convertToStringAnd(thisText, 'inGhostHouseTheme', 'inAirshipTheme', 'inCastleTheme',)

                .convertToEmptyableStringAnd(thisText, 'inSMBGameStyle', 'inSMB3GameStyle', 'inSMWGameStyle', 'inNSMBUGameStyle', 'inSM3DWGameStyle',)

                .convertToEmptyableString(
                    'english', 'americanEnglish', 'europeanEnglish',
                    'french', 'canadianFrench', 'europeanFrench',
                    'german',
                    'spanish', 'americanSpanish', 'europeanSpanish',
                    'dutch', 'italian',
                    'portuguese', 'americanPortuguese', 'europeanPortuguese',
                    'russian', 'japanese',
                    'chinese', 'simplifiedChinese', 'traditionalChinese',
                    'korean',
                )
                .onFinalObjectCreated((finalContent, convertedContent, originalContent,) => {
                    const name = finalContent.name;
                    NameCreator.addEnglishReference(name, references, originalContent, convertedContent, finalContent);
                    referencesToWatch.addReference(finalContent);
                })
                .onInitialisationEnd(() => {
                    referencesToWatch.testReferences();
                    referencesToWatch.setReferences();
                    references.forEach(reference => reference.entity = new GenericSingleInstanceBuilder(new EntityBuilder(reference.template)).build());
                });
            console.log(csvLoader.content);
            return references;
        });
    }

    public static get get() {
        return this.#instance;
    }


    private get entityCategories() {
        return this.#everyEntityCategories.get;
    }

    private get entityCategoriesNames() {
        return [...this.entityCategories.keys()];
    }


    public load() {
        return this.#everyEntitiesMap.get;
    }

}

//region -------------------- Template related methods & classes --------------------

class TemplateCreator {

    public static createTemplate(content: EntityFilePropertiesArray): EntityTemplate {
        const [isInSuperMarioMaker1, isInSuperMarioMaker2] =
            [content[0], content[1]];
        const [dayLink, nightLink] =
            [content[38], content[39],];
        const [groundLink, undergroundLink, underwaterLink, desertLink, snowLink, skyLink, forestLink, ghostHouseLink, airshipLink, castleLink,] =
            [content[40], content[41], content[42], content[43], content[44], content[45], content[46], content[47], content[48], content[49],];
        const [superMarioBrosLink, superMarioBros3Link, superMarioWorldLink, newSuperMarioBrosULink, superMario3DWorldLink] =
            [content[50], content[51], content[52], content[53], content[54]];

        return {
            properties: {
                //region ---------- Basic properties ----------
                isIn: {
                    game: {
                        1: isInSuperMarioMaker1,
                        2: isInSuperMarioMaker2,
                    },
                    style: {
                        superMarioBros: this.__convertLinkToOnlyBoolean(superMarioBrosLink),
                        superMarioBros3: this.__convertLinkToOnlyBoolean(superMarioBros3Link),
                        superMarioWorld: this.__convertLinkToOnlyBoolean(superMarioWorldLink),
                        newSuperMarioBrosU: this.__convertLinkToOnlyBoolean(newSuperMarioBrosULink),
                        superMario3DWorld: !isInSuperMarioMaker1 && isInSuperMarioMaker2 ? this.__convertLinkToOnlyBoolean(superMario3DWorldLink) : this.__convertLinkToNullableBoolean(superMario3DWorldLink),
                    },
                    theme: {
                        ground: this.__convertLinkToBoolean(groundLink),
                        underground: this.__convertLinkToBoolean(undergroundLink),
                        underwater: this.__convertLinkToBoolean(underwaterLink),
                        desert: this.__convertLinkToNullableBoolean(desertLink),
                        snow: this.__convertLinkToNullableBoolean(snowLink),
                        sky: this.__convertLinkToNullableBoolean(skyLink),
                        forest: this.__convertLinkToNullableBoolean(forestLink),
                        ghostHouse: this.__convertLinkToBoolean(ghostHouseLink),
                        airship: this.__convertLinkToBoolean(airshipLink),
                        castle: this.__convertLinkToBoolean(castleLink),
                    },
                    time: {
                        day: this.__convertLinkToBoolean(dayLink),
                        night: this.__convertLinkToNullableBoolean(nightLink),
                    },
                },

                categoryInTheEditor: content[2],

                hasAMushroomVariant: content[3],
                canBeInAParachute: content[4],
                canHaveWings: content[5],
                //endregion ---------- Basic properties ----------

                //region ---------- Specific properties ----------
                canContainOrSpawnAKey: content[6],

                canBePutInAOnOffBlock: content[7],

                canBePutOnATrack: {
                    value: content[8],
                    editorLimit: content[9],
                    whilePlaying: content[10],
                },

                canSpawnOutOfAPipe: content[11],

                canBePutInASwingingClaw: content[12],

                canBeThrownByALakitu: content[13],
                canBePutInALakituCloud: content[14],

                canBePutInAClownCar: content[15],

                canBeFiredOutOfABulletLauncher: content[16],

                canBePutInABlock: content[17],

                canBePutInATree: content[18],

                lightSourceEmitted: {
                    value: content[19],
                    isInSMB: content[20]
                },

                canIgniteABobOmb: content[21],

                canGoThroughWalls: content[22],

                canBeStacked: content[23],

                isGlobalGroundOrGlobal: content[24],

                canMakeASoundOutOfAMusicBlock: content[25],
                //endregion ---------- Specific properties ----------

                limits: {
                    editor: content[26],
                    whilePlaying: {
                        isInGEL: {
                            value: content[27],
                            isSuperGlobal: content[28],
                        },
                        isInPEL: content[29],
                        isInPJL: content[30],
                        customLimit: content[31],
                        offscreenRange: {
                            spawning: {
                                horizontal: content[32],
                                vertical: {
                                    upward: content[34],
                                    downward: content[36],
                                },
                            },
                            despawning: {
                                horizontal: content[33],
                                vertical: {
                                    upward: content[35],
                                    downward: content[37],
                                },
                            },
                        },
                    },
                },

                reference: {
                    style: {
                        superMarioBros: superMarioBrosLink,
                        superMarioBros3: superMarioBros3Link,
                        superMarioWorld: superMarioWorldLink,
                        newSuperMarioBrosU: newSuperMarioBrosULink,
                        superMario3DWorld: superMario3DWorldLink,
                    },
                    theme: {
                        ground: groundLink,
                        underground: undergroundLink,
                        underwater: underwaterLink,
                        desert: desertLink,
                        snow: snowLink,
                        sky: skyLink,
                        forest: forestLink,
                        ghostHouse: ghostHouseLink,
                        airship: airshipLink,
                        castle: castleLink,
                    },
                    day: dayLink,
                    night: nightLink,
                    all: null,
                },
            },
            name: {
                english: {
                    simple: content[55],
                    american: content[56],
                    european: content[57],
                },
                french: {
                    simple: content[58],
                    canadian: content[59],
                    european: content[60],
                },
                german: content[61],
                spanish: {
                    simple: content[62],
                    american: content[63],
                    european: content[64],
                },
                italian: content[65],
                dutch: content[66],
                portuguese: {
                    simple: content[67],
                    american: content[68],
                    european: content[69],
                },
                russian: content[70],
                japanese: content[71],
                chinese: {
                    simple: content[72],
                    simplified: content[73],
                    traditional: content[74],
                },
                korean: content[75],
            },
        };
    }

    private static __convertLinkToOnlyBoolean(link: null | EntityLink) {
        return link !== null && this.__convertLinkToBoolean(link);
    }

    private static __convertLinkToBoolean(link: EntityLink): boolean {
        return link.includes('this');
    }

    private static __convertLinkToNullableBoolean(link: null | EntityLink): null | boolean {
        return link === null ? null : this.__convertLinkToBoolean(link);
    }

}

/**
 * @temporary
 */
class NameCreator {

    private static __testName(name: SMM2NameTemplate): void {
        //README since some references are still not complete, they are in comment
        if (name.english.simple === null && (name.english.american === null || name.english.european === null))
            throw new ReferenceError(`The english name ("${name.english.simple}") can either have a single english name or both "american"("${name.english.american}") and "european"("${name.english.european}") name separated.`);
        // if (name.french.simple === null && (name.french.canadian === null || name.french.european === null))
        //     throw new ReferenceError(`The french name ("${name.french.simple}") can either have a single french name or both "canadian"("${name.french.canadian}") and "european"("${name.french.european}") name separated.`);
        // if (name.spanish.simple === null && (name.spanish.american === null || name.spanish.european === null))
        //     throw new ReferenceError(`The spanish name ("${name.spanish.simple}") can either have a single spanish name or both "american"("${name.spanish.american}") and "european"("${name.spanish.european}") name separated.`);
        // if (name.portuguese.simple === null && (name.portuguese.simplified === null || name.portuguese.traditional === null))
        //     throw new ReferenceError(`The portuguese name ("${name.portuguese.simple}") can either have a single portuguese name or both "american"("${name.portuguese.american}") and "european"("${name.portuguese.european}") name separated.`);
        // if (name.chinese.simple === null && (name.chinese.simplified === null || name.chinese.traditional === null))
        //     throw new ReferenceError(`The chinese name ("${name.chinese.simple}") can either have a single chinese name or both "simplified"("${name.chinese.simplified}") and "traditional"("${name.chinese.traditional}") name separated.`);
    }

    public static addEnglishReference(name: SMM2NameTemplate, englishNames: Map<string, DebugEntityReferences>, originalContent: string[], convertedContent: EntityFilePropertiesArray, template: EntityTemplate,): void {
        this.__testName(name);
        const englishReferenceName = name.english.simple ?? name.english.american;
        if (englishReferenceName == null)
            throw new ReferenceError('No english name can be null since they are used as a key for the references.');
        if (englishNames.get(englishReferenceName) !== undefined)
            throw new ReferenceError(`The english name ("${englishReferenceName}") can't be used as a reference since there is already another value.`);
        englishNames.set(englishReferenceName, {originalContent: originalContent, arrayConverted: convertedContent, template: template,});
    }

}

class ReferencesToWatch {

    //region -------------------- Attributes --------------------

    readonly #englishNames;
    readonly #alreadyAddedName: string[];
    readonly #references: { reference: EntityTemplate, value: EntityLink, errorIfNeverFound: () => ReferenceError }[];

    //endregion -------------------- Attributes --------------------

    public constructor(englishNames: Map<string, DebugEntityReferences>) {
        this.#englishNames = englishNames;
        this.#alreadyAddedName = [];
        this.#references = [];
    }

    //region -------------------- Methods --------------------

    //region -------------------- Getter --------------------

    public get englishNames() {
        return this.#englishNames;
    }

    public get alreadyAddedName() {
        return this.#alreadyAddedName;
    }

    public get references() {
        return this.#references;
    }

    //endregion -------------------- Getter --------------------

    public addReference(reference: EntityTemplate): void {
        const otherReference = reference.properties.reference;
        [
            otherReference.day, otherReference.night,
            otherReference.style.superMarioBros, otherReference.style.superMarioBros3, otherReference.style.superMarioWorld, otherReference.style.newSuperMarioBrosU, otherReference.style.superMario3DWorld,
            otherReference.theme.ground, otherReference.theme.underground, otherReference.theme.underwater, otherReference.theme.desert, otherReference.theme.snow, otherReference.theme.sky, otherReference.theme.forest, otherReference.theme.ghostHouse, otherReference.theme.airship, otherReference.theme.castle,
        ].filter(otherReference => otherReference !== null)
            .filter(otherReference => otherReference !== 'this')
            .filter(otherReference => !this.alreadyAddedName.includes(otherReference as string))
            .forEach(otherReference => this.__addReference(reference, otherReference as string));
    }

    private __addReference(template: EntityTemplate, reference: string): void {
        if (reference.includes('/'))
            reference.split(' / ')
                .filter(splitReference => splitReference !== 'this')
                .forEach((splitReference, index) => this.__addReferenceToArray(template, splitReference, () => new ReferenceError(`The reference[${index}] ("${splitReference}") is not within the english map`)));
        else
            this.__addReferenceToArray(template, reference, () => new ReferenceError(`The reference value ("${reference}") is not within the english map.`));
        this.alreadyAddedName.push(reference);
    }

    private __addReferenceToArray(template: EntityTemplate, reference: string, errorIfNeverFound: () => ReferenceError): void {
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
        });
    }

    public setReferences(): void {
        this.references.forEach(englishReferenceToWatch => {
            const referenceWatched = this.englishNames.get(englishReferenceToWatch.value)!;

            //Addition on both references to their other reference table.

            referenceWatched.template.properties.reference.all = referenceWatched.template.properties.reference.all ?? [];
            if (!referenceWatched.template.properties.reference.all.includes(englishReferenceToWatch.reference))
                referenceWatched.template.properties.reference.all.push(englishReferenceToWatch.reference);

            englishReferenceToWatch.reference.properties.reference.all = englishReferenceToWatch.reference.properties.reference.all ?? [];
            if (!englishReferenceToWatch.reference.properties.reference.all.includes(referenceWatched.template))
                englishReferenceToWatch.reference.properties.reference.all.push(referenceWatched.template);
        });
    }

    //endregion -------------------- Methods --------------------

}

//endregion -------------------- Template related methods & classes --------------------
