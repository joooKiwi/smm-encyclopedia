import everyEntities from '../../resources/Entities.csv';

import type {Builder}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   from '../../util/Builder';
import type {CanBeAffectedByATwister, CanBeFiredOutOfABulletLauncher, CanBePutInABlock, CanBePutInAClownCar, CanBePutInALakituCloud, CanBePutInASwingingClaw, CanBePutInATree, CanBePutOnATrack, CanBeStacked, CanBeThrownByALakitu, CanContainOrSpawnAKey, CanGoThroughWalls, CanGoThroughWallsInSM3DW, CanIgniteABobOmb, CanMakeASoundOutOfAMusicBlock, CanSpawnOutOfAPipe, CanSurviveInTheLavaOrThePoison, EntityLink, HasALightSourceEmittedInSMB, HasAReferenceInMarioMaker, IsAffectedDirectlyByAnOnOrOffState, IsGlobalGroundOrGlobal, PossibleEntityType, PossibleLightSource}                                                                                                                  from '../entityTypes';
import type {CanRespawnOnlineOutOfABlockType, CanRespawnOnlineType, CanRespawnType, EveryPossibleLinkedBehaviourAcronymArray, PossibleLocalCoopBehaviourType, PossibleOnlineCoopBehaviourType, PossibleOnlineVersusBehaviourType, PossibleSoloBehaviourType}                                                                                                                                                                                                                                                                                                                                                                                                                                            from '../behaviours/Loader.types';
import type {CustomLimitCommentType, CustomLimitType, EditorLimitType, GeneralEntityLimitCommentType, GeneralEntityLimitType, GeneralGlobalEntityLimitCommentType, GeneralGlobalEntityLimitType, LimitAmountCommentType, LimitAmountType, OffscreenDespawningDownwardVerticalRangeLimitType, OffscreenDespawningHorizontalRangeLimitType, OffscreenDespawningUpwardVerticalRangeLimitType, OffscreenSpawningAndDespawningReferencePoint, OffscreenSpawningDownwardVerticalRangeLimitType, OffscreenSpawningHorizontalRangeLimitType, OffscreenSpawningUpwardVerticalRangeLimitType, PowerUpEntityLimitCommentType, PowerUpEntityLimitType, ProjectileEntityLimitCommentType, ProjectileEntityLimitType} from '../properties/limit/Loader.types';
import type {Entity}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    from './Entity';
import type {EntityTemplate}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            from './Entity.template';
import type {PropertiesArrayWithOptionalLanguages as LanguagesPropertyArray}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            from '../../lang/Loader.types';
import type {PropertiesArray as GamesPropertyArray}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     from '../game/Loader.types';
import type {Loader}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    from '../../util/loader/Loader';
import type {PossibleCanBeInAParachute, PossibleCanHaveWings, PossibleHasAMushroomVariant}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              from '../properties/basic/BasicProperty';
import type {PossibleEntityCategoriesName}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              from '../category/EntityCategories.types';
import type {PossibleEntityLimits}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      from '../limit/EntityLimits.types';
import type {SMM2NameTemplateWithOptionalLanguages}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     from '../lang/SMM2Name.template';

import {AbstractTemplateBuilder}      from '../_template/AbstractTemplate.builder';
import {CSVLoader}                    from '../../util/loader/CSVLoader';
import {EMPTY_ARRAY}                  from '../../util/emptyVariables';
import {EntityCategoryLoader}         from '../category/EntityCategory.loader';
import {EntityBuilder}                from './Entity.builder';
import {GenericSingleInstanceBuilder} from '../../util/GenericSingleInstanceBuilder';
import {HeaderTypesForConvertor}      from '../../util/loader/utility/HeaderTypesForConvertor';

//region -------------------- CSV array related types --------------------

enum Headers {

    entityType,

    //region -------------------- Games --------------------

    isInSuperMarioMaker1,
    isInSuperMarioMaker2,

    //endregion -------------------- Games --------------------
    //region -------------------- Basic properties --------------------

    categoryInTheEditor,

    hasAMushroomVariant,
    canBeInAParachute,
    canHaveWings,

    //endregion -------------------- Basic properties --------------------
    //region -------------------- Specific properties --------------------

    canContainOrSpawnAKey,

    isAffectedDirectlyByAnOnOrOffState,

    canBePutOnATrack,
    editorLimit_canBePutOnATrack,
    whilePlaying_canBePutOnATrack,

    canSpawnOutOfAPipe,

    canBePutInASwingingClaw,

    canBeThrownByALakitu,
    canBePutInALakituCloud,

    canBePutInAClownCar,

    canBeFiredOutOfABulletLauncher,

    canBePutInABlock,

    canBePutInATree,

    lightSourceEmitted, lightSourceEmitted_isInSMB,

    canSurviveInTheLavaOrThePoison,

    canIgniteABobOmb,

    canBeAffectedByATwister,

    canGoThroughWalls, canGoThroughWalls_inSM3DW,

    canBeStacked,

    isGlobalGroundOrGlobal,

    canMakeASoundOutOfAMusicBlock,

    //endregion -------------------- Specific properties --------------------
    //region -------------------- Entity limit properties --------------------

    limitAmount, limitAmount_comment,

    editorLimit,

    whilePlaying_isInGEL, whilePlaying_isInGel_comment,
    whilePlaying_isInGEL_isSuperGlobal, whilePlaying_isInGEL_isSuperGlobal_comment,

    whilePlaying_isInPEL, whilePlaying_isInPEL_comment,

    whilePlaying_isInPJL, whilePlaying_isInPJL_comment,

    whilePlaying_customLimit, whilePlaying_customLimit_comment,

    //endregion -------------------- Entity limit properties --------------------
    //region -------------------- Spawning / Despawning range properties --------------------

    canRespawn, canRespawn_online, canRespawn_online_insideABlock,

    behaviour_solo,
    behaviour_localCoop,
    behaviour_onlineCoop, behaviour_onlineVS,


    offscreenSpawningAndDespawningReferencePoint,
    offscreenSpawningHorizontalRange,
    offscreenDespawningHorizontalRange,

    offscreenSpawningUpwardVerticalRange,
    offscreenDespawningUpwardVerticalRange,

    offscreenSpawningDownwardVerticalRange,
    offscreenDespawningDownwardVerticalRange,

    //endregion -------------------- Spawning / Despawning range properties --------------------
    //region -------------------- Reference on specific condition properties --------------------

    inDayTheme,
    inNightTheme,

    inGroundTheme,
    inUndergroundTheme,
    inUnderwaterTheme,
    inDesertTheme,
    inSnowTheme,
    inSkyTheme,
    inForestTheme,
    inGhostHouseTheme,
    inAirshipTheme,
    inCastleTheme,

    inSMBGameStyle,
    inSMB3GameStyle,
    inSMWGameStyle,
    inNSMBUGameStyle,
    inSM3DWGameStyle,

    //endregion -------------------- Reference on specific condition properties -------------------

    hasANameReferencedInMarioMaker,

    //region -------------------- Languages --------------------

    english, americanEnglish, europeanEnglish,
    french, canadianFrench, europeanFrench,
    german,
    spanish, americanSpanish, europeanSpanish,
    italian,
    dutch,
    portuguese, americanPortuguese, europeanPortuguese,
    russian,
    japanese,
    chinese, traditionalChinese, simplifiedChinese,
    korean,
    greek,

    //endregion -------------------- Languages --------------------

}

//region -------------------- Properties --------------------

//region -------------------- Exclusive properties --------------------

type ExclusivePropertiesArray1 = [
    entityType: PossibleEntityType,
];
type ExclusivePropertiesArray2 = [
    //region -------------------- Basic properties --------------------

    categoryInTheEditor: | PossibleEntityCategoriesName | null,

    hasAMushroomVariant: PossibleHasAMushroomVariant,
    canBeInAParachute: PossibleCanBeInAParachute,
    canHaveWings: PossibleCanHaveWings,

    //endregion -------------------- Basic properties --------------------
    //region -------------------- Specific properties --------------------

    canContainOrSpawnAKey: CanContainOrSpawnAKey,

    isAffectedDirectlyByAnOnOrOffState: IsAffectedDirectlyByAnOnOrOffState,

    canBePutOnATrack: CanBePutOnATrack,
    editorLimit_canBePutOnATrack: | PossibleEntityLimits | null,
    whilePlaying_canBePutOnATrack: | PossibleEntityLimits | null,

    canSpawnOutOfAPipe: CanSpawnOutOfAPipe,

    canBePutInASwingingClaw: CanBePutInASwingingClaw,

    canBeThrownByALakitu: CanBeThrownByALakitu,
    canBePutInALakituCloud: CanBePutInALakituCloud,

    canBePutInAClownCar: CanBePutInAClownCar,

    canBeFiredOutOfABulletLauncher: CanBeFiredOutOfABulletLauncher,

    canBePutInABlock: CanBePutInABlock,

    canBePutInATree: CanBePutInATree,

    lightSourceEmitted: PossibleLightSource,
    lightSourceEmitted_isInSMB: HasALightSourceEmittedInSMB,

    canSurviveInTheLavaOrThePoison: CanSurviveInTheLavaOrThePoison,

    canIgniteABobOmb: CanIgniteABobOmb,

    canBeAffectedByATwister: CanBeAffectedByATwister,

    canGoThroughWalls: CanGoThroughWalls,
    canGoThroughWalls_inSM3DW: CanGoThroughWallsInSM3DW,

    canBeStacked: CanBeStacked,

    isGlobalGroundOrGlobal: IsGlobalGroundOrGlobal,

    canMakeASoundOutOfAMusicBlock: CanMakeASoundOutOfAMusicBlock,

    //endregion -------------------- Specific properties --------------------
    //region -------------------- Entity limit properties --------------------

    limitAmount: LimitAmountType,
    limitAmount_comment: LimitAmountCommentType,

    editorLimit: EditorLimitType,

    whilePlaying_isInGEL: GeneralEntityLimitType,
    whilePlaying_isInGel_comment: GeneralEntityLimitCommentType,
    whilePlaying_isInGEL_isSuperGlobal: GeneralGlobalEntityLimitType,
    whilePlaying_isInGEL_isSuperGlobal_comment: GeneralGlobalEntityLimitCommentType,

    whilePlaying_isInPEL: PowerUpEntityLimitType,
    whilePlaying_isInPEL_comment: PowerUpEntityLimitCommentType,

    whilePlaying_isInPJL: ProjectileEntityLimitType,
    whilePlaying_isInPJL_comment: ProjectileEntityLimitCommentType,

    whilePlaying_customLimit: CustomLimitType,
    whilePlaying_customLimit_comment: CustomLimitCommentType,

    //endregion -------------------- Entity limit properties --------------------
    //region -------------------- Spawning / Despawning range properties --------------------

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

    //endregion -------------------- Spawning / Despawning range properties --------------------
    //region -------------------- Reference on specific condition properties -------------------

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

    //endregion -------------------- Reference on specific condition properties --------------------
    hasANameReferencedInMarioMaker: HasAReferenceInMarioMaker,
];

//endregion -------------------- Exclusive properties --------------------

type PropertiesArray = [
    ...ExclusivePropertiesArray1,
    ...GamesPropertyArray,
    ...ExclusivePropertiesArray2,
    ...LanguagesPropertyArray,
];

//endregion -------------------- Properties --------------------

//endregion -------------------- CSV array related types --------------------

export interface DebugEntityReferences {

    originalContent: readonly string[];
    arrayConverted: PropertiesArray;
    template: EntityTemplate;
    entity?: Entity;

}

/**
 * @singleton
 */
export class EntityLoader
    implements Loader<ReadonlyMap<string, DebugEntityReferences>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EntityLoader;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    public static readonly UNKNOWN_CHARACTER = '?';
    public static readonly INFINITE_CHARACTER = '∞';
    public static readonly THIS_REFERENCE = 'this';

    #map?: Map<string, DebugEntityReferences>;

    public load(): ReadonlyMap<string, DebugEntityReferences> {
        if (this.#map == null) {
            const references = new Map<string, DebugEntityReferences>();
            const referencesToWatch = new ReferencesToWatch(references);

            //region -------------------- Builder initialisation --------------------

            EntityBuilder.references = references;
            EntityBuilder.categoriesMap = EntityCategoryLoader.get.load();

            //endregion -------------------- Builder initialisation --------------------
            //region -------------------- CSV Loader --------------------

            new CSVLoader<PropertiesArray, Builder<EntityTemplate>, keyof typeof Headers>(everyEntities, convertedContent => new TemplateBuilder(convertedContent))
                .setDefaultConversion('emptyable string')

                .convertTo(['(Entity)', 'Entity', 'Projectile',], 'entityType',)
                .convertToNullableBoolean('isInSuperMarioMaker1', 'isInSuperMarioMaker2',)
                .convertTo(HeaderTypesForConvertor.everyPossibleEntityCategoriesNames, 'categoryInTheEditor',)
                .convertToNullableBoolean('hasAMushroomVariant',)
                .convertToNullableBooleanAnd([EntityLoader.UNKNOWN_CHARACTER, 'While playing → LCL',], 'canBeInAParachute', 'canHaveWings',)

                .convertToNullableBoolean('canContainOrSpawnAKey',)
                .convertToNullableBooleanAnd('Only some variants', 'isAffectedDirectlyByAnOnOrOffState',)

                .convertToNullableBooleanAnd(EntityLoader.UNKNOWN_CHARACTER, 'canBePutOnATrack',)
                .convertToEmptyableStringAnd(HeaderTypesForConvertor.everyPossibleLimitsNames, 'editorLimit_canBePutOnATrack', 'whilePlaying_canBePutOnATrack',)

                .convertToNullableBoolean('canSpawnOutOfAPipe', 'canBePutInASwingingClaw',)
                .convertToNullableBooleanAnd(EntityLoader.UNKNOWN_CHARACTER, 'canBeThrownByALakitu', 'canBePutInALakituCloud',)
                .convertToNullableBoolean('canBePutInAClownCar', 'canBeFiredOutOfABulletLauncher', 'canBePutInABlock', 'canBePutInATree',)

                .convertTo([EntityLoader.UNKNOWN_CHARACTER, 'Full light', 'Dim light', 'Full light when falling', 'Full light when collected', 'Full light when shooting', 'Dim light / Full light when falling or collected', 'Project a light in front of them', 'Only when lit',], 'lightSourceEmitted')
                .convertToNullableBooleanAnd(EntityLoader.UNKNOWN_CHARACTER, 'lightSourceEmitted_isInSMB',)
                .convertToBooleanAnd([EntityLoader.UNKNOWN_CHARACTER, 'Explode', 'Castle', 'Castle / Night Forest', 'Float', 'Melt to Coin', 'Only inside the ground',], 'canSurviveInTheLavaOrThePoison',)
                .convertToNullableBooleanAnd(['NSMBU', 'Castle', 'Only when the player press the run button',], 'canIgniteABobOmb',)
                .convertToNullableBooleanAnd(['When falling', 'Parachute',], 'canBeAffectedByATwister',)
                .convertToNullableBooleanAnd('SM3DW on down curve', 'canGoThroughWalls', 'canGoThroughWalls_inSM3DW',)
                .convertToNullableBoolean('canBeStacked',)
                .convertToNullableBooleanAnd('SM3DW', 'isGlobalGroundOrGlobal',)
                .convertToNullableBooleanAnd([EntityLoader.UNKNOWN_CHARACTER, 'Excluding the top 3 notes',], 'canMakeASoundOutOfAMusicBlock',)

                .convertTo([1, 2, '1?', EntityLoader.UNKNOWN_CHARACTER,], 'limitAmount',)

                .convertTo(HeaderTypesForConvertor.everyLimitsNamesOrUnknown, 'editorLimit',)
                .convertToNullableBooleanAnd('Not on track', 'whilePlaying_isInGEL_isSuperGlobal',)
                .convertToNullableBooleanAnd('Only when collected', 'whilePlaying_isInGEL',)
                .convertToNullableBoolean('whilePlaying_isInPEL',)
                .convertToNullableBooleanAnd([EntityLoader.UNKNOWN_CHARACTER, 'Temporary as it comes out', 'Each one separated',], 'whilePlaying_isInPJL',)
                .convertTo(HeaderTypesForConvertor.everyLimitsNamesOrUnknown, 'whilePlaying_customLimit',)

                .convertToNullableBooleanAnd([EntityLoader.UNKNOWN_CHARACTER, 'With Vine',], 'canRespawn',)
                .convertToNullableBooleanAnd(EntityLoader.UNKNOWN_CHARACTER, 'canRespawn_online', 'canRespawn_online_insideABlock',)
                .convertToEmptyableString('behaviour_solo', 'behaviour_localCoop', 'behaviour_onlineCoop', 'behaviour_onlineVS',)//TODO change to any possible behaviour type

                .convertToNullableNumberAnd(['string', EntityLoader.UNKNOWN_CHARACTER, 'Variable', EntityLoader.INFINITE_CHARACTER,], 'offscreenSpawningHorizontalRange',)
                .convertToNullableNumberAnd(['string', EntityLoader.UNKNOWN_CHARACTER, 'Variable',], 'offscreenDespawningHorizontalRange',)
                .convertToNullableNumberAnd(['string', EntityLoader.UNKNOWN_CHARACTER, EntityLoader.INFINITE_CHARACTER,], 'offscreenSpawningUpwardVerticalRange')
                .convertToNullableNumberAnd(['string', EntityLoader.UNKNOWN_CHARACTER,], 'offscreenSpawningUpwardVerticalRange',)
                .convertToNullableNumberAnd(['string', EntityLoader.UNKNOWN_CHARACTER, EntityLoader.INFINITE_CHARACTER,], 'offscreenSpawningDownwardVerticalRange',)
                .convertToNullableNumberAnd(['string', EntityLoader.UNKNOWN_CHARACTER,], 'offscreenDespawningDownwardVerticalRange',)

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
                .convertToNullableBooleanAnd(['French only', 'Only spoken (in english) in Editor',], 'hasANameReferencedInMarioMaker')

                .onAfterFinalObjectCreated((finalContent, convertedContent, originalContent,) => {
                    const builtContent = finalContent.build();
                    const name = builtContent.name;
                    NameCreator.addEnglishReference(name, references, originalContent, convertedContent, builtContent);
                    referencesToWatch.addReference(builtContent);
                })
                .onInitialisationEnd(() => {
                    referencesToWatch.testReferences();
                    referencesToWatch.setReferences();
                    references.forEach(reference => reference.entity = new GenericSingleInstanceBuilder(new EntityBuilder(reference.template)).build());
                })
                .load();

            //endregion -------------------- CSV Loader --------------------

            console.log('-------------------- "entity" has been loaded --------------------');// temporary console.log
            console.log(references);// temporary console.log
            console.log('-------------------- "entity" has been loaded --------------------');// temporary console.log

            this.#map = references;
        }
        return this.#map;
    }

}

//region -------------------- Template related methods & classes --------------------

class TemplateBuilder
    extends AbstractTemplateBuilder<EntityTemplate, PropertiesArray, typeof Headers> {

    static readonly #SLASH_SEPARATOR = ' / ';
    static readonly #LINK_AS_THIS = 'this';

    public constructor(content: PropertiesArray,) {
        super(content);
    }

    protected get _headersIndexMap() {
        return Headers;
    }

    public build(): EntityTemplate {
        const [
            isInSuperMarioMaker1, isInSuperMarioMaker2,
            dayLink, nightLink,
            groundLink, undergroundLink, underwaterLink, desertLink, snowLink, skyLink, forestLink, ghostHouseLink, airshipLink, castleLink,
            superMarioBrosLink, superMarioBros3Link, superMarioWorldLink, newSuperMarioBrosULink, superMario3DWorldLink,
        ] = [
            this._getContent(this._headersIndexMap.isInSuperMarioMaker1), this._getContent(this._headersIndexMap.isInSuperMarioMaker2),
            this._getContent(this._headersIndexMap.inDayTheme), this._getContent(this._headersIndexMap.inNightTheme),
            this._getContent(this._headersIndexMap.inGroundTheme), this._getContent(this._headersIndexMap.inUndergroundTheme), this._getContent(this._headersIndexMap.inUnderwaterTheme), this._getContent(this._headersIndexMap.inDesertTheme), this._getContent(this._headersIndexMap.inSnowTheme), this._getContent(this._headersIndexMap.inSkyTheme), this._getContent(this._headersIndexMap.inForestTheme), this._getContent(this._headersIndexMap.inGhostHouseTheme), this._getContent(this._headersIndexMap.inAirshipTheme), this._getContent(this._headersIndexMap.inCastleTheme),
            this._getContent(this._headersIndexMap.inSMBGameStyle), this._getContent(this._headersIndexMap.inSMB3GameStyle), this._getContent(this._headersIndexMap.inSMWGameStyle), this._getContent(this._headersIndexMap.inNSMBUGameStyle), this._getContent(this._headersIndexMap.inSM3DWGameStyle),
        ];

        return {
            properties: {
                entityType: this._getContent(this._headersIndexMap.entityType),

                //region ---------- Basic properties ----------

                isIn: {
                    game: this._createGameTemplate(),
                    style: {
                        superMarioBros: TemplateBuilder.__convertLinkToOnlyBoolean(superMarioBrosLink),
                        superMarioBros3: TemplateBuilder.__convertLinkToOnlyBoolean(superMarioBros3Link),
                        superMarioWorld: TemplateBuilder.__convertLinkToOnlyBoolean(superMarioWorldLink),
                        newSuperMarioBrosU: TemplateBuilder.__convertLinkToOnlyBoolean(newSuperMarioBrosULink),
                        superMario3DWorld: !isInSuperMarioMaker1 && isInSuperMarioMaker2 ? TemplateBuilder.__convertLinkToOnlyBoolean(superMario3DWorldLink) : TemplateBuilder.__convertLinkToNullableBoolean(superMario3DWorldLink),
                    },
                    theme: {
                        ground: TemplateBuilder.__convertLinkToBoolean(groundLink),
                        underground: TemplateBuilder.__convertLinkToBoolean(undergroundLink),
                        underwater: TemplateBuilder.__convertLinkToBoolean(underwaterLink),
                        desert: TemplateBuilder.__convertLinkToNullableBoolean(desertLink),
                        snow: TemplateBuilder.__convertLinkToNullableBoolean(snowLink),
                        sky: TemplateBuilder.__convertLinkToNullableBoolean(skyLink),
                        forest: TemplateBuilder.__convertLinkToNullableBoolean(forestLink),
                        ghostHouse: TemplateBuilder.__convertLinkToBoolean(ghostHouseLink),
                        airship: TemplateBuilder.__convertLinkToBoolean(airshipLink),
                        castle: TemplateBuilder.__convertLinkToBoolean(castleLink),
                    },
                    time: {
                        day: TemplateBuilder.__convertLinkToBoolean(dayLink),
                        night: TemplateBuilder.__convertLinkToNullableBoolean(nightLink),
                    },
                },

                basic: {
                    hasAMushroomVariant: this._getContent(this._headersIndexMap.hasAMushroomVariant),
                    canBeInAParachute: this._getContent(this._headersIndexMap.canBeInAParachute),
                    canHaveWings: this._getContent(this._headersIndexMap.canHaveWings),
                },

                //endregion ---------- Basic properties ----------
                //region ---------- Specific properties ----------

                canContainOrSpawnAKey: this._getContent(this._headersIndexMap.canContainOrSpawnAKey),

                isAffectedDirectlyByAnOnOrOffState: this._getContent(this._headersIndexMap.isAffectedDirectlyByAnOnOrOffState),

                canBePutOnATrack: {
                    value: this._getContent(this._headersIndexMap.canBePutOnATrack),
                    editorLimit: this._getContent(this._headersIndexMap.editorLimit_canBePutOnATrack),
                    whilePlaying: this._getContent(this._headersIndexMap.whilePlaying_canBePutOnATrack),
                },

                canSpawnOutOfAPipe: this._getContent(this._headersIndexMap.canSpawnOutOfAPipe),

                canBePutInASwingingClaw: this._getContent(this._headersIndexMap.canBePutInASwingingClaw),

                canBeThrownByALakitu: this._getContent(this._headersIndexMap.canBeThrownByALakitu),
                canBePutInALakituCloud: this._getContent(this._headersIndexMap.canBePutInALakituCloud),

                canBePutInAClownCar: this._getContent(this._headersIndexMap.canBePutInAClownCar),

                canBeFiredOutOfABulletLauncher: this._getContent(this._headersIndexMap.canBeFiredOutOfABulletLauncher),

                canBePutInABlock: this._getContent(this._headersIndexMap.canBePutInABlock),

                canBePutInATree: this._getContent(this._headersIndexMap.canBePutInATree),

                lightSourceEmitted: {
                    value: this._getContent(this._headersIndexMap.lightSourceEmitted),
                    isInSMB: this._getContent(this._headersIndexMap.lightSourceEmitted_isInSMB)
                },

                canSurviveInTheLavaOrThePoison: this._getContent(this._headersIndexMap.canSurviveInTheLavaOrThePoison),

                canIgniteABobOmb: this._getContent(this._headersIndexMap.canIgniteABobOmb),

                canBeAffectedByATwister: this._getContent(this._headersIndexMap.canBeAffectedByATwister),

                canGoThroughWalls: {
                    value: this._getContent(this._headersIndexMap.canGoThroughWalls),
                    inSM3DW: this._getContent(this._headersIndexMap.canGoThroughWalls_inSM3DW),
                },

                canBeStacked: this._getContent(this._headersIndexMap.canBeStacked),

                isGlobalGroundOrGlobal: this._getContent(this._headersIndexMap.isGlobalGroundOrGlobal),

                canMakeASoundOutOfAMusicBlock: this._getContent(this._headersIndexMap.canMakeASoundOutOfAMusicBlock),

                //endregion ---------- Specific properties ----------
                limits: {
                    amount: {
                        value: this._getContent(this._headersIndexMap.limitAmount),
                        comment: this._getContent(this._headersIndexMap.limitAmount_comment),
                    },
                    editor: this._getContent(this._headersIndexMap.editorLimit),
                    whilePlaying: {
                        isInGEL: {
                            value: {
                                value: this._getContent(this._headersIndexMap.whilePlaying_isInGEL),
                                comment: this._getContent(this._headersIndexMap.whilePlaying_isInGel_comment),
                            },
                            isSuperGlobal: {
                                value: this._getContent(this._headersIndexMap.whilePlaying_isInGEL_isSuperGlobal),
                                comment: this._getContent(this._headersIndexMap.whilePlaying_isInGEL_isSuperGlobal_comment),
                            },
                        },
                        isInPEL: {
                            value: this._getContent(this._headersIndexMap.whilePlaying_isInPEL),
                            comment: this._getContent(this._headersIndexMap.whilePlaying_isInPEL_comment),
                        },
                        isInPJL: {
                            value: this._getContent(this._headersIndexMap.whilePlaying_isInPJL),
                            comment: this._getContent(this._headersIndexMap.whilePlaying_isInPJL_comment),
                        },
                        customLimit: {
                            value: this._getContent(this._headersIndexMap.whilePlaying_customLimit),
                            comment: this._getContent(this._headersIndexMap.whilePlaying_customLimit_comment),
                        },
                    },
                },
                canRespawn: {
                    value: this._getContent(this._headersIndexMap.canRespawn),
                    online: {
                        value: this._getContent(this._headersIndexMap.canRespawn_online),
                        insideABlock: this._getContent(this._headersIndexMap.canRespawn_online_insideABlock),
                    }
                },
                behaviour: {
                    solo: TemplateBuilder.__convertToBehaviourArray(this._getContent(this._headersIndexMap.behaviour_solo),),
                    localCoop: TemplateBuilder.__convertToBehaviourArray(this._getContent(this._headersIndexMap.behaviour_localCoop),),
                    online: {
                        coop: TemplateBuilder.__convertToBehaviourArray(this._getContent(this._headersIndexMap.behaviour_onlineCoop),),
                        versus: TemplateBuilder.__convertToBehaviourArray(this._getContent(this._headersIndexMap.behaviour_onlineVS),),
                    },
                },
                offscreenRange: {
                    referencePoint: this._getContent(this._headersIndexMap.offscreenSpawningAndDespawningReferencePoint),
                    spawning: {
                        horizontal: this._getContent(this._headersIndexMap.offscreenSpawningHorizontalRange),
                        vertical: {
                            upward: this._getContent(this._headersIndexMap.offscreenSpawningUpwardVerticalRange),
                            downward: this._getContent(this._headersIndexMap.offscreenSpawningDownwardVerticalRange),
                        },
                    },
                    despawning: {
                        horizontal: this._getContent(this._headersIndexMap.offscreenDespawningHorizontalRange),
                        vertical: {
                            upward: this._getContent(this._headersIndexMap.offscreenDespawningUpwardVerticalRange),
                            downward: this._getContent(this._headersIndexMap.offscreenDespawningDownwardVerticalRange),
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
            categoryInTheEditor: this._getContent(this._headersIndexMap.categoryInTheEditor),
            name: this._createEntityNameTemplate(this._getContent(this._headersIndexMap.hasANameReferencedInMarioMaker)),
        };
    }

    private static __convertLinkToOnlyBoolean(link: | EntityLink | null,) {
        return link != null && this.__convertLinkToBoolean(link);
    }

    private static __convertLinkToBoolean(link: EntityLink,): boolean {
        return link.includes(this.#LINK_AS_THIS);
    }

    private static __convertLinkToNullableBoolean(link: | EntityLink | null,): | boolean | null {
        return link == null
            ? null
            : this.__convertLinkToBoolean(link);
    }

    private static __convertToBehaviourArray(behaviour: | string | null,): EveryPossibleLinkedBehaviourAcronymArray {
        return behaviour == null
            ? EMPTY_ARRAY
            : behaviour.split(this.#SLASH_SEPARATOR) as | [string,] | [string, string,] | [string, string, string,] as EveryPossibleLinkedBehaviourAcronymArray;
    }

}

/**
 * @temporary
 */
class NameCreator {

    private static __testName(name: SMM2NameTemplateWithOptionalLanguages,): void {
        //README since some references are still not complete, they are in comment
        if (name.english.simple == null && (name.english.american == null || name.english.european == null))
            throw new ReferenceError(`The english name ("${name.english.simple}") can either have a single english name or both "american"("${name.english.american}") and "european"("${name.english.european}") name separated.`);
        if (name.french.simple == null && (name.french.canadian == null || name.french.european == null))
            throw new ReferenceError(`The french name ("${name.french.simple}") can either have a single french name or both "canadian"("${name.french.canadian}") and "european"("${name.french.european}") name separated.`);
        // if (name.spanish.simple == null && (name.spanish.american == null || name.spanish.european == null))
        //     throw new ReferenceError(`The spanish name ("${name.spanish.simple}") can either have a single spanish name or both "american"("${name.spanish.american}") and "european"("${name.spanish.european}") name separated.`);
        // if (name.portuguese.simple == null && (name.portuguese.simplified == null || name.portuguese.traditional == null))
        //     throw new ReferenceError(`The portuguese name ("${name.portuguese.simple}") can either have a single portuguese name or both "american"("${name.portuguese.american}") and "european"("${name.portuguese.european}") name separated.`);
        // if (name.chinese.simple == null && (name.chinese.simplified == null || name.chinese.traditional == null))
        //     throw new ReferenceError(`The chinese name ("${name.chinese.simple}") can either have a single chinese name or both "traditional"("${name.chinese.traditional}") and "simplified"("${name.chinese.simplified}") name separated.`);
    }

    public static addEnglishReference(name: SMM2NameTemplateWithOptionalLanguages, englishNames: Map<string, DebugEntityReferences>, originalContent: readonly string[], convertedContent: PropertiesArray, template: EntityTemplate,): void {
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

    reference: EntityTemplate;
    type: ReferenceType;
    value: EntityLink;
    errorIfNeverFound: () => ReferenceError;

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
