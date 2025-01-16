import file from 'resources/compiled/Entity.json'

import type {Array, NullableString, NullOr}          from '@joookiwi/type'
import type {CollectionHolder}                       from '@joookiwi/collection'
import {forEachByArray, LazyGenericCollectionHolder} from '@joookiwi/collection'

import type {CanBeBrokenOrKilledByABobOmb, CanBePutOnATrack, CanBeSpawnedByMagikoopa, CanBeSpawnedByWingedMagikoopa, CanBeThrownByBowserInClownCar, CanBeThrownByBowserJr, CanBeThrownByBowserJrInClownCar, CanBeTransformedByMagikoopa, CanGoThroughWalls, CanGoThroughWallsInSM3DW, CanIgniteABobOmb, CanSurviveInTheLavaOrThePoison, HasALightSourceEmittedInSMB, HasAReferenceInMarioMaker, PossibleDimension, PossibleDimensionDifferentInSM3DW, PossibleEntityType, PossibleFirstAppearanceInMarioMaker, PossibleLightSource, PossibleMaximumDimension, PossibleMaximumDimensionDifferentInSM3DW, PossibleWeight} from 'core/entityTypes'
import type {LanguageContent}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           from 'core/_template/LanguageContent'
import type {CanRespawnOnlineOutOfABlockType, CanRespawnOnlineType, CanRespawnType, PossibleBehaviourType}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              from 'core/behaviour/loader.types'
import type {Entity}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    from 'core/entity/Entity'
import type {EntityLink}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                from 'core/entity/loader.types'
import type {PossibleEnglishName}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       from 'core/entity/Entities.types'
import type {LCL_Play, OnlySomeVariants}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                from 'core/entity/properties/loader.types'
import type {PossibleCanMakeASoundOutOfAMusicBlock_Comment}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             from 'core/entity/properties/instrument/loader.types'
import type {LimitAmountType, OffscreenDespawningDownwardVerticalRangeLimitType, OffscreenDespawningHorizontalRangeLimitType, OffscreenDespawningUpwardVerticalRangeLimitType, OffscreenSpawningAndDespawningReferencePoint, OffscreenSpawningDownwardVerticalRangeLimitType, OffscreenSpawningHorizontalRangeLimitType, OffscreenSpawningUpwardVerticalRangeLimitType, PossibleGeneralGlobalLimitComment, PossibleGeneralLimitComment, PossibleOtherLimit, PossibleOtherLimitComment, PossibleProjectileLimitComment, PossibleRenderedObjectLimitTypeComment}                                                          from 'core/entity/properties/limit/loader.types'
import type {PossibleEnglishName as PossibleEnglishName_Category}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       from 'core/entityCategory/EntityCategories.types'
import type {EntityCategory}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            from 'core/entityCategory/EntityCategory'
import type {GameContentFromAllGames,}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  from 'core/game/Loader.types'
import type {Instrument}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                from 'core/instrument/Instrument'
import type {PossibleInstrument}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        from 'core/instrument/loader.types'
import type {PossibleEnglishName as PossibleEnglishName_Limit}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          from 'core/limit/Limits.types'
import type {PossibleName as PossibleMarioMakerVersion}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 from 'core/version/Versions.types'
import type {Loader}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    from 'util/loader/Loader'
import type {Name}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      from 'lang/name/Name'

import {isInProduction}        from 'variables'
import {EntityContainer}       from 'core/entity/Entity.container'
import {Entities}              from 'core/entity/Entities'
import {ReferenceLinks}        from 'core/entity/ReferenceLinks'
import {EntityCategoryLoader}  from 'core/entityCategory/EntityCategory.loader'
import {EmptyEntityCategory}   from 'core/entityCategory/EmptyEntityCategory'
import {Instruments}           from 'core/instrument/Instruments'
import {Limits}                from 'core/limit/Limits'
import {NOT_APPLICABLE}        from 'util/commonVariables'
import {createNameFromContent} from 'lang/name/createNameFromContent'
import {Empty}                 from 'util/emptyVariables'
import {ArrayAsCollection}     from 'util/collection/ArrayAsCollection'

import EMPTY_COLLECTION_HOLDER = Empty.EMPTY_COLLECTION_HOLDER
import LimitCompanion =          Limits.Companion
import InstrumentCompanion =     Instruments.Companion

/**
 * @dependsOn<{@link EntityCategoryLoader}>
 * @dependsOn<{@link Limits}>
 * @dependsOn<{@link Entities}>
 * @dependsOn<{@link Instruments}>
 * @recursiveReference<{@link Entities}>
 * @singleton
 */
export class EntityLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, Entity>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EntityLoader

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: ReadonlyMap<PossibleEnglishName, Entity>

    public load(): ReadonlyMap<PossibleEnglishName, Entity> {
        if (this.#map != null)
            return this.#map

        const entityCategoryMap = EntityCategoryLoader.get.load()
        const references = new Map<PossibleEnglishName, Entity>()
        const referenceLinks = new ReferenceLinks()
        forEachByArray(file as Array<Content>, content => {
            const englishName = (content.english ?? content.americanEnglish) as PossibleEnglishName

            referenceLinks.addSubReference(
                englishName,
                content.inDayTime,
                content.inNightTime,
                content.inSMBGameStyle,
                content.inSMB3GameStyle,
                content.inSMWGameStyle,
                content.inNSMBUGameStyle,
                content.inSM3DWGameStyle,
                content.inGroundTheme,
                content.inUndergroundTheme,
                content.inUnderwaterTheme,
                content.inDesertTheme,
                content.inSnowTheme,
                content.inSkyTheme,
                content.inForestTheme,
                content.inGhostHouseTheme,
                content.inAirshipTheme,
                content.inCastleTheme,
            )
            references.set(englishName, createReference(content, referenceLinks, entityCategoryMap,),)
        },)

        if (!isInProduction)
            console.info(
                '-------------------- "entity" has been loaded --------------------\n',
                references,
                '\n-------------------- "entity" has been loaded --------------------',
            )

        return this.#map = references
    }

}


interface Content
    extends LanguageContent, GameContentFromAllGames {

    readonly english: NullOr<PossibleEnglishName>
    readonly americanEnglish: NullOr<PossibleEnglishName>

    readonly entityType: PossibleEntityType

    readonly firstAppearanceInMarioMaker: PossibleFirstAppearanceInMarioMaker
    readonly firstAppearanceInMarioMaker_version: PossibleMarioMakerVersion


    //region -------------------- Is in properties --------------------

    readonly isInSMBGameStyle: boolean
    readonly isInSMB3GameStyle: boolean
    readonly isInSMWGameStyle: boolean
    readonly isInNSMBUGameStyle: boolean
    readonly isInSM3DWGameStyle: boolean

    readonly isInGroundTheme: boolean
    readonly isInUndergroundTheme: boolean
    readonly isInUnderwaterTheme: boolean
    readonly isInDesertTheme: boolean
    readonly isInSnowTheme: boolean
    readonly isInSkyTheme: boolean
    readonly isInForestTheme: boolean
    readonly isInGhostHouseTheme: boolean
    readonly isInAirshipTheme: boolean
    readonly isInCastleTheme: boolean

    readonly isInDayTime: boolean
    readonly isInNightTime: boolean

    //endregion -------------------- Is in properties --------------------
    //region -------------------- Basic properties --------------------

    readonly categoryInTheEditor: NullOr<PossibleEnglishName_Category>

    readonly hasAMushroomVariant: boolean

    readonly canBeInAParachute: boolean
    readonly canBeInAParachute_comment: NullOr<LCL_Play>

    readonly canHaveWings: boolean
    readonly canHaveWings_comment: NullOr<LCL_Play>

    //endregion -------------------- Basic properties --------------------
    //region -------------------- Specific properties --------------------

    readonly canContainOrSpawnAKey: boolean

    readonly isAffectedDirectlyByAnOnOrOffState: boolean
    readonly isAffectedDirectlyByAnOnOrOffState_comment: NullOr<OnlySomeVariants>

    readonly canBePutOnATrack: CanBePutOnATrack
    readonly editorLimit_canBePutOnATrack: NullOr<PossibleEnglishName_Limit>
    readonly whilePlaying_canBePutOnATrack: NullOr<PossibleEnglishName_Limit>

    readonly canSpawnOutOfAPipe: boolean

    readonly canBePutInASwingingClaw: boolean

    readonly canBeThrownByALakitu: BooleanOrUnknownCharacter
    readonly canBePutInALakituCloud: BooleanOrUnknownCharacter

    readonly canBePutInAClownCar: boolean

    readonly canBeFiredOutOfABulletLauncher: boolean

    readonly canComeOutOfABlock: boolean

    readonly canBePutInATree: boolean

    readonly weight: PossibleWeight

    readonly lightSourceEmitted: PossibleLightSource
    readonly lightSourceEmitted_isInSMB: HasALightSourceEmittedInSMB

    readonly canSurviveInTheLavaOrThePoison: CanSurviveInTheLavaOrThePoison

    readonly canIgniteABobOmb: CanIgniteABobOmb
    readonly canBeBrokenOrKilledByABobOmb: CanBeBrokenOrKilledByABobOmb

    readonly canBeAffectedByATwister: boolean
    readonly canBeAffectedByATwister_parachute: boolean
    readonly canBeAffectedByATwister_falling: boolean

    readonly canGoThroughWalls: CanGoThroughWalls
    readonly canGoThroughWalls_SM3DW: CanGoThroughWallsInSM3DW

    readonly canBeStacked: boolean

    readonly isGlobalGroundOrGlobal: boolean
    readonly isGlobalGroundOrGlobal_SM3DW: boolean

    readonly instrument: PossibleInstrument
    readonly canMakeASoundOutOfAMusicBlock: boolean
    readonly canMakeASoundOutOfAMusicBlock_comment: NullOr<PossibleCanMakeASoundOutOfAMusicBlock_Comment>

    //endregion -------------------- Specific properties --------------------
    //region -------------------- Bowser / Bowser Jr. / Magikoopa properties --------------------

    readonly canBeThrownByBowserInClownCar: CanBeThrownByBowserInClownCar

    readonly canBeThrownByBowserJr: CanBeThrownByBowserJr
    readonly canBeThrownByBowserJrInClownCar: CanBeThrownByBowserJrInClownCar

    readonly canBeTransformedByMagikoopa: CanBeTransformedByMagikoopa
    readonly canBeSpawnedByMagikoopa: CanBeSpawnedByMagikoopa
    readonly canBeSpawnedByWingedMagikoopa: CanBeSpawnedByWingedMagikoopa

    //endregion -------------------- Bowser / Bowser Jr. / Magikoopa properties --------------------
    //region -------------------- Limit properties --------------------

    readonly limitAmount: LimitAmountType

    readonly editorLimit_SMM1And3DS: NullOr<| PossibleEnglishName_Limit | NotApplicable>
    readonly editorLimit_SMM2: NullOr<| PossibleEnglishName_Limit | NotApplicable>
    readonly editorLimit_SMM2_isUnknown: boolean

    readonly whilePlaying_isInGEL: boolean
    readonly whilePlaying_isInGEL_comment: NullOr<PossibleGeneralLimitComment>
    readonly whilePlaying_isInGEL_isSuperGlobal: boolean
    readonly whilePlaying_isInGEL_isSuperGlobal_comment: NullOr<PossibleGeneralGlobalLimitComment>

    readonly whilePlaying_isInPL: boolean

    readonly whilePlaying_isInPJL: boolean
    readonly whilePlaying_isInPJL_comment: NullOr<PossibleProjectileLimitComment>

    readonly whilePlaying_isInObjectRenderedLimit: boolean
    readonly whilePlaying_isInObjectRenderedLimit_comment: NullOr<PossibleRenderedObjectLimitTypeComment>

    readonly whilePlaying_isInCollectedCoinLimit: boolean

    readonly whilePlaying_otherLimit: NullOr<PossibleOtherLimit>
    readonly whilePlaying_otherLimit_comment: NullOr<PossibleOtherLimitComment>
    readonly whilePlaying_otherLimit_isUnknown: boolean

    //endregion -------------------- Limit properties --------------------
    //region -------------------- Spawning / Despawning range properties --------------------

    readonly canRespawn: CanRespawnType
    readonly canRespawn_online: CanRespawnOnlineType
    readonly canRespawn_online_inABlock: CanRespawnOnlineOutOfABlockType

    readonly behaviour_solo: PossibleBehaviourType
    readonly behaviour_localCoop: PossibleBehaviourType
    readonly behaviour_onlineCoop: PossibleBehaviourType
    readonly behaviour_onlineVS: PossibleBehaviourType


    readonly offscreenSpawningAndDespawningReferencePoint: OffscreenSpawningAndDespawningReferencePoint
    readonly offscreenSpawningHorizontalRange: OffscreenSpawningHorizontalRangeLimitType
    readonly offscreenDespawningHorizontalRange: OffscreenDespawningHorizontalRangeLimitType

    readonly offscreenSpawningUpwardVerticalRange: OffscreenSpawningUpwardVerticalRangeLimitType
    readonly offscreenDespawningUpwardVerticalRange: OffscreenDespawningUpwardVerticalRangeLimitType

    readonly offscreenSpawningDownwardVerticalRange: OffscreenSpawningDownwardVerticalRangeLimitType
    readonly offscreenDespawningDownwardVerticalRange: OffscreenDespawningDownwardVerticalRangeLimitType

    //endregion -------------------- Spawning / Despawning range properties --------------------
    //region -------------------- Dimension properties --------------------

    readonly dimension: PossibleDimension
    readonly dimension_maximum: PossibleMaximumDimension

    readonly dimension_differentSM3DW: PossibleDimensionDifferentInSM3DW
    readonly dimension_maximum_differentSM3DW: PossibleMaximumDimensionDifferentInSM3DW

    //endregion -------------------- Dimension properties --------------------
    //region -------------------- Reference on specific condition properties -------------------

    readonly inDayTime: NullOr<EntityLink>
    readonly inNightTime: NullOr<EntityLink>

    readonly inGroundTheme: NullOr<EntityLink>
    readonly inUndergroundTheme: NullOr<EntityLink>
    readonly inUnderwaterTheme: NullOr<EntityLink>
    readonly inDesertTheme: NullOr<EntityLink>
    readonly inSnowTheme: NullOr<EntityLink>
    readonly inSkyTheme: NullOr<EntityLink>
    readonly inForestTheme: NullOr<EntityLink>
    readonly inGhostHouseTheme: NullOr<EntityLink>
    readonly inAirshipTheme: NullOr<EntityLink>
    readonly inCastleTheme: NullOr<EntityLink>

    readonly inSMBGameStyle: NullOr<EntityLink>
    readonly inSMB3GameStyle: NullOr<EntityLink>
    readonly inSMWGameStyle: NullOr<EntityLink>
    readonly inNSMBUGameStyle: NullOr<EntityLink>
    readonly inSM3DWGameStyle: NullOr<EntityLink>

    //endregion -------------------- Reference on specific condition properties --------------------

    readonly hasANameReferencedInMarioMaker: HasAReferenceInMarioMaker

}

/** A type-alias definition of the {@link EntityCategories} name-reference {@link ReadonlyMap map} */
type EntityCategoryMap = ReadonlyMap<PossibleEnglishName_Category, EntityCategory>

//region -------------------- Create reference --------------------

function createReference(content: Content, referenceLinks: ReferenceLinks, entityCategoryMap: EntityCategoryMap,): Entity {
    const englishName = (content.english ?? content.americanEnglish)!

    const isInReferences = referenceLinks.hasAnyReferences(englishName,)
    const everyGameStyleReferences = isInReferences ? getReferences(referenceLinks.getGameStyleReferenceLinks(englishName,),) : EMPTY_COLLECTION_HOLDER
    const everyThemeReferences = isInReferences ? getReferences(referenceLinks.getThemeReferenceLinks(englishName,),) : EMPTY_COLLECTION_HOLDER
    const everyTimeReferences = isInReferences ? getReferences(referenceLinks.getTimeReferenceLinks(englishName,),) : EMPTY_COLLECTION_HOLDER
    const everyReferences = isInReferences ? getReferences(referenceLinks.getEveryReferenceLinks(englishName,),) : EMPTY_COLLECTION_HOLDER

    return new EntityContainer(
        createName(content,),
        getCategory(content, entityCategoryMap,),

        content.hasAMushroomVariant,
        content.canBeInAParachute, content.canBeInAParachute_comment,
        content.canHaveWings, content.canHaveWings_comment,

        content.canContainOrSpawnAKey,
        content.isAffectedDirectlyByAnOnOrOffState, content.isAffectedDirectlyByAnOnOrOffState_comment,
        content.canSpawnOutOfAPipe,
        content.canBePutInASwingingClaw,
        content.canBeThrownByALakitu,
        content.canBePutInALakituCloud,
        content.canBePutInAClownCar,
        content.canBeFiredOutOfABulletLauncher, content.canComeOutOfABlock, content.canBePutInATree,

        content.canBeAffectedByATwister, content.canBeAffectedByATwister_parachute, content.canBeAffectedByATwister_falling,

        content.canBeStacked,
        content.isGlobalGroundOrGlobal, content.isGlobalGroundOrGlobal_SM3DW,

        content.isInSuperMarioMaker1, content.isInSuperMarioMakerFor3DS, content.isInSuperMarioMaker2,
        content.isInSMBGameStyle, content.isInSMB3GameStyle, content.isInSMWGameStyle, content.isInNSMBUGameStyle, content.isInSM3DWGameStyle,
        content.isInGroundTheme, content.isInUndergroundTheme, content.isInUnderwaterTheme, content.isInDesertTheme, content.isInSnowTheme, content.isInSkyTheme, content.isInForestTheme, content.isInGhostHouseTheme, content.isInAirshipTheme, content.isInCastleTheme,
        content.isInDayTime, content.isInNightTime,

        getLimit(content.editorLimit_SMM1And3DS,), getLimit(content.editorLimit_SMM2,), content.editorLimit_SMM2_isUnknown,
        content.whilePlaying_isInGEL, content.whilePlaying_isInGEL_comment, content.whilePlaying_isInGEL_isSuperGlobal, content.whilePlaying_isInGEL_isSuperGlobal_comment,
        content.whilePlaying_isInPL,
        content.whilePlaying_isInPJL, content.whilePlaying_isInPJL_comment,
        content.whilePlaying_isInObjectRenderedLimit, content.whilePlaying_isInObjectRenderedLimit_comment,
        content.whilePlaying_isInCollectedCoinLimit,
        getLimit(content.whilePlaying_otherLimit,), content.whilePlaying_otherLimit_comment, content.whilePlaying_otherLimit_isUnknown,

        createInstruments(content,), content.canMakeASoundOutOfAMusicBlock, content.canMakeASoundOutOfAMusicBlock_comment,

        getReferencesFromLink(content.inSMBGameStyle, englishName,), getReferencesFromLink(content.inSMB3GameStyle, englishName,), getReferencesFromLink(content.inSMWGameStyle, englishName,), getReferencesFromLink(content.inNSMBUGameStyle, englishName,), getReferencesFromLink(content.inSM3DWGameStyle, englishName,),
        getReferencesFromLink(content.inGroundTheme, englishName,), getReferencesFromLink(content.inUndergroundTheme, englishName,), getReferencesFromLink(content.inUnderwaterTheme, englishName,), getReferencesFromLink(content.inDesertTheme, englishName,), getReferencesFromLink(content.inSnowTheme, englishName,), getReferencesFromLink(content.inSkyTheme, englishName,), getReferencesFromLink(content.inForestTheme, englishName,), getReferencesFromLink(content.inGhostHouseTheme, englishName,), getReferencesFromLink(content.inAirshipTheme, englishName,), getReferencesFromLink(content.inCastleTheme, englishName,),
        getReferencesFromLink(content.inDayTime, englishName,), getReferencesFromLink(content.inNightTime, englishName,),
        everyGameStyleReferences, everyThemeReferences, everyTimeReferences, everyReferences,
    )
}

//endregion -------------------- Create reference --------------------
//region -------------------- Create name --------------------

function createName(content: Content,): Name<string> {
    const isInSMM1 = content.isInSuperMarioMaker1
    const isInSMM3DS = content.isInSuperMarioMakerFor3DS
    const isInSMM2 = content.isInSuperMarioMaker2

    if (isInSMM1 && !isInSMM3DS && !isInSMM2)
        return createNameFromContent(content, 1, false,)
    if (!isInSMM1 && !isInSMM3DS && isInSMM2)
        return createNameFromContent(content, 2, false,)
    if (!isInSMM1 && isInSMM3DS && !isInSMM2)
        return createNameFromContent(content, '3DS', false,)
    if (isInSMM1 && isInSMM3DS && !isInSMM2)
        return createNameFromContent(content, 'notSMM2', false,)
    if (isInSMM1 && !isInSMM3DS && isInSMM2)
        return createNameFromContent(content, 'notSMM3DS', false,)
    if (!isInSMM1 && isInSMM3DS && isInSMM2)
        return createNameFromContent(content, 'notSMM1', false,)
    return createNameFromContent(content, 'all', false,)
}

//endregion -------------------- Create name --------------------
//region -------------------- Get entity category --------------------

/**
 * Get the entity category reference from the {@link EntityTemplate template}
 * or return an {@link EmptyEntityCategory empty category}.
 */
function getCategory(content: Content, entityCategoryMap: EntityCategoryMap,): EntityCategory {
    const value = content.categoryInTheEditor
    if (value == null)
        return EmptyEntityCategory.get
    return entityCategoryMap.get(value,)!
}

//endregion -------------------- Get entity category --------------------
//region -------------------- Create limit --------------------

function getLimit(value: NullableString<PossibleEnglishName_Limit>,): NullOr<Limits>
function getLimit(value: NullableString<| PossibleEnglishName_Limit | NotApplicable>,): NullOr<| Limits | NotApplicable>
function getLimit(value: NullableString<| PossibleEnglishName_Limit | NotApplicable>,) {
    if (value == null)
        return null
    if (value === NOT_APPLICABLE)
        return value
    return LimitCompanion.getValueByName(value,)
}

//endregion -------------------- Create limit --------------------
//region -------------------- Create instrument --------------------

function createInstruments(content: Content,): CollectionHolder<Instrument> {
    const value = content.instrument
    if (value == null)
        return EMPTY_COLLECTION_HOLDER
    return new LazyGenericCollectionHolder(() => {
        const singleInstrument = InstrumentCompanion.getValueByName(value,)
        if (singleInstrument != null)
            return new ArrayAsCollection([singleInstrument.reference,],)
        return InstrumentCompanion.values.filter(it => value.includes(it.englishName,),).map(it => it.reference,)
    },)
}

//endregion -------------------- Create instrument --------------------
//region -------------------- Create references --------------------

/**
 * Get the {@link Entity} from the {@link link} value
 *
 * @param link the entity link or null
 * @param name The entity name
 */
function getReferencesFromLink(link: NullableString<EntityLink>, name: PossibleEnglishName,): CollectionHolder<Entity> {
    if (link == null)
        return EMPTY_COLLECTION_HOLDER
    if (link === 'this')
        return new LazyGenericCollectionHolder(() => [Entities.Companion.getValueByName(name,).reference],)
    return new ArrayAsCollection(link.split(' / ',),).map(it => Entities.Companion.getValueByName(it,).reference,)
}

/**
 * Get the {@link Entity} from the {@link reference}
 *
 * @param references A collection of {@link Entity} names
 */
function getReferences(references: CollectionHolder<PossibleEnglishName>,): CollectionHolder<Entity> {
    return references.map(it => Entities.Companion.getValueByName(it,).reference,)
}

//endregion -------------------- Create reference --------------------
