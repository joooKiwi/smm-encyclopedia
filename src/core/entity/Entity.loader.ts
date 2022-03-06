import everyEntities from '../../resources/Entity.csv';

import type {Builder}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               from '../../util/builder/Builder';
import type {CanBeAffectedByATwister, CanBeBrokenOrKilledByABobOmb, CanBeFiredOutOfABulletLauncher, CanBePutInABlock, CanBePutInAClownCar, CanBePutInALakituCloud, CanBePutInASwingingClaw, CanBePutInATree, CanBePutOnATrack, CanBeSpawnedByMagikoopa, CanBeSpawnedByWingedMagikoopa, CanBeStacked, CanBeThrownByALakitu, CanBeThrownByBowserInClownCar, CanBeThrownByBowserJr, CanBeThrownByBowserJrInClownCar, CanBeTransformedByMagikoopa, CanContainOrSpawnAKey, CanGoThroughWalls, CanGoThroughWallsInSM3DW, CanIgniteABobOmb, CanMakeASoundOutOfAMusicBlock, CanSpawnOutOfAPipe, CanSurviveInTheLavaOrThePoison, HasALightSourceEmittedInSMB, HasAReferenceInMarioMaker, IsAffectedDirectlyByAnOnOrOffState, IsGlobalGroundOrGlobal, PossibleDimension, PossibleDimensionDifferentInSM3DW, PossibleEntityType, PossibleFirstAppearanceInMarioMaker, PossibleLightSource, PossibleMaximumDimension, PossibleMaximumDimensionDifferentInSM3DW, PossibleWeight} from '../entityTypes';
import type {CanRespawnOnlineOutOfABlockType, CanRespawnOnlineType, CanRespawnType, EveryPossibleLinkedBehaviourAcronymArray, PossibleLocalCoopBehaviourType, PossibleOnlineCoopBehaviourType, PossibleOnlineVersusBehaviourType, PossibleSoloBehaviourType}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        from '../behaviour/Loader.types';
import type {EditorLimitType, GeneralEntityLimitType, GeneralGlobalEntityLimitType, LimitAmountType, OffscreenDespawningDownwardVerticalRangeLimitType, OffscreenDespawningHorizontalRangeLimitType, OffscreenDespawningUpwardVerticalRangeLimitType, OffscreenSpawningAndDespawningReferencePoint, OffscreenSpawningDownwardVerticalRangeLimitType, OffscreenSpawningHorizontalRangeLimitType, OffscreenSpawningUpwardVerticalRangeLimitType, OtherLimitCommentType, OtherLimitType, PowerUpEntityLimitType, ProjectileEntityLimitType}                                                                                                                                                                                                                                                                                                                                                                                                                            from './properties/limit/Loader.types';
import type {Entity}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                from './Entity';
import type {EntityLink}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            from './loader.types';
import type {DimensionTemplate, EntityTemplate, SimpleDimensionTemplate, SimpleDimensionTemplateDifferentInSM3DW}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   from './Entity.template';
import type {Loader}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                from '../../util/loader/Loader';
import type {PropertiesArrayWithOptionalLanguages as LanguagesPropertyArray}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        from '../../lang/Loader.types';
import type {PropertiesArrayFromAllGames as GamesPropertyArray}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     from '../game/Loader.types';
import type {PossibleCanBeInAParachute, PossibleCanHaveWings, PossibleHasAMushroomVariant}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          from './properties/basic/BasicProperty';
import type {PossibleEnglishName}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   from './Entities.types';
import type {PossibleEnglishName as PossibleEnglishName_Category}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   from '../entityCategory/EntityCategories.types';
import type {PossibleEnglishName as PossibleEnglishName_Limit}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      from '../entityLimit/EntityLimits.types';
import type {PossibleInstrument}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    from '../instrument/loader.types';
import type {PossibleName as PossibleMarioMakerVersion}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             from '../version/Versions.types';
import type {SimpleGameStyleTemplate}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               from '../gameStyle/SimpleGameStyle.template';

import {AbstractTemplateBuilder}      from '../_template/AbstractTemplate.builder';
import {assert}                       from '../../util/utilitiesMethods';
import {CSVLoader}                    from '../../util/loader/CSVLoader';
import {EMPTY_ARRAY}                  from '../../util/emptyVariables';
import {EntityBuilder}                from './Entity.builder';
import {GenericSingleInstanceBuilder} from '../../util/builder/GenericSingleInstanceBuilder';
import {HeaderTypesForConvertor}      from '../_util/loader/HeaderTypesForConvertor';
import {ReferencesToWatch}            from './ReferencesToWatch';

//region -------------------- CSV array related types --------------------

enum Headers {

    entityType,

    firstAppearanceInMarioMaker,
    firstAppearanceInMarioMaker_version,

    //region -------------------- Games --------------------

    isInSuperMarioMaker1,
    isInSuperMarioMakerFor3DS,
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

    weight,

    lightSourceEmitted, lightSourceEmitted_isInSMB,

    canSurviveInTheLavaOrThePoison,

    canIgniteABobOmb, canBeBrokenOrKilledByABobOmb,

    canBeAffectedByATwister,

    canGoThroughWalls, canGoThroughWalls_inSM3DW,

    canBeStacked,

    isGlobalGroundOrGlobal,

    instrument,
    canMakeASoundOutOfAMusicBlock,

    //endregion -------------------- Specific properties --------------------
    //region -------------------- Bowser / Bowser Jr. / Magikoopa properties --------------------

    canBeThrownByBowserInClownCar,
    canBeThrownByBowserJr, canBeThrownByBowserJrInClownCar,
    canBeTransformedByMagikoopa, canBeSpawnedByMagikoopa, canBeSpawnedByWingedMagikoopa,

    //endregion -------------------- Bowser / Bowser Jr. / Magikoopa properties --------------------
    //region -------------------- Entity limit properties --------------------

    limitAmount,

    editorLimit,

    whilePlaying_isInGEL,
    whilePlaying_isInGEL_isSuperGlobal,

    whilePlaying_isInPEL,

    whilePlaying_isInPJL,

    whilePlaying_otherLimit, whilePlaying_otherLimit_comment,

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
    //region -------------------- Dimension properties --------------------

    dimension,
    dimension_maximum,

    dimension_differentInSM3DW,
    dimension_maximum_differentInSM3DW,

    //endregion -------------------- Dimension properties --------------------
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

    firstAppearanceInMarioMaker: PossibleFirstAppearanceInMarioMaker,
    firstAppearanceInMarioMaker_version: PossibleMarioMakerVersion,
];
type ExclusivePropertiesArray2 = [
    //region -------------------- Basic properties --------------------

    categoryInTheEditor: | PossibleEnglishName_Category | null,

    hasAMushroomVariant: PossibleHasAMushroomVariant,
    canBeInAParachute: PossibleCanBeInAParachute,
    canHaveWings: PossibleCanHaveWings,

    //endregion -------------------- Basic properties --------------------
    //region -------------------- Specific properties --------------------

    canContainOrSpawnAKey: CanContainOrSpawnAKey,

    isAffectedDirectlyByAnOnOrOffState: IsAffectedDirectlyByAnOnOrOffState,

    canBePutOnATrack: CanBePutOnATrack,
    editorLimit_canBePutOnATrack: | PossibleEnglishName_Limit | null,
    whilePlaying_canBePutOnATrack: | PossibleEnglishName_Limit | null,

    canSpawnOutOfAPipe: CanSpawnOutOfAPipe,

    canBePutInASwingingClaw: CanBePutInASwingingClaw,

    canBeThrownByALakitu: CanBeThrownByALakitu,
    canBePutInALakituCloud: CanBePutInALakituCloud,

    canBePutInAClownCar: CanBePutInAClownCar,

    canBeFiredOutOfABulletLauncher: CanBeFiredOutOfABulletLauncher,

    canBePutInABlock: CanBePutInABlock,

    canBePutInATree: CanBePutInATree,

    weight: PossibleWeight,

    lightSourceEmitted: PossibleLightSource,
    lightSourceEmitted_isInSMB: HasALightSourceEmittedInSMB,

    canSurviveInTheLavaOrThePoison: CanSurviveInTheLavaOrThePoison,

    canIgniteABobOmb: CanIgniteABobOmb,
    canBeBrokenOrKilledByABobOmb: CanBeBrokenOrKilledByABobOmb,

    canBeAffectedByATwister: CanBeAffectedByATwister,

    canGoThroughWalls: CanGoThroughWalls,
    canGoThroughWalls_inSM3DW: CanGoThroughWallsInSM3DW,

    canBeStacked: CanBeStacked,

    isGlobalGroundOrGlobal: IsGlobalGroundOrGlobal,

    instrument: PossibleInstrument,
    canMakeASoundOutOfAMusicBlock: CanMakeASoundOutOfAMusicBlock,

    //endregion -------------------- Specific properties --------------------
    //region -------------------- Bowser / Bowser Jr. / Magikoopa properties --------------------

    canBeThrownByBowserInClownCar: CanBeThrownByBowserInClownCar,

    canBeThrownByBowserJr: CanBeThrownByBowserJr,
    canBeThrownByBowserJrInClownCar: CanBeThrownByBowserJrInClownCar,

    canBeTransformedByMagikoopa: CanBeTransformedByMagikoopa,
    canBeSpawnedByMagikoopa: CanBeSpawnedByMagikoopa,
    canBeSpawnedByWingedMagikoopa: CanBeSpawnedByWingedMagikoopa,

    //endregion -------------------- Bowser / Bowser Jr. / Magikoopa properties --------------------
    //region -------------------- Entity limit properties --------------------

    limitAmount: LimitAmountType,

    editorLimit: EditorLimitType,

    whilePlaying_isInGEL: GeneralEntityLimitType,
    whilePlaying_isInGEL_isSuperGlobal: GeneralGlobalEntityLimitType,

    whilePlaying_isInPEL: PowerUpEntityLimitType,

    whilePlaying_isInPJL: ProjectileEntityLimitType,

    whilePlaying_otherLimit: OtherLimitType,
    whilePlaying_otherLimit_comment: OtherLimitCommentType,

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
    //region -------------------- Dimension properties --------------------

    dimension: PossibleDimension,
    dimension_maximum: PossibleMaximumDimension,

    dimension_differentInSM3DW: PossibleDimensionDifferentInSM3DW,
    dimension_maximum_differentInSM3DW: PossibleMaximumDimensionDifferentInSM3DW,

    //endregion -------------------- Dimension properties --------------------
    //region -------------------- Reference on specific condition properties -------------------

    inDayTheme: | EntityLink | null,
    inNightTheme: | EntityLink | null,

    inGroundTheme: | EntityLink | null,
    inUndergroundTheme: | EntityLink | null,
    inUnderwaterTheme: | EntityLink | null,
    inDesertTheme: | EntityLink | null,
    inSnowTheme: | EntityLink | null,
    inSkyTheme: | EntityLink | null,
    inForestTheme: | EntityLink | null,
    inGhostHouseTheme: | EntityLink | null,
    inAirshipTheme: | EntityLink | null,
    inCastleTheme: | EntityLink | null,

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

/**
 * @singleton
 * @recursiveReferenceVia<{@link EntityBuilder}, {@link Entities}>
 * @recursiveReference<{@link Entities}>
 */
export class EntityLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, Entity>> {

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

    #map?: Map<PossibleEnglishName, Entity>;

    public load(): ReadonlyMap<PossibleEnglishName, Entity> {
        if (this.#map == null) {
            const references = new Map<PossibleEnglishName, Entity>();
            const templateReferences = new Map<PossibleEnglishName, EntityTemplate>();
            const referencesToWatch = new ReferencesToWatch(templateReferences);

            //region -------------------- CSV Loader --------------------

            new CSVLoader<PropertiesArray, Builder<EntityTemplate>, keyof typeof Headers>(everyEntities, convertedContent => new TemplateBuilder(convertedContent))
                .setDefaultConversion('emptyable string')

                .convertTo(['(Entity)', 'Entity', 'Projectile', 'Object',], 'entityType',)
                .convertTo([1, 2,], 'firstAppearanceInMarioMaker',)
                .convertTo(HeaderTypesForConvertor.everyPossibleName_version, 'firstAppearanceInMarioMaker_version',)
                .convertToNullableBoolean('isInSuperMarioMaker1', 'isInSuperMarioMakerFor3DS', 'isInSuperMarioMaker2',)
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

                .convertToEmptyableStringAnd([EntityLoader.UNKNOWN_CHARACTER, 0, 1, '½', 2,], 'weight',)
                .convertTo([EntityLoader.UNKNOWN_CHARACTER, 'Full light', 'Dim light', 'Full light when falling', 'Full light when collected', 'Full light when shooting', 'Dim light / Full light when falling or collected', 'Project a light in front of them', 'Only when lit',], 'lightSourceEmitted')
                .convertToNullableBooleanAnd(EntityLoader.UNKNOWN_CHARACTER, 'lightSourceEmitted_isInSMB',)
                .convertToBooleanAnd([EntityLoader.UNKNOWN_CHARACTER, 'Explode', 'Castle', 'Castle / Night Forest', 'Float', 'Melt to Coin', 'Only inside the ground',], 'canSurviveInTheLavaOrThePoison',)

                .convertToBooleanAnd(['NSMBU', 'Castle',], 'canIgniteABobOmb',)
                .convertToBooleanAnd(['Koopa Troopa', 'Unchained Chomp', 'Standing on top of block that get destroyed',], 'canBeBrokenOrKilledByABobOmb',)

                .convertToNullableBooleanAnd(['When falling', 'Parachute',], 'canBeAffectedByATwister',)
                .convertToNullableBoolean('canGoThroughWalls',)
                .convertToNullableBooleanAnd(['on down curve',], 'canGoThroughWalls_inSM3DW',)
                .convertToNullableBoolean('canBeStacked',)
                .convertToNullableBooleanAnd(['SM3DW',], 'isGlobalGroundOrGlobal',)
                .convertToNullableBooleanAnd(['Excluding the top 3 notes',], 'canMakeASoundOutOfAMusicBlock',)

                .convertToNullableBooleanAnd('Bob-omb clear condition', 'canBeThrownByBowserInClownCar',)
                .convertToNullableBooleanAnd('3rd phase', 'canBeThrownByBowserJr',)
                .convertToNullableBooleanAnd('Koopa Troopa clear condition', 'canBeThrownByBowserJrInClownCar',)
                .convertToNullableBooleanAnd(EntityLoader.UNKNOWN_CHARACTER, 'canBeTransformedByMagikoopa',)
                .convertToNullableBoolean('canBeSpawnedByMagikoopa',)
                .convertToEmptyableStringAnd([EntityLoader.UNKNOWN_CHARACTER, false, 'Green Winged Koopa Troopa', 'winged',], 'canBeSpawnedByWingedMagikoopa',)

                .convertTo([EntityLoader.UNKNOWN_CHARACTER, 1, 2, '1?', EntityLoader.INFINITE_CHARACTER,
                    'For each entity', 'For each clone (2-4)',
                    'For each projectile', 'For each projectile (1)',
                    'For each projectiles', 'For each projectiles (2)', 'For each projectiles (3)',
                    'For each projectiles (4)', 'For each projectiles (5)', 'For each projectiles (6)',
                    'For each projectiles (10?)', 'For each projectiles (1-3)', 'For each projectiles (3-5)', 'For each projectiles (NSMU → 2, [SMB,SMB3,SMW] → 3)',], 'limitAmount',)
                .convertTo(HeaderTypesForConvertor.everyLimitsNamesOrUnknown, 'editorLimit',)
                .convertToNullableBooleanAnd(['Only when collected (30 frames)', 'As a group',
                    'Can overflow limit', 'Can overfill limit', 'Continue firing → GEL is max',], 'whilePlaying_isInGEL',)
                .convertToNullableBooleanAnd(['Not on track', 'While holding an entity',], 'whilePlaying_isInGEL_isSuperGlobal',)
                .convertToNullableBoolean('whilePlaying_isInPEL',)
                .convertToNullableBooleanAnd([EntityLoader.UNKNOWN_CHARACTER, 'Temporary as it comes out', 'Each one separated',
                    'Always reserve 1 projectile', 'By player, can overfill limit', 'Can only spawn (available) based → limits',], 'whilePlaying_isInPJL',)
                .convertTo(HeaderTypesForConvertor.everyLimitsNamesOrUnknown, 'whilePlaying_otherLimit',)
                .convertToEmptyableStringAnd('Only falling coin', 'whilePlaying_otherLimit_comment',)

                .convertToNullableBooleanAnd([EntityLoader.UNKNOWN_CHARACTER, 'With Vine', 'If not collected',], 'canRespawn',)
                .convertToNullableBooleanAnd(EntityLoader.UNKNOWN_CHARACTER, 'canRespawn_online', 'canRespawn_online_insideABlock',)
                .convertToEmptyableString('behaviour_solo', 'behaviour_localCoop', 'behaviour_onlineCoop', 'behaviour_onlineVS',)//TODO change to any possible behaviour type

                .convertToNullableNumberAnd(['string', EntityLoader.UNKNOWN_CHARACTER, 'Variable', EntityLoader.INFINITE_CHARACTER,], 'offscreenSpawningHorizontalRange',)
                .convertToNullableNumberAnd(['string', EntityLoader.UNKNOWN_CHARACTER, 'Variable',], 'offscreenDespawningHorizontalRange',)
                .convertToNullableNumberAnd(['string', EntityLoader.UNKNOWN_CHARACTER, EntityLoader.INFINITE_CHARACTER,], 'offscreenSpawningUpwardVerticalRange')
                .convertToNullableNumberAnd(['string', EntityLoader.UNKNOWN_CHARACTER,], 'offscreenSpawningUpwardVerticalRange',)
                .convertToNullableNumberAnd(['string', EntityLoader.UNKNOWN_CHARACTER, EntityLoader.INFINITE_CHARACTER,], 'offscreenSpawningDownwardVerticalRange',)
                .convertToNullableNumberAnd(['string', EntityLoader.UNKNOWN_CHARACTER,], 'offscreenDespawningDownwardVerticalRange',)

                .convertToEmptyableStringAnd([EntityLoader.UNKNOWN_CHARACTER,], 'dimension',)
                .convertToEmptyableStringAnd([], 'dimension_maximum',)
                .convertToEmptyableStringAnd([], 'dimension_differentInSM3DW',)
                .convertToEmptyableStringAnd([], 'dimension_maximum_differentInSM3DW',)

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
                .convertToNullableBooleanAnd([EntityLoader.UNKNOWN_CHARACTER, 'Only spoken (in english) in Editor',], 'hasANameReferencedInMarioMaker')
                .convertTo(HeaderTypesForConvertor.everyPossibleEntityNames, 'english', 'americanEnglish',)

                .onAfterFinalObjectCreated(finalContent => {
                    const template = finalContent.build();
                    const englishName = (template.name.english.simple ?? template.name.english.american) as | PossibleEnglishName | null;
                    assert(englishName != null, `The template english name should never be null since it is a key reference for the whole program.`,);
                    templateReferences.set(englishName, template,);
                    referencesToWatch.addSubReference(template);
                })
                .onInitialisationEnd(() => {
                    referencesToWatch.testReferences();
                    referencesToWatch.setReferences();
                    templateReferences.forEach((template, englishName,) =>
                        references.set(englishName, new GenericSingleInstanceBuilder(new EntityBuilder(template)).build(),)
                    );
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

class TemplateBuilder
    extends AbstractTemplateBuilder<EntityTemplate, PropertiesArray, typeof Headers> {

    static readonly #SLASH_SEPARATOR = ' / ';
    static readonly #LINK_AS_THIS = 'this';
    static readonly #EMPTY_SIMPLE_DIMENSION_TEMPLATE: SimpleDimensionTemplate<null, null> = {value: null, maximum: null,};
    static readonly #EMPTY_DIMENSION_TEMPLATE: DimensionTemplate = {
        value: null,
        maximum: null,
        differentInSM3DW: this.#EMPTY_SIMPLE_DIMENSION_TEMPLATE,
    };

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
        const isExclusiveToSuperMarioMaker1 = isInSuperMarioMaker1 && !isInSuperMarioMaker2;
        const gameStyleTemplate: SimpleGameStyleTemplate = {
            superMarioBros: TemplateBuilder.__convertLinkToOnlyBoolean(superMarioBrosLink),
            superMarioBros3: TemplateBuilder.__convertLinkToOnlyBoolean(superMarioBros3Link),
            superMarioWorld: TemplateBuilder.__convertLinkToOnlyBoolean(superMarioWorldLink),
            newSuperMarioBrosU: TemplateBuilder.__convertLinkToOnlyBoolean(newSuperMarioBrosULink),
            superMario3DWorld: isExclusiveToSuperMarioMaker1 ? TemplateBuilder.__convertLinkToNullableBoolean(superMario3DWorldLink) : TemplateBuilder.__convertLinkToOnlyBoolean(superMario3DWorldLink),
        };
        const isExclusiveToSuperMario3DWorld = !gameStyleTemplate.superMarioBros && !gameStyleTemplate.superMarioBros3 && !gameStyleTemplate.superMarioWorld && !gameStyleTemplate.newSuperMarioBrosU && gameStyleTemplate.superMario3DWorld === true;

        return {
            properties: {
                entityType: this._getContent(this._headersIndexMap.entityType),

                firstAppearance: {
                    game: this._getContent(this._headersIndexMap.firstAppearanceInMarioMaker),
                    version: this._getContent(this._headersIndexMap.firstAppearanceInMarioMaker_version),
                },

                //region ---------- Basic properties ----------

                isIn: {//TODO change every theme, time & style to have a nullable boolean instead of just boolean or nullable boolean
                    game: this._createGameTemplate(),
                    style: gameStyleTemplate,
                    theme: {
                        ground: TemplateBuilder.__convertLinkToOnlyBoolean(groundLink),
                        underground: TemplateBuilder.__convertLinkToOnlyBoolean(undergroundLink),
                        underwater: TemplateBuilder.__convertLinkToOnlyBoolean(underwaterLink),
                        desert: TemplateBuilder.__convertLinkToNullableBoolean(desertLink),
                        snow: TemplateBuilder.__convertLinkToNullableBoolean(snowLink),
                        sky: TemplateBuilder.__convertLinkToNullableBoolean(skyLink),
                        forest: TemplateBuilder.__convertLinkToNullableBoolean(forestLink),
                        ghostHouse: TemplateBuilder.__convertLinkToOnlyBoolean(ghostHouseLink),
                        airship: TemplateBuilder.__convertLinkToOnlyBoolean(airshipLink),
                        castle: TemplateBuilder.__convertLinkToOnlyBoolean(castleLink),
                    },
                    time: {
                        day: TemplateBuilder.__convertLinkToOnlyBoolean(dayLink),
                        night: isExclusiveToSuperMarioMaker1 || isExclusiveToSuperMario3DWorld ? TemplateBuilder.__convertLinkToNullableBoolean(nightLink) : TemplateBuilder.__convertLinkToOnlyBoolean(nightLink),
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

                weight: this._getContent(this._headersIndexMap.weight),

                lightSourceEmitted: {
                    value: this._getContent(this._headersIndexMap.lightSourceEmitted),
                    isInSMB: this._getContent(this._headersIndexMap.lightSourceEmitted_isInSMB)
                },

                canSurviveInTheLavaOrThePoison: this._getContent(this._headersIndexMap.canSurviveInTheLavaOrThePoison),

                bobOmb: {
                    canIgnite: this._getContent(this._headersIndexMap.canIgniteABobOmb),
                    canBeBrokenOrKilled: this._getContent(this._headersIndexMap.canBeBrokenOrKilledByABobOmb),
                },

                canBeAffectedByATwister: this._getContent(this._headersIndexMap.canBeAffectedByATwister),

                canGoThroughWalls: {
                    value: this._getContent(this._headersIndexMap.canGoThroughWalls),
                    inSM3DW: this._getContent(this._headersIndexMap.canGoThroughWalls_inSM3DW),
                },

                canBeStacked: this._getContent(this._headersIndexMap.canBeStacked),

                isGlobalGroundOrGlobal: this._getContent(this._headersIndexMap.isGlobalGroundOrGlobal),

                sound: {
                    instrument: this._getContent(this._headersIndexMap.instrument),
                    canMakeASoundOutOfAMusicBlock: this._getContent(this._headersIndexMap.canMakeASoundOutOfAMusicBlock),
                },

                //endregion ---------- Specific properties ----------
                //region -------------------- Bowser / Bowser Jr. / Magikoopa properties --------------------

                bowserBowserJrMagikoopa: {
                    bowser: {
                        clownCar: this._getContent(this._headersIndexMap.canBeThrownByBowserInClownCar),
                    },
                    bowserJr: {
                        value: this._getContent(this._headersIndexMap.canBeThrownByBowserJr),
                        clownCar: this._getContent(this._headersIndexMap.canBeThrownByBowserJrInClownCar),
                    },
                    magikoopa: {
                        transformed: this._getContent(this._headersIndexMap.canBeTransformedByMagikoopa),
                        spawn: {
                            value: this._getContent(this._headersIndexMap.canBeSpawnedByMagikoopa),
                            wing: this._getContent(this._headersIndexMap.canBeSpawnedByWingedMagikoopa),
                        },
                    },
                },

                //endregion -------------------- Bowser / Bowser Jr. / Magikoopa properties --------------------
                limits: {
                    amount: this._getContent(this._headersIndexMap.limitAmount),
                    editor: this._getContent(this._headersIndexMap.editorLimit),
                    whilePlaying: {
                        isInGEL: {
                            value: this._getContent(this._headersIndexMap.whilePlaying_isInGEL),
                            isSuperGlobal: this._getContent(this._headersIndexMap.whilePlaying_isInGEL_isSuperGlobal),
                        },
                        isInPEL: this._getContent(this._headersIndexMap.whilePlaying_isInPEL),
                        isInPJL: this._getContent(this._headersIndexMap.whilePlaying_isInPJL),
                        otherLimit: {
                            value: this._getContent(this._headersIndexMap.whilePlaying_otherLimit),
                            comment: this._getContent(this._headersIndexMap.whilePlaying_otherLimit_comment),
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
                dimension: TemplateBuilder.__createDimensionTemplate(
                    this._getContent(this._headersIndexMap.dimension), this._getContent(this._headersIndexMap.dimension_maximum),
                    this._getContent(this._headersIndexMap.dimension_differentInSM3DW), this._getContent(this._headersIndexMap.dimension_maximum_differentInSM3DW),
                ),
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


    private static __createDimensionTemplate(value: PossibleDimension, maximumValue: PossibleMaximumDimension, valueSM3DW: PossibleDimensionDifferentInSM3DW, maximumValueSM3DW: PossibleMaximumDimensionDifferentInSM3DW,): DimensionTemplate {
        return value == null && maximumValue == null && valueSM3DW == null && maximumValueSM3DW == null
            ? this.#EMPTY_DIMENSION_TEMPLATE
            : {
                value: value,
                maximum: maximumValue,
                differentInSM3DW: this.__createSM3DWDifferentDimensionTemplate(valueSM3DW, maximumValueSM3DW,),
            };
    }

    private static __createSM3DWDifferentDimensionTemplate(value: PossibleDimensionDifferentInSM3DW, maximumValue: PossibleMaximumDimensionDifferentInSM3DW,): SimpleDimensionTemplateDifferentInSM3DW {
        return value == null && maximumValue == null
            ? this.#EMPTY_SIMPLE_DIMENSION_TEMPLATE
            : {value: value, maximum: maximumValue,};
    }

}
