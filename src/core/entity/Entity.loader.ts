import file from 'resources/compiled/Entity.json'

import type {Lazy}        from '@joookiwi/lazy'
import {CommonLazy, lazy} from '@joookiwi/lazy'

import type {CanBeAffectedByATwister, CanBeBrokenOrKilledByABobOmb, CanBeFiredOutOfABulletLauncher, CanBePutInABlock, CanBePutInAClownCar, CanBePutInALakituCloud, CanBePutInASwingingClaw, CanBePutInATree, CanBePutOnATrack, CanBeSpawnedByMagikoopa, CanBeSpawnedByWingedMagikoopa, CanBeStacked, CanBeThrownByALakitu, CanBeThrownByBowserInClownCar, CanBeThrownByBowserJr, CanBeThrownByBowserJrInClownCar, CanBeTransformedByMagikoopa, CanContainOrSpawnAKey, CanGoThroughWalls, CanGoThroughWallsInSM3DW, CanIgniteABobOmb, CanSpawnOutOfAPipe, CanSurviveInTheLavaOrThePoison, HasALightSourceEmittedInSMB, HasAReferenceInMarioMaker, IsAffectedDirectlyByAnOnOrOffState, IsGlobalGroundOrGlobal, PossibleDimension, PossibleDimensionDifferentInSM3DW, PossibleEntityType, PossibleFirstAppearanceInMarioMaker, PossibleLightSource, PossibleMaximumDimension, PossibleMaximumDimensionDifferentInSM3DW, PossibleWeight} from 'core/entityTypes'
import type {LanguageContent}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        from 'core/_template/LanguageContent'
import type {NotApplicableProperty, UnknownProperty}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 from 'core/_properties/PropertyWithEverything'
import type {PropertyThatCanBeUnknownWithComment}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    from 'core/_properties/PropertyThatCanBeUnknownWithComment'
import type {CanRespawnOnlineOutOfABlockType, CanRespawnOnlineType, CanRespawnType, PossibleBehaviourType}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           from 'core/behaviour/loader.types'
import type {Entity, PossibleOtherEntities}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          from 'core/entity/Entity'
import type {EntityLink}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             from 'core/entity/loader.types'
import type {PossibleEnglishName}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    from 'core/entity/Entities.types'
import type {Property}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               from 'core/entity/properties/Property'
import type {PossibleCanBeInAParachute, PossibleCanHaveWings, PossibleHasAMushroomVariant}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           from 'core/entity/properties/basic/BasicProperty'
import type {CollectedCoinLimitType, EditorLimitType_SMM1And3DS, EditorLimitType_SMM2, GeneralGlobalLimitType, GeneralLimitType, LimitAmountType, OffscreenDespawningDownwardVerticalRangeLimitType, OffscreenDespawningHorizontalRangeLimitType, OffscreenDespawningUpwardVerticalRangeLimitType, OffscreenSpawningAndDespawningReferencePoint, OffscreenSpawningDownwardVerticalRangeLimitType, OffscreenSpawningHorizontalRangeLimitType, OffscreenSpawningUpwardVerticalRangeLimitType, OtherLimitCommentType, OtherLimitType, PowerUpLimitType, ProjectileLimitType, RenderedObjectLimitType}                                                                                                                                                                                                                                                                                                                                   from 'core/entity/properties/limit/loader.types'
import type {LimitProperty}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          from 'core/entity/properties/limit/LimitProperty'
import type {CanMakeASoundOutOfAMusicBlock}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          from 'core/entity/properties/instrument/loader.types'
import type {InstrumentProperty}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     from 'core/entity/properties/instrument/InstrumentProperty'
import type {PossibleEnglishName as PossibleEnglishName_Category}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    from 'core/entityCategory/EntityCategories.types'
import type {EntityCategory}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         from 'core/entityCategory/EntityCategory'
import type {GameContentFromAllGames,}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               from 'core/game/Loader.types'
import type {PossibleInstrument}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     from 'core/instrument/loader.types'
import type {PossibleEnglishName as PossibleEnglishName_Limit}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       from 'core/limit/Limits.types'
import type {PossibleName as PossibleMarioMakerVersion}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              from 'core/version/Versions.types'
import type {Loader}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 from 'util/loader/Loader'

import {isInProduction}                                                                                             from 'variables'
import {PropertyContainer}                                                                                          from 'core/_properties/Property.container'
import {newBooleanContainer, newBooleanWithCommentCommentContainer, newBooleanWithCommentThatCanBeUnknownContainer} from 'core/_properties/propertyCreator'
import {EmptyEntity}                                                                                                from 'core/entity/EmptyEntity'
import {EntityContainer}                                                                                            from 'core/entity/Entity.container'
import {Entities}                                                                                                   from 'core/entity/Entities'
import {ReferenceLinks}                                                                                             from 'core/entity/ReferenceLinks'
import {EntityReferencesContainer}                                                                                  from 'core/entity/properties/EntityReferences.container'
import {PropertyContainer as PropertyInstanceContainer}                                                             from 'core/entity/properties/Property.container'
import {GamePropertyProvider}                                                                                       from 'core/entity/properties/game/GameProperty.provider'
import {GameStylePropertyProvider}                                                                                  from 'core/entity/properties/gameStyle/GameStyleProperty.provider'
import {EmptyInstrumentProperty}                                                                                    from 'core/entity/properties/instrument/EmptyInstrumentProperty'
import {InstrumentPropertyProvider}                                                                                 from 'core/entity/properties/instrument/InstrumentProperty.provider'
import {LimitPropertyProvider}                                                                                      from 'core/entity/properties/limit/LimitProperty.provider'
import {ThemePropertyProvider}                                                                                      from 'core/entity/properties/theme/ThemeProperty.provider'
import {TimePropertyProvider}                                                                                       from 'core/entity/properties/time/TimeProperty.provider'
import {EntityCategoryLoader}                                                                                       from 'core/entityCategory/EntityCategory.loader'
import {EmptyEntityCategory}                                                                                        from 'core/entityCategory/EmptyEntityCategory'
import {GameStructureProvider}                                                                                      from 'core/game/GameStructure.provider'
import {Instruments}                                                                                                from 'core/instrument/Instruments'
import {Limits}                                                                                                     from 'core/limit/Limits'
import {UNKNOWN_CHARACTER}                                                                                          from 'util/commonVariables'
import {createNameFromContent}                                                                                      from 'lang/name/createNameFromContent'

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

    #map?: Map<PossibleEnglishName, Entity>

    public load(): ReadonlyMap<PossibleEnglishName, Entity> {
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleEnglishName, Entity>()
        const referenceLinks = new ReferenceLinks()
        let index = file.length
        while (index-- > 0) {
            const content = file[index] as Content
            const englishName = (content.english ?? content.americanEnglish) as PossibleEnglishName

            referenceLinks.addSubReference(
                englishName,
                content.inDayTheme,
                content.inNightTheme,
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
            references.set(englishName, createReference(content, referenceLinks,),)
        }

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

    readonly entityType: PossibleEntityType

    readonly firstAppearanceInMarioMaker: PossibleFirstAppearanceInMarioMaker
    readonly firstAppearanceInMarioMaker_version: PossibleMarioMakerVersion


    //region -------------------- Basic properties --------------------

    readonly categoryInTheEditor: NullOr<PossibleEnglishName_Category>

    readonly hasAMushroomVariant: PossibleHasAMushroomVariant
    readonly canBeInAParachute: PossibleCanBeInAParachute
    readonly canHaveWings: PossibleCanHaveWings

    //endregion -------------------- Basic properties --------------------
    //region -------------------- Specific properties --------------------

    readonly canContainOrSpawnAKey: CanContainOrSpawnAKey

    readonly isAffectedDirectlyByAnOnOrOffState: IsAffectedDirectlyByAnOnOrOffState

    readonly canBePutOnATrack: CanBePutOnATrack
    readonly editorLimit_canBePutOnATrack: NullOr<PossibleEnglishName_Limit>
    readonly whilePlaying_canBePutOnATrack: NullOr<PossibleEnglishName_Limit>

    readonly canSpawnOutOfAPipe: CanSpawnOutOfAPipe

    readonly canBePutInASwingingClaw: CanBePutInASwingingClaw

    readonly canBeThrownByALakitu: CanBeThrownByALakitu
    readonly canBePutInALakituCloud: CanBePutInALakituCloud

    readonly canBePutInAClownCar: CanBePutInAClownCar

    readonly canBeFiredOutOfABulletLauncher: CanBeFiredOutOfABulletLauncher

    readonly canBePutInABlock: CanBePutInABlock

    readonly canBePutInATree: CanBePutInATree

    readonly weight: PossibleWeight

    readonly lightSourceEmitted: PossibleLightSource
    readonly lightSourceEmitted_isInSMB: HasALightSourceEmittedInSMB

    readonly canSurviveInTheLavaOrThePoison: CanSurviveInTheLavaOrThePoison

    readonly canIgniteABobOmb: CanIgniteABobOmb
    readonly canBeBrokenOrKilledByABobOmb: CanBeBrokenOrKilledByABobOmb

    readonly canBeAffectedByATwister: CanBeAffectedByATwister

    readonly canGoThroughWalls: CanGoThroughWalls
    readonly canGoThroughWalls_SM3DW: CanGoThroughWallsInSM3DW

    readonly canBeStacked: CanBeStacked

    readonly isGlobalGroundOrGlobal: IsGlobalGroundOrGlobal

    readonly instrument: PossibleInstrument
    readonly canMakeASoundOutOfAMusicBlock: CanMakeASoundOutOfAMusicBlock

    //endregion -------------------- Specific properties --------------------
    //region -------------------- Bowser / Bowser Jr. / Magikoopa properties --------------------

    readonly canBeThrownByBowserInClownCar: CanBeThrownByBowserInClownCar

    readonly canBeThrownByBowserJr: CanBeThrownByBowserJr
    readonly canBeThrownByBowserJrInClownCar: CanBeThrownByBowserJrInClownCar

    readonly canBeTransformedByMagikoopa: CanBeTransformedByMagikoopa
    readonly canBeSpawnedByMagikoopa: CanBeSpawnedByMagikoopa
    readonly canBeSpawnedByWingedMagikoopa: CanBeSpawnedByWingedMagikoopa

    //endregion -------------------- Bowser / Bowser Jr. / Magikoopa properties --------------------
    //region -------------------- Entity limit properties --------------------

    readonly limitAmount: LimitAmountType

    readonly editorLimit_SMM1And3DS: EditorLimitType_SMM1And3DS
    readonly editorLimit_SMM2: EditorLimitType_SMM2

    readonly whilePlaying_isInGEL: GeneralLimitType
    readonly whilePlaying_isInGEL_isSuperGlobal: GeneralGlobalLimitType

    readonly whilePlaying_isInPL: PowerUpLimitType

    readonly whilePlaying_isInPJL: ProjectileLimitType

    readonly whilePlaying_isInObjectRenderedLimit: RenderedObjectLimitType

    readonly whilePlaying_isInCollectedCoinLimit: CollectedCoinLimitType

    readonly whilePlaying_otherLimit: OtherLimitType
    readonly whilePlaying_otherLimit_comment: OtherLimitCommentType

    //endregion -------------------- Entity limit properties --------------------
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

    readonly inDayTheme: NullOr<EntityLink>
    readonly inNightTheme: NullOr<EntityLink>

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

//region -------------------- Create template --------------------

/**
 * Tell if a {@link Nullable} {@link EntityLink} has "this"
 *
 * @param link The {@link Nullable} {@link EntityLink} to test
 */
function hasThisReferenced(link: Nullable<EntityLink>,): boolean {
    return link != null && link.includes('this',)
}

/**
 * Tell if the {@link Nullable} {@link EntityLink} has "this".
 * And if the {@link EntityLink} is <b>null</b>, then <b>null</b> is returned
 *
 * @param link The {@link EntityLink} to test
 */
function nullOrHasThisReferenced(link: Nullable<EntityLink>,): NullOrBoolean {
    return link == null ? null : link.includes('this',)
}

//endregion -------------------- Create template --------------------
//region -------------------- Create reference --------------------

const EMPTY_ENTITIES = lazy(() => [EmptyEntity.get,] as const,)

function createReference(content: Content, referenceLinks: ReferenceLinks,): Entity {
    const isInSMM1 = content.isInSuperMarioMaker1
    const isInSMM3DS = content.isInSuperMarioMakerFor3DS
    const isInSMM2 = content.isInSuperMarioMaker2

    if (isInSMM1 && !isInSMM3DS && !isInSMM2)
        return new EntityContainer(
            createNameFromContent(content, 1, false,),
            getEntityCategoryInSmm1(content.categoryInTheEditor,),
            createPropertyInSmm1(content,),
            createReferences(content, referenceLinks,),
        )
    if (!isInSMM1 && !isInSMM3DS && isInSMM2) {
        if (!hasThisReferenced(content.inSMBGameStyle,)
            && !hasThisReferenced(content.inSMB3GameStyle,)
            && !hasThisReferenced(content.inSMWGameStyle,)
            && !hasThisReferenced(content.inNSMBUGameStyle,)
            && hasThisReferenced(content.inSM3DWGameStyle,))
            return new EntityContainer(
                createNameFromContent(content, 2, false,),
                getEntityCategory(content.categoryInTheEditor,),
                createPropertyInSmm2InSm3dw(content,),
                createReferences(content, referenceLinks,),
            )
        return new EntityContainer(
            createNameFromContent(content, 2, false,),
            getEntityCategory(content.categoryInTheEditor,),
            createPropertyInSmm2ButNotSm3dw(content,),
            createReferences(content, referenceLinks,),
        )
    }
    if (!isInSMM1 && isInSMM3DS && !isInSMM2)
        return new EntityContainer(
            createNameFromContent(content, '3DS', false,),
            getEntityCategory(content.categoryInTheEditor,),
            createProperty(content,),
            createReferences(content, referenceLinks,),
        )
    if (isInSMM1 && isInSMM3DS && !isInSMM2)
        return new EntityContainer(
            createNameFromContent(content, 'notSMM2', false,),
            getEntityCategory(content.categoryInTheEditor,),
            createProperty(content,),
            createReferences(content, referenceLinks,),
        )
    if (isInSMM1 && !isInSMM3DS && isInSMM2)
        return new EntityContainer(
            createNameFromContent(content, 'notSMM3DS', false,),
            getEntityCategory(content.categoryInTheEditor,),
            createProperty(content,),
            createReferences(content, referenceLinks,),
        )
    if (!isInSMM1 && isInSMM3DS && isInSMM2)
        return new EntityContainer(
            createNameFromContent(content, 'notSMM1', false,),
            getEntityCategory(content.categoryInTheEditor,),
            createProperty(content,),
            createReferences(content, referenceLinks,),
        )
    return new EntityContainer(
        createNameFromContent(content, 'all', false,),
        getEntityCategory(content.categoryInTheEditor,),
        createProperty(content,),
        createReferences(content, referenceLinks,),
    )
}


/**
 * Get the entity category reference from the {@link EntityTemplate template}
 * or return an {@link EmptyEntityCategory empty category}.
 */
function getEntityCategory(value: NullOr<PossibleEnglishName_Category>,): EntityCategory {
    if (value == null)
        return EmptyEntityCategory.get
    return EntityCategoryLoader.get.load().get(value,)!
}

/**
 * Get the @link EmptyEntityCategory empty category} reference from the {@link EntityTemplate template}
 * associated to the {@link Games.SUPER_MARIO_MAKER_1 SMM1 game}
 */
function getEntityCategoryInSmm1(value: NullOr<PossibleEnglishName_Category>,): EmptyEntityCategory {
    if (isInProduction)
        return EmptyEntityCategory.get

    if (value == null)
        return EmptyEntityCategory.get
    throw new TypeError('An exclusive SMM1 entity should not have any cateogry.',)
}


function getLimitProperty(value: Nullable<| PossibleEnglishName_Limit | UnknownCharacter>,): PropertyThatCanBeUnknownWithComment<Limits, false, null> | NotApplicableProperty | UnknownProperty {
    if (value == null)
        return PropertyContainer.NOT_APPLICABLE_CONTAINER
    if (value === UNKNOWN_CHARACTER)
        return PropertyContainer.UNKNOWN_CONTAINER
    return new PropertyContainer(Limits.CompanionEnum.get.getValueByName(value,), false, null, null,)
}

function getLimitPropertyWithComment<COMMENT extends NullOrString, >(value: Nullable<| PossibleEnglishName_Limit | UnknownCharacter>, comment: COMMENT,): PropertyThatCanBeUnknownWithComment<Limits, boolean, COMMENT> | UnknownProperty | NotApplicableProperty {
    if (value == null)
        return PropertyContainer.NOT_APPLICABLE_CONTAINER
    if (value === UNKNOWN_CHARACTER)
        return PropertyContainer.UNKNOWN_CONTAINER
    return new PropertyContainer(Limits.CompanionEnum.get.getValueByName(value,), false, null, comment,)
}

function getLimitByNameOrAcronymOrNull(value: Nullable<PossibleEnglishName_Limit>,): NullOr<Limits> {
    if (value == null)
        return null
    return Limits.CompanionEnum.get.getValueByName(value,)
}

/**
 * Create a {@link Lazy} entity with returning type 1 or 2 entity.
 * It can contain 'this' that will return itself in the callback.
 *
 * @param name The entity name
 * @param link the entity link or null
 */
function getOtherEntityReferences(name: string, link: Nullable<EntityLink>,): Lazy<PossibleOtherEntities> {
    if (link == null)
        return EMPTY_ENTITIES
    if (link === 'this')
        return lazy(() => Entities.CompanionEnum.get.getValueByName(name,).reference as unknown as PossibleOtherEntities,)
    return lazy(() => (link.split(' / ').map(splitLink => Entities.CompanionEnum.get.getValueByName(splitLink,).reference,) as unknown as PossibleOtherEntities),)
}

function getOrCreateGroupReference(references: readonly PossibleEnglishName[],): Lazy<readonly Entity[]> {
    if (references == null)
        return CommonLazy.EMPTY_ARRAY
    return lazy(() => references.map(it => Entities.CompanionEnum.get.getValueByName(it,).reference,),)
}


/**
 * Create the {@link Property property} from the {@link content}
 * with the games, game style, theme, time & limit
 *
 * @todo change every theme, time & style to have a nullable boolean instead of just boolean or nullable boolean
 */
function createProperty(content: Content,): Property {
    const isExclusiveToSMM1 = content.isInSuperMarioMaker1 && !content.isInSuperMarioMakerFor3DS && !content.isInSuperMarioMaker2
    const isInSMB = hasThisReferenced(content.inSMBGameStyle,)
    const isInSMB3 = hasThisReferenced(content.inSMB3GameStyle,)
    const isInSMW = hasThisReferenced(content.inSMWGameStyle,)
    const isInNSMBU = hasThisReferenced(content.inNSMBUGameStyle,)
    const isInSM3DW = isExclusiveToSMM1 ? nullOrHasThisReferenced(content.inSM3DWGameStyle) : hasThisReferenced(content.inSM3DWGameStyle,)
    const isExclusiveToSM3DW = !isInSMB && !isInSMB3 && !isInSMW && !isInNSMBU && isInSM3DW === true

    return new PropertyInstanceContainer(
        GamePropertyProvider.get.get(content.isInSuperMarioMaker1, content.isInSuperMarioMakerFor3DS, content.isInSuperMarioMaker2,),
        GameStylePropertyProvider.get.get(
            isInSMB,
            isInSMB3,
            isInSMW,
            isInNSMBU,
            isInSM3DW,
        ),
        ThemePropertyProvider.get.get(
            hasThisReferenced(content.inGroundTheme,),
            hasThisReferenced(content.inUndergroundTheme,),
            hasThisReferenced(content.inUnderwaterTheme,),
            nullOrHasThisReferenced(content.inDesertTheme,),
            nullOrHasThisReferenced(content.inSnowTheme,),
            nullOrHasThisReferenced(content.inSkyTheme,),
            nullOrHasThisReferenced(content.inForestTheme,),
            hasThisReferenced(content.inGhostHouseTheme,),
            hasThisReferenced(content.inAirshipTheme,),
            hasThisReferenced(content.inCastleTheme,),
        ),
        TimePropertyProvider.get.get(
            hasThisReferenced(content.inDayTheme,),
            isExclusiveToSMM1 || isExclusiveToSM3DW ? nullOrHasThisReferenced(content.inNightTheme,) : hasThisReferenced(content.inNightTheme,),
        ),
        getLimitPropertyFields(content,),
        getOrCreateInstrumentProperty(content,),
    )
}

/**
 * Create the {@link Property property} from the {@link content}
 * with the games, game style, theme, time & limit
 * applicable to only the {@link Games.SUPER_MARIO_MAKER_1 SMM1 game}
 */
function createPropertyInSmm1(content: Content,): Property {
    if (!isInProduction) {
        if (!content.isInSuperMarioMaker1)
            throw new TypeError('An exclusive SMM1 entity should always have the "isInSuperMarioMaker1" set to true.',)
        if (content.isInSuperMarioMakerFor3DS)
            throw new TypeError('An exclusive SMM1 entity should always have the "isInSuperMarioMakerFor3DS" set to false.',)
        if (content.isInSuperMarioMaker2)
            throw new TypeError('An exclusive SMM1 entity should always have the "isInSuperMarioMaker2" set to false.',)

        if (content.inSM3DWGameStyle != null)
            throw new TypeError('An exclusive SMM1 entity should never have a SM3DW reference.',)

        if (content.inGroundTheme == null)
            throw new TypeError('An exclusive SMM1 entity should always have a ground reference.',)
        if (content.inUndergroundTheme == null)
            throw new TypeError('An exclusive SMM1 entity should always have an underground reference.',)
        if (content.inUnderwaterTheme == null)
            throw new TypeError('An exclusive SMM1 entity should always have an underwater reference.',)
        if (content.inDesertTheme != null)
            throw new TypeError('An exclusive SMM1 entity should never have a desert reference.',)
        if (content.inSnowTheme != null)
            throw new TypeError('An exclusive SMM1 entity should never have a snow reference.',)
        if (content.inSkyTheme != null)
            throw new TypeError('An exclusive SMM1 entity should never have a sky reference.',)
        if (content.inForestTheme != null)
            throw new TypeError('An exclusive SMM1 entity should never have a forest reference.',)
        if (content.inGhostHouseTheme == null)
            throw new TypeError('An exclusive SMM1 entity should always have a ghost house reference.',)
        if (content.inAirshipTheme == null)
            throw new TypeError('An exclusive SMM1 entity should always have an airship reference.',)
        if (content.inCastleTheme == null)
            throw new TypeError('An exclusive SMM1 entity should always have a castle reference.',)

        if (content.inDayTheme == null)
            throw new TypeError('An exclusive SMM1 entity should always have a day reference.',)
        if (content.inNightTheme != null)
            throw new TypeError('An exclusive SMM1 entity should never have a night reference.',)

        if (content.editorLimit_SMM2 != null)
            throw new TypeError('An exclusive SMM1 entity should never have a SMM2 editor limit.',)
        if (content.whilePlaying_isInGEL != null)
            throw new TypeError('No exclusive SMM1 entity have a general limit.',)
        if (content.whilePlaying_isInGEL_isSuperGlobal != null)
            throw new TypeError('No exclusive SMM1 entity have a global general limit.',)
        if (content.whilePlaying_isInPL != null)
            throw new TypeError('No exclusive SMM1 entity have a power-up limit.',)
        if (content.whilePlaying_isInPJL != null)
            throw new TypeError('No exclusive SMM1 entity have a projectile limit.',)
        if (content.whilePlaying_isInObjectRenderedLimit != null)
            throw new TypeError('No exclusive SMM1 entity have an object rendered limit.',)
        if (content.whilePlaying_isInCollectedCoinLimit != null)
            throw new TypeError('No exclusive SMM1 entity have an collected coin limit.',)
        if (content.whilePlaying_otherLimit != null)
            throw new TypeError('No exclusive SMM1 entity have an other limit.',)
        if (content.whilePlaying_otherLimit_comment != null)
            throw new TypeError('No exclusive SMM1 entity have an other limit comment.',)
    }
    const editorLimit_SMM1And3DS = content.editorLimit_SMM1And3DS

    return new PropertyInstanceContainer(
        GamePropertyProvider.get.get(true, false, false,),
        GameStylePropertyProvider.get.get(
            hasThisReferenced(content.inSMBGameStyle,),
            hasThisReferenced(content.inSMB3GameStyle,),
            hasThisReferenced(content.inSMWGameStyle,),
            hasThisReferenced(content.inNSMBUGameStyle,),
            null,
        ),
        ThemePropertyProvider.get.get(true, true, true, null, null, null, null, true, true, true,),
        TimePropertyProvider.get.get(true, null,),
        LimitPropertyProvider.get.get(
            [[editorLimit_SMM1And3DS, null,], [null, null,], null, null, null, null, [null, null,],],
            GameStructureProvider.get.get(
                getLimitByNameOrAcronymOrNull(editorLimit_SMM1And3DS,),
                PropertyContainer.NOT_APPLICABLE_CONTAINER,
            ),
            [
                PropertyContainer.NOT_APPLICABLE_CONTAINER,
                PropertyContainer.NOT_APPLICABLE_CONTAINER,
            ],
            PropertyContainer.NOT_APPLICABLE_CONTAINER,
            PropertyContainer.NOT_APPLICABLE_CONTAINER,
            PropertyContainer.NOT_APPLICABLE_CONTAINER,
            PropertyContainer.NOT_APPLICABLE_CONTAINER,
            PropertyContainer.NOT_APPLICABLE_CONTAINER,
        ),
        getOrCreateInstrumentProperty(content,),
    )
}

/**
 * Create the {@link Property property} from the {@link content}
 * with the games, game style, theme, time & limit
 * applicable to only the {@link Games.SUPER_MARIO_MAKER_2 SMM2 game},
 * but not specifically exclusive to {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW}.
 */
function createPropertyInSmm2ButNotSm3dw(content: Content,): Property {
    if (!isInProduction) {
        if (content.isInSuperMarioMaker1)
            throw new TypeError('An exclusive SMM2 entity should always have the "isInSuperMarioMaker1" set to false.',)
        if (content.isInSuperMarioMakerFor3DS)
            throw new TypeError('An exclusive SMM2 entity should always have the "isInSuperMarioMakerFor3DS" set to false.',)
        if (!content.isInSuperMarioMaker2)
            throw new TypeError('An exclusive SMM2 entity should always have the "isInSuperMarioMaker2" set to true.',)

        if (content.editorLimit_SMM1And3DS != null)
            throw new TypeError('An exclusive SMM2 entity should never have a SMM1/SMM3DS editor limit.',)
    }

    const editorLimit_SMM2 = content.editorLimit_SMM2
    const isInGeneralLimit = content.whilePlaying_isInGEL
    const isInSuperGlobalGeneralLimit = content.whilePlaying_isInGEL_isSuperGlobal
    const isInPowerUpLimit = content.whilePlaying_isInPL
    const isInProjectileLimit = content.whilePlaying_isInPJL
    const isInRenderedObjectLimit = content.whilePlaying_isInObjectRenderedLimit
    const isInCollectedObjectLimit = content.whilePlaying_isInCollectedCoinLimit
    const isInOtherLimit = content.whilePlaying_otherLimit
    const isInOtherLimitComment = content.whilePlaying_otherLimit_comment

    return new PropertyInstanceContainer(
        GamePropertyProvider.get.get(content.isInSuperMarioMaker1, content.isInSuperMarioMakerFor3DS, content.isInSuperMarioMaker2,),
        GameStylePropertyProvider.get.get(
            hasThisReferenced(content.inSMBGameStyle,),
            hasThisReferenced(content.inSMB3GameStyle,),
            hasThisReferenced(content.inSMWGameStyle,),
            hasThisReferenced(content.inNSMBUGameStyle,),
            hasThisReferenced(content.inSM3DWGameStyle,),
        ),
        ThemePropertyProvider.get.get(
            hasThisReferenced(content.inGroundTheme,),
            hasThisReferenced(content.inUndergroundTheme,),
            hasThisReferenced(content.inUnderwaterTheme,),
            nullOrHasThisReferenced(content.inDesertTheme,),
            nullOrHasThisReferenced(content.inSnowTheme,),
            nullOrHasThisReferenced(content.inSkyTheme,),
            nullOrHasThisReferenced(content.inForestTheme,),
            hasThisReferenced(content.inGhostHouseTheme,),
            hasThisReferenced(content.inAirshipTheme,),
            hasThisReferenced(content.inCastleTheme,),
        ),
        TimePropertyProvider.get.get(
            hasThisReferenced(content.inDayTheme,),
            hasThisReferenced(content.inNightTheme,),
        ),
        LimitPropertyProvider.get.get(
            [[null, editorLimit_SMM2,], [isInGeneralLimit, isInSuperGlobalGeneralLimit,], isInPowerUpLimit, isInProjectileLimit, isInRenderedObjectLimit, isInCollectedObjectLimit, [isInOtherLimit, isInOtherLimitComment,],],
            GameStructureProvider.get.get(null, getLimitProperty(editorLimit_SMM2,),),
            [
                newBooleanWithCommentCommentContainer(isInGeneralLimit,),
                newBooleanWithCommentCommentContainer(isInSuperGlobalGeneralLimit,),
            ],
            newBooleanContainer(isInPowerUpLimit,),
            newBooleanWithCommentThatCanBeUnknownContainer(isInProjectileLimit,),
            newBooleanWithCommentCommentContainer(isInRenderedObjectLimit,),
            newBooleanContainer(isInCollectedObjectLimit,),
            getLimitPropertyWithComment(isInOtherLimit, isInOtherLimitComment,),
        ),
        getOrCreateInstrumentProperty(content,),
    )
}

/**
 * Create the {@link Property property} from the {@link content}
 * with the games, game style, theme, time & limit
 * applicable to only the {@link Games.SUPER_MARIO_MAKER_2 SMM2 game},
 * but exclusive to only {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW}.
 */
function createPropertyInSmm2InSm3dw(content: Content,): Property {
    if (!isInProduction) {
        if (content.isInSuperMarioMaker1)
            throw new TypeError('An exclusive SMM2 entity in SM3DW should always have the "isInSuperMarioMaker1" set to false.',)
        if (content.isInSuperMarioMakerFor3DS)
            throw new TypeError('An exclusive SMM2 entity in SM3DW should always have the "isInSuperMarioMakerFor3DS" set to false.',)
        if (!content.isInSuperMarioMaker2)
            throw new TypeError('An exclusive SMM2 entity in SM3DW should always have the "isInSuperMarioMaker2" set to true.',)

        if (content.inDayTheme == null)
            throw new TypeError('An exclusive SMM2 entity in SM3DW should always have a day reference.',)
        if (content.inNightTheme != null)
            throw new TypeError('An exclusive SMM2 entity in SM3DW should never have a night reference.',)

        if (content.editorLimit_SMM1And3DS != null)
            throw new TypeError('An exclusive SMM2 entity in SM3DW should never have a SMM1/SMM3DS editor limit.',)
    }

    const editorLimit_SMM2 = content.editorLimit_SMM2
    const isInGeneralLimit = content.whilePlaying_isInGEL
    const isInSuperGlobalGeneralLimit = content.whilePlaying_isInGEL_isSuperGlobal
    const isInPowerUpLimit = content.whilePlaying_isInPL
    const isInProjectileLimit = content.whilePlaying_isInPJL
    const isInRenderedObjectLimit = content.whilePlaying_isInObjectRenderedLimit
    const isInCollectedObjectLimit = content.whilePlaying_isInCollectedCoinLimit
    const isInOtherLimit = content.whilePlaying_otherLimit
    const isInOtherLimitComment = content.whilePlaying_otherLimit_comment

    return new PropertyInstanceContainer(
        GamePropertyProvider.get.get(content.isInSuperMarioMaker1, content.isInSuperMarioMakerFor3DS, content.isInSuperMarioMaker2,),
        GameStylePropertyProvider.get.get(false, false, false, false, true,),
        ThemePropertyProvider.get.get(
            hasThisReferenced(content.inGroundTheme,),
            hasThisReferenced(content.inUndergroundTheme,),
            hasThisReferenced(content.inUnderwaterTheme,),
            nullOrHasThisReferenced(content.inDesertTheme,),
            nullOrHasThisReferenced(content.inSnowTheme,),
            nullOrHasThisReferenced(content.inSkyTheme,),
            nullOrHasThisReferenced(content.inForestTheme,),
            hasThisReferenced(content.inGhostHouseTheme,),
            hasThisReferenced(content.inAirshipTheme,),
            hasThisReferenced(content.inCastleTheme,),
        ),
        TimePropertyProvider.get.get(true, null,),
        LimitPropertyProvider.get.get(
            [[null, editorLimit_SMM2,], [isInGeneralLimit, isInSuperGlobalGeneralLimit,], isInPowerUpLimit, isInProjectileLimit, isInRenderedObjectLimit, isInCollectedObjectLimit, [isInOtherLimit, isInOtherLimitComment,],],
            GameStructureProvider.get.get(null, getLimitProperty(editorLimit_SMM2,),),
            [
                newBooleanWithCommentCommentContainer(isInGeneralLimit,),
                newBooleanWithCommentCommentContainer(isInSuperGlobalGeneralLimit,),
            ],
            newBooleanContainer(isInPowerUpLimit,),
            newBooleanWithCommentThatCanBeUnknownContainer(isInProjectileLimit,),
            newBooleanWithCommentCommentContainer(isInRenderedObjectLimit,),
            newBooleanContainer(isInCollectedObjectLimit,),
            getLimitPropertyWithComment(isInOtherLimit, isInOtherLimitComment,),
        ),
        getOrCreateInstrumentProperty(content,),
    )
}


/**
 * Get the {@link LimitProperty limit property} from the {@link content}
 *
 * @param content the content to retrieve the limit fields
 */
function getLimitPropertyFields(content: Content,): LimitProperty {
    const editorLimit_SMM1And3DS = content.editorLimit_SMM1And3DS
    const editorLimit_SMM2 = content.editorLimit_SMM2
    const isInGeneralLimit = content.whilePlaying_isInGEL
    const isInSuperGlobalGeneralLimit = content.whilePlaying_isInGEL_isSuperGlobal
    const isInPowerUpLimit = content.whilePlaying_isInPL
    const isInProjectileLimit = content.whilePlaying_isInPJL
    const isInRenderedObjectLimit = content.whilePlaying_isInObjectRenderedLimit
    const isInCollectedObjectLimit = content.whilePlaying_isInCollectedCoinLimit
    const isInOtherLimit = content.whilePlaying_otherLimit
    const isInOtherLimitComment = content.whilePlaying_otherLimit_comment

    return LimitPropertyProvider.get.get(
        [[editorLimit_SMM1And3DS, editorLimit_SMM2,], [isInGeneralLimit, isInSuperGlobalGeneralLimit,], isInPowerUpLimit, isInProjectileLimit, isInRenderedObjectLimit, isInCollectedObjectLimit, [isInOtherLimit, isInOtherLimitComment,],],
        GameStructureProvider.get.get(
            getLimitByNameOrAcronymOrNull(editorLimit_SMM1And3DS,),
            getLimitProperty(editorLimit_SMM2,),
        ),
        [
            newBooleanWithCommentCommentContainer(isInGeneralLimit,),
            newBooleanWithCommentCommentContainer(isInSuperGlobalGeneralLimit,),
        ],
        newBooleanContainer(isInPowerUpLimit,),
        newBooleanWithCommentThatCanBeUnknownContainer(isInProjectileLimit,),
        newBooleanWithCommentCommentContainer(isInRenderedObjectLimit,),
        newBooleanContainer(isInCollectedObjectLimit,),
        getLimitPropertyWithComment(isInOtherLimit, isInOtherLimitComment,),
    )
}

/**
 * Get the instrument properties of an {@link Entity entity}
 *
 * @param content the content to retrieve the instrument fields
 * @returns InstrumentProperty An object holder containing the properties for the instrument part of an {@link Entity entity}
 * @see InstrumentPropertyProvider
 * @see EmptyInstrumentProperty
 */
function getOrCreateInstrumentProperty(content: Content,): InstrumentProperty {
    const instrument = content.instrument
    const canMakeASoundOutOfAMusicBlock = content.canMakeASoundOutOfAMusicBlock

    if (instrument == null)
        return EmptyInstrumentProperty.get
    return InstrumentPropertyProvider.get.get(
        [instrument, canMakeASoundOutOfAMusicBlock,],
        lazy(() => {
            const singleInstrument = Instruments.CompanionEnum.get.getValueByName(instrument,)
            if (singleInstrument != null)
                return [singleInstrument.reference,]
            return Instruments.CompanionEnum.get.values.filter(it => instrument.includes(it.englishName,),)
                .map(it => it.reference,)
                .toArray()
        },),
        newBooleanWithCommentCommentContainer(canMakeASoundOutOfAMusicBlock,),
    )
}


/**
 * Create every entity references possible applicable to a single entity.
 * It gets the single references (game, game style, theme & time),
 * but it can also get every reference from the {@link EntityTemplate template}.
 */
function createReferences(content: Content, referenceLinks: ReferenceLinks,) {
    const name = (content.english ?? content.americanEnglish) as PossibleEnglishName

    let everyGameStyleReferences: Lazy<readonly Entity[]>
    let everyThemeReferences: Lazy<readonly Entity[]>
    let everyTimeReferences: Lazy<readonly Entity[]>
    let everyReferences: Lazy<readonly Entity[]>
    if (referenceLinks.hasAnyReferences(name,)) {
        everyGameStyleReferences = getOrCreateGroupReference(referenceLinks.getGameStyleReferenceLinks(name,),)
        everyThemeReferences = getOrCreateGroupReference(referenceLinks.getThemeReferenceLinks(name,),)
        everyTimeReferences = getOrCreateGroupReference(referenceLinks.getTimeReferenceLinks(name,),)
        everyReferences = getOrCreateGroupReference(referenceLinks.getEveryReferenceLinks(name,),)
    } else
        everyGameStyleReferences = everyThemeReferences = everyTimeReferences = everyReferences = CommonLazy.EMPTY_ARRAY

    return new EntityReferencesContainer(
        getOtherEntityReferences(name, content.inSMBGameStyle,),
        getOtherEntityReferences(name, content.inSMB3GameStyle,),
        getOtherEntityReferences(name, content.inSMWGameStyle,),
        getOtherEntityReferences(name, content.inNSMBUGameStyle,),
        getOtherEntityReferences(name, content.inSM3DWGameStyle,),

        getOtherEntityReferences(name, content.inGroundTheme,),
        getOtherEntityReferences(name, content.inUndergroundTheme,),
        getOtherEntityReferences(name, content.inUnderwaterTheme,),
        getOtherEntityReferences(name, content.inDesertTheme,),
        getOtherEntityReferences(name, content.inSnowTheme,),
        getOtherEntityReferences(name, content.inSkyTheme,),
        getOtherEntityReferences(name, content.inForestTheme,),
        getOtherEntityReferences(name, content.inGhostHouseTheme,),
        getOtherEntityReferences(name, content.inAirshipTheme,),
        getOtherEntityReferences(name, content.inCastleTheme,),

        getOtherEntityReferences(name, content.inDayTheme,),
        getOtherEntityReferences(name, content.inNightTheme,),

        everyGameStyleReferences, everyThemeReferences, everyTimeReferences, everyReferences,
    )
}

//endregion -------------------- Create reference --------------------
