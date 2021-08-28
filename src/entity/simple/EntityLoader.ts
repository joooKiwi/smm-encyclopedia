import everyEntities from '../../resources/Entities.csv';

import type {Entity}                                                                                                           from './Entity';
import type {EntityCategory}                                                                                                   from '../category/EntityCategory';
import type {EntityLimit}                                                                                                      from '../limit/EntityLimit';
import type {EntityLink, GeneralEntityLimitType, GeneralGlobalEntityLimitType, PossibleLightSource, ProjectileEntityLimitType} from '../entityTypes';
import type {EntityTemplate}                                                                                                   from './Entity.template';
import type {Headers as LanguagesHeaders, PropertiesArray as LanguagesPropertyArray}                                           from '../../lang/Loader.types';
import type {Headers as GamesHeaders, PropertiesArray as GamesPropertyArray}                                                   from '../game/Loader.types';
import type {Loader}                                                                                                           from '../../util/loader/Loader';
import type {PossibleCourseTheme}                                                                                              from '../theme/Themes.types';
import type {PossibleEntityCategories}                                                                                         from '../category/EntityCategories.types';
import type {PossibleEntityLimits}                                                                                             from '../limit/EntityLimits.types';
import type {PossibleGameStyleAcronym}                                                                                         from '../gameStyle/GameStyles.types';
import type {PossibleTimeName}                                                                                                 from '../time/Times.types';
import type {SMM2NameTemplate}                                                                                                 from '../lang/SMM2Name.template';

import {CallbackCaller}               from '../../util/CallbackCaller';
import {CSVLoader}                    from '../../util/loader/CSVLoader';
import {EntityCategoryLoader}         from '../category/EntityCategoryLoader';
import {EntityBuilder}                from './EntityBuilder';
import {EntityLimitLoader}            from '../limit/EntityLimitLoader';
import {GenericSingleInstanceBuilder} from '../../util/GenericSingleInstanceBuilder';

//region -------------------- CSV array related types --------------------

type Headers =
    | GamesHeaders
    | 'categoryInTheEditor'
    | 'hasAMushroomVariant' | `can${| 'BeInAParachute' | 'HaveWings'}`

    | 'canContainOrSpawnAKey' | 'canBePutInAOnOffBlock' | `${| 'editorLimit_' | 'whilePlaying_' | ''}canBePutOnATrack`
    | 'canSpawnOutOfAPipe' | 'canBePutInASwingingClaw'
    | 'canBeThrownByALakitu' | 'canBePutInALakituCloud'
    | 'canBePutInAClownCar' | 'canBeFiredOutOfABulletLauncher' | `canBePutInA${| 'Block' | 'Tree'}`
    | `lightSourceEmitted${| '' | '_isInSMB'}`
    | 'canIgniteABobOmb' | 'canGoThroughWalls' | 'canBeStacked' | 'isGlobalGroundOrGlobal' | 'canMakeASoundOutOfAMusicBlock'

    | 'editorLimit'
    | `${`whilePlaying_${| `isInGEL${| '' | '_isSuperGlobal'}` | 'isInPEL' | 'isInPJL' | 'customLimit'}`}${| '' | '_comment'}`

    | `whilePlaying_offscreen${| 'Spawning' | 'Despawning'}${| 'Horizontal' | `${| 'Upward' | 'Downward'}Vertical`}Range`

    | `in${PossibleTimeName}Theme`
    | `in${| Exclude<PossibleCourseTheme, 'Ghost House'> | 'GhostHouse'}Theme`
    | `in${PossibleGameStyleAcronym}GameStyle`

    | LanguagesHeaders;
type ExclusivePropertiesArray = [
    //region ---------- Basic properties ----------

    categoryInTheEditor: | PossibleEntityCategories | null,

    hasAMushroomVariant: | boolean | null,
    canBeInAParachute: | boolean | '?' | null,
    canHaveWings: boolean | '?',

    //endregion ---------- Basic properties ----------
    //region ---------- Specific properties ----------

    canContainOrSpawnAKey: | boolean | null,

    canBePutInAOnOffBlock: | boolean | null,

    canBePutOnATrack: | boolean | '?' | null,
    editorLimit_canBePutOnATrack: | PossibleEntityLimits | null,
    whilePlaying_canBePutOnATrack: | PossibleEntityLimits | null,

    canSpawnOutOfAPipe: | boolean | null,

    canBePutInASwingingClaw: | boolean | null,

    canBeThrownByALakitu: | boolean | '?' | null,
    canBePutInALakituCloud: | boolean | '?' | null,

    canBePutInAClownCar: | boolean | null,

    canBeFiredOutOfABulletLauncher: | boolean | null,

    canBePutInABlock: | boolean | null,

    canBePutInATree: | boolean | null,

    lightSourceEmitted: PossibleLightSource,
    lightSourceEmitted_isInSMB: | boolean | null,

    canIgniteABobOmb: | boolean | 'NSMBU' | null,

    canGoThroughWalls: | boolean | null,

    canBeStacked: | boolean | null,

    isGlobalGroundOrGlobal: | boolean | 'SM3DW' | null,

    canMakeASoundOutOfAMusicBlock: | boolean | '?' | null,

    //endregion ---------- Specific properties ----------
    //region ---------- Entity limit properties ----------

    editorLimit: | PossibleEntityLimits | '?' | null,

    whilePlaying_isInGEL: GeneralEntityLimitType,
    whilePlaying_isInGel_comment: | string | null,
    whilePlaying_isInGEL_isSuperGlobal: GeneralGlobalEntityLimitType,
    whilePlaying_isInGEL_isSuperGlobal_comment: | string | null,

    whilePlaying_isInPEL: | boolean | null,
    whilePlaying_isInPEL_comment: | string | null,

    whilePlaying_isInPJL: ProjectileEntityLimitType,
    whilePlaying_isInPJL_comment: | string | null,

    whilePlaying_customLimit: | PossibleEntityLimits | '?' | null,
    whilePlaying_customLimit_comment: | string | null,

    //endregion ---------- Entity limit properties ----------
    //region ---------- Spawning / Despawning range properties ----------

    whilePlaying_offscreenSpawningHorizontalRange: | number | 'Variable' | null,
    whilePlaying_offscreenDespawningHorizontalRange: | number | 'Variable' | 'Infinity' | null,

    whilePlaying_offscreenSpawingUpwardVerticalRange: | number | null,
    whilePlaying_offscreenDespawningUpwardVerticalRange: | number | null,

    whilePlaying_offscreenSpawningDownwardVerticalRange: | number | null,
    whilePlaying_offscreenDespawningDownwardVerticalRange: | number | null,

    //endregion ---------- Spawning / Despawning range properties ----------
    //region ---------- Reference on specific condition properties ----------

    inDayTheme: EntityLink,
    inNightTheme: | EntityLink | null,

    inGroundTheme: EntityLink,
    inUndergroundTheme: EntityLink,
    inUnderwaterTheme: EntityLink,
    inDesertTheme: | EntityLink | null,
    inSnowTheme: | EntityLink | null,
    inSkyTheme: | EntityLink | null,
    inForestTheme: | EntityLink | null,
    inGhostHouseTheme: EntityLink,
    inAirshipTheme: EntityLink,
    inCastleTheme: EntityLink,

    inSMBGameStyle: | EntityLink | null,
    inSMB3GameStyle: | EntityLink | null,
    inSMWGameStyle: | EntityLink | null,
    inNSMBUGameStyle: | EntityLink | null,
    inSM3DWGameStyle: | EntityLink | null,

    //endregion ---------- Reference on specific condition properties ----------
];
type PropertiesArray = [
    ...GamesPropertyArray,
    ...ExclusivePropertiesArray,
    ...LanguagesPropertyArray,
];

//endregion -------------------- CSV array related types --------------------

export interface DebugEntityReferences {

    originalContent: readonly string[]
    arrayConverted: PropertiesArray
    template: EntityTemplate
    entity?: Entity

}

/**
 * @singleton
 */
export class EntityLoader
    implements Loader<ReadonlyMap<string, DebugEntityReferences>> {

    static readonly #instance = new EntityLoader();

    //region ---------- External object references ----------

    readonly #everyEntityCategories: CallbackCaller<Map<string, EntityCategory>>;
    readonly #everyEntityLimits: CallbackCaller<Map<string, EntityLimit>>;
    readonly #everyEntitiesMap: CallbackCaller<Map<string, DebugEntityReferences>>;

    //endregion ---------- External object references ----------

    private constructor() {
        this.#everyEntityCategories = new CallbackCaller(() => EntityCategoryLoader.get.load());
        this.#everyEntityLimits = new CallbackCaller(() => EntityLimitLoader.get.load());
        this.#everyEntitiesMap = new CallbackCaller(() => {
            const [unknownCharacter, thisText,] = ['?', 'this',];
            const references: Map<string, DebugEntityReferences> = new Map();
            const referencesToWatch = new ReferencesToWatch(references);
            EntityBuilder.references = references;
            EntityBuilder.categoriesMap = this.entityCategories;

            const csvLoader = new CSVLoader<PropertiesArray, EntityTemplate, Headers>(everyEntities, convertedContent => TemplateCreator.createTemplate(convertedContent))
                .convertToNullableBoolean('isInSuperMarioMaker1', 'isInSuperMarioMaker2',)
                .convertToEmptyableStringAnd(this.entityCategoriesNames, 'categoryInTheEditor',)
                .convertToNullableBoolean('hasAMushroomVariant',)
                .convertToNullableBooleanAnd(unknownCharacter, 'canBeInAParachute', 'canHaveWings',)

                .convertToNullableBoolean('canContainOrSpawnAKey', 'canBePutInAOnOffBlock',)

                .convertToNullableBooleanAnd(unknownCharacter, 'canBePutOnATrack',)
                .convertToEmptyableStringAnd(this.entityLimitsNames, 'editorLimit_canBePutOnATrack', 'whilePlaying_canBePutOnATrack',)

                .convertToNullableBoolean('canSpawnOutOfAPipe', 'canBePutInASwingingClaw',)
                .convertToNullableBooleanAnd(unknownCharacter, 'canBeThrownByALakitu', 'canBePutInALakituCloud',)
                .convertToNullableBoolean('canBePutInAClownCar', 'canBeFiredOutOfABulletLauncher', 'canBePutInABlock', 'canBePutInATree',)

                .convertToEmptyableStringAnd([unknownCharacter, 'Full light', 'Dim light', 'Project a light in front of them', 'Variable', 'Custom',], 'lightSourceEmitted')
                .convertToNullableBooleanAnd(unknownCharacter, 'lightSourceEmitted_isInSMB',)
                .convertToNullableBooleanAnd('NSMBU', 'canIgniteABobOmb',)
                .convertToNullableBoolean('canGoThroughWalls', 'canBeStacked',)
                .convertToNullableBooleanAnd('SM3DW', 'isGlobalGroundOrGlobal',)
                .convertToNullableBooleanAnd(unknownCharacter, 'canMakeASoundOutOfAMusicBlock',)

                .convertToEmptyableStringAnd([unknownCharacter, ...this.entityLimitsNames,], 'editorLimit',)
                .convertToNullableBooleanAnd('Not on track', 'whilePlaying_isInGEL_isSuperGlobal',)
                .convertToNullableBooleanAnd(['number',/*2*/ 'Variable',], 'whilePlaying_isInGEL',)
                .convertToNullableBoolean('whilePlaying_isInPEL',)
                .convertToEmptyableStringAnd(['boolean', unknownCharacter, 'Temporary as it comes out',], 'whilePlaying_isInPJL',)
                .convertToEmptyableStringAnd(this.entityLimitsNames, 'whilePlaying_customLimit',)
                .convertToNullableNumberAnd('Variable', 'whilePlaying_offscreenSpawningHorizontalRange',)
                .convertToNullableNumberAnd(['Variable', 'Infinity',], 'whilePlaying_offscreenDespawningHorizontalRange',)
                .convertToNullableNumber('whilePlaying_offscreenSpawningUpwardVerticalRange', 'whilePlaying_offscreenDespawningUpwardVerticalRange',
                    'whilePlaying_offscreenSpawningDownwardVerticalRange', 'whilePlaying_offscreenDespawningDownwardVerticalRange',)
                .convertToEmptyableString(
                    'whilePlaying_isInGEL_comment', 'whilePlaying_isInGEL_isSuperGlobal_comment',
                    'whilePlaying_isInPEL_comment',
                    'whilePlaying_isInPJL_comment',
                    'whilePlaying_customLimit_comment',
                )

                .convertToStringAnd(thisText, 'inDayTheme',)
                .convertToEmptyableStringAnd(thisText, 'inNightTheme',)

                .convertToStringAnd(thisText, 'inGroundTheme', 'inUndergroundTheme', 'inUnderwaterTheme',)
                .convertToEmptyableStringAnd(thisText, 'inDesertTheme', 'inSnowTheme', 'inSkyTheme', 'inForestTheme',)
                .convertToStringAnd(thisText, 'inGhostHouseTheme', 'inAirshipTheme', 'inCastleTheme',)

                .convertToEmptyableStringAnd(thisText, 'inSMBGameStyle', 'inSMB3GameStyle', 'inSMWGameStyle', 'inNSMBUGameStyle', 'inSM3DWGameStyle',)
                // .convertToHeadersAnd(['english', 'americanEnglish',], thisText,'inDayTheme',)
                // .convertToNullableHeadersAnd(['english', 'americanEnglish',], thisText,'inNightTheme',)
                //
                // .convertToHeadersAnd(['english', 'americanEnglish',], thisText,'inGroundTheme', 'inUndergroundTheme', 'inUnderwaterTheme',)
                // .convertToNullableHeadersAnd(['english', 'americanEnglish',], 'inDesertTheme', 'inSnowTheme', 'inSkyTheme', 'inForestTheme',)
                // .convertToHeadersAnd(['english', 'americanEnglish',], thisText,'inGhostHouseTheme', 'inAirshipTheme', 'inCastleTheme',)
                //
                // .convertToHeadersAnd(['english', 'americanEnglish',], thisText, 'inSMBGameStyle', 'inSMB3GameStyle', 'inSMWGameStyle', 'inNSMBUGameStyle', 'inSM3DWGameStyle',)

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
                .onAfterFinalObjectCreated((finalContent, convertedContent, originalContent,) => {
                    const name = finalContent.name;
                    NameCreator.addEnglishReference(name, references, originalContent, convertedContent, finalContent);
                    referencesToWatch.addReference(finalContent);
                })
                .onInitialisationEnd(() => {
                    referencesToWatch.testReferences();
                    referencesToWatch.setReferences();
                    references.forEach(reference => reference.entity = new GenericSingleInstanceBuilder(new EntityBuilder(reference.template)).build());
                })
                .load();

            console.log('-------------------- entity has been loaded --------------------');// temporary console.log
            console.log(csvLoader.content);// temporary console.log
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

    private get entityLimits() {
        return this.#everyEntityLimits.get;
    }

    private get entityLimitsNames() {
        return [...this.entityLimits.keys()];
    }


    public load() {
        return this.#everyEntitiesMap.get;
    }

}

//region -------------------- Template related methods & classes --------------------

class TemplateCreator {

    public static createTemplate(content: PropertiesArray,): EntityTemplate {
        const [isInSuperMarioMaker1, isInSuperMarioMaker2] =
            [content[0], content[1]];
        const [dayLink, nightLink] =
            [content[43], content[44],];
        const [groundLink, undergroundLink, underwaterLink, desertLink, snowLink, skyLink, forestLink, ghostHouseLink, airshipLink, castleLink,] =
            [content[45], content[46], content[47], content[48], content[49], content[50], content[51], content[52], content[53], content[54],];
        const [superMarioBrosLink, superMarioBros3Link, superMarioWorldLink, newSuperMarioBrosULink, superMario3DWorldLink] =
            [content[55], content[56], content[57], content[58], content[59]];

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
                            value: {value: content[27], comment: content[28],},
                            isSuperGlobal: {value: content[29], comment: content[30],},
                        },
                        isInPEL: {value: content[31], comment: content[32],},
                        isInPJL: {value: content[33], comment: content[34],},
                        customLimit: {value: content[35], comment: content[36],},
                        offscreenRange: {
                            spawning: {
                                horizontal: content[37],
                                vertical: {
                                    upward: content[39],
                                    downward: content[41],
                                },
                            },
                            despawning: {
                                horizontal: content[38],
                                vertical: {
                                    upward: content[40],
                                    downward: content[42],
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
                    simple: content[60],
                    american: content[61],
                    european: content[62],
                },
                french: {
                    simple: content[63],
                    canadian: content[64],
                    european: content[65],
                },
                german: content[66],
                spanish: {
                    simple: content[67],
                    american: content[68],
                    european: content[69],
                },
                italian: content[70],
                dutch: content[71],
                portuguese: {
                    simple: content[72],
                    american: content[73],
                    european: content[74],
                },
                russian: content[75],
                japanese: content[76],
                chinese: {
                    simple: content[77],
                    simplified: content[78],
                    traditional: content[79],
                },
                korean: content[80],
            },
        };
    }

    private static __convertLinkToOnlyBoolean(link: | EntityLink | null,) {
        return link !== null && this.__convertLinkToBoolean(link);
    }

    private static __convertLinkToBoolean(link: EntityLink,): boolean {
        return link.includes('this');
    }

    private static __convertLinkToNullableBoolean(link: | EntityLink | null,): | boolean | null {
        return link === null ? null : this.__convertLinkToBoolean(link);
    }

}

/**
 * @temporary
 */
class NameCreator {

    private static __testName(name: SMM2NameTemplate,): void {
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

    public static addEnglishReference(name: SMM2NameTemplate, englishNames: Map<string, DebugEntityReferences>, originalContent: readonly string[], convertedContent: PropertiesArray, template: EntityTemplate,): void {
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

    public constructor(englishNames: Map<string, DebugEntityReferences>,) {
        this.#englishNames = englishNames;
        this.#alreadyAddedName = [];
        this.#references = [];
    }

    //region -------------------- Getter methods --------------------

    public get englishNames() {
        return this.#englishNames;
    }

    public get alreadyAddedName() {
        return this.#alreadyAddedName;
    }

    public get references() {
        return this.#references;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public addReference(reference: EntityTemplate,): void {
        const otherReference = reference.properties.reference;
        ([
            otherReference.day, otherReference.night,
            otherReference.style.superMarioBros, otherReference.style.superMarioBros3, otherReference.style.superMarioWorld, otherReference.style.newSuperMarioBrosU, otherReference.style.superMario3DWorld,
            otherReference.theme.ground, otherReference.theme.underground, otherReference.theme.underwater, otherReference.theme.desert, otherReference.theme.snow, otherReference.theme.sky, otherReference.theme.forest, otherReference.theme.ghostHouse, otherReference.theme.airship, otherReference.theme.castle,
        ].filter(otherReference => otherReference !== null) as string[])
            .filter(otherReference => otherReference !== 'this')
            .filter(otherReference => !this.alreadyAddedName.includes(otherReference))
            .forEach(otherReference => this.__addReference(reference, otherReference));
    }

    private __addReference(template: EntityTemplate, reference: string,): void {
        if (reference.includes('/'))
            reference.split(' / ')
                .filter(splitReference => splitReference !== 'this')
                .forEach((splitReference, index) => this.__addReferenceToArray(template, splitReference, () => new ReferenceError(`The reference[${index}] ("${splitReference}") is not within the english map`)));
        else
            this.__addReferenceToArray(template, reference, () => new ReferenceError(`The reference value ("${reference}") is not within the english map.`));
        this.alreadyAddedName.push(reference);
    }

    private __addReferenceToArray(template: EntityTemplate, reference: string, errorIfNeverFound: () => ReferenceError,): void {
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

            referenceWatched.template.properties.reference.all ??= [];
            if (!referenceWatched.template.properties.reference.all.includes(englishReferenceToWatch.reference))
                referenceWatched.template.properties.reference.all.push(englishReferenceToWatch.reference);

            englishReferenceToWatch.reference.properties.reference.all ??= [];
            if (!englishReferenceToWatch.reference.properties.reference.all.includes(referenceWatched.template))
                englishReferenceToWatch.reference.properties.reference.all.push(referenceWatched.template);
        });
    }

    //endregion -------------------- Methods --------------------

}

//endregion -------------------- Template related methods & classes --------------------
