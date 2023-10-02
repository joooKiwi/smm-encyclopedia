import file from 'resources/compiled/Entity.json'

import type {LanguageContent}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        from 'core/_template/LanguageContent'
import type {PossibleAcronym as PossibleAcronym_Behaviour}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           from 'core/behaviour/EntityBehaviours.types'
import type {CanRespawnOnlineOutOfABlockType, CanRespawnOnlineType, CanRespawnType, PossibleBehaviourType}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           from 'core/behaviour/loader.types'
import type {CanMakeASoundOutOfAMusicBlock}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          from 'core/entity/properties/instrument/loader.types'
import type {CollectedCoinLimitType, EditorLimitType_SMM1And3DS, EditorLimitType_SMM2, GeneralEntityLimitType, GeneralGlobalEntityLimitType, LimitAmountType, OffscreenDespawningDownwardVerticalRangeLimitType, OffscreenDespawningHorizontalRangeLimitType, OffscreenDespawningUpwardVerticalRangeLimitType, OffscreenSpawningAndDespawningReferencePoint, OffscreenSpawningDownwardVerticalRangeLimitType, OffscreenSpawningHorizontalRangeLimitType, OffscreenSpawningUpwardVerticalRangeLimitType, OtherLimitCommentType, OtherLimitType, PowerUpLimitType, ProjectileEntityLimitType, RenderedObjectLimitType}                                                                                                                                                                                                                                                                                                                 from 'core/entity/properties/limit/loader.types'
import type {Entity}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 from 'core/entity/Entity'
import type {EntityLink}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             from 'core/entity/loader.types'
import type {DimensionTemplate, EntityNameTemplate, EntityTemplate, SimpleDimensionTemplate, SimpleDimensionTemplateDifferentInSM3DW}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                from 'core/entity/Entity.template'
import type {PossibleCanBeInAParachute, PossibleCanHaveWings, PossibleHasAMushroomVariant}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           from 'core/entity/properties/basic/BasicProperty'
import type {PossibleEnglishName}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    from 'core/entity/Entities.types'
import type {PossibleEnglishName as PossibleEnglishName_Category}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    from 'core/entityCategory/EntityCategories.types'
import type {PossibleEnglishName as PossibleEnglishName_Limit}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       from 'core/entityLimit/EntityLimits.types'
import type {CanBeAffectedByATwister, CanBeBrokenOrKilledByABobOmb, CanBeFiredOutOfABulletLauncher, CanBePutInABlock, CanBePutInAClownCar, CanBePutInALakituCloud, CanBePutInASwingingClaw, CanBePutInATree, CanBePutOnATrack, CanBeSpawnedByMagikoopa, CanBeSpawnedByWingedMagikoopa, CanBeStacked, CanBeThrownByALakitu, CanBeThrownByBowserInClownCar, CanBeThrownByBowserJr, CanBeThrownByBowserJrInClownCar, CanBeTransformedByMagikoopa, CanContainOrSpawnAKey, CanGoThroughWalls, CanGoThroughWallsInSM3DW, CanIgniteABobOmb, CanSpawnOutOfAPipe, CanSurviveInTheLavaOrThePoison, HasALightSourceEmittedInSMB, HasAReferenceInMarioMaker, IsAffectedDirectlyByAnOnOrOffState, IsGlobalGroundOrGlobal, PossibleDimension, PossibleDimensionDifferentInSM3DW, PossibleEntityType, PossibleFirstAppearanceInMarioMaker, PossibleLightSource, PossibleMaximumDimension, PossibleMaximumDimensionDifferentInSM3DW, PossibleWeight} from 'core/entityTypes'
import type {GameContentFromAllGames,}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               from 'core/game/Loader.types'
import type {SimpleGameStyleTemplate}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                from 'core/gameStyle/SimpleGameStyle.template'
import type {PossibleInstrument}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     from 'core/instrument/loader.types'
import type {PossibleName as PossibleMarioMakerVersion}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              from 'core/version/Versions.types'
import type {Loader}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 from 'util/loader/Loader'

import {isInProduction}     from 'variables'
import * as TemplateMethods from 'core/_template/templateMethods'
import {EntityCreator}      from 'core/entity/Entity.creator'
import {ReferencesToWatch}  from 'core/entity/ReferencesToWatch'
import {EMPTY_ARRAY}        from 'util/emptyVariables'

/** @singleton */
export class EntityLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, Entity>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EntityLoader

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, Entity>

    public load(): ReadonlyMap<PossibleEnglishName, Entity> {
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleEnglishName, Entity>()
        const templateReferences = new Map<PossibleEnglishName, EntityTemplate>()
        const referencesToWatch = new ReferencesToWatch(templateReferences,)
        const size = file.length
        const namesAndTemplates = new Array<readonly [PossibleEnglishName, EntityTemplate,]>(size,)
        let index = size
        while (index-- > 0) {
            const template = new TemplateCreator(file[index] as Content).create()
            const englishName = (template.name.english.simple ?? template.name.english.american) as PossibleEnglishName

            templateReferences.set(englishName, template,)
            referencesToWatch.addSubReference(template)
            namesAndTemplates[index] = [englishName, template,]
        }

        referencesToWatch.setReferences()

        index = size
        while (index-- > 0)
            references.set(namesAndTemplates[index][0], new EntityCreator(namesAndTemplates[index][1],).create(),)

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

    readonly whilePlaying_isInGEL: GeneralEntityLimitType
    readonly whilePlaying_isInGEL_isSuperGlobal: GeneralGlobalEntityLimitType

    readonly whilePlaying_isInPL: PowerUpLimitType

    readonly whilePlaying_isInPJL: ProjectileEntityLimitType

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

/** @todo Transform into a functional approach */
class TemplateCreator {

    static readonly SLASH_SEPARATOR = ' / '
    static readonly LINK_AS_THIS = 'this'
    static readonly EMPTY_SIMPLE_DIMENSION_TEMPLATE: SimpleDimensionTemplate<null, null> = {value: null, maximum: null,}
    static readonly EMPTY_DIMENSION_TEMPLATE: DimensionTemplate = {
        value: null,
        maximum: null,
        differentInSM3DW: this.EMPTY_SIMPLE_DIMENSION_TEMPLATE,
    }

    readonly #content

    public constructor(content: Content,) {
        this.#content = content
    }

    private get __content(): Content {
        return this.#content
    }

    public create(): EntityTemplate {
        const content = this.__content,
            [
                isInSuperMarioMaker1, isInSuperMarioMaker2,
                dayLink, nightLink,
                groundLink, undergroundLink, underwaterLink, desertLink, snowLink, skyLink, forestLink, ghostHouseLink, airshipLink, castleLink,
                superMarioBrosLink, superMarioBros3Link, superMarioWorldLink, newSuperMarioBrosULink, superMario3DWorldLink,
            ] = [
                content.isInSuperMarioMaker1, content.isInSuperMarioMaker2,
                content.inDayTheme, content.inNightTheme,
                content.inGroundTheme, content.inUndergroundTheme, content.inUnderwaterTheme, content.inDesertTheme, content.inSnowTheme, content.inSkyTheme, content.inForestTheme, content.inGhostHouseTheme, content.inAirshipTheme, content.inCastleTheme,
                content.inSMBGameStyle, content.inSMB3GameStyle, content.inSMWGameStyle, content.inNSMBUGameStyle, content.inSM3DWGameStyle,
            ],
            isExclusiveToSuperMarioMaker1 = isInSuperMarioMaker1 && !isInSuperMarioMaker2,
            gameStyleTemplate: SimpleGameStyleTemplate = {
                superMarioBros: TemplateCreator.hasThisReferenced(superMarioBrosLink),
                superMarioBros3: TemplateCreator.hasThisReferenced(superMarioBros3Link),
                superMarioWorld: TemplateCreator.hasThisReferenced(superMarioWorldLink),
                newSuperMarioBrosU: TemplateCreator.hasThisReferenced(newSuperMarioBrosULink),
                superMario3DWorld: isExclusiveToSuperMarioMaker1 ? TemplateCreator.hasThisReferencedOrNull(superMario3DWorldLink) : TemplateCreator.hasThisReferenced(superMario3DWorldLink),
            },
            isExclusiveToSuperMario3DWorld = !gameStyleTemplate.superMarioBros && !gameStyleTemplate.superMarioBros3 && !gameStyleTemplate.superMarioWorld && !gameStyleTemplate.newSuperMarioBrosU && gameStyleTemplate.superMario3DWorld === true

        return {
            properties: {
                entityType: content.entityType,

                firstAppearance: {
                    game: content.firstAppearanceInMarioMaker,
                    version: content.firstAppearanceInMarioMaker_version,
                },

                //region ---------- Basic properties ----------

                isIn: {//TODO change every theme, time & style to have a nullable boolean instead of just boolean or nullable boolean
                    game: TemplateMethods.createGameTemplateFromAllGames(content,),
                    style: gameStyleTemplate,
                    theme: {
                        ground: TemplateCreator.hasThisReferenced(groundLink),
                        underground: TemplateCreator.hasThisReferenced(undergroundLink),
                        underwater: TemplateCreator.hasThisReferenced(underwaterLink),
                        desert: TemplateCreator.hasThisReferencedOrNull(desertLink),
                        snow: TemplateCreator.hasThisReferencedOrNull(snowLink),
                        sky: TemplateCreator.hasThisReferencedOrNull(skyLink),
                        forest: TemplateCreator.hasThisReferencedOrNull(forestLink),
                        ghostHouse: TemplateCreator.hasThisReferenced(ghostHouseLink),
                        airship: TemplateCreator.hasThisReferenced(airshipLink),
                        castle: TemplateCreator.hasThisReferenced(castleLink),
                    },
                    time: {
                        day: TemplateCreator.hasThisReferenced(dayLink),
                        night: isExclusiveToSuperMarioMaker1 || isExclusiveToSuperMario3DWorld ? TemplateCreator.hasThisReferencedOrNull(nightLink) : TemplateCreator.hasThisReferenced(nightLink),
                    },
                },

                basic: {
                    hasAMushroomVariant: content.hasAMushroomVariant,
                    canBeInAParachute: content.canBeInAParachute,
                    canHaveWings: content.canHaveWings,
                },

                //endregion ---------- Basic properties ----------
                //region ---------- Specific properties ----------

                canContainOrSpawnAKey: content.canContainOrSpawnAKey,

                isAffectedDirectlyByAnOnOrOffState: content.isAffectedDirectlyByAnOnOrOffState,

                canBePutOnATrack: {
                    value: content.canBePutOnATrack,
                    editorLimit: content.editorLimit_canBePutOnATrack,
                    whilePlaying: content.whilePlaying_canBePutOnATrack,
                },

                canSpawnOutOfAPipe: content.canSpawnOutOfAPipe,

                canBePutInASwingingClaw: content.canBePutInASwingingClaw,

                canBeThrownByALakitu: content.canBeThrownByALakitu,
                canBePutInALakituCloud: content.canBePutInALakituCloud,

                canBePutInAClownCar: content.canBePutInAClownCar,

                canBeFiredOutOfABulletLauncher: content.canBeFiredOutOfABulletLauncher,

                canBePutInABlock: content.canBePutInABlock,

                canBePutInATree: content.canBePutInATree,

                weight: content.weight,

                lightSourceEmitted: {
                    value: content.lightSourceEmitted,
                    isInSMB: content.lightSourceEmitted_isInSMB,
                },

                canSurviveInTheLavaOrThePoison: content.canSurviveInTheLavaOrThePoison,

                bobOmb: {
                    canIgnite: content.canIgniteABobOmb,
                    canBeBrokenOrKilled: content.canBeBrokenOrKilledByABobOmb,
                },

                canBeAffectedByATwister: content.canBeAffectedByATwister,

                canGoThroughWalls: {
                    value: content.canGoThroughWalls,
                    inSM3DW: content.canGoThroughWalls_SM3DW,
                },

                canBeStacked: content.canBeStacked,

                isGlobalGroundOrGlobal: content.isGlobalGroundOrGlobal,

                sound: {
                    instrument: content.instrument,
                    canMakeASoundOutOfAMusicBlock: content.canMakeASoundOutOfAMusicBlock,
                },

                //endregion ---------- Specific properties ----------
                //region -------------------- Bowser / Bowser Jr. / Magikoopa properties --------------------

                bowserBowserJrMagikoopa: {
                    bowser: {
                        clownCar: content.canBeThrownByBowserInClownCar,
                    },
                    bowserJr: {
                        value: content.canBeThrownByBowserJr,
                        clownCar: content.canBeThrownByBowserJrInClownCar,
                    },
                    magikoopa: {
                        transformed: content.canBeTransformedByMagikoopa,
                        spawn: {
                            value: content.canBeSpawnedByMagikoopa,
                            wing: content.canBeSpawnedByWingedMagikoopa,
                        },
                    },
                },

                //endregion -------------------- Bowser / Bowser Jr. / Magikoopa properties --------------------
                limits: {
                    amount: content.limitAmount,
                    editor: {
                        '1And3DS': content.editorLimit_SMM1And3DS,
                        2: content.editorLimit_SMM2,
                    },
                    whilePlaying: {
                        isInGEL: {
                            value: content.whilePlaying_isInGEL,
                            isSuperGlobal: content.whilePlaying_isInGEL_isSuperGlobal,
                        },
                        isInPL: content.whilePlaying_isInPL,
                        isInPJL: content.whilePlaying_isInPJL,
                        isInRenderedObjectLimit: content.whilePlaying_isInObjectRenderedLimit,
                        isInCollectedCoinLimit: content.whilePlaying_isInCollectedCoinLimit,
                        otherLimit: {
                            value: content.whilePlaying_otherLimit,
                            comment: content.whilePlaying_otherLimit_comment,
                        },
                    },
                },
                canRespawn: {
                    value: content.canRespawn,
                    online: {
                        value: content.canRespawn_online,
                        insideABlock: content.canRespawn_online_inABlock,
                    }
                },
                behaviour: {
                    solo: TemplateCreator.splitBehaviour(content.behaviour_solo,),
                    localCoop: TemplateCreator.splitBehaviour(content.behaviour_localCoop,),
                    online: {
                        coop: TemplateCreator.splitBehaviour(content.behaviour_onlineCoop,),
                        versus: TemplateCreator.splitBehaviour(content.behaviour_onlineVS,),
                    },
                },
                offscreenRange: {
                    referencePoint: content.offscreenSpawningAndDespawningReferencePoint,
                    spawning: {
                        horizontal: content.offscreenSpawningHorizontalRange,
                        vertical: {
                            upward: content.offscreenSpawningUpwardVerticalRange,
                            downward: content.offscreenSpawningDownwardVerticalRange,
                        },
                    },
                    despawning: {
                        horizontal: content.offscreenDespawningHorizontalRange,
                        vertical: {
                            upward: content.offscreenDespawningUpwardVerticalRange,
                            downward: content.offscreenDespawningDownwardVerticalRange,
                        },
                    },
                },
                dimension: TemplateCreator.createDimensionTemplate(content,),
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
            categoryInTheEditor: content.categoryInTheEditor,
            name: this.createNameTemplate(content),
        }
    }

    /**
     * Create an {@link EntityNameTemplate} with the usage of {@link TemplateMethods.createNameTemplate}
     *
     * @param content The template
     */
    createNameTemplate(content: Content,): EntityNameTemplate {
        return {hasAReferenceInMarioMaker: content.hasANameReferencedInMarioMaker, ...TemplateMethods.createNameTemplate(content,),}
    }

    /**
     * Tell if an {@link EntityLink} has {@link LINK_AS_THIS "this"}
     *
     * @param link The {@link EntityLink} to test
     * @note This method should not be called by the {@link create} method
     */
    static #hasThisReferenced(link: EntityLink,) {
        return link.includes(this.LINK_AS_THIS)
    }

    /**
     * Tell if a {@link Nullable} {@link EntityLink} has {@link LINK_AS_THIS "this"}
     *
     * @param link The {@link Nullable} {@link EntityLink} to test
     */
    static hasThisReferenced(link: Nullable<EntityLink>,) {
        return link != null && this.#hasThisReferenced(link)
    }

    /**
     * Tell if the {@link Nullable} {@link EntityLink} has {@link LINK_AS_THIS "this"}.
     * And if the {@link EntityLink} is <b>null</b>, then <b>null</b> is returned
     *
     * @param link The {@link EntityLink} to test
     */
    static hasThisReferencedOrNull(link: Nullable<EntityLink>,) {
        return link == null ? null : this.#hasThisReferenced(link)
    }


    /**
     * Separate the {@link PossibleBehaviourType} into multiple {@link PossibleAcronym_Behaviour behaviour acronym}
     * or {@link UnknownCharacter '?'}
     *
     * @param behaviour The {@link PossibleBehaviourType} to split
     */
    static splitBehaviour(behaviour: PossibleBehaviourType,): readonly PossibleAcronym_Behaviour[]
    static splitBehaviour(behaviour: PossibleBehaviourType,): readonly string[] {
        return behaviour?.split(this.SLASH_SEPARATOR) ?? EMPTY_ARRAY
    }


    /**
     * Create a {@link DimensionTemplate} or an empty one if every value are <b>null</b>
     *
     * @param content The template
     * @memoryOptimization
     */
    static createDimensionTemplate({dimension: value, dimension_maximum: maximumValue, dimension_differentSM3DW: valueSM3DW, dimension_maximum_differentSM3DW: maximumValueSM3DW,}: Content,): DimensionTemplate {
        return value == null && maximumValue == null && valueSM3DW == null && maximumValueSM3DW == null
            ? this.EMPTY_DIMENSION_TEMPLATE
            : {
                value: value,
                maximum: maximumValue,
                differentInSM3DW: this.createSM3DWDifferentDimensionTemplate(valueSM3DW, maximumValueSM3DW,),
            }
    }

    static createSM3DWDifferentDimensionTemplate(value: PossibleDimensionDifferentInSM3DW, maximumValue: PossibleMaximumDimensionDifferentInSM3DW,): SimpleDimensionTemplateDifferentInSM3DW {
        return value == null && maximumValue == null
            ? this.EMPTY_SIMPLE_DIMENSION_TEMPLATE
            : {value: value, maximum: maximumValue,}
    }

}
