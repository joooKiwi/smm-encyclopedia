import type {Singleton}                             from '@joookiwi/enumerable'
import type {Array, MutableArray, Nullable, NullOr} from '@joookiwi/type'
import {findFirstOrNullByArray, forEachByArray}     from '@joookiwi/collection'
import {CompanionEnum, Enum}                        from '@joookiwi/enumerable'
import {lazy}                                       from 'react'

import type {ClassUsedInRoute}                                                                                                                                                                                    from 'route/ClassUsedInRoute'
import type {EveryPossibleRoutes, GameRouteCallback, Names, NothingRouteCallback, Ordinals, PossibleGamePath, PossibleGameStylePath, PossibleRouteName, PossibleTimePath, PossibleViewDisplayPath, RouteCallback} from 'route/EveryRoutes.types'
import type {CompanionEnumDeclaration_EveryRoutes}                                                                                                                                                                from 'route/EveryRoutes.companionEnumDeclaration'

import {CourseTagTypes}        from 'app/property/CourseTagTypes'
import {LimitTypes}            from 'app/property/LimitTypes'
import {PowerUpPriorityTypes}  from 'app/property/PowerUpPriorityTypes'
import {ThemeTypes}            from 'app/property/ThemeTypes'
import {ViewDisplays}          from 'app/withInterpreter/ViewDisplays'
import {Games}                 from 'core/game/Games'
import {GameStyles}            from 'core/gameStyle/GameStyles'
import {Times}                 from 'core/time/Times'
import {ProjectLanguages}      from 'lang/ProjectLanguages'
import {SimpleRoute}           from 'route/SimpleRoute'
import {Empty}                 from 'util/emptyVariables'
import {GameCollection}        from 'util/collection/GameCollection'
import {GameStyleCollection}   from 'util/collection/GameStyleCollection'
import {TimeCollection}        from 'util/collection/TimeCollection'
import {ViewDisplayCollection} from 'util/collection/ViewDisplayCollection'

import ALL_GAME_STYLES =                   GameStyles.ALL
import ALL_GAMES =                         Games.ALL
import EMPTY_ARRAY =                       Empty.EMPTY_ARRAY
import EMPTY_STRING =                      Empty.EMPTY_STRING
import NOT_NSMBU =                         GameStyles.NOT_NSMBU
import NOT_SMB =                           GameStyles.NOT_SMB
import NOT_SMB3 =                          GameStyles.NOT_SMB3
import NOT_SMW =                           GameStyles.NOT_SMW
import NOT_SM3DW =                         GameStyles.NOT_SM3DW
import NSMBU_AND_SM3DW =                   GameStyles.NSMBU_AND_SM3DW
import NSMBU_ONLY =                        GameStyles.NSMBU_ONLY
import SMB_AND_NSMBU =                     GameStyles.SMB_AND_NSMBU
import SMB_AND_NSMBU_AND_SM3DW =           GameStyles.SMB_AND_NSMBU_AND_SM3DW
import SMB_AND_SMB3 =                      GameStyles.SMB_AND_SMB3
import SMB_AND_SMB3_AND_NSMBU =            GameStyles.SMB_AND_SMB3_AND_NSMBU
import SMB_AND_SMB3_AND_SMW =              GameStyles.SMB_AND_SMB3_AND_SMW
import SMB_AND_SMB3_AND_SM3DW =            GameStyles.SMB_AND_SMB3_AND_SM3DW
import SMB_AND_SMW =                       GameStyles.SMB_AND_SMW
import SMB_AND_SMW_AND_NSMBU =             GameStyles.SMB_AND_SMW_AND_NSMBU
import SMB_AND_SMW_AND_SM3DW =             GameStyles.SMB_AND_SMW_AND_SM3DW
import SMB_AND_SM3DW =                     GameStyles.SMB_AND_SM3DW
import SMB_ONLY =                          GameStyles.SMB_ONLY
import SMB3_AND_NSMBU =                    GameStyles.SMB3_AND_NSMBU
import SMB3_AND_NSMBU_AND_SM3DW =          GameStyles.SMB3_AND_NSMBU_AND_SM3DW
import SMB3_AND_SMW =                      GameStyles.SMB3_AND_SMW
import SMB3_AND_SMW_AND_NSMBU =            GameStyles.SMB3_AND_SMW_AND_NSMBU
import SMB3_AND_SMW_AND_SM3DW =            GameStyles.SMB3_AND_SMW_AND_SM3DW
import SMB3_AND_SM3DW =                    GameStyles.SMB3_AND_SM3DW
import SMB3_ONLY =                         GameStyles.SMB3_ONLY
import SMW_AND_NSMBU =                     GameStyles.SMW_AND_NSMBU
import SMW_AND_NSMBU_AND_SM3DW =           GameStyles.SMW_AND_NSMBU_AND_SM3DW
import SMW_AND_SM3DW =                     GameStyles.SMW_AND_SM3DW
import SMW_ONLY =                          GameStyles.SMW_ONLY
import SMM1 =                              Games.SMM1
import SMM1_AND_3DS =                      Games.SMM1_AND_3DS
import SMM1_AND_2 =                        Games.SMM1_AND_2
import SMM1_ONLY =                         Games.SMM1_ONLY
import SMM2 =                              Games.SMM2
import SMM2_ONLY =                         Games.SMM2_ONLY
import SMM3DS_AND_2 =                      Games.SMM3DS_AND_2
import SMM3DS_ONLY =                       Games.SMM3DS_ONLY
import SM3DW_ONLY =                        GameStyles.SM3DW_ONLY

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

const LIST =  ViewDisplays.SIMPLE_LIST
const CARD =  ViewDisplays.CARD_LIST
const TABLE = ViewDisplays.TABLE

const DAY =   Times.DAY
const NIGHT = Times.NIGHT

const NO_VIEW_DISPLAY = new ViewDisplayCollection(EMPTY_ARRAY,)
const ALL_VIEW_DISPLAY = new ViewDisplayCollection(ViewDisplays.CompanionEnum.get.values,)

const NO_GAMES_COLLECTION = new GameCollection(EMPTY_ARRAY,)
const SMM1_GAMES_COLLECTION = new GameCollection(SMM1_ONLY,)
// const SMM3DS_GAMES_COLLECTION = new GameCollection(SMM3DS_ONLY,)
const SMM2_GAMES_COLLECTION = new GameCollection(SMM2_ONLY,)
const ALL_GAMES_COLLECTION = new GameCollection(ALL_GAMES,)

const NO_GAME_STYLES_COLLECTION = new GameStyleCollection(EMPTY_ARRAY,)
const ALL_GAME_STYLES_COLLECTION = new GameStyleCollection(ALL_GAME_STYLES,)

const NO_TIMES_COLLECTION = new TimeCollection(EMPTY_ARRAY,)
const ALL_TIMES_COLLECTION = new TimeCollection(Times.ALL,)

//region -------------------- Possibility group constants --------------------

// /** Every {@link GameStyles} possibilities applicable to the {@link SMM2} game group */
// const gameStylePossibilitiesWithSmm2 = [
//     [ALL_GAME_STYLES,          'GameStyle=all',       'game-style-all',],
//     [SMB_ONLY,                 'GameStyle=1',         'game-style-1',],
//     [SMB3_ONLY,                'GameStyle=3',         'game-style-3',],
//     [SMW_ONLY,                 'GameStyle=W',         'game-style-w',],
//     [NSMBU_ONLY,               'GameStyle=U',         'game-style-u',],
//     [SM3DW_ONLY,               'GameStyle=3DW',       'game-style-3dw',],
//     [SMB_AND_SMB3,             'GameStyle=1&3',       'game-style-1,3',],
//     [SMB_AND_SMW,              'GameStyle=1&W',       'game-style-1,w',],
//     [SMB_AND_NSMBU,            'GameStyle=1&U',       'game-style-1,u',],
//     [SMB_AND_SM3DW,            'GameStyle=1&3DW',     'game-style-1,3dw',],
//     [SMB3_AND_SMW,             'GameStyle=3&W',       'game-style-3,w',],
//     [SMB3_AND_NSMBU,           'GameStyle=3&U',       'game-style-3,u',],
//     [SMB3_AND_SM3DW,           'GameStyle=3&3DW',     'game-style-3,3dw',],
//     [SMW_AND_NSMBU,            'GameStyle=W&U',       'game-style-w,u',],
//     [SMW_AND_SM3DW,            'GameStyle=W&3DW',     'game-style-w,3dw',],
//     [NSMBU_AND_SM3DW,          'GameStyle=U&3DW',     'game-style-u,3dw',],
//     [SMB_AND_SMB3_AND_SMW,     'GameStyle=1&3&W',     'game-style-1,3,w',],
//     [SMB_AND_SMB3_AND_NSMBU,   'GameStyle=1&3&U',     'game-style-1,3,u',],
//     [SMB_AND_SMB3_AND_SM3DW,   'GameStyle=1&3&3DW',   'game-style-1,3,3dw',],
//     [SMB_AND_SMW_AND_NSMBU,    'GameStyle=1&W&U',     'game-style-1,w,u',],
//     [SMB_AND_SMW_AND_SM3DW,    'GameStyle=1&W&3DW',   'game-style-1,w,3dw',],
//     [SMB_AND_NSMBU_AND_SM3DW,  'GameStyle=1&U&3DW',   'game-style-1,u,3dw',],
//     [SMB3_AND_SMW_AND_NSMBU,   'GameStyle=3&W&U',     'game-style-3,w,u',],
//     [SMB3_AND_SMW_AND_SM3DW,   'GameStyle=3&W&3DW',   'game-style-3,w,3dw',],
//     [SMB3_AND_NSMBU_AND_SM3DW, 'GameStyle=3&U&3DW',   'game-style-3,u,3dw',],
//     [SMW_AND_NSMBU_AND_SM3DW,  'GameStyle=W&U&3DW',   'game-style-w,u,3dw',],
//     [NOT_SM3DW,                'GameStyle=1&3&W&U',   'game-style-1,3,w,u',],
//     [NOT_NSMBU,                'GameStyle=1&3&W&3DW', 'game-style-1,3,w,3dw',],
//     [NOT_SMW,                  'GameStyle=1&3&U&3DW', 'game-style-1,3,u,3dw',],
//     [NOT_SMB3,                 'GameStyle=1&W&U&3DW', 'game-style-1,w,u,3dw',],
//     [NOT_SMB,                  'GameStyle=3&W&U&3DW', 'game-style-3,w,u,3dw',],
// ] as const
// /**
//  * Every {@link GameStyles} possibilities applicable not related to the {@link SMM2} game group.
//  * Meaning, it does not contain the {@link SM3DW} game style.
//  */
// const gameStylePossibilitiesWithNotSmm2 = [
//     [ALL_GAME_STYLES,        'GameStyle=all',     'game-style-all',],
//     [SMB_ONLY,               'GameStyle=1',       'game-style-1',],
//     [SMB3_ONLY,              'GameStyle=3',       'game-style-3',],
//     [SMW_ONLY,               'GameStyle=W',       'game-style-w',],
//     [NSMBU_ONLY,             'GameStyle=U',       'game-style-u',],
//     [SMB_AND_SMB3,           'GameStyle=1&3',     'game-style-1,3',],
//     [SMB_AND_SMW,            'GameStyle=1&W',     'game-style-1,w',],
//     [SMB_AND_NSMBU,          'GameStyle=1&U',     'game-style-1,u',],
//     [SMB3_AND_SMW,           'GameStyle=3&W',     'game-style-3,w',],
//     [SMB3_AND_NSMBU,         'GameStyle=3&U',     'game-style-3,u',],
//     [SMW_AND_NSMBU,          'GameStyle=W&U',     'game-style-w,u',],
//     [SMB_AND_SMB3_AND_SMW,   'GameStyle=1&3&W',   'game-style-1,3,w',],
//     [SMB_AND_SMB3_AND_NSMBU, 'GameStyle=1&3&U',   'game-style-1,3,u',],
//     [SMB_AND_SMW_AND_NSMBU,  'GameStyle=1&W&U',   'game-style-1,w,u',],
//     [SMB3_AND_SMW_AND_NSMBU, 'GameStyle=3&W&U',   'game-style-3,w,u',],
//     [NOT_SM3DW,              'GameStyle=1&3&W&U', 'game-style-1,3,w,u',],
// ] as const
//
// /** Every {@link Games} possibilities */
// const gamePossibilities = [
//     [ALL_GAMES,    'Game=all',   'game-all',   gameStylePossibilitiesWithSmm2,    31,],
//     [SMM1_ONLY,    'Game=1',     'game-1',     gameStylePossibilitiesWithNotSmm2, 16,],
//     [SMM3DS_ONLY,  'Game=3DS',   'game-3ds',   gameStylePossibilitiesWithNotSmm2, 16,],
//     [SMM2_ONLY,    'Game=2',     'game-2',     gameStylePossibilitiesWithSmm2,    31,],
//     [SMM1_AND_3DS, 'Game=1&3DS', 'game-1,3ds', gameStylePossibilitiesWithNotSmm2, 16,],
//     [SMM1_AND_2,   'Game=1&2',   'game-1,2',   gameStylePossibilitiesWithSmm2,    31,],
//     [SMM3DS_AND_2, 'Game=3DS&2', 'game-3ds,2', gameStylePossibilitiesWithSmm2,    31,],
// ] as const

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
export abstract class EveryRoutes<const URL_NAME extends string = string,
    const URL_PATH extends string = string, >
    extends Enum<Ordinals, Names>
    implements ClassUsedInRoute<URL_PATH, URL_NAME> {

    //region -------------------- Sub class --------------------

    /** A representation of an {@link EveryRoutes} instance with nothing in its route. Meaning no {@link ViewDisplays} and no {@link GameCollection}. */
    private static readonly Straight_EveryRoutes = class Straight_EveryRoutes<const URL_NAME extends string,
        const URL_PATH extends string, >
        extends EveryRoutes<URL_NAME, URL_PATH> {

        constructor(name: URL_NAME, path: URL_PATH, routeCallback: NothingRouteCallback,) {
            super(name, path, NO_VIEW_DISPLAY, null, NO_GAMES_COLLECTION, null, NO_GAME_STYLES_COLLECTION, null, NO_TIMES_COLLECTION, null, routeCallback,)
        }


        protected override _createEveryRoutes(): Array<SimpleRoute> {
            return [new SimpleRoute(this.urlName, this.urlValue, null, null, null, this.routeCallback,),]
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
    private static readonly ListCardTable_AnyGame_EveryRoutes = class ListCardTable_AnyGame_EveryRoutes<const URL_NAME extends string,
        const URL_PATH extends string, >
        extends EveryRoutes<URL_NAME, URL_PATH> {

        constructor(name: URL_NAME, path: URL_PATH, defaultViewDisplay: NullOr<ViewDisplays>, routeCallback: RouteCallback,) {
            super(name, path, ALL_VIEW_DISPLAY, defaultViewDisplay ?? TABLE, ALL_GAMES_COLLECTION, SMM2, NO_GAME_STYLES_COLLECTION, null, NO_TIMES_COLLECTION, null, routeCallback,)
        }

        protected override _createEveryRoutes(): Array<SimpleRoute> {
            const name = this.urlName
            const path = this.urlValue
            const routeCallback = this.routeCallback

            return [
                new SimpleRoute(`${name} (list Game=all)`,    `/game-all/list${path}`,    ALL_GAMES,    null, LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1)`,      `/game-1/list${path}`,      SMM1_ONLY,    null, LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS)`,    `/game-3ds/list${path}`,    SMM3DS_ONLY,  null, LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2)`,      `/game-2/list${path}`,      SMM2_ONLY,    null, LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS)`,  `/game-1,3ds/list${path}`,  SMM1_AND_3DS, null, LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2)`,    `/game-1,2/list${path}`,    SMM1_AND_2,   null, LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2)`,  `/game-3ds,2/list${path}`,  SMM3DS_AND_2, null, LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all)`,    `/game-all/card${path}`,    ALL_GAMES,    null, CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1)`,      `/game-1/card${path}`,      SMM1_ONLY,    null, CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS)`,    `/game-3ds/card${path}`,    SMM3DS_ONLY,  null, CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2)`,      `/game-2/card${path}`,      SMM2_ONLY,    null, CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS)`,  `/game-1,3ds/card${path}`,  SMM1_AND_3DS, null, CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2)`,    `/game-1,2/card${path}`,    SMM1_AND_2,   null, CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2)`,  `/game-3ds,2/card${path}`,  SMM3DS_AND_2, null, CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all)`,   `/game-all/table${path}`,   ALL_GAMES,    null, TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1)`,     `/game-1/table${path}`,     SMM1_ONLY,    null, TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS)`,   `/game-3ds/table${path}`,   SMM3DS_ONLY,  null, TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2)`,     `/game-2/table${path}`,     SMM2_ONLY,    null, TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS)`, `/game-1,3ds/table${path}`, SMM1_AND_3DS, null, TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2)`,   `/game-1,2/table${path}`,   SMM1_AND_2,   null, TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2)`, `/game-3ds,2/table${path}`, SMM3DS_AND_2, null, TABLE, routeCallback,),
            ]
        }

        protected override _getPartialPathFromGameStyles() {
            return EMPTY_STRING
        }

    }

    /** A representation of an {@link EveryRoutes} instance with everything in its route ({@link ViewDisplays}, {@link GameCollection} and {@link TimeCollection}) */
    private static readonly ListCardTable_AnyGame_DayNight_EveryRoutes = class ListCardTable_AnyGame_EveryRoutes<const URL_NAME extends string,
        const URL_PATH extends string, >
        extends EveryRoutes<URL_NAME, URL_PATH> {

        constructor(name: URL_NAME, path: URL_PATH, defaultViewDisplay: NullOr<ViewDisplays>, defaultTime: NullOr<Times>, routeCallback: RouteCallback,) {
            super(name, path, ALL_VIEW_DISPLAY, defaultViewDisplay ?? TABLE, ALL_GAMES_COLLECTION, SMM2, NO_GAME_STYLES_COLLECTION, null, ALL_TIMES_COLLECTION, defaultTime ?? null, routeCallback,)
        }

        protected override _createEveryRoutes(): Array<SimpleRoute> {
            const name = this.urlName
            const path = this.urlValue
            const routeCallback = this.routeCallback

            return [
                //region -------------------- Time (all) --------------------

                new SimpleRoute(`${name} (list Game=all, Time=all)`,      `/game-all/time-all/list${path}`,      ALL_GAMES,    null, LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2, Time=all)`,        `/game-2/time-all/list${path}`,        SMM2_ONLY,    null, LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2, Time=all)`,      `/game-1,2/time-all/list${path}`,      SMM1_AND_2,   null, LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2, Time=all)`,    `/game-3ds,2/time-all/list${path}`,    SMM3DS_AND_2, null, LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all, Time=all)`,      `/game-all/time-all/card${path}`,      ALL_GAMES,    null, CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2, Time=all)`,        `/game-2/time-all/card${path}`,        SMM2_ONLY,    null, CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2, Time=all)`,      `/game-1,2/time-all/card${path}`,      SMM1_AND_2,   null, CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2, Time=all)`,    `/game-3ds,2/time-all/card${path}`,    SMM3DS_AND_2, null, CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all, Time=all)`,     `/game-all/time-all/table${path}`,     ALL_GAMES,    null, TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2, Time=all)`,       `/game-2/time-all/table${path}`,       SMM2_ONLY,    null, TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2, Time=all)`,     `/game-1,2/time-all/table${path}`,     SMM1_AND_2,   null, TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2, Time=all)`,   `/game-3ds,2/time-all/table${path}`,   SMM3DS_AND_2, null, TABLE, routeCallback,),

                //endregion -------------------- Time (all) --------------------
                //region -------------------- Time (day) --------------------

                new SimpleRoute(`${name} (list Game=all, Time=day)`,      `/game-all/time-day/list${path}`,      ALL_GAMES,    null, LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1, Time=day)`,        `/game-1/time-day/list${path}`,        SMM1_ONLY,    null, LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS, Time=day)`,      `/game-3ds/time-day/list${path}`,      SMM3DS_ONLY,  null, LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2, Time=day)`,        `/game-2/time-day/list${path}`,        SMM2_ONLY,    null, LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS, Time=day)`,    `/game-1,3ds/time-day/list${path}`,    SMM1_AND_3DS, null, LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2, Time=day)`,      `/game-1,2/time-day/list${path}`,      SMM1_AND_2,   null, LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2, Time=day)`,    `/game-3ds,2/time-day/list${path}`,    SMM3DS_AND_2, null, LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all, Time=day)`,      `/game-all/time-day/card${path}`,      ALL_GAMES,    null, CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1, Time=day)`,        `/game-1/time-day/card${path}`,        SMM1_ONLY,    null, CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS, Time=day)`,      `/game-3ds/time-day/card${path}`,      SMM3DS_ONLY,  null, CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2, Time=day)`,        `/game-2/time-day/card${path}`,        SMM2_ONLY,    null, CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS, Time=day)`,    `/game-1,3ds/time-day/card${path}`,    SMM1_AND_3DS, null, CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2, Time=day)`,      `/game-1,2/time-day/card${path}`,      SMM1_AND_2,   null, CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2, Time=day)`,    `/game-3ds,2/time-day/card${path}`,    SMM3DS_AND_2, null, CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all, Time=day)`,     `/game-all/time-day/table${path}`,     ALL_GAMES,    null, TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1, Time=day)`,       `/game-1/time-day/table${path}`,       SMM1_ONLY,    null, TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS, Time=day)`,     `/game-3ds/time-day/table${path}`,     SMM3DS_ONLY,  null, TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2, Time=day)`,       `/game-2/time-day/table${path}`,       SMM2_ONLY,    null, TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS, Time=day)`,   `/game-1,3ds/time-day/table${path}`,   SMM1_AND_3DS, null, TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2, Time=day)`,     `/game-1,2/time-day/table${path}`,     SMM1_AND_2,   null, TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2, Time=day)`,   `/game-3ds,2/time-day/table${path}`,   SMM3DS_AND_2, null, TABLE, routeCallback,),

                //endregion -------------------- Time (day) --------------------
                //region -------------------- Time (night) --------------------

                new SimpleRoute(`${name} (list Game=all, Time=night)`,    `/game-all/time-night/list${path}`,    ALL_GAMES,    null, LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2, Time=night)`,      `/game-2/time-night/list${path}`,      SMM2_ONLY,    null, LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2, Time=night)`,    `/game-1,2/time-night/list${path}`,    SMM1_AND_2,   null, LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2, Time=night)`,  `/game-3ds,2/time-night/list${path}`,  SMM3DS_AND_2, null, LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all, Time=night)`,    `/game-all/time-night/card${path}`,    ALL_GAMES,    null, CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2, Time=night)`,      `/game-2/time-night/card${path}`,      SMM2_ONLY,    null, CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2, Time=night)`,    `/game-1,2/time-night/card${path}`,    SMM1_AND_2,   null, CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2, Time=night)`,  `/game-3ds,2/time-night/card${path}`,  SMM3DS_AND_2, null, CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all, Time=night)`,   `/game-all/time-night/table${path}`,   ALL_GAMES,    null, TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2, Time=night)`,     `/game-2/time-night/table${path}`,     SMM2_ONLY,    null, TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2, Time=night)`,   `/game-1,2/time-night/table${path}`,   SMM1_AND_2,   null, TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2, Time=night)`, `/game-3ds,2/time-day/table${path}`,   SMM3DS_AND_2, null, TABLE, routeCallback,),

                //endregion -------------------- Time (day) --------------------
            ]
        }

        protected override _getPartialPathFromGameStyles() {
            return EMPTY_STRING
        }

    }

    /** A representation of an {@link EveryRoutes} instance with everything in its route ({@link ViewDisplays}, {@link GameCollection} and {@link GameStyleCollection}) */
    private static readonly ListCardTable_AnyGame_AnyGameStyle_EveryRoutes = class ListCardTable_AnyGames_AnyGameStyle_EveryRoutes<const URL_NAME extends string,
        const URL_PATH extends string, >
        extends EveryRoutes<URL_NAME, URL_PATH> {

        constructor(name: URL_NAME, path: URL_PATH, defaultViewDisplay: NullOr<ViewDisplays>, routeCallback: RouteCallback,) {
            super(name, path, ALL_VIEW_DISPLAY, defaultViewDisplay ?? TABLE, ALL_GAMES_COLLECTION, SMM2, ALL_GAME_STYLES_COLLECTION, ALL_GAME_STYLES, NO_TIMES_COLLECTION, null, routeCallback,)
        }

        protected override _createEveryRoutes(): Array<SimpleRoute> {
            const name = this.urlName
            const path = this.urlValue
            const routeCallback = this.routeCallback

            return [
                //region -------------------- Game style (all) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=all)`,         `/game-all/game-style-all/list${path}`,             ALL_GAMES,    ALL_GAME_STYLES,          LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=all)`,           `/game-1/game-style-all/list${path}`,               SMM1_ONLY,    ALL_GAME_STYLES,          LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=all)`,         `/game-3ds/game-style-all/list${path}`,             SMM3DS_ONLY,  ALL_GAME_STYLES,          LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=all)`,           `/game-2/game-style-all/list${path}`,               SMM2_ONLY,    ALL_GAME_STYLES,          LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=all)`,       `/game-1,3ds/game-style-all/list${path}`,           SMM1_AND_3DS, ALL_GAME_STYLES,          LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=all)`,         `/game-1,2/game-style-all/list${path}`,             SMM1_AND_2,   ALL_GAME_STYLES,          LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=all)`,       `/game-3ds,2/game-style-all/list${path}`,           SMM3DS_AND_2, ALL_GAME_STYLES,          LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=all)`,         `/game-all/game-style-all/card${path}`,             ALL_GAMES,    ALL_GAME_STYLES,          CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=all)`,           `/game-1/game-style-all/card${path}`,               SMM1_ONLY,    ALL_GAME_STYLES,          CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=all)`,         `/game-3ds/game-style-all/card${path}`,             SMM3DS_ONLY,  ALL_GAME_STYLES,          CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=all)`,           `/game-2/game-style-all/card${path}`,               SMM2_ONLY,    ALL_GAME_STYLES,          CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=all)`,       `/game-1,3ds/game-style-all/card${path}`,           SMM1_AND_3DS, ALL_GAME_STYLES,          CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=all)`,         `/game-1,2/game-style-all/card${path}`,             SMM1_AND_2,   ALL_GAME_STYLES,          CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=all)`,       `/game-3ds,2/game-style-all/card${path}`,           SMM3DS_AND_2, ALL_GAME_STYLES,          CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=all)`,        `/game-all/game-style-all/table${path}`,            ALL_GAMES,    ALL_GAME_STYLES,          TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=all)`,          `/game-1/game-style-all/table${path}`,              SMM1_ONLY,    ALL_GAME_STYLES,          TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=all)`,        `/game-3ds/game-style-all/table${path}`,            SMM3DS_ONLY,  ALL_GAME_STYLES,          TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=all)`,          `/game-2/game-style-all/table${path}`,              SMM2_ONLY,    ALL_GAME_STYLES,          TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=all)`,      `/game-1,3ds/game-style-all/table${path}`,          SMM1_AND_3DS, ALL_GAME_STYLES,          TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=all)`,        `/game-1,2/game-style-all/table${path}`,            SMM1_AND_2,   ALL_GAME_STYLES,          TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=all)`,      `/game-3ds,2/game-style-all/table${path}`,          SMM3DS_AND_2, ALL_GAME_STYLES,          TABLE, routeCallback,),

                //endregion -------------------- Game style (all) --------------------

                //region -------------------- Game style (smb) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1)`,           `/game-all/game-style-1/list${path}`,               ALL_GAMES,    SMB_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=1)`,             `/game-1/game-style-1/list${path}`,                 SMM1_ONLY,    SMB_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=1)`,           `/game-3ds/game-style-1/list${path}`,               SMM3DS_ONLY,  SMB_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1)`,             `/game-2/game-style-1/list${path}`,                 SMM2_ONLY,    SMB_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=1)`,         `/game-1,3ds/game-style-1/list${path}`,             SMM1_AND_3DS, SMB_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1)`,           `/game-1,2/game-style-1/list${path}`,               SMM1_AND_2,   SMB_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1)`,         `/game-3ds,2/game-style-1/list${path}`,             SMM3DS_AND_2, SMB_ONLY,                 LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1)`,           `/game-all/game-style-1/card${path}`,               ALL_GAMES,    SMB_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=1)`,             `/game-1/game-style-1/card${path}`,                 SMM1_ONLY,    SMB_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=1)`,           `/game-3ds/game-style-1/card${path}`,               SMM3DS_ONLY,  SMB_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1)`,             `/game-2/game-style-1/card${path}`,                 SMM2_ONLY,    SMB_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=1)`,         `/game-1,3ds/game-style-1/card${path}`,             SMM1_AND_3DS, SMB_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1)`,           `/game-1,2/game-style-1/card${path}`,               SMM1_AND_2,   SMB_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1)`,         `/game-3ds,2/game-style-1/card${path}`,             SMM3DS_AND_2, SMB_ONLY,                 CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1)`,          `/game-all/game-style-1/table${path}`,              ALL_GAMES,    SMB_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=1)`,            `/game-1/game-style-1/table${path}`,                SMM1_ONLY,    SMB_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=1)`,          `/game-3ds/game-style-1/table${path}`,              SMM3DS_ONLY,  SMB_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1)`,            `/game-2/game-style-1/table${path}`,                SMM2_ONLY,    SMB_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=1)`,        `/game-1,3ds/game-style-1/table${path}`,            SMM1_AND_3DS, SMB_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1)`,          `/game-1,2/game-style-1/table${path}`,              SMM1_AND_2,   SMB_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1)`,        `/game-3ds,2/game-style-1/table${path}`,            SMM3DS_AND_2, SMB_ONLY,                 TABLE, routeCallback,),

                //endregion -------------------- Game style (smb) --------------------
                //region -------------------- Game style (smb3) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3)`,           `/game-all/game-style-3/list${path}`,               ALL_GAMES,    SMB3_ONLY,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=3)`,             `/game-1/game-style-3/list${path}`,                 SMM1_ONLY,    SMB3_ONLY,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=3)`,           `/game-3ds/game-style-3/list${path}`,               SMM3DS_ONLY,  SMB3_ONLY,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3)`,             `/game-2/game-style-3/list${path}`,                 SMM2_ONLY,    SMB3_ONLY,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=3)`,         `/game-1,3ds/game-style-3/list${path}`,             SMM1_AND_3DS, SMB3_ONLY,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3)`,           `/game-1,2/game-style-3/list${path}`,               SMM1_AND_2,   SMB3_ONLY,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3)`,         `/game-3ds,2/game-style-3/list${path}`,             SMM3DS_AND_2, SMB3_ONLY,                LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3)`,           `/game-all/game-style-3/card${path}`,               ALL_GAMES,    SMB3_ONLY,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=3)`,             `/game-1/game-style-3/card${path}`,                 SMM1_ONLY,    SMB3_ONLY,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=3)`,           `/game-3ds/game-style-3/card${path}`,               SMM3DS_ONLY,  SMB3_ONLY,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3)`,             `/game-2/game-style-3/card${path}`,                 SMM2_ONLY,    SMB3_ONLY,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=3)`,         `/game-1,3ds/game-style-3/card${path}`,             SMM1_AND_3DS, SMB3_ONLY,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3)`,           `/game-1,2/game-style-3/card${path}`,               SMM1_AND_2,   SMB3_ONLY,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3)`,         `/game-3ds,2/game-style-3/card${path}`,             SMM3DS_AND_2, SMB3_ONLY,                CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3)`,          `/game-all/game-style-3/table${path}`,              ALL_GAMES,    SMB3_ONLY,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=3)`,            `/game-1/game-style-3/table${path}`,                SMM1_ONLY,    SMB3_ONLY,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=3)`,          `/game-3ds/game-style-3/table${path}`,              SMM3DS_ONLY,  SMB3_ONLY,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3)`,            `/game-2/game-style-3/table${path}`,                SMM2_ONLY,    SMB3_ONLY,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=3)`,        `/game-1,3ds/game-style-3/table${path}`,            SMM1_AND_3DS, SMB3_ONLY,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3)`,          `/game-1,2/game-style-3/table${path}`,              SMM1_AND_2,   SMB3_ONLY,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3)`,        `/game-3ds,2/game-style-3/table${path}`,            SMM3DS_AND_2, SMB3_ONLY,                TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3) --------------------
                //region -------------------- Game style (smw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=W)`,           `/game-all/game-style-w/list${path}`,               ALL_GAMES,    SMW_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=W)`,             `/game-1/game-style-w/list${path}`,                 SMM1_ONLY,    SMW_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=W)`,           `/game-3ds/game-style-w/list${path}`,               SMM3DS_ONLY,  SMW_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=W)`,             `/game-2/game-style-w/list${path}`,                 SMM2_ONLY,    SMW_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=W)`,         `/game-1,3ds/game-style-w/list${path}`,             SMM1_AND_3DS, SMW_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=W)`,           `/game-1,2/game-style-w/list${path}`,               SMM1_AND_2,   SMW_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=W)`,         `/game-3ds,2/game-style-w/list${path}`,             SMM3DS_AND_2, SMW_ONLY,                 LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=W)`,           `/game-all/game-style-w/card${path}`,               ALL_GAMES,    SMW_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=W)`,             `/game-1/game-style-w/card${path}`,                 SMM1_ONLY,    SMW_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=W)`,           `/game-3ds/game-style-w/card${path}`,               SMM3DS_ONLY,  SMW_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=W)`,             `/game-2/game-style-w/card${path}`,                 SMM2_ONLY,    SMW_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=W)`,         `/game-1,3ds/game-style-w/card${path}`,             SMM1_AND_3DS, SMW_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=W)`,           `/game-1,2/game-style-w/card${path}`,               SMM1_AND_2,   SMW_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=W)`,         `/game-3ds,2/game-style-w/card${path}`,             SMM3DS_AND_2, SMW_ONLY,                 CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=W)`,          `/game-all/game-style-w/table${path}`,              ALL_GAMES,    SMW_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=W)`,            `/game-1/game-style-w/table${path}`,                SMM1_ONLY,    SMW_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=W)`,          `/game-3ds/game-style-w/table${path}`,              SMM3DS_ONLY,  SMW_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=W)`,            `/game-2/game-style-w/table${path}`,                SMM2_ONLY,    SMW_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=W)`,        `/game-1,3ds/game-style-w/table${path}`,            SMM1_AND_3DS, SMW_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=W)`,          `/game-1,2/game-style-w/table${path}`,              SMM1_AND_2,   SMW_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=W)`,        `/game-3ds,2/game-style-w/table${path}`,            SMM3DS_AND_2, SMW_ONLY,                 TABLE, routeCallback,),

                //endregion -------------------- Game style (smw) --------------------
                //region -------------------- Game style (nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=U)`,           `/game-all/game-style-u/list${path}`,               ALL_GAMES,    NSMBU_ONLY,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=U)`,             `/game-1/game-style-u/list${path}`,                 SMM1_ONLY,    NSMBU_ONLY,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=U)`,           `/game-3ds/game-style-u/list${path}`,               SMM3DS_ONLY,  NSMBU_ONLY,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=U)`,             `/game-2/game-style-u/list${path}`,                 SMM2_ONLY,    NSMBU_ONLY,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=U)`,         `/game-1,3ds/game-style-u/list${path}`,             SMM1_AND_3DS, NSMBU_ONLY,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=U)`,           `/game-1,2/game-style-u/list${path}`,               SMM1_AND_2,   NSMBU_ONLY,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=U)`,         `/game-3ds,2/game-style-u/list${path}`,             SMM3DS_AND_2, NSMBU_ONLY,               LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=U)`,           `/game-all/game-style-u/card${path}`,               ALL_GAMES,    NSMBU_ONLY,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=U)`,             `/game-1/game-style-u/card${path}`,                 SMM1_ONLY,    NSMBU_ONLY,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=U)`,           `/game-3ds/game-style-u/card${path}`,               SMM3DS_ONLY,  NSMBU_ONLY,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=U)`,             `/game-2/game-style-u/card${path}`,                 SMM2_ONLY,    NSMBU_ONLY,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=U)`,         `/game-1,3ds/game-style-u/card${path}`,             SMM1_AND_3DS, NSMBU_ONLY,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=U)`,           `/game-1,2/game-style-u/card${path}`,               SMM1_AND_2,   NSMBU_ONLY,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=U)`,         `/game-3ds,2/game-style-u/card${path}`,             SMM3DS_AND_2, NSMBU_ONLY,               CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=U)`,          `/game-all/game-style-u/table${path}`,              ALL_GAMES,    NSMBU_ONLY,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=U)`,            `/game-1/game-style-u/table${path}`,                SMM1_ONLY,    NSMBU_ONLY,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=U)`,          `/game-3ds/game-style-u/table${path}`,              SMM3DS_ONLY,  NSMBU_ONLY,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=U)`,            `/game-2/game-style-u/table${path}`,                SMM2_ONLY,    NSMBU_ONLY,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=U)`,        `/game-1,3ds/game-style-u/table${path}`,            SMM1_AND_3DS, NSMBU_ONLY,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=U)`,          `/game-1,2/game-style-u/table${path}`,              SMM1_AND_2,   NSMBU_ONLY,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=U)`,        `/game-3ds,2/game-style-u/table${path}`,            SMM3DS_AND_2, NSMBU_ONLY,               TABLE, routeCallback,),

                //endregion -------------------- Game style (nsmbu) --------------------
                //region -------------------- Game style (sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3DW)`,         `/game-all/game-style-3dw/list${path}`,             ALL_GAMES,    SM3DW_ONLY,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3DW)`,           `/game-2/game-style-3dw/list${path}`,               SMM2_ONLY,    SM3DW_ONLY,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3DW)`,         `/game-1,2/game-style-3dw/list${path}`,             SMM1_AND_2,   SM3DW_ONLY,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3DW)`,       `/game-3ds,2/game-style-3dw/list${path}`,           SMM3DS_AND_2, SM3DW_ONLY,               LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3DW)`,         `/game-all/game-style-3dw/card${path}`,             ALL_GAMES,    SM3DW_ONLY,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3DW)`,           `/game-2/game-style-3dw/card${path}`,               SMM2_ONLY,    SM3DW_ONLY,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3DW)`,         `/game-1,2/game-style-3dw/card${path}`,             SMM1_AND_2,   SM3DW_ONLY,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3DW)`,       `/game-3ds,2/game-style-3dw/card${path}`,           SMM3DS_AND_2, SM3DW_ONLY,               CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3DW)`,        `/game-all/game-style-3dw/table${path}`,            ALL_GAMES,    SM3DW_ONLY,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3DW)`,          `/game-2/game-style-3dw/table${path}`,              SMM2_ONLY,    SM3DW_ONLY,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3DW)`,        `/game-1,2/game-style-3dw/table${path}`,            SMM1_AND_2,   SM3DW_ONLY,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3DW)`,      `/game-3ds,2/game-style-3dw/table${path}`,          SMM3DS_AND_2, SM3DW_ONLY,               TABLE, routeCallback,),

                //endregion -------------------- Game style (sm3dw) --------------------

                //region -------------------- Game style (smb + smb3) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&3)`,         `/game-all/game-style-1,3/list${path}`,             ALL_GAMES,    SMB_AND_SMB3,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=1&3)`,           `/game-1/game-style-1,3/list${path}`,               SMM1_ONLY,    SMB_AND_SMB3,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=1&3)`,         `/game-3ds/game-style-1,3/list${path}`,             SMM3DS_ONLY,  SMB_AND_SMB3,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&3)`,           `/game-2/game-style-1,3/list${path}`,               SMM2_ONLY,    SMB_AND_SMB3,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=1&3)`,       `/game-1,3ds/game-style-1,3/list${path}`,           SMM1_AND_3DS, SMB_AND_SMB3,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&3)`,         `/game-1,2/game-style-1,3/list${path}`,             SMM1_AND_2,   SMB_AND_SMB3,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&3)`,       `/game-3ds,2/game-style-1,3/list${path}`,           SMM3DS_AND_2, SMB_AND_SMB3,             LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&3)`,         `/game-all/game-style-1,3/card${path}`,             ALL_GAMES,    SMB_AND_SMB3,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=1&3)`,           `/game-1/game-style-1,3/card${path}`,               SMM1_ONLY,    SMB_AND_SMB3,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=1&3)`,         `/game-3ds/game-style-1,3/card${path}`,             SMM3DS_ONLY,  SMB_AND_SMB3,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&3)`,           `/game-2/game-style-1,3/card${path}`,               SMM2_ONLY,    SMB_AND_SMB3,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=1&3)`,       `/game-1,3ds/game-style-1,3/card${path}`,           SMM1_AND_3DS, SMB_AND_SMB3,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&3)`,         `/game-1,2/game-style-1,3/card${path}`,             SMM1_AND_2,   SMB_AND_SMB3,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&3)`,       `/game-3ds,2/game-style-1,3/card${path}`,           SMM3DS_AND_2, SMB_AND_SMB3,             CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&3)`,        `/game-all/game-style-1,3/table${path}`,            ALL_GAMES,    SMB_AND_SMB3,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=1&3)`,          `/game-1/game-style-1,3/table${path}`,              SMM1_ONLY,    SMB_AND_SMB3,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=1&3)`,        `/game-3ds/game-style-1,3/table${path}`,            SMM3DS_ONLY,  SMB_AND_SMB3,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&3)`,          `/game-2/game-style-1,3/table${path}`,              SMM2_ONLY,    SMB_AND_SMB3,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=1&3)`,      `/game-1,3ds/game-style-1,3/table${path}`,          SMM1_AND_3DS, SMB_AND_SMB3,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&3)`,        `/game-1,2/game-style-1,3/table${path}`,            SMM1_AND_2,   SMB_AND_SMB3,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&3)`,      `/game-3ds,2/game-style-1,3/table${path}`,          SMM3DS_AND_2, SMB_AND_SMB3,             TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3) --------------------
                //region -------------------- Game style (smb + smw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&W)`,         `/game-all/game-style-1,w/list${path}`,             ALL_GAMES,    SMB_AND_SMW,              LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=1&W)`,           `/game-1/game-style-1,w/list${path}`,               SMM1_ONLY,    SMB_AND_SMW,              LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=1&W)`,         `/game-3ds/game-style-1,w/list${path}`,             SMM3DS_ONLY,  SMB_AND_SMW,              LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&W)`,           `/game-2/game-style-1,w/list${path}`,               SMM2_ONLY,    SMB_AND_SMW,              LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&WDS GameStyle=1&W)`,       `/game-1,wds/game-style-1,w/list${path}`,           SMM1_AND_3DS, SMB_AND_SMW,              LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&W)`,         `/game-1,2/game-style-1,w/list${path}`,             SMM1_AND_2,   SMB_AND_SMW,              LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&W)`,       `/game-3ds,2/game-style-1,w/list${path}`,           SMM3DS_AND_2, SMB_AND_SMW,              LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&W)`,         `/game-all/game-style-1,w/card${path}`,             ALL_GAMES,    SMB_AND_SMW,              CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=1&W)`,           `/game-1/game-style-1,w/card${path}`,               SMM1_ONLY,    SMB_AND_SMW,              CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=1&W)`,         `/game-3ds/game-style-1,w/card${path}`,             SMM3DS_ONLY,  SMB_AND_SMW,              CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&W)`,           `/game-2/game-style-1,w/card${path}`,               SMM2_ONLY,    SMB_AND_SMW,              CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&WDS GameStyle=1&W)`,       `/game-1,wds/game-style-1,w/card${path}`,           SMM1_AND_3DS, SMB_AND_SMW,              CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&W)`,         `/game-1,2/game-style-1,w/card${path}`,             SMM1_AND_2,   SMB_AND_SMW,              CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&W)`,       `/game-3ds,2/game-style-1,w/card${path}`,           SMM3DS_AND_2, SMB_AND_SMW,              CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&W)`,        `/game-all/game-style-1,w/table${path}`,            ALL_GAMES,    SMB_AND_SMW,              TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=1&W)`,          `/game-1/game-style-1,w/table${path}`,              SMM1_ONLY,    SMB_AND_SMW,              TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=1&W)`,        `/game-3ds/game-style-1,w/table${path}`,            SMM3DS_ONLY,  SMB_AND_SMW,              TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&W)`,          `/game-2/game-style-1,w/table${path}`,              SMM2_ONLY,    SMB_AND_SMW,              TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&WDS GameStyle=1&W)`,      `/game-1,wds/game-style-1,w/table${path}`,          SMM1_AND_3DS, SMB_AND_SMW,              TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&W)`,        `/game-1,2/game-style-1,w/table${path}`,            SMM1_AND_2,   SMB_AND_SMW,              TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&W)`,      `/game-3ds,2/game-style-1,w/table${path}`,          SMM3DS_AND_2, SMB_AND_SMW,              TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smw) --------------------
                //region -------------------- Game style (smb + nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&U)`,         `/game-all/game-style-1,u/list${path}`,             ALL_GAMES,    SMB_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=1&U)`,           `/game-1/game-style-1,u/list${path}`,               SMM1_ONLY,    SMB_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=1&U)`,         `/game-3ds/game-style-1,u/list${path}`,             SMM3DS_ONLY,  SMB_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&U)`,           `/game-2/game-style-1,u/list${path}`,               SMM2_ONLY,    SMB_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=1&U)`,       `/game-1,3ds/game-style-1,u/list${path}`,           SMM1_AND_3DS, SMB_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&U)`,         `/game-1,2/game-style-1,u/list${path}`,             SMM1_AND_2,   SMB_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&U)`,       `/game-3ds,2/game-style-1,u/list${path}`,           SMM3DS_AND_2, SMB_AND_NSMBU,            LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&U)`,         `/game-all/game-style-1,u/card${path}`,             ALL_GAMES,    SMB_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=1&U)`,           `/game-1/game-style-1,u/card${path}`,               SMM1_ONLY,    SMB_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=1&U)`,         `/game-3ds/game-style-1,u/card${path}`,             SMM3DS_ONLY,  SMB_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&U)`,           `/game-2/game-style-1,u/card${path}`,               SMM2_ONLY,    SMB_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=1&U)`,       `/game-1,3ds/game-style-1,u/card${path}`,           SMM1_AND_3DS, SMB_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&U)`,         `/game-1,2/game-style-1,u/card${path}`,             SMM1_AND_2,   SMB_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&U)`,       `/game-3ds,2/game-style-1,u/card${path}`,           SMM3DS_AND_2, SMB_AND_NSMBU,            CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&U)`,        `/game-all/game-style-1,u/table${path}`,            ALL_GAMES,    SMB_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=1&U)`,          `/game-1/game-style-1,u/table${path}`,              SMM1_ONLY,    SMB_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=1&U)`,        `/game-3ds/game-style-1,u/table${path}`,            SMM3DS_ONLY,  SMB_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&U)`,          `/game-2/game-style-1,u/table${path}`,              SMM2_ONLY,    SMB_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=1&U)`,      `/game-1,3ds/game-style-1,u/table${path}`,          SMM1_AND_3DS, SMB_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&U)`,        `/game-1,2/game-style-1,u/table${path}`,            SMM1_AND_2,   SMB_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&U)`,      `/game-3ds,2/game-style-1,u/table${path}`,          SMM3DS_AND_2, SMB_AND_NSMBU,            TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + nsmbu) --------------------
                //region -------------------- Game style (smb + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&3DW)`,       `/game-all/game-style-1,3dw/list${path}`,           ALL_GAMES,    SMB_AND_SM3DW,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&3DW)`,         `/game-2/game-style-1,3dw/list${path}`,             SMM2_ONLY,    SMB_AND_SM3DW,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&3DW)`,       `/game-1,2/game-style-1,3dw/list${path}`,           SMM1_AND_2,   SMB_AND_SM3DW,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&3DW)`,     `/game-3ds,2/game-style-1,3dw/list${path}`,         SMM3DS_AND_2, SMB_AND_SM3DW,            LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&3DW)`,       `/game-all/game-style-1,3dw/card${path}`,           ALL_GAMES,    SMB_AND_SM3DW,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&3DW)`,         `/game-2/game-style-1,3dw/card${path}`,             SMM2_ONLY,    SMB_AND_SM3DW,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&3DW)`,       `/game-1,2/game-style-1,3dw/card${path}`,           SMM1_AND_2,   SMB_AND_SM3DW,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&3DW)`,     `/game-3ds,2/game-style-1,3dw/card${path}`,         SMM3DS_AND_2, SMB_AND_SM3DW,            CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&3DW)`,      `/game-all/game-style-1,3dw/table${path}`,          ALL_GAMES,    SMB_AND_SM3DW,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&3DW)`,        `/game-2/game-style-1,3dw/table${path}`,            SMM2_ONLY,    SMB_AND_SM3DW,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&3DW)`,      `/game-1,2/game-style-1,3dw/table${path}`,          SMM1_AND_2,   SMB_AND_SM3DW,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&3DW)`,    `/game-3ds,2/game-style-1,3dw/table${path}`,        SMM3DS_AND_2, SMB_AND_SM3DW,            TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + sm3dw) --------------------
                //region -------------------- Game style (smb3 + smw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3&W)`,         `/game-all/game-style-3,w/list${path}`,             ALL_GAMES,    SMB3_AND_SMW,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=3&W)`,           `/game-1/game-style-3,w/list${path}`,               SMM1_ONLY,    SMB3_AND_SMW,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=3&W)`,         `/game-3ds/game-style-3,w/list${path}`,             SMM3DS_ONLY,  SMB3_AND_SMW,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3&W)`,           `/game-2/game-style-3,w/list${path}`,               SMM2_ONLY,    SMB3_AND_SMW,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3&WDS GameStyle=3&W)`,       `/game-3,wds/game-style-3,w/list${path}`,           SMM1_AND_3DS, SMB3_AND_SMW,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3&W)`,         `/game-1,2/game-style-3,w/list${path}`,             SMM1_AND_2,   SMB3_AND_SMW,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3&W)`,       `/game-3ds,2/game-style-3,w/list${path}`,           SMM3DS_AND_2, SMB3_AND_SMW,             LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3&W)`,         `/game-all/game-style-3,w/card${path}`,             ALL_GAMES,    SMB3_AND_SMW,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=3&W)`,           `/game-1/game-style-3,w/card${path}`,               SMM1_ONLY,    SMB3_AND_SMW,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=3&W)`,         `/game-3ds/game-style-3,w/card${path}`,             SMM3DS_ONLY,  SMB3_AND_SMW,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3&W)`,           `/game-2/game-style-3,w/card${path}`,               SMM2_ONLY,    SMB3_AND_SMW,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3&WDS GameStyle=3&W)`,       `/game-3,wds/game-style-3,w/card${path}`,           SMM1_AND_3DS, SMB3_AND_SMW,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3&W)`,         `/game-1,2/game-style-3,w/card${path}`,             SMM1_AND_2,   SMB3_AND_SMW,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3&W)`,       `/game-3ds,2/game-style-3,w/card${path}`,           SMM3DS_AND_2, SMB3_AND_SMW,             CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3&W)`,        `/game-all/game-style-3,w/table${path}`,            ALL_GAMES,    SMB3_AND_SMW,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=3&W)`,          `/game-1/game-style-3,w/table${path}`,              SMM1_ONLY,    SMB3_AND_SMW,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=3&W)`,        `/game-3ds/game-style-3,w/table${path}`,            SMM3DS_ONLY,  SMB3_AND_SMW,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3&W)`,          `/game-2/game-style-3,w/table${path}`,              SMM2_ONLY,    SMB3_AND_SMW,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3&WDS GameStyle=3&W)`,      `/game-3,wds/game-style-3,w/table${path}`,          SMM1_AND_3DS, SMB3_AND_SMW,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3&W)`,        `/game-1,2/game-style-3,w/table${path}`,            SMM1_AND_2,   SMB3_AND_SMW,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3&W)`,      `/game-3ds,2/game-style-3,w/table${path}`,          SMM3DS_AND_2, SMB3_AND_SMW,             TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + smw) --------------------
                //region -------------------- Game style (smb3 + nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3&U)`,         `/game-all/game-style-3,u/list${path}`,             ALL_GAMES,    SMB3_AND_NSMBU,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=3&U)`,           `/game-1/game-style-3,u/list${path}`,               SMM1_ONLY,    SMB3_AND_NSMBU,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=3&U)`,         `/game-3ds/game-style-3,u/list${path}`,             SMM3DS_ONLY,  SMB3_AND_NSMBU,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3&U)`,           `/game-2/game-style-3,u/list${path}`,               SMM2_ONLY,    SMB3_AND_NSMBU,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=3&U)`,       `/game-3,3ds/game-style-3,u/list${path}`,           SMM1_AND_3DS, SMB3_AND_NSMBU,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3&U)`,         `/game-3,2/game-style-3,u/list${path}`,             SMM1_AND_2,   SMB3_AND_NSMBU,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3&U)`,       `/game-3ds,2/game-style-3,u/list${path}`,           SMM3DS_AND_2, SMB3_AND_NSMBU,           LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3&U)`,         `/game-all/game-style-3,u/card${path}`,             ALL_GAMES,    SMB3_AND_NSMBU,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=3&U)`,           `/game-1/game-style-3,u/card${path}`,               SMM1_ONLY,    SMB3_AND_NSMBU,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=3&U)`,         `/game-3ds/game-style-3,u/card${path}`,             SMM3DS_ONLY,  SMB3_AND_NSMBU,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3&U)`,           `/game-2/game-style-3,u/card${path}`,               SMM2_ONLY,    SMB3_AND_NSMBU,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=3&U)`,       `/game-3,3ds/game-style-3,u/card${path}`,           SMM1_AND_3DS, SMB3_AND_NSMBU,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3&U)`,         `/game-3,2/game-style-3,u/card${path}`,             SMM1_AND_2,   SMB3_AND_NSMBU,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3&U)`,       `/game-3ds,2/game-style-3,u/card${path}`,           SMM3DS_AND_2, SMB3_AND_NSMBU,           CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3&U)`,        `/game-all/game-style-3,u/table${path}`,            ALL_GAMES,    SMB3_AND_NSMBU,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=3&U)`,          `/game-1/game-style-3,u/table${path}`,              SMM1_ONLY,    SMB3_AND_NSMBU,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=3&U)`,        `/game-3ds/game-style-3,u/table${path}`,            SMM3DS_ONLY,  SMB3_AND_NSMBU,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3&U)`,          `/game-2/game-style-3,u/table${path}`,              SMM2_ONLY,    SMB3_AND_NSMBU,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=3&U)`,      `/game-3,3ds/game-style-3,u/table${path}`,          SMM1_AND_3DS, SMB3_AND_NSMBU,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3&U)`,        `/game-3,2/game-style-3,u/table${path}`,            SMM1_AND_2,   SMB3_AND_NSMBU,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3&U)`,      `/game-3ds,2/game-style-3,u/table${path}`,          SMM3DS_AND_2, SMB3_AND_NSMBU,           TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + nsmbu) --------------------
                //region -------------------- Game style (smb3 + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3&3DW)`,       `/game-all/game-style-3,3dw/list${path}`,           ALL_GAMES,    SMB3_AND_SM3DW,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3&3DW)`,         `/game-2/game-style-3,3dw/list${path}`,             SMM2_ONLY,    SMB3_AND_SM3DW,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3&3DW)`,       `/game-3,2/game-style-3,3dw/list${path}`,           SMM1_AND_2,   SMB3_AND_SM3DW,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3&3DW)`,     `/game-3ds,2/game-style-3,3dw/list${path}`,         SMM3DS_AND_2, SMB3_AND_SM3DW,           LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3&3DW)`,       `/game-all/game-style-3,3dw/card${path}`,           ALL_GAMES,    SMB3_AND_SM3DW,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3&3DW)`,         `/game-2/game-style-3,3dw/card${path}`,             SMM2_ONLY,    SMB3_AND_SM3DW,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3&3DW)`,       `/game-3,2/game-style-3,3dw/card${path}`,           SMM1_AND_2,   SMB3_AND_SM3DW,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3&3DW)`,     `/game-3ds,2/game-style-3,3dw/card${path}`,         SMM3DS_AND_2, SMB3_AND_SM3DW,           CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3&3DW)`,      `/game-all/game-style-3,3dw/table${path}`,          ALL_GAMES,    SMB3_AND_SM3DW,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3&3DW)`,        `/game-2/game-style-3,3dw/table${path}`,            SMM2_ONLY,    SMB3_AND_SM3DW,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3&3DW)`,      `/game-3,2/game-style-3,3dw/table${path}`,          SMM1_AND_2,   SMB3_AND_SM3DW,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3&3DW)`,    `/game-3ds,2/game-style-3,3dw/table${path}`,        SMM3DS_AND_2, SMB3_AND_SM3DW,           TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + sm3dw) --------------------
                //region -------------------- Game style (smw + nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=W&U)`,         `/game-all/game-style-w,u/list${path}`,             ALL_GAMES,    SMW_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=W&U)`,           `/game-1/game-style-w,u/list${path}`,               SMM1_ONLY,    SMW_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=W&U)`,         `/game-3ds/game-style-w,u/list${path}`,             SMM3DS_ONLY,  SMW_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=W&U)`,           `/game-2/game-style-w,u/list${path}`,               SMM2_ONLY,    SMW_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=W&U)`,       `/game-1,3ds/game-style-w,u/list${path}`,           SMM1_AND_3DS, SMW_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=W&U)`,         `/game-1,2/game-style-w,u/list${path}`,             SMM1_AND_2,   SMW_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=W&U)`,       `/game-3ds,2/game-style-w,u/list${path}`,           SMM3DS_AND_2, SMW_AND_NSMBU,            LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=W&U)`,         `/game-all/game-style-w,u/card${path}`,             ALL_GAMES,    SMW_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=W&U)`,           `/game-1/game-style-w,u/card${path}`,               SMM1_ONLY,    SMW_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=W&U)`,         `/game-3ds/game-style-w,u/card${path}`,             SMM3DS_ONLY,  SMW_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=W&U)`,           `/game-2/game-style-w,u/card${path}`,               SMM2_ONLY,    SMW_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=W&U)`,       `/game-1,3ds/game-style-w,u/card${path}`,           SMM1_AND_3DS, SMW_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=W&U)`,         `/game-1,2/game-style-w,u/card${path}`,             SMM1_AND_2,   SMW_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=W&U)`,       `/game-3ds,2/game-style-w,u/card${path}`,           SMM3DS_AND_2, SMW_AND_NSMBU,            CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=W&U)`,        `/game-all/game-style-w,u/table${path}`,            ALL_GAMES,    SMW_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=W&U)`,          `/game-1/game-style-w,u/table${path}`,              SMM1_ONLY,    SMW_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=W&U)`,        `/game-3ds/game-style-w,u/table${path}`,            SMM3DS_ONLY,  SMW_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=W&U)`,          `/game-2/game-style-w,u/table${path}`,              SMM2_ONLY,    SMW_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=W&U)`,      `/game-1,3ds/game-style-w,u/table${path}`,          SMM1_AND_3DS, SMW_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=W&U)`,        `/game-1,2/game-style-w,u/table${path}`,            SMM1_AND_2,   SMW_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=W&U)`,      `/game-3ds,2/game-style-w,u/table${path}`,          SMM3DS_AND_2, SMW_AND_NSMBU,            TABLE, routeCallback,),

                //endregion -------------------- Game style (smw + nsmbu) --------------------
                //region -------------------- Game style (smw + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=W&3DW)`,       `/game-all/game-style-w,3dw/list${path}`,           ALL_GAMES,    SMW_AND_SM3DW,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=W&3DW)`,         `/game-2/game-style-w,3dw/list${path}`,             SMM2_ONLY,    SMW_AND_SM3DW,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=W&3DW)`,       `/game-1,2/game-style-w,3dw/list${path}`,           SMM1_AND_2,   SMW_AND_SM3DW,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=W&3DW)`,     `/game-3ds,2/game-style-w,3dw/list${path}`,         SMM3DS_AND_2, SMW_AND_SM3DW,            LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=W&3DW)`,       `/game-all/game-style-w,3dw/card${path}`,           ALL_GAMES,    SMW_AND_SM3DW,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=W&3DW)`,         `/game-2/game-style-w,3dw/card${path}`,             SMM2_ONLY,    SMW_AND_SM3DW,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=W&3DW)`,       `/game-1,2/game-style-w,3dw/card${path}`,           SMM1_AND_2,   SMW_AND_SM3DW,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=W&3DW)`,     `/game-3ds,2/game-style-w,3dw/card${path}`,         SMM3DS_AND_2, SMW_AND_SM3DW,            CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=W&3DW)`,      `/game-all/game-style-w,3dw/table${path}`,          ALL_GAMES,    SMW_AND_SM3DW,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=W&3DW)`,        `/game-2/game-style-w,3dw/table${path}`,            SMM2_ONLY,    SMW_AND_SM3DW,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=W&3DW)`,      `/game-1,2/game-style-w,3dw/table${path}`,          SMM1_AND_2,   SMW_AND_SM3DW,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=W&3DW)`,    `/game-3ds,2/game-style-w,3dw/table${path}`,        SMM3DS_AND_2, SMW_AND_SM3DW,            TABLE, routeCallback,),

                //endregion -------------------- Game style (smw + sm3dw) --------------------
                //region -------------------- Game style (nsmbu + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=U&3DW)`,       `/game-all/game-style-u,3dw/list${path}`,           ALL_GAMES,    NSMBU_AND_SM3DW,          LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=U&3DW)`,         `/game-2/game-style-u,3dw/list${path}`,             SMM2_ONLY,    NSMBU_AND_SM3DW,          LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=U&3DW)`,       `/game-1,2/game-style-u,3dw/list${path}`,           SMM1_AND_2,   NSMBU_AND_SM3DW,          LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=U&3DW)`,     `/game-3ds,2/game-style-u,3dw/list${path}`,         SMM3DS_AND_2, NSMBU_AND_SM3DW,          LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=U&3DW)`,       `/game-all/game-style-u,3dw/card${path}`,           ALL_GAMES,    NSMBU_AND_SM3DW,          CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=U&3DW)`,         `/game-2/game-style-u,3dw/card${path}`,             SMM2_ONLY,    NSMBU_AND_SM3DW,          CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=U&3DW)`,       `/game-1,2/game-style-u,3dw/card${path}`,           SMM1_AND_2,   NSMBU_AND_SM3DW,          CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=U&3DW)`,     `/game-3ds,2/game-style-u,3dw/card${path}`,         SMM3DS_AND_2, NSMBU_AND_SM3DW,          CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=U&3DW)`,      `/game-all/game-style-u,3dw/table${path}`,          ALL_GAMES,    NSMBU_AND_SM3DW,          TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=U&3DW)`,        `/game-2/game-style-u,3dw/table${path}`,            SMM2_ONLY,    NSMBU_AND_SM3DW,          TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=U&3DW)`,      `/game-1,2/game-style-u,3dw/table${path}`,          SMM1_AND_2,   NSMBU_AND_SM3DW,          TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=U&3DW)`,    `/game-3ds,2/game-style-u,3dw/table${path}`,        SMM3DS_AND_2, NSMBU_AND_SM3DW,          TABLE, routeCallback,),

                //endregion -------------------- Game style (nsmbu + sm3dw) --------------------

                //region -------------------- Game style (smb + smb3 + smw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&3&W)`,       `/game-all/game-style-1,3,w/list${path}`,           ALL_GAMES,    SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=1&3&W)`,         `/game-1/game-style-1,3,w/list${path}`,             SMM1_ONLY,    SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=1&3&W)`,       `/game-3ds/game-style-1,3,w/list${path}`,           SMM3DS_ONLY,  SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&3&W)`,         `/game-2/game-style-1,3,w/list${path}`,             SMM2_ONLY,    SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=1&3&W)`,     `/game-1,3ds/game-style-1,3,w/list${path}`,         SMM1_AND_3DS, SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&3&W)`,       `/game-1,2/game-style-1,3,w/list${path}`,           SMM1_AND_2,   SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&3&W)`,     `/game-3ds,2/game-style-1,3,w/list${path}`,         SMM3DS_AND_2, SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&3&W)`,       `/game-all/game-style-1,3,w/card${path}`,           ALL_GAMES,    SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=1&3&W)`,         `/game-1/game-style-1,3,w/card${path}`,             SMM1_ONLY,    SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=1&3&W)`,       `/game-3ds/game-style-1,3,w/card${path}`,           SMM3DS_ONLY,  SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&3&W)`,         `/game-2/game-style-1,3,w/card${path}`,             SMM2_ONLY,    SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=1&3&W)`,     `/game-1,3ds/game-style-1,3,w/card${path}`,         SMM1_AND_3DS, SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&3&W)`,       `/game-1,2/game-style-1,3,w/card${path}`,           SMM1_AND_2,   SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&3&W)`,     `/game-3ds,2/game-style-1,3,w/card${path}`,         SMM3DS_AND_2, SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&3&W)`,      `/game-all/game-style-1,3,w/table${path}`,          ALL_GAMES,    SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=1&3&W)`,        `/game-1/game-style-1,3,w/table${path}`,            SMM1_ONLY,    SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=1&3&W)`,      `/game-3ds/game-style-1,3,w/table${path}`,          SMM3DS_ONLY,  SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&3&W)`,        `/game-2/game-style-1,3,w/table${path}`,            SMM2_ONLY,    SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=1&3&W)`,    `/game-1,3ds/game-style-1,3,w/table${path}`,        SMM1_AND_3DS, SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&3&W)`,      `/game-1,2/game-style-1,3,w/table${path}`,          SMM1_AND_2,   SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&3&W)`,    `/game-3ds,2/game-style-1,3,w/table${path}`,        SMM3DS_AND_2, SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + smw) --------------------
                //region -------------------- Game style (smb + smb3 + nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&3&U)`,       `/game-all/game-style-1,3,u/list${path}`,           ALL_GAMES,    SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=1&3&U)`,         `/game-1/game-style-1,3,u/list${path}`,             SMM1_ONLY,    SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=1&3&U)`,       `/game-3ds/game-style-1,3,u/list${path}`,           SMM3DS_ONLY,  SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&3&U)`,         `/game-2/game-style-1,3,u/list${path}`,             SMM2_ONLY,    SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=1&3&U)`,     `/game-1,3ds/game-style-1,3,u/list${path}`,         SMM1_AND_3DS, SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&3&U)`,       `/game-1,2/game-style-1,3,u/list${path}`,           SMM1_AND_2,   SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&3&U)`,     `/game-3ds,2/game-style-1,3,u/list${path}`,         SMM3DS_AND_2, SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&3&U)`,       `/game-all/game-style-1,3,u/card${path}`,           ALL_GAMES,    SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=1&3&U)`,         `/game-1/game-style-1,3,u/card${path}`,             SMM1_ONLY,    SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=1&3&U)`,       `/game-3ds/game-style-1,3,u/card${path}`,           SMM3DS_ONLY,  SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&3&U)`,         `/game-2/game-style-1,3,u/card${path}`,             SMM2_ONLY,    SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=1&3&U)`,     `/game-1,3ds/game-style-1,3,u/card${path}`,         SMM1_AND_3DS, SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&3&U)`,       `/game-1,2/game-style-1,3,u/card${path}`,           SMM1_AND_2,   SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&3&U)`,     `/game-3ds,2/game-style-1,3,u/card${path}`,         SMM3DS_AND_2, SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&3&U)`,      `/game-all/game-style-1,3,u/table${path}`,          ALL_GAMES,    SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=1&3&U)`,        `/game-1/game-style-1,3,u/table${path}`,            SMM1_ONLY,    SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=1&3&U)`,      `/game-3ds/game-style-1,3,u/table${path}`,          SMM3DS_ONLY,  SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&3&U)`,        `/game-2/game-style-1,3,u/table${path}`,            SMM2_ONLY,    SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=1&3&U)`,    `/game-1,3ds/game-style-1,3,u/table${path}`,        SMM1_AND_3DS, SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&3&U)`,      `/game-1,2/game-style-1,3,u/table${path}`,          SMM1_AND_2,   SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&3&U)`,    `/game-3ds,2/game-style-1,3,u/table${path}`,        SMM3DS_AND_2, SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + nsmbu) --------------------
                //region -------------------- Game style (smb + smb3 + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&3&3DW)`,     `/game-all/game-style-1,3,3dw/list${path}`,         ALL_GAMES,    SMB_AND_SMB3_AND_SM3DW,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&3&3DW)`,       `/game-2/game-style-1,3,3dw/list${path}`,           SMM2_ONLY,    SMB_AND_SMB3_AND_SM3DW,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&3&3DW)`,     `/game-1,2/game-style-1,3,3dw/list${path}`,         SMM1_AND_2,   SMB_AND_SMB3_AND_SM3DW,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&3&3DW)`,   `/game-3ds,2/game-style-1,3,3dw/list${path}`,       SMM3DS_AND_2, SMB_AND_SMB3_AND_SM3DW,   LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&3&3DW)`,     `/game-all/game-style-1,3,3dw/card${path}`,         ALL_GAMES,    SMB_AND_SMB3_AND_SM3DW,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&3&3DW)`,       `/game-2/game-style-1,3,3dw/card${path}`,           SMM2_ONLY,    SMB_AND_SMB3_AND_SM3DW,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&3&3DW)`,     `/game-1,2/game-style-1,3,3dw/card${path}`,         SMM1_AND_2,   SMB_AND_SMB3_AND_SM3DW,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&3&3DW)`,   `/game-3ds,2/game-style-1,3,3dw/card${path}`,       SMM3DS_AND_2, SMB_AND_SMB3_AND_SM3DW,   CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&3&3DW)`,    `/game-all/game-style-1,3,3dw/table${path}`,        ALL_GAMES,    SMB_AND_SMB3_AND_SM3DW,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&3&3DW)`,      `/game-2/game-style-1,3,3dw/table${path}`,          SMM2_ONLY,    SMB_AND_SMB3_AND_SM3DW,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&3&3DW)`,    `/game-1,2/game-style-1,3,3dw/table${path}`,        SMM1_AND_2,   SMB_AND_SMB3_AND_SM3DW,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&3&3DW)`,  `/game-3ds,2/game-style-1,3,3dw/table${path}`,      SMM3DS_AND_2, SMB_AND_SMB3_AND_SM3DW,   TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + sm3dw) --------------------
                //region -------------------- Game style (smb + smw + nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&W&U)`,       `/game-all/game-style-1,w,u/list${path}`,           ALL_GAMES,    SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=1&W&U)`,         `/game-1/game-style-1,w,u/list${path}`,             SMM1_ONLY,    SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=1&W&U)`,       `/game-3ds/game-style-1,w,u/list${path}`,           SMM3DS_ONLY,  SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&W&U)`,         `/game-2/game-style-1,w,u/list${path}`,             SMM2_ONLY,    SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=1&W&U)`,     `/game-1,3ds/game-style-1,w,u/list${path}`,         SMM1_AND_3DS, SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&W&U)`,       `/game-1,2/game-style-1,w,u/list${path}`,           SMM1_AND_2,   SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&W&U)`,     `/game-3ds,2/game-style-1,w,u/list${path}`,         SMM3DS_AND_2, SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&W&U)`,       `/game-all/game-style-1,w,u/card${path}`,           ALL_GAMES,    SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=1&W&U)`,         `/game-1/game-style-1,w,u/card${path}`,             SMM1_ONLY,    SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=1&W&U)`,       `/game-3ds/game-style-1,w,u/card${path}`,           SMM3DS_ONLY,  SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&W&U)`,         `/game-2/game-style-1,w,u/card${path}`,             SMM2_ONLY,    SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=1&W&U)`,     `/game-1,3ds/game-style-1,w,u/card${path}`,         SMM1_AND_3DS, SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&W&U)`,       `/game-1,2/game-style-1,w,u/card${path}`,           SMM1_AND_2,   SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&W&U)`,     `/game-3ds,2/game-style-1,w,u/card${path}`,         SMM3DS_AND_2, SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&W&U)`,      `/game-all/game-style-1,w,u/table${path}`,          ALL_GAMES,    SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=1&W&U)`,        `/game-1/game-style-1,w,u/table${path}`,            SMM1_ONLY,    SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=1&W&U)`,      `/game-3ds/game-style-1,w,u/table${path}`,          SMM3DS_ONLY,  SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&W&U)`,        `/game-2/game-style-1,w,u/table${path}`,            SMM2_ONLY,    SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=1&W&U)`,    `/game-1,3ds/game-style-1,w,u/table${path}`,        SMM1_AND_3DS, SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&W&U)`,      `/game-1,2/game-style-1,w,u/table${path}`,          SMM1_AND_2,   SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&W&U)`,    `/game-3ds,2/game-style-1,w,u/table${path}`,        SMM3DS_AND_2, SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smw + nsmbu) --------------------
                //region -------------------- Game style (smb + smw + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&W&3DW)`,     `/game-all/game-style-1,w,3dw/list${path}`,         ALL_GAMES,    SMB_AND_SMW_AND_SM3DW,    LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&W&3DW)`,       `/game-2/game-style-1,w,3dw/list${path}`,           SMM2_ONLY,    SMB_AND_SMW_AND_SM3DW,    LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&W&3DW)`,     `/game-1,2/game-style-1,w,3dw/list${path}`,         SMM1_AND_2,   SMB_AND_SMW_AND_SM3DW,    LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&W&3DW)`,   `/game-3ds,2/game-style-1,w,3dw/list${path}`,       SMM3DS_AND_2, SMB_AND_SMW_AND_SM3DW,    LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&W&3DW)`,     `/game-all/game-style-1,w,3dw/card${path}`,         ALL_GAMES,    SMB_AND_SMW_AND_SM3DW,    CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&W&3DW)`,       `/game-2/game-style-1,w,3dw/card${path}`,           SMM2_ONLY,    SMB_AND_SMW_AND_SM3DW,    CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&W&3DW)`,     `/game-1,2/game-style-1,w,3dw/card${path}`,         SMM1_AND_2,   SMB_AND_SMW_AND_SM3DW,    CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&W&3DW)`,   `/game-3ds,2/game-style-1,w,3dw/card${path}`,       SMM3DS_AND_2, SMB_AND_SMW_AND_SM3DW,    CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&W&3DW)`,    `/game-all/game-style-1,w,3dw/table${path}`,        ALL_GAMES,    SMB_AND_SMW_AND_SM3DW,    TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&W&3DW)`,      `/game-2/game-style-1,w,3dw/table${path}`,          SMM2_ONLY,    SMB_AND_SMW_AND_SM3DW,    TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&W&3DW)`,    `/game-1,2/game-style-1,w,3dw/table${path}`,        SMM1_AND_2,   SMB_AND_SMW_AND_SM3DW,    TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&W&3DW)`,  `/game-3ds,2/game-style-1,w,3dw/table${path}`,      SMM3DS_AND_2, SMB_AND_SMW_AND_SM3DW,    TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smw + sm3dw) --------------------
                //region -------------------- Game style (smb + nsmbu + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&U&3DW)`,     `/game-all/game-style-1,u,3dw/list${path}`,         ALL_GAMES,    SMB_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&U&3DW)`,       `/game-2/game-style-1,u,3dw/list${path}`,           SMM2_ONLY,    SMB_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&U&3DW)`,     `/game-1,2/game-style-1,u,3dw/list${path}`,         SMM1_AND_2,   SMB_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&U&3DW)`,   `/game-3ds,2/game-style-1,u,3dw/list${path}`,       SMM3DS_AND_2, SMB_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&U&3DW)`,     `/game-all/game-style-1,u,3dw/card${path}`,         ALL_GAMES,    SMB_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&U&3DW)`,       `/game-2/game-style-1,u,3dw/card${path}`,           SMM2_ONLY,    SMB_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&U&3DW)`,     `/game-1,2/game-style-1,u,3dw/card${path}`,         SMM1_AND_2,   SMB_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&U&3DW)`,   `/game-3ds,2/game-style-1,u,3dw/card${path}`,       SMM3DS_AND_2, SMB_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&U&3DW)`,    `/game-all/game-style-1,u,3dw/table${path}`,        ALL_GAMES,    SMB_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&U&3DW)`,      `/game-2/game-style-1,u,3dw/table${path}`,          SMM2_ONLY,    SMB_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&U&3DW)`,    `/game-1,2/game-style-1,u,3dw/table${path}`,        SMM1_AND_2,   SMB_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&U&3DW)`,  `/game-3ds,2/game-style-1,u,3dw/table${path}`,      SMM3DS_AND_2, SMB_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + nsmbu + sm3dw) --------------------
                //region -------------------- Game style (smb3 + smw + nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3&W&U)`,       `/game-all/game-style-3,w,u/list${path}`,           ALL_GAMES,    SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=3&W&U)`,         `/game-1/game-style-3,w,u/list${path}`,             SMM1_ONLY,    SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=3&W&U)`,       `/game-3ds/game-style-3,w,u/list${path}`,           SMM3DS_ONLY,  SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3&W&U)`,         `/game-2/game-style-3,w,u/list${path}`,             SMM2_ONLY,    SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=3&W&U)`,     `/game-1,3ds/game-style-3,w,u/list${path}`,         SMM1_AND_3DS, SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3&W&U)`,       `/game-1,2/game-style-3,w,u/list${path}`,           SMM1_AND_2,   SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3&W&U)`,     `/game-3ds,2/game-style-3,w,u/list${path}`,         SMM3DS_AND_2, SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3&W&U)`,       `/game-all/game-style-3,w,u/card${path}`,           ALL_GAMES,    SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=3&W&U)`,         `/game-1/game-style-3,w,u/card${path}`,             SMM1_ONLY,    SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=3&W&U)`,       `/game-3ds/game-style-3,w,u/card${path}`,           SMM3DS_ONLY,  SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3&W&U)`,         `/game-2/game-style-3,w,u/card${path}`,             SMM2_ONLY,    SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=3&W&U)`,     `/game-1,3ds/game-style-3,w,u/card${path}`,         SMM1_AND_3DS, SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3&W&U)`,       `/game-1,2/game-style-3,w,u/card${path}`,           SMM1_AND_2,   SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3&W&U)`,     `/game-3ds,2/game-style-3,w,u/card${path}`,         SMM3DS_AND_2, SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3&W&U)`,      `/game-all/game-style-3,w,u/table${path}`,          ALL_GAMES,    SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=3&W&U)`,        `/game-1/game-style-3,w,u/table${path}`,            SMM1_ONLY,    SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=3&W&U)`,      `/game-3ds/game-style-3,w,u/table${path}`,          SMM3DS_ONLY,  SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3&W&U)`,        `/game-2/game-style-3,w,u/table${path}`,            SMM2_ONLY,    SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=3&W&U)`,    `/game-1,3ds/game-style-3,w,u/table${path}`,        SMM1_AND_3DS, SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3&W&U)`,      `/game-1,2/game-style-3,w,u/table${path}`,          SMM1_AND_2,   SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3&W&U)`,    `/game-3ds,2/game-style-3,w,u/table${path}`,        SMM3DS_AND_2, SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + smw + nsmbu) --------------------
                //region -------------------- Game style (smb3 + smw + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3&W&3DW)`,     `/game-all/game-style-3,w,3dw/list${path}`,         ALL_GAMES,    SMB3_AND_SMW_AND_SM3DW,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3&W&3DW)`,       `/game-2/game-style-3,w,3dw/list${path}`,           SMM2_ONLY,    SMB3_AND_SMW_AND_SM3DW,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3&W&3DW)`,     `/game-1,2/game-style-3,w,3dw/list${path}`,         SMM1_AND_2,   SMB3_AND_SMW_AND_SM3DW,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3&W&3DW)`,   `/game-3ds,2/game-style-3,w,3dw/list${path}`,       SMM3DS_AND_2, SMB3_AND_SMW_AND_SM3DW,   LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3&W&3DW)`,     `/game-all/game-style-3,w,3dw/card${path}`,         ALL_GAMES,    SMB3_AND_SMW_AND_SM3DW,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3&W&3DW)`,       `/game-2/game-style-3,w,3dw/card${path}`,           SMM2_ONLY,    SMB3_AND_SMW_AND_SM3DW,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3&W&3DW)`,     `/game-1,2/game-style-3,w,3dw/card${path}`,         SMM1_AND_2,   SMB3_AND_SMW_AND_SM3DW,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3&W&3DW)`,   `/game-3ds,2/game-style-3,w,3dw/card${path}`,       SMM3DS_AND_2, SMB3_AND_SMW_AND_SM3DW,   CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3&W&3DW)`,    `/game-all/game-style-3,w,3dw/table${path}`,        ALL_GAMES,    SMB3_AND_SMW_AND_SM3DW,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3&W&3DW)`,      `/game-2/game-style-3,w,3dw/table${path}`,          SMM2_ONLY,    SMB3_AND_SMW_AND_SM3DW,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3&W&3DW)`,    `/game-1,2/game-style-3,w,3dw/table${path}`,        SMM1_AND_2,   SMB3_AND_SMW_AND_SM3DW,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3&W&3DW)`,  `/game-3ds,2/game-style-3,w,3dw/table${path}`,      SMM3DS_AND_2, SMB3_AND_SMW_AND_SM3DW,   TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + smw + sm3dw) --------------------
                //region -------------------- Game style (smb3 + nsmbu + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3&U&3DW)`,     `/game-all/game-style-3,u,3dw/list${path}`,         ALL_GAMES,    SMB3_AND_NSMBU_AND_SM3DW, LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3&U&3DW)`,       `/game-2/game-style-3,u,3dw/list${path}`,           SMM2_ONLY,    SMB3_AND_NSMBU_AND_SM3DW, LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3&U&3DW)`,     `/game-1,2/game-style-3,u,3dw/list${path}`,         SMM1_AND_2,   SMB3_AND_NSMBU_AND_SM3DW, LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3&U&3DW)`,   `/game-3ds,2/game-style-3,u,3dw/list${path}`,       SMM3DS_AND_2, SMB3_AND_NSMBU_AND_SM3DW, LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3&U&3DW)`,     `/game-all/game-style-3,u,3dw/card${path}`,         ALL_GAMES,    SMB3_AND_NSMBU_AND_SM3DW, CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3&U&3DW)`,       `/game-2/game-style-3,u,3dw/card${path}`,           SMM2_ONLY,    SMB3_AND_NSMBU_AND_SM3DW, CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3&U&3DW)`,     `/game-1,2/game-style-3,u,3dw/card${path}`,         SMM1_AND_2,   SMB3_AND_NSMBU_AND_SM3DW, CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3&U&3DW)`,   `/game-3ds,2/game-style-3,u,3dw/card${path}`,       SMM3DS_AND_2, SMB3_AND_NSMBU_AND_SM3DW, CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3&U&3DW)`,    `/game-all/game-style-3,u,3dw/table${path}`,        ALL_GAMES,    SMB3_AND_NSMBU_AND_SM3DW, TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3&U&3DW)`,      `/game-2/game-style-3,u,3dw/table${path}`,          SMM2_ONLY,    SMB3_AND_NSMBU_AND_SM3DW, TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3&U&3DW)`,    `/game-1,2/game-style-3,u,3dw/table${path}`,        SMM1_AND_2,   SMB3_AND_NSMBU_AND_SM3DW, TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3&U&3DW)`,  `/game-3ds,2/game-style-3,u,3dw/table${path}`,      SMM3DS_AND_2, SMB3_AND_NSMBU_AND_SM3DW, TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + nsmbu + sm3dw) --------------------
                //region -------------------- Game style (smw + nsmbu + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=W&U&3DW)`,      `/game-all/game-style-w,u,3dw/list${path}`,        ALL_GAMES,    SMW_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=W&U&3DW)`,        `/game-2/game-style-w,u,3dw/list${path}`,          SMM2_ONLY,    SMW_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=W&U&3DW)`,      `/game-1,2/game-style-w,u,3dw/list${path}`,        SMM1_AND_2,   SMW_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=W&U&3DW)`,    `/game-3ds,2/game-style-w,u,3dw/list${path}`,      SMM3DS_AND_2, SMW_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=W&U&3DW)`,      `/game-all/game-style-w,u,3dw/card${path}`,        ALL_GAMES,    SMW_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=W&U&3DW)`,        `/game-2/game-style-w,u,3dw/card${path}`,          SMM2_ONLY,    SMW_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=W&U&3DW)`,      `/game-1,2/game-style-w,u,3dw/card${path}`,        SMM1_AND_2,   SMW_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=W&U&3DW)`,    `/game-3ds,2/game-style-w,u,3dw/card${path}`,      SMM3DS_AND_2, SMW_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=W&U&3DW)`,     `/game-all/game-style-w,u,3dw/table${path}`,       ALL_GAMES,    SMW_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=W&U&3DW)`,       `/game-2/game-style-w,u,3dw/table${path}`,         SMM2_ONLY,    SMW_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=W&U&3DW)`,     `/game-1,2/game-style-w,u,3dw/table${path}`,       SMM1_AND_2,   SMW_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=W&U&3DW)`,   `/game-3ds,2/game-style-w,u,3dw/table${path}`,     SMM3DS_AND_2, SMW_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),

                //endregion -------------------- Game style (smw + nsmbu + sm3dw) --------------------

                //region -------------------- Game style (smb + smb3 + smw + nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&3&W&U)`,      `/game-all/game-style-1,3,w,u/list${path}`,        ALL_GAMES,    NOT_SM3DW,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=1&3&W&U)`,        `/game-1/game-style-1,3,w,u/list${path}`,          SMM1_ONLY,    NOT_SM3DW,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=1&3&W&U)`,      `/game-3ds/game-style-1,3,w,u/list${path}`,        SMM3DS_ONLY,  NOT_SM3DW,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&3&W&U)`,        `/game-2/game-style-1,3,w,u/list${path}`,          SMM2_ONLY,    NOT_SM3DW,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=1&3&W&U)`,    `/game-1,3ds/game-style-1,3,w,u/list${path}`,      SMM1_AND_3DS, NOT_SM3DW,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&3&W&U)`,      `/game-1,2/game-style-1,3,w,u/list${path}`,        SMM1_AND_2,   NOT_SM3DW,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&3&W&U)`,    `/game-3ds,2/game-style-1,3,w,u/list${path}`,      SMM3DS_AND_2, NOT_SM3DW,                LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&3&W&U)`,      `/game-all/game-style-1,3,w,u/card${path}`,        ALL_GAMES,    NOT_SM3DW,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=1&3&W&U)`,        `/game-1/game-style-1,3,w,u/card${path}`,          SMM1_ONLY,    NOT_SM3DW,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=1&3&W&U)`,      `/game-3ds/game-style-1,3,w,u/card${path}`,        SMM3DS_ONLY,  NOT_SM3DW,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&3&W&U)`,        `/game-2/game-style-1,3,w,u/card${path}`,          SMM2_ONLY,    NOT_SM3DW,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=1&3&W&U)`,    `/game-1,3ds/game-style-1,3,w,u/card${path}`,      SMM1_AND_3DS, NOT_SM3DW,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&3&W&U)`,      `/game-1,2/game-style-1,3,w,u/card${path}`,        SMM1_AND_2,   NOT_SM3DW,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&3&W&U)`,    `/game-3ds,2/game-style-1,3,w,u/card${path}`,      SMM3DS_AND_2, NOT_SM3DW,                CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&3&W&U)`,     `/game-all/game-style-1,3,w,u/table${path}`,       ALL_GAMES,    NOT_SM3DW,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=1&3&W&U)`,       `/game-1/game-style-1,3,w,u/table${path}`,         SMM1_ONLY,    NOT_SM3DW,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=1&3&W&U)`,     `/game-3ds/game-style-1,3,w,u/table${path}`,       SMM3DS_ONLY,  NOT_SM3DW,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&3&W&U)`,       `/game-2/game-style-1,3,w,u/table${path}`,         SMM2_ONLY,    NOT_SM3DW,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=1&3&W&U)`,   `/game-1,3ds/game-style-1,3,w,u/table${path}`,     SMM1_AND_3DS, NOT_SM3DW,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&3&W&U)`,     `/game-1,2/game-style-1,3,w,u/table${path}`,       SMM1_AND_2,   NOT_SM3DW,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&3&W&U)`,   `/game-3ds,2/game-style-1,3,w,u/table${path}`,     SMM3DS_AND_2, NOT_SM3DW,                TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + smw + nsmbu) --------------------
                //region -------------------- Game style (smb3 + smw + nsmbu + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3&W&U&3DW)`,    `/game-all/game-style-3,w,u,3dw/list${path}`,      ALL_GAMES,    NOT_SMB,                  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3&W&U&3DW)`,      `/game-2/game-style-3,w,u,3dw/list${path}`,        SMM2_ONLY,    NOT_SMB,                  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3&W&U&3DW)`,    `/game-1,2/game-style-3,w,u,3dw/list${path}`,      SMM1_AND_2,   NOT_SMB,                  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3&W&U&3DW)`,  `/game-3ds,2/game-style-3,w,u,3dw/list${path}`,    SMM3DS_AND_2, NOT_SMB,                  LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3&W&U&3DW)`,    `/game-all/game-style-3,w,u,3dw/card${path}`,      ALL_GAMES,    NOT_SMB,                  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3&W&U&3DW)`,      `/game-2/game-style-3,w,u,3dw/card${path}`,        SMM2_ONLY,    NOT_SMB,                  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3&W&U&3DW)`,    `/game-1,2/game-style-3,w,u,3dw/card${path}`,      SMM1_AND_2,   NOT_SMB,                  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3&W&U&3DW)`,  `/game-3ds,2/game-style-3,w,u,3dw/card${path}`,    SMM3DS_AND_2, NOT_SMB,                  CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3&W&U&3DW)`,   `/game-all/game-style-3,w,u,3dw/table${path}`,     ALL_GAMES,    NOT_SMB,                  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3&W&U&3DW)`,     `/game-2/game-style-3,w,u,3dw/table${path}`,       SMM2_ONLY,    NOT_SMB,                  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3&W&U&3DW)`,   `/game-1,2/game-style-3,w,u,3dw/table${path}`,     SMM1_AND_2,   NOT_SMB,                  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3&W&U&3DW)`, `/game-3ds,2/game-style-3,w,u,3dw/table${path}`,   SMM3DS_AND_2, NOT_SMB,                  TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + smw + nsmbu + sm3dw) --------------------
                //region -------------------- Game style (smb + smw + nsmbu + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&W&U&3DW)`,      `/game-all/game-style-1,w,u,3dw/list${path}`,    ALL_GAMES,    NOT_SMB3,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&W&U&3DW)`,        `/game-2/game-style-1,w,u,3dw/list${path}`,      SMM2_ONLY,    NOT_SMB3,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&W&U&3DW)`,      `/game-1,2/game-style-1,w,u,3dw/list${path}`,    SMM1_AND_2,   NOT_SMB3,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&W&U&3DW)`,    `/game-3ds,2/game-style-1,w,u,3dw/list${path}`,  SMM3DS_AND_2, NOT_SMB3,                 LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&W&U&3DW)`,      `/game-all/game-style-1,w,u,3dw/card${path}`,    ALL_GAMES,    NOT_SMB3,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&W&U&3DW)`,        `/game-2/game-style-1,w,u,3dw/card${path}`,      SMM2_ONLY,    NOT_SMB3,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&W&U&3DW)`,      `/game-1,2/game-style-1,w,u,3dw/card${path}`,    SMM1_AND_2,   NOT_SMB3,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&W&U&3DW)`,    `/game-3ds,2/game-style-1,w,u,3dw/card${path}`,  SMM3DS_AND_2, NOT_SMB3,                 CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&W&U&3DW)`,     `/game-all/game-style-1,w,u,3dw/table${path}`,   ALL_GAMES,    NOT_SMB3,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&W&U&3DW)`,       `/game-2/game-style-1,w,u,3dw/table${path}`,     SMM2_ONLY,    NOT_SMB3,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&W&U&3DW)`,     `/game-1,2/game-style-1,w,u,3dw/table${path}`,   SMM1_AND_2,   NOT_SMB3,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&W&U&3DW)`,   `/game-3ds,2/game-style-1,w,u,3dw/table${path}`, SMM3DS_AND_2, NOT_SMB3,                 TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smw + nsmbu + sm3dw) --------------------
                //region -------------------- Game style (smb + smb3 + nsmbu + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&3&U&3DW)`,      `/game-all/game-style-1,3,u,3dw/list${path}`,    ALL_GAMES,    NOT_SMW,                  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&3&U&3DW)`,        `/game-2/game-style-1,3,u,3dw/list${path}`,      SMM2_ONLY,    NOT_SMW,                  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&3&U&3DW)`,      `/game-1,2/game-style-1,3,u,3dw/list${path}`,    SMM1_AND_2,   NOT_SMW,                  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&3&U&3DW)`,    `/game-3ds,2/game-style-1,3,u,3dw/list${path}`,  SMM3DS_AND_2, NOT_SMW,                  LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&3&U&3DW)`,      `/game-all/game-style-1,3,u,3dw/card${path}`,    ALL_GAMES,    NOT_SMW,                  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&3&U&3DW)`,        `/game-2/game-style-1,3,u,3dw/card${path}`,      SMM2_ONLY,    NOT_SMW,                  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&3&U&3DW)`,      `/game-1,2/game-style-1,3,u,3dw/card${path}`,    SMM1_AND_2,   NOT_SMW,                  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&3&U&3DW)`,    `/game-3ds,2/game-style-1,3,u,3dw/card${path}`,  SMM3DS_AND_2, NOT_SMW,                  CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&3&U&3DW)`,     `/game-all/game-style-1,3,u,3dw/table${path}`,   ALL_GAMES,    NOT_SMW,                  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&3&U&3DW)`,       `/game-2/game-style-1,3,u,3dw/table${path}`,     SMM2_ONLY,    NOT_SMW,                  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&3&U&3DW)`,     `/game-1,2/game-style-1,3,u,3dw/table${path}`,   SMM1_AND_2,   NOT_SMW,                  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&3&U&3DW)`,   `/game-3ds,2/game-style-1,3,u,3dw/table${path}`, SMM3DS_AND_2, NOT_SMW,                  TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + nsmbu + sm3dw) --------------------
                //region -------------------- Game style (smb + smb3 + smw + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&3&W&3DW)`,      `/game-all/game-style-1,3,w,3dw/list${path}`,    ALL_GAMES,    NOT_NSMBU,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&3&W&3DW)`,        `/game-2/game-style-1,3,w,3dw/list${path}`,      SMM2_ONLY,    NOT_NSMBU,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&3&W&3DW)`,      `/game-1,2/game-style-1,3,w,3dw/list${path}`,    SMM1_AND_2,   NOT_NSMBU,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&3&W&3DW)`,    `/game-3ds,2/game-style-1,3,w,3dw/list${path}`,  SMM3DS_AND_2, NOT_NSMBU,                LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&3&W&3DW)`,      `/game-all/game-style-1,3,w,3dw/card${path}`,    ALL_GAMES,    NOT_NSMBU,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&3&W&3DW)`,        `/game-2/game-style-1,3,w,3dw/card${path}`,      SMM2_ONLY,    NOT_NSMBU,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&3&W&3DW)`,      `/game-1,2/game-style-1,3,w,3dw/card${path}`,    SMM1_AND_2,   NOT_NSMBU,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&3&W&3DW)`,    `/game-3ds,2/game-style-1,3,w,3dw/card${path}`,  SMM3DS_AND_2, NOT_NSMBU,                CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&3&W&3DW)`,     `/game-all/game-style-1,3,w,3dw/table${path}`,   ALL_GAMES,    NOT_NSMBU,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&3&W&3DW)`,       `/game-2/game-style-1,3,w,3dw/table${path}`,     SMM2_ONLY,    NOT_NSMBU,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&3&W&3DW)`,     `/game-1,2/game-style-1,3,w,3dw/table${path}`,   SMM1_AND_2,   NOT_NSMBU,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&3&W&3DW)`,   `/game-3ds,2/game-style-1,3,w,3dw/table${path}`, SMM3DS_AND_2, NOT_NSMBU,                TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + smw + sm3dw) --------------------
            ]

            // const viewDisplays = ViewDisplays.CompanionEnum.get.values
            // const routes = new Array<SimpleRoute>(516,) // From: (31 + 16 + 16 + 31 + 16 + 31 + 31) * 3
            // let index = -1
            // viewDisplays.forEach(viewDisplay => {
            //     const urlValue = viewDisplay.urlValue
            //
            //     forEachByArray(gamePossibilities, ([games, gamesName, gamesPath, gameStylePossibilities, gameStylePossibilitiesAmount,],) => {
            //         let index_gameStylePossibility = -1
            //         while (++index_gameStylePossibility < gameStylePossibilitiesAmount) {
            //             const gameStylePossibility = gameStylePossibilities[index_gameStylePossibility]!
            //             const gameStyleName = gameStylePossibility[1]
            //             const gameStylePath = gameStylePossibility[2]
            //             routes[++index] = new SimpleRoute(`${name} (${urlValue} ${gamesName} ${gameStyleName})`, `/${gamesPath}/${gameStylePath}/${urlValue}${path}`, games, gameStylePossibility[0], viewDisplay, routeCallback,)
            //         }
            //     },)
            // },)
            // return routes
        }

    }

    /** A representation of an {@link EveryRoutes} instance with only the {@link GameCollection} in its route */
    private static readonly AnyGame_EveryRoutes = class AnyGame_EveryRoutes<const URL_NAME extends string,
        const URL_PATH extends string, >
        extends EveryRoutes<URL_NAME, URL_PATH> {

        constructor(name: URL_NAME, path: URL_PATH, routeCallback: GameRouteCallback,) {
            super(name, path, NO_VIEW_DISPLAY, null, ALL_GAMES_COLLECTION, SMM2, NO_GAME_STYLES_COLLECTION, null, NO_TIMES_COLLECTION, null, (_, games,) => routeCallback(games,),)
        }


        protected override _createEveryRoutes(): Array<SimpleRoute> {
            const name = this.urlName
            const path = this.urlValue
            const routeCallback = this.routeCallback

            return [
                new SimpleRoute(`${name} (Game=all)`,   `/game-all${path}`,   ALL_GAMES,    null, null, routeCallback,),
                new SimpleRoute(`${name} (Game=1)`,     `/game-1${path}`,     SMM1_ONLY,    null, null, routeCallback,),
                new SimpleRoute(`${name} (Game=3DS)`,   `/game-3ds${path}`,   SMM3DS_ONLY,  null, null, routeCallback,),
                new SimpleRoute(`${name} (Game=2)`,     `/game-2${path}`,     SMM2_ONLY,    null, null, routeCallback,),
                new SimpleRoute(`${name} (Game=1&3DS)`, `/game-1,3ds${path}`, SMM1_AND_3DS, null, null, routeCallback,),
                new SimpleRoute(`${name} (Game=1&2)`,   `/game-1,2${path}`,   SMM1_AND_2,   null, null, routeCallback,),
                new SimpleRoute(`${name} (Game=3DS&2)`, `/game-3ds,2${path}`, SMM3DS_AND_2, null, null, routeCallback,),
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
    private static readonly ListCardTable_Smm1_EveryRoutes = class ListCardTable_Smm1_EveryRoutes<const URL_NAME extends string,
        const URL_PATH extends string, >
        extends EveryRoutes<URL_NAME, URL_PATH> {

        constructor(name: URL_NAME, path: URL_PATH, defaultViewDisplay: NullOr<ViewDisplays>, routeCallback: RouteCallback,) {
            super(name, path, ALL_VIEW_DISPLAY, defaultViewDisplay ?? TABLE, SMM1_GAMES_COLLECTION, SMM1, NO_GAME_STYLES_COLLECTION, null, NO_TIMES_COLLECTION, null, routeCallback,)
        }


        protected override _createEveryRoutes(): Array<SimpleRoute> {
            const name = this.urlName
            const path = this.urlValue
            const routeCallback = this.routeCallback

            return [
                new SimpleRoute(`${name} (list Game=1)`,  `/game-1/list${path}`,  SMM1_ONLY, null, LIST,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1)`,  `/game-1/card${path}`,  SMM1_ONLY, null, CARD,  routeCallback,),
                new SimpleRoute(`${name} (table Game=1)`, `/game-1/table${path}`, SMM1_ONLY, null, TABLE, routeCallback,),
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
    private static readonly ListCardTable_Smm2_EveryRoutes = class ListCardTable_Smm2_EveryRoutes<const URL_NAME extends string,
        const URL_PATH extends string, >
        extends EveryRoutes<URL_NAME, URL_PATH> {

        constructor(name: URL_NAME, path: URL_PATH, defaultViewDisplay: NullOr<ViewDisplays>, routeCallback: RouteCallback,) {
            super(name, path, ALL_VIEW_DISPLAY, defaultViewDisplay ?? TABLE, SMM2_GAMES_COLLECTION, SMM2, NO_GAME_STYLES_COLLECTION, null, NO_TIMES_COLLECTION, null, routeCallback,)
        }


        protected override _createEveryRoutes(): Array<SimpleRoute> {
            const name = this.urlName
            const path = this.urlValue
            const routeCallback = this.routeCallback

            return [
                new SimpleRoute(`${name} (list Game=2)`,  `/game-2/list${path}`,  SMM2_ONLY, null, LIST,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2)`,  `/game-2/card${path}`,  SMM2_ONLY, null, CARD,  routeCallback,),
                new SimpleRoute(`${name} (table Game=2)`, `/game-2/table${path}`, SMM2_ONLY, null, TABLE, routeCallback,),
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

    public static readonly EVERY_CHARACTER_NAME = new EveryRoutes.ListCardTable_AnyGame_EveryRoutes('everyCharacterName', '/every/character-name', CARD, (viewDisplay, games,) => <CharacterNameApp viewDisplay={viewDisplay} games={games}/>,)

    public static readonly EVERY_GAME_REFERENCE = new EveryRoutes.AnyGame_EveryRoutes('everyGameReference', '/every/game-reference', () => <GameReferenceApp/>,)
    public static readonly EVERY_GAME_STYLE = new EveryRoutes.ListCardTable_AnyGame_EveryRoutes('everyGameStyle', '/every/game-style', CARD, (viewDisplay, games,) => <GameStyleApp viewDisplay={viewDisplay} games={games}/>,)

    public static readonly EVERY_ENTITY = new EveryRoutes.ListCardTable_AnyGame_AnyGameStyle_EveryRoutes('everyEntity', '/every/entity', null, (viewDisplay, games, gameStyles,) => <EntityApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles}/>,)
    public static readonly EVERY_ENTITY_CATEGORY = new EveryRoutes.ListCardTable_Smm2_EveryRoutes('everyEntityCategory', '/every/entity-category', CARD, viewDisplay => <EntityCategoryApp viewDisplay={viewDisplay}/>,)
    public static readonly EVERY_GROUP = new EveryRoutes.Straight_EveryRoutes('everyGroup', '/every/entity-group', () => <EntityGroupApp/>)

    public static readonly EVERY_LIMIT = new EveryRoutes.ListCardTable_AnyGame_EveryRoutes('everyLimit', '/every/limit', null, (viewDisplay, games,) => <LimitApp viewDisplay={viewDisplay} games={games} type={LimitTypes.ALL}/>,)
    public static readonly EVERY_PLAY_LIMIT = new EveryRoutes.ListCardTable_AnyGame_EveryRoutes('playLimit', '/play/limit', null, (viewDisplay, games,) => <LimitApp viewDisplay={viewDisplay} games={games} type={LimitTypes.PLAY}/>,)
    public static readonly EVERY_EDITOR_LIMIT = new EveryRoutes.ListCardTable_AnyGame_EveryRoutes('editorLimit', '/editor/limit', null, (viewDisplay, games,) => <LimitApp viewDisplay={viewDisplay} games={games} type={LimitTypes.EDITOR}/>,)

    public static readonly EVERY_THEME = new EveryRoutes.ListCardTable_AnyGame_EveryRoutes('everyTheme', '/every/theme', CARD, (viewDisplay, games,) => <ThemeApp viewDisplay={viewDisplay} games={games} type={ThemeTypes.ALL}/>,)
    public static readonly EVERY_COURSE_THEME = new EveryRoutes.ListCardTable_AnyGame_EveryRoutes('courseTheme', '/course/theme', CARD, (viewDisplay, games,) => <ThemeApp viewDisplay={viewDisplay} games={games} type={ThemeTypes.COURSE}/>,)
    public static readonly EVERY_WORLD_THEME = new EveryRoutes.ListCardTable_AnyGame_EveryRoutes('worldTheme', '/world/theme', CARD, (viewDisplay, games,) => <ThemeApp viewDisplay={viewDisplay} games={games} type={ThemeTypes.WORLD}/>,)

    public static readonly EVERY_SOUND_EFFECT = new EveryRoutes.ListCardTable_AnyGame_AnyGameStyle_EveryRoutes('everySoundEffect', '/every/sound-effect', null, (viewDisplay, games, gameStyles,) => <SoundEffectApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles}/>,)
    public static readonly EVERY_SOUND_EFFECT_CATEGORY = new EveryRoutes.ListCardTable_Smm2_EveryRoutes('everySoundEffectCategory', '/every/sound-effect-category', CARD, viewDisplay => <SoundEffectCategoryApp viewDisplay={viewDisplay}/>)

    public static readonly EVERY_MII_COSTUME = new EveryRoutes.ListCardTable_Smm2_EveryRoutes('everyMiiCostume', '/every/mii-costume', null, viewDisplay => <MiiCostumeApp viewDisplay={viewDisplay}/>,)
    public static readonly EVERY_MII_COSTUME_CATEGORY = new EveryRoutes.ListCardTable_Smm2_EveryRoutes('everyMiiCostumeCategory', '/every/mii-costume-category', CARD, viewDisplay => <MiiCostumeCategoryApp viewDisplay={viewDisplay}/>,)

    public static readonly EVERY_MYSTERY_MUSHROOM = new EveryRoutes.ListCardTable_Smm1_EveryRoutes('everyMysteryMushroom', '/every/mystery-mushroom', CARD, viewDisplay => <MysteryMushroomApp viewDisplay={viewDisplay}/>,)

    public static readonly EVERY_PREDEFINED_MESSAGE = new EveryRoutes.ListCardTable_Smm2_EveryRoutes('everyPredefinedMessage', '/every/predefined-message', LIST, viewDisplay => <PredefinedMessageApp viewDisplay={viewDisplay}/>,)

    public static readonly EVERY_SAMPLE_COURSE = new EveryRoutes.ListCardTable_Smm1_EveryRoutes('everySampleCourse', '/every/sample-course', null, viewDisplay => <SampleCourseApp viewDisplay={viewDisplay}/>,)
    public static readonly EVERY_OFFICIAL_COURSE = new EveryRoutes.ListCardTable_AnyGame_EveryRoutes('everyOfficialCourse', '/every/official-course', null, viewDisplay => <OfficialCourseApp viewDisplay={viewDisplay}/>,)

    public static readonly EVERY_MEDAL = new EveryRoutes.ListCardTable_Smm1_EveryRoutes('everyMedal', '/every/medal', CARD, viewDisplay => <MedalApp viewDisplay={viewDisplay}/>,)

    public static readonly EVERY_COURSE_TAG = new EveryRoutes.ListCardTable_Smm2_EveryRoutes('everyCourseTag', '/every/course-tag', CARD, viewDisplay => <CourseTagApp viewDisplay={viewDisplay} type={CourseTagTypes.ALL}/>,)
    public static readonly EVERY_OFFICIAL_COURSE_TAG = new EveryRoutes.ListCardTable_Smm2_EveryRoutes('officialCourseTag', '/official/course-tag', CARD, viewDisplay => <CourseTagApp viewDisplay={viewDisplay} type={CourseTagTypes.OFFICIAL}/>,)
    public static readonly EVERY_UNOFFICIAL_COURSE_TAG = new EveryRoutes.ListCardTable_Smm2_EveryRoutes('unofficialCourseTag', '/unofficial/course-tag', CARD, viewDisplay => <CourseTagApp viewDisplay={viewDisplay} type={CourseTagTypes.UNOFFICIAL}/>,)
    public static readonly EVERY_MAKER_CENTRAL_COURSE_TAG = new EveryRoutes.ListCardTable_Smm2_EveryRoutes('makerCentralCourseTag', '/maker-central/course-tag', CARD, viewDisplay => <CourseTagApp viewDisplay={viewDisplay} type={CourseTagTypes.MAKER_CENTRAL}/>,)

    public static readonly EVERY_INSTRUMENT = new EveryRoutes.ListCardTable_AnyGame_EveryRoutes('everyInstrument', '/every/instrument', CARD, (viewDisplay, games,) => <InstrumentApp viewDisplay={viewDisplay} games={games}/>,)

    public static readonly EVERY_EDITOR_VOICE = new EveryRoutes.ListCardTable_AnyGame_EveryRoutes('everyEditorVoice', '/every/editor-voice', CARD, (viewDisplay, games,) => <EditorVoiceApp viewDisplay={viewDisplay} games={games}/>,)

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
            return this.values.findFirstOrNull(it => url.endsWith(it.urlValue,),)
        }

        public getRouteFromName(name: PossibleRouteName, language?: Nullable<ProjectLanguages>,): EveryPossibleRoutes {
            language ??= ProjectLanguages.CompanionEnum.get.current
            const currentGames = Games.CompanionEnum.get.currentOrNull?.toArray() ?? null
            const currentGameStyles = GameStyles.CompanionEnum.get.currentOrNull?.toArray() ?? null
            const currentViewDisplay = ViewDisplays.CompanionEnum.get.currentOrNull
            for (const value of this.values) {
                const urlName = value.urlName
                if (urlName === name) {
                    const everyRoute = value.everyRoute
                    const routeFoundByName = findFirstOrNullByArray(everyRoute, it => it.name === name,)
                    if (routeFoundByName != null)
                        return value.getPath(language, routeFoundByName.games, routeFoundByName.gameStyles, routeFoundByName.viewDisplay,)

                    const pathToFind = `${value._getPartialPathFromGames(currentGames,)}${value._getPartialPathFromGameStyles(currentGameStyles,)}${value._getPartialPathFromViewDisplay(currentViewDisplay,)}${value.urlValue}`
                    const routeFoundByPath = findFirstOrNullByArray(everyRoute, it => it.path === pathToFind,)
                    if (routeFoundByPath != null)
                        return value.getPath(language, routeFoundByPath.games, routeFoundByPath.gameStyles, routeFoundByPath.viewDisplay,)
                    throw new ReferenceError(`No route is findable by the direct name "${name}".`,)
                }

                const routeFromOnlyViewDisplay = this.#getRouteFromOnlyViewDisplay(value, name, language,)
                if (routeFromOnlyViewDisplay != null)
                    return routeFromOnlyViewDisplay

                if (name.startsWith(`${urlName} `,)) {
                    const pathToFind = `${value._getPartialPathFromGames(this.#getGamesInName(name,),)}${value._getPartialPathFromGameStyles(this.#getGameStylesInName(name,),)}${value._getPartialPathFromViewDisplay(this.#getViewDisplayInName(name,),)}${value.urlValue}`
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

            const urlName = value.urlName
            if (viewDisplays.hasSimpleList)
                if (`${urlName} (list)` === name)
                    return value.getPath(language, null, null, LIST,)
            if (viewDisplays.hasCardList)
                if (`${urlName} (card)` === name)
                    return value.getPath(language, null, null, CARD,)
            if (viewDisplays.hasCardList)
                if (`${urlName} (table)` === name)
                    return value.getPath(language, null, null, TABLE,)
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
                return ALL_GAMES

            if (nameFromGame === '1)' || nameFromGame.startsWith('1 ',))
                return SMM1_ONLY
            if (nameFromGame === '3DS)' || nameFromGame.startsWith('3DS ',))
                return SMM3DS_ONLY
            if (nameFromGame === '2)' || nameFromGame.startsWith('2 ',))
                return SMM2_ONLY

            if (nameFromGame === '1&3DS)' || nameFromGame.startsWith('1&3DS ',))
                return SMM1_AND_3DS
            if (nameFromGame === '1&2)' || nameFromGame.startsWith('1&2 ',))
                return SMM1_AND_2
            if (nameFromGame === '3DS&2)' || nameFromGame.startsWith('3DS&2 ',))
                return SMM3DS_AND_2

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
                return LIST
            if (name.endsWith('(card)',) || name.includes('(card',))
                return CARD
            if (name.endsWith('(table)',) || name.includes('(table',))
                return TABLE
            return null
        }

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #urlName
    readonly #urlPath

    readonly #viewDisplays
    readonly #defaultViewDisplay
    readonly #games
    readonly #gameStyles
    readonly #times
    readonly #defaultGame
    readonly #defaultGameStyles
    readonly #defaultTime
    readonly #routeCallback

    #everyRoutes?: Array<SimpleRoute>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(name: URL_NAME, path: URL_PATH,
                        viewDisplays: ViewDisplayCollection, defaultViewDisplay: NullOr<ViewDisplays>,
                        games: GameCollection, defaultGame: NullOr<Games>,
                        gameStyles: GameStyleCollection, defaultGameStyles: NullOrArray<GameStyles>,
                        times: TimeCollection, defaultTime: NullOr<Times>,
                        routeCallback: RouteCallback,) {
        super()
        this.#urlName = name
        this.#urlPath = path
        this.#viewDisplays = viewDisplays
        this.#defaultViewDisplay = defaultViewDisplay
        this.#games = games
        this.#defaultGame = defaultGame
        this.#gameStyles = gameStyles
        this.#defaultGameStyles = defaultGameStyles
        this.#times = times
        this.#defaultTime = defaultTime
        this.#routeCallback = routeCallback
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get urlName(): URL_NAME {
        return this.#urlName
    }

    public get urlValue(): URL_PATH {
        return this.#urlPath
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


    public get times(): TimeCollection {
        return this.#times
    }

    public get defaultTime(): NullOr<Times> {
        return this.#defaultTime
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
        const Companion = Games.CompanionEnum.get
        if (value == null) {
            const currentGames = Companion.currentOrNull
            if (currentGames == null) {
                const defaultGame = this.defaultGame
                if (defaultGame == null)
                    return EMPTY_STRING
                return `/game-${defaultGame.urlValue}`
            }
            return `/game-${Companion.getGroupUrlValue(currentGames,)}`
        }
        if (value.length === 0) {
            const defaultGame = this.defaultGame
            if (defaultGame == null)
                return EMPTY_STRING
            return `/game-${defaultGame.urlValue}`
        }
        if (value.length === 0)
            return EMPTY_STRING
        return `/game-${Companion.getGroupUrlValue(value,)}`
    }

    /**
     * Get the partial path from a {@link Nullable} {@link GameStyles} {@link ReadonlyArray array}
     *
     * @param values The {@link GameStyles} to retrieve their {@link GameStyles.urlValue}
     */
    protected _getPartialPathFromGameStyles(values: NullOrArray<GameStyles>,): PossibleGameStylePath {
        const Companion = GameStyles.CompanionEnum.get
        if (values == null) {
            const currentGameStyles = Companion.currentOrNull
            if (currentGameStyles == null) {
                const defaultGameStyles = this.defaultGameStyles
                if (defaultGameStyles == null)
                    return EMPTY_STRING
                return `/game-style-${Companion.getGroupUrlValue(defaultGameStyles,)}`
            }
            return `/game-style-${Companion.getGroupUrlValue(currentGameStyles,)}`
        }
        if (values.length === 0) {
            const defaultGameStyles = this.defaultGameStyles
            if (defaultGameStyles == null)
                return EMPTY_STRING
            return `/game-style-${Companion.getGroupUrlValue(defaultGameStyles,)}`
        }
        if (values.length === 0)
            return EMPTY_STRING
        return `/game-style-${Companion.getGroupUrlValue(values,)}`
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

    /**
     * Get the partial path from a {@link Nullable} {@link Times} {@link ReadonlyArray array}
     *
     * @param value The {@link Times} to retrieve its {@link Times.urlValue}
     */
    protected _getPartialPathFromTimes(value: NullOrArray<Times>,): PossibleTimePath {
        const Companion = Times.CompanionEnum.get
        if (value == null) {
            const currentTime = Companion.currentOrNull
            if (currentTime == null) {
                const defaultTime = this.defaultTime
                if (defaultTime == null)
                    return EMPTY_STRING
                return `/time-${defaultTime.urlValue}`
            }
            return `/time-${Companion.getGroupUrl(currentTime,)}`
        }
        if (value.length === 0) {
            const defaultTime = this.defaultTime
            if (defaultTime == null)
                return EMPTY_STRING
            return `/time-${defaultTime.urlValue}`
        }
        if (value.length === 0)
            return EMPTY_STRING
        return `/time-${Companion.getGroupUrl(value,)}`
    }

    public getPath(language: NullOr<ProjectLanguages>, games: NullOrArray<Games>, gameStyles: NullOrArray<GameStyles>, viewDisplay: NullOr<ViewDisplays>,): EveryPossibleRoutes {
        if (language == null)
            language = ProjectLanguages.CompanionEnum.get.current
        return `/${language.projectAcronym}${this._getPartialPathFromGames(games,)}${this._getPartialPathFromGameStyles(gameStyles,)}${this._getPartialPathFromViewDisplay(viewDisplay,)}${this.urlValue}` as unknown as EveryPossibleRoutes
    }

    //endregion -------------------- Methods --------------------

}

// const everyRoute = EveryRoutes.CompanionEnum.get.everyRoute
// console.table(everyRoute.filter((_, i,) => i < 500,).map(it => ({name: it.name, path: it.path,}),),)
// console.table(everyRoute.filter((_, i,) => i >= 500 && i < 1000,).map(it => ({name: it.name, path: it.path,}),),)
// console.table(everyRoute.filter((_, i,) => i >= 1000,).map(it => ({name: it.name, path: it.path,}),),)
