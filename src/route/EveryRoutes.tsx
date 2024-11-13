import type {Singleton}                             from '@joookiwi/enumerable'
import type {Array, MutableArray, Nullable, NullOr} from '@joookiwi/type'
import {findFirstOrNullByArray, forEachByArray}     from '@joookiwi/collection'
import {CompanionEnum, Enum}                        from '@joookiwi/enumerable'
import {lazy}                                       from 'react'

import type {ClassUsedInRoute}                                                                                                                                                                  from 'route/ClassUsedInRoute'
import type {EveryPossibleRoutes, GameRouteCallback, Names, NothingRouteCallback, Ordinals, PossibleGamePath, PossibleGameStylePath, PossibleRouteName, PossibleViewDisplayPath, RouteCallback} from 'route/EveryRoutes.types'
import type {CompanionEnumDeclaration_EveryRoutes}                                                                                                                                              from 'route/EveryRoutes.companionEnumDeclaration'

import {CourseTagTypes}        from 'app/property/CourseTagTypes'
import {LimitTypes}            from 'app/property/LimitTypes'
import {PowerUpPriorityTypes}  from 'app/property/PowerUpPriorityTypes'
import {ThemeTypes}            from 'app/property/ThemeTypes'
import {ViewDisplays}          from 'app/withInterpreter/ViewDisplays'
import {GamePossibility}       from 'core/game/Game.possibility'
import {Games}                 from 'core/game/Games'
import {GameStylePossibility}  from 'core/gameStyle/GameStyle.possibility'
import {GameStyles}            from 'core/gameStyle/GameStyles'
import {ProjectLanguages}      from 'lang/ProjectLanguages'
import {SimpleRoute}           from 'route/SimpleRoute'
import {Empty}                 from 'util/emptyVariables'
import {GameCollection}        from 'util/collection/GameCollection'
import {GameStyleCollection}   from 'util/collection/GameStyleCollection'
import {ViewDisplayCollection} from 'util/collection/ViewDisplayCollection'

import EMPTY_ARRAY =                       Empty.EMPTY_ARRAY
import EMPTY_STRING =                      Empty.EMPTY_STRING
import SMM1_ONLY_ARRAY =                   GamePossibility.SMM1_ONLY
import SMM1_AND_3DS_ARRAY =                GamePossibility.SMM1_AND_3DS
import SMM1_AND_2_ARRAY =                  GamePossibility.SMM1_AND_2
import SMM3DS_ONLY_ARRAY =                 GamePossibility.SMM3DS_ONLY
import SMM3DS_AND_2_ARRAY =                GamePossibility.SMM3DS_AND_2
import SMM2_ONLY_ARRAY =                   GamePossibility.SMM2_ONLY
import ALL_GAMES_ARRAY =                   GamePossibility.ALL_GAMES
import SMM1 =                              Games.SMM1
import SMM2 =                              Games.SMM2
import ALL_GAME_STYLES =                   GameStylePossibility.ALL_GAME_STYLES
import NOT_NSMBU =                         GameStylePossibility.NOT_NSMBU
import NOT_SMB =                           GameStylePossibility.NOT_SMB
import NOT_SMB3 =                          GameStylePossibility.NOT_SMB3
import NOT_SMW =                           GameStylePossibility.NOT_SMW
import NOT_SM3DW =                         GameStylePossibility.NOT_SM3DW
import NSMBU_AND_SM3DW =                   GameStylePossibility.NSMBU_AND_SM3DW
import NSMBU_ONLY =                        GameStylePossibility.NSMBU_ONLY
import SMB_AND_NSMBU =                     GameStylePossibility.SMB_AND_NSMBU
import SMB_AND_NSMBU_AND_SM3DW =           GameStylePossibility.SMB_AND_NSMBU_AND_SM3DW
import SMB_AND_SMB3 =                      GameStylePossibility.SMB_AND_SMB3
import SMB_AND_SMB3_AND_NSMBU =            GameStylePossibility.SMB_AND_SMB3_AND_NSMBU
import SMB_AND_SMB3_AND_SMW =              GameStylePossibility.SMB_AND_SMB3_AND_SMW
import SMB_AND_SMB3_AND_SM3DW =            GameStylePossibility.SMB_AND_SMB3_AND_SM3DW
import SMB_AND_SMW =                       GameStylePossibility.SMB_AND_SMW
import SMB_AND_SMW_AND_NSMBU =             GameStylePossibility.SMB_AND_SMW_AND_NSMBU
import SMB_AND_SMW_AND_SM3DW =             GameStylePossibility.SMB_AND_SMW_AND_SM3DW
import SMB_AND_SM3DW =                     GameStylePossibility.SMB_AND_SM3DW
import SMB_ONLY =                          GameStylePossibility.SMB_ONLY
import SMB3_AND_NSMBU =                    GameStylePossibility.SMB3_AND_NSMBU
import SMB3_AND_NSMBU_AND_SM3DW =          GameStylePossibility.SMB3_AND_NSMBU_AND_SM3DW
import SMB3_AND_SMW =                      GameStylePossibility.SMB3_AND_SMW
import SMB3_AND_SMW_AND_NSMBU =            GameStylePossibility.SMB3_AND_SMW_AND_NSMBU
import SMB3_AND_SMW_AND_SM3DW =            GameStylePossibility.SMB3_AND_SMW_AND_SM3DW
import SMB3_AND_SM3DW =                    GameStylePossibility.SMB3_AND_SM3DW
import SMB3_ONLY =                         GameStylePossibility.SMB3_ONLY
import SMW_AND_NSMBU =                     GameStylePossibility.SMW_AND_NSMBU
import SMW_AND_NSMBU_AND_SM3DW =           GameStylePossibility.SMW_AND_NSMBU_AND_SM3DW
import SMW_AND_SM3DW =                     GameStylePossibility.SMW_AND_SM3DW
import SMW_ONLY =                          GameStylePossibility.SMW_ONLY
import SM3DW_ONLY =                        GameStylePossibility.SM3DW_ONLY

//region -------------------- Dynamic imports --------------------

const AboutApp =                     lazy(() => import('app/AboutApp'))
const PredefinedMessageApp =         lazy(() => import('app/PredefinedMessageApp'))
const CharacterNameApp =             lazy(() => import('app/CharacterNameApp'))
const CourseTagApp =                 lazy(() => import('app/CourseTagApp'))
const EditorVoiceApp =               lazy(() => import('app/EditorVoiceApp'))
const EntityApp =                    lazy(() => import('app/EntityApp'))
const EntityCategoryApp =            lazy(() => import('app/EntityCategoryApp'))
const EntityGroupApp =               lazy(() => import('app/EntityGroupApp'))
const OfficialCourseApp =            lazy(() => import('app/OfficialCourseApp'))
const GameStyleApp =                 lazy(() => import('app/GameStyleApp'))
const GameReferenceApp =             lazy(() => import('app/GameReferenceApp'))
const InstrumentApp =                lazy(() => import('app/InstrumentApp'))
const LimitApp =                     lazy(() => import('app/LimitApp'))
const MiiCostumeApp =                lazy(() => import('app/MiiCostumeApp'))
const MiiCostumeCategoryApp =        lazy(() => import('app/MiiCostumeCategoryApp'))
const MysteryMushroomApp =           lazy(() => import('app/MysteryMushroomApp'))
const PowerUpRideAndHatPriorityApp = lazy(() => import('app/PowerUpRideAndHatPriorityApp'))
const SoundEffectCategoryApp =       lazy(() => import('app/SoundEffectCategoryApp'))
const SoundEffectApp =               lazy(() => import('app/SoundEffectApp'))
const ThemeApp =                     lazy(() => import('app/ThemeApp'))
const SampleCourseApp =              lazy(() => import('app/SampleCourseApp'))
const MedalApp =                     lazy(() => import('app/MedalApp'))
const MusicApp =                     lazy(() => import('app/MusicApp'))
const HomeApp =                      lazy(() => import('app/HomeApp'))
const SourcesApp =                   lazy(() => import('app/SourcesApp'))
const RouteApp =                     lazy(() => import('app/RouteApp'))

//endregion -------------------- Dynamic imports --------------------
//region -------------------- Helper constants --------------------

const NO_VIEW_DISPLAY = new ViewDisplayCollection(EMPTY_ARRAY,)
const ALL_VIEW_DISPLAY = new ViewDisplayCollection(ViewDisplays.CompanionEnum.get.values,)

const NO_GAMES_COLLECTION = new GameCollection(EMPTY_ARRAY,)
const SMM1_GAMES_COLLECTION = new GameCollection(SMM1_ONLY_ARRAY,)
// const SMM3DS_GAMES_COLLECTION = new GameCollection(SMM3DS_ONLY_ARRAY,)
const SMM2_GAMES_COLLECTION = new GameCollection(SMM2_ONLY_ARRAY,)
const ALL_GAMES_COLLECTION = new GameCollection(ALL_GAMES_ARRAY,)

const NO_GAME_STYLES_COLLECTION = new GameStyleCollection(EMPTY_ARRAY,)
const ALL_GAME_STYLES_COLLECTION = new GameStyleCollection(ALL_GAME_STYLES,)

//region -------------------- Possibility group constants --------------------

/** Every {@link GameStylePossibility} applicable to the {@link SMM2} game group */
const gameStylePossibilitiesWithSmm2 = [
    [ALL_GAME_STYLES,          'GameStyle=all',       'game-style-all',],
    [SMB_ONLY,                 'GameStyle=1',         'game-style-1',],
    [SMB3_ONLY,                'GameStyle=3',         'game-style-3',],
    [SMW_ONLY,                 'GameStyle=W',         'game-style-w',],
    [NSMBU_ONLY,               'GameStyle=U',         'game-style-u',],
    [SM3DW_ONLY,               'GameStyle=3DW',       'game-style-3dw',],
    [SMB_AND_SMB3,             'GameStyle=1&3',       'game-style-1,3',],
    [SMB_AND_SMW,              'GameStyle=1&W',       'game-style-1,w',],
    [SMB_AND_NSMBU,            'GameStyle=1&U',       'game-style-1,u',],
    [SMB_AND_SM3DW,            'GameStyle=1&3DW',     'game-style-1,3dw',],
    [SMB3_AND_SMW,             'GameStyle=3&W',       'game-style-3,w',],
    [SMB3_AND_NSMBU,           'GameStyle=3&U',       'game-style-3,u',],
    [SMB3_AND_SM3DW,           'GameStyle=3&3DW',     'game-style-3,3dw',],
    [SMW_AND_NSMBU,            'GameStyle=W&U',       'game-style-w,u',],
    [SMW_AND_SM3DW,            'GameStyle=W&3DW',     'game-style-w,3dw',],
    [NSMBU_AND_SM3DW,          'GameStyle=U&3DW',     'game-style-u,3dw',],
    [SMB_AND_SMB3_AND_SMW,     'GameStyle=1&3&W',     'game-style-1,3,w',],
    [SMB_AND_SMB3_AND_NSMBU,   'GameStyle=1&3&U',     'game-style-1,3,u',],
    [SMB_AND_SMB3_AND_SM3DW,   'GameStyle=1&3&3DW',   'game-style-1,3,3dw',],
    [SMB_AND_SMW_AND_NSMBU,    'GameStyle=1&W&U',     'game-style-1,w,u',],
    [SMB_AND_SMW_AND_SM3DW,    'GameStyle=1&W&3DW',   'game-style-1,w,3dw',],
    [SMB_AND_NSMBU_AND_SM3DW,  'GameStyle=1&U&3DW',   'game-style-1,u,3dw',],
    [SMB3_AND_SMW_AND_NSMBU,   'GameStyle=3&W&U',     'game-style-3,w,u',],
    [SMB3_AND_SMW_AND_SM3DW,   'GameStyle=3&W&3DW',   'game-style-3,w,3dw',],
    [SMB3_AND_NSMBU_AND_SM3DW, 'GameStyle=3&U&3DW',   'game-style-3,u,3dw',],
    [SMW_AND_NSMBU_AND_SM3DW,  'GameStyle=W&U&3DW',   'game-style-w,u,3dw',],
    [NOT_SM3DW,                'GameStyle=1&3&W&U',   'game-style-1,3,w,u',],
    [NOT_NSMBU,                'GameStyle=1&3&W&3DW', 'game-style-1,3,w,3dw',],
    [NOT_SMW,                  'GameStyle=1&3&U&3DW', 'game-style-1,3,u,3dw',],
    [NOT_SMB3,                 'GameStyle=1&W&U&3DW', 'game-style-1,w,u,3dw',],
    [NOT_SMB,                  'GameStyle=3&W&U&3DW', 'game-style-3,w,u,3dw',],
] as const
/**
 * Every {@link GameStylePossibility} applicable not related to the {@link SMM2} game group.
 * Meaning, it does not contain the {@link SM3DW} game style.
 */
const gameStylePossibilitiesWithNotSmm2 = [
    [ALL_GAME_STYLES,        'GameStyle=all',     'game-style-all',],
    [SMB_ONLY,               'GameStyle=1',       'game-style-1',],
    [SMB3_ONLY,              'GameStyle=3',       'game-style-3',],
    [SMW_ONLY,               'GameStyle=W',       'game-style-w',],
    [NSMBU_ONLY,             'GameStyle=U',       'game-style-u',],
    [SMB_AND_SMB3,           'GameStyle=1&3',     'game-style-1,3',],
    [SMB_AND_SMW,            'GameStyle=1&W',     'game-style-1,w',],
    [SMB_AND_NSMBU,          'GameStyle=1&U',     'game-style-1,u',],
    [SMB3_AND_SMW,           'GameStyle=3&W',     'game-style-3,w',],
    [SMB3_AND_NSMBU,         'GameStyle=3&U',     'game-style-3,u',],
    [SMW_AND_NSMBU,          'GameStyle=W&U',     'game-style-w,u',],
    [SMB_AND_SMB3_AND_SMW,   'GameStyle=1&3&W',   'game-style-1,3,w',],
    [SMB_AND_SMB3_AND_NSMBU, 'GameStyle=1&3&U',   'game-style-1,3,u',],
    [SMB_AND_SMW_AND_NSMBU,  'GameStyle=1&W&U',   'game-style-1,w,u',],
    [SMB3_AND_SMW_AND_NSMBU, 'GameStyle=3&W&U',   'game-style-3,w,u',],
    [NOT_SM3DW,              'GameStyle=1&3&W&U', 'game-style-1,3,w,u',],
] as const

/** Every {@link GamePossibility} */
const gamePossibilities = [
    [ALL_GAMES_ARRAY,    'Game=all',   'game-all',   gameStylePossibilitiesWithSmm2,    31,],
    [SMM1_ONLY_ARRAY,    'Game=1',     'game-1',     gameStylePossibilitiesWithNotSmm2, 16,],
    [SMM3DS_ONLY_ARRAY,  'Game=3DS',   'game-3ds',   gameStylePossibilitiesWithNotSmm2, 16,],
    [SMM2_ONLY_ARRAY,    'Game=2',     'game-2',     gameStylePossibilitiesWithSmm2,    31,],
    [SMM1_AND_3DS_ARRAY, 'Game=1&3DS', 'game-1,3ds', gameStylePossibilitiesWithNotSmm2, 16,],
    [SMM1_AND_2_ARRAY,   'Game=1&2',   'game-1,2',   gameStylePossibilitiesWithSmm2,    31,],
    [SMM3DS_AND_2_ARRAY, 'Game=3DS&2', 'game-3ds,2', gameStylePossibilitiesWithSmm2,    31,],
] as const

//endregion -------------------- Possibility group constants --------------------

//endregion -------------------- Helper constants --------------------

/**
 * Every route simplified into simple segments
 *
 * @see SimpleRoute
 * @see ViewDisplays
 * @see Games
 * @see GameStyles
 */
export abstract class EveryRoutes<const out SIMPLE_NAME extends string = string, const out SIMPLE_PATH extends string = string, >
    extends Enum<Ordinals, Names>
    implements ClassUsedInRoute<SIMPLE_PATH> {

    //region -------------------- Sub class --------------------

    /** A representation of an {@link EveryRoutes} instance with nothing in its route. Meaning no {@link ViewDisplays} and no {@link GameCollection}. */
    private static readonly Straight_EveryRoutes = class Straight_EveryRoutes<const out SIMPLE_NAME extends string, const out SIMPLE_PATH extends string, > extends EveryRoutes<SIMPLE_NAME, SIMPLE_PATH> {

        constructor(name: SIMPLE_NAME, path: SIMPLE_PATH, routeCallback: NothingRouteCallback,) {
            super(name, path, NO_VIEW_DISPLAY, null, NO_GAMES_COLLECTION, null, NO_GAME_STYLES_COLLECTION, null, routeCallback,)
        }


        protected override _createEveryRoutes(): Array<SimpleRoute> {
            return [new SimpleRoute(this.simpleName, this.simplePath, null, null, null, this.routeCallback,),]
        }

        protected override _getPartialPathFromGames() {
            return EMPTY_STRING
        }

        protected override _getPartialPathFromGameStyles() {
            return EMPTY_STRING
        }

        protected override _getPartialPathFromViewDisplay() {
            return EMPTY_STRING
        }

    }
    /** A representation of an {@link EveryRoutes} instance with everything in its route ({@link ViewDisplays} and {@link GameCollection}) */
    private static readonly ListCardTable_AnyGame_EveryRoutes = class ListCardTable_AnyGame_EveryRoutes<const out SIMPLE_NAME extends string, const out SIMPLE_PATH extends string, > extends EveryRoutes<SIMPLE_NAME, SIMPLE_PATH> {

        constructor(name: SIMPLE_NAME, path: SIMPLE_PATH, defaultViewDisplay: NullOr<ViewDisplays>, routeCallback: RouteCallback,) {
            super(name, path, ALL_VIEW_DISPLAY, defaultViewDisplay ?? ViewDisplays.TABLE, ALL_GAMES_COLLECTION, SMM2, NO_GAME_STYLES_COLLECTION, null, routeCallback,)
        }

        protected override _createEveryRoutes(): Array<SimpleRoute> {
            const simpleName = this.simpleName
            const simplePath = this.simplePath
            const routeCallback = this.routeCallback

            return [
                new SimpleRoute(`${simpleName} (list Game=all)`,    `/game-all/list${simplePath}`,    ALL_GAMES_ARRAY,    null, ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1)`,      `/game-1/list${simplePath}`,      SMM1_ONLY_ARRAY,    null, ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS)`,    `/game-3ds/list${simplePath}`,    SMM3DS_ONLY_ARRAY,  null, ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2)`,      `/game-2/list${simplePath}`,      SMM2_ONLY_ARRAY,    null, ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&3DS)`,  `/game-1,3ds/list${simplePath}`,  SMM1_AND_3DS_ARRAY, null, ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2)`,    `/game-1,2/list${simplePath}`,    SMM1_AND_2_ARRAY,   null, ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2)`,  `/game-3ds,2/list${simplePath}`,  SMM3DS_AND_2_ARRAY, null, ViewDisplays.SIMPLE_LIST, routeCallback,),

                new SimpleRoute(`${simpleName} (card Game=all)`,    `/game-all/card${simplePath}`,    ALL_GAMES_ARRAY,    null, ViewDisplays.CARD_LIST,   routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1)`,      `/game-1/card${simplePath}`,      SMM1_ONLY_ARRAY,    null, ViewDisplays.CARD_LIST,   routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS)`,    `/game-3ds/card${simplePath}`,    SMM3DS_ONLY_ARRAY,  null, ViewDisplays.CARD_LIST,   routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2)`,      `/game-2/card${simplePath}`,      SMM2_ONLY_ARRAY,    null, ViewDisplays.CARD_LIST,   routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&3DS)`,  `/game-1,3ds/card${simplePath}`,  SMM1_AND_3DS_ARRAY, null, ViewDisplays.CARD_LIST,   routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2)`,    `/game-1,2/card${simplePath}`,    SMM1_AND_2_ARRAY,   null, ViewDisplays.CARD_LIST,   routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2)`,  `/game-3ds,2/card${simplePath}`,  SMM3DS_AND_2_ARRAY, null, ViewDisplays.CARD_LIST,   routeCallback,),

                new SimpleRoute(`${simpleName} (table Game=all)`,   `/game-all/table${simplePath}`,   ALL_GAMES_ARRAY,    null, ViewDisplays.TABLE,       routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1)`,     `/game-1/table${simplePath}`,     SMM1_ONLY_ARRAY,    null, ViewDisplays.TABLE,       routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS)`,   `/game-3ds/table${simplePath}`,   SMM3DS_ONLY_ARRAY,  null, ViewDisplays.TABLE,       routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2)`,     `/game-2/table${simplePath}`,     SMM2_ONLY_ARRAY,    null, ViewDisplays.TABLE,       routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&3DS)`, `/game-1,3ds/table${simplePath}`, SMM1_AND_3DS_ARRAY, null, ViewDisplays.TABLE,       routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2)`,   `/game-1,2/table${simplePath}`,   SMM1_AND_2_ARRAY,   null, ViewDisplays.TABLE,       routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2)`, `/game-3ds,2/table${simplePath}`, SMM3DS_AND_2_ARRAY, null, ViewDisplays.TABLE,       routeCallback,),
            ]
        }

        protected override _getPartialPathFromGameStyles() {
            return EMPTY_STRING
        }

    }
    /** A representation of an {@link EveryRoutes} instance with everything in its route ({@link ViewDisplays}, {@link GameCollection} and {@link GameStyleCollection}) */
    private static readonly ListCardTable_AnyGame_AnyGameStyle_EveryRoutes = class ListCardTable_AnyGames_AnyGameStyle_EveryRoutes<const out SIMPLE_NAME extends string, const out SIMPLE_PATH extends string, > extends EveryRoutes<SIMPLE_NAME, SIMPLE_PATH> {

        constructor(name: SIMPLE_NAME, path: SIMPLE_PATH, defaultViewDisplay: NullOr<ViewDisplays>, routeCallback: RouteCallback,) {
            super(name, path, ALL_VIEW_DISPLAY, defaultViewDisplay ?? ViewDisplays.TABLE, ALL_GAMES_COLLECTION, SMM2, ALL_GAME_STYLES_COLLECTION, ALL_GAME_STYLES, routeCallback,)
        }

        protected override _createEveryRoutes(): Array<SimpleRoute> {
            const simpleName = this.simpleName
            const simplePath = this.simplePath
            const routeCallback = this.routeCallback

            const viewDisplays = ViewDisplays.CompanionEnum.get.values
            const routes = new Array<SimpleRoute>(516,) // From: (31 + 16 + 16 + 31 + 16 + 31 + 31) * 3
            let index = -1
            viewDisplays.forEach(viewDisplay => {
                const urlValue = viewDisplay.urlValue

                forEachByArray(gamePossibilities, ([games, gamesName, gamesPath, gameStylePossibilities, gameStylePossibilitiesAmount,],) => {
                    let index_gameStylePossibility = -1
                    while (++index_gameStylePossibility < gameStylePossibilitiesAmount) {
                        const gameStylePossibility = gameStylePossibilities[index_gameStylePossibility]!
                        const gameStyleName = gameStylePossibility[1]
                        const gameStylePath = gameStylePossibility[2]
                        routes[++index] = new SimpleRoute(`${simpleName} (${urlValue} ${gamesName} ${gameStyleName})`, `/${gamesPath}/${gameStylePath}/${urlValue}${simplePath}`, games, gameStylePossibility[0], viewDisplay, routeCallback,)
                    }
                },)
            },)
            return routes
        }

    }
    /** A representation of an {@link EveryRoutes} instance with only the {@link GameCollection} in its route */
    private static readonly AnyGame_EveryRoutes = class AnyGame_EveryRoutes<const out SIMPLE_NAME extends string, const out SIMPLE_PATH extends string, > extends EveryRoutes<SIMPLE_NAME, SIMPLE_PATH> {

        constructor(name: SIMPLE_NAME, path: SIMPLE_PATH, routeCallback: GameRouteCallback,) {
            super(name, path, NO_VIEW_DISPLAY, null, ALL_GAMES_COLLECTION, SMM2, NO_GAME_STYLES_COLLECTION, null, (_, games,) => routeCallback(games,),)
        }


        protected override _createEveryRoutes(): Array<SimpleRoute> {
            const simpleName = this.simpleName
            const simplePath = this.simplePath
            const routeCallback = this.routeCallback

            return [
                new SimpleRoute(`${simpleName} (Game=all)`,   `/game-all${simplePath}`,   ALL_GAMES_ARRAY,    null, null, routeCallback,),
                new SimpleRoute(`${simpleName} (Game=1)`,     `/game-1${simplePath}`,     SMM1_ONLY_ARRAY,    null, null, routeCallback,),
                new SimpleRoute(`${simpleName} (Game=3DS)`,   `/game-3ds${simplePath}`,   SMM3DS_ONLY_ARRAY,  null, null, routeCallback,),
                new SimpleRoute(`${simpleName} (Game=2)`,     `/game-2${simplePath}`,     SMM2_ONLY_ARRAY,    null, null, routeCallback,),
                new SimpleRoute(`${simpleName} (Game=1&3DS)`, `/game-1,3ds${simplePath}`, SMM1_AND_3DS_ARRAY, null, null, routeCallback,),
                new SimpleRoute(`${simpleName} (Game=1&2)`,   `/game-1,2${simplePath}`,   SMM1_AND_2_ARRAY,   null, null, routeCallback,),
                new SimpleRoute(`${simpleName} (Game=3DS&2)`, `/game-3ds,2${simplePath}`, SMM3DS_AND_2_ARRAY, null, null, routeCallback,),
            ]
        }

        protected override _getPartialPathFromGameStyles() {
            return EMPTY_STRING
        }

        protected override _getPartialPathFromViewDisplay() {
            return EMPTY_STRING
        }

    }
    /** A representation of an {@link EveryRoutes} instance as any possible {@link ViewDisplays} in its route only in {@link SMM1} */
    private static readonly ListCardTable_Smm1_EveryRoutes = class ListCardTable_Smm1_EveryRoutes<const out SIMPLE_NAME extends string, const out SIMPLE_PATH extends string, > extends EveryRoutes<SIMPLE_NAME, SIMPLE_PATH> {

        constructor(name: SIMPLE_NAME, path: SIMPLE_PATH, defaultViewDisplay: NullOr<ViewDisplays>, routeCallback: RouteCallback,) {
            super(name, path, ALL_VIEW_DISPLAY, defaultViewDisplay ?? ViewDisplays.TABLE, SMM1_GAMES_COLLECTION, SMM1, NO_GAME_STYLES_COLLECTION, null, routeCallback,)
        }


        protected override _createEveryRoutes(): Array<SimpleRoute> {
            const simpleName = this.simpleName
            const simplePath = this.simplePath
            const routeCallback = this.routeCallback

            return [
                new SimpleRoute(`${simpleName} (list Game=1)`,  `/game-1/list${simplePath}`,  SMM1_ONLY_ARRAY, null, ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1)`,  `/game-1/card${simplePath}`,  SMM1_ONLY_ARRAY, null, ViewDisplays.CARD_LIST,   routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1)`, `/game-1/table${simplePath}`, SMM1_ONLY_ARRAY, null, ViewDisplays.TABLE,       routeCallback,),
            ]
        }

        protected override _getPartialPathFromGames() {
            return '/game-1' as const satisfies PossibleGamePath
        }

        protected override _getPartialPathFromGameStyles() {
            return EMPTY_STRING
        }

        protected override _getPartialPathFromViewDisplay(value: NullOr<ViewDisplays>,): PossibleViewDisplayPath {
            if (value == null)
                value = ViewDisplays.CompanionEnum.get.currentOrNull
            if (value == null)
                value = this.defaultViewDisplay!
            return `/${value.urlValue}`
        }

    }
    /** A representation of an {@link EveryRoutes} instance as any possible {@link ViewDisplays} in its route only in {@link SMM2} */
    private static readonly ListCardTable_Smm2_EveryRoutes = class ListCardTable_Smm2_EveryRoutes<const out SIMPLE_NAME extends string, const out SIMPLE_PATH extends string, > extends EveryRoutes<SIMPLE_NAME, SIMPLE_PATH> {

        constructor(name: SIMPLE_NAME, path: SIMPLE_PATH, defaultViewDisplay: NullOr<ViewDisplays>, routeCallback: RouteCallback,) {
            super(name, path, ALL_VIEW_DISPLAY, defaultViewDisplay ?? ViewDisplays.TABLE, SMM2_GAMES_COLLECTION, SMM2, NO_GAME_STYLES_COLLECTION, null, routeCallback,)
        }


        protected override _createEveryRoutes(): Array<SimpleRoute> {
            const simpleName = this.simpleName
            const simplePath = this.simplePath
            const routeCallback = this.routeCallback

            return [
                new SimpleRoute(`${simpleName} (list Game=2)`,  `/game-2/list${simplePath}`,  SMM2_ONLY_ARRAY, null, ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2)`,  `/game-2/card${simplePath}`,  SMM2_ONLY_ARRAY, null, ViewDisplays.CARD_LIST,   routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2)`, `/game-2/table${simplePath}`, SMM2_ONLY_ARRAY, null, ViewDisplays.TABLE,       routeCallback,),
            ]
        }

        protected override _getPartialPathFromGames() {
            return `/game-2` as const satisfies PossibleGamePath
        }

        protected override _getPartialPathFromGameStyles() {
            return EMPTY_STRING
        }

        protected override _getPartialPathFromViewDisplay(value: NullOr<ViewDisplays>,): PossibleViewDisplayPath {
            if (value == null)
                value = ViewDisplays.CompanionEnum.get.currentOrNull
            if (value == null)
                value = this.defaultViewDisplay!
            return `/${value.urlValue}`
        }

    }

    //endregion -------------------- Sub class --------------------
    //region -------------------- Enum instances --------------------

    public static readonly HOME = new EveryRoutes.Straight_EveryRoutes('home', '/home', () => <HomeApp/>,)
    public static readonly ABOUT = new EveryRoutes.Straight_EveryRoutes('about', '/about', () => <AboutApp/>,)
    public static readonly SOURCES = new EveryRoutes.Straight_EveryRoutes('sources', '/sources', () => <SourcesApp/>,)

    public static readonly EVERY_MUSIC = new EveryRoutes.Straight_EveryRoutes('everyMusic', '/every/music', () => <MusicApp/>,)

    public static readonly EVERY_POWER_UP_RIDE_AND_HAT_PRIORITY = new EveryRoutes.AnyGame_EveryRoutes('everyPowerUp&Ride&HatPriority', '/every/power-up+ride+hat/priority', games => <PowerUpRideAndHatPriorityApp games={games} type={PowerUpPriorityTypes.ALL}/>,)
    public static readonly EVERY_POWER_UP_AND_RIDE_PRIORITY = new EveryRoutes.AnyGame_EveryRoutes('everyPowerUp&RidePriority', '/every/power-up+ride/priority', games => <PowerUpRideAndHatPriorityApp games={games} type={PowerUpPriorityTypes.POWER_UP_AND_RIDE}/>,)
    public static readonly EVERY_POWER_UP_AND_HAT_PRIORITY = new EveryRoutes.AnyGame_EveryRoutes('everyPowerUp&HatPriority', '/every/power-up+hat/priority', games => <PowerUpRideAndHatPriorityApp games={games} type={PowerUpPriorityTypes.POWER_UP_AND_HAT}/>,)
    public static readonly EVERY_RIDE_AND_HAT_PRIORITY = new EveryRoutes.AnyGame_EveryRoutes('everyRide&HatPriority', '/every/ride+hat/priority', games => <PowerUpRideAndHatPriorityApp games={games} type={PowerUpPriorityTypes.RIDE_AND_HAT}/>,)
    public static readonly EVERY_POWER_UP_PRIORITY = new EveryRoutes.AnyGame_EveryRoutes('everyPowerUpPriority', '/every/power-up/priority', games => <PowerUpRideAndHatPriorityApp games={games} type={PowerUpPriorityTypes.POWER_UP}/>,)
    public static readonly EVERY_RIDE_PRIORITY = new EveryRoutes.AnyGame_EveryRoutes('everyRidePriority', '/every/ride/priority', games => <PowerUpRideAndHatPriorityApp games={games} type={PowerUpPriorityTypes.RIDE}/>,)
    public static readonly EVERY_HAT_PRIORITY = new EveryRoutes.AnyGame_EveryRoutes('everyHatPriority', '/every/hat/priority', games => <PowerUpRideAndHatPriorityApp games={games} type={PowerUpPriorityTypes.HAT}/>,)
    public static readonly NO_PRIORITY = new EveryRoutes.AnyGame_EveryRoutes('noPriority', '/no/priority', games => <PowerUpRideAndHatPriorityApp games={games} type={PowerUpPriorityTypes.NONE}/>,)

    public static readonly EVERY_CHARACTER_NAME = new EveryRoutes.ListCardTable_AnyGame_EveryRoutes('everyCharacterName', '/every/character-name', ViewDisplays.CARD_LIST, (viewDisplay, games,) => <CharacterNameApp viewDisplay={viewDisplay} games={games}/>,)

    public static readonly EVERY_GAME_REFERENCE = new EveryRoutes.AnyGame_EveryRoutes('everyGameReference', '/every/game-reference', () => <GameReferenceApp/>,)
    public static readonly EVERY_GAME_STYLE = new EveryRoutes.ListCardTable_AnyGame_EveryRoutes('everyGameStyle', '/every/game-style', ViewDisplays.CARD_LIST, (viewDisplay, games,) => <GameStyleApp viewDisplay={viewDisplay} games={games}/>,)

    public static readonly EVERY_ENTITY = new EveryRoutes.ListCardTable_AnyGame_AnyGameStyle_EveryRoutes('everyEntity', '/every/entity', null, (viewDisplay, games, gameStyles,) => <EntityApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles}/>,)
    public static readonly EVERY_ENTITY_CATEGORY = new EveryRoutes.ListCardTable_Smm2_EveryRoutes('everyEntityCategory', '/every/entity-category', ViewDisplays.CARD_LIST, viewDisplay => <EntityCategoryApp viewDisplay={viewDisplay}/>,)
    public static readonly EVERY_GROUP = new EveryRoutes.Straight_EveryRoutes('everyGroup', '/every/entity-group', () => <EntityGroupApp/>)

    public static readonly EVERY_LIMIT = new EveryRoutes.ListCardTable_AnyGame_EveryRoutes('everyLimit', '/every/limit', null, (viewDisplay, games,) => <LimitApp viewDisplay={viewDisplay} games={games} type={LimitTypes.ALL}/>,)
    public static readonly EVERY_PLAY_LIMIT = new EveryRoutes.ListCardTable_AnyGame_EveryRoutes('playLimit', '/play/limit', null, (viewDisplay, games,) => <LimitApp viewDisplay={viewDisplay} games={games} type={LimitTypes.PLAY}/>,)
    public static readonly EVERY_EDITOR_LIMIT = new EveryRoutes.ListCardTable_AnyGame_EveryRoutes('editorLimit', '/editor/limit', null, (viewDisplay, games,) => <LimitApp viewDisplay={viewDisplay} games={games} type={LimitTypes.EDITOR}/>,)

    public static readonly EVERY_THEME = new EveryRoutes.ListCardTable_AnyGame_EveryRoutes('everyTheme', '/every/theme', ViewDisplays.CARD_LIST, (viewDisplay, games,) => <ThemeApp viewDisplay={viewDisplay} games={games} type={ThemeTypes.ALL}/>,)
    public static readonly EVERY_COURSE_THEME = new EveryRoutes.ListCardTable_AnyGame_EveryRoutes('courseTheme', '/course/theme', ViewDisplays.CARD_LIST, (viewDisplay, games,) => <ThemeApp viewDisplay={viewDisplay} games={games} type={ThemeTypes.COURSE}/>,)
    public static readonly EVERY_WORLD_THEME = new EveryRoutes.ListCardTable_AnyGame_EveryRoutes('worldTheme', '/world/theme', ViewDisplays.CARD_LIST, (viewDisplay, games,) => <ThemeApp viewDisplay={viewDisplay} games={games} type={ThemeTypes.WORLD}/>,)

    public static readonly EVERY_SOUND_EFFECT = new EveryRoutes.ListCardTable_AnyGame_AnyGameStyle_EveryRoutes('everySoundEffect', '/every/sound-effect', null, (viewDisplay, games, gameStyles,) => <SoundEffectApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles}/>,)
    public static readonly EVERY_SOUND_EFFECT_CATEGORY = new EveryRoutes.ListCardTable_Smm2_EveryRoutes('everySoundEffectCategory', '/every/sound-effect-category', ViewDisplays.CARD_LIST, viewDisplay => <SoundEffectCategoryApp viewDisplay={viewDisplay}/>)

    public static readonly EVERY_MII_COSTUME = new EveryRoutes.ListCardTable_Smm2_EveryRoutes('everyMiiCostume', '/every/mii-costume', null, viewDisplay => <MiiCostumeApp viewDisplay={viewDisplay}/>,)
    public static readonly EVERY_MII_COSTUME_CATEGORY = new EveryRoutes.ListCardTable_Smm2_EveryRoutes('everyMiiCostumeCategory', '/every/mii-costume-category', ViewDisplays.CARD_LIST, viewDisplay => <MiiCostumeCategoryApp viewDisplay={viewDisplay}/>,)

    public static readonly EVERY_MYSTERY_MUSHROOM = new EveryRoutes.ListCardTable_Smm1_EveryRoutes('everyMysteryMushroom', '/every/mystery-mushroom', ViewDisplays.CARD_LIST, viewDisplay => <MysteryMushroomApp viewDisplay={viewDisplay}/>,)

    public static readonly EVERY_PREDEFINED_MESSAGE = new EveryRoutes.ListCardTable_Smm2_EveryRoutes('everyPredefinedMessage', '/every/predefined-message', ViewDisplays.SIMPLE_LIST, viewDisplay => <PredefinedMessageApp viewDisplay={viewDisplay}/>,)

    public static readonly EVERY_SAMPLE_COURSE = new EveryRoutes.ListCardTable_Smm1_EveryRoutes('everySampleCourse', '/every/sample-course', null, viewDisplay => <SampleCourseApp viewDisplay={viewDisplay}/>,)
    public static readonly EVERY_OFFICIAL_COURSE = new EveryRoutes.ListCardTable_AnyGame_EveryRoutes('everyOfficialCourse', '/every/official-course', null, viewDisplay => <OfficialCourseApp viewDisplay={viewDisplay}/>,)

    public static readonly EVERY_MEDAL = new EveryRoutes.ListCardTable_Smm1_EveryRoutes('everyMedal', '/every/medal', ViewDisplays.CARD_LIST, viewDisplay => <MedalApp viewDisplay={viewDisplay}/>,)

    public static readonly EVERY_COURSE_TAG = new EveryRoutes.ListCardTable_Smm2_EveryRoutes('everyCourseTag', '/every/course-tag', ViewDisplays.CARD_LIST, viewDisplay => <CourseTagApp viewDisplay={viewDisplay} type={CourseTagTypes.ALL}/>,)
    public static readonly EVERY_OFFICIAL_COURSE_TAG = new EveryRoutes.ListCardTable_Smm2_EveryRoutes('officialCourseTag', '/official/course-tag', ViewDisplays.CARD_LIST, viewDisplay => <CourseTagApp viewDisplay={viewDisplay} type={CourseTagTypes.OFFICIAL}/>,)
    public static readonly EVERY_UNOFFICIAL_COURSE_TAG = new EveryRoutes.ListCardTable_Smm2_EveryRoutes('unofficialCourseTag', '/unofficial/course-tag', ViewDisplays.CARD_LIST, viewDisplay => <CourseTagApp viewDisplay={viewDisplay} type={CourseTagTypes.UNOFFICIAL}/>,)
    public static readonly EVERY_MAKER_CENTRAL_COURSE_TAG = new EveryRoutes.ListCardTable_Smm2_EveryRoutes('makerCentralCourseTag', '/maker-central/course-tag', ViewDisplays.CARD_LIST, viewDisplay => <CourseTagApp viewDisplay={viewDisplay} type={CourseTagTypes.MAKER_CENTRAL}/>,)

    public static readonly EVERY_INSTRUMENT = new EveryRoutes.ListCardTable_AnyGame_EveryRoutes('everyInstrument', '/every/instrument', ViewDisplays.CARD_LIST, (viewDisplay, games,) => <InstrumentApp viewDisplay={viewDisplay} games={games}/>,)

    public static readonly EVERY_EDITOR_VOICE = new EveryRoutes.ListCardTable_AnyGame_EveryRoutes('everyEditorVoice', '/every/editor-voice', ViewDisplays.CARD_LIST, (viewDisplay, games,) => <EditorVoiceApp viewDisplay={viewDisplay} games={games}/>,)

    public static readonly EVERY_ROUTE = new EveryRoutes.Straight_EveryRoutes('everyRoute', '/debug/every-route', () => <RouteApp/>,)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: Singleton<CompanionEnumDeclaration_EveryRoutes> = class CompanionEnum_EveryRoutes
        extends CompanionEnum<EveryRoutes, typeof EveryRoutes>
        implements CompanionEnumDeclaration_EveryRoutes {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_EveryRoutes

        private constructor() {
            super(EveryRoutes,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_EveryRoutes()
        }

        //endregion -------------------- Singleton usage --------------------

        #everyRoute?: Array<SimpleRoute>

        public get everyRoute(): Array<SimpleRoute> {
            if (this.#everyRoute != null)
                return this.#everyRoute

            const routes: MutableArray<SimpleRoute> = []
            this.values.forEach(it => forEachByArray(it.everyRoute, it => routes.push(it,),),)
            return this.#everyRoute = routes
        }

        public getValueInUrl(url: string,): NullOr<EveryRoutes> {
            return this.values.findFirstOrNull(it => url.endsWith(it.simplePath,),)
        }

        public getRouteFromName(name: PossibleRouteName, language?: Nullable<ProjectLanguages>,): EveryPossibleRoutes {
            language ??= ProjectLanguages.CompanionEnum.get.current
            const currentGames = Games.CompanionEnum.get.currentOrNull?.toArray() ?? null
            const currentGameStyles = GameStyles.CompanionEnum.get.currentOrNull?.toArray() ?? null
            const currentViewDisplay = ViewDisplays.CompanionEnum.get.currentOrNull
            for (const value of this.values) {
                if (value.simpleName === name) {
                    const everyRoute = value.everyRoute
                    const routeFoundByName = findFirstOrNullByArray(everyRoute, it => it.name === name,)
                    if (routeFoundByName != null)
                        return value.getPath(language, routeFoundByName.games, routeFoundByName.gameStyles, routeFoundByName.viewDisplay,)

                    const pathToFind = `${value._getPartialPathFromGames(currentGames,)}${value._getPartialPathFromGameStyles(currentGameStyles,)}${value._getPartialPathFromViewDisplay(currentViewDisplay,)}${value.simplePath}`
                    const routeFoundByPath = findFirstOrNullByArray(everyRoute, it => it.path === pathToFind,)
                    if (routeFoundByPath != null)
                        return value.getPath(language, routeFoundByPath.games, routeFoundByPath.gameStyles, routeFoundByPath.viewDisplay,)
                    throw new ReferenceError(`No route is findable by the direct name "${name}".`,)
                }

                const routeFromOnlyViewDisplay = this.#getRouteFromOnlyViewDisplay(value, name, language,)
                if (routeFromOnlyViewDisplay != null)
                    return routeFromOnlyViewDisplay

                if (name.startsWith(`${value.simpleName} `,)) {
                    const pathToFind = `${value._getPartialPathFromGames(this.#getGamesInName(name,),)}${value._getPartialPathFromGameStyles(this.#getGameStylesInName(name,),)}${value._getPartialPathFromViewDisplay(this.#getViewDisplayInName(name,),)}${value.simplePath}`
                    const routeFound = findFirstOrNullByArray(value.everyRoute, it => it.path === pathToFind,)
                    if (routeFound != null)
                        return value.getPath(language, routeFound.games, routeFound.gameStyles, routeFound.viewDisplay,)
                    throw new ReferenceError(`No route is findable by the name starting by "${name}".`,)
                }
            }

            throw new ReferenceError(`No route is findable by the name "${name}".`,)
        }

        /**
         * Get a route (if applicable) from a {@link ViewDisplays} directly
         *
         * @param value The current {@link EveryRoutes} instance
         * @param name The name to find
         * @param language The language in the route
         */
        #getRouteFromOnlyViewDisplay(value: EveryRoutes, name: PossibleRouteName, language: ProjectLanguages,): NullOr<EveryPossibleRoutes> {
            const viewDisplays = value.viewDisplays
            if (viewDisplays.isEmpty)
                return null
            if (viewDisplays.hasSimpleList)
                if (`${value.simpleName} (list)` === name)
                    return value.getPath(language, null, null, ViewDisplays.SIMPLE_LIST,)
            if (viewDisplays.hasCardList)
                if (`${value.simpleName} (card)` === name)
                    return value.getPath(language, null, null, ViewDisplays.CARD_LIST,)
            if (viewDisplays.hasCardList)
                if (`${value.simpleName} (table)` === name)
                    return value.getPath(language, null, null, ViewDisplays.TABLE,)
            return null
        }

        /**
         * Get the {@link Games} selected in the {@link name} received
         *
         * @param name The name to retrieve the {@link Games}
         * @arrayReutilization
         */
        #getGamesInName(name: PossibleRouteName,): Array<Games> {
            const startingIndex = name.indexOf('Game=',)
            if (startingIndex === -1)
                return EMPTY_ARRAY

            const nameFromGame = name.substring(startingIndex + 5,)
            if (nameFromGame === 'all)' || nameFromGame.startsWith('all ',))
                return GamePossibility.ALL_GAMES

            if (nameFromGame === '1)' || nameFromGame.startsWith('1 ',))
                return GamePossibility.SMM1_ONLY
            if (nameFromGame === '3DS)' || nameFromGame.startsWith('3DS ',))
                return GamePossibility.SMM3DS_ONLY
            if (nameFromGame === '2)' || nameFromGame.startsWith('2 ',))
                return GamePossibility.SMM2_ONLY

            if (nameFromGame === '1&3DS)' || nameFromGame.startsWith('1&3DS ',))
                return GamePossibility.SMM1_AND_3DS
            if (nameFromGame === '1&2)' || nameFromGame.startsWith('1&2 ',))
                return GamePossibility.SMM1_AND_2
            if (nameFromGame === '3DS&2)' || nameFromGame.startsWith('3DS&2 ',))
                return GamePossibility.SMM3DS_AND_2

            throw new ReferenceError(`No games have a name associated to the name "${name}".`,)
        }

        /**
         * Get the {@link GameStyles} selected in the {@link name} received
         *
         * @param name The name to retrieve the {@link GameStyles}
         * @arrayReutilization
         */
        #getGameStylesInName(name: PossibleRouteName,): Array<GameStyles> {
            const startingIndex = name.indexOf('GameStyle=',)
            if (startingIndex === -1)
                return EMPTY_ARRAY

            const nameFromGameStyle = name.substring(startingIndex + 10,)
            if (nameFromGameStyle === 'all)' || nameFromGameStyle.startsWith('all ',))
                return ALL_GAME_STYLES

            if (nameFromGameStyle === '1)' || nameFromGameStyle.startsWith('1 ',))
                return SMB_ONLY
            if (nameFromGameStyle === '3)' || nameFromGameStyle.startsWith('3 ',))
                return SMB3_ONLY
            if (nameFromGameStyle === 'W)' || nameFromGameStyle.startsWith('W ',))
                return SMW_ONLY
            if (nameFromGameStyle === 'U)' || nameFromGameStyle.startsWith('U ',))
                return NSMBU_ONLY
            if (nameFromGameStyle === '3DW)' || nameFromGameStyle.startsWith('3DW ',))
                return SM3DW_ONLY

            if (nameFromGameStyle === '1&3)' || nameFromGameStyle.startsWith('1&3 ',))
                return SMB_AND_SMB3
            if (nameFromGameStyle === '1&W)' || nameFromGameStyle.startsWith('1&W ',))
                return SMB_AND_SMW
            if (nameFromGameStyle === '1&U)' || nameFromGameStyle.startsWith('1&U ',))
                return SMB_AND_NSMBU
            if (nameFromGameStyle === '1&3DW)' || nameFromGameStyle.startsWith('1&3DW ',))
                return SMB_AND_SM3DW
            if (nameFromGameStyle === '3&W)' || nameFromGameStyle.startsWith('3&W ',))
                return SMB3_AND_SMW
            if (nameFromGameStyle === '3&U)' || nameFromGameStyle.startsWith('3&U ',))
                return SMB3_AND_NSMBU
            if (nameFromGameStyle === '3&3DW)' || nameFromGameStyle.startsWith('3&3DW ',))
                return SMB3_AND_SM3DW
            if (nameFromGameStyle === 'W&U)' || nameFromGameStyle.startsWith('W&U ',))
                return SMW_AND_NSMBU
            if (nameFromGameStyle === 'W&3DW)' || nameFromGameStyle.startsWith('W&3DW ',))
                return SMW_AND_SM3DW
            if (nameFromGameStyle === 'U&3DW)' || nameFromGameStyle.startsWith('U&3DW ',))
                return NSMBU_AND_SM3DW

            if (nameFromGameStyle === '1&3&W)' || nameFromGameStyle.startsWith('1&3&W ',))
                return SMB_AND_SMB3_AND_SMW
            if (nameFromGameStyle === '1&3&U)' || nameFromGameStyle.startsWith('1&3&U ',))
                return SMB_AND_SMB3_AND_NSMBU
            if (nameFromGameStyle === '1&3&3DW)' || nameFromGameStyle.startsWith('1&3&3DW ',))
                return SMB_AND_SMB3_AND_SM3DW
            if (nameFromGameStyle === '1&W&U)' || nameFromGameStyle.startsWith('1&W&U ',))
                return SMB_AND_SMW_AND_NSMBU
            if (nameFromGameStyle === '1&W&3DW)' || nameFromGameStyle.startsWith('1&W&3DW ',))
                return SMB_AND_SMW_AND_SM3DW
            if (nameFromGameStyle === '1&U&3DW)' || nameFromGameStyle.startsWith('1&U&3DW ',))
                return SMB_AND_NSMBU_AND_SM3DW
            if (nameFromGameStyle === '3&W&U)' || nameFromGameStyle.startsWith('3&W&U ',))
                return SMB3_AND_SMW_AND_NSMBU
            if (nameFromGameStyle === '3&W&3DW)' || nameFromGameStyle.startsWith('3&W&3DW ',))
                return SMB3_AND_SMW_AND_SM3DW
            if (nameFromGameStyle === '3&U&3DW)' || nameFromGameStyle.startsWith('3&U&3DW ',))
                return SMB3_AND_NSMBU_AND_SM3DW
            if (nameFromGameStyle === 'W&U&3DW)' || nameFromGameStyle.startsWith('W&U&3DW ',))
                return SMW_AND_NSMBU_AND_SM3DW

            if (nameFromGameStyle === '1&3&W&U)' || nameFromGameStyle.startsWith('1&3&W&U ',))
                return NOT_SM3DW
            if (nameFromGameStyle === '1&3&W&3DW)' || nameFromGameStyle.startsWith('1&3&W&3DW ',))
                return NOT_NSMBU
            if (nameFromGameStyle === '1&3&U&3DW)' || nameFromGameStyle.startsWith('1&3&U&3DW ',))
                return NOT_SMW
            if (nameFromGameStyle === '1&W&U&3DW)' || nameFromGameStyle.startsWith('1&W&U&3DW ',))
                return NOT_SMB3
            if (nameFromGameStyle === '3&W&U&3DW)' || nameFromGameStyle.startsWith('3&W&U&3DW ',))
                return NOT_SMB

            throw new ReferenceError(`No game styles have a name associated to the name "${name}".`,)
        }

        /**
         * Get the {@link ViewDisplays} selected in the {@link name} received
         *
         * @param name The name to retrieve the {@link ViewDisplays}
         */
        #getViewDisplayInName(name: PossibleRouteName,): NullOr<ViewDisplays> {
            if (name.endsWith('(list)',) || name.includes('(list',))
                return ViewDisplays.SIMPLE_LIST
            if (name.endsWith('(card)',) || name.includes('(card',))
                return ViewDisplays.CARD_LIST
            if (name.endsWith('(table)',) || name.includes('(table',))
                return ViewDisplays.TABLE
            return null
        }

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #simpleName
    readonly #simplePath
    readonly #viewDisplays
    readonly #defaultViewDisplay
    readonly #games
    readonly #gameStyles
    readonly #defaultGame
    readonly #defaultGameStyles
    readonly #routeCallback

    #everyRoutes?: Array<SimpleRoute>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(name: SIMPLE_NAME, path: SIMPLE_PATH,
                        viewDisplays: ViewDisplayCollection, defaultViewDisplay: NullOr<ViewDisplays>,
                        games: GameCollection, defaultGame: NullOr<Games>,
                        gameStyles: GameStyleCollection, defaultGameStyles: NullOrArray<GameStyles>,
                        routeCallback: RouteCallback,) {
        super()
        this.#simpleName = name
        this.#simplePath = path
        this.#viewDisplays = viewDisplays
        this.#defaultViewDisplay = defaultViewDisplay
        this.#games = games
        this.#defaultGame = defaultGame
        this.#gameStyles = gameStyles
        this.#defaultGameStyles = defaultGameStyles
        this.#routeCallback = routeCallback
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get simpleName(): SIMPLE_NAME {
        return this.#simpleName
    }

    public get simplePath(): SIMPLE_PATH {
        return this.#simplePath
    }

    public get urlValue(): SIMPLE_PATH {
        return this.simplePath
    }

    public get viewDisplays(): ViewDisplayCollection {
        return this.#viewDisplays
    }

    public get defaultViewDisplay(): NullOr<ViewDisplays> {
        return this.#defaultViewDisplay
    }

    public get games(): GameCollection {
        return this.#games
    }

    public get defaultGame(): NullOr<Games> {
        return this.#defaultGame
    }

    public get gameStyles(): GameStyleCollection {
        return this.#gameStyles
    }

    public get defaultGameStyles(): NullOrArray<GameStyles> {
        return this.#defaultGameStyles
    }

    public get routeCallback(): RouteCallback {
        return this.#routeCallback
    }


    public get everyRoute(): Array<SimpleRoute> {
        return this.#everyRoutes ??= this._createEveryRoutes()
    }

    protected abstract _createEveryRoutes(): Array<SimpleRoute>

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    /**
     * Get the partial path from a {@link Nullable} {@link Games} {@link ReadonlyArray array}
     *
     * @param value The {@link Games} to retrieve its {@link Games.urlValue}
     */
    protected _getPartialPathFromGames(value: NullOrArray<Games>,): PossibleGamePath {
        const GameCompanion = Games.CompanionEnum.get
        if (value == null) {
            const currentGames = GameCompanion.currentOrNull
            if (currentGames == null) {
                const defaultGame = this.defaultGame
                if (defaultGame == null)
                    return EMPTY_STRING
                return `/game-${defaultGame.urlValue}`
            }
            return `/game-${GameCompanion.getGroupUrlValue(currentGames,)}`
        }
        if (value.length === 0) {
            const defaultGame = this.defaultGame
            if (defaultGame == null)
                return EMPTY_STRING
            return `/game-${defaultGame.urlValue}`
        }
        if (value.length === 0)
            return EMPTY_STRING
        return `/game-${GameCompanion.getGroupUrlValue(value,)}`
    }

    /**
     * Get the partial path from a {@link Nullable} {@link GameStyles} {@link ReadonlyArray array}
     *
     * @param values The {@link GameStyles} to retrieve their {@link GameStyles.urlValue}
     */
    protected _getPartialPathFromGameStyles(values: NullOrArray<GameStyles>,): PossibleGameStylePath {
        const GameStyleCompanion = GameStyles.CompanionEnum.get
        if (values == null) {
            const currentGameStyles = GameStyleCompanion.currentOrNull
            if (currentGameStyles == null) {
                const defaultGameStyles = this.defaultGameStyles
                if (defaultGameStyles == null)
                    return EMPTY_STRING
                return `/game-style-${GameStyleCompanion.getGroupUrlValue(defaultGameStyles,)}`
            }
            return `/game-style-${GameStyleCompanion.getGroupUrlValue(currentGameStyles,)}`
        }
        if (values.length === 0) {
            const defaultGameStyles = this.defaultGameStyles
            if (defaultGameStyles == null)
                return EMPTY_STRING
            return `/game-style-${GameStyleCompanion.getGroupUrlValue(defaultGameStyles,)}`
        }
        if (values.length === 0)
            return EMPTY_STRING
        return `/game-style-${GameStyleCompanion.getGroupUrlValue(values,)}`
    }

    /**
     * Get the partial path from a {@link Nullable} {@link ViewDisplays}
     *
     * @param value The {@link ViewDisplays} to retrieve its {@link ViewDisplays.urlValue}
     */
    protected _getPartialPathFromViewDisplay(value: NullOr<ViewDisplays>,): PossibleViewDisplayPath {
        if (value == null)
            value = ViewDisplays.CompanionEnum.get.currentOrNull
        if (value == null)
            value = this.defaultViewDisplay
        if (value == null)
            return EMPTY_STRING
        return `/${value.urlValue}`
    }

    public getPath(language: NullOr<ProjectLanguages>, games: NullOrArray<Games>, gameStyles: NullOrArray<GameStyles>, viewDisplay: NullOr<ViewDisplays>,): EveryPossibleRoutes {
        if (language == null)
            language = ProjectLanguages.CompanionEnum.get.current
        return `/${language.projectAcronym}${this._getPartialPathFromGames(games,)}${this._getPartialPathFromGameStyles(gameStyles,)}${this._getPartialPathFromViewDisplay(viewDisplay,)}${this.simplePath}` as unknown as EveryPossibleRoutes
    }

    //endregion -------------------- Methods --------------------

}

// const everyRoute = EveryRoutes.CompanionEnum.get.everyRoute
// console.table(everyRoute.filter((_, i,) => i < 500,).map(it => ({name: it.name, path: it.path,}),),)
// console.table(everyRoute.filter((_, i,) => i >= 500 && i < 1000,).map(it => ({name: it.name, path: it.path,}),),)
// console.table(everyRoute.filter((_, i,) => i >= 1000,).map(it => ({name: it.name, path: it.path,}),),)
