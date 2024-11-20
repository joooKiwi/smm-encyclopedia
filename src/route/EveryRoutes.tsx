import type {Singleton}                                         from '@joookiwi/enumerable'
import type {Array, MutableArray, Nullable, NullOr}             from '@joookiwi/type'
import {findFirstOrNullByArray, forEachByArray, isEmptyByArray} from '@joookiwi/collection'
import {CompanionEnum, Enum}                                    from '@joookiwi/enumerable'
import {lazy}                                                   from 'react'

import type {ClassUsedInRoute}                                                                                                                                                                                                                                     from 'route/ClassUsedInRoute'
import type {EveryPossibleRoutes, GameRouteCallback, Names, NothingRouteCallback, Ordinals, PossibleGamePath, PossibleGameStylePath, PossibleRoute, PossibleRouteName, PossibleTimePath, PossibleViewDisplayPath, RouteCallback, RouteCallbackWithOnlyViewDisplay} from 'route/EveryRoutes.types'
import type {CompanionEnumDeclaration_EveryRoutes}                                                                                                                                                                                                                 from 'route/EveryRoutes.companionEnumDeclaration'

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

import ALL_GAME_STYLES =            GameStyles.ALL
import ALL_GAMES =                  Games.ALL
import ALL_GAME_STYLES_COLLECTION = GameStyleCollection.ALL
import ALL_GAMES_COLLECTION =       GameCollection.ALL
import ALL_TIMES =                  Times.ALL
import ALL_TIMES_COLLECTION =       TimeCollection.ALL
import ALL_VIEW_DISPLAY =           ViewDisplayCollection.ALL
import DAY_ONLY =                   Times.DAY_ONLY
import EMPTY_STRING =               Empty.EMPTY_STRING
import GameCompanion =              Games.Companion
import GameStyleCompanion =         GameStyles.Companion
import LanguageCompanion =          ProjectLanguages.Companion
import NIGHT_ONLY =                 Times.NIGHT_ONLY
import NO_GAME_STYLES =             GameStyleCollection.EMPTY
import NO_GAMES =                   GameCollection.EMPTY
import NO_TIMES =                   TimeCollection.EMPTY
import NO_VIEW_DISPLAY =            ViewDisplayCollection.EMPTY
import NOT_NSMBU =                  GameStyles.NOT_NSMBU
import NOT_SMB =                    GameStyles.NOT_SMB
import NOT_SMB3 =                   GameStyles.NOT_SMB3
import NOT_SMW =                    GameStyles.NOT_SMW
import NOT_SM3DW =                  GameStyles.NOT_SM3DW
import NSMBU_AND_SM3DW =            GameStyles.NSMBU_AND_SM3DW
import NSMBU_ONLY =                 GameStyles.NSMBU_ONLY
import SMB_AND_NSMBU =              GameStyles.SMB_AND_NSMBU
import SMB_AND_NSMBU_AND_SM3DW =    GameStyles.SMB_AND_NSMBU_AND_SM3DW
import SMB_AND_SMB3 =               GameStyles.SMB_AND_SMB3
import SMB_AND_SMB3_AND_NSMBU =     GameStyles.SMB_AND_SMB3_AND_NSMBU
import SMB_AND_SMB3_AND_SMW =       GameStyles.SMB_AND_SMB3_AND_SMW
import SMB_AND_SMB3_AND_SM3DW =     GameStyles.SMB_AND_SMB3_AND_SM3DW
import SMB_AND_SMW =                GameStyles.SMB_AND_SMW
import SMB_AND_SMW_AND_NSMBU =      GameStyles.SMB_AND_SMW_AND_NSMBU
import SMB_AND_SMW_AND_SM3DW =      GameStyles.SMB_AND_SMW_AND_SM3DW
import SMB_AND_SM3DW =              GameStyles.SMB_AND_SM3DW
import SMB_ONLY =                   GameStyles.SMB_ONLY
import SMB3_AND_NSMBU =             GameStyles.SMB3_AND_NSMBU
import SMB3_AND_NSMBU_AND_SM3DW =   GameStyles.SMB3_AND_NSMBU_AND_SM3DW
import SMB3_AND_SMW =               GameStyles.SMB3_AND_SMW
import SMB3_AND_SMW_AND_NSMBU =     GameStyles.SMB3_AND_SMW_AND_NSMBU
import SMB3_AND_SMW_AND_SM3DW =     GameStyles.SMB3_AND_SMW_AND_SM3DW
import SMB3_AND_SM3DW =             GameStyles.SMB3_AND_SM3DW
import SMB3_ONLY =                  GameStyles.SMB3_ONLY
import SMW_AND_NSMBU =              GameStyles.SMW_AND_NSMBU
import SMW_AND_NSMBU_AND_SM3DW =    GameStyles.SMW_AND_NSMBU_AND_SM3DW
import SMW_AND_SM3DW =              GameStyles.SMW_AND_SM3DW
import SMW_ONLY =                   GameStyles.SMW_ONLY
import SMM1 =                       Games.SMM1
import SMM1_AND_3DS =               Games.SMM1_AND_3DS
import SMM1_AND_2 =                 Games.SMM1_AND_2
import SMM1_GAMES_COLLECTION =      GameCollection.SMM1_ONLY
import SMM1_ONLY =                  Games.SMM1_ONLY
import SMM2 =                       Games.SMM2
import SMM2_GAMES_COLLECTION =      GameCollection.SMM2_ONLY
import SMM2_ONLY =                  Games.SMM2_ONLY
import SMM3DS_AND_2 =               Games.SMM3DS_AND_2
import SMM3DS_ONLY =                Games.SMM3DS_ONLY
import SM3DW_ONLY =                 GameStyles.SM3DW_ONLY
import TimeCompanion =              Times.Companion
import ViewDisplayCompanion =       ViewDisplays.Companion

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

// //region -------------------- Possibility group constants --------------------
//
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
//
// //endregion -------------------- Possibility group constants --------------------

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
            super(name, path, NO_VIEW_DISPLAY, null, NO_GAMES, null, NO_GAME_STYLES, null, NO_TIMES, null, routeCallback,)
        }


        protected override _createEveryRoutes(): Array<SimpleRoute> {
            return [new SimpleRoute(this.urlName, this.urlValue, null, null, null, null, this.routeCallback,),]
        }

        protected override _getPathFromGames() {
            return EMPTY_STRING
        }

        protected override _getPathFromTimes() {
            return EMPTY_STRING
        }

        protected override _getPathFromGameStyles() {
            return EMPTY_STRING
        }

        protected override _getPathFromViewDisplay() {
            return EMPTY_STRING
        }

    }

    /** A representation of an {@link EveryRoutes} instance with everything in its route ({@link ViewDisplays}, {@link GameCollection}, {@link GameStyleCollection} and {@link TimeCollection}) */
    private static readonly AllGames_EveryRoutes = class ListCardTable_AnyGames_AnyGameStyle_EveryRoutes<const URL_NAME extends string,
        const URL_PATH extends string, >
        extends EveryRoutes<URL_NAME, URL_PATH> {

        constructor(name: URL_NAME, path: URL_PATH, defaultViewDisplay: ViewDisplays, routeCallback: RouteCallback,) {
            super(name, path, ALL_VIEW_DISPLAY, defaultViewDisplay, ALL_GAMES_COLLECTION, SMM2, ALL_GAME_STYLES_COLLECTION, ALL_GAME_STYLES, ALL_TIMES_COLLECTION, ALL_TIMES, routeCallback,)
        }

        protected override _createEveryRoutes(): Array<SimpleRoute> {
            const name = this.urlName
            const path = this.urlValue
            const routeCallback = this.routeCallback

            //@ts-ignore: The 1124 routes have their types handled elsewhere
            return [
                //region -------------------- Time (all) --------------------

                //region -------------------- Game style (all) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=all Time=all)`,          `/game-all/game-style-all/time-all/list${path}`,           ALL_GAMES,    ALL_TIMES, ALL_GAME_STYLES,          LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=all Time=all)`,            `/game-1/game-style-all/time-all/list${path}`,             SMM1_ONLY,    ALL_TIMES, ALL_GAME_STYLES,          LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=all Time=all)`,          `/game-3ds/game-style-all/time-all/list${path}`,           SMM3DS_ONLY,  ALL_TIMES, ALL_GAME_STYLES,          LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=all Time=all)`,            `/game-2/game-style-all/time-all/list${path}`,             SMM2_ONLY,    ALL_TIMES, ALL_GAME_STYLES,          LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=all Time=all)`,        `/game-1,3ds/game-style-all/time-all/list${path}`,         SMM1_AND_3DS, ALL_TIMES, ALL_GAME_STYLES,          LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=all Time=all)`,          `/game-1,2/game-style-all/time-all/list${path}`,           SMM1_AND_2,   ALL_TIMES, ALL_GAME_STYLES,          LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=all Time=all)`,        `/game-3ds,2/game-style-all/time-all/list${path}`,         SMM3DS_AND_2, ALL_TIMES, ALL_GAME_STYLES,          LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=all Time=all)`,          `/game-all/game-style-all/time-all/card${path}`,           ALL_GAMES,    ALL_TIMES, ALL_GAME_STYLES,          CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=all Time=all)`,            `/game-1/game-style-all/time-all/card${path}`,             SMM1_ONLY,    ALL_TIMES, ALL_GAME_STYLES,          CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=all Time=all)`,          `/game-3ds/game-style-all/time-all/card${path}`,           SMM3DS_ONLY,  ALL_TIMES, ALL_GAME_STYLES,          CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=all Time=all)`,            `/game-2/game-style-all/time-all/card${path}`,             SMM2_ONLY,    ALL_TIMES, ALL_GAME_STYLES,          CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=all Time=all)`,        `/game-1,3ds/game-style-all/time-all/card${path}`,         SMM1_AND_3DS, ALL_TIMES, ALL_GAME_STYLES,          CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=all Time=all)`,          `/game-1,2/game-style-all/time-all/card${path}`,           SMM1_AND_2,   ALL_TIMES, ALL_GAME_STYLES,          CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=all Time=all)`,        `/game-3ds,2/game-style-all/time-all/card${path}`,         SMM3DS_AND_2, ALL_TIMES, ALL_GAME_STYLES,          CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=all Time=all)`,         `/game-all/game-style-all/time-all/table${path}`,          ALL_GAMES,    ALL_TIMES, ALL_GAME_STYLES,          TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=all Time=all)`,           `/game-1/game-style-all/time-all/table${path}`,            SMM1_ONLY,    ALL_TIMES, ALL_GAME_STYLES,          TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=all Time=all)`,         `/game-3ds/game-style-all/time-all/table${path}`,          SMM3DS_ONLY,  ALL_TIMES, ALL_GAME_STYLES,          TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=all Time=all)`,           `/game-2/game-style-all/time-all/table${path}`,            SMM2_ONLY,    ALL_TIMES, ALL_GAME_STYLES,          TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=all Time=all)`,       `/game-1,3ds/game-style-all/time-all/table${path}`,        SMM1_AND_3DS, ALL_TIMES, ALL_GAME_STYLES,          TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=all Time=all)`,         `/game-1,2/game-style-all/time-all/table${path}`,          SMM1_AND_2,   ALL_TIMES, ALL_GAME_STYLES,          TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=all Time=all)`,       `/game-3ds,2/game-style-all/time-all/table${path}`,        SMM3DS_AND_2, ALL_TIMES, ALL_GAME_STYLES,          TABLE, routeCallback,),

                //endregion -------------------- Game style (all) --------------------

                //region -------------------- Game style (smb) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1 Time=all)`,            `/game-all/game-style-1/time-all/list${path}`,             ALL_GAMES,    ALL_TIMES, SMB_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=1 Time=all)`,              `/game-1/game-style-1/time-all/list${path}`,               SMM1_ONLY,    ALL_TIMES, SMB_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=1 Time=all)`,            `/game-3ds/game-style-1/time-all/list${path}`,             SMM3DS_ONLY,  ALL_TIMES, SMB_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1 Time=all)`,              `/game-2/game-style-1/time-all/list${path}`,               SMM2_ONLY,    ALL_TIMES, SMB_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=1 Time=all)`,          `/game-1,3ds/game-style-1/time-all/list${path}`,           SMM1_AND_3DS, ALL_TIMES, SMB_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1 Time=all)`,            `/game-1,2/game-style-1/time-all/list${path}`,             SMM1_AND_2,   ALL_TIMES, SMB_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1 Time=all)`,          `/game-3ds,2/game-style-1/time-all/list${path}`,           SMM3DS_AND_2, ALL_TIMES, SMB_ONLY,                 LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1 Time=all)`,            `/game-all/game-style-1/time-all/card${path}`,             ALL_GAMES,    ALL_TIMES, SMB_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=1 Time=all)`,              `/game-1/game-style-1/time-all/card${path}`,               SMM1_ONLY,    ALL_TIMES, SMB_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=1 Time=all)`,            `/game-3ds/game-style-1/time-all/card${path}`,             SMM3DS_ONLY,  ALL_TIMES, SMB_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1 Time=all)`,              `/game-2/game-style-1/time-all/card${path}`,               SMM2_ONLY,    ALL_TIMES, SMB_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=1 Time=all)`,          `/game-1,3ds/game-style-1/time-all/card${path}`,           SMM1_AND_3DS, ALL_TIMES, SMB_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1 Time=all)`,            `/game-1,2/game-style-1/time-all/card${path}`,             SMM1_AND_2,   ALL_TIMES, SMB_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1 Time=all)`,          `/game-3ds,2/game-style-1/time-all/card${path}`,           SMM3DS_AND_2, ALL_TIMES, SMB_ONLY,                 CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1 Time=all)`,           `/game-all/game-style-1/time-all/table${path}`,            ALL_GAMES,    ALL_TIMES, SMB_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=1 Time=all)`,             `/game-1/game-style-1/time-all/table${path}`,              SMM1_ONLY,    ALL_TIMES, SMB_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=1 Time=all)`,           `/game-3ds/game-style-1/time-all/table${path}`,            SMM3DS_ONLY,  ALL_TIMES, SMB_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1 Time=all)`,             `/game-2/game-style-1/time-all/table${path}`,              SMM2_ONLY,    ALL_TIMES, SMB_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=1 Time=all)`,         `/game-1,3ds/game-style-1/time-all/table${path}`,          SMM1_AND_3DS, ALL_TIMES, SMB_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1 Time=all)`,           `/game-1,2/game-style-1/time-all/table${path}`,            SMM1_AND_2,   ALL_TIMES, SMB_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1 Time=all)`,         `/game-3ds,2/game-style-1/time-all/table${path}`,          SMM3DS_AND_2, ALL_TIMES, SMB_ONLY,                 TABLE, routeCallback,),

                //endregion -------------------- Game style (smb) --------------------
                //region -------------------- Game style (smb3) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3 Time=all)`,            `/game-all/game-style-3/time-all/list${path}`,             ALL_GAMES,    ALL_TIMES, SMB3_ONLY,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=3 Time=all)`,              `/game-1/game-style-3/time-all/list${path}`,               SMM1_ONLY,    ALL_TIMES, SMB3_ONLY,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=3 Time=all)`,            `/game-3ds/game-style-3/time-all/list${path}`,             SMM3DS_ONLY,  ALL_TIMES, SMB3_ONLY,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3 Time=all)`,              `/game-2/game-style-3/time-all/list${path}`,               SMM2_ONLY,    ALL_TIMES, SMB3_ONLY,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=3 Time=all)`,          `/game-1,3ds/game-style-3/time-all/list${path}`,           SMM1_AND_3DS, ALL_TIMES, SMB3_ONLY,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3 Time=all)`,            `/game-1,2/game-style-3/time-all/list${path}`,             SMM1_AND_2,   ALL_TIMES, SMB3_ONLY,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3 Time=all)`,          `/game-3ds,2/game-style-3/time-all/list${path}`,           SMM3DS_AND_2, ALL_TIMES, SMB3_ONLY,                LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3 Time=all)`,            `/game-all/game-style-3/time-all/card${path}`,             ALL_GAMES,    ALL_TIMES, SMB3_ONLY,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=3 Time=all)`,              `/game-1/game-style-3/time-all/card${path}`,               SMM1_ONLY,    ALL_TIMES, SMB3_ONLY,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=3 Time=all)`,            `/game-3ds/game-style-3/time-all/card${path}`,             SMM3DS_ONLY,  ALL_TIMES, SMB3_ONLY,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3 Time=all)`,              `/game-2/game-style-3/time-all/card${path}`,               SMM2_ONLY,    ALL_TIMES, SMB3_ONLY,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=3 Time=all)`,          `/game-1,3ds/game-style-3/time-all/card${path}`,           SMM1_AND_3DS, ALL_TIMES, SMB3_ONLY,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3 Time=all)`,            `/game-1,2/game-style-3/time-all/card${path}`,             SMM1_AND_2,   ALL_TIMES, SMB3_ONLY,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3 Time=all)`,          `/game-3ds,2/game-style-3/time-all/card${path}`,           SMM3DS_AND_2, ALL_TIMES, SMB3_ONLY,                CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3 Time=all)`,           `/game-all/game-style-3/time-all/table${path}`,            ALL_GAMES,    ALL_TIMES, SMB3_ONLY,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=3 Time=all)`,             `/game-1/game-style-3/time-all/table${path}`,              SMM1_ONLY,    ALL_TIMES, SMB3_ONLY,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=3 Time=all)`,           `/game-3ds/game-style-3/time-all/table${path}`,            SMM3DS_ONLY,  ALL_TIMES, SMB3_ONLY,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3 Time=all)`,             `/game-2/game-style-3/time-all/table${path}`,              SMM2_ONLY,    ALL_TIMES, SMB3_ONLY,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=3 Time=all)`,         `/game-1,3ds/game-style-3/time-all/table${path}`,          SMM1_AND_3DS, ALL_TIMES, SMB3_ONLY,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3 Time=all)`,           `/game-1,2/game-style-3/time-all/table${path}`,            SMM1_AND_2,   ALL_TIMES, SMB3_ONLY,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3 Time=all)`,         `/game-3ds,2/game-style-3/time-all/table${path}`,          SMM3DS_AND_2, ALL_TIMES, SMB3_ONLY,                TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3) --------------------
                //region -------------------- Game style (smw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=W Time=all)`,            `/game-all/game-style-w/time-all/list${path}`,             ALL_GAMES,    ALL_TIMES, SMW_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=W Time=all)`,              `/game-1/game-style-w/time-all/list${path}`,               SMM1_ONLY,    ALL_TIMES, SMW_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=W Time=all)`,            `/game-3ds/game-style-w/time-all/list${path}`,             SMM3DS_ONLY,  ALL_TIMES, SMW_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=W Time=all)`,              `/game-2/game-style-w/time-all/list${path}`,               SMM2_ONLY,    ALL_TIMES, SMW_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=W Time=all)`,          `/game-1,3ds/game-style-w/time-all/list${path}`,           SMM1_AND_3DS, ALL_TIMES, SMW_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=W Time=all)`,            `/game-1,2/game-style-w/time-all/list${path}`,             SMM1_AND_2,   ALL_TIMES, SMW_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=W Time=all)`,          `/game-3ds,2/game-style-w/time-all/list${path}`,           SMM3DS_AND_2, ALL_TIMES, SMW_ONLY,                 LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=W Time=all)`,            `/game-all/game-style-w/time-all/card${path}`,             ALL_GAMES,    ALL_TIMES, SMW_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=W Time=all)`,              `/game-1/game-style-w/time-all/card${path}`,               SMM1_ONLY,    ALL_TIMES, SMW_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=W Time=all)`,            `/game-3ds/game-style-w/time-all/card${path}`,             SMM3DS_ONLY,  ALL_TIMES, SMW_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=W Time=all)`,              `/game-2/game-style-w/time-all/card${path}`,               SMM2_ONLY,    ALL_TIMES, SMW_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=W Time=all)`,          `/game-1,3ds/game-style-w/time-all/card${path}`,           SMM1_AND_3DS, ALL_TIMES, SMW_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=W Time=all)`,            `/game-1,2/game-style-w/time-all/card${path}`,             SMM1_AND_2,   ALL_TIMES, SMW_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=W Time=all)`,          `/game-3ds,2/game-style-w/time-all/card${path}`,           SMM3DS_AND_2, ALL_TIMES, SMW_ONLY,                 CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=W Time=all)`,           `/game-all/game-style-w/time-all/table${path}`,            ALL_GAMES,    ALL_TIMES, SMW_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=W Time=all)`,             `/game-1/game-style-w/time-all/table${path}`,              SMM1_ONLY,    ALL_TIMES, SMW_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=W Time=all)`,           `/game-3ds/game-style-w/time-all/table${path}`,            SMM3DS_ONLY,  ALL_TIMES, SMW_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=W Time=all)`,             `/game-2/game-style-w/time-all/table${path}`,              SMM2_ONLY,    ALL_TIMES, SMW_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=W Time=all)`,         `/game-1,3ds/game-style-w/time-all/table${path}`,          SMM1_AND_3DS, ALL_TIMES, SMW_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=W Time=all)`,           `/game-1,2/game-style-w/time-all/table${path}`,            SMM1_AND_2,   ALL_TIMES, SMW_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=W Time=all)`,         `/game-3ds,2/game-style-w/time-all/table${path}`,          SMM3DS_AND_2, ALL_TIMES, SMW_ONLY,                 TABLE, routeCallback,),

                //endregion -------------------- Game style (smw) --------------------
                //region -------------------- Game style (nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=U Time=all)`,            `/game-all/game-style-u/time-all/list${path}`,             ALL_GAMES,    ALL_TIMES, NSMBU_ONLY,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=U Time=all)`,              `/game-1/game-style-u/time-all/list${path}`,               SMM1_ONLY,    ALL_TIMES, NSMBU_ONLY,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=U Time=all)`,            `/game-3ds/game-style-u/time-all/list${path}`,             SMM3DS_ONLY,  ALL_TIMES, NSMBU_ONLY,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=U Time=all)`,              `/game-2/game-style-u/time-all/list${path}`,               SMM2_ONLY,    ALL_TIMES, NSMBU_ONLY,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=U Time=all)`,          `/game-1,3ds/game-style-u/time-all/list${path}`,           SMM1_AND_3DS, ALL_TIMES, NSMBU_ONLY,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=U Time=all)`,            `/game-1,2/game-style-u/time-all/list${path}`,             SMM1_AND_2,   ALL_TIMES, NSMBU_ONLY,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=U Time=all)`,          `/game-3ds,2/game-style-u/time-all/list${path}`,           SMM3DS_AND_2, ALL_TIMES, NSMBU_ONLY,               LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=U Time=all)`,            `/game-all/game-style-u/time-all/card${path}`,             ALL_GAMES,    ALL_TIMES, NSMBU_ONLY,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=U Time=all)`,              `/game-1/game-style-u/time-all/card${path}`,               SMM1_ONLY,    ALL_TIMES, NSMBU_ONLY,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=U Time=all)`,            `/game-3ds/game-style-u/time-all/card${path}`,             SMM3DS_ONLY,  ALL_TIMES, NSMBU_ONLY,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=U Time=all)`,              `/game-2/game-style-u/time-all/card${path}`,               SMM2_ONLY,    ALL_TIMES, NSMBU_ONLY,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=U Time=all)`,          `/game-1,3ds/game-style-u/time-all/card${path}`,           SMM1_AND_3DS, ALL_TIMES, NSMBU_ONLY,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=U Time=all)`,            `/game-1,2/game-style-u/time-all/card${path}`,             SMM1_AND_2,   ALL_TIMES, NSMBU_ONLY,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=U Time=all)`,          `/game-3ds,2/game-style-u/time-all/card${path}`,           SMM3DS_AND_2, ALL_TIMES, NSMBU_ONLY,               CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=U Time=all)`,           `/game-all/game-style-u/time-all/table${path}`,            ALL_GAMES,    ALL_TIMES, NSMBU_ONLY,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=U Time=all)`,             `/game-1/game-style-u/time-all/table${path}`,              SMM1_ONLY,    ALL_TIMES, NSMBU_ONLY,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=U Time=all)`,           `/game-3ds/game-style-u/time-all/table${path}`,            SMM3DS_ONLY,  ALL_TIMES, NSMBU_ONLY,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=U Time=all)`,             `/game-2/game-style-u/time-all/table${path}`,              SMM2_ONLY,    ALL_TIMES, NSMBU_ONLY,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=U Time=all)`,         `/game-1,3ds/game-style-u/time-all/table${path}`,          SMM1_AND_3DS, ALL_TIMES, NSMBU_ONLY,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=U Time=all)`,           `/game-1,2/game-style-u/time-all/table${path}`,            SMM1_AND_2,   ALL_TIMES, NSMBU_ONLY,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=U Time=all)`,         `/game-3ds,2/game-style-u/time-all/table${path}`,          SMM3DS_AND_2, ALL_TIMES, NSMBU_ONLY,               TABLE, routeCallback,),

                //endregion -------------------- Game style (nsmbu) --------------------
                //region -------------------- Game style (sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3DW Time=all)`,          `/game-all/game-style-3dw/time-all/list${path}`,           ALL_GAMES,    ALL_TIMES, SM3DW_ONLY,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3DW Time=all)`,            `/game-2/game-style-3dw/time-all/list${path}`,             SMM2_ONLY,    ALL_TIMES, SM3DW_ONLY,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3DW Time=all)`,          `/game-1,2/game-style-3dw/time-all/list${path}`,           SMM1_AND_2,   ALL_TIMES, SM3DW_ONLY,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3DW Time=all)`,        `/game-3ds,2/game-style-3dw/time-all/list${path}`,         SMM3DS_AND_2, ALL_TIMES, SM3DW_ONLY,               LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3DW Time=all)`,          `/game-all/game-style-3dw/time-all/card${path}`,           ALL_GAMES,    ALL_TIMES, SM3DW_ONLY,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3DW Time=all)`,            `/game-2/game-style-3dw/time-all/card${path}`,             SMM2_ONLY,    ALL_TIMES, SM3DW_ONLY,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3DW Time=all)`,          `/game-1,2/game-style-3dw/time-all/card${path}`,           SMM1_AND_2,   ALL_TIMES, SM3DW_ONLY,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3DW Time=all)`,        `/game-3ds,2/game-style-3dw/time-all/card${path}`,         SMM3DS_AND_2, ALL_TIMES, SM3DW_ONLY,               CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3DW Time=all)`,         `/game-all/game-style-3dw/time-all/table${path}`,          ALL_GAMES,    ALL_TIMES, SM3DW_ONLY,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3DW Time=all)`,           `/game-2/game-style-3dw/time-all/table${path}`,            SMM2_ONLY,    ALL_TIMES, SM3DW_ONLY,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3DW Time=all)`,         `/game-1,2/game-style-3dw/time-all/table${path}`,          SMM1_AND_2,   ALL_TIMES, SM3DW_ONLY,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3DW Time=all)`,       `/game-3ds,2/game-style-3dw/time-all/table${path}`,        SMM3DS_AND_2, ALL_TIMES, SM3DW_ONLY,               TABLE, routeCallback,),

                //endregion -------------------- Game style (sm3dw) --------------------

                //region -------------------- Game style (smb + smb3) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&3 Time=all)`,          `/game-all/game-style-1,3/time-all/list${path}`,           ALL_GAMES,    ALL_TIMES, SMB_AND_SMB3,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=1&3 Time=all)`,            `/game-1/game-style-1,3/time-all/list${path}`,             SMM1_ONLY,    ALL_TIMES, SMB_AND_SMB3,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=1&3 Time=all)`,          `/game-3ds/game-style-1,3/time-all/list${path}`,           SMM3DS_ONLY,  ALL_TIMES, SMB_AND_SMB3,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&3 Time=all)`,            `/game-2/game-style-1,3/time-all/list${path}`,             SMM2_ONLY,    ALL_TIMES, SMB_AND_SMB3,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=1&3 Time=all)`,        `/game-1,3ds/game-style-1,3/time-all/list${path}`,         SMM1_AND_3DS, ALL_TIMES, SMB_AND_SMB3,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&3 Time=all)`,          `/game-1,2/game-style-1,3/time-all/list${path}`,           SMM1_AND_2,   ALL_TIMES, SMB_AND_SMB3,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&3 Time=all)`,        `/game-3ds,2/game-style-1,3/time-all/list${path}`,         SMM3DS_AND_2, ALL_TIMES, SMB_AND_SMB3,             LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&3 Time=all)`,          `/game-all/game-style-1,3/time-all/card${path}`,           ALL_GAMES,    ALL_TIMES, SMB_AND_SMB3,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=1&3 Time=all)`,            `/game-1/game-style-1,3/time-all/card${path}`,             SMM1_ONLY,    ALL_TIMES, SMB_AND_SMB3,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=1&3 Time=all)`,          `/game-3ds/game-style-1,3/time-all/card${path}`,           SMM3DS_ONLY,  ALL_TIMES, SMB_AND_SMB3,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&3 Time=all)`,            `/game-2/game-style-1,3/time-all/card${path}`,             SMM2_ONLY,    ALL_TIMES, SMB_AND_SMB3,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=1&3 Time=all)`,        `/game-1,3ds/game-style-1,3/time-all/card${path}`,         SMM1_AND_3DS, ALL_TIMES, SMB_AND_SMB3,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&3 Time=all)`,          `/game-1,2/game-style-1,3/time-all/card${path}`,           SMM1_AND_2,   ALL_TIMES, SMB_AND_SMB3,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&3 Time=all)`,        `/game-3ds,2/game-style-1,3/time-all/card${path}`,         SMM3DS_AND_2, ALL_TIMES, SMB_AND_SMB3,             CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&3 Time=all)`,         `/game-all/game-style-1,3/time-all/table${path}`,          ALL_GAMES,    ALL_TIMES, SMB_AND_SMB3,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=1&3 Time=all)`,           `/game-1/game-style-1,3/time-all/table${path}`,            SMM1_ONLY,    ALL_TIMES, SMB_AND_SMB3,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=1&3 Time=all)`,         `/game-3ds/game-style-1,3/time-all/table${path}`,          SMM3DS_ONLY,  ALL_TIMES, SMB_AND_SMB3,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&3 Time=all)`,           `/game-2/game-style-1,3/time-all/table${path}`,            SMM2_ONLY,    ALL_TIMES, SMB_AND_SMB3,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=1&3 Time=all)`,       `/game-1,3ds/game-style-1,3/time-all/table${path}`,        SMM1_AND_3DS, ALL_TIMES, SMB_AND_SMB3,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&3 Time=all)`,         `/game-1,2/game-style-1,3/time-all/table${path}`,          SMM1_AND_2,   ALL_TIMES, SMB_AND_SMB3,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&3 Time=all)`,       `/game-3ds,2/game-style-1,3/time-all/table${path}`,        SMM3DS_AND_2, ALL_TIMES, SMB_AND_SMB3,             TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3) --------------------
                //region -------------------- Game style (smb + smw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&W Time=all)`,          `/game-all/game-style-1,w/time-all/list${path}`,           ALL_GAMES,    ALL_TIMES, SMB_AND_SMW,              LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=1&W Time=all)`,            `/game-1/game-style-1,w/time-all/list${path}`,             SMM1_ONLY,    ALL_TIMES, SMB_AND_SMW,              LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=1&W Time=all)`,          `/game-3ds/game-style-1,w/time-all/list${path}`,           SMM3DS_ONLY,  ALL_TIMES, SMB_AND_SMW,              LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&W Time=all)`,            `/game-2/game-style-1,w/time-all/list${path}`,             SMM2_ONLY,    ALL_TIMES, SMB_AND_SMW,              LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=1&W Time=all)`,        `/game-1,3ds/game-style-1,w/time-all/list${path}`,         SMM1_AND_3DS, ALL_TIMES, SMB_AND_SMW,              LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&W Time=all)`,          `/game-1,2/game-style-1,w/time-all/list${path}`,           SMM1_AND_2,   ALL_TIMES, SMB_AND_SMW,              LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&W Time=all)`,        `/game-3ds,2/game-style-1,w/time-all/list${path}`,         SMM3DS_AND_2, ALL_TIMES, SMB_AND_SMW,              LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&W Time=all)`,          `/game-all/game-style-1,w/time-all/card${path}`,           ALL_GAMES,    ALL_TIMES, SMB_AND_SMW,              CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=1&W Time=all)`,            `/game-1/game-style-1,w/time-all/card${path}`,             SMM1_ONLY,    ALL_TIMES, SMB_AND_SMW,              CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=1&W Time=all)`,          `/game-3ds/game-style-1,w/time-all/card${path}`,           SMM3DS_ONLY,  ALL_TIMES, SMB_AND_SMW,              CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&W Time=all)`,            `/game-2/game-style-1,w/time-all/card${path}`,             SMM2_ONLY,    ALL_TIMES, SMB_AND_SMW,              CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=1&W Time=all)`,        `/game-1,3ds/game-style-1,w/time-all/card${path}`,         SMM1_AND_3DS, ALL_TIMES, SMB_AND_SMW,              CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&W Time=all)`,          `/game-1,2/game-style-1,w/time-all/card${path}`,           SMM1_AND_2,   ALL_TIMES, SMB_AND_SMW,              CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&W Time=all)`,        `/game-3ds,2/game-style-1,w/time-all/card${path}`,         SMM3DS_AND_2, ALL_TIMES, SMB_AND_SMW,              CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&W Time=all)`,         `/game-all/game-style-1,w/time-all/table${path}`,          ALL_GAMES,    ALL_TIMES, SMB_AND_SMW,              TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=1&W Time=all)`,           `/game-1/game-style-1,w/time-all/table${path}`,            SMM1_ONLY,    ALL_TIMES, SMB_AND_SMW,              TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=1&W Time=all)`,         `/game-3ds/game-style-1,w/time-all/table${path}`,          SMM3DS_ONLY,  ALL_TIMES, SMB_AND_SMW,              TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&W Time=all)`,           `/game-2/game-style-1,w/time-all/table${path}`,            SMM2_ONLY,    ALL_TIMES, SMB_AND_SMW,              TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=1&W Time=all)`,       `/game-1,3ds/game-style-1,w/time-all/table${path}`,        SMM1_AND_3DS, ALL_TIMES, SMB_AND_SMW,              TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&W Time=all)`,         `/game-1,2/game-style-1,w/time-all/table${path}`,          SMM1_AND_2,   ALL_TIMES, SMB_AND_SMW,              TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&W Time=all)`,       `/game-3ds,2/game-style-1,w/time-all/table${path}`,        SMM3DS_AND_2, ALL_TIMES, SMB_AND_SMW,              TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smw) --------------------
                //region -------------------- Game style (smb + nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&U Time=all)`,          `/game-all/game-style-1,u/time-all/list${path}`,           ALL_GAMES,    ALL_TIMES, SMB_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=1&U Time=all)`,            `/game-1/game-style-1,u/time-all/list${path}`,             SMM1_ONLY,    ALL_TIMES, SMB_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=1&U Time=all)`,          `/game-3ds/game-style-1,u/time-all/list${path}`,           SMM3DS_ONLY,  ALL_TIMES, SMB_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&U Time=all)`,            `/game-2/game-style-1,u/time-all/list${path}`,             SMM2_ONLY,    ALL_TIMES, SMB_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=1&U Time=all)`,        `/game-1,3ds/game-style-1,u/time-all/list${path}`,         SMM1_AND_3DS, ALL_TIMES, SMB_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&U Time=all)`,          `/game-1,2/game-style-1,u/time-all/list${path}`,           SMM1_AND_2,   ALL_TIMES, SMB_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&U Time=all)`,        `/game-3ds,2/game-style-1,u/time-all/list${path}`,         SMM3DS_AND_2, ALL_TIMES, SMB_AND_NSMBU,            LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&U Time=all)`,          `/game-all/game-style-1,u/time-all/card${path}`,           ALL_GAMES,    ALL_TIMES, SMB_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=1&U Time=all)`,            `/game-1/game-style-1,u/time-all/card${path}`,             SMM1_ONLY,    ALL_TIMES, SMB_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=1&U Time=all)`,          `/game-3ds/game-style-1,u/time-all/card${path}`,           SMM3DS_ONLY,  ALL_TIMES, SMB_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&U Time=all)`,            `/game-2/game-style-1,u/time-all/card${path}`,             SMM2_ONLY,    ALL_TIMES, SMB_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=1&U Time=all)`,        `/game-1,3ds/game-style-1,u/time-all/card${path}`,         SMM1_AND_3DS, ALL_TIMES, SMB_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&U Time=all)`,          `/game-1,2/game-style-1,u/time-all/card${path}`,           SMM1_AND_2,   ALL_TIMES, SMB_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&U Time=all)`,        `/game-3ds,2/game-style-1,u/time-all/card${path}`,         SMM3DS_AND_2, ALL_TIMES, SMB_AND_NSMBU,            CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&U Time=all)`,         `/game-all/game-style-1,u/time-all/table${path}`,          ALL_GAMES,    ALL_TIMES, SMB_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=1&U Time=all)`,           `/game-1/game-style-1,u/time-all/table${path}`,            SMM1_ONLY,    ALL_TIMES, SMB_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=1&U Time=all)`,         `/game-3ds/game-style-1,u/time-all/table${path}`,          SMM3DS_ONLY,  ALL_TIMES, SMB_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&U Time=all)`,           `/game-2/game-style-1,u/time-all/table${path}`,            SMM2_ONLY,    ALL_TIMES, SMB_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=1&U Time=all)`,       `/game-1,3ds/game-style-1,u/time-all/table${path}`,        SMM1_AND_3DS, ALL_TIMES, SMB_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&U Time=all)`,         `/game-1,2/game-style-1,u/time-all/table${path}`,          SMM1_AND_2,   ALL_TIMES, SMB_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&U Time=all)`,       `/game-3ds,2/game-style-1,u/time-all/table${path}`,        SMM3DS_AND_2, ALL_TIMES, SMB_AND_NSMBU,            TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + nsmbu) --------------------
                //region -------------------- Game style (smb + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&3DW Time=all)`,        `/game-all/game-style-1,3dw/time-all/list${path}`,         ALL_GAMES,    ALL_TIMES, SMB_AND_SM3DW,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&3DW Time=all)`,          `/game-2/game-style-1,3dw/time-all/list${path}`,           SMM2_ONLY,    ALL_TIMES, SMB_AND_SM3DW,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&3DW Time=all)`,        `/game-1,2/game-style-1,3dw/time-all/list${path}`,         SMM1_AND_2,   ALL_TIMES, SMB_AND_SM3DW,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&3DW Time=all)`,      `/game-3ds,2/game-style-1,3dw/time-all/list${path}`,       SMM3DS_AND_2, ALL_TIMES, SMB_AND_SM3DW,            LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&3DW Time=all)`,        `/game-all/game-style-1,3dw/time-all/card${path}`,         ALL_GAMES,    ALL_TIMES, SMB_AND_SM3DW,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&3DW Time=all)`,          `/game-2/game-style-1,3dw/time-all/card${path}`,           SMM2_ONLY,    ALL_TIMES, SMB_AND_SM3DW,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&3DW Time=all)`,        `/game-1,2/game-style-1,3dw/time-all/card${path}`,         SMM1_AND_2,   ALL_TIMES, SMB_AND_SM3DW,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&3DW Time=all)`,      `/game-3ds,2/game-style-1,3dw/time-all/card${path}`,       SMM3DS_AND_2, ALL_TIMES, SMB_AND_SM3DW,            CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&3DW Time=all)`,       `/game-all/game-style-1,3dw/time-all/table${path}`,        ALL_GAMES,    ALL_TIMES, SMB_AND_SM3DW,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&3DW Time=all)`,         `/game-2/game-style-1,3dw/time-all/table${path}`,          SMM2_ONLY,    ALL_TIMES, SMB_AND_SM3DW,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&3DW Time=all)`,       `/game-1,2/game-style-1,3dw/time-all/table${path}`,        SMM1_AND_2,   ALL_TIMES, SMB_AND_SM3DW,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&3DW Time=all)`,     `/game-3ds,2/game-style-1,3dw/time-all/table${path}`,      SMM3DS_AND_2, ALL_TIMES, SMB_AND_SM3DW,            TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + sm3dw) --------------------
                //region -------------------- Game style (smb3 + smw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3&W Time=all)`,          `/game-all/game-style-3,w/time-all/list${path}`,           ALL_GAMES,    ALL_TIMES, SMB3_AND_SMW,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=3&W Time=all)`,            `/game-1/game-style-3,w/time-all/list${path}`,             SMM1_ONLY,    ALL_TIMES, SMB3_AND_SMW,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=3&W Time=all)`,          `/game-3ds/game-style-3,w/time-all/list${path}`,           SMM3DS_ONLY,  ALL_TIMES, SMB3_AND_SMW,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3&W Time=all)`,            `/game-2/game-style-3,w/time-all/list${path}`,             SMM2_ONLY,    ALL_TIMES, SMB3_AND_SMW,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3&3DS GameStyle=3&W Time=all)`,        `/game-3,3ds/game-style-3,w/time-all/list${path}`,         SMM1_AND_3DS, ALL_TIMES, SMB3_AND_SMW,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3&W Time=all)`,          `/game-1,2/game-style-3,w/time-all/list${path}`,           SMM1_AND_2,   ALL_TIMES, SMB3_AND_SMW,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3&W Time=all)`,        `/game-3ds,2/game-style-3,w/time-all/list${path}`,         SMM3DS_AND_2, ALL_TIMES, SMB3_AND_SMW,             LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3&W Time=all)`,          `/game-all/game-style-3,w/time-all/card${path}`,             ALL_GAMES,    ALL_TIMES, SMB3_AND_SMW,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=3&W Time=all)`,            `/game-1/game-style-3,w/time-all/card${path}`,               SMM1_ONLY,    ALL_TIMES, SMB3_AND_SMW,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=3&W Time=all)`,          `/game-3ds/game-style-3,w/time-all/card${path}`,             SMM3DS_ONLY,  ALL_TIMES, SMB3_AND_SMW,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3&W Time=all)`,            `/game-2/game-style-3,w/time-all/card${path}`,               SMM2_ONLY,    ALL_TIMES, SMB3_AND_SMW,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3&3DS GameStyle=3&W Time=all)`,        `/game-3,3ds/game-style-3,w/time-all/card${path}`,           SMM1_AND_3DS, ALL_TIMES, SMB3_AND_SMW,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3&W Time=all)`,          `/game-1,2/game-style-3,w/time-all/card${path}`,             SMM1_AND_2,   ALL_TIMES, SMB3_AND_SMW,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3&W Time=all)`,        `/game-3ds,2/game-style-3,w/time-all/card${path}`,           SMM3DS_AND_2, ALL_TIMES, SMB3_AND_SMW,           CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3&W Time=all)`,         `/game-all/game-style-3,w/time-all/table${path}`,            ALL_GAMES,    ALL_TIMES, SMB3_AND_SMW,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=3&W Time=all)`,           `/game-1/game-style-3,w/time-all/table${path}`,              SMM1_ONLY,    ALL_TIMES, SMB3_AND_SMW,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=3&W Time=all)`,         `/game-3ds/game-style-3,w/time-all/table${path}`,            SMM3DS_ONLY,  ALL_TIMES, SMB3_AND_SMW,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3&W Time=all)`,           `/game-2/game-style-3,w/time-all/table${path}`,              SMM2_ONLY,    ALL_TIMES, SMB3_AND_SMW,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3&3DS GameStyle=3&W Time=all)`,       `/game-3,3ds/game-style-3,w/time-all/table${path}`,          SMM1_AND_3DS, ALL_TIMES, SMB3_AND_SMW,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3&W Time=all)`,         `/game-1,2/game-style-3,w/time-all/table${path}`,            SMM1_AND_2,   ALL_TIMES, SMB3_AND_SMW,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3&W Time=all)`,       `/game-3ds,2/game-style-3,w/time-all/table${path}`,          SMM3DS_AND_2, ALL_TIMES, SMB3_AND_SMW,           TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + smw) --------------------
                //region -------------------- Game style (smb3 + nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3&U Time=all)`,          `/game-all/game-style-3,u/time-all/list${path}`,           ALL_GAMES,    ALL_TIMES, SMB3_AND_NSMBU,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=3&U Time=all)`,            `/game-1/game-style-3,u/time-all/list${path}`,             SMM1_ONLY,    ALL_TIMES, SMB3_AND_NSMBU,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=3&U Time=all)`,          `/game-3ds/game-style-3,u/time-all/list${path}`,           SMM3DS_ONLY,  ALL_TIMES, SMB3_AND_NSMBU,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3&U Time=all)`,            `/game-2/game-style-3,u/time-all/list${path}`,             SMM2_ONLY,    ALL_TIMES, SMB3_AND_NSMBU,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=3&U Time=all)`,        `/game-3,3ds/game-style-3,u/time-all/list${path}`,         SMM1_AND_3DS, ALL_TIMES, SMB3_AND_NSMBU,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3&U Time=all)`,          `/game-3,2/game-style-3,u/time-all/list${path}`,           SMM1_AND_2,   ALL_TIMES, SMB3_AND_NSMBU,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3&U Time=all)`,        `/game-3ds,2/game-style-3,u/time-all/list${path}`,         SMM3DS_AND_2, ALL_TIMES, SMB3_AND_NSMBU,           LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3&U Time=all)`,          `/game-all/game-style-3,u/time-all/card${path}`,           ALL_GAMES,    ALL_TIMES, SMB3_AND_NSMBU,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=3&U Time=all)`,            `/game-1/game-style-3,u/time-all/card${path}`,             SMM1_ONLY,    ALL_TIMES, SMB3_AND_NSMBU,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=3&U Time=all)`,          `/game-3ds/game-style-3,u/time-all/card${path}`,           SMM3DS_ONLY,  ALL_TIMES, SMB3_AND_NSMBU,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3&U Time=all)`,            `/game-2/game-style-3,u/time-all/card${path}`,             SMM2_ONLY,    ALL_TIMES, SMB3_AND_NSMBU,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=3&U Time=all)`,        `/game-3,3ds/game-style-3,u/time-all/card${path}`,         SMM1_AND_3DS, ALL_TIMES, SMB3_AND_NSMBU,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3&U Time=all)`,          `/game-3,2/game-style-3,u/time-all/card${path}`,           SMM1_AND_2,   ALL_TIMES, SMB3_AND_NSMBU,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3&U Time=all)`,        `/game-3ds,2/game-style-3,u/time-all/card${path}`,         SMM3DS_AND_2, ALL_TIMES, SMB3_AND_NSMBU,           CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3&U Time=all)`,         `/game-all/game-style-3,u/time-all/table${path}`,          ALL_GAMES,    ALL_TIMES, SMB3_AND_NSMBU,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=3&U Time=all)`,           `/game-1/game-style-3,u/time-all/table${path}`,            SMM1_ONLY,    ALL_TIMES, SMB3_AND_NSMBU,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=3&U Time=all)`,         `/game-3ds/game-style-3,u/time-all/table${path}`,          SMM3DS_ONLY,  ALL_TIMES, SMB3_AND_NSMBU,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3&U Time=all)`,           `/game-2/game-style-3,u/time-all/table${path}`,            SMM2_ONLY,    ALL_TIMES, SMB3_AND_NSMBU,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=3&U Time=all)`,       `/game-3,3ds/game-style-3,u/time-all/table${path}`,        SMM1_AND_3DS, ALL_TIMES, SMB3_AND_NSMBU,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3&U Time=all)`,         `/game-3,2/game-style-3,u/time-all/table${path}`,          SMM1_AND_2,   ALL_TIMES, SMB3_AND_NSMBU,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3&U Time=all)`,       `/game-3ds,2/game-style-3,u/time-all/table${path}`,        SMM3DS_AND_2, ALL_TIMES, SMB3_AND_NSMBU,           TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + nsmbu) --------------------
                //region -------------------- Game style (smb3 + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3&3DW Time=all)`,        `/game-all/game-style-3,3dw/time-all/list${path}`,         ALL_GAMES,    ALL_TIMES, SMB3_AND_SM3DW,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3&3DW Time=all)`,          `/game-2/game-style-3,3dw/time-all/list${path}`,           SMM2_ONLY,    ALL_TIMES, SMB3_AND_SM3DW,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3&3DW Time=all)`,        `/game-3,2/game-style-3,3dw/time-all/list${path}`,         SMM1_AND_2,   ALL_TIMES, SMB3_AND_SM3DW,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3&3DW Time=all)`,      `/game-3ds,2/game-style-3,3dw/time-all/list${path}`,       SMM3DS_AND_2, ALL_TIMES, SMB3_AND_SM3DW,           LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3&3DW Time=all)`,        `/game-all/game-style-3,3dw/time-all/card${path}`,         ALL_GAMES,    ALL_TIMES, SMB3_AND_SM3DW,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3&3DW Time=all)`,          `/game-2/game-style-3,3dw/time-all/card${path}`,           SMM2_ONLY,    ALL_TIMES, SMB3_AND_SM3DW,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3&3DW Time=all)`,        `/game-3,2/game-style-3,3dw/time-all/card${path}`,         SMM1_AND_2,   ALL_TIMES, SMB3_AND_SM3DW,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3&3DW Time=all)`,      `/game-3ds,2/game-style-3,3dw/time-all/card${path}`,       SMM3DS_AND_2, ALL_TIMES, SMB3_AND_SM3DW,           CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3&3DW Time=all)`,       `/game-all/game-style-3,3dw/time-all/table${path}`,        ALL_GAMES,    ALL_TIMES, SMB3_AND_SM3DW,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3&3DW Time=all)`,         `/game-2/game-style-3,3dw/time-all/table${path}`,          SMM2_ONLY,    ALL_TIMES, SMB3_AND_SM3DW,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3&3DW Time=all)`,       `/game-3,2/game-style-3,3dw/time-all/table${path}`,        SMM1_AND_2,   ALL_TIMES, SMB3_AND_SM3DW,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3&3DW Time=all)`,     `/game-3ds,2/game-style-3,3dw/time-all/table${path}`,      SMM3DS_AND_2, ALL_TIMES, SMB3_AND_SM3DW,           TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + sm3dw) --------------------
                //region -------------------- Game style (smw + nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=W&U Time=all)`,          `/game-all/game-style-w,u/time-all/list${path}`,           ALL_GAMES,    ALL_TIMES, SMW_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=W&U Time=all)`,            `/game-1/game-style-w,u/time-all/list${path}`,             SMM1_ONLY,    ALL_TIMES, SMW_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=W&U Time=all)`,          `/game-3ds/game-style-w,u/time-all/list${path}`,           SMM3DS_ONLY,  ALL_TIMES, SMW_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=W&U Time=all)`,            `/game-2/game-style-w,u/time-all/list${path}`,             SMM2_ONLY,    ALL_TIMES, SMW_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=W&U Time=all)`,        `/game-1,3ds/game-style-w,u/time-all/list${path}`,         SMM1_AND_3DS, ALL_TIMES, SMW_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=W&U Time=all)`,          `/game-1,2/game-style-w,u/time-all/list${path}`,           SMM1_AND_2,   ALL_TIMES, SMW_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=W&U Time=all)`,        `/game-3ds,2/game-style-w,u/time-all/list${path}`,         SMM3DS_AND_2, ALL_TIMES, SMW_AND_NSMBU,            LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=W&U Time=all)`,          `/game-all/game-style-w,u/time-all/card${path}`,           ALL_GAMES,    ALL_TIMES, SMW_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=W&U Time=all)`,            `/game-1/game-style-w,u/time-all/card${path}`,             SMM1_ONLY,    ALL_TIMES, SMW_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=W&U Time=all)`,          `/game-3ds/game-style-w,u/time-all/card${path}`,           SMM3DS_ONLY,  ALL_TIMES, SMW_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=W&U Time=all)`,            `/game-2/game-style-w,u/time-all/card${path}`,             SMM2_ONLY,    ALL_TIMES, SMW_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=W&U Time=all)`,        `/game-1,3ds/game-style-w,u/time-all/card${path}`,         SMM1_AND_3DS, ALL_TIMES, SMW_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=W&U Time=all)`,          `/game-1,2/game-style-w,u/time-all/card${path}`,           SMM1_AND_2,   ALL_TIMES, SMW_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=W&U Time=all)`,        `/game-3ds,2/game-style-w,u/time-all/card${path}`,         SMM3DS_AND_2, ALL_TIMES, SMW_AND_NSMBU,            CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=W&U Time=all)`,         `/game-all/game-style-w,u/time-all/table${path}`,          ALL_GAMES,    ALL_TIMES, SMW_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=W&U Time=all)`,           `/game-1/game-style-w,u/time-all/table${path}`,            SMM1_ONLY,    ALL_TIMES, SMW_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=W&U Time=all)`,         `/game-3ds/game-style-w,u/time-all/table${path}`,          SMM3DS_ONLY,  ALL_TIMES, SMW_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=W&U Time=all)`,           `/game-2/game-style-w,u/time-all/table${path}`,            SMM2_ONLY,    ALL_TIMES, SMW_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=W&U Time=all)`,       `/game-1,3ds/game-style-w,u/time-all/table${path}`,        SMM1_AND_3DS, ALL_TIMES, SMW_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=W&U Time=all)`,         `/game-1,2/game-style-w,u/time-all/table${path}`,          SMM1_AND_2,   ALL_TIMES, SMW_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=W&U Time=all)`,       `/game-3ds,2/game-style-w,u/time-all/table${path}`,        SMM3DS_AND_2, ALL_TIMES, SMW_AND_NSMBU,            TABLE, routeCallback,),

                //endregion -------------------- Game style (smw + nsmbu) --------------------
                //region -------------------- Game style (smw + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=W&3DW Time=all)`,        `/game-all/game-style-w,3dw/time-all/list${path}`,         ALL_GAMES,    ALL_TIMES, SMW_AND_SM3DW,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=W&3DW Time=all)`,          `/game-2/game-style-w,3dw/time-all/list${path}`,           SMM2_ONLY,    ALL_TIMES, SMW_AND_SM3DW,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=W&3DW Time=all)`,        `/game-1,2/game-style-w,3dw/time-all/list${path}`,         SMM1_AND_2,   ALL_TIMES, SMW_AND_SM3DW,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=W&3DW Time=all)`,      `/game-3ds,2/game-style-w,3dw/time-all/list${path}`,       SMM3DS_AND_2, ALL_TIMES, SMW_AND_SM3DW,            LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=W&3DW Time=all)`,        `/game-all/game-style-w,3dw/time-all/card${path}`,         ALL_GAMES,    ALL_TIMES, SMW_AND_SM3DW,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=W&3DW Time=all)`,          `/game-2/game-style-w,3dw/time-all/card${path}`,           SMM2_ONLY,    ALL_TIMES, SMW_AND_SM3DW,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=W&3DW Time=all)`,        `/game-1,2/game-style-w,3dw/time-all/card${path}`,         SMM1_AND_2,   ALL_TIMES, SMW_AND_SM3DW,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=W&3DW Time=all)`,      `/game-3ds,2/game-style-w,3dw/time-all/card${path}`,       SMM3DS_AND_2, ALL_TIMES, SMW_AND_SM3DW,            CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=W&3DW Time=all)`,       `/game-all/game-style-w,3dw/time-all/table${path}`,        ALL_GAMES,    ALL_TIMES, SMW_AND_SM3DW,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=W&3DW Time=all)`,         `/game-2/game-style-w,3dw/time-all/table${path}`,          SMM2_ONLY,    ALL_TIMES, SMW_AND_SM3DW,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=W&3DW Time=all)`,       `/game-1,2/game-style-w,3dw/time-all/table${path}`,        SMM1_AND_2,   ALL_TIMES, SMW_AND_SM3DW,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=W&3DW Time=all)`,     `/game-3ds,2/game-style-w,3dw/time-all/table${path}`,      SMM3DS_AND_2, ALL_TIMES, SMW_AND_SM3DW,            TABLE, routeCallback,),

                //endregion -------------------- Game style (smw + sm3dw) --------------------
                //region -------------------- Game style (nsmbu + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=U&3DW Time=all)`,        `/game-all/game-style-u,3dw/time-all/list${path}`,         ALL_GAMES,    ALL_TIMES, NSMBU_AND_SM3DW,          LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=U&3DW Time=all)`,          `/game-2/game-style-u,3dw/time-all/list${path}`,           SMM2_ONLY,    ALL_TIMES, NSMBU_AND_SM3DW,          LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=U&3DW Time=all)`,        `/game-1,2/game-style-u,3dw/time-all/list${path}`,         SMM1_AND_2,   ALL_TIMES, NSMBU_AND_SM3DW,          LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=U&3DW Time=all)`,      `/game-3ds,2/game-style-u,3dw/time-all/list${path}`,       SMM3DS_AND_2, ALL_TIMES, NSMBU_AND_SM3DW,          LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=U&3DW Time=all)`,        `/game-all/game-style-u,3dw/time-all/card${path}`,         ALL_GAMES,    ALL_TIMES, NSMBU_AND_SM3DW,          CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=U&3DW Time=all)`,          `/game-2/game-style-u,3dw/time-all/card${path}`,           SMM2_ONLY,    ALL_TIMES, NSMBU_AND_SM3DW,          CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=U&3DW Time=all)`,        `/game-1,2/game-style-u,3dw/time-all/card${path}`,         SMM1_AND_2,   ALL_TIMES, NSMBU_AND_SM3DW,          CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=U&3DW Time=all)`,      `/game-3ds,2/game-style-u,3dw/time-all/card${path}`,       SMM3DS_AND_2, ALL_TIMES, NSMBU_AND_SM3DW,          CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=U&3DW Time=all)`,       `/game-all/game-style-u,3dw/time-all/table${path}`,        ALL_GAMES,    ALL_TIMES, NSMBU_AND_SM3DW,          TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=U&3DW Time=all)`,         `/game-2/game-style-u,3dw/time-all/table${path}`,          SMM2_ONLY,    ALL_TIMES, NSMBU_AND_SM3DW,          TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=U&3DW Time=all)`,       `/game-1,2/game-style-u,3dw/time-all/table${path}`,        SMM1_AND_2,   ALL_TIMES, NSMBU_AND_SM3DW,          TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=U&3DW Time=all)`,     `/game-3ds,2/game-style-u,3dw/time-all/table${path}`,      SMM3DS_AND_2, ALL_TIMES, NSMBU_AND_SM3DW,          TABLE, routeCallback,),

                //endregion -------------------- Game style (nsmbu + sm3dw) --------------------

                //region -------------------- Game style (smb + smb3 + smw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&3&W Time=all)`,        `/game-all/game-style-1,3,w/time-all/list${path}`,         ALL_GAMES,    ALL_TIMES, SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=1&3&W Time=all)`,          `/game-1/game-style-1,3,w/time-all/list${path}`,           SMM1_ONLY,    ALL_TIMES, SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=1&3&W Time=all)`,        `/game-3ds/game-style-1,3,w/time-all/list${path}`,         SMM3DS_ONLY,  ALL_TIMES, SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&3&W Time=all)`,          `/game-2/game-style-1,3,w/time-all/list${path}`,           SMM2_ONLY,    ALL_TIMES, SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=1&3&W Time=all)`,      `/game-1,3ds/game-style-1,3,w/time-all/list${path}`,       SMM1_AND_3DS, ALL_TIMES, SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&3&W Time=all)`,        `/game-1,2/game-style-1,3,w/time-all/list${path}`,         SMM1_AND_2,   ALL_TIMES, SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&3&W Time=all)`,      `/game-3ds,2/game-style-1,3,w/time-all/list${path}`,       SMM3DS_AND_2, ALL_TIMES, SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&3&W Time=all)`,        `/game-all/game-style-1,3,w/time-all/card${path}`,         ALL_GAMES,    ALL_TIMES, SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=1&3&W Time=all)`,          `/game-1/game-style-1,3,w/time-all/card${path}`,           SMM1_ONLY,    ALL_TIMES, SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=1&3&W Time=all)`,        `/game-3ds/game-style-1,3,w/time-all/card${path}`,         SMM3DS_ONLY,  ALL_TIMES, SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&3&W Time=all)`,          `/game-2/game-style-1,3,w/time-all/card${path}`,           SMM2_ONLY,    ALL_TIMES, SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=1&3&W Time=all)`,      `/game-1,3ds/game-style-1,3,w/time-all/card${path}`,       SMM1_AND_3DS, ALL_TIMES, SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&3&W Time=all)`,        `/game-1,2/game-style-1,3,w/time-all/card${path}`,         SMM1_AND_2,   ALL_TIMES, SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&3&W Time=all)`,      `/game-3ds,2/game-style-1,3,w/time-all/card${path}`,       SMM3DS_AND_2, ALL_TIMES, SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&3&W Time=all)`,       `/game-all/game-style-1,3,w/time-all/table${path}`,        ALL_GAMES,    ALL_TIMES, SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=1&3&W Time=all)`,         `/game-1/game-style-1,3,w/time-all/table${path}`,          SMM1_ONLY,    ALL_TIMES, SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=1&3&W Time=all)`,       `/game-3ds/game-style-1,3,w/time-all/table${path}`,        SMM3DS_ONLY,  ALL_TIMES, SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&3&W Time=all)`,         `/game-2/game-style-1,3,w/time-all/table${path}`,          SMM2_ONLY,    ALL_TIMES, SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=1&3&W Time=all)`,     `/game-1,3ds/game-style-1,3,w/time-all/table${path}`,      SMM1_AND_3DS, ALL_TIMES, SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&3&W Time=all)`,       `/game-1,2/game-style-1,3,w/time-all/table${path}`,        SMM1_AND_2,   ALL_TIMES, SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&3&W Time=all)`,     `/game-3ds,2/game-style-1,3,w/time-all/table${path}`,      SMM3DS_AND_2, ALL_TIMES, SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + smw) --------------------
                //region -------------------- Game style (smb + smb3 + nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&3&U Time=all)`,        `/game-all/game-style-1,3,u/time-all/list${path}`,         ALL_GAMES,    ALL_TIMES, SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=1&3&U Time=all)`,          `/game-1/game-style-1,3,u/time-all/list${path}`,           SMM1_ONLY,    ALL_TIMES, SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=1&3&U Time=all)`,        `/game-3ds/game-style-1,3,u/time-all/list${path}`,         SMM3DS_ONLY,  ALL_TIMES, SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&3&U Time=all)`,          `/game-2/game-style-1,3,u/time-all/list${path}`,           SMM2_ONLY,    ALL_TIMES, SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=1&3&U Time=all)`,      `/game-1,3ds/game-style-1,3,u/time-all/list${path}`,       SMM1_AND_3DS, ALL_TIMES, SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&3&U Time=all)`,        `/game-1,2/game-style-1,3,u/time-all/list${path}`,         SMM1_AND_2,   ALL_TIMES, SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&3&U Time=all)`,      `/game-3ds,2/game-style-1,3,u/time-all/list${path}`,       SMM3DS_AND_2, ALL_TIMES, SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&3&U Time=all)`,        `/game-all/game-style-1,3,u/time-all/card${path}`,         ALL_GAMES,    ALL_TIMES, SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=1&3&U Time=all)`,          `/game-1/game-style-1,3,u/time-all/card${path}`,           SMM1_ONLY,    ALL_TIMES, SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=1&3&U Time=all)`,        `/game-3ds/game-style-1,3,u/time-all/card${path}`,         SMM3DS_ONLY,  ALL_TIMES, SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&3&U Time=all)`,          `/game-2/game-style-1,3,u/time-all/card${path}`,           SMM2_ONLY,    ALL_TIMES, SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=1&3&U Time=all)`,      `/game-1,3ds/game-style-1,3,u/time-all/card${path}`,       SMM1_AND_3DS, ALL_TIMES, SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&3&U Time=all)`,        `/game-1,2/game-style-1,3,u/time-all/card${path}`,         SMM1_AND_2,   ALL_TIMES, SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&3&U Time=all)`,      `/game-3ds,2/game-style-1,3,u/time-all/card${path}`,       SMM3DS_AND_2, ALL_TIMES, SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&3&U Time=all)`,       `/game-all/game-style-1,3,u/time-all/table${path}`,        ALL_GAMES,    ALL_TIMES, SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=1&3&U Time=all)`,         `/game-1/game-style-1,3,u/time-all/table${path}`,          SMM1_ONLY,    ALL_TIMES, SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=1&3&U Time=all)`,       `/game-3ds/game-style-1,3,u/time-all/table${path}`,        SMM3DS_ONLY,  ALL_TIMES, SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&3&U Time=all)`,         `/game-2/game-style-1,3,u/time-all/table${path}`,          SMM2_ONLY,    ALL_TIMES, SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=1&3&U Time=all)`,     `/game-1,3ds/game-style-1,3,u/time-all/table${path}`,      SMM1_AND_3DS, ALL_TIMES, SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&3&U Time=all)`,       `/game-1,2/game-style-1,3,u/time-all/table${path}`,        SMM1_AND_2,   ALL_TIMES, SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&3&U Time=all)`,     `/game-3ds,2/game-style-1,3,u/time-all/table${path}`,      SMM3DS_AND_2, ALL_TIMES, SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + nsmbu) --------------------
                //region -------------------- Game style (smb + smb3 + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&3&3DW Time=all)`,      `/game-all/game-style-1,3,3dw/time-all/list${path}`,       ALL_GAMES,    ALL_TIMES, SMB_AND_SMB3_AND_SM3DW,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&3&3DW Time=all)`,        `/game-2/game-style-1,3,3dw/time-all/list${path}`,         SMM2_ONLY,    ALL_TIMES, SMB_AND_SMB3_AND_SM3DW,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&3&3DW Time=all)`,      `/game-1,2/game-style-1,3,3dw/time-all/list${path}`,       SMM1_AND_2,   ALL_TIMES, SMB_AND_SMB3_AND_SM3DW,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&3&3DW Time=all)`,    `/game-3ds,2/game-style-1,3,3dw/time-all/list${path}`,     SMM3DS_AND_2, ALL_TIMES, SMB_AND_SMB3_AND_SM3DW,   LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&3&3DW Time=all)`,      `/game-all/game-style-1,3,3dw/time-all/card${path}`,       ALL_GAMES,    ALL_TIMES, SMB_AND_SMB3_AND_SM3DW,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&3&3DW Time=all)`,        `/game-2/game-style-1,3,3dw/time-all/card${path}`,         SMM2_ONLY,    ALL_TIMES, SMB_AND_SMB3_AND_SM3DW,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&3&3DW Time=all)`,      `/game-1,2/game-style-1,3,3dw/time-all/card${path}`,       SMM1_AND_2,   ALL_TIMES, SMB_AND_SMB3_AND_SM3DW,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&3&3DW Time=all)`,    `/game-3ds,2/game-style-1,3,3dw/time-all/card${path}`,     SMM3DS_AND_2, ALL_TIMES, SMB_AND_SMB3_AND_SM3DW,   CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&3&3DW Time=all)`,     `/game-all/game-style-1,3,3dw/time-all/table${path}`,      ALL_GAMES,    ALL_TIMES, SMB_AND_SMB3_AND_SM3DW,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&3&3DW Time=all)`,       `/game-2/game-style-1,3,3dw/time-all/table${path}`,        SMM2_ONLY,    ALL_TIMES, SMB_AND_SMB3_AND_SM3DW,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&3&3DW Time=all)`,     `/game-1,2/game-style-1,3,3dw/time-all/table${path}`,      SMM1_AND_2,   ALL_TIMES, SMB_AND_SMB3_AND_SM3DW,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&3&3DW Time=all)`,   `/game-3ds,2/game-style-1,3,3dw/time-all/table${path}`,    SMM3DS_AND_2, ALL_TIMES, SMB_AND_SMB3_AND_SM3DW,   TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + sm3dw) --------------------
                //region -------------------- Game style (smb + smw + nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&W&U Time=all)`,        `/game-all/game-style-1,w,u/time-all/list${path}`,         ALL_GAMES,    ALL_TIMES, SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=1&W&U Time=all)`,          `/game-1/game-style-1,w,u/time-all/list${path}`,           SMM1_ONLY,    ALL_TIMES, SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=1&W&U Time=all)`,        `/game-3ds/game-style-1,w,u/time-all/list${path}`,         SMM3DS_ONLY,  ALL_TIMES, SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&W&U Time=all)`,          `/game-2/game-style-1,w,u/time-all/list${path}`,           SMM2_ONLY,    ALL_TIMES, SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=1&W&U Time=all)`,      `/game-1,3ds/game-style-1,w,u/time-all/list${path}`,       SMM1_AND_3DS, ALL_TIMES, SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&W&U Time=all)`,        `/game-1,2/game-style-1,w,u/time-all/list${path}`,         SMM1_AND_2,   ALL_TIMES, SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&W&U Time=all)`,      `/game-3ds,2/game-style-1,w,u/time-all/list${path}`,       SMM3DS_AND_2, ALL_TIMES, SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&W&U Time=all)`,        `/game-all/game-style-1,w,u/time-all/card${path}`,         ALL_GAMES,    ALL_TIMES, SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=1&W&U Time=all)`,          `/game-1/game-style-1,w,u/time-all/card${path}`,           SMM1_ONLY,    ALL_TIMES, SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=1&W&U Time=all)`,        `/game-3ds/game-style-1,w,u/time-all/card${path}`,         SMM3DS_ONLY,  ALL_TIMES, SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&W&U Time=all)`,          `/game-2/game-style-1,w,u/time-all/card${path}`,           SMM2_ONLY,    ALL_TIMES, SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=1&W&U Time=all)`,      `/game-1,3ds/game-style-1,w,u/time-all/card${path}`,       SMM1_AND_3DS, ALL_TIMES, SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&W&U Time=all)`,        `/game-1,2/game-style-1,w,u/time-all/card${path}`,         SMM1_AND_2,   ALL_TIMES, SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&W&U Time=all)`,      `/game-3ds,2/game-style-1,w,u/time-all/card${path}`,       SMM3DS_AND_2, ALL_TIMES, SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&W&U Time=all)`,       `/game-all/game-style-1,w,u/time-all/table${path}`,        ALL_GAMES,    ALL_TIMES, SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=1&W&U Time=all)`,         `/game-1/game-style-1,w,u/time-all/table${path}`,          SMM1_ONLY,    ALL_TIMES, SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=1&W&U Time=all)`,       `/game-3ds/game-style-1,w,u/time-all/table${path}`,        SMM3DS_ONLY,  ALL_TIMES, SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&W&U Time=all)`,         `/game-2/game-style-1,w,u/time-all/table${path}`,          SMM2_ONLY,    ALL_TIMES, SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=1&W&U Time=all)`,     `/game-1,3ds/game-style-1,w,u/time-all/table${path}`,      SMM1_AND_3DS, ALL_TIMES, SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&W&U Time=all)`,       `/game-1,2/game-style-1,w,u/time-all/table${path}`,        SMM1_AND_2,   ALL_TIMES, SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&W&U Time=all)`,     `/game-3ds,2/game-style-1,w,u/time-all/table${path}`,      SMM3DS_AND_2, ALL_TIMES, SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smw + nsmbu) --------------------
                //region -------------------- Game style (smb + smw + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&W&3DW Time=all)`,      `/game-all/game-style-1,w,3dw/time-all/list${path}`,       ALL_GAMES,    ALL_TIMES, SMB_AND_SMW_AND_SM3DW,    LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&W&3DW Time=all)`,        `/game-2/game-style-1,w,3dw/time-all/list${path}`,         SMM2_ONLY,    ALL_TIMES, SMB_AND_SMW_AND_SM3DW,    LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&W&3DW Time=all)`,      `/game-1,2/game-style-1,w,3dw/time-all/list${path}`,       SMM1_AND_2,   ALL_TIMES, SMB_AND_SMW_AND_SM3DW,    LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&W&3DW Time=all)`,    `/game-3ds,2/game-style-1,w,3dw/time-all/list${path}`,     SMM3DS_AND_2, ALL_TIMES, SMB_AND_SMW_AND_SM3DW,    LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&W&3DW Time=all)`,      `/game-all/game-style-1,w,3dw/time-all/card${path}`,       ALL_GAMES,    ALL_TIMES, SMB_AND_SMW_AND_SM3DW,    CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&W&3DW Time=all)`,        `/game-2/game-style-1,w,3dw/time-all/card${path}`,         SMM2_ONLY,    ALL_TIMES, SMB_AND_SMW_AND_SM3DW,    CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&W&3DW Time=all)`,      `/game-1,2/game-style-1,w,3dw/time-all/card${path}`,       SMM1_AND_2,   ALL_TIMES, SMB_AND_SMW_AND_SM3DW,    CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&W&3DW Time=all)`,    `/game-3ds,2/game-style-1,w,3dw/time-all/card${path}`,     SMM3DS_AND_2, ALL_TIMES, SMB_AND_SMW_AND_SM3DW,    CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&W&3DW Time=all)`,     `/game-all/game-style-1,w,3dw/time-all/table${path}`,      ALL_GAMES,    ALL_TIMES, SMB_AND_SMW_AND_SM3DW,    TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&W&3DW Time=all)`,       `/game-2/game-style-1,w,3dw/time-all/table${path}`,        SMM2_ONLY,    ALL_TIMES, SMB_AND_SMW_AND_SM3DW,    TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&W&3DW Time=all)`,     `/game-1,2/game-style-1,w,3dw/time-all/table${path}`,      SMM1_AND_2,   ALL_TIMES, SMB_AND_SMW_AND_SM3DW,    TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&W&3DW Time=all)`,   `/game-3ds,2/game-style-1,w,3dw/time-all/table${path}`,    SMM3DS_AND_2, ALL_TIMES, SMB_AND_SMW_AND_SM3DW,    TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smw + sm3dw) --------------------
                //region -------------------- Game style (smb + nsmbu + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&U&3DW Time=all)`,      `/game-all/game-style-1,u,3dw/time-all/list${path}`,       ALL_GAMES,    ALL_TIMES, SMB_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&U&3DW Time=all)`,        `/game-2/game-style-1,u,3dw/time-all/list${path}`,         SMM2_ONLY,    ALL_TIMES, SMB_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&U&3DW Time=all)`,      `/game-1,2/game-style-1,u,3dw/time-all/list${path}`,       SMM1_AND_2,   ALL_TIMES, SMB_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&U&3DW Time=all)`,    `/game-3ds,2/game-style-1,u,3dw/time-all/list${path}`,     SMM3DS_AND_2, ALL_TIMES, SMB_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&U&3DW Time=all)`,      `/game-all/game-style-1,u,3dw/time-all/card${path}`,       ALL_GAMES,    ALL_TIMES, SMB_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&U&3DW Time=all)`,        `/game-2/game-style-1,u,3dw/time-all/card${path}`,         SMM2_ONLY,    ALL_TIMES, SMB_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&U&3DW Time=all)`,      `/game-1,2/game-style-1,u,3dw/time-all/card${path}`,       SMM1_AND_2,   ALL_TIMES, SMB_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&U&3DW Time=all)`,    `/game-3ds,2/game-style-1,u,3dw/time-all/card${path}`,     SMM3DS_AND_2, ALL_TIMES, SMB_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&U&3DW Time=all)`,     `/game-all/game-style-1,u,3dw/time-all/table${path}`,      ALL_GAMES,    ALL_TIMES, SMB_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&U&3DW Time=all)`,       `/game-2/game-style-1,u,3dw/time-all/table${path}`,        SMM2_ONLY,    ALL_TIMES, SMB_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&U&3DW Time=all)`,     `/game-1,2/game-style-1,u,3dw/time-all/table${path}`,      SMM1_AND_2,   ALL_TIMES, SMB_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&U&3DW Time=all)`,   `/game-3ds,2/game-style-1,u,3dw/time-all/table${path}`,    SMM3DS_AND_2, ALL_TIMES, SMB_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + nsmbu + sm3dw) --------------------
                //region -------------------- Game style (smb3 + smw + nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3&W&U Time=all)`,        `/game-all/game-style-3,w,u/time-all/list${path}`,         ALL_GAMES,    ALL_TIMES, SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=3&W&U Time=all)`,          `/game-1/game-style-3,w,u/time-all/list${path}`,           SMM1_ONLY,    ALL_TIMES, SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=3&W&U Time=all)`,        `/game-3ds/game-style-3,w,u/time-all/list${path}`,         SMM3DS_ONLY,  ALL_TIMES, SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3&W&U Time=all)`,          `/game-2/game-style-3,w,u/time-all/list${path}`,           SMM2_ONLY,    ALL_TIMES, SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=3&W&U Time=all)`,      `/game-1,3ds/game-style-3,w,u/time-all/list${path}`,       SMM1_AND_3DS, ALL_TIMES, SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3&W&U Time=all)`,        `/game-1,2/game-style-3,w,u/time-all/list${path}`,         SMM1_AND_2,   ALL_TIMES, SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3&W&U Time=all)`,      `/game-3ds,2/game-style-3,w,u/time-all/list${path}`,       SMM3DS_AND_2, ALL_TIMES, SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3&W&U Time=all)`,        `/game-all/game-style-3,w,u/time-all/card${path}`,         ALL_GAMES,    ALL_TIMES, SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=3&W&U Time=all)`,          `/game-1/game-style-3,w,u/time-all/card${path}`,           SMM1_ONLY,    ALL_TIMES, SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=3&W&U Time=all)`,        `/game-3ds/game-style-3,w,u/time-all/card${path}`,         SMM3DS_ONLY,  ALL_TIMES, SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3&W&U Time=all)`,          `/game-2/game-style-3,w,u/time-all/card${path}`,           SMM2_ONLY,    ALL_TIMES, SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=3&W&U Time=all)`,      `/game-1,3ds/game-style-3,w,u/time-all/card${path}`,       SMM1_AND_3DS, ALL_TIMES, SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3&W&U Time=all)`,        `/game-1,2/game-style-3,w,u/time-all/card${path}`,         SMM1_AND_2,   ALL_TIMES, SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3&W&U Time=all)`,      `/game-3ds,2/game-style-3,w,u/time-all/card${path}`,       SMM3DS_AND_2, ALL_TIMES, SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3&W&U Time=all)`,       `/game-all/game-style-3,w,u/time-all/table${path}`,        ALL_GAMES,    ALL_TIMES, SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=3&W&U Time=all)`,         `/game-1/game-style-3,w,u/time-all/table${path}`,          SMM1_ONLY,    ALL_TIMES, SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=3&W&U Time=all)`,       `/game-3ds/game-style-3,w,u/time-all/table${path}`,        SMM3DS_ONLY,  ALL_TIMES, SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3&W&U Time=all)`,         `/game-2/game-style-3,w,u/time-all/table${path}`,          SMM2_ONLY,    ALL_TIMES, SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=3&W&U Time=all)`,     `/game-1,3ds/game-style-3,w,u/time-all/table${path}`,      SMM1_AND_3DS, ALL_TIMES, SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3&W&U Time=all)`,       `/game-1,2/game-style-3,w,u/time-all/table${path}`,        SMM1_AND_2,   ALL_TIMES, SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3&W&U Time=all)`,     `/game-3ds,2/game-style-3,w,u/time-all/table${path}`,      SMM3DS_AND_2, ALL_TIMES, SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + smw + nsmbu) --------------------
                //region -------------------- Game style (smb3 + smw + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3&W&3DW Time=all)`,      `/game-all/game-style-3,w,3dw/time-all/list${path}`,       ALL_GAMES,    ALL_TIMES, SMB3_AND_SMW_AND_SM3DW,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3&W&3DW Time=all)`,        `/game-2/game-style-3,w,3dw/time-all/list${path}`,         SMM2_ONLY,    ALL_TIMES, SMB3_AND_SMW_AND_SM3DW,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3&W&3DW Time=all)`,      `/game-1,2/game-style-3,w,3dw/time-all/list${path}`,       SMM1_AND_2,   ALL_TIMES, SMB3_AND_SMW_AND_SM3DW,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3&W&3DW Time=all)`,    `/game-3ds,2/game-style-3,w,3dw/time-all/list${path}`,     SMM3DS_AND_2, ALL_TIMES, SMB3_AND_SMW_AND_SM3DW,   LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3&W&3DW Time=all)`,      `/game-all/game-style-3,w,3dw/time-all/card${path}`,       ALL_GAMES,    ALL_TIMES, SMB3_AND_SMW_AND_SM3DW,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3&W&3DW Time=all)`,        `/game-2/game-style-3,w,3dw/time-all/card${path}`,         SMM2_ONLY,    ALL_TIMES, SMB3_AND_SMW_AND_SM3DW,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3&W&3DW Time=all)`,      `/game-1,2/game-style-3,w,3dw/time-all/card${path}`,       SMM1_AND_2,   ALL_TIMES, SMB3_AND_SMW_AND_SM3DW,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3&W&3DW Time=all)`,    `/game-3ds,2/game-style-3,w,3dw/time-all/card${path}`,     SMM3DS_AND_2, ALL_TIMES, SMB3_AND_SMW_AND_SM3DW,   CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3&W&3DW Time=all)`,     `/game-all/game-style-3,w,3dw/time-all/table${path}`,      ALL_GAMES,    ALL_TIMES, SMB3_AND_SMW_AND_SM3DW,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3&W&3DW Time=all)`,       `/game-2/game-style-3,w,3dw/time-all/table${path}`,        SMM2_ONLY,    ALL_TIMES, SMB3_AND_SMW_AND_SM3DW,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3&W&3DW Time=all)`,     `/game-1,2/game-style-3,w,3dw/time-all/table${path}`,      SMM1_AND_2,   ALL_TIMES, SMB3_AND_SMW_AND_SM3DW,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3&W&3DW Time=all)`,   `/game-3ds,2/game-style-3,w,3dw/time-all/table${path}`,    SMM3DS_AND_2, ALL_TIMES, SMB3_AND_SMW_AND_SM3DW,   TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + smw + sm3dw) --------------------
                //region -------------------- Game style (smb3 + nsmbu + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3&U&3DW Time=all)`,      `/game-all/game-style-3,u,3dw/time-all/list${path}`,       ALL_GAMES,    ALL_TIMES, SMB3_AND_NSMBU_AND_SM3DW, LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3&U&3DW Time=all)`,        `/game-2/game-style-3,u,3dw/time-all/list${path}`,         SMM2_ONLY,    ALL_TIMES, SMB3_AND_NSMBU_AND_SM3DW, LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3&U&3DW Time=all)`,      `/game-1,2/game-style-3,u,3dw/time-all/list${path}`,       SMM1_AND_2,   ALL_TIMES, SMB3_AND_NSMBU_AND_SM3DW, LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3&U&3DW Time=all)`,    `/game-3ds,2/game-style-3,u,3dw/time-all/list${path}`,     SMM3DS_AND_2, ALL_TIMES, SMB3_AND_NSMBU_AND_SM3DW, LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3&U&3DW Time=all)`,      `/game-all/game-style-3,u,3dw/time-all/card${path}`,       ALL_GAMES,    ALL_TIMES, SMB3_AND_NSMBU_AND_SM3DW, CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3&U&3DW Time=all)`,        `/game-2/game-style-3,u,3dw/time-all/card${path}`,         SMM2_ONLY,    ALL_TIMES, SMB3_AND_NSMBU_AND_SM3DW, CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3&U&3DW Time=all)`,      `/game-1,2/game-style-3,u,3dw/time-all/card${path}`,       SMM1_AND_2,   ALL_TIMES, SMB3_AND_NSMBU_AND_SM3DW, CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3&U&3DW Time=all)`,    `/game-3ds,2/game-style-3,u,3dw/time-all/card${path}`,     SMM3DS_AND_2, ALL_TIMES, SMB3_AND_NSMBU_AND_SM3DW, CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3&U&3DW Time=all)`,     `/game-all/game-style-3,u,3dw/time-all/table${path}`,      ALL_GAMES,    ALL_TIMES, SMB3_AND_NSMBU_AND_SM3DW, TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3&U&3DW Time=all)`,       `/game-2/game-style-3,u,3dw/time-all/table${path}`,        SMM2_ONLY,    ALL_TIMES, SMB3_AND_NSMBU_AND_SM3DW, TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3&U&3DW Time=all)`,     `/game-1,2/game-style-3,u,3dw/time-all/table${path}`,      SMM1_AND_2,   ALL_TIMES, SMB3_AND_NSMBU_AND_SM3DW, TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3&U&3DW Time=all)`,   `/game-3ds,2/game-style-3,u,3dw/time-all/table${path}`,    SMM3DS_AND_2, ALL_TIMES, SMB3_AND_NSMBU_AND_SM3DW, TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + nsmbu + sm3dw) --------------------
                //region -------------------- Game style (smw + nsmbu + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=W&U&3DW Time=all)`,      `/game-all/game-style-w,u,3dw/time-all/list${path}`,       ALL_GAMES,    ALL_TIMES, SMW_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=W&U&3DW Time=all)`,        `/game-2/game-style-w,u,3dw/time-all/list${path}`,         SMM2_ONLY,    ALL_TIMES, SMW_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=W&U&3DW Time=all)`,      `/game-1,2/game-style-w,u,3dw/time-all/list${path}`,       SMM1_AND_2,   ALL_TIMES, SMW_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=W&U&3DW Time=all)`,    `/game-3ds,2/game-style-w,u,3dw/time-all/list${path}`,     SMM3DS_AND_2, ALL_TIMES, SMW_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=W&U&3DW Time=all)`,      `/game-all/game-style-w,u,3dw/time-all/card${path}`,       ALL_GAMES,    ALL_TIMES, SMW_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=W&U&3DW Time=all)`,        `/game-2/game-style-w,u,3dw/time-all/card${path}`,         SMM2_ONLY,    ALL_TIMES, SMW_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=W&U&3DW Time=all)`,      `/game-1,2/game-style-w,u,3dw/time-all/card${path}`,       SMM1_AND_2,   ALL_TIMES, SMW_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=W&U&3DW Time=all)`,    `/game-3ds,2/game-style-w,u,3dw/time-all/card${path}`,     SMM3DS_AND_2, ALL_TIMES, SMW_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=W&U&3DW Time=all)`,     `/game-all/game-style-w,u,3dw/time-all/table${path}`,      ALL_GAMES,    ALL_TIMES, SMW_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=W&U&3DW Time=all)`,       `/game-2/game-style-w,u,3dw/time-all/table${path}`,        SMM2_ONLY,    ALL_TIMES, SMW_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=W&U&3DW Time=all)`,     `/game-1,2/game-style-w,u,3dw/time-all/table${path}`,      SMM1_AND_2,   ALL_TIMES, SMW_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=W&U&3DW Time=all)`,   `/game-3ds,2/game-style-w,u,3dw/time-all/table${path}`,    SMM3DS_AND_2, ALL_TIMES, SMW_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),

                //endregion -------------------- Game style (smw + nsmbu + sm3dw) --------------------

                //region -------------------- Game style (smb + smb3 + smw + nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&3&W&U Time=all)`,      `/game-all/game-style-1,3,w,u/time-all/list${path}`,       ALL_GAMES,    ALL_TIMES, NOT_SM3DW,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=1&3&W&U Time=all)`,        `/game-1/game-style-1,3,w,u/time-all/list${path}`,         SMM1_ONLY,    ALL_TIMES, NOT_SM3DW,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=1&3&W&U Time=all)`,      `/game-3ds/game-style-1,3,w,u/time-all/list${path}`,       SMM3DS_ONLY,  ALL_TIMES, NOT_SM3DW,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&3&W&U Time=all)`,        `/game-2/game-style-1,3,w,u/time-all/list${path}`,         SMM2_ONLY,    ALL_TIMES, NOT_SM3DW,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=1&3&W&U Time=all)`,    `/game-1,3ds/game-style-1,3,w,u/time-all/list${path}`,     SMM1_AND_3DS, ALL_TIMES, NOT_SM3DW,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&3&W&U Time=all)`,      `/game-1,2/game-style-1,3,w,u/time-all/list${path}`,       SMM1_AND_2,   ALL_TIMES, NOT_SM3DW,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&3&W&U Time=all)`,    `/game-3ds,2/game-style-1,3,w,u/time-all/list${path}`,     SMM3DS_AND_2, ALL_TIMES, NOT_SM3DW,                LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&3&W&U Time=all)`,      `/game-all/game-style-1,3,w,u/time-all/card${path}`,       ALL_GAMES,    ALL_TIMES, NOT_SM3DW,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=1&3&W&U Time=all)`,        `/game-1/game-style-1,3,w,u/time-all/card${path}`,         SMM1_ONLY,    ALL_TIMES, NOT_SM3DW,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=1&3&W&U Time=all)`,      `/game-3ds/game-style-1,3,w,u/time-all/card${path}`,       SMM3DS_ONLY,  ALL_TIMES, NOT_SM3DW,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&3&W&U Time=all)`,        `/game-2/game-style-1,3,w,u/time-all/card${path}`,         SMM2_ONLY,    ALL_TIMES, NOT_SM3DW,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=1&3&W&U Time=all)`,    `/game-1,3ds/game-style-1,3,w,u/time-all/card${path}`,     SMM1_AND_3DS, ALL_TIMES, NOT_SM3DW,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&3&W&U Time=all)`,      `/game-1,2/game-style-1,3,w,u/time-all/card${path}`,       SMM1_AND_2,   ALL_TIMES, NOT_SM3DW,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&3&W&U Time=all)`,    `/game-3ds,2/game-style-1,3,w,u/time-all/card${path}`,     SMM3DS_AND_2, ALL_TIMES, NOT_SM3DW,                CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&3&W&U Time=all)`,     `/game-all/game-style-1,3,w,u/time-all/table${path}`,      ALL_GAMES,    ALL_TIMES, NOT_SM3DW,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=1&3&W&U Time=all)`,       `/game-1/game-style-1,3,w,u/time-all/table${path}`,        SMM1_ONLY,    ALL_TIMES, NOT_SM3DW,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=1&3&W&U Time=all)`,     `/game-3ds/game-style-1,3,w,u/time-all/table${path}`,      SMM3DS_ONLY,  ALL_TIMES, NOT_SM3DW,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&3&W&U Time=all)`,       `/game-2/game-style-1,3,w,u/time-all/table${path}`,        SMM2_ONLY,    ALL_TIMES, NOT_SM3DW,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=1&3&W&U Time=all)`,   `/game-1,3ds/game-style-1,3,w,u/time-all/table${path}`,    SMM1_AND_3DS, ALL_TIMES, NOT_SM3DW,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&3&W&U Time=all)`,     `/game-1,2/game-style-1,3,w,u/time-all/table${path}`,      SMM1_AND_2,   ALL_TIMES, NOT_SM3DW,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&3&W&U Time=all)`,   `/game-3ds,2/game-style-1,3,w,u/time-all/table${path}`,    SMM3DS_AND_2, ALL_TIMES, NOT_SM3DW,                TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + smw + nsmbu) --------------------
                //region -------------------- Game style (smb3 + smw + nsmbu + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3&W&U&3DW Time=all)`,    `/game-all/game-style-3,w,u,3dw/time-all/list${path}`,     ALL_GAMES,    ALL_TIMES, NOT_SMB,                  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3&W&U&3DW Time=all)`,      `/game-2/game-style-3,w,u,3dw/time-all/list${path}`,       SMM2_ONLY,    ALL_TIMES, NOT_SMB,                  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3&W&U&3DW Time=all)`,    `/game-1,2/game-style-3,w,u,3dw/time-all/list${path}`,     SMM1_AND_2,   ALL_TIMES, NOT_SMB,                  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3&W&U&3DW Time=all)`,  `/game-3ds,2/game-style-3,w,u,3dw/time-all/list${path}`,   SMM3DS_AND_2, ALL_TIMES, NOT_SMB,                  LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3&W&U&3DW Time=all)`,    `/game-all/game-style-3,w,u,3dw/time-all/card${path}`,     ALL_GAMES,    ALL_TIMES, NOT_SMB,                  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3&W&U&3DW Time=all)`,      `/game-2/game-style-3,w,u,3dw/time-all/card${path}`,       SMM2_ONLY,    ALL_TIMES, NOT_SMB,                  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3&W&U&3DW Time=all)`,    `/game-1,2/game-style-3,w,u,3dw/time-all/card${path}`,     SMM1_AND_2,   ALL_TIMES, NOT_SMB,                  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3&W&U&3DW Time=all)`,  `/game-3ds,2/game-style-3,w,u,3dw/time-all/card${path}`,   SMM3DS_AND_2, ALL_TIMES, NOT_SMB,                  CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3&W&U&3DW Time=all)`,   `/game-all/game-style-3,w,u,3dw/time-all/table${path}`,    ALL_GAMES,    ALL_TIMES, NOT_SMB,                  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3&W&U&3DW Time=all)`,     `/game-2/game-style-3,w,u,3dw/time-all/table${path}`,      SMM2_ONLY,    ALL_TIMES, NOT_SMB,                  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3&W&U&3DW Time=all)`,   `/game-1,2/game-style-3,w,u,3dw/time-all/table${path}`,    SMM1_AND_2,   ALL_TIMES, NOT_SMB,                  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3&W&U&3DW Time=all)`, `/game-3ds,2/game-style-3,w,u,3dw/time-all/table${path}`,  SMM3DS_AND_2, ALL_TIMES, NOT_SMB,                  TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + smw + nsmbu + sm3dw) --------------------
                //region -------------------- Game style (smb + smw + nsmbu + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&W&U&3DW Time=all)`,    `/game-all/game-style-1,w,u,3dw/time-all/list${path}`,     ALL_GAMES,    ALL_TIMES, NOT_SMB3,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&W&U&3DW Time=all)`,      `/game-2/game-style-1,w,u,3dw/time-all/list${path}`,       SMM2_ONLY,    ALL_TIMES, NOT_SMB3,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&W&U&3DW Time=all)`,    `/game-1,2/game-style-1,w,u,3dw/time-all/list${path}`,     SMM1_AND_2,   ALL_TIMES, NOT_SMB3,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&W&U&3DW Time=all)`,  `/game-3ds,2/game-style-1,w,u,3dw/time-all/list${path}`,   SMM3DS_AND_2, ALL_TIMES, NOT_SMB3,                 LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&W&U&3DW Time=all)`,    `/game-all/game-style-1,w,u,3dw/time-all/card${path}`,     ALL_GAMES,    ALL_TIMES, NOT_SMB3,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&W&U&3DW Time=all)`,      `/game-2/game-style-1,w,u,3dw/time-all/card${path}`,       SMM2_ONLY,    ALL_TIMES, NOT_SMB3,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&W&U&3DW Time=all)`,    `/game-1,2/game-style-1,w,u,3dw/time-all/card${path}`,     SMM1_AND_2,   ALL_TIMES, NOT_SMB3,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&W&U&3DW Time=all)`,  `/game-3ds,2/game-style-1,w,u,3dw/time-all/card${path}`,   SMM3DS_AND_2, ALL_TIMES, NOT_SMB3,                 CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&W&U&3DW Time=all)`,   `/game-all/game-style-1,w,u,3dw/time-all/table${path}`,    ALL_GAMES,    ALL_TIMES, NOT_SMB3,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&W&U&3DW Time=all)`,     `/game-2/game-style-1,w,u,3dw/time-all/table${path}`,      SMM2_ONLY,    ALL_TIMES, NOT_SMB3,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&W&U&3DW Time=all)`,   `/game-1,2/game-style-1,w,u,3dw/time-all/table${path}`,    SMM1_AND_2,   ALL_TIMES, NOT_SMB3,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&W&U&3DW Time=all)`, `/game-3ds,2/game-style-1,w,u,3dw/time-all/table${path}`,  SMM3DS_AND_2, ALL_TIMES, NOT_SMB3,                 TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smw + nsmbu + sm3dw) --------------------
                //region -------------------- Game style (smb + smb3 + nsmbu + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&3&U&3DW Time=all)`,    `/game-all/game-style-1,3,u,3dw/time-all/list${path}`,     ALL_GAMES,    ALL_TIMES, NOT_SMW,                  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&3&U&3DW Time=all)`,      `/game-2/game-style-1,3,u,3dw/time-all/list${path}`,       SMM2_ONLY,    ALL_TIMES, NOT_SMW,                  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&3&U&3DW Time=all)`,    `/game-1,2/game-style-1,3,u,3dw/time-all/list${path}`,     SMM1_AND_2,   ALL_TIMES, NOT_SMW,                  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&3&U&3DW Time=all)`,  `/game-3ds,2/game-style-1,3,u,3dw/time-all/list${path}`,   SMM3DS_AND_2, ALL_TIMES, NOT_SMW,                  LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&3&U&3DW Time=all)`,    `/game-all/game-style-1,3,u,3dw/time-all/card${path}`,     ALL_GAMES,    ALL_TIMES, NOT_SMW,                  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&3&U&3DW Time=all)`,      `/game-2/game-style-1,3,u,3dw/time-all/card${path}`,       SMM2_ONLY,    ALL_TIMES, NOT_SMW,                  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&3&U&3DW Time=all)`,    `/game-1,2/game-style-1,3,u,3dw/time-all/card${path}`,     SMM1_AND_2,   ALL_TIMES, NOT_SMW,                  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&3&U&3DW Time=all)`,  `/game-3ds,2/game-style-1,3,u,3dw/time-all/card${path}`,   SMM3DS_AND_2, ALL_TIMES, NOT_SMW,                  CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&3&U&3DW Time=all)`,   `/game-all/game-style-1,3,u,3dw/time-all/table${path}`,    ALL_GAMES,    ALL_TIMES, NOT_SMW,                  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&3&U&3DW Time=all)`,     `/game-2/game-style-1,3,u,3dw/time-all/table${path}`,      SMM2_ONLY,    ALL_TIMES, NOT_SMW,                  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&3&U&3DW Time=all)`,   `/game-1,2/game-style-1,3,u,3dw/time-all/table${path}`,    SMM1_AND_2,   ALL_TIMES, NOT_SMW,                  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&3&U&3DW Time=all)`, `/game-3ds,2/game-style-1,3,u,3dw/time-all/table${path}`,  SMM3DS_AND_2, ALL_TIMES, NOT_SMW,                  TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + nsmbu + sm3dw) --------------------
                //region -------------------- Game style (smb + smb3 + smw + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&3&W&3DW Time=all)`,    `/game-all/game-style-1,3,w,3dw/time-all/list${path}`,     ALL_GAMES,    ALL_TIMES, NOT_NSMBU,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&3&W&3DW Time=all)`,      `/game-2/game-style-1,3,w,3dw/time-all/list${path}`,       SMM2_ONLY,    ALL_TIMES, NOT_NSMBU,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&3&W&3DW Time=all)`,    `/game-1,2/game-style-1,3,w,3dw/time-all/list${path}`,     SMM1_AND_2,   ALL_TIMES, NOT_NSMBU,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&3&W&3DW Time=all)`,  `/game-3ds,2/game-style-1,3,w,3dw/time-all/list${path}`,   SMM3DS_AND_2, ALL_TIMES, NOT_NSMBU,                LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&3&W&3DW Time=all)`,    `/game-all/game-style-1,3,w,3dw/time-all/card${path}`,     ALL_GAMES,    ALL_TIMES, NOT_NSMBU,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&3&W&3DW Time=all)`,      `/game-2/game-style-1,3,w,3dw/time-all/card${path}`,       SMM2_ONLY,    ALL_TIMES, NOT_NSMBU,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&3&W&3DW Time=all)`,    `/game-1,2/game-style-1,3,w,3dw/time-all/card${path}`,     SMM1_AND_2,   ALL_TIMES, NOT_NSMBU,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&3&W&3DW Time=all)`,  `/game-3ds,2/game-style-1,3,w,3dw/time-all/card${path}`,   SMM3DS_AND_2, ALL_TIMES, NOT_NSMBU,                CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&3&W&3DW Time=all)`,   `/game-all/game-style-1,3,w,3dw/time-all/table${path}`,    ALL_GAMES,    ALL_TIMES, NOT_NSMBU,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&3&W&3DW Time=all)`,     `/game-2/game-style-1,3,w,3dw/time-all/table${path}`,      SMM2_ONLY,    ALL_TIMES, NOT_NSMBU,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&3&W&3DW Time=all)`,   `/game-1,2/game-style-1,3,w,3dw/time-all/table${path}`,    SMM1_AND_2,   ALL_TIMES, NOT_NSMBU,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&3&W&3DW Time=all)`, `/game-3ds,2/game-style-1,3,w,3dw/time-all/table${path}`,  SMM3DS_AND_2, ALL_TIMES, NOT_NSMBU,                TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + smw + sm3dw) --------------------

                //endregion -------------------- Time (all) --------------------
                //region -------------------- Time (day) --------------------

                //region -------------------- Game style (all) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=all Time=day)`,          `/game-all/game-style-all/time-day/list${path}`,           ALL_GAMES,    DAY_ONLY,  ALL_GAME_STYLES,          LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=all Time=day)`,            `/game-1/game-style-all/time-day/list${path}`,             SMM1_ONLY,    DAY_ONLY,  ALL_GAME_STYLES,          LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=all Time=day)`,          `/game-3ds/game-style-all/time-day/list${path}`,           SMM3DS_ONLY,  DAY_ONLY,  ALL_GAME_STYLES,          LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=all Time=day)`,            `/game-2/game-style-all/time-day/list${path}`,             SMM2_ONLY,    DAY_ONLY,  ALL_GAME_STYLES,          LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=all Time=day)`,        `/game-1,3ds/game-style-all/time-day/list${path}`,         SMM1_AND_3DS, DAY_ONLY,  ALL_GAME_STYLES,          LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=all Time=day)`,          `/game-1,2/game-style-all/time-day/list${path}`,           SMM1_AND_2,   DAY_ONLY,  ALL_GAME_STYLES,          LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=all Time=day)`,        `/game-3ds,2/game-style-all/time-day/list${path}`,         SMM3DS_AND_2, DAY_ONLY,  ALL_GAME_STYLES,          LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=all Time=day)`,          `/game-all/game-style-all/time-day/card${path}`,           ALL_GAMES,    DAY_ONLY,  ALL_GAME_STYLES,          CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=all Time=day)`,            `/game-1/game-style-all/time-day/card${path}`,             SMM1_ONLY,    DAY_ONLY,  ALL_GAME_STYLES,          CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=all Time=day)`,          `/game-3ds/game-style-all/time-day/card${path}`,           SMM3DS_ONLY,  DAY_ONLY,  ALL_GAME_STYLES,          CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=all Time=day)`,            `/game-2/game-style-all/time-day/card${path}`,             SMM2_ONLY,    DAY_ONLY,  ALL_GAME_STYLES,          CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=all Time=day)`,        `/game-1,3ds/game-style-all/time-day/card${path}`,         SMM1_AND_3DS, DAY_ONLY,  ALL_GAME_STYLES,          CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=all Time=day)`,          `/game-1,2/game-style-all/time-day/card${path}`,           SMM1_AND_2,   DAY_ONLY,  ALL_GAME_STYLES,          CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=all Time=day)`,        `/game-3ds,2/game-style-all/time-day/card${path}`,         SMM3DS_AND_2, DAY_ONLY,  ALL_GAME_STYLES,          CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=all Time=day)`,         `/game-all/game-style-all/time-day/table${path}`,          ALL_GAMES,    DAY_ONLY,  ALL_GAME_STYLES,          TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=all Time=day)`,           `/game-1/game-style-all/time-day/table${path}`,            SMM1_ONLY,    DAY_ONLY,  ALL_GAME_STYLES,          TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=all Time=day)`,         `/game-3ds/game-style-all/time-day/table${path}`,          SMM3DS_ONLY,  DAY_ONLY,  ALL_GAME_STYLES,          TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=all Time=day)`,           `/game-2/game-style-all/time-day/table${path}`,            SMM2_ONLY,    DAY_ONLY,  ALL_GAME_STYLES,          TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=all Time=day)`,       `/game-1,3ds/game-style-all/time-day/table${path}`,        SMM1_AND_3DS, DAY_ONLY,  ALL_GAME_STYLES,          TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=all Time=day)`,         `/game-1,2/game-style-all/time-day/table${path}`,          SMM1_AND_2,   DAY_ONLY,  ALL_GAME_STYLES,          TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=all Time=day)`,       `/game-3ds,2/game-style-all/time-day/table${path}`,        SMM3DS_AND_2, DAY_ONLY,  ALL_GAME_STYLES,          TABLE, routeCallback,),

                //endregion -------------------- Game style (all) --------------------

                //region -------------------- Game style (smb) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1 Time=day)`,            `/game-all/game-style-1/time-day/list${path}`,             ALL_GAMES,    DAY_ONLY,  SMB_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=1 Time=day)`,              `/game-1/game-style-1/time-day/list${path}`,               SMM1_ONLY,    DAY_ONLY,  SMB_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=1 Time=day)`,            `/game-3ds/game-style-1/time-day/list${path}`,             SMM3DS_ONLY,  DAY_ONLY,  SMB_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1 Time=day)`,              `/game-2/game-style-1/time-day/list${path}`,               SMM2_ONLY,    DAY_ONLY,  SMB_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=1 Time=day)`,          `/game-1,3ds/game-style-1/time-day/list${path}`,           SMM1_AND_3DS, DAY_ONLY,  SMB_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1 Time=day)`,            `/game-1,2/game-style-1/time-day/list${path}`,             SMM1_AND_2,   DAY_ONLY,  SMB_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1 Time=day)`,          `/game-3ds,2/game-style-1/time-day/list${path}`,           SMM3DS_AND_2, DAY_ONLY,  SMB_ONLY,                 LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1 Time=day)`,            `/game-all/game-style-1/time-day/card${path}`,             ALL_GAMES,    DAY_ONLY,  SMB_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=1 Time=day)`,              `/game-1/game-style-1/time-day/card${path}`,               SMM1_ONLY,    DAY_ONLY,  SMB_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=1 Time=day)`,            `/game-3ds/game-style-1/time-day/card${path}`,             SMM3DS_ONLY,  DAY_ONLY,  SMB_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1 Time=day)`,              `/game-2/game-style-1/time-day/card${path}`,               SMM2_ONLY,    DAY_ONLY,  SMB_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=1 Time=day)`,          `/game-1,3ds/game-style-1/time-day/card${path}`,           SMM1_AND_3DS, DAY_ONLY,  SMB_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1 Time=day)`,            `/game-1,2/game-style-1/time-day/card${path}`,             SMM1_AND_2,   DAY_ONLY,  SMB_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1 Time=day)`,          `/game-3ds,2/game-style-1/time-day/card${path}`,           SMM3DS_AND_2, DAY_ONLY,  SMB_ONLY,                 CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1 Time=day)`,           `/game-all/game-style-1/time-day/table${path}`,            ALL_GAMES,    DAY_ONLY,  SMB_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=1 Time=day)`,             `/game-1/game-style-1/time-day/table${path}`,              SMM1_ONLY,    DAY_ONLY,  SMB_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=1 Time=day)`,           `/game-3ds/game-style-1/time-day/table${path}`,            SMM3DS_ONLY,  DAY_ONLY,  SMB_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1 Time=day)`,             `/game-2/game-style-1/time-day/table${path}`,              SMM2_ONLY,    DAY_ONLY,  SMB_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=1 Time=day)`,         `/game-1,3ds/game-style-1/time-day/table${path}`,          SMM1_AND_3DS, DAY_ONLY,  SMB_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1 Time=day)`,           `/game-1,2/game-style-1/time-day/table${path}`,            SMM1_AND_2,   DAY_ONLY,  SMB_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1 Time=day)`,         `/game-3ds,2/game-style-1/time-day/table${path}`,          SMM3DS_AND_2, DAY_ONLY,  SMB_ONLY,                 TABLE, routeCallback,),

                //endregion -------------------- Game style (smb) --------------------
                //region -------------------- Game style (smb3) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3 Time=day)`,            `/game-all/game-style-3/time-day/list${path}`,             ALL_GAMES,    DAY_ONLY,  SMB3_ONLY,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=3 Time=day)`,              `/game-1/game-style-3/time-day/list${path}`,               SMM1_ONLY,    DAY_ONLY,  SMB3_ONLY,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=3 Time=day)`,            `/game-3ds/game-style-3/time-day/list${path}`,             SMM3DS_ONLY,  DAY_ONLY,  SMB3_ONLY,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3 Time=day)`,              `/game-2/game-style-3/time-day/list${path}`,               SMM2_ONLY,    DAY_ONLY,  SMB3_ONLY,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=3 Time=day)`,          `/game-1,3ds/game-style-3/time-day/list${path}`,           SMM1_AND_3DS, DAY_ONLY,  SMB3_ONLY,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3 Time=day)`,            `/game-1,2/game-style-3/time-day/list${path}`,             SMM1_AND_2,   DAY_ONLY,  SMB3_ONLY,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3 Time=day)`,          `/game-3ds,2/game-style-3/time-day/list${path}`,           SMM3DS_AND_2, DAY_ONLY,  SMB3_ONLY,                LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3 Time=day)`,            `/game-all/game-style-3/time-day/card${path}`,             ALL_GAMES,    DAY_ONLY,  SMB3_ONLY,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=3 Time=day)`,              `/game-1/game-style-3/time-day/card${path}`,               SMM1_ONLY,    DAY_ONLY,  SMB3_ONLY,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=3 Time=day)`,            `/game-3ds/game-style-3/time-day/card${path}`,             SMM3DS_ONLY,  DAY_ONLY,  SMB3_ONLY,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3 Time=day)`,              `/game-2/game-style-3/time-day/card${path}`,               SMM2_ONLY,    DAY_ONLY,  SMB3_ONLY,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=3 Time=day)`,          `/game-1,3ds/game-style-3/time-day/card${path}`,           SMM1_AND_3DS, DAY_ONLY,  SMB3_ONLY,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3 Time=day)`,            `/game-1,2/game-style-3/time-day/card${path}`,             SMM1_AND_2,   DAY_ONLY,  SMB3_ONLY,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3 Time=day)`,          `/game-3ds,2/game-style-3/time-day/card${path}`,           SMM3DS_AND_2, DAY_ONLY,  SMB3_ONLY,                CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3 Time=day)`,           `/game-all/game-style-3/time-day/table${path}`,            ALL_GAMES,    DAY_ONLY,  SMB3_ONLY,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=3 Time=day)`,             `/game-1/game-style-3/time-day/table${path}`,              SMM1_ONLY,    DAY_ONLY,  SMB3_ONLY,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=3 Time=day)`,           `/game-3ds/game-style-3/time-day/table${path}`,            SMM3DS_ONLY,  DAY_ONLY,  SMB3_ONLY,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3 Time=day)`,             `/game-2/game-style-3/time-day/table${path}`,              SMM2_ONLY,    DAY_ONLY,  SMB3_ONLY,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=3 Time=day)`,         `/game-1,3ds/game-style-3/time-day/table${path}`,          SMM1_AND_3DS, DAY_ONLY,  SMB3_ONLY,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3 Time=day)`,           `/game-1,2/game-style-3/time-day/table${path}`,            SMM1_AND_2,   DAY_ONLY,  SMB3_ONLY,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3 Time=day)`,         `/game-3ds,2/game-style-3/time-day/table${path}`,          SMM3DS_AND_2, DAY_ONLY,  SMB3_ONLY,                TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3) --------------------
                //region -------------------- Game style (smw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=W Time=day)`,            `/game-all/game-style-w/time-day/list${path}`,             ALL_GAMES,    DAY_ONLY,  SMW_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=W Time=day)`,              `/game-1/game-style-w/time-day/list${path}`,               SMM1_ONLY,    DAY_ONLY,  SMW_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=W Time=day)`,            `/game-3ds/game-style-w/time-day/list${path}`,             SMM3DS_ONLY,  DAY_ONLY,  SMW_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=W Time=day)`,              `/game-2/game-style-w/time-day/list${path}`,               SMM2_ONLY,    DAY_ONLY,  SMW_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=W Time=day)`,          `/game-1,3ds/game-style-w/time-day/list${path}`,           SMM1_AND_3DS, DAY_ONLY,  SMW_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=W Time=day)`,            `/game-1,2/game-style-w/time-day/list${path}`,             SMM1_AND_2,   DAY_ONLY,  SMW_ONLY,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=W Time=day)`,          `/game-3ds,2/game-style-w/time-day/list${path}`,           SMM3DS_AND_2, DAY_ONLY,  SMW_ONLY,                 LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=W Time=day)`,            `/game-all/game-style-w/time-day/card${path}`,             ALL_GAMES,    DAY_ONLY,  SMW_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=W Time=day)`,              `/game-1/game-style-w/time-day/card${path}`,               SMM1_ONLY,    DAY_ONLY,  SMW_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=W Time=day)`,            `/game-3ds/game-style-w/time-day/card${path}`,             SMM3DS_ONLY,  DAY_ONLY,  SMW_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=W Time=day)`,              `/game-2/game-style-w/time-day/card${path}`,               SMM2_ONLY,    DAY_ONLY,  SMW_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=W Time=day)`,          `/game-1,3ds/game-style-w/time-day/card${path}`,           SMM1_AND_3DS, DAY_ONLY,  SMW_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=W Time=day)`,            `/game-1,2/game-style-w/time-day/card${path}`,             SMM1_AND_2,   DAY_ONLY,  SMW_ONLY,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=W Time=day)`,          `/game-3ds,2/game-style-w/time-day/card${path}`,           SMM3DS_AND_2, DAY_ONLY,  SMW_ONLY,                 CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=W Time=day)`,           `/game-all/game-style-w/time-day/table${path}`,            ALL_GAMES,    DAY_ONLY,  SMW_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=W Time=day)`,             `/game-1/game-style-w/time-day/table${path}`,              SMM1_ONLY,    DAY_ONLY,  SMW_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=W Time=day)`,           `/game-3ds/game-style-w/time-day/table${path}`,            SMM3DS_ONLY,  DAY_ONLY,  SMW_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=W Time=day)`,             `/game-2/game-style-w/time-day/table${path}`,              SMM2_ONLY,    DAY_ONLY,  SMW_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=W Time=day)`,         `/game-1,3ds/game-style-w/time-day/table${path}`,          SMM1_AND_3DS, DAY_ONLY,  SMW_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=W Time=day)`,           `/game-1,2/game-style-w/time-day/table${path}`,            SMM1_AND_2,   DAY_ONLY,  SMW_ONLY,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=W Time=day)`,         `/game-3ds,2/game-style-w/time-day/table${path}`,          SMM3DS_AND_2, DAY_ONLY,  SMW_ONLY,                 TABLE, routeCallback,),

                //endregion -------------------- Game style (smw) --------------------
                //region -------------------- Game style (nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=U Time=day)`,            `/game-all/game-style-u/time-day/list${path}`,             ALL_GAMES,    DAY_ONLY,  NSMBU_ONLY,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=U Time=day)`,              `/game-1/game-style-u/time-day/list${path}`,               SMM1_ONLY,    DAY_ONLY,  NSMBU_ONLY,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=U Time=day)`,            `/game-3ds/game-style-u/time-day/list${path}`,             SMM3DS_ONLY,  DAY_ONLY,  NSMBU_ONLY,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=U Time=day)`,              `/game-2/game-style-u/time-day/list${path}`,               SMM2_ONLY,    DAY_ONLY,  NSMBU_ONLY,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=U Time=day)`,          `/game-1,3ds/game-style-u/time-day/list${path}`,           SMM1_AND_3DS, DAY_ONLY,  NSMBU_ONLY,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=U Time=day)`,            `/game-1,2/game-style-u/time-day/list${path}`,             SMM1_AND_2,   DAY_ONLY,  NSMBU_ONLY,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=U Time=day)`,          `/game-3ds,2/game-style-u/time-day/list${path}`,           SMM3DS_AND_2, DAY_ONLY,  NSMBU_ONLY,               LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=U Time=day)`,            `/game-all/game-style-u/time-day/card${path}`,             ALL_GAMES,    DAY_ONLY,  NSMBU_ONLY,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=U Time=day)`,              `/game-1/game-style-u/time-day/card${path}`,               SMM1_ONLY,    DAY_ONLY,  NSMBU_ONLY,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=U Time=day)`,            `/game-3ds/game-style-u/time-day/card${path}`,             SMM3DS_ONLY,  DAY_ONLY,  NSMBU_ONLY,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=U Time=day)`,              `/game-2/game-style-u/time-day/card${path}`,               SMM2_ONLY,    DAY_ONLY,  NSMBU_ONLY,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=U Time=day)`,          `/game-1,3ds/game-style-u/time-day/card${path}`,           SMM1_AND_3DS, DAY_ONLY,  NSMBU_ONLY,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=U Time=day)`,            `/game-1,2/game-style-u/time-day/card${path}`,             SMM1_AND_2,   DAY_ONLY,  NSMBU_ONLY,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=U Time=day)`,          `/game-3ds,2/game-style-u/time-day/card${path}`,           SMM3DS_AND_2, DAY_ONLY,  NSMBU_ONLY,               CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=U Time=day)`,           `/game-all/game-style-u/time-day/table${path}`,            ALL_GAMES,    DAY_ONLY,  NSMBU_ONLY,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=U Time=day)`,             `/game-1/game-style-u/time-day/table${path}`,              SMM1_ONLY,    DAY_ONLY,  NSMBU_ONLY,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=U Time=day)`,           `/game-3ds/game-style-u/time-day/table${path}`,            SMM3DS_ONLY,  DAY_ONLY,  NSMBU_ONLY,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=U Time=day)`,             `/game-2/game-style-u/time-day/table${path}`,              SMM2_ONLY,    DAY_ONLY,  NSMBU_ONLY,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=U Time=day)`,         `/game-1,3ds/game-style-u/time-day/table${path}`,          SMM1_AND_3DS, DAY_ONLY,  NSMBU_ONLY,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=U Time=day)`,           `/game-1,2/game-style-u/time-day/table${path}`,            SMM1_AND_2,   DAY_ONLY,  NSMBU_ONLY,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=U Time=day)`,         `/game-3ds,2/game-style-u/time-day/table${path}`,          SMM3DS_AND_2, DAY_ONLY,  NSMBU_ONLY,               TABLE, routeCallback,),

                //endregion -------------------- Game style (nsmbu) --------------------
                //region -------------------- Game style (sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3DW Time=day)`,          `/game-all/game-style-3dw/time-day/list${path}`,           ALL_GAMES,    DAY_ONLY,  SM3DW_ONLY,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3DW Time=day)`,            `/game-2/game-style-3dw/time-day/list${path}`,             SMM2_ONLY,    DAY_ONLY,  SM3DW_ONLY,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3DW Time=day)`,          `/game-1,2/game-style-3dw/time-day/list${path}`,           SMM1_AND_2,   DAY_ONLY,  SM3DW_ONLY,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3DW Time=day)`,        `/game-3ds,2/game-style-3dw/time-day/list${path}`,         SMM3DS_AND_2, DAY_ONLY,  SM3DW_ONLY,               LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3DW Time=day)`,          `/game-all/game-style-3dw/time-day/card${path}`,           ALL_GAMES,    DAY_ONLY,  SM3DW_ONLY,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3DW Time=day)`,            `/game-2/game-style-3dw/time-day/card${path}`,             SMM2_ONLY,    DAY_ONLY,  SM3DW_ONLY,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3DW Time=day)`,          `/game-1,2/game-style-3dw/time-day/card${path}`,           SMM1_AND_2,   DAY_ONLY,  SM3DW_ONLY,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3DW Time=day)`,        `/game-3ds,2/game-style-3dw/time-day/card${path}`,         SMM3DS_AND_2, DAY_ONLY,  SM3DW_ONLY,               CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3DW Time=day)`,         `/game-all/game-style-3dw/time-day/table${path}`,          ALL_GAMES,    DAY_ONLY,  SM3DW_ONLY,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3DW Time=day)`,           `/game-2/game-style-3dw/time-day/table${path}`,            SMM2_ONLY,    DAY_ONLY,  SM3DW_ONLY,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3DW Time=day)`,         `/game-1,2/game-style-3dw/time-day/table${path}`,          SMM1_AND_2,   DAY_ONLY,  SM3DW_ONLY,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3DW Time=day)`,       `/game-3ds,2/game-style-3dw/time-day/table${path}`,        SMM3DS_AND_2, DAY_ONLY,  SM3DW_ONLY,               TABLE, routeCallback,),

                //endregion -------------------- Game style (sm3dw) --------------------

                //region -------------------- Game style (smb + smb3) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&3 Time=day)`,          `/game-all/game-style-1,3/time-day/list${path}`,           ALL_GAMES,    DAY_ONLY,  SMB_AND_SMB3,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=1&3 Time=day)`,            `/game-1/game-style-1,3/time-day/list${path}`,             SMM1_ONLY,    DAY_ONLY,  SMB_AND_SMB3,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=1&3 Time=day)`,          `/game-3ds/game-style-1,3/time-day/list${path}`,           SMM3DS_ONLY,  DAY_ONLY,  SMB_AND_SMB3,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&3 Time=day)`,            `/game-2/game-style-1,3/time-day/list${path}`,             SMM2_ONLY,    DAY_ONLY,  SMB_AND_SMB3,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=1&3 Time=day)`,        `/game-1,3ds/game-style-1,3/time-day/list${path}`,         SMM1_AND_3DS, DAY_ONLY,  SMB_AND_SMB3,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&3 Time=day)`,          `/game-1,2/game-style-1,3/time-day/list${path}`,           SMM1_AND_2,   DAY_ONLY,  SMB_AND_SMB3,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&3 Time=day)`,        `/game-3ds,2/game-style-1,3/time-day/list${path}`,         SMM3DS_AND_2, DAY_ONLY,  SMB_AND_SMB3,             LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&3 Time=day)`,          `/game-all/game-style-1,3/time-day/card${path}`,           ALL_GAMES,    DAY_ONLY,  SMB_AND_SMB3,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=1&3 Time=day)`,            `/game-1/game-style-1,3/time-day/card${path}`,             SMM1_ONLY,    DAY_ONLY,  SMB_AND_SMB3,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=1&3 Time=day)`,          `/game-3ds/game-style-1,3/time-day/card${path}`,           SMM3DS_ONLY,  DAY_ONLY,  SMB_AND_SMB3,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&3 Time=day)`,            `/game-2/game-style-1,3/time-day/card${path}`,             SMM2_ONLY,    DAY_ONLY,  SMB_AND_SMB3,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=1&3 Time=day)`,        `/game-1,3ds/game-style-1,3/time-day/card${path}`,         SMM1_AND_3DS, DAY_ONLY,  SMB_AND_SMB3,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&3 Time=day)`,          `/game-1,2/game-style-1,3/time-day/card${path}`,           SMM1_AND_2,   DAY_ONLY,  SMB_AND_SMB3,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&3 Time=day)`,        `/game-3ds,2/game-style-1,3/time-day/card${path}`,         SMM3DS_AND_2, DAY_ONLY,  SMB_AND_SMB3,             CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&3 Time=day)`,         `/game-all/game-style-1,3/time-day/table${path}`,          ALL_GAMES,    DAY_ONLY,  SMB_AND_SMB3,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=1&3 Time=day)`,           `/game-1/game-style-1,3/time-day/table${path}`,            SMM1_ONLY,    DAY_ONLY,  SMB_AND_SMB3,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=1&3 Time=day)`,         `/game-3ds/game-style-1,3/time-day/table${path}`,          SMM3DS_ONLY,  DAY_ONLY,  SMB_AND_SMB3,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&3 Time=day)`,           `/game-2/game-style-1,3/time-day/table${path}`,            SMM2_ONLY,    DAY_ONLY,  SMB_AND_SMB3,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=1&3 Time=day)`,       `/game-1,3ds/game-style-1,3/time-day/table${path}`,        SMM1_AND_3DS, DAY_ONLY,  SMB_AND_SMB3,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&3 Time=day)`,         `/game-1,2/game-style-1,3/time-day/table${path}`,          SMM1_AND_2,   DAY_ONLY,  SMB_AND_SMB3,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&3 Time=day)`,       `/game-3ds,2/game-style-1,3/time-day/table${path}`,        SMM3DS_AND_2, DAY_ONLY,  SMB_AND_SMB3,             TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3) --------------------
                //region -------------------- Game style (smb + smw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&W Time=day)`,          `/game-all/game-style-1,w/time-day/list${path}`,           ALL_GAMES,    DAY_ONLY,  SMB_AND_SMW,              LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=1&W Time=day)`,            `/game-1/game-style-1,w/time-day/list${path}`,             SMM1_ONLY,    DAY_ONLY,  SMB_AND_SMW,              LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=1&W Time=day)`,          `/game-3ds/game-style-1,w/time-day/list${path}`,           SMM3DS_ONLY,  DAY_ONLY,  SMB_AND_SMW,              LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&W Time=day)`,            `/game-2/game-style-1,w/time-day/list${path}`,             SMM2_ONLY,    DAY_ONLY,  SMB_AND_SMW,              LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=1&W Time=day)`,        `/game-1,3ds/game-style-1,w/time-day/list${path}`,         SMM1_AND_3DS, DAY_ONLY,  SMB_AND_SMW,              LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&W Time=day)`,          `/game-1,2/game-style-1,w/time-day/list${path}`,           SMM1_AND_2,   DAY_ONLY,  SMB_AND_SMW,              LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&W Time=day)`,        `/game-3ds,2/game-style-1,w/time-day/list${path}`,         SMM3DS_AND_2, DAY_ONLY,  SMB_AND_SMW,              LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&W Time=day)`,          `/game-all/game-style-1,w/time-day/card${path}`,           ALL_GAMES,    DAY_ONLY,  SMB_AND_SMW,              CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=1&W Time=day)`,            `/game-1/game-style-1,w/time-day/card${path}`,             SMM1_ONLY,    DAY_ONLY,  SMB_AND_SMW,              CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=1&W Time=day)`,          `/game-3ds/game-style-1,w/time-day/card${path}`,           SMM3DS_ONLY,  DAY_ONLY,  SMB_AND_SMW,              CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&W Time=day)`,            `/game-2/game-style-1,w/time-day/card${path}`,             SMM2_ONLY,    DAY_ONLY,  SMB_AND_SMW,              CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=1&W Time=day)`,        `/game-1,3ds/game-style-1,w/time-day/card${path}`,         SMM1_AND_3DS, DAY_ONLY,  SMB_AND_SMW,              CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&W Time=day)`,          `/game-1,2/game-style-1,w/time-day/card${path}`,           SMM1_AND_2,   DAY_ONLY,  SMB_AND_SMW,              CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&W Time=day)`,        `/game-3ds,2/game-style-1,w/time-day/card${path}`,         SMM3DS_AND_2, DAY_ONLY,  SMB_AND_SMW,              CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&W Time=day)`,         `/game-all/game-style-1,w/time-day/table${path}`,          ALL_GAMES,    DAY_ONLY,  SMB_AND_SMW,              TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=1&W Time=day)`,           `/game-1/game-style-1,w/time-day/table${path}`,            SMM1_ONLY,    DAY_ONLY,  SMB_AND_SMW,              TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=1&W Time=day)`,         `/game-3ds/game-style-1,w/time-day/table${path}`,          SMM3DS_ONLY,  DAY_ONLY,  SMB_AND_SMW,              TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&W Time=day)`,           `/game-2/game-style-1,w/time-day/table${path}`,            SMM2_ONLY,    DAY_ONLY,  SMB_AND_SMW,              TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=1&W Time=day)`,       `/game-1,3ds/game-style-1,w/time-day/table${path}`,        SMM1_AND_3DS, DAY_ONLY,  SMB_AND_SMW,              TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&W Time=day)`,         `/game-1,2/game-style-1,w/time-day/table${path}`,          SMM1_AND_2,   DAY_ONLY,  SMB_AND_SMW,              TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&W Time=day)`,       `/game-3ds,2/game-style-1,w/time-day/table${path}`,        SMM3DS_AND_2, DAY_ONLY,  SMB_AND_SMW,              TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smw) --------------------
                //region -------------------- Game style (smb + nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&U Time=day)`,          `/game-all/game-style-1,u/time-day/list${path}`,           ALL_GAMES,    DAY_ONLY,  SMB_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=1&U Time=day)`,            `/game-1/game-style-1,u/time-day/list${path}`,             SMM1_ONLY,    DAY_ONLY,  SMB_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=1&U Time=day)`,          `/game-3ds/game-style-1,u/time-day/list${path}`,           SMM3DS_ONLY,  DAY_ONLY,  SMB_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&U Time=day)`,            `/game-2/game-style-1,u/time-day/list${path}`,             SMM2_ONLY,    DAY_ONLY,  SMB_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=1&U Time=day)`,        `/game-1,3ds/game-style-1,u/time-day/list${path}`,         SMM1_AND_3DS, DAY_ONLY,  SMB_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&U Time=day)`,          `/game-1,2/game-style-1,u/time-day/list${path}`,           SMM1_AND_2,   DAY_ONLY,  SMB_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&U Time=day)`,        `/game-3ds,2/game-style-1,u/time-day/list${path}`,         SMM3DS_AND_2, DAY_ONLY,  SMB_AND_NSMBU,            LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&U Time=day)`,          `/game-all/game-style-1,u/time-day/card${path}`,           ALL_GAMES,    DAY_ONLY,  SMB_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=1&U Time=day)`,            `/game-1/game-style-1,u/time-day/card${path}`,             SMM1_ONLY,    DAY_ONLY,  SMB_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=1&U Time=day)`,          `/game-3ds/game-style-1,u/time-day/card${path}`,           SMM3DS_ONLY,  DAY_ONLY,  SMB_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&U Time=day)`,            `/game-2/game-style-1,u/time-day/card${path}`,             SMM2_ONLY,    DAY_ONLY,  SMB_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=1&U Time=day)`,        `/game-1,3ds/game-style-1,u/time-day/card${path}`,         SMM1_AND_3DS, DAY_ONLY,  SMB_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&U Time=day)`,          `/game-1,2/game-style-1,u/time-day/card${path}`,           SMM1_AND_2,   DAY_ONLY,  SMB_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&U Time=day)`,        `/game-3ds,2/game-style-1,u/time-day/card${path}`,         SMM3DS_AND_2, DAY_ONLY,  SMB_AND_NSMBU,            CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&U Time=day)`,         `/game-all/game-style-1,u/time-day/table${path}`,          ALL_GAMES,    DAY_ONLY,  SMB_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=1&U Time=day)`,           `/game-1/game-style-1,u/time-day/table${path}`,            SMM1_ONLY,    DAY_ONLY,  SMB_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=1&U Time=day)`,         `/game-3ds/game-style-1,u/time-day/table${path}`,          SMM3DS_ONLY,  DAY_ONLY,  SMB_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&U Time=day)`,           `/game-2/game-style-1,u/time-day/table${path}`,            SMM2_ONLY,    DAY_ONLY,  SMB_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=1&U Time=day)`,       `/game-1,3ds/game-style-1,u/time-day/table${path}`,        SMM1_AND_3DS, DAY_ONLY,  SMB_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&U Time=day)`,         `/game-1,2/game-style-1,u/time-day/table${path}`,          SMM1_AND_2,   DAY_ONLY,  SMB_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&U Time=day)`,       `/game-3ds,2/game-style-1,u/time-day/table${path}`,        SMM3DS_AND_2, DAY_ONLY,  SMB_AND_NSMBU,            TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + nsmbu) --------------------
                //region -------------------- Game style (smb + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&3DW Time=day)`,        `/game-all/game-style-1,3dw/time-day/list${path}`,         ALL_GAMES,    DAY_ONLY,  SMB_AND_SM3DW,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&3DW Time=day)`,          `/game-2/game-style-1,3dw/time-day/list${path}`,           SMM2_ONLY,    DAY_ONLY,  SMB_AND_SM3DW,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&3DW Time=day)`,        `/game-1,2/game-style-1,3dw/time-day/list${path}`,         SMM1_AND_2,   DAY_ONLY,  SMB_AND_SM3DW,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&3DW Time=day)`,      `/game-3ds,2/game-style-1,3dw/time-day/list${path}`,       SMM3DS_AND_2, DAY_ONLY,  SMB_AND_SM3DW,            LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&3DW Time=day)`,        `/game-all/game-style-1,3dw/time-day/card${path}`,         ALL_GAMES,    DAY_ONLY,  SMB_AND_SM3DW,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&3DW Time=day)`,          `/game-2/game-style-1,3dw/time-day/card${path}`,           SMM2_ONLY,    DAY_ONLY,  SMB_AND_SM3DW,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&3DW Time=day)`,        `/game-1,2/game-style-1,3dw/time-day/card${path}`,         SMM1_AND_2,   DAY_ONLY,  SMB_AND_SM3DW,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&3DW Time=day)`,      `/game-3ds,2/game-style-1,3dw/time-day/card${path}`,       SMM3DS_AND_2, DAY_ONLY,  SMB_AND_SM3DW,            CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&3DW Time=day)`,       `/game-all/game-style-1,3dw/time-day/table${path}`,        ALL_GAMES,    DAY_ONLY,  SMB_AND_SM3DW,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&3DW Time=day)`,         `/game-2/game-style-1,3dw/time-day/table${path}`,          SMM2_ONLY,    DAY_ONLY,  SMB_AND_SM3DW,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&3DW Time=day)`,       `/game-1,2/game-style-1,3dw/time-day/table${path}`,        SMM1_AND_2,   DAY_ONLY,  SMB_AND_SM3DW,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&3DW Time=day)`,     `/game-3ds,2/game-style-1,3dw/time-day/table${path}`,      SMM3DS_AND_2, DAY_ONLY,  SMB_AND_SM3DW,            TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + sm3dw) --------------------
                //region -------------------- Game style (smb3 + smw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3&W Time=day)`,          `/game-all/game-style-3,w/time-day/list${path}`,           ALL_GAMES,    DAY_ONLY,  SMB3_AND_SMW,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=3&W Time=day)`,            `/game-1/game-style-3,w/time-day/list${path}`,             SMM1_ONLY,    DAY_ONLY,  SMB3_AND_SMW,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=3&W Time=day)`,          `/game-3ds/game-style-3,w/time-day/list${path}`,           SMM3DS_ONLY,  DAY_ONLY,  SMB3_AND_SMW,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3&W Time=day)`,            `/game-2/game-style-3,w/time-day/list${path}`,             SMM2_ONLY,    DAY_ONLY,  SMB3_AND_SMW,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3&3DS GameStyle=3&W Time=day)`,        `/game-3,3ds/game-style-3,w/time-day/list${path}`,         SMM1_AND_3DS, DAY_ONLY,  SMB3_AND_SMW,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3&W Time=day)`,          `/game-1,2/game-style-3,w/time-day/list${path}`,           SMM1_AND_2,   DAY_ONLY,  SMB3_AND_SMW,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3&W Time=day)`,        `/game-3ds,2/game-style-3,w/time-day/list${path}`,         SMM3DS_AND_2, DAY_ONLY,  SMB3_AND_SMW,             LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3&W Time=day)`,          `/game-all/game-style-3,w/time-day/card${path}`,           ALL_GAMES,    DAY_ONLY,  SMB3_AND_SMW,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=3&W Time=day)`,            `/game-1/game-style-3,w/time-day/card${path}`,             SMM1_ONLY,    DAY_ONLY,  SMB3_AND_SMW,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=3&W Time=day)`,          `/game-3ds/game-style-3,w/time-day/card${path}`,           SMM3DS_ONLY,  DAY_ONLY,  SMB3_AND_SMW,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3&W Time=day)`,            `/game-2/game-style-3,w/time-day/card${path}`,             SMM2_ONLY,    DAY_ONLY,  SMB3_AND_SMW,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3&3DS GameStyle=3&W Time=day)`,        `/game-3,3ds/game-style-3,w/time-day/card${path}`,         SMM1_AND_3DS, DAY_ONLY,  SMB3_AND_SMW,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3&W Time=day)`,          `/game-1,2/game-style-3,w/time-day/card${path}`,           SMM1_AND_2,   DAY_ONLY,  SMB3_AND_SMW,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3&W Time=day)`,        `/game-3ds,2/game-style-3,w/time-day/card${path}`,         SMM3DS_AND_2, DAY_ONLY,  SMB3_AND_SMW,             CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3&W Time=day)`,         `/game-all/game-style-3,w/time-day/table${path}`,          ALL_GAMES,    DAY_ONLY,  SMB3_AND_SMW,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=3&W Time=day)`,           `/game-1/game-style-3,w/time-day/table${path}`,            SMM1_ONLY,    DAY_ONLY,  SMB3_AND_SMW,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=3&W Time=day)`,         `/game-3ds/game-style-3,w/time-day/table${path}`,          SMM3DS_ONLY,  DAY_ONLY,  SMB3_AND_SMW,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3&W Time=day)`,           `/game-2/game-style-3,w/time-day/table${path}`,            SMM2_ONLY,    DAY_ONLY,  SMB3_AND_SMW,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3&3DS GameStyle=3&W Time=day)`,       `/game-3,3ds/game-style-3,w/time-day/table${path}`,        SMM1_AND_3DS, DAY_ONLY,  SMB3_AND_SMW,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3&W Time=day)`,         `/game-1,2/game-style-3,w/time-day/table${path}`,          SMM1_AND_2,   DAY_ONLY,  SMB3_AND_SMW,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3&W Time=day)`,       `/game-3ds,2/game-style-3,w/time-day/table${path}`,        SMM3DS_AND_2, DAY_ONLY,  SMB3_AND_SMW,             TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + smw) --------------------
                //region -------------------- Game style (smb3 + nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3&U Time=day)`,          `/game-all/game-style-3,u/time-day/list${path}`,           ALL_GAMES,    DAY_ONLY,  SMB3_AND_NSMBU,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=3&U Time=day)`,            `/game-1/game-style-3,u/time-day/list${path}`,             SMM1_ONLY,    DAY_ONLY,  SMB3_AND_NSMBU,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=3&U Time=day)`,          `/game-3ds/game-style-3,u/time-day/list${path}`,           SMM3DS_ONLY,  DAY_ONLY,  SMB3_AND_NSMBU,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3&U Time=day)`,            `/game-2/game-style-3,u/time-day/list${path}`,             SMM2_ONLY,    DAY_ONLY,  SMB3_AND_NSMBU,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=3&U Time=day)`,        `/game-3,3ds/game-style-3,u/time-day/list${path}`,         SMM1_AND_3DS, DAY_ONLY,  SMB3_AND_NSMBU,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3&U Time=day)`,          `/game-3,2/game-style-3,u/time-day/list${path}`,           SMM1_AND_2,   DAY_ONLY,  SMB3_AND_NSMBU,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3&U Time=day)`,        `/game-3ds,2/game-style-3,u/time-day/list${path}`,         SMM3DS_AND_2, DAY_ONLY,  SMB3_AND_NSMBU,           LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3&U Time=day)`,          `/game-all/game-style-3,u/time-day/card${path}`,           ALL_GAMES,    DAY_ONLY,  SMB3_AND_NSMBU,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=3&U Time=day)`,            `/game-1/game-style-3,u/time-day/card${path}`,             SMM1_ONLY,    DAY_ONLY,  SMB3_AND_NSMBU,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=3&U Time=day)`,          `/game-3ds/game-style-3,u/time-day/card${path}`,           SMM3DS_ONLY,  DAY_ONLY,  SMB3_AND_NSMBU,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3&U Time=day)`,            `/game-2/game-style-3,u/time-day/card${path}`,             SMM2_ONLY,    DAY_ONLY,  SMB3_AND_NSMBU,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=3&U Time=day)`,        `/game-3,3ds/game-style-3,u/time-day/card${path}`,         SMM1_AND_3DS, DAY_ONLY,  SMB3_AND_NSMBU,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3&U Time=day)`,          `/game-3,2/game-style-3,u/time-day/card${path}`,           SMM1_AND_2,   DAY_ONLY,  SMB3_AND_NSMBU,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3&U Time=day)`,        `/game-3ds,2/game-style-3,u/time-day/card${path}`,         SMM3DS_AND_2, DAY_ONLY,  SMB3_AND_NSMBU,           CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3&U Time=day)`,         `/game-all/game-style-3,u/time-day/table${path}`,          ALL_GAMES,    DAY_ONLY,  SMB3_AND_NSMBU,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=3&U Time=day)`,           `/game-1/game-style-3,u/time-day/table${path}`,            SMM1_ONLY,    DAY_ONLY,  SMB3_AND_NSMBU,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=3&U Time=day)`,         `/game-3ds/game-style-3,u/time-day/table${path}`,          SMM3DS_ONLY,  DAY_ONLY,  SMB3_AND_NSMBU,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3&U Time=day)`,           `/game-2/game-style-3,u/time-day/table${path}`,            SMM2_ONLY,    DAY_ONLY,  SMB3_AND_NSMBU,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=3&U Time=day)`,       `/game-3,3ds/game-style-3,u/time-day/table${path}`,        SMM1_AND_3DS, DAY_ONLY,  SMB3_AND_NSMBU,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3&U Time=day)`,         `/game-3,2/game-style-3,u/time-day/table${path}`,          SMM1_AND_2,   DAY_ONLY,  SMB3_AND_NSMBU,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3&U Time=day)`,       `/game-3ds,2/game-style-3,u/time-day/table${path}`,        SMM3DS_AND_2, DAY_ONLY,  SMB3_AND_NSMBU,           TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + nsmbu) --------------------
                //region -------------------- Game style (smb3 + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3&3DW Time=day)`,        `/game-all/game-style-3,3dw/time-day/list${path}`,         ALL_GAMES,    DAY_ONLY,  SMB3_AND_SM3DW,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3&3DW Time=day)`,          `/game-2/game-style-3,3dw/time-day/list${path}`,           SMM2_ONLY,    DAY_ONLY,  SMB3_AND_SM3DW,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3&3DW Time=day)`,        `/game-3,2/game-style-3,3dw/time-day/list${path}`,         SMM1_AND_2,   DAY_ONLY,  SMB3_AND_SM3DW,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3&3DW Time=day)`,      `/game-3ds,2/game-style-3,3dw/time-day/list${path}`,       SMM3DS_AND_2, DAY_ONLY,  SMB3_AND_SM3DW,           LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3&3DW Time=day)`,        `/game-all/game-style-3,3dw/time-day/card${path}`,         ALL_GAMES,    DAY_ONLY,  SMB3_AND_SM3DW,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3&3DW Time=day)`,          `/game-2/game-style-3,3dw/time-day/card${path}`,           SMM2_ONLY,    DAY_ONLY,  SMB3_AND_SM3DW,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3&3DW Time=day)`,        `/game-3,2/game-style-3,3dw/time-day/card${path}`,         SMM1_AND_2,   DAY_ONLY,  SMB3_AND_SM3DW,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3&3DW Time=day)`,      `/game-3ds,2/game-style-3,3dw/time-day/card${path}`,       SMM3DS_AND_2, DAY_ONLY,  SMB3_AND_SM3DW,           CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3&3DW Time=day)`,       `/game-all/game-style-3,3dw/time-day/table${path}`,        ALL_GAMES,    DAY_ONLY,  SMB3_AND_SM3DW,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3&3DW Time=day)`,         `/game-2/game-style-3,3dw/time-day/table${path}`,          SMM2_ONLY,    DAY_ONLY,  SMB3_AND_SM3DW,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3&3DW Time=day)`,       `/game-3,2/game-style-3,3dw/time-day/table${path}`,        SMM1_AND_2,   DAY_ONLY,  SMB3_AND_SM3DW,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3&3DW Time=day)`,     `/game-3ds,2/game-style-3,3dw/time-day/table${path}`,      SMM3DS_AND_2, DAY_ONLY,  SMB3_AND_SM3DW,           TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + sm3dw) --------------------
                //region -------------------- Game style (smw + nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=W&U Time=day)`,          `/game-all/game-style-w,u/time-day/list${path}`,           ALL_GAMES,    DAY_ONLY,  SMW_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=W&U Time=day)`,            `/game-1/game-style-w,u/time-day/list${path}`,             SMM1_ONLY,    DAY_ONLY,  SMW_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=W&U Time=day)`,          `/game-3ds/game-style-w,u/time-day/list${path}`,           SMM3DS_ONLY,  DAY_ONLY,  SMW_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=W&U Time=day)`,            `/game-2/game-style-w,u/time-day/list${path}`,             SMM2_ONLY,    DAY_ONLY,  SMW_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=W&U Time=day)`,        `/game-1,3ds/game-style-w,u/time-day/list${path}`,         SMM1_AND_3DS, DAY_ONLY,  SMW_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=W&U Time=day)`,          `/game-1,2/game-style-w,u/time-day/list${path}`,           SMM1_AND_2,   DAY_ONLY,  SMW_AND_NSMBU,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=W&U Time=day)`,        `/game-3ds,2/game-style-w,u/time-day/list${path}`,         SMM3DS_AND_2, DAY_ONLY,  SMW_AND_NSMBU,            LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=W&U Time=day)`,          `/game-all/game-style-w,u/time-day/card${path}`,           ALL_GAMES,    DAY_ONLY,  SMW_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=W&U Time=day)`,            `/game-1/game-style-w,u/time-day/card${path}`,             SMM1_ONLY,    DAY_ONLY,  SMW_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=W&U Time=day)`,          `/game-3ds/game-style-w,u/time-day/card${path}`,           SMM3DS_ONLY,  DAY_ONLY,  SMW_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=W&U Time=day)`,            `/game-2/game-style-w,u/time-day/card${path}`,             SMM2_ONLY,    DAY_ONLY,  SMW_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=W&U Time=day)`,        `/game-1,3ds/game-style-w,u/time-day/card${path}`,         SMM1_AND_3DS, DAY_ONLY,  SMW_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=W&U Time=day)`,          `/game-1,2/game-style-w,u/time-day/card${path}`,           SMM1_AND_2,   DAY_ONLY,  SMW_AND_NSMBU,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=W&U Time=day)`,        `/game-3ds,2/game-style-w,u/time-day/card${path}`,         SMM3DS_AND_2, DAY_ONLY,  SMW_AND_NSMBU,            CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=W&U Time=day)`,         `/game-all/game-style-w,u/time-day/table${path}`,          ALL_GAMES,    DAY_ONLY,  SMW_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=W&U Time=day)`,           `/game-1/game-style-w,u/time-day/table${path}`,            SMM1_ONLY,    DAY_ONLY,  SMW_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=W&U Time=day)`,         `/game-3ds/game-style-w,u/time-day/table${path}`,          SMM3DS_ONLY,  DAY_ONLY,  SMW_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=W&U Time=day)`,           `/game-2/game-style-w,u/time-day/table${path}`,            SMM2_ONLY,    DAY_ONLY,  SMW_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=W&U Time=day)`,       `/game-1,3ds/game-style-w,u/time-day/table${path}`,        SMM1_AND_3DS, DAY_ONLY,  SMW_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=W&U Time=day)`,         `/game-1,2/game-style-w,u/time-day/table${path}`,          SMM1_AND_2,   DAY_ONLY,  SMW_AND_NSMBU,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=W&U Time=day)`,       `/game-3ds,2/game-style-w,u/time-day/table${path}`,        SMM3DS_AND_2, DAY_ONLY,  SMW_AND_NSMBU,            TABLE, routeCallback,),

                //endregion -------------------- Game style (smw + nsmbu) --------------------
                //region -------------------- Game style (smw + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=W&3DW Time=day)`,        `/game-all/game-style-w,3dw/time-day/list${path}`,         ALL_GAMES,    DAY_ONLY,  SMW_AND_SM3DW,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=W&3DW Time=day)`,          `/game-2/game-style-w,3dw/time-day/list${path}`,           SMM2_ONLY,    DAY_ONLY,  SMW_AND_SM3DW,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=W&3DW Time=day)`,        `/game-1,2/game-style-w,3dw/time-day/list${path}`,         SMM1_AND_2,   DAY_ONLY,  SMW_AND_SM3DW,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=W&3DW Time=day)`,      `/game-3ds,2/game-style-w,3dw/time-day/list${path}`,       SMM3DS_AND_2, DAY_ONLY,  SMW_AND_SM3DW,            LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=W&3DW Time=day)`,        `/game-all/game-style-w,3dw/time-day/card${path}`,         ALL_GAMES,    DAY_ONLY,  SMW_AND_SM3DW,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=W&3DW Time=day)`,          `/game-2/game-style-w,3dw/time-day/card${path}`,           SMM2_ONLY,    DAY_ONLY,  SMW_AND_SM3DW,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=W&3DW Time=day)`,        `/game-1,2/game-style-w,3dw/time-day/card${path}`,         SMM1_AND_2,   DAY_ONLY,  SMW_AND_SM3DW,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=W&3DW Time=day)`,      `/game-3ds,2/game-style-w,3dw/time-day/card${path}`,       SMM3DS_AND_2, DAY_ONLY,  SMW_AND_SM3DW,            CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=W&3DW Time=day)`,       `/game-all/game-style-w,3dw/time-day/table${path}`,        ALL_GAMES,    DAY_ONLY,  SMW_AND_SM3DW,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=W&3DW Time=day)`,         `/game-2/game-style-w,3dw/time-day/table${path}`,          SMM2_ONLY,    DAY_ONLY,  SMW_AND_SM3DW,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=W&3DW Time=day)`,       `/game-1,2/game-style-w,3dw/time-day/table${path}`,        SMM1_AND_2,   DAY_ONLY,  SMW_AND_SM3DW,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=W&3DW Time=day)`,     `/game-3ds,2/game-style-w,3dw/time-day/table${path}`,      SMM3DS_AND_2, DAY_ONLY,  SMW_AND_SM3DW,            TABLE, routeCallback,),

                //endregion -------------------- Game style (smw + sm3dw) --------------------
                //region -------------------- Game style (nsmbu + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=U&3DW Time=day)`,        `/game-all/game-style-u,3dw/time-day/list${path}`,         ALL_GAMES,    DAY_ONLY,  NSMBU_AND_SM3DW,          LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=U&3DW Time=day)`,          `/game-2/game-style-u,3dw/time-day/list${path}`,           SMM2_ONLY,    DAY_ONLY,  NSMBU_AND_SM3DW,          LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=U&3DW Time=day)`,        `/game-1,2/game-style-u,3dw/time-day/list${path}`,         SMM1_AND_2,   DAY_ONLY,  NSMBU_AND_SM3DW,          LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=U&3DW Time=day)`,      `/game-3ds,2/game-style-u,3dw/time-day/list${path}`,       SMM3DS_AND_2, DAY_ONLY,  NSMBU_AND_SM3DW,          LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=U&3DW Time=day)`,        `/game-all/game-style-u,3dw/time-day/card${path}`,         ALL_GAMES,    DAY_ONLY,  NSMBU_AND_SM3DW,          CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=U&3DW Time=day)`,          `/game-2/game-style-u,3dw/time-day/card${path}`,           SMM2_ONLY,    DAY_ONLY,  NSMBU_AND_SM3DW,          CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=U&3DW Time=day)`,        `/game-1,2/game-style-u,3dw/time-day/card${path}`,         SMM1_AND_2,   DAY_ONLY,  NSMBU_AND_SM3DW,          CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=U&3DW Time=day)`,      `/game-3ds,2/game-style-u,3dw/time-day/card${path}`,       SMM3DS_AND_2, DAY_ONLY,  NSMBU_AND_SM3DW,          CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=U&3DW Time=day)`,       `/game-all/game-style-u,3dw/time-day/table${path}`,        ALL_GAMES,    DAY_ONLY,  NSMBU_AND_SM3DW,          TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=U&3DW Time=day)`,         `/game-2/game-style-u,3dw/time-day/table${path}`,          SMM2_ONLY,    DAY_ONLY,  NSMBU_AND_SM3DW,          TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=U&3DW Time=day)`,       `/game-1,2/game-style-u,3dw/time-day/table${path}`,        SMM1_AND_2,   DAY_ONLY,  NSMBU_AND_SM3DW,          TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=U&3DW Time=day)`,     `/game-3ds,2/game-style-u,3dw/time-day/table${path}`,      SMM3DS_AND_2, DAY_ONLY,  NSMBU_AND_SM3DW,          TABLE, routeCallback,),

                //endregion -------------------- Game style (nsmbu + sm3dw) --------------------

                //region -------------------- Game style (smb + smb3 + smw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&3&W Time=day)`,        `/game-all/game-style-1,3,w/time-day/list${path}`,         ALL_GAMES,    DAY_ONLY,  SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=1&3&W Time=day)`,          `/game-1/game-style-1,3,w/time-day/list${path}`,           SMM1_ONLY,    DAY_ONLY,  SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=1&3&W Time=day)`,        `/game-3ds/game-style-1,3,w/time-day/list${path}`,         SMM3DS_ONLY,  DAY_ONLY,  SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&3&W Time=day)`,          `/game-2/game-style-1,3,w/time-day/list${path}`,           SMM2_ONLY,    DAY_ONLY,  SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=1&3&W Time=day)`,      `/game-1,3ds/game-style-1,3,w/time-day/list${path}`,       SMM1_AND_3DS, DAY_ONLY,  SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&3&W Time=day)`,        `/game-1,2/game-style-1,3,w/time-day/list${path}`,         SMM1_AND_2,   DAY_ONLY,  SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&3&W Time=day)`,      `/game-3ds,2/game-style-1,3,w/time-day/list${path}`,       SMM3DS_AND_2, DAY_ONLY,  SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&3&W Time=day)`,        `/game-all/game-style-1,3,w/time-day/card${path}`,         ALL_GAMES,    DAY_ONLY,  SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=1&3&W Time=day)`,          `/game-1/game-style-1,3,w/time-day/card${path}`,           SMM1_ONLY,    DAY_ONLY,  SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=1&3&W Time=day)`,        `/game-3ds/game-style-1,3,w/time-day/card${path}`,         SMM3DS_ONLY,  DAY_ONLY,  SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&3&W Time=day)`,          `/game-2/game-style-1,3,w/time-day/card${path}`,           SMM2_ONLY,    DAY_ONLY,  SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=1&3&W Time=day)`,      `/game-1,3ds/game-style-1,3,w/time-day/card${path}`,       SMM1_AND_3DS, DAY_ONLY,  SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&3&W Time=day)`,        `/game-1,2/game-style-1,3,w/time-day/card${path}`,         SMM1_AND_2,   DAY_ONLY,  SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&3&W Time=day)`,      `/game-3ds,2/game-style-1,3,w/time-day/card${path}`,       SMM3DS_AND_2, DAY_ONLY,  SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&3&W Time=day)`,       `/game-all/game-style-1,3,w/time-day/table${path}`,        ALL_GAMES,    DAY_ONLY,  SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=1&3&W Time=day)`,         `/game-1/game-style-1,3,w/time-day/table${path}`,          SMM1_ONLY,    DAY_ONLY,  SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=1&3&W Time=day)`,       `/game-3ds/game-style-1,3,w/time-day/table${path}`,        SMM3DS_ONLY,  DAY_ONLY,  SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&3&W Time=day)`,         `/game-2/game-style-1,3,w/time-day/table${path}`,          SMM2_ONLY,    DAY_ONLY,  SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=1&3&W Time=day)`,     `/game-1,3ds/game-style-1,3,w/time-day/table${path}`,      SMM1_AND_3DS, DAY_ONLY,  SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&3&W Time=day)`,       `/game-1,2/game-style-1,3,w/time-day/table${path}`,        SMM1_AND_2,   DAY_ONLY,  SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&3&W Time=day)`,     `/game-3ds,2/game-style-1,3,w/time-day/table${path}`,      SMM3DS_AND_2, DAY_ONLY,  SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + smw) --------------------
                //region -------------------- Game style (smb + smb3 + nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&3&U Time=day)`,        `/game-all/game-style-1,3,u/time-day/list${path}`,         ALL_GAMES,    DAY_ONLY,  SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=1&3&U Time=day)`,          `/game-1/game-style-1,3,u/time-day/list${path}`,           SMM1_ONLY,    DAY_ONLY,  SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=1&3&U Time=day)`,        `/game-3ds/game-style-1,3,u/time-day/list${path}`,         SMM3DS_ONLY,  DAY_ONLY,  SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&3&U Time=day)`,          `/game-2/game-style-1,3,u/time-day/list${path}`,           SMM2_ONLY,    DAY_ONLY,  SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=1&3&U Time=day)`,      `/game-1,3ds/game-style-1,3,u/time-day/list${path}`,       SMM1_AND_3DS, DAY_ONLY,  SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&3&U Time=day)`,        `/game-1,2/game-style-1,3,u/time-day/list${path}`,         SMM1_AND_2,   DAY_ONLY,  SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&3&U Time=day)`,      `/game-3ds,2/game-style-1,3,u/time-day/list${path}`,       SMM3DS_AND_2, DAY_ONLY,  SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&3&U Time=day)`,        `/game-all/game-style-1,3,u/time-day/card${path}`,         ALL_GAMES,    DAY_ONLY,  SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=1&3&U Time=day)`,          `/game-1/game-style-1,3,u/time-day/card${path}`,           SMM1_ONLY,    DAY_ONLY,  SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=1&3&U Time=day)`,        `/game-3ds/game-style-1,3,u/time-day/card${path}`,         SMM3DS_ONLY,  DAY_ONLY,  SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&3&U Time=day)`,          `/game-2/game-style-1,3,u/time-day/card${path}`,           SMM2_ONLY,    DAY_ONLY,  SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=1&3&U Time=day)`,      `/game-1,3ds/game-style-1,3,u/time-day/card${path}`,       SMM1_AND_3DS, DAY_ONLY,  SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&3&U Time=day)`,        `/game-1,2/game-style-1,3,u/time-day/card${path}`,         SMM1_AND_2,   DAY_ONLY,  SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&3&U Time=day)`,      `/game-3ds,2/game-style-1,3,u/time-day/card${path}`,       SMM3DS_AND_2, DAY_ONLY,  SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&3&U Time=day)`,       `/game-all/game-style-1,3,u/time-day/table${path}`,        ALL_GAMES,    DAY_ONLY,  SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=1&3&U Time=day)`,         `/game-1/game-style-1,3,u/time-day/table${path}`,          SMM1_ONLY,    DAY_ONLY,  SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=1&3&U Time=day)`,       `/game-3ds/game-style-1,3,u/time-day/table${path}`,        SMM3DS_ONLY,  DAY_ONLY,  SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&3&U Time=day)`,         `/game-2/game-style-1,3,u/time-day/table${path}`,          SMM2_ONLY,    DAY_ONLY,  SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=1&3&U Time=day)`,     `/game-1,3ds/game-style-1,3,u/time-day/table${path}`,      SMM1_AND_3DS, DAY_ONLY,  SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&3&U Time=day)`,       `/game-1,2/game-style-1,3,u/time-day/table${path}`,        SMM1_AND_2,   DAY_ONLY,  SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&3&U Time=day)`,     `/game-3ds,2/game-style-1,3,u/time-day/table${path}`,      SMM3DS_AND_2, DAY_ONLY,  SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + nsmbu) --------------------
                //region -------------------- Game style (smb + smb3 + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&3&3DW Time=day)`,      `/game-all/game-style-1,3,3dw/time-day/list${path}`,       ALL_GAMES,    DAY_ONLY,  SMB_AND_SMB3_AND_SM3DW,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&3&3DW Time=day)`,        `/game-2/game-style-1,3,3dw/time-day/list${path}`,         SMM2_ONLY,    DAY_ONLY,  SMB_AND_SMB3_AND_SM3DW,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&3&3DW Time=day)`,      `/game-1,2/game-style-1,3,3dw/time-day/list${path}`,       SMM1_AND_2,   DAY_ONLY,  SMB_AND_SMB3_AND_SM3DW,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&3&3DW Time=day)`,    `/game-3ds,2/game-style-1,3,3dw/time-day/list${path}`,     SMM3DS_AND_2, DAY_ONLY,  SMB_AND_SMB3_AND_SM3DW,   LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&3&3DW Time=day)`,      `/game-all/game-style-1,3,3dw/time-day/card${path}`,       ALL_GAMES,    DAY_ONLY,  SMB_AND_SMB3_AND_SM3DW,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&3&3DW Time=day)`,        `/game-2/game-style-1,3,3dw/time-day/card${path}`,         SMM2_ONLY,    DAY_ONLY,  SMB_AND_SMB3_AND_SM3DW,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&3&3DW Time=day)`,      `/game-1,2/game-style-1,3,3dw/time-day/card${path}`,       SMM1_AND_2,   DAY_ONLY,  SMB_AND_SMB3_AND_SM3DW,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&3&3DW Time=day)`,    `/game-3ds,2/game-style-1,3,3dw/time-day/card${path}`,     SMM3DS_AND_2, DAY_ONLY,  SMB_AND_SMB3_AND_SM3DW,   CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&3&3DW Time=day)`,     `/game-all/game-style-1,3,3dw/time-day/table${path}`,      ALL_GAMES,    DAY_ONLY,  SMB_AND_SMB3_AND_SM3DW,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&3&3DW Time=day)`,       `/game-2/game-style-1,3,3dw/time-day/table${path}`,        SMM2_ONLY,    DAY_ONLY,  SMB_AND_SMB3_AND_SM3DW,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&3&3DW Time=day)`,     `/game-1,2/game-style-1,3,3dw/time-day/table${path}`,      SMM1_AND_2,   DAY_ONLY,  SMB_AND_SMB3_AND_SM3DW,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&3&3DW Time=day)`,   `/game-3ds,2/game-style-1,3,3dw/time-day/table${path}`,    SMM3DS_AND_2, DAY_ONLY,  SMB_AND_SMB3_AND_SM3DW,   TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + sm3dw) --------------------
                //region -------------------- Game style (smb + smw + nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&W&U Time=day)`,        `/game-all/game-style-1,w,u/time-day/list${path}`,         ALL_GAMES,    DAY_ONLY,  SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=1&W&U Time=day)`,          `/game-1/game-style-1,w,u/time-day/list${path}`,           SMM1_ONLY,    DAY_ONLY,  SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=1&W&U Time=day)`,        `/game-3ds/game-style-1,w,u/time-day/list${path}`,         SMM3DS_ONLY,  DAY_ONLY,  SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&W&U Time=day)`,          `/game-2/game-style-1,w,u/time-day/list${path}`,           SMM2_ONLY,    DAY_ONLY,  SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=1&W&U Time=day)`,      `/game-1,3ds/game-style-1,w,u/time-day/list${path}`,       SMM1_AND_3DS, DAY_ONLY,  SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&W&U Time=day)`,        `/game-1,2/game-style-1,w,u/time-day/list${path}`,         SMM1_AND_2,   DAY_ONLY,  SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&W&U Time=day)`,      `/game-3ds,2/game-style-1,w,u/time-day/list${path}`,       SMM3DS_AND_2, DAY_ONLY,  SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&W&U Time=day)`,        `/game-all/game-style-1,w,u/time-day/card${path}`,         ALL_GAMES,    DAY_ONLY,  SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=1&W&U Time=day)`,          `/game-1/game-style-1,w,u/time-day/card${path}`,           SMM1_ONLY,    DAY_ONLY,  SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=1&W&U Time=day)`,        `/game-3ds/game-style-1,w,u/time-day/card${path}`,         SMM3DS_ONLY,  DAY_ONLY,  SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&W&U Time=day)`,          `/game-2/game-style-1,w,u/time-day/card${path}`,           SMM2_ONLY,    DAY_ONLY,  SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=1&W&U Time=day)`,      `/game-1,3ds/game-style-1,w,u/time-day/card${path}`,       SMM1_AND_3DS, DAY_ONLY,  SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&W&U Time=day)`,        `/game-1,2/game-style-1,w,u/time-day/card${path}`,         SMM1_AND_2,   DAY_ONLY,  SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&W&U Time=day)`,      `/game-3ds,2/game-style-1,w,u/time-day/card${path}`,       SMM3DS_AND_2, DAY_ONLY,  SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&W&U Time=day)`,       `/game-all/game-style-1,w,u/time-day/table${path}`,        ALL_GAMES,    DAY_ONLY,  SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=1&W&U Time=day)`,         `/game-1/game-style-1,w,u/time-day/table${path}`,          SMM1_ONLY,    DAY_ONLY,  SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=1&W&U Time=day)`,       `/game-3ds/game-style-1,w,u/time-day/table${path}`,        SMM3DS_ONLY,  DAY_ONLY,  SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&W&U Time=day)`,         `/game-2/game-style-1,w,u/time-day/table${path}`,          SMM2_ONLY,    DAY_ONLY,  SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=1&W&U Time=day)`,     `/game-1,3ds/game-style-1,w,u/time-day/table${path}`,      SMM1_AND_3DS, DAY_ONLY,  SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&W&U Time=day)`,       `/game-1,2/game-style-1,w,u/time-day/table${path}`,        SMM1_AND_2,   DAY_ONLY,  SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&W&U Time=day)`,     `/game-3ds,2/game-style-1,w,u/time-day/table${path}`,      SMM3DS_AND_2, DAY_ONLY,  SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smw + nsmbu) --------------------
                //region -------------------- Game style (smb + smw + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&W&3DW Time=day)`,      `/game-all/game-style-1,w,3dw/time-day/list${path}`,       ALL_GAMES,    DAY_ONLY,  SMB_AND_SMW_AND_SM3DW,    LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&W&3DW Time=day)`,        `/game-2/game-style-1,w,3dw/time-day/list${path}`,         SMM2_ONLY,    DAY_ONLY,  SMB_AND_SMW_AND_SM3DW,    LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&W&3DW Time=day)`,      `/game-1,2/game-style-1,w,3dw/time-day/list${path}`,       SMM1_AND_2,   DAY_ONLY,  SMB_AND_SMW_AND_SM3DW,    LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&W&3DW Time=day)`,    `/game-3ds,2/game-style-1,w,3dw/time-day/list${path}`,     SMM3DS_AND_2, DAY_ONLY,  SMB_AND_SMW_AND_SM3DW,    LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&W&3DW Time=day)`,      `/game-all/game-style-1,w,3dw/time-day/card${path}`,       ALL_GAMES,    DAY_ONLY,  SMB_AND_SMW_AND_SM3DW,    CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&W&3DW Time=day)`,        `/game-2/game-style-1,w,3dw/time-day/card${path}`,         SMM2_ONLY,    DAY_ONLY,  SMB_AND_SMW_AND_SM3DW,    CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&W&3DW Time=day)`,      `/game-1,2/game-style-1,w,3dw/time-day/card${path}`,       SMM1_AND_2,   DAY_ONLY,  SMB_AND_SMW_AND_SM3DW,    CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&W&3DW Time=day)`,    `/game-3ds,2/game-style-1,w,3dw/time-day/card${path}`,     SMM3DS_AND_2, DAY_ONLY,  SMB_AND_SMW_AND_SM3DW,    CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&W&3DW Time=day)`,     `/game-all/game-style-1,w,3dw/time-day/table${path}`,      ALL_GAMES,    DAY_ONLY,  SMB_AND_SMW_AND_SM3DW,    TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&W&3DW Time=day)`,       `/game-2/game-style-1,w,3dw/time-day/table${path}`,        SMM2_ONLY,    DAY_ONLY,  SMB_AND_SMW_AND_SM3DW,    TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&W&3DW Time=day)`,     `/game-1,2/game-style-1,w,3dw/time-day/table${path}`,      SMM1_AND_2,   DAY_ONLY,  SMB_AND_SMW_AND_SM3DW,    TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&W&3DW Time=day)`,   `/game-3ds,2/game-style-1,w,3dw/time-day/table${path}`,    SMM3DS_AND_2, DAY_ONLY,  SMB_AND_SMW_AND_SM3DW,    TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smw + sm3dw) --------------------
                //region -------------------- Game style (smb + nsmbu + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&U&3DW Time=day)`,      `/game-all/game-style-1,u,3dw/time-day/list${path}`,       ALL_GAMES,    DAY_ONLY,  SMB_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&U&3DW Time=day)`,        `/game-2/game-style-1,u,3dw/time-day/list${path}`,         SMM2_ONLY,    DAY_ONLY,  SMB_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&U&3DW Time=day)`,      `/game-1,2/game-style-1,u,3dw/time-day/list${path}`,       SMM1_AND_2,   DAY_ONLY,  SMB_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&U&3DW Time=day)`,    `/game-3ds,2/game-style-1,u,3dw/time-day/list${path}`,     SMM3DS_AND_2, DAY_ONLY,  SMB_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&U&3DW Time=day)`,      `/game-all/game-style-1,u,3dw/time-day/card${path}`,       ALL_GAMES,    DAY_ONLY,  SMB_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&U&3DW Time=day)`,        `/game-2/game-style-1,u,3dw/time-day/card${path}`,         SMM2_ONLY,    DAY_ONLY,  SMB_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&U&3DW Time=day)`,      `/game-1,2/game-style-1,u,3dw/time-day/card${path}`,       SMM1_AND_2,   DAY_ONLY,  SMB_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&U&3DW Time=day)`,    `/game-3ds,2/game-style-1,u,3dw/time-day/card${path}`,     SMM3DS_AND_2, DAY_ONLY,  SMB_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&U&3DW Time=day)`,     `/game-all/game-style-1,u,3dw/time-day/table${path}`,      ALL_GAMES,    DAY_ONLY,  SMB_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&U&3DW Time=day)`,       `/game-2/game-style-1,u,3dw/time-day/table${path}`,        SMM2_ONLY,    DAY_ONLY,  SMB_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&U&3DW Time=day)`,     `/game-1,2/game-style-1,u,3dw/time-day/table${path}`,      SMM1_AND_2,   DAY_ONLY,  SMB_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&U&3DW Time=day)`,   `/game-3ds,2/game-style-1,u,3dw/time-day/table${path}`,    SMM3DS_AND_2, DAY_ONLY,  SMB_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + nsmbu + sm3dw) --------------------
                //region -------------------- Game style (smb3 + smw + nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3&W&U Time=day)`,        `/game-all/game-style-3,w,u/time-day/list${path}`,         ALL_GAMES,    DAY_ONLY,  SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=3&W&U Time=day)`,          `/game-1/game-style-3,w,u/time-day/list${path}`,           SMM1_ONLY,    DAY_ONLY,  SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=3&W&U Time=day)`,        `/game-3ds/game-style-3,w,u/time-day/list${path}`,         SMM3DS_ONLY,  DAY_ONLY,  SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3&W&U Time=day)`,          `/game-2/game-style-3,w,u/time-day/list${path}`,           SMM2_ONLY,    DAY_ONLY,  SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=3&W&U Time=day)`,      `/game-1,3ds/game-style-3,w,u/time-day/list${path}`,       SMM1_AND_3DS, DAY_ONLY,  SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3&W&U Time=day)`,        `/game-1,2/game-style-3,w,u/time-day/list${path}`,         SMM1_AND_2,   DAY_ONLY,  SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3&W&U Time=day)`,      `/game-3ds,2/game-style-3,w,u/time-day/list${path}`,       SMM3DS_AND_2, DAY_ONLY,  SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3&W&U Time=day)`,        `/game-all/game-style-3,w,u/time-day/card${path}`,         ALL_GAMES,    DAY_ONLY,  SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=3&W&U Time=day)`,          `/game-1/game-style-3,w,u/time-day/card${path}`,           SMM1_ONLY,    DAY_ONLY,  SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=3&W&U Time=day)`,        `/game-3ds/game-style-3,w,u/time-day/card${path}`,         SMM3DS_ONLY,  DAY_ONLY,  SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3&W&U Time=day)`,          `/game-2/game-style-3,w,u/time-day/card${path}`,           SMM2_ONLY,    DAY_ONLY,  SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=3&W&U Time=day)`,      `/game-1,3ds/game-style-3,w,u/time-day/card${path}`,       SMM1_AND_3DS, DAY_ONLY,  SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3&W&U Time=day)`,        `/game-1,2/game-style-3,w,u/time-day/card${path}`,         SMM1_AND_2,   DAY_ONLY,  SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3&W&U Time=day)`,      `/game-3ds,2/game-style-3,w,u/time-day/card${path}`,       SMM3DS_AND_2, DAY_ONLY,  SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3&W&U Time=day)`,       `/game-all/game-style-3,w,u/time-day/table${path}`,        ALL_GAMES,    DAY_ONLY,  SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=3&W&U Time=day)`,         `/game-1/game-style-3,w,u/time-day/table${path}`,          SMM1_ONLY,    DAY_ONLY,  SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=3&W&U Time=day)`,       `/game-3ds/game-style-3,w,u/time-day/table${path}`,        SMM3DS_ONLY,  DAY_ONLY,  SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3&W&U Time=day)`,         `/game-2/game-style-3,w,u/time-day/table${path}`,          SMM2_ONLY,    DAY_ONLY,  SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=3&W&U Time=day)`,     `/game-1,3ds/game-style-3,w,u/time-day/table${path}`,      SMM1_AND_3DS, DAY_ONLY,  SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3&W&U Time=day)`,       `/game-1,2/game-style-3,w,u/time-day/table${path}`,        SMM1_AND_2,   DAY_ONLY,  SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3&W&U Time=day)`,     `/game-3ds,2/game-style-3,w,u/time-day/table${path}`,      SMM3DS_AND_2, DAY_ONLY,  SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + smw + nsmbu) --------------------
                //region -------------------- Game style (smb3 + smw + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3&W&3DW Time=day)`,      `/game-all/game-style-3,w,3dw/time-day/list${path}`,       ALL_GAMES,    DAY_ONLY,  SMB3_AND_SMW_AND_SM3DW,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3&W&3DW Time=day)`,        `/game-2/game-style-3,w,3dw/time-day/list${path}`,         SMM2_ONLY,    DAY_ONLY,  SMB3_AND_SMW_AND_SM3DW,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3&W&3DW Time=day)`,      `/game-1,2/game-style-3,w,3dw/time-day/list${path}`,       SMM1_AND_2,   DAY_ONLY,  SMB3_AND_SMW_AND_SM3DW,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3&W&3DW Time=day)`,    `/game-3ds,2/game-style-3,w,3dw/time-day/list${path}`,     SMM3DS_AND_2, DAY_ONLY,  SMB3_AND_SMW_AND_SM3DW,   LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3&W&3DW Time=day)`,      `/game-all/game-style-3,w,3dw/time-day/card${path}`,       ALL_GAMES,    DAY_ONLY,  SMB3_AND_SMW_AND_SM3DW,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3&W&3DW Time=day)`,        `/game-2/game-style-3,w,3dw/time-day/card${path}`,         SMM2_ONLY,    DAY_ONLY,  SMB3_AND_SMW_AND_SM3DW,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3&W&3DW Time=day)`,      `/game-1,2/game-style-3,w,3dw/time-day/card${path}`,       SMM1_AND_2,   DAY_ONLY,  SMB3_AND_SMW_AND_SM3DW,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3&W&3DW Time=day)`,    `/game-3ds,2/game-style-3,w,3dw/time-day/card${path}`,     SMM3DS_AND_2, DAY_ONLY,  SMB3_AND_SMW_AND_SM3DW,   CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3&W&3DW Time=day)`,     `/game-all/game-style-3,w,3dw/time-day/table${path}`,      ALL_GAMES,    DAY_ONLY,  SMB3_AND_SMW_AND_SM3DW,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3&W&3DW Time=day)`,       `/game-2/game-style-3,w,3dw/time-day/table${path}`,        SMM2_ONLY,    DAY_ONLY,  SMB3_AND_SMW_AND_SM3DW,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3&W&3DW Time=day)`,     `/game-1,2/game-style-3,w,3dw/time-day/table${path}`,      SMM1_AND_2,   DAY_ONLY,  SMB3_AND_SMW_AND_SM3DW,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3&W&3DW Time=day)`,   `/game-3ds,2/game-style-3,w,3dw/time-day/table${path}`,    SMM3DS_AND_2, DAY_ONLY,  SMB3_AND_SMW_AND_SM3DW,   TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + smw + sm3dw) --------------------
                //region -------------------- Game style (smb3 + nsmbu + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3&U&3DW Time=day)`,      `/game-all/game-style-3,u,3dw/time-day/list${path}`,       ALL_GAMES,    DAY_ONLY,  SMB3_AND_NSMBU_AND_SM3DW, LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3&U&3DW Time=day)`,        `/game-2/game-style-3,u,3dw/time-day/list${path}`,         SMM2_ONLY,    DAY_ONLY,  SMB3_AND_NSMBU_AND_SM3DW, LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3&U&3DW Time=day)`,      `/game-1,2/game-style-3,u,3dw/time-day/list${path}`,       SMM1_AND_2,   DAY_ONLY,  SMB3_AND_NSMBU_AND_SM3DW, LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3&U&3DW Time=day)`,    `/game-3ds,2/game-style-3,u,3dw/time-day/list${path}`,     SMM3DS_AND_2, DAY_ONLY,  SMB3_AND_NSMBU_AND_SM3DW, LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3&U&3DW Time=day)`,      `/game-all/game-style-3,u,3dw/time-day/card${path}`,       ALL_GAMES,    DAY_ONLY,  SMB3_AND_NSMBU_AND_SM3DW, CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3&U&3DW Time=day)`,        `/game-2/game-style-3,u,3dw/time-day/card${path}`,         SMM2_ONLY,    DAY_ONLY,  SMB3_AND_NSMBU_AND_SM3DW, CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3&U&3DW Time=day)`,      `/game-1,2/game-style-3,u,3dw/time-day/card${path}`,       SMM1_AND_2,   DAY_ONLY,  SMB3_AND_NSMBU_AND_SM3DW, CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3&U&3DW Time=day)`,    `/game-3ds,2/game-style-3,u,3dw/time-day/card${path}`,     SMM3DS_AND_2, DAY_ONLY,  SMB3_AND_NSMBU_AND_SM3DW, CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3&U&3DW Time=day)`,     `/game-all/game-style-3,u,3dw/time-day/table${path}`,      ALL_GAMES,    DAY_ONLY,  SMB3_AND_NSMBU_AND_SM3DW, TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3&U&3DW Time=day)`,       `/game-2/game-style-3,u,3dw/time-day/table${path}`,        SMM2_ONLY,    DAY_ONLY,  SMB3_AND_NSMBU_AND_SM3DW, TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3&U&3DW Time=day)`,     `/game-1,2/game-style-3,u,3dw/time-day/table${path}`,      SMM1_AND_2,   DAY_ONLY,  SMB3_AND_NSMBU_AND_SM3DW, TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3&U&3DW Time=day)`,   `/game-3ds,2/game-style-3,u,3dw/time-day/table${path}`,    SMM3DS_AND_2, DAY_ONLY,  SMB3_AND_NSMBU_AND_SM3DW, TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + nsmbu + sm3dw) --------------------
                //region -------------------- Game style (smw + nsmbu + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=W&U&3DW Time=day)`,      `/game-all/game-style-w,u,3dw/time-day/list${path}`,       ALL_GAMES,    DAY_ONLY,  SMW_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=W&U&3DW Time=day)`,        `/game-2/game-style-w,u,3dw/time-day/list${path}`,         SMM2_ONLY,    DAY_ONLY,  SMW_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=W&U&3DW Time=day)`,      `/game-1,2/game-style-w,u,3dw/time-day/list${path}`,       SMM1_AND_2,   DAY_ONLY,  SMW_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=W&U&3DW Time=day)`,    `/game-3ds,2/game-style-w,u,3dw/time-day/list${path}`,     SMM3DS_AND_2, DAY_ONLY,  SMW_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=W&U&3DW Time=day)`,      `/game-all/game-style-w,u,3dw/time-day/card${path}`,       ALL_GAMES,    DAY_ONLY,  SMW_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=W&U&3DW Time=day)`,        `/game-2/game-style-w,u,3dw/time-day/card${path}`,         SMM2_ONLY,    DAY_ONLY,  SMW_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=W&U&3DW Time=day)`,      `/game-1,2/game-style-w,u,3dw/time-day/card${path}`,       SMM1_AND_2,   DAY_ONLY,  SMW_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=W&U&3DW Time=day)`,    `/game-3ds,2/game-style-w,u,3dw/time-day/card${path}`,     SMM3DS_AND_2, DAY_ONLY,  SMW_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=W&U&3DW Time=day)`,     `/game-all/game-style-w,u,3dw/time-day/table${path}`,      ALL_GAMES,    DAY_ONLY,  SMW_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=W&U&3DW Time=day)`,       `/game-2/game-style-w,u,3dw/time-day/table${path}`,        SMM2_ONLY,    DAY_ONLY,  SMW_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=W&U&3DW Time=day)`,     `/game-1,2/game-style-w,u,3dw/time-day/table${path}`,      SMM1_AND_2,   DAY_ONLY,  SMW_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=W&U&3DW Time=day)`,   `/game-3ds,2/game-style-w,u,3dw/time-day/table${path}`,    SMM3DS_AND_2, DAY_ONLY,  SMW_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),

                //endregion -------------------- Game style (smw + nsmbu + sm3dw) --------------------

                //region -------------------- Game style (smb + smb3 + smw + nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&3&W&U Time=day)`,      `/game-all/game-style-1,3,w,u/time-day/list${path}`,       ALL_GAMES,    DAY_ONLY,  NOT_SM3DW,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1 GameStyle=1&3&W&U Time=day)`,        `/game-1/game-style-1,3,w,u/time-day/list${path}`,         SMM1_ONLY,    DAY_ONLY,  NOT_SM3DW,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS GameStyle=1&3&W&U Time=day)`,      `/game-3ds/game-style-1,3,w,u/time-day/list${path}`,       SMM3DS_ONLY,  DAY_ONLY,  NOT_SM3DW,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&3&W&U Time=day)`,        `/game-2/game-style-1,3,w,u/time-day/list${path}`,         SMM2_ONLY,    DAY_ONLY,  NOT_SM3DW,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&3DS GameStyle=1&3&W&U Time=day)`,    `/game-1,3ds/game-style-1,3,w,u/time-day/list${path}`,     SMM1_AND_3DS, DAY_ONLY,  NOT_SM3DW,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&3&W&U Time=day)`,      `/game-1,2/game-style-1,3,w,u/time-day/list${path}`,       SMM1_AND_2,   DAY_ONLY,  NOT_SM3DW,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&3&W&U Time=day)`,    `/game-3ds,2/game-style-1,3,w,u/time-day/list${path}`,     SMM3DS_AND_2, DAY_ONLY,  NOT_SM3DW,                LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&3&W&U Time=day)`,      `/game-all/game-style-1,3,w,u/time-day/card${path}`,       ALL_GAMES,    DAY_ONLY,  NOT_SM3DW,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1 GameStyle=1&3&W&U Time=day)`,        `/game-1/game-style-1,3,w,u/time-day/card${path}`,         SMM1_ONLY,    DAY_ONLY,  NOT_SM3DW,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS GameStyle=1&3&W&U Time=day)`,      `/game-3ds/game-style-1,3,w,u/time-day/card${path}`,       SMM3DS_ONLY,  DAY_ONLY,  NOT_SM3DW,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&3&W&U Time=day)`,        `/game-2/game-style-1,3,w,u/time-day/card${path}`,         SMM2_ONLY,    DAY_ONLY,  NOT_SM3DW,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&3DS GameStyle=1&3&W&U Time=day)`,    `/game-1,3ds/game-style-1,3,w,u/time-day/card${path}`,     SMM1_AND_3DS, DAY_ONLY,  NOT_SM3DW,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&3&W&U Time=day)`,      `/game-1,2/game-style-1,3,w,u/time-day/card${path}`,       SMM1_AND_2,   DAY_ONLY,  NOT_SM3DW,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&3&W&U Time=day)`,    `/game-3ds,2/game-style-1,3,w,u/time-day/card${path}`,     SMM3DS_AND_2, DAY_ONLY,  NOT_SM3DW,                CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&3&W&U Time=day)`,     `/game-all/game-style-1,3,w,u/time-day/table${path}`,      ALL_GAMES,    DAY_ONLY,  NOT_SM3DW,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1 GameStyle=1&3&W&U Time=day)`,       `/game-1/game-style-1,3,w,u/time-day/table${path}`,        SMM1_ONLY,    DAY_ONLY,  NOT_SM3DW,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS GameStyle=1&3&W&U Time=day)`,     `/game-3ds/game-style-1,3,w,u/time-day/table${path}`,      SMM3DS_ONLY,  DAY_ONLY,  NOT_SM3DW,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&3&W&U Time=day)`,       `/game-2/game-style-1,3,w,u/time-day/table${path}`,        SMM2_ONLY,    DAY_ONLY,  NOT_SM3DW,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&3DS GameStyle=1&3&W&U Time=day)`,   `/game-1,3ds/game-style-1,3,w,u/time-day/table${path}`,    SMM1_AND_3DS, DAY_ONLY,  NOT_SM3DW,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&3&W&U Time=day)`,     `/game-1,2/game-style-1,3,w,u/time-day/table${path}`,      SMM1_AND_2,   DAY_ONLY,  NOT_SM3DW,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&3&W&U Time=day)`,   `/game-3ds,2/game-style-1,3,w,u/time-day/table${path}`,    SMM3DS_AND_2, DAY_ONLY,  NOT_SM3DW,                TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + smw + nsmbu) --------------------
                //region -------------------- Game style (smb3 + smw + nsmbu + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3&W&U&3DW Time=day)`,    `/game-all/game-style-3,w,u,3dw/time-day/list${path}`,     ALL_GAMES,    DAY_ONLY,  NOT_SMB,                  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3&W&U&3DW Time=day)`,      `/game-2/game-style-3,w,u,3dw/time-day/list${path}`,       SMM2_ONLY,    DAY_ONLY,  NOT_SMB,                  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3&W&U&3DW Time=day)`,    `/game-1,2/game-style-3,w,u,3dw/time-day/list${path}`,     SMM1_AND_2,   DAY_ONLY,  NOT_SMB,                  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3&W&U&3DW Time=day)`,  `/game-3ds,2/game-style-3,w,u,3dw/time-day/list${path}`,   SMM3DS_AND_2, DAY_ONLY,  NOT_SMB,                  LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3&W&U&3DW Time=day)`,    `/game-all/game-style-3,w,u,3dw/time-day/card${path}`,     ALL_GAMES,    DAY_ONLY,  NOT_SMB,                  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3&W&U&3DW Time=day)`,      `/game-2/game-style-3,w,u,3dw/time-day/card${path}`,       SMM2_ONLY,    DAY_ONLY,  NOT_SMB,                  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3&W&U&3DW Time=day)`,    `/game-1,2/game-style-3,w,u,3dw/time-day/card${path}`,     SMM1_AND_2,   DAY_ONLY,  NOT_SMB,                  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3&W&U&3DW Time=day)`,  `/game-3ds,2/game-style-3,w,u,3dw/time-day/card${path}`,   SMM3DS_AND_2, DAY_ONLY,  NOT_SMB,                  CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3&W&U&3DW Time=day)`,   `/game-all/game-style-3,w,u,3dw/time-day/table${path}`,    ALL_GAMES,    DAY_ONLY,  NOT_SMB,                  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3&W&U&3DW Time=day)`,     `/game-2/game-style-3,w,u,3dw/time-day/table${path}`,      SMM2_ONLY,    DAY_ONLY,  NOT_SMB,                  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3&W&U&3DW Time=day)`,   `/game-1,2/game-style-3,w,u,3dw/time-day/table${path}`,    SMM1_AND_2,   DAY_ONLY,  NOT_SMB,                  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3&W&U&3DW Time=day)`, `/game-3ds,2/game-style-3,w,u,3dw/time-day/table${path}`,  SMM3DS_AND_2, DAY_ONLY,  NOT_SMB,                  TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + smw + nsmbu + sm3dw) --------------------
                //region -------------------- Game style (smb + smw + nsmbu + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&W&U&3DW Time=day)`,    `/game-all/game-style-1,w,u,3dw/time-day/list${path}`,     ALL_GAMES,    DAY_ONLY,  NOT_SMB3,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&W&U&3DW Time=day)`,      `/game-2/game-style-1,w,u,3dw/time-day/list${path}`,       SMM2_ONLY,    DAY_ONLY,  NOT_SMB3,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&W&U&3DW Time=day)`,    `/game-1,2/game-style-1,w,u,3dw/time-day/list${path}`,     SMM1_AND_2,   DAY_ONLY,  NOT_SMB3,                 LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&W&U&3DW Time=day)`,  `/game-3ds,2/game-style-1,w,u,3dw/time-day/list${path}`,   SMM3DS_AND_2, DAY_ONLY,  NOT_SMB3,                 LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&W&U&3DW Time=day)`,    `/game-all/game-style-1,w,u,3dw/time-day/card${path}`,     ALL_GAMES,    DAY_ONLY,  NOT_SMB3,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&W&U&3DW Time=day)`,      `/game-2/game-style-1,w,u,3dw/time-day/card${path}`,       SMM2_ONLY,    DAY_ONLY,  NOT_SMB3,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&W&U&3DW Time=day)`,    `/game-1,2/game-style-1,w,u,3dw/time-day/card${path}`,     SMM1_AND_2,   DAY_ONLY,  NOT_SMB3,                 CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&W&U&3DW Time=day)`,  `/game-3ds,2/game-style-1,w,u,3dw/time-day/card${path}`,   SMM3DS_AND_2, DAY_ONLY,  NOT_SMB3,                 CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&W&U&3DW Time=day)`,   `/game-all/game-style-1,w,u,3dw/time-day/table${path}`,    ALL_GAMES,    DAY_ONLY,  NOT_SMB3,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&W&U&3DW Time=day)`,     `/game-2/game-style-1,w,u,3dw/time-day/table${path}`,      SMM2_ONLY,    DAY_ONLY,  NOT_SMB3,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&W&U&3DW Time=day)`,   `/game-1,2/game-style-1,w,u,3dw/time-day/table${path}`,    SMM1_AND_2,   DAY_ONLY,  NOT_SMB3,                 TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&W&U&3DW Time=day)`, `/game-3ds,2/game-style-1,w,u,3dw/time-day/table${path}`,  SMM3DS_AND_2, DAY_ONLY,  NOT_SMB3,                 TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smw + nsmbu + sm3dw) --------------------
                //region -------------------- Game style (smb + smb3 + nsmbu + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&3&U&3DW Time=day)`,    `/game-all/game-style-1,3,u,3dw/time-day/list${path}`,     ALL_GAMES,    DAY_ONLY,  NOT_SMW,                  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&3&U&3DW Time=day)`,      `/game-2/game-style-1,3,u,3dw/time-day/list${path}`,       SMM2_ONLY,    DAY_ONLY,  NOT_SMW,                  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&3&U&3DW Time=day)`,    `/game-1,2/game-style-1,3,u,3dw/time-day/list${path}`,     SMM1_AND_2,   DAY_ONLY,  NOT_SMW,                  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&3&U&3DW Time=day)`,  `/game-3ds,2/game-style-1,3,u,3dw/time-day/list${path}`,   SMM3DS_AND_2, DAY_ONLY,  NOT_SMW,                  LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&3&U&3DW Time=day)`,    `/game-all/game-style-1,3,u,3dw/time-day/card${path}`,     ALL_GAMES,    DAY_ONLY,  NOT_SMW,                  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&3&U&3DW Time=day)`,      `/game-2/game-style-1,3,u,3dw/time-day/card${path}`,       SMM2_ONLY,    DAY_ONLY,  NOT_SMW,                  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&3&U&3DW Time=day)`,    `/game-1,2/game-style-1,3,u,3dw/time-day/card${path}`,     SMM1_AND_2,   DAY_ONLY,  NOT_SMW,                  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&3&U&3DW Time=day)`,  `/game-3ds,2/game-style-1,3,u,3dw/time-day/card${path}`,   SMM3DS_AND_2, DAY_ONLY,  NOT_SMW,                  CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&3&U&3DW Time=day)`,   `/game-all/game-style-1,3,u,3dw/time-day/table${path}`,    ALL_GAMES,    DAY_ONLY,  NOT_SMW,                  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&3&U&3DW Time=day)`,     `/game-2/game-style-1,3,u,3dw/time-day/table${path}`,      SMM2_ONLY,    DAY_ONLY,  NOT_SMW,                  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&3&U&3DW Time=day)`,   `/game-1,2/game-style-1,3,u,3dw/time-day/table${path}`,    SMM1_AND_2,   DAY_ONLY,  NOT_SMW,                  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&3&U&3DW Time=day)`, `/game-3ds,2/game-style-1,3,u,3dw/time-day/table${path}`,  SMM3DS_AND_2, DAY_ONLY,  NOT_SMW,                  TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + nsmbu + sm3dw) --------------------
                //region -------------------- Game style (smb + smb3 + smw + sm3dw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&3&W&3DW Time=day)`,    `/game-all/game-style-1,3,w,3dw/time-day/list${path}`,     ALL_GAMES,    DAY_ONLY,  NOT_NSMBU,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&3&W&3DW Time=day)`,      `/game-2/game-style-1,3,w,3dw/time-day/list${path}`,       SMM2_ONLY,    DAY_ONLY,  NOT_NSMBU,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&3&W&3DW Time=day)`,    `/game-1,2/game-style-1,3,w,3dw/time-day/list${path}`,     SMM1_AND_2,   DAY_ONLY,  NOT_NSMBU,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&3&W&3DW Time=day)`,  `/game-3ds,2/game-style-1,3,w,3dw/time-day/list${path}`,   SMM3DS_AND_2, DAY_ONLY,  NOT_NSMBU,                LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&3&W&3DW Time=day)`,    `/game-all/game-style-1,3,w,3dw/time-day/card${path}`,     ALL_GAMES,    DAY_ONLY,  NOT_NSMBU,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&3&W&3DW Time=day)`,      `/game-2/game-style-1,3,w,3dw/time-day/card${path}`,       SMM2_ONLY,    DAY_ONLY,  NOT_NSMBU,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&3&W&3DW Time=day)`,    `/game-1,2/game-style-1,3,w,3dw/time-day/card${path}`,     SMM1_AND_2,   DAY_ONLY,  NOT_NSMBU,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&3&W&3DW Time=day)`,  `/game-3ds,2/game-style-1,3,w,3dw/time-day/card${path}`,   SMM3DS_AND_2, DAY_ONLY,  NOT_NSMBU,                CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&3&W&3DW Time=day)`,   `/game-all/game-style-1,3,w,3dw/time-day/table${path}`,    ALL_GAMES,    DAY_ONLY,  NOT_NSMBU,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&3&W&3DW Time=day)`,     `/game-2/game-style-1,3,w,3dw/time-day/table${path}`,      SMM2_ONLY,    DAY_ONLY,  NOT_NSMBU,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&3&W&3DW Time=day)`,   `/game-1,2/game-style-1,3,w,3dw/time-day/table${path}`,    SMM1_AND_2,   DAY_ONLY,  NOT_NSMBU,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&3&W&3DW Time=day)`, `/game-3ds,2/game-style-1,3,w,3dw/time-day/table${path}`,  SMM3DS_AND_2, DAY_ONLY,  NOT_NSMBU,                TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + smw + sm3dw) --------------------

                //endregion -------------------- Time (day) --------------------
                //region -------------------- Time (night) --------------------

                //region -------------------- Game style (all) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=all Time=night)`,         `/game-all/game-style-all/time-night/list${path}`,        ALL_GAMES,    NIGHT_ONLY, ALL_GAME_STYLES,         LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=all Time=night)`,           `/game-2/game-style-all/time-night/list${path}`,          SMM2_ONLY,    NIGHT_ONLY, ALL_GAME_STYLES,         LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=all Time=night)`,         `/game-1,2/game-style-all/time-night/list${path}`,        SMM1_AND_2,   NIGHT_ONLY, ALL_GAME_STYLES,         LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=all Time=night)`,       `/game-3ds,2/game-style-all/time-night/list${path}`,      SMM3DS_AND_2, NIGHT_ONLY, ALL_GAME_STYLES,         LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=all Time=night)`,         `/game-all/game-style-all/time-night/card${path}`,        ALL_GAMES,    NIGHT_ONLY, ALL_GAME_STYLES,         CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=all Time=night)`,           `/game-2/game-style-all/time-night/card${path}`,          SMM2_ONLY,    NIGHT_ONLY, ALL_GAME_STYLES,         CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=all Time=night)`,         `/game-1,2/game-style-all/time-night/card${path}`,        SMM1_AND_2,   NIGHT_ONLY, ALL_GAME_STYLES,         CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=all Time=night)`,       `/game-3ds,2/game-style-all/time-night/card${path}`,      SMM3DS_AND_2, NIGHT_ONLY, ALL_GAME_STYLES,         CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=all Time=night)`,        `/game-all/game-style-all/time-night/table${path}`,       ALL_GAMES,    NIGHT_ONLY, ALL_GAME_STYLES,         TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=all Time=night)`,          `/game-2/game-style-all/time-night/table${path}`,         SMM2_ONLY,    NIGHT_ONLY, ALL_GAME_STYLES,         TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=all Time=night)`,        `/game-1,2/game-style-all/time-night/table${path}`,       SMM1_AND_2,   NIGHT_ONLY, ALL_GAME_STYLES,         TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=all Time=night)`,      `/game-3ds,2/game-style-all/time-night/table${path}`,     SMM3DS_AND_2, NIGHT_ONLY, ALL_GAME_STYLES,         TABLE, routeCallback,),

                //endregion -------------------- Game style (all) --------------------

                //region -------------------- Game style (smb) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1 Time=night)`,           `/game-all/game-style-1/time-night/list${path}`,          ALL_GAMES,    NIGHT_ONLY, SMB_ONLY,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1 Time=night)`,             `/game-2/game-style-1/time-night/list${path}`,            SMM2_ONLY,    NIGHT_ONLY, SMB_ONLY,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1 Time=night)`,           `/game-1,2/game-style-1/time-night/list${path}`,          SMM1_AND_2,   NIGHT_ONLY, SMB_ONLY,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1 Time=night)`,         `/game-3ds,2/game-style-1/time-night/list${path}`,        SMM3DS_AND_2, NIGHT_ONLY, SMB_ONLY,                LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1 Time=night)`,           `/game-all/game-style-1/time-night/card${path}`,          ALL_GAMES,    NIGHT_ONLY, SMB_ONLY,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1 Time=night)`,             `/game-2/game-style-1/time-night/card${path}`,            SMM2_ONLY,    NIGHT_ONLY, SMB_ONLY,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1 Time=night)`,           `/game-1,2/game-style-1/time-night/card${path}`,          SMM1_AND_2,   NIGHT_ONLY, SMB_ONLY,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1 Time=night)`,         `/game-3ds,2/game-style-1/time-night/card${path}`,        SMM3DS_AND_2, NIGHT_ONLY, SMB_ONLY,                CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1 Time=night)`,          `/game-all/game-style-1/time-night/table${path}`,         ALL_GAMES,    NIGHT_ONLY, SMB_ONLY,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1 Time=night)`,            `/game-2/game-style-1/time-night/table${path}`,           SMM2_ONLY,    NIGHT_ONLY, SMB_ONLY,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1 Time=night)`,          `/game-1,2/game-style-1/time-night/table${path}`,         SMM1_AND_2,   NIGHT_ONLY, SMB_ONLY,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1 Time=night)`,        `/game-3ds,2/game-style-1/time-night/table${path}`,       SMM3DS_AND_2, NIGHT_ONLY, SMB_ONLY,                TABLE, routeCallback,),

                //endregion -------------------- Game style (smb) --------------------
                //region -------------------- Game style (smb3) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3 Time=night)`,           `/game-all/game-style-3/time-night/list${path}`,          ALL_GAMES,    NIGHT_ONLY, SMB3_ONLY,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3 Time=night)`,             `/game-2/game-style-3/time-night/list${path}`,            SMM2_ONLY,    NIGHT_ONLY, SMB3_ONLY,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3 Time=night)`,           `/game-1,2/game-style-3/time-night/list${path}`,          SMM1_AND_2,   NIGHT_ONLY, SMB3_ONLY,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3 Time=night)`,         `/game-3ds,2/game-style-3/time-night/list${path}`,        SMM3DS_AND_2, NIGHT_ONLY, SMB3_ONLY,               LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3 Time=night)`,           `/game-all/game-style-3/time-night/card${path}`,          ALL_GAMES,    NIGHT_ONLY, SMB3_ONLY,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3 Time=night)`,             `/game-2/game-style-3/time-night/card${path}`,            SMM2_ONLY,    NIGHT_ONLY, SMB3_ONLY,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3 Time=night)`,           `/game-1,2/game-style-3/time-night/card${path}`,          SMM1_AND_2,   NIGHT_ONLY, SMB3_ONLY,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3 Time=night)`,         `/game-3ds,2/game-style-3/time-night/card${path}`,        SMM3DS_AND_2, NIGHT_ONLY, SMB3_ONLY,               CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3 Time=night)`,          `/game-all/game-style-3/time-night/table${path}`,         ALL_GAMES,    NIGHT_ONLY, SMB3_ONLY,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3 Time=night)`,            `/game-2/game-style-3/time-night/table${path}`,           SMM2_ONLY,    NIGHT_ONLY, SMB3_ONLY,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3 Time=night)`,          `/game-1,2/game-style-3/time-night/table${path}`,         SMM1_AND_2,   NIGHT_ONLY, SMB3_ONLY,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3 Time=night)`,        `/game-3ds,2/game-style-3/time-night/table${path}`,       SMM3DS_AND_2, NIGHT_ONLY, SMB3_ONLY,               TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3) --------------------
                //region -------------------- Game style (smw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=W Time=night)`,           `/game-all/game-style-w/time-night/list${path}`,          ALL_GAMES,    NIGHT_ONLY, SMW_ONLY,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=W Time=night)`,             `/game-2/game-style-w/time-night/list${path}`,            SMM2_ONLY,    NIGHT_ONLY, SMW_ONLY,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=W Time=night)`,           `/game-1,2/game-style-w/time-night/list${path}`,          SMM1_AND_2,   NIGHT_ONLY, SMW_ONLY,                LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=W Time=night)`,         `/game-3ds,2/game-style-w/time-night/list${path}`,        SMM3DS_AND_2, NIGHT_ONLY, SMW_ONLY,                LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=W Time=night)`,           `/game-all/game-style-w/time-night/card${path}`,          ALL_GAMES,    NIGHT_ONLY, SMW_ONLY,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=W Time=night)`,             `/game-2/game-style-w/time-night/card${path}`,            SMM2_ONLY,    NIGHT_ONLY, SMW_ONLY,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=W Time=night)`,           `/game-1,2/game-style-w/time-night/card${path}`,          SMM1_AND_2,   NIGHT_ONLY, SMW_ONLY,                CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=W Time=night)`,         `/game-3ds,2/game-style-w/time-night/card${path}`,        SMM3DS_AND_2, NIGHT_ONLY, SMW_ONLY,                CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=W Time=night)`,          `/game-all/game-style-w/time-night/table${path}`,         ALL_GAMES,    NIGHT_ONLY, SMW_ONLY,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=W Time=night)`,            `/game-2/game-style-w/time-night/table${path}`,           SMM2_ONLY,    NIGHT_ONLY, SMW_ONLY,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=W Time=night)`,          `/game-1,2/game-style-w/time-night/table${path}`,         SMM1_AND_2,   NIGHT_ONLY, SMW_ONLY,                TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=W Time=night)`,        `/game-3ds,2/game-style-w/time-night/table${path}`,       SMM3DS_AND_2, NIGHT_ONLY, SMW_ONLY,                TABLE, routeCallback,),

                //endregion -------------------- Game style (smw) --------------------
                //region -------------------- Game style (nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=U Time=night)`,           `/game-all/game-style-u/time-night/list${path}`,          ALL_GAMES,    NIGHT_ONLY, NSMBU_ONLY,              LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=U Time=night)`,             `/game-2/game-style-u/time-night/list${path}`,            SMM2_ONLY,    NIGHT_ONLY, NSMBU_ONLY,              LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=U Time=night)`,           `/game-1,2/game-style-u/time-night/list${path}`,          SMM1_AND_2,   NIGHT_ONLY, NSMBU_ONLY,              LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=U Time=night)`,         `/game-3ds,2/game-style-u/time-night/list${path}`,        SMM3DS_AND_2, NIGHT_ONLY, NSMBU_ONLY,              LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=U Time=night)`,           `/game-all/game-style-u/time-night/card${path}`,          ALL_GAMES,    NIGHT_ONLY, NSMBU_ONLY,              CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=U Time=night)`,             `/game-2/game-style-u/time-night/card${path}`,            SMM2_ONLY,    NIGHT_ONLY, NSMBU_ONLY,              CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=U Time=night)`,           `/game-1,2/game-style-u/time-night/card${path}`,          SMM1_AND_2,   NIGHT_ONLY, NSMBU_ONLY,              CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=U Time=night)`,         `/game-3ds,2/game-style-u/time-night/card${path}`,        SMM3DS_AND_2, NIGHT_ONLY, NSMBU_ONLY,              CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=U Time=night)`,          `/game-all/game-style-u/time-night/table${path}`,         ALL_GAMES,    NIGHT_ONLY, NSMBU_ONLY,              TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=U Time=night)`,            `/game-2/game-style-u/time-night/table${path}`,           SMM2_ONLY,    NIGHT_ONLY, NSMBU_ONLY,              TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=U Time=night)`,          `/game-1,2/game-style-u/time-night/table${path}`,         SMM1_AND_2,   NIGHT_ONLY, NSMBU_ONLY,              TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=U Time=night)`,        `/game-3ds,2/game-style-u/time-night/table${path}`,       SMM3DS_AND_2, NIGHT_ONLY, NSMBU_ONLY,              TABLE, routeCallback,),

                //endregion -------------------- Game style (nsmbu) --------------------

                //region -------------------- Game style (smb + smb3) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&3 Time=night)`,         `/game-all/game-style-1,3/time-night/list${path}`,        ALL_GAMES,    NIGHT_ONLY, SMB_AND_SMB3,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&3 Time=night)`,           `/game-2/game-style-1,3/time-night/list${path}`,          SMM2_ONLY,    NIGHT_ONLY, SMB_AND_SMB3,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&3 Time=night)`,         `/game-1,2/game-style-1,3/time-night/list${path}`,        SMM1_AND_2,   NIGHT_ONLY, SMB_AND_SMB3,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&3 Time=night)`,       `/game-3ds,2/game-style-1,3/time-night/list${path}`,      SMM3DS_AND_2, NIGHT_ONLY, SMB_AND_SMB3,            LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&3 Time=night)`,         `/game-all/game-style-1,3/time-night/card${path}`,        ALL_GAMES,    NIGHT_ONLY, SMB_AND_SMB3,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&3 Time=night)`,           `/game-2/game-style-1,3/time-night/card${path}`,          SMM2_ONLY,    NIGHT_ONLY, SMB_AND_SMB3,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&3 Time=night)`,         `/game-1,2/game-style-1,3/time-night/card${path}`,        SMM1_AND_2,   NIGHT_ONLY, SMB_AND_SMB3,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&3 Time=night)`,       `/game-3ds,2/game-style-1,3/time-night/card${path}`,      SMM3DS_AND_2, NIGHT_ONLY, SMB_AND_SMB3,            CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&3 Time=night)`,        `/game-all/game-style-1,3/time-night/table${path}`,       ALL_GAMES,    NIGHT_ONLY, SMB_AND_SMB3,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&3 Time=night)`,          `/game-2/game-style-1,3/time-night/table${path}`,         SMM2_ONLY,    NIGHT_ONLY, SMB_AND_SMB3,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&3 Time=night)`,        `/game-1,2/game-style-1,3/time-night/table${path}`,       SMM1_AND_2,   NIGHT_ONLY, SMB_AND_SMB3,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&3 Time=night)`,      `/game-3ds,2/game-style-1,3/time-night/table${path}`,     SMM3DS_AND_2, NIGHT_ONLY, SMB_AND_SMB3,            TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3) --------------------
                //region -------------------- Game style (smb + smw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&W Time=night)`,         `/game-all/game-style-1,w/time-night/list${path}`,        ALL_GAMES,    NIGHT_ONLY, SMB_AND_SMW,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&W Time=night)`,           `/game-2/game-style-1,w/time-night/list${path}`,          SMM2_ONLY,    NIGHT_ONLY, SMB_AND_SMW,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&W Time=night)`,         `/game-1,2/game-style-1,w/time-night/list${path}`,        SMM1_AND_2,   NIGHT_ONLY, SMB_AND_SMW,             LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&W Time=night)`,       `/game-3ds,2/game-style-1,w/time-night/list${path}`,      SMM3DS_AND_2, NIGHT_ONLY, SMB_AND_SMW,             LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&W Time=night)`,         `/game-all/game-style-1,w/time-night/card${path}`,        ALL_GAMES,    NIGHT_ONLY, SMB_AND_SMW,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&W Time=night)`,           `/game-2/game-style-1,w/time-night/card${path}`,          SMM2_ONLY,    NIGHT_ONLY, SMB_AND_SMW,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&W Time=night)`,         `/game-1,2/game-style-1,w/time-night/card${path}`,        SMM1_AND_2,   NIGHT_ONLY, SMB_AND_SMW,             CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&W Time=night)`,       `/game-3ds,2/game-style-1,w/time-night/card${path}`,      SMM3DS_AND_2, NIGHT_ONLY, SMB_AND_SMW,             CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&W Time=night)`,        `/game-all/game-style-1,w/time-night/table${path}`,       ALL_GAMES,    NIGHT_ONLY, SMB_AND_SMW,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&W Time=night)`,          `/game-2/game-style-1,w/time-night/table${path}`,         SMM2_ONLY,    NIGHT_ONLY, SMB_AND_SMW,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&W Time=night)`,        `/game-1,2/game-style-1,w/time-night/table${path}`,       SMM1_AND_2,   NIGHT_ONLY, SMB_AND_SMW,             TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&W Time=night)`,      `/game-3ds,2/game-style-1,w/time-night/table${path}`,     SMM3DS_AND_2, NIGHT_ONLY, SMB_AND_SMW,             TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smw) --------------------
                //region -------------------- Game style (smb + nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&U Time=night)`,         `/game-all/game-style-1,u/time-night/list${path}`,        ALL_GAMES,    NIGHT_ONLY, SMB_AND_NSMBU,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&U Time=night)`,           `/game-2/game-style-1,u/time-night/list${path}`,          SMM2_ONLY,    NIGHT_ONLY, SMB_AND_NSMBU,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&U Time=night)`,         `/game-1,2/game-style-1,u/time-night/list${path}`,        SMM1_AND_2,   NIGHT_ONLY, SMB_AND_NSMBU,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&U Time=night)`,       `/game-3ds,2/game-style-1,u/time-night/list${path}`,      SMM3DS_AND_2, NIGHT_ONLY, SMB_AND_NSMBU,           LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&U Time=night)`,         `/game-all/game-style-1,u/time-night/card${path}`,        ALL_GAMES,    NIGHT_ONLY, SMB_AND_NSMBU,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&U Time=night)`,           `/game-2/game-style-1,u/time-night/card${path}`,          SMM2_ONLY,    NIGHT_ONLY, SMB_AND_NSMBU,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&U Time=night)`,         `/game-1,2/game-style-1,u/time-night/card${path}`,        SMM1_AND_2,   NIGHT_ONLY, SMB_AND_NSMBU,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&U Time=night)`,       `/game-3ds,2/game-style-1,u/time-night/card${path}`,      SMM3DS_AND_2, NIGHT_ONLY, SMB_AND_NSMBU,           CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&U Time=night)`,        `/game-all/game-style-1,u/time-night/table${path}`,       ALL_GAMES,    NIGHT_ONLY, SMB_AND_NSMBU,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&U Time=night)`,          `/game-2/game-style-1,u/time-night/table${path}`,         SMM2_ONLY,    NIGHT_ONLY, SMB_AND_NSMBU,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&U Time=night)`,        `/game-1,2/game-style-1,u/time-night/table${path}`,       SMM1_AND_2,   NIGHT_ONLY, SMB_AND_NSMBU,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&U Time=night)`,      `/game-3ds,2/game-style-1,u/time-night/table${path}`,     SMM3DS_AND_2, NIGHT_ONLY, SMB_AND_NSMBU,           TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + nsmbu) --------------------
                //region -------------------- Game style (smb3 + smw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3&W Time=night)`,         `/game-all/game-style-3,w/time-night/list${path}`,        ALL_GAMES,    NIGHT_ONLY, SMB3_AND_SMW,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3&W Time=night)`,           `/game-2/game-style-3,w/time-night/list${path}`,          SMM2_ONLY,    NIGHT_ONLY, SMB3_AND_SMW,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3&W Time=night)`,         `/game-1,2/game-style-3,w/time-night/list${path}`,        SMM1_AND_2,   NIGHT_ONLY, SMB3_AND_SMW,            LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3&W Time=night)`,       `/game-3ds,2/game-style-3,w/time-night/list${path}`,      SMM3DS_AND_2, NIGHT_ONLY, SMB3_AND_SMW,            LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3&W Time=night)`,         `/game-all/game-style-3,w/time-night/card${path}`,        ALL_GAMES,    NIGHT_ONLY, SMB3_AND_SMW,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3&W Time=night)`,           `/game-2/game-style-3,w/time-night/card${path}`,          SMM2_ONLY,    NIGHT_ONLY, SMB3_AND_SMW,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3&W Time=night)`,         `/game-1,2/game-style-3,w/time-night/card${path}`,        SMM1_AND_2,   NIGHT_ONLY, SMB3_AND_SMW,            CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3&W Time=night)`,       `/game-3ds,2/game-style-3,w/time-night/card${path}`,      SMM3DS_AND_2, NIGHT_ONLY, SMB3_AND_SMW,            CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3&W Time=night)`,        `/game-all/game-style-3,w/time-night/table${path}`,       ALL_GAMES,    NIGHT_ONLY, SMB3_AND_SMW,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3&W Time=night)`,          `/game-2/game-style-3,w/time-night/table${path}`,         SMM2_ONLY,    NIGHT_ONLY, SMB3_AND_SMW,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3&W Time=night)`,        `/game-1,2/game-style-3,w/time-night/table${path}`,       SMM1_AND_2,   NIGHT_ONLY, SMB3_AND_SMW,            TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3&W Time=night)`,      `/game-3ds,2/game-style-3,w/time-night/table${path}`,     SMM3DS_AND_2, NIGHT_ONLY, SMB3_AND_SMW,            TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + smw) --------------------
                //region -------------------- Game style (smb3 + nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3&U Time=night)`,         `/game-all/game-style-3,u/time-night/list${path}`,        ALL_GAMES,    NIGHT_ONLY, SMB3_AND_NSMBU,          LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3&U Time=night)`,           `/game-2/game-style-3,u/time-night/list${path}`,          SMM2_ONLY,    NIGHT_ONLY, SMB3_AND_NSMBU,          LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3&U Time=night)`,         `/game-3,2/game-style-3,u/time-night/list${path}`,        SMM1_AND_2,   NIGHT_ONLY, SMB3_AND_NSMBU,          LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3&U Time=night)`,       `/game-3ds,2/game-style-3,u/time-night/list${path}`,      SMM3DS_AND_2, NIGHT_ONLY, SMB3_AND_NSMBU,          LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3&U Time=night)`,         `/game-all/game-style-3,u/time-night/card${path}`,        ALL_GAMES,    NIGHT_ONLY, SMB3_AND_NSMBU,          CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3&U Time=night)`,           `/game-2/game-style-3,u/time-night/card${path}`,          SMM2_ONLY,    NIGHT_ONLY, SMB3_AND_NSMBU,          CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3&U Time=night)`,         `/game-3,2/game-style-3,u/time-night/card${path}`,        SMM1_AND_2,   NIGHT_ONLY, SMB3_AND_NSMBU,          CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3&U Time=night)`,       `/game-3ds,2/game-style-3,u/time-night/card${path}`,      SMM3DS_AND_2, NIGHT_ONLY, SMB3_AND_NSMBU,          CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3&U Time=night)`,        `/game-all/game-style-3,u/time-night/table${path}`,       ALL_GAMES,    NIGHT_ONLY, SMB3_AND_NSMBU,          TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3&U Time=night)`,          `/game-2/game-style-3,u/time-night/table${path}`,         SMM2_ONLY,    NIGHT_ONLY, SMB3_AND_NSMBU,          TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3&U Time=night)`,        `/game-3,2/game-style-3,u/time-night/table${path}`,       SMM1_AND_2,   NIGHT_ONLY, SMB3_AND_NSMBU,          TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3&U Time=night)`,      `/game-3ds,2/game-style-3,u/time-night/table${path}`,     SMM3DS_AND_2, NIGHT_ONLY, SMB3_AND_NSMBU,          TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + nsmbu) --------------------
                //region -------------------- Game style (smw + nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=W&U Time=night)`,         `/game-all/game-style-w,u/time-night/list${path}`,        ALL_GAMES,    NIGHT_ONLY, SMW_AND_NSMBU,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=W&U Time=night)`,           `/game-2/game-style-w,u/time-night/list${path}`,          SMM2_ONLY,    NIGHT_ONLY, SMW_AND_NSMBU,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=W&U Time=night)`,         `/game-1,2/game-style-w,u/time-night/list${path}`,        SMM1_AND_2,   NIGHT_ONLY, SMW_AND_NSMBU,           LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=W&U Time=night)`,       `/game-3ds,2/game-style-w,u/time-night/list${path}`,      SMM3DS_AND_2, NIGHT_ONLY, SMW_AND_NSMBU,           LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=W&U Time=night)`,         `/game-all/game-style-w,u/time-night/card${path}`,        ALL_GAMES,    NIGHT_ONLY, SMW_AND_NSMBU,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=W&U Time=night)`,           `/game-2/game-style-w,u/time-night/card${path}`,          SMM2_ONLY,    NIGHT_ONLY, SMW_AND_NSMBU,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=W&U Time=night)`,         `/game-1,2/game-style-w,u/time-night/card${path}`,        SMM1_AND_2,   NIGHT_ONLY, SMW_AND_NSMBU,           CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=W&U Time=night)`,       `/game-3ds,2/game-style-w,u/time-night/card${path}`,      SMM3DS_AND_2, NIGHT_ONLY, SMW_AND_NSMBU,           CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=W&U Time=night)`,        `/game-all/game-style-w,u/time-night/table${path}`,       ALL_GAMES,    NIGHT_ONLY, SMW_AND_NSMBU,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=W&U Time=night)`,          `/game-2/game-style-w,u/time-night/table${path}`,         SMM2_ONLY,    NIGHT_ONLY, SMW_AND_NSMBU,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=W&U Time=night)`,        `/game-1,2/game-style-w,u/time-night/table${path}`,       SMM1_AND_2,   NIGHT_ONLY, SMW_AND_NSMBU,           TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=W&U Time=night)`,      `/game-3ds,2/game-style-w,u/time-night/table${path}`,     SMM3DS_AND_2, NIGHT_ONLY, SMW_AND_NSMBU,           TABLE, routeCallback,),

                //endregion -------------------- Game style (smw + nsmbu) --------------------

                //region -------------------- Game style (smb + smb3 + smw) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&3&W Time=night)`,       `/game-all/game-style-1,3,w/time-night/list${path}`,      ALL_GAMES,    NIGHT_ONLY, SMB_AND_SMB3_AND_SMW,    LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&3&W Time=night)`,         `/game-2/game-style-1,3,w/time-night/list${path}`,        SMM2_ONLY,    NIGHT_ONLY, SMB_AND_SMB3_AND_SMW,    LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&3&W Time=night)`,       `/game-1,2/game-style-1,3,w/time-night/list${path}`,      SMM1_AND_2,   NIGHT_ONLY, SMB_AND_SMB3_AND_SMW,    LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&3&W Time=night)`,     `/game-3ds,2/game-style-1,3,w/time-night/list${path}`,    SMM3DS_AND_2, NIGHT_ONLY, SMB_AND_SMB3_AND_SMW,    LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&3&W Time=night)`,       `/game-all/game-style-1,3,w/time-night/card${path}`,      ALL_GAMES,    NIGHT_ONLY, SMB_AND_SMB3_AND_SMW,    CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&3&W Time=night)`,         `/game-2/game-style-1,3,w/time-night/card${path}`,        SMM2_ONLY,    NIGHT_ONLY, SMB_AND_SMB3_AND_SMW,    CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&3&W Time=night)`,       `/game-1,2/game-style-1,3,w/time-night/card${path}`,      SMM1_AND_2,   NIGHT_ONLY, SMB_AND_SMB3_AND_SMW,    CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&3&W Time=night)`,     `/game-3ds,2/game-style-1,3,w/time-night/card${path}`,    SMM3DS_AND_2, NIGHT_ONLY, SMB_AND_SMB3_AND_SMW,    CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&3&W Time=night)`,      `/game-all/game-style-1,3,w/time-night/table${path}`,     ALL_GAMES,    NIGHT_ONLY, SMB_AND_SMB3_AND_SMW,    TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&3&W Time=night)`,        `/game-2/game-style-1,3,w/time-night/table${path}`,       SMM2_ONLY,    NIGHT_ONLY, SMB_AND_SMB3_AND_SMW,    TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&3&W Time=night)`,      `/game-1,2/game-style-1,3,w/time-night/table${path}`,     SMM1_AND_2,   NIGHT_ONLY, SMB_AND_SMB3_AND_SMW,    TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&3&W Time=night)`,    `/game-3ds,2/game-style-1,3,w/time-night/table${path}`,   SMM3DS_AND_2, NIGHT_ONLY, SMB_AND_SMB3_AND_SMW,    TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + smw) --------------------
                //region -------------------- Game style (smb + smb3 + nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&3&U Time=night)`,       `/game-all/game-style-1,3,u/time-night/list${path}`,      ALL_GAMES,    NIGHT_ONLY, SMB_AND_SMB3_AND_NSMBU,  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&3&U Time=night)`,         `/game-2/game-style-1,3,u/time-night/list${path}`,        SMM2_ONLY,    NIGHT_ONLY, SMB_AND_SMB3_AND_NSMBU,  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&3&U Time=night)`,       `/game-1,2/game-style-1,3,u/time-night/list${path}`,      SMM1_AND_2,   NIGHT_ONLY, SMB_AND_SMB3_AND_NSMBU,  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&3&U Time=night)`,     `/game-3ds,2/game-style-1,3,u/time-night/list${path}`,    SMM3DS_AND_2, NIGHT_ONLY, SMB_AND_SMB3_AND_NSMBU,  LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&3&U Time=night)`,       `/game-all/game-style-1,3,u/time-night/card${path}`,      ALL_GAMES,    NIGHT_ONLY, SMB_AND_SMB3_AND_NSMBU,  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&3&U Time=night)`,         `/game-2/game-style-1,3,u/time-night/card${path}`,        SMM2_ONLY,    NIGHT_ONLY, SMB_AND_SMB3_AND_NSMBU,  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&3&U Time=night)`,       `/game-1,2/game-style-1,3,u/time-night/card${path}`,      SMM1_AND_2,   NIGHT_ONLY, SMB_AND_SMB3_AND_NSMBU,  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&3&U Time=night)`,     `/game-3ds,2/game-style-1,3,u/time-night/card${path}`,    SMM3DS_AND_2, NIGHT_ONLY, SMB_AND_SMB3_AND_NSMBU,  CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&3&U Time=night)`,      `/game-all/game-style-1,3,u/time-night/table${path}`,     ALL_GAMES,    NIGHT_ONLY, SMB_AND_SMB3_AND_NSMBU,  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&3&U Time=night)`,        `/game-2/game-style-1,3,u/time-night/table${path}`,       SMM2_ONLY,    NIGHT_ONLY, SMB_AND_SMB3_AND_NSMBU,  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&3&U Time=night)`,      `/game-1,2/game-style-1,3,u/time-night/table${path}`,     SMM1_AND_2,   NIGHT_ONLY, SMB_AND_SMB3_AND_NSMBU,  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&3&U Time=night)`,    `/game-3ds,2/game-style-1,3,u/time-night/table${path}`,   SMM3DS_AND_2, NIGHT_ONLY, SMB_AND_SMB3_AND_NSMBU,  TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + nsmbu) --------------------
                //region -------------------- Game style (smb + smw + nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&W&U Time=night)`,       `/game-all/game-style-1,w,u/time-night/list${path}`,      ALL_GAMES,    NIGHT_ONLY, SMB_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&W&U Time=night)`,         `/game-2/game-style-1,w,u/time-night/list${path}`,        SMM2_ONLY,    NIGHT_ONLY, SMB_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&W&U Time=night)`,       `/game-1,2/game-style-1,w,u/time-night/list${path}`,      SMM1_AND_2,   NIGHT_ONLY, SMB_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&W&U Time=night)`,     `/game-3ds,2/game-style-1,w,u/time-night/list${path}`,    SMM3DS_AND_2, NIGHT_ONLY, SMB_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&W&U Time=night)`,       `/game-all/game-style-1,w,u/time-night/card${path}`,      ALL_GAMES,    NIGHT_ONLY, SMB_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&W&U Time=night)`,         `/game-2/game-style-1,w,u/time-night/card${path}`,        SMM2_ONLY,    NIGHT_ONLY, SMB_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&W&U Time=night)`,       `/game-1,2/game-style-1,w,u/time-night/card${path}`,      SMM1_AND_2,   NIGHT_ONLY, SMB_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&W&U Time=night)`,     `/game-3ds,2/game-style-1,w,u/time-night/card${path}`,    SMM3DS_AND_2, NIGHT_ONLY, SMB_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&W&U Time=night)`,      `/game-all/game-style-1,w,u/time-night/table${path}`,     ALL_GAMES,    NIGHT_ONLY, SMB_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&W&U Time=night)`,        `/game-2/game-style-1,w,u/time-night/table${path}`,       SMM2_ONLY,    NIGHT_ONLY, SMB_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&W&U Time=night)`,      `/game-1,2/game-style-1,w,u/time-night/table${path}`,     SMM1_AND_2,   NIGHT_ONLY, SMB_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&W&U Time=night)`,    `/game-3ds,2/game-style-1,w,u/time-night/table${path}`,   SMM3DS_AND_2, NIGHT_ONLY, SMB_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smw + nsmbu) --------------------
                //region -------------------- Game style (smb3 + smw + nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=3&W&U Time=night)`,       `/game-all/game-style-3,w,u/time-night/list${path}`,      ALL_GAMES,    NIGHT_ONLY, SMB3_AND_SMW_AND_NSMBU,  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=3&W&U Time=night)`,         `/game-2/game-style-3,w,u/time-night/list${path}`,        SMM2_ONLY,    NIGHT_ONLY, SMB3_AND_SMW_AND_NSMBU,  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=3&W&U Time=night)`,       `/game-1,2/game-style-3,w,u/time-night/list${path}`,      SMM1_AND_2,   NIGHT_ONLY, SMB3_AND_SMW_AND_NSMBU,  LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=3&W&U Time=night)`,     `/game-3ds,2/game-style-3,w,u/time-night/list${path}`,    SMM3DS_AND_2, NIGHT_ONLY, SMB3_AND_SMW_AND_NSMBU,  LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=3&W&U Time=night)`,       `/game-all/game-style-3,w,u/time-night/card${path}`,      ALL_GAMES,    NIGHT_ONLY, SMB3_AND_SMW_AND_NSMBU,  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=3&W&U Time=night)`,         `/game-2/game-style-3,w,u/time-night/card${path}`,        SMM2_ONLY,    NIGHT_ONLY, SMB3_AND_SMW_AND_NSMBU,  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=3&W&U Time=night)`,       `/game-1,2/game-style-3,w,u/time-night/card${path}`,      SMM1_AND_2,   NIGHT_ONLY, SMB3_AND_SMW_AND_NSMBU,  CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=3&W&U Time=night)`,     `/game-3ds,2/game-style-3,w,u/time-night/card${path}`,    SMM3DS_AND_2, NIGHT_ONLY, SMB3_AND_SMW_AND_NSMBU,  CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=3&W&U Time=night)`,      `/game-all/game-style-3,w,u/time-night/table${path}`,     ALL_GAMES,    NIGHT_ONLY, SMB3_AND_SMW_AND_NSMBU,  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=3&W&U Time=night)`,        `/game-2/game-style-3,w,u/time-night/table${path}`,       SMM2_ONLY,    NIGHT_ONLY, SMB3_AND_SMW_AND_NSMBU,  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=3&W&U Time=night)`,      `/game-1,2/game-style-3,w,u/time-night/table${path}`,     SMM1_AND_2,   NIGHT_ONLY, SMB3_AND_SMW_AND_NSMBU,  TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=3&W&U Time=night)`,    `/game-3ds,2/game-style-3,w,u/time-night/table${path}`,   SMM3DS_AND_2, NIGHT_ONLY, SMB3_AND_SMW_AND_NSMBU,  TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + smw + nsmbu) --------------------

                //region -------------------- Game style (smb + smb3 + smw + nsmbu) --------------------

                new SimpleRoute(`${name} (list Game=all GameStyle=1&3&W&U Time=night)`,     `/game-all/game-style-1,3,w,u/time-night/list${path}`,    ALL_GAMES,    NIGHT_ONLY, NOT_SM3DW,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=2 GameStyle=1&3&W&U Time=night)`,       `/game-2/game-style-1,3,w,u/time-night/list${path}`,      SMM2_ONLY,    NIGHT_ONLY, NOT_SM3DW,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=1&2 GameStyle=1&3&W&U Time=night)`,     `/game-1,2/game-style-1,3,w,u/time-night/list${path}`,    SMM1_AND_2,   NIGHT_ONLY, NOT_SM3DW,               LIST,  routeCallback,),
                new SimpleRoute(`${name} (list Game=3DS&2 GameStyle=1&3&W&U Time=night)`,   `/game-3ds,2/game-style-1,3,w,u/time-night/list${path}`,  SMM3DS_AND_2, NIGHT_ONLY, NOT_SM3DW,               LIST,  routeCallback,),

                new SimpleRoute(`${name} (card Game=all GameStyle=1&3&W&U Time=night)`,     `/game-all/game-style-1,3,w,u/time-night/card${path}`,    ALL_GAMES,    NIGHT_ONLY, NOT_SM3DW,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2 GameStyle=1&3&W&U Time=night)`,       `/game-2/game-style-1,3,w,u/time-night/card${path}`,      SMM2_ONLY,    NIGHT_ONLY, NOT_SM3DW,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1&2 GameStyle=1&3&W&U Time=night)`,     `/game-1,2/game-style-1,3,w,u/time-night/card${path}`,    SMM1_AND_2,   NIGHT_ONLY, NOT_SM3DW,               CARD,  routeCallback,),
                new SimpleRoute(`${name} (card Game=3DS&2 GameStyle=1&3&W&U Time=night)`,   `/game-3ds,2/game-style-1,3,w,u/time-night/card${path}`,  SMM3DS_AND_2, NIGHT_ONLY, NOT_SM3DW,               CARD,  routeCallback,),

                new SimpleRoute(`${name} (table Game=all GameStyle=1&3&W&U Time=night)`,    `/game-all/game-style-1,3,w,u/time-night/table${path}`,   ALL_GAMES,    NIGHT_ONLY, NOT_SM3DW,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=2 GameStyle=1&3&W&U Time=night)`,      `/game-2/game-style-1,3,w,u/time-night/table${path}`,     SMM2_ONLY,    NIGHT_ONLY, NOT_SM3DW,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=1&2 GameStyle=1&3&W&U Time=night)`,    `/game-1,2/game-style-1,3,w,u/time-night/table${path}`,   SMM1_AND_2,   NIGHT_ONLY, NOT_SM3DW,               TABLE, routeCallback,),
                new SimpleRoute(`${name} (table Game=3DS&2 GameStyle=1&3&W&U Time=night)`,  `/game-3ds,2/game-style-1,3,w,u/time-night/table${path}`, SMM3DS_AND_2, NIGHT_ONLY, NOT_SM3DW,               TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + smw + nsmbu) --------------------

                //endregion -------------------- Time (night) --------------------
            ]
        }

    }

    /** A representation of an {@link EveryRoutes} instance with only the {@link GameCollection} in its route */
    private static readonly AnyGame_EveryRoutes = class AnyGame_EveryRoutes<const URL_NAME extends string,
        const URL_PATH extends string, >
        extends EveryRoutes<URL_NAME, URL_PATH> {

        constructor(name: URL_NAME, path: URL_PATH, routeCallback: GameRouteCallback,) {
            super(name, path, NO_VIEW_DISPLAY, null, ALL_GAMES_COLLECTION, SMM2, NO_GAME_STYLES, null, NO_TIMES, null, (_, games,) => routeCallback(games,),)
        }


        protected override _createEveryRoutes(): Array<SimpleRoute> {
            const name = this.urlName
            const path = this.urlValue
            const routeCallback = this.routeCallback

            return [
                new SimpleRoute(`${name} (Game=all)`,   `/game-all${path}`,   ALL_GAMES,    null, null, null, routeCallback,),
                new SimpleRoute(`${name} (Game=1)`,     `/game-1${path}`,     SMM1_ONLY,    null, null, null, routeCallback,),
                new SimpleRoute(`${name} (Game=3DS)`,   `/game-3ds${path}`,   SMM3DS_ONLY,  null, null, null, routeCallback,),
                new SimpleRoute(`${name} (Game=2)`,     `/game-2${path}`,     SMM2_ONLY,    null, null, null, routeCallback,),
                new SimpleRoute(`${name} (Game=1&3DS)`, `/game-1,3ds${path}`, SMM1_AND_3DS, null, null, null, routeCallback,),
                new SimpleRoute(`${name} (Game=1&2)`,   `/game-1,2${path}`,   SMM1_AND_2,   null, null, null, routeCallback,),
                new SimpleRoute(`${name} (Game=3DS&2)`, `/game-3ds,2${path}`, SMM3DS_AND_2, null, null, null, routeCallback,),
            ]
        }

        protected override _getPathFromTimes() {
            return EMPTY_STRING
        }

        protected override _getPathFromGameStyles() {
            return EMPTY_STRING
        }

        protected override _getPathFromViewDisplay() {
            return EMPTY_STRING
        }

    }

    /** A representation of an {@link EveryRoutes} instance as any possible {@link ViewDisplays} in its route only in {@link SMM1} */
    private static readonly ListCardTable_Smm1_EveryRoutes = class ListCardTable_Smm1_EveryRoutes<const URL_NAME extends string,
        const URL_PATH extends string, >
        extends EveryRoutes<URL_NAME, URL_PATH> {

        constructor(name: URL_NAME, path: URL_PATH, defaultViewDisplay: ViewDisplays, routeCallback: RouteCallbackWithOnlyViewDisplay,) {
            super(name, path, ALL_VIEW_DISPLAY, defaultViewDisplay, SMM1_GAMES_COLLECTION, SMM1, NO_GAME_STYLES, null, NO_TIMES, null, routeCallback,)
        }


        protected override _createEveryRoutes(): Array<SimpleRoute> {
            const name = this.urlName
            const path = this.urlValue
            const routeCallback = this.routeCallback

            return [
                new SimpleRoute(`${name} (list Game=1)`,  `/game-1/list${path}`,  SMM1_ONLY, null, null, LIST,  routeCallback,),
                new SimpleRoute(`${name} (card Game=1)`,  `/game-1/card${path}`,  SMM1_ONLY, null, null, CARD,  routeCallback,),
                new SimpleRoute(`${name} (table Game=1)`, `/game-1/table${path}`, SMM1_ONLY, null, null, TABLE, routeCallback,),
            ]
        }

        protected override _getPathFromGames() {
            return '/game-1' as const satisfies PossibleGamePath
        }

        protected override _getPathFromTimes() {
            return EMPTY_STRING
        }

        protected override _getPathFromGameStyles() {
            return EMPTY_STRING
        }

    }

    /** A representation of an {@link EveryRoutes} instance as any possible {@link ViewDisplays} in its route only in {@link SMM2} */
    private static readonly ListCardTable_Smm2_EveryRoutes = class ListCardTable_Smm2_EveryRoutes<const URL_NAME extends string,
        const URL_PATH extends string, >
        extends EveryRoutes<URL_NAME, URL_PATH> {

        constructor(name: URL_NAME, path: URL_PATH, defaultViewDisplay: ViewDisplays, routeCallback: RouteCallbackWithOnlyViewDisplay,) {
            super(name, path, ALL_VIEW_DISPLAY, defaultViewDisplay, SMM2_GAMES_COLLECTION, SMM2, NO_GAME_STYLES, null, NO_TIMES, null, routeCallback,)
        }


        protected override _createEveryRoutes(): Array<SimpleRoute> {
            const name = this.urlName
            const path = this.urlValue
            const routeCallback = this.routeCallback

            return [
                new SimpleRoute(`${name} (list Game=2)`,  `/game-2/list${path}`,  SMM2_ONLY, null, null, LIST,  routeCallback,),
                new SimpleRoute(`${name} (card Game=2)`,  `/game-2/card${path}`,  SMM2_ONLY, null, null, CARD,  routeCallback,),
                new SimpleRoute(`${name} (table Game=2)`, `/game-2/table${path}`, SMM2_ONLY, null, null, TABLE, routeCallback,),
            ]
        }

        protected override _getPathFromGames() {
            return `/game-2` as const satisfies PossibleGamePath
        }

        protected override _getPathFromTimes() {
            return EMPTY_STRING
        }

        protected override _getPathFromGameStyles() {
            return EMPTY_STRING
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

    public static readonly EVERY_CHARACTER_NAME = new EveryRoutes.AllGames_EveryRoutes('everyCharacterName', '/every/character-name', CARD, (viewDisplay, games, gameStyles, times,) => <CharacterNameApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>,)

    public static readonly EVERY_GAME_REFERENCE = new EveryRoutes.AnyGame_EveryRoutes('everyGameReference', '/every/game-reference', () => <GameReferenceApp/>,)
    public static readonly EVERY_GAME_STYLE = new EveryRoutes.AllGames_EveryRoutes('everyGameStyle', '/every/game-style', CARD, (viewDisplay, games, gameStyles, times,) => <GameStyleApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>,)

    public static readonly EVERY_ENTITY = new EveryRoutes.AllGames_EveryRoutes('everyEntity', '/every/entity', TABLE, (viewDisplay, games, gameStyles, times,) => <EntityApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>,)
    public static readonly EVERY_ENTITY_CATEGORY = new EveryRoutes.ListCardTable_Smm2_EveryRoutes('everyEntityCategory', '/every/entity-category', CARD, viewDisplay => <EntityCategoryApp viewDisplay={viewDisplay}/>,)
    public static readonly EVERY_GROUP = new EveryRoutes.Straight_EveryRoutes('everyGroup', '/every/entity-group', () => <EntityGroupApp/>)

    public static readonly EVERY_LIMIT = new EveryRoutes.AllGames_EveryRoutes('everyLimit', '/every/limit', TABLE, (viewDisplay, games, gameStyles, times,) => <LimitApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times} type={LimitTypes.ALL}/>,)
    public static readonly EVERY_PLAY_LIMIT = new EveryRoutes.AllGames_EveryRoutes('playLimit', '/play/limit', TABLE, (viewDisplay, games, gameStyles, times,) => <LimitApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times} type={LimitTypes.PLAY}/>,)
    public static readonly EVERY_EDITOR_LIMIT = new EveryRoutes.AllGames_EveryRoutes('editorLimit', '/editor/limit', TABLE, (viewDisplay, games, gameStyles, times,) => <LimitApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times} type={LimitTypes.EDITOR}/>,)

    public static readonly EVERY_THEME = new EveryRoutes.AllGames_EveryRoutes('everyTheme', '/every/theme', CARD, (viewDisplay, games, gameStyles, times,) => <ThemeApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times} type={ThemeTypes.ALL}/>,)
    public static readonly EVERY_COURSE_THEME = new EveryRoutes.AllGames_EveryRoutes('courseTheme', '/course/theme', CARD, (viewDisplay, games, gameStyles, times,) => <ThemeApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times} type={ThemeTypes.COURSE}/>,)
    public static readonly EVERY_WORLD_THEME = new EveryRoutes.AllGames_EveryRoutes('worldTheme', '/world/theme', CARD, (viewDisplay, games, gameStyles, times,) => <ThemeApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times} type={ThemeTypes.WORLD}/>,)

    public static readonly EVERY_SOUND_EFFECT = new EveryRoutes.AllGames_EveryRoutes('everySoundEffect', '/every/sound-effect', TABLE, (viewDisplay, games, gameStyles, times,) => <SoundEffectApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>,)
    public static readonly EVERY_SOUND_EFFECT_CATEGORY = new EveryRoutes.ListCardTable_Smm2_EveryRoutes('everySoundEffectCategory', '/every/sound-effect-category', CARD, viewDisplay => <SoundEffectCategoryApp viewDisplay={viewDisplay}/>)

    public static readonly EVERY_MII_COSTUME = new EveryRoutes.ListCardTable_Smm2_EveryRoutes('everyMiiCostume', '/every/mii-costume', TABLE, viewDisplay => <MiiCostumeApp viewDisplay={viewDisplay}/>,)
    public static readonly EVERY_MII_COSTUME_CATEGORY = new EveryRoutes.ListCardTable_Smm2_EveryRoutes('everyMiiCostumeCategory', '/every/mii-costume-category', CARD, viewDisplay => <MiiCostumeCategoryApp viewDisplay={viewDisplay}/>,)

    public static readonly EVERY_MYSTERY_MUSHROOM = new EveryRoutes.ListCardTable_Smm1_EveryRoutes('everyMysteryMushroom', '/every/mystery-mushroom', CARD, viewDisplay => <MysteryMushroomApp viewDisplay={viewDisplay}/>,)

    public static readonly EVERY_PREDEFINED_MESSAGE = new EveryRoutes.ListCardTable_Smm2_EveryRoutes('everyPredefinedMessage', '/every/predefined-message', LIST, viewDisplay => <PredefinedMessageApp viewDisplay={viewDisplay}/>,)

    public static readonly EVERY_SAMPLE_COURSE = new EveryRoutes.ListCardTable_Smm1_EveryRoutes('everySampleCourse', '/every/sample-course', TABLE, viewDisplay => <SampleCourseApp viewDisplay={viewDisplay}/>,)
    public static readonly EVERY_OFFICIAL_COURSE = new EveryRoutes.AllGames_EveryRoutes('everyOfficialCourse', '/every/official-course', TABLE, (viewDisplay, games, gameStyles, times,) => <OfficialCourseApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>,)

    public static readonly EVERY_MEDAL = new EveryRoutes.ListCardTable_Smm1_EveryRoutes('everyMedal', '/every/medal', CARD, viewDisplay => <MedalApp viewDisplay={viewDisplay}/>,)

    public static readonly EVERY_COURSE_TAG = new EveryRoutes.ListCardTable_Smm2_EveryRoutes('everyCourseTag', '/every/course-tag', CARD, viewDisplay => <CourseTagApp viewDisplay={viewDisplay} type={CourseTagTypes.ALL}/>,)
    public static readonly EVERY_OFFICIAL_COURSE_TAG = new EveryRoutes.ListCardTable_Smm2_EveryRoutes('officialCourseTag', '/official/course-tag', CARD, viewDisplay => <CourseTagApp viewDisplay={viewDisplay} type={CourseTagTypes.OFFICIAL}/>,)
    public static readonly EVERY_UNOFFICIAL_COURSE_TAG = new EveryRoutes.ListCardTable_Smm2_EveryRoutes('unofficialCourseTag', '/unofficial/course-tag', CARD, viewDisplay => <CourseTagApp viewDisplay={viewDisplay} type={CourseTagTypes.UNOFFICIAL}/>,)
    public static readonly EVERY_MAKER_CENTRAL_COURSE_TAG = new EveryRoutes.ListCardTable_Smm2_EveryRoutes('makerCentralCourseTag', '/maker-central/course-tag', CARD, viewDisplay => <CourseTagApp viewDisplay={viewDisplay} type={CourseTagTypes.MAKER_CENTRAL}/>,)

    public static readonly EVERY_INSTRUMENT = new EveryRoutes.AllGames_EveryRoutes('everyInstrument', '/every/instrument', CARD, (viewDisplay, games, gameStyles, times,) => <InstrumentApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>,)

    public static readonly EVERY_EDITOR_VOICE = new EveryRoutes.AllGames_EveryRoutes('everyEditorVoice', '/every/editor-voice', CARD, (viewDisplay, games, gameStyles, times,) => <EditorVoiceApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>,)

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

        public getValueInUrl(url: string,): NullOr<EveryRoutes> {
            return this.values.findFirstOrNull(it => url.endsWith(it.urlValue,),)
        }

        public getRouteFromName(name: PossibleRouteName, language?: Nullable<ProjectLanguages>,): EveryPossibleRoutes {
            for (const value of this.values) {
                const urlName = value.urlName
                if (urlName === name) {
                    const everyRoute = value.everyRoute
                    const routeFoundByName = findFirstOrNullByArray(everyRoute, it => it.name === name,)
                    if (routeFoundByName != null)
                        return value.getPath(language, routeFoundByName.games, routeFoundByName.gameStyles, routeFoundByName.times, routeFoundByName.viewDisplay,)

                    const pathToFind = `${
                        value._getPathFromGames()}${
                        value._getPathFromGameStyles()}${
                        value._getPathFromTimes()}${
                        value._getPathFromViewDisplay()}${
                        value.urlValue}`
                    const routeFoundByPath = findFirstOrNullByArray(everyRoute, it => it.path === pathToFind,)
                    if (routeFoundByPath != null)
                        return value.getPath(language, routeFoundByPath.games, routeFoundByPath.gameStyles, routeFoundByPath.times, routeFoundByPath.viewDisplay,)
                    throw new ReferenceError(`No route is findable by the direct name "${name}".`,)
                }

                const routeFromOnlyViewDisplay = this.#getRouteFromOnlyViewDisplay(value, name, language,)
                if (routeFromOnlyViewDisplay != null)
                    return routeFromOnlyViewDisplay

                if (name.startsWith(`${urlName} `,)) {
                    const pathToFind = `${
                        value._getPathFromGames(GameCompanion.findInName(name,),)}${
                        value._getPathFromGameStyles(GameStyleCompanion.findInName(name,),)}${
                        value._getPathFromTimes(TimeCompanion.findInName(name,),)}${
                        value._getPathFromViewDisplay(ViewDisplayCompanion.findInName(name,),)}${
                        value.urlValue}`
                    const routeFound = findFirstOrNullByArray(value.everyRoute, it => it.path === pathToFind,)
                    if (routeFound != null)
                        return value.getPath(language, routeFound.games, routeFound.gameStyles, routeFound.times, routeFound.viewDisplay,)
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
        #getRouteFromOnlyViewDisplay(value: EveryRoutes, name: PossibleRouteName, language: Nullable<ProjectLanguages>,): NullOr<EveryPossibleRoutes> {
            const viewDisplays = value.viewDisplays
            if (viewDisplays.isEmpty)
                return null

            const urlName = value.urlName
            if (viewDisplays.hasSimpleList)
                if (`${urlName} (list)` === name)
                    return value.getPath(language, null, null, null, LIST,)
            if (viewDisplays.hasCardList)
                if (`${urlName} (card)` === name)
                    return value.getPath(language, null, null, null, CARD,)
            if (viewDisplays.hasCardList)
                if (`${urlName} (table)` === name)
                    return value.getPath(language, null, null, null, TABLE,)
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
    readonly #defaultTimes
    readonly #routeCallback

    #everyRoutes?: Array<SimpleRoute>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(name: URL_NAME, path: URL_PATH,
                        viewDisplays: ViewDisplayCollection, defaultViewDisplay: NullOr<ViewDisplays>,
                        games: GameCollection, defaultGame: NullOr<Games>,
                        gameStyles: GameStyleCollection, defaultGameStyles: NullOrArray<GameStyles>,
                        times: TimeCollection, defaultTimes: NullOrArray<Times>,
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
        this.#defaultTimes = defaultTimes
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

    public get defaultTimes(): NullOrArray<Times> {
        return this.#defaultTimes
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
    protected _getPathFromGames(value: NullableArray<Games> = null,): PossibleGamePath {
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
        if (isEmptyByArray(value,)) {
            const defaultGame = this.defaultGame
            if (defaultGame == null)
                return EMPTY_STRING
            return `/game-${defaultGame.urlValue}`
        }
        return `/game-${GameCompanion.getGroupUrlValue(value,)}`
    }

    /**
     * Get the partial path from a {@link Nullable} {@link Times} {@link ReadonlyArray array}.
     *
     * @param value The {@link Times} to retrieve its {@link Times.urlValue}
     */
    protected _getPathFromTimes(value: NullableArray<Times> = null,): PossibleTimePath {
        if (value == null) {
            const currentTime = TimeCompanion.currentOrNull
            if (currentTime == null) {
                const defaultTimes = this.defaultTimes
                if (defaultTimes == null)
                    return EMPTY_STRING
                return `/time-${TimeCompanion.getGroupUrl(defaultTimes,)}`
            }
            return `/time-${TimeCompanion.getGroupUrl(currentTime,)}`
        }
        if (isEmptyByArray(value,)) {
            const defaultTimes = this.defaultTimes
            if (defaultTimes == null)
                return EMPTY_STRING
            return `/time-${TimeCompanion.getGroupUrl(defaultTimes,)}`
        }
        return `/time-${TimeCompanion.getGroupUrl(value,)}`
    }

    /**
     * Get the partial path from a {@link Nullable} {@link GameStyles} {@link ReadonlyArray array}
     *
     * @param values The {@link GameStyles} to retrieve their {@link GameStyles.urlValue}
     */
    protected _getPathFromGameStyles(values: NullableArray<GameStyles> = null,): PossibleGameStylePath {
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
        if (isEmptyByArray(values,)) {
            const defaultGameStyles = this.defaultGameStyles
            if (defaultGameStyles == null)
                return EMPTY_STRING
            return `/game-style-${GameStyleCompanion.getGroupUrlValue(defaultGameStyles,)}`
        }
        return `/game-style-${GameStyleCompanion.getGroupUrlValue(values,)}`
    }

    /**
     * Get the partial path from a {@link Nullable} {@link ViewDisplays}
     *
     * @param value The {@link ViewDisplays} to retrieve its {@link ViewDisplays.urlValue}
     */
    protected _getPathFromViewDisplay(value: Nullable<ViewDisplays> = null,): PossibleViewDisplayPath {
        if (value == null)
            value = ViewDisplayCompanion.currentOrNull
        if (value == null)
            value = this.defaultViewDisplay
        if (value == null)
            return EMPTY_STRING
        return `/${value.urlValue}`
    }

    public getPath(language: Nullable<ProjectLanguages>, games?: NullableArray<Games>, gameStyles?: NullableArray<GameStyles>, times?: NullableArray<Times>, viewDisplay?: Nullable<ViewDisplays>,): EveryPossibleRoutes
    public getPath(language: Nullable<ProjectLanguages>, games: NullableArray<Games> = null, gameStyles: NullableArray<GameStyles> = null, times: NullableArray<Times> = null, viewDisplay: Nullable<ViewDisplays> = null,) {
        language ??= LanguageCompanion.current
        return `/${language.projectAcronym}${this._getPathFromGames(games,)}${this._getPathFromGameStyles(gameStyles,)}${this._getPathFromTimes(times,)}${this._getPathFromViewDisplay(viewDisplay,)}${this.urlValue}`
    }

    //endregion -------------------- Methods --------------------

}

export namespace EveryRoutes {

    /** The companion instance of a {@link EveryRoutes} */
    export const Companion = EveryRoutes.CompanionEnum.get

    export const ALL = Companion.values.toArray()


    function __retrieveAllRoutes() {
        const routes: MutableArray<SimpleRoute> = []
        Companion.values.forEach(it => forEachByArray(it.everyRoute, it => routes.push(it,),),)
        return routes
    }

    /**
     * All the possible {@link SimpleRoute} possible in a 1-dimensional {@link ReadonlyArray Array}
     * ordered by the {@link EveryRoutes.ordinal ordinal} order of {@link EveryRoutes}
     */
    export const ALL_ROUTES = __retrieveAllRoutes() as Array<PossibleRoute>

}

// const everyRoute = EveryRoutes.Companion.everyRoute
// console.table(everyRoute.filter((_, i,) => i < 500,).map(it => ({name: it.name, path: it.path,}),),)
// console.table(everyRoute.filter((_, i,) => i >= 500 && i < 1000,).map(it => ({name: it.name, path: it.path,}),),)
// console.table(everyRoute.filter((_, i,) => i >= 1000,).map(it => ({name: it.name, path: it.path,}),),)
