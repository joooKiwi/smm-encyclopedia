import everyEntities from '../../resources/Entities.csv';

import type {CanRespawnOnlineOutOfABlockType, CanRespawnOnlineType, CanRespawnType, EntityLink, EveryPossibleLinkedBehaviourAcronymArray, PossibleEntityType, PossibleLightSource, PossibleLocalCoopBehaviourType, PossibleOnlineCoopBehaviourType, PossibleOnlineVersusBehaviourType, PossibleSoloBehaviourType}                                                                                                                                                                                 from '../entityTypes';
import type {CustomLimitType, EditorLimitType, GeneralEntityLimitType, GeneralGlobalEntityLimitType, OffscreenDespawningDownwardVerticalRangeLimitType, OffscreenDespawningHorizontalRangeLimitType, OffscreenDespawningUpwardVerticalRangeLimitType, OffscreenSpawningAndDespawningReferencePoint, OffscreenSpawningDownwardVerticalRangeLimitType, OffscreenSpawningHorizontalRangeLimitType, OffscreenSpawningUpwardVerticalRangeLimitType, PowerUpEntityLimitType, ProjectileEntityLimitType} from '../properties/limit/Loader.types';
import type {Entity}                                                                                                                                                                                                                                                                                                                                                                                                                                                                              from './Entity';
import type {EntityCategory}                                                                                                                                                                                                                                                                                                                                                                                                                                                                      from '../category/EntityCategory';
import type {EntityLimitWithPossibleAlternativeEntityLimit}                                                                                                                                                                                                                                                                                                                                                                                                                                       from '../limit/EntityLimit';
import type {EntityTemplate}                                                                                                                                                                                                                                                                                                                                                                                                                                                                      from './Entity.template';
import type {Headers as LanguagesHeaders, PropertiesArray as LanguagesPropertyArray}                                                                                                                                                                                                                                                                                                                                                                                                              from '../../lang/Loader.types';
import type {Headers as GamesHeaders, PropertiesArray as GamesPropertyArray}                                                                                                                                                                                                                                                                                                                                                                                                                      from '../game/Loader.types';
import type {Loader}                                                                                                                                                                                                                                                                                                                                                                                                                                                                              from '../../util/loader/Loader';
import type {PossibleCourseTheme}                                                                                                                                                                                                                                                                                                                                                                                                                                                                 from '../theme/Themes.types';
import type {PossibleEntityCategories}                                                                                                                                                                                                                                                                                                                                                                                                                                                            from '../category/EntityCategories.types';
import type {PossibleEntityLimits}                                                                                                                                                                                                                                                                                                                                                                                                                                                                from '../limit/EntityLimits.types';
import type {PossibleGameStyleAcronym}                                                                                                                                                                                                                                                                                                                                                                                                                                                            from '../gameStyle/GameStyles.types';
import type {PossibleTimeName}                                                                                                                                                                                                                                                                                                                                                                                                                                                                    from '../time/Times.types';
import type {SMM2NameTemplate}                                                                                                                                                                                                                                                                                                                                                                                                                                                                    from '../lang/SMM2Name.template';

import {CallbackCaller}               from '../../util/CallbackCaller';
import {CSVLoader}                    from '../../util/loader/CSVLoader';
import {EntityCategoryLoader}         from '../category/EntityCategoryLoader';
import {EntityBuilder}                from './EntityBuilder';
import {EntityLimitLoader}            from '../limit/EntityLimitLoader';
import {GenericSingleInstanceBuilder} from '../../util/GenericSingleInstanceBuilder';

//region -------------------- CSV array related types --------------------

type Headers =
    | 'entityType'

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

    | `offscreen${| 'SpawningAndDespawningReferencePoint' | `${| 'Spawning' | 'Despawning'}${| 'Horizontal' | `${| 'Upward' | 'Downward'}Vertical`}Range`}`
    | `canRespawn${| '' | `_online${| '' | '_insideABlock'}`}` | `behaviour_${'solo' | 'localCoop' | `online${| 'Coop' | 'VS'}`}`

    | `in${PossibleTimeName}Theme`
    | `in${| Exclude<PossibleCourseTheme, 'Ghost House'> | 'GhostHouse'}Theme`
    | `in${PossibleGameStyleAcronym}GameStyle`

    | LanguagesHeaders;
//region -------------------- Exclusive properties --------------------

type ExclusivePropertiesArray1 = [
    entityType: PossibleEntityType,
];
type ExclusivePropertiesArray2 = [
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

    editorLimit: EditorLimitType,

    whilePlaying_isInGEL: GeneralEntityLimitType,
    whilePlaying_isInGel_comment: | string | null,
    whilePlaying_isInGEL_isSuperGlobal: GeneralGlobalEntityLimitType,
    whilePlaying_isInGEL_isSuperGlobal_comment: | string | null,

    whilePlaying_isInPEL: PowerUpEntityLimitType,
    whilePlaying_isInPEL_comment: | string | null,

    whilePlaying_isInPJL: ProjectileEntityLimitType,
    whilePlaying_isInPJL_comment: | string | null,

    whilePlaying_customLimit: CustomLimitType,
    whilePlaying_customLimit_comment: | string | null,

    //endregion ---------- Entity limit properties ----------
    //region ---------- Spawning / Despawning range properties ----------

    canRespawn: CanRespawnType,
    canRespawn_online: CanRespawnOnlineType,
    canRespawn_online_insideABlock: CanRespawnOnlineOutOfABlockType,

    behaviour_solo: PossibleSoloBehaviourType,
    behaviour_localCoop: PossibleLocalCoopBehaviourType,
    behaviour_onlineCoop: PossibleOnlineCoopBehaviourType,
    behaviour_onlineVS: PossibleOnlineVersusBehaviourType,


    offscreenSpawningAndDespawningReferencePoint: OffscreenSpawningAndDespawningReferencePoint,
    offscreenSpawningHorizontalRange: OffscreenSpawningHorizontalRangeLimitType,
    offscreenDespawningHorizontalRange: OffscreenDespawningHorizontalRangeLimitType,

    offscreenSpawingUpwardVerticalRange: OffscreenSpawningUpwardVerticalRangeLimitType,
    offscreenDespawningUpwardVerticalRange: OffscreenDespawningUpwardVerticalRangeLimitType,

    offscreenSpawningDownwardVerticalRange: OffscreenSpawningDownwardVerticalRangeLimitType,
    offscreenDespawningDownwardVerticalRange: OffscreenDespawningDownwardVerticalRangeLimitType,

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

//region -------------------- Exclusive properties --------------------
type PropertiesArray = [
    ...ExclusivePropertiesArray1,
    ...GamesPropertyArray,
    ...ExclusivePropertiesArray2,
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

    public static readonly UNKNOWN_CHARACTER = '?';
    public static readonly INFINITE_CHARACTER = '∞';
    public static readonly THIS_REFERENCE = 'this';

    static readonly #instance = new EntityLoader();

    //region ---------- External object references ----------

    readonly #everyEntityCategories: CallbackCaller<Map<string, EntityCategory>>;
    readonly #everyEntityLimits: CallbackCaller<Map<string, EntityLimitWithPossibleAlternativeEntityLimit>>;
    readonly #everyEntitiesMap: CallbackCaller<Map<string, DebugEntityReferences>>;

    //endregion ---------- External object references ----------

    private constructor() {
        this.#everyEntityCategories = new CallbackCaller(() => EntityCategoryLoader.get.load());
        this.#everyEntityLimits = new CallbackCaller(() => EntityLimitLoader.get.load());
        this.#everyEntitiesMap = new CallbackCaller(() => {
            const references: Map<string, DebugEntityReferences> = new Map();
            const referencesToWatch = new ReferencesToWatch(references);

            EntityBuilder.references = references;
            EntityBuilder.categoriesMap = this.entityCategories;

            const csvLoader = new CSVLoader<PropertiesArray, EntityTemplate, Headers>(everyEntities, convertedContent => TemplateCreator.createTemplate(convertedContent))
                .convertTo(['Entity', 'Projectile', 'Entity & Projectile', '(Entity) & Projectile',], 'entityType',)
                .convertToNullableBoolean('isInSuperMarioMaker1', 'isInSuperMarioMaker2',)
                .convertTo(this.entityCategoriesNames, 'categoryInTheEditor',)
                .convertToNullableBoolean('hasAMushroomVariant',)
                .convertToNullableBooleanAnd(EntityLoader.UNKNOWN_CHARACTER, 'canBeInAParachute', 'canHaveWings',)

                .convertToNullableBoolean('canContainOrSpawnAKey', 'canBePutInAOnOffBlock',)

                .convertToNullableBooleanAnd(EntityLoader.UNKNOWN_CHARACTER, 'canBePutOnATrack',)
                .convertToEmptyableStringAnd(this.entityLimitsNames, 'editorLimit_canBePutOnATrack', 'whilePlaying_canBePutOnATrack',)

                .convertToNullableBoolean('canSpawnOutOfAPipe', 'canBePutInASwingingClaw',)
                .convertToNullableBooleanAnd(EntityLoader.UNKNOWN_CHARACTER, 'canBeThrownByALakitu', 'canBePutInALakituCloud',)
                .convertToNullableBoolean('canBePutInAClownCar', 'canBeFiredOutOfABulletLauncher', 'canBePutInABlock', 'canBePutInATree',)

                .convertTo([EntityLoader.UNKNOWN_CHARACTER, 'Full light', 'Dim light', 'Project a light in front of them', 'Variable', 'Custom',], 'lightSourceEmitted')
                .convertToNullableBooleanAnd(EntityLoader.UNKNOWN_CHARACTER, 'lightSourceEmitted_isInSMB',)
                .convertToNullableBooleanAnd('NSMBU', 'canIgniteABobOmb',)
                .convertToNullableBoolean('canGoThroughWalls', 'canBeStacked',)
                .convertToNullableBooleanAnd('SM3DW', 'isGlobalGroundOrGlobal',)
                .convertToNullableBooleanAnd(EntityLoader.UNKNOWN_CHARACTER, 'canMakeASoundOutOfAMusicBlock',)

                .convertTo([EntityLoader.UNKNOWN_CHARACTER, ...this.entityLimitsNames,], 'editorLimit',)
                .convertToNullableBooleanAnd('Not on track', 'whilePlaying_isInGEL_isSuperGlobal',)
                .convertToNullableBooleanAnd(['number',/*2*/ 'Only when collected',], 'whilePlaying_isInGEL',)
                .convertToNullableBoolean('whilePlaying_isInPEL',)
                .convertToNullableBooleanAnd([EntityLoader.UNKNOWN_CHARACTER, 'Temporary as it comes out', 'Each one separated',], 'whilePlaying_isInPJL',)
                .convertTo([EntityLoader.UNKNOWN_CHARACTER, ...this.entityLimitsNames,], 'whilePlaying_customLimit',)
                .convertToEmptyableString(
                    'whilePlaying_isInGEL_comment', 'whilePlaying_isInGEL_isSuperGlobal_comment',
                    'whilePlaying_isInPEL_comment',
                    'whilePlaying_isInPJL_comment',
                    'whilePlaying_customLimit_comment',
                )

                .convertToNullableBooleanAnd([EntityLoader.UNKNOWN_CHARACTER, 'With Vine',], 'canRespawn',)
                .convertToNullableBooleanAnd(EntityLoader.UNKNOWN_CHARACTER, 'canRespawn_online', 'canRespawn_online_insideABlock',)
                .convertToEmptyableString('behaviour_solo', 'behaviour_localCoop', 'behaviour_onlineCoop', 'behaviour_onlineVS',)//TODO change to any possible behaviour type

                .convertToNullableNumberAnd(['Variable', EntityLoader.INFINITE_CHARACTER,], 'offscreenSpawningHorizontalRange',)
                .convertToNullableNumberAnd(['Variable', 'string',], 'offscreenDespawningHorizontalRange',)
                .convertToNullableNumberAnd(['string', EntityLoader.INFINITE_CHARACTER,], 'offscreenSpawningUpwardVerticalRange')
                .convertToNullableNumberAnd('string', 'offscreenSpawningUpwardVerticalRange',)
                .convertToNullableNumberAnd(['string', EntityLoader.INFINITE_CHARACTER,], 'offscreenSpawningDownwardVerticalRange',)
                .convertToNullableNumberAnd('string', 'offscreenDespawningDownwardVerticalRange',)

                .convertToStringAnd(EntityLoader.THIS_REFERENCE, 'inDayTheme',)
                .convertToEmptyableStringAnd(EntityLoader.THIS_REFERENCE, 'inNightTheme',)

                .convertToStringAnd(EntityLoader.THIS_REFERENCE, 'inGroundTheme', 'inUndergroundTheme', 'inUnderwaterTheme',)
                .convertToEmptyableStringAnd(EntityLoader.THIS_REFERENCE, 'inDesertTheme', 'inSnowTheme', 'inSkyTheme', 'inForestTheme',)
                .convertToStringAnd(EntityLoader.THIS_REFERENCE, 'inGhostHouseTheme', 'inAirshipTheme', 'inCastleTheme',)

                .convertToEmptyableStringAnd(EntityLoader.THIS_REFERENCE, 'inSMBGameStyle', 'inSMB3GameStyle', 'inSMWGameStyle', 'inNSMBUGameStyle', 'inSM3DWGameStyle',)
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
            [content[1], content[2]];
        const [dayLink, nightLink] =
            [content[52], content[53],];
        const [groundLink, undergroundLink, underwaterLink, desertLink, snowLink, skyLink, forestLink, ghostHouseLink, airshipLink, castleLink,] =
            [content[54], content[55], content[56], content[57], content[58], content[59], content[60], content[61], content[62], content[63],];
        const [superMarioBrosLink, superMarioBros3Link, superMarioWorldLink, newSuperMarioBrosULink, superMario3DWorldLink] =
            [content[64], content[65], content[66], content[67], content[68]];

        return {
            properties: {
                editorType: content[0],

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

                categoryInTheEditor: content[3],

                hasAMushroomVariant: content[4],
                canBeInAParachute: content[5],
                canHaveWings: content[6],

                //endregion ---------- Basic properties ----------
                //region ---------- Specific properties ----------

                canContainOrSpawnAKey: content[7],

                canBePutInAOnOffBlock: content[8],

                canBePutOnATrack: {
                    value: content[9],
                    editorLimit: content[10],
                    whilePlaying: content[11],
                },

                canSpawnOutOfAPipe: content[12],

                canBePutInASwingingClaw: content[13],

                canBeThrownByALakitu: content[14],
                canBePutInALakituCloud: content[15],

                canBePutInAClownCar: content[16],

                canBeFiredOutOfABulletLauncher: content[17],

                canBePutInABlock: content[18],

                canBePutInATree: content[19],

                lightSourceEmitted: {
                    value: content[20],
                    isInSMB: content[21]
                },

                canIgniteABobOmb: content[22],

                canGoThroughWalls: content[23],

                canBeStacked: content[24],

                isGlobalGroundOrGlobal: content[25],

                canMakeASoundOutOfAMusicBlock: content[26],

                //endregion ---------- Specific properties ----------
                limits: {
                    editor: content[27],
                    whilePlaying: {
                        isInGEL: {
                            value: {value: content[28], comment: content[29],},
                            isSuperGlobal: {value: content[30], comment: content[31],},
                        },
                        isInPEL: {value: content[32], comment: content[33],},
                        isInPJL: {value: content[34], comment: content[35],},
                        customLimit: {value: content[36], comment: content[37],},
                    },
                },
                canRespawn: {
                    value: content[38],
                    online: {
                        value: content[39],
                        insideABlock: content[40],
                    }
                },
                behaviour: {
                    solo: this.__convertToBehaviourArray(content[41]),
                    localCoop: this.__convertToBehaviourArray(content[42]),
                    online: {
                        coop: this.__convertToBehaviourArray(content[43]),
                        versus: this.__convertToBehaviourArray(content[44]),
                    },
                },
                offscreenRange: {
                    referencePoint: content[45],
                    spawning: {
                        horizontal: content[46],
                        vertical: {
                            upward: content[48],
                            downward: content[50],
                        },
                    },
                    despawning: {
                        horizontal: content[47],
                        vertical: {
                            upward: content[49],
                            downward: content[51],
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
                    time: {
                        day: dayLink,
                        night: nightLink,
                    },
                    group: {
                        all: null,
                        gameStyle: null,
                        theme: null,
                        time: null,
                    },
                },
            },
            name: {
                english: {
                    simple: content[69],
                    american: content[70],
                    european: content[71],
                },
                french: {
                    simple: content[72],
                    canadian: content[73],
                    european: content[74],
                },
                german: content[75],
                spanish: {
                    simple: content[76],
                    american: content[77],
                    european: content[78],
                },
                italian: content[79],
                dutch: content[80],
                portuguese: {
                    simple: content[81],
                    american: content[82],
                    european: content[83],
                },
                russian: content[84],
                japanese: content[85],
                chinese: {
                    simple: content[86],
                    simplified: content[87],
                    traditional: content[88],
                },
                korean: content[89],
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

    private static __convertToBehaviourArray(behaviour: | string | null,): EveryPossibleLinkedBehaviourAcronymArray {
        return behaviour == null ? [] : behaviour.split(' / ') as EveryPossibleLinkedBehaviourAcronymArray;
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

//region -------------------- Reference to watch --------------------

interface ReferenceHolder {
    reference: EntityTemplate,
    type: ReferenceType,
    value: EntityLink,
    errorIfNeverFound: () => ReferenceError
}

type ReferenceType = | typeof ReferencesToWatch['TIME'] | typeof ReferencesToWatch['THEME'] | typeof ReferencesToWatch['GAME_STYLE'];

class ReferencesToWatch {

    //region -------------------- Attributes --------------------

    public static readonly TIME = 'time';
    public static readonly THEME = 'theme';
    public static readonly GAME_STYLE = 'gameStyle';

    readonly #englishNames;
    readonly #alreadyAddedName: Set<string>;
    readonly #references: ReferenceHolder[];

    //endregion -------------------- Attributes --------------------

    public constructor(englishNames: Map<string, DebugEntityReferences>,) {
        this.#englishNames = englishNames;
        this.#alreadyAddedName = new Set();
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
            [otherReference.time.day, ReferencesToWatch.TIME,],
            [otherReference.time.night, ReferencesToWatch.TIME,],

            [otherReference.style.superMarioBros, ReferencesToWatch.GAME_STYLE,],
            [otherReference.style.superMarioBros3, ReferencesToWatch.GAME_STYLE,],
            [otherReference.style.superMarioWorld, ReferencesToWatch.GAME_STYLE,],
            [otherReference.style.newSuperMarioBrosU, ReferencesToWatch.GAME_STYLE,],
            [otherReference.style.superMario3DWorld, ReferencesToWatch.GAME_STYLE,],

            [otherReference.theme.ground, ReferencesToWatch.THEME,],
            [otherReference.theme.underground, ReferencesToWatch.THEME,],
            [otherReference.theme.underwater, ReferencesToWatch.THEME,],
            [otherReference.theme.desert, ReferencesToWatch.THEME,],
            [otherReference.theme.snow, ReferencesToWatch.THEME,],
            [otherReference.theme.sky, ReferencesToWatch.THEME,],
            [otherReference.theme.forest, ReferencesToWatch.THEME,],
            [otherReference.theme.ghostHouse, ReferencesToWatch.THEME,],
            [otherReference.theme.airship, ReferencesToWatch.THEME,],
            [otherReference.theme.castle, ReferencesToWatch.THEME,],
        ].filter(([otherReference]) => otherReference !== null) as [EntityLink, ReferenceType][])
            .filter(([otherReference]) => otherReference !== EntityLoader.THIS_REFERENCE)
            .forEach(([otherReference, referenceType,]) => this.__addReference(reference, otherReference, referenceType,));
    }

    private __addReference(template: EntityTemplate, reference: EntityLink, referenceType: ReferenceType,): void {
        if (reference.includes('/'))
            reference.split(' / ')
                .filter(splitReference => splitReference !== EntityLoader.THIS_REFERENCE)
                .forEach((splitReference, index,) => this.__addReferenceToArray(template, splitReference, referenceType, () => new ReferenceError(`The reference[${index}] ("${splitReference}") is not within the english map`),));
        else
            this.__addReferenceToArray(template, reference, referenceType, () => new ReferenceError(`The reference value ("${reference}") is not within the english map.`),);
        this.alreadyAddedName.add(reference);
    }

    private __addReferenceToArray(template: EntityTemplate, reference: EntityLink, referenceType: ReferenceType, errorIfNeverFound: () => ReferenceError,): void {
        this.references.push({
            reference: template,
            type: referenceType,
            value: reference,
            errorIfNeverFound: errorIfNeverFound,
        });
    }

    public testReferences(): void {
        this.references.forEach(englishReferenceToWatch => {
            const referenceWatched = this.englishNames.get(englishReferenceToWatch.value);
            if (referenceWatched == null)
                throw englishReferenceToWatch.errorIfNeverFound();
        });
    }

    /**
     * Add every references on both individual {@link references}
     * and the {@link ReferenceHolder.value reference value} inside {@link ReferenceHolder}.
     *
     * It also add each reference into the proper type ({@link ReferenceType}).
     *
     * @see EntityReferencesTemplate.group
     */
    public setReferences(): void {
        this.references.forEach(reference => {
            const referenceWatched = this.englishNames.get(reference.value)!;

            const referenceToWatchTemplate = reference.reference;
            const referenceWatchedTemplate = referenceWatched.template;

            (referenceWatchedTemplate.properties.reference.group.all ??= new Set()).add(referenceToWatchTemplate);
            (referenceToWatchTemplate.properties.reference.group.all ??= new Set()).add(referenceWatchedTemplate);
            switch (reference.type) {
                case ReferencesToWatch.GAME_STYLE:
                    (referenceWatchedTemplate.properties.reference.group.gameStyle ??= new Set()).add(referenceToWatchTemplate);
                    (referenceToWatchTemplate.properties.reference.group.gameStyle ??= new Set()).add(referenceWatchedTemplate);
                    break;
                case ReferencesToWatch.THEME:
                    (referenceWatchedTemplate.properties.reference.group.theme ??= new Set()).add(referenceToWatchTemplate);
                    (referenceToWatchTemplate.properties.reference.group.theme ??= new Set()).add(referenceWatchedTemplate);
                    break;
                case ReferencesToWatch.TIME:
                    (referenceWatchedTemplate.properties.reference.group.time ??= new Set()).add(referenceToWatchTemplate);
                    (referenceToWatchTemplate.properties.reference.group.time ??= new Set()).add(referenceWatchedTemplate);
                    break;
            }
        });
    }

    //endregion -------------------- Methods --------------------

}

//endregion -------------------- Reference to watch --------------------

//endregion -------------------- Template related methods & classes --------------------
