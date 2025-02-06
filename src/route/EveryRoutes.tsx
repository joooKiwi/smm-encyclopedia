import type {CollectionHolder}                                                 from '@joookiwi/collection'
import type {Singleton}                                                        from '@joookiwi/enumerable'
import type {Array, EmptyString, MutableArray, Nullable, NullOr, NullOrString} from '@joookiwi/type'
import {forEachByArray}                                                        from '@joookiwi/collection'
import {CompanionEnum, Enum}                                                   from '@joookiwi/enumerable'
import {lazy}                                                                  from 'react'

import type {ClassUsedInRoute}                                                                                                                                                                                from 'route/ClassUsedInRoute'
import type {EveryPossibleRoutes, Names, NothingRouteCallback, Ordinals, PossibleGamePath, PossibleGameStylePath, PossibleRoute, PossibleRouteName, PossibleTimePath, PossibleViewDisplayPath, RouteCallback} from 'route/EveryRoutes.types'
import type {CompanionEnumDeclaration_EveryRoutes}                                                                                                                                                            from 'route/EveryRoutes.companionEnumDeclaration'

import {CourseTagTypes}        from 'app/property/CourseTagTypes'
import {LimitTypes}            from 'app/property/LimitTypes'
import {PowerUpPriorityTypes}  from 'app/property/PowerUpPriorityTypes'
import {ThemeTypes}            from 'app/property/ThemeTypes'
import {ColorThemes}           from 'color/ColorThemes'
import {Games}                 from 'core/game/Games'
import {GameStyles}            from 'core/gameStyle/GameStyles'
import {GameStylesPossibility} from 'core/gameStyle/GameStyles.possibility'
import {Times}                 from 'core/time/Times'
import {ViewDisplays}          from 'display/ViewDisplays'
import {ProjectLanguages}      from 'lang/ProjectLanguages'
import {Route}                 from 'route/Route'
import {Empty}                 from 'util/emptyVariables'
import {ArrayAsCollection}     from 'util/collection/ArrayAsCollection'
import {ViewDisplayCollection} from 'util/collection/ViewDisplayCollection'

import ALL_GAMES =            Games.ALL
import ALL_TIMES =            Times.ALL
import ALL_VIEW_DISPLAY =     ViewDisplayCollection.ALL
import DAY_ONLY =             Times.DAY_ONLY
import ColorCompanion =       ColorThemes.Companion
import EMPTY_STRING =         Empty.EMPTY_STRING
import GameCompanion =        Games.Companion
import LanguageCompanion =    ProjectLanguages.Companion
import NIGHT_ONLY =           Times.NIGHT_ONLY
import NO_VIEW_DISPLAY =      ViewDisplayCollection.EMPTY
import SMM1 =                 Games.SMM1
import SMM1_AND_3DS =         Games.SMM1_AND_3DS
import SMM1_AND_2 =           Games.SMM1_AND_2
import SMM1_ONLY =            Games.SMM1_ONLY
import SMM2 =                 Games.SMM2
import SMM2_ONLY =            Games.SMM2_ONLY
import SMM3DS_AND_2 =         Games.SMM3DS_AND_2
import SMM3DS_ONLY =          Games.SMM3DS_ONLY
import TimeCompanion =        Times.Companion
import ViewDisplayCompanion = ViewDisplays.Companion

//region -------------------- Import from deconstruction --------------------

const {LIST, CARD, TABLE,} = ViewDisplays

//endregion -------------------- Import from deconstruction --------------------
//region -------------------- Dynamic imports --------------------

const AboutApp =               lazy(() => import('app/AboutApp'))
const PredefinedMessageApp =   lazy(() => import('app/PredefinedMessageApp'))
const CharacterNameApp =       lazy(() => import('app/CharacterNameApp'))
const CourseTagApp =           lazy(() => import('app/CourseTagApp'))
const EditorVoiceApp =         lazy(() => import('app/EditorVoiceApp'))
const EntityApp =              lazy(() => import('app/EntityApp'))
const EntityCategoryApp =      lazy(() => import('app/EntityCategoryApp'))
const EntityGroupApp =         lazy(() => import('app/EntityGroupApp'))
const OfficialCourseApp =      lazy(() => import('app/OfficialCourseApp'))
const GameStyleApp =           lazy(() => import('app/GameStyleApp'))
const GameReferenceApp =       lazy(() => import('app/GameReferenceApp'))
const InstrumentApp =          lazy(() => import('app/InstrumentApp'))
const LimitApp =               lazy(() => import('app/LimitApp'))
const MiiCostumeApp =          lazy(() => import('app/MiiCostumeApp'))
const MiiCostumeCategoryApp =  lazy(() => import('app/MiiCostumeCategoryApp'))
const MysteryMushroomApp =     lazy(() => import('app/MysteryMushroomApp'))
const PriorityApp =            lazy(() => import('app/PriorityApp'))
const SoundEffectCategoryApp = lazy(() => import('app/SoundEffectCategoryApp'))
const SoundEffectApp =         lazy(() => import('app/SoundEffectApp'))
const ThemeApp =               lazy(() => import('app/ThemeApp'))
const SampleCourseApp =        lazy(() => import('app/SampleCourseApp'))
const MedalApp =               lazy(() => import('app/MedalApp'))
const MusicApp =               lazy(() => import('app/MusicApp'))
const HomeApp =                lazy(() => import('app/HomeApp'))
const SourcesApp =             lazy(() => import('app/SourcesApp'))
const RouteApp =               lazy(() => import('app/RouteApp'))

//endregion -------------------- Dynamic imports --------------------
//region -------------------- Helper constants --------------------

// //region -------------------- Possibility group constants --------------------
//
// /** Every {@link GameStylesPossibility} applicable to the {@link SMM2} game group */
// const gameStylePossibilitiesWithSmm2 = [
//     [GameStylesPossibility.ALL,          'GameStyle=all',       'game-style-all',],
//     [GameStylesPossibility.SMB_ONLY,                 'GameStyle=1',         'game-style-1',],
//     [GameStylesPossibility.SMB3_ONLY,                'GameStyle=3',         'game-style-3',],
//     [GameStylesPossibility.SMW_ONLY,                 'GameStyle=W',         'game-style-w',],
//     [GameStylesPossibility.NSMBU_ONLY,               'GameStyle=U',         'game-style-u',],
//     [GameStylesPossibility.SM3DW_ONLY,               'GameStyle=3DW',       'game-style-3dw',],
//     [GameStylesPossibility.SMB_AND_SMB3,             'GameStyle=1&3',       'game-style-1,3',],
//     [GameStylesPossibility.SMB_AND_SMW,              'GameStyle=1&W',       'game-style-1,w',],
//     [GameStylesPossibility.SMB_AND_NSMBU,            'GameStyle=1&U',       'game-style-1,u',],
//     [GameStylesPossibility.SMB_AND_SM3DW,            'GameStyle=1&3DW',     'game-style-1,3dw',],
//     [GameStylesPossibility.SMB3_AND_SMW,             'GameStyle=3&W',       'game-style-3,w',],
//     [GameStylesPossibility.SMB3_AND_NSMBU,           'GameStyle=3&U',       'game-style-3,u',],
//     [GameStylesPossibility.SMB3_AND_SM3DW,           'GameStyle=3&3DW',     'game-style-3,3dw',],
//     [GameStylesPossibility.SMW_AND_NSMBU,            'GameStyle=W&U',       'game-style-w,u',],
//     [GameStylesPossibility.SMW_AND_SM3DW,            'GameStyle=W&3DW',     'game-style-w,3dw',],
//     [GameStylesPossibility.NSMBU_AND_SM3DW,          'GameStyle=U&3DW',     'game-style-u,3dw',],
//     [GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     'GameStyle=1&3&W',     'game-style-1,3,w',],
//     [GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   'GameStyle=1&3&U',     'game-style-1,3,u',],
//     [GameStylesPossibility.SMB_AND_SMB3_AND_SM3DW,   'GameStyle=1&3&3DW',   'game-style-1,3,3dw',],
//     [GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    'GameStyle=1&W&U',     'game-style-1,w,u',],
//     [GameStylesPossibility.SMB_AND_SMW_AND_SM3DW,    'GameStyle=1&W&3DW',   'game-style-1,w,3dw',],
//     [GameStylesPossibility.SMB_AND_NSMBU_AND_SM3DW,  'GameStyle=1&U&3DW',   'game-style-1,u,3dw',],
//     [GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   'GameStyle=3&W&U',     'game-style-3,w,u',],
//     [GameStylesPossibility.SMB3_AND_SMW_AND_SM3DW,   'GameStyle=3&W&3DW',   'game-style-3,w,3dw',],
//     [GameStylesPossibility.SMB3_AND_NSMBU_AND_SM3DW, 'GameStyle=3&U&3DW',   'game-style-3,u,3dw',],
//     [GameStylesPossibility.SMW_AND_NSMBU_AND_SM3DW,  'GameStyle=W&U&3DW',   'game-style-w,u,3dw',],
//     [GameStylesPossibility.NOT_SM3DW,                'GameStyle=1&3&W&U',   'game-style-1,3,w,u',],
//     [GameStylesPossibility.NOT_NSMBU,                'GameStyle=1&3&W&3DW', 'game-style-1,3,w,3dw',],
//     [GameStylesPossibility.NOT_SMW,                  'GameStyle=1&3&U&3DW', 'game-style-1,3,u,3dw',],
//     [GameStylesPossibility.NOT_SMB3,                 'GameStyle=1&W&U&3DW', 'game-style-1,w,u,3dw',],
//     [GameStylesPossibility.NOT_SMB,                  'GameStyle=3&W&U&3DW', 'game-style-3,w,u,3dw',],
// ] as const
// /**
//  * Every {@link GameStylesPossibility} applicable not related to the {@link SMM2} game group.
//  * Meaning, it does not contain the {@link SM3DW} game style.
//  */
// const gameStylePossibilitiesWithNotSmm2 = [
//     [GameStylesPossibility.ALL,        'GameStyle=all',     'game-style-all',],
//     [GameStylesPossibility.SMB_ONLY,               'GameStyle=1',       'game-style-1',],
//     [GameStylesPossibility.SMB3_ONLY,              'GameStyle=3',       'game-style-3',],
//     [GameStylesPossibility.SMW_ONLY,               'GameStyle=W',       'game-style-w',],
//     [GameStylesPossibility.NSMBU_ONLY,             'GameStyle=U',       'game-style-u',],
//     [GameStylesPossibility.SMB_AND_SMB3,           'GameStyle=1&3',     'game-style-1,3',],
//     [GameStylesPossibility.SMB_AND_SMW,            'GameStyle=1&W',     'game-style-1,w',],
//     [GameStylesPossibility.SMB_AND_NSMBU,          'GameStyle=1&U',     'game-style-1,u',],
//     [GameStylesPossibility.SMB3_AND_SMW,           'GameStyle=3&W',     'game-style-3,w',],
//     [GameStylesPossibility.SMB3_AND_NSMBU,         'GameStyle=3&U',     'game-style-3,u',],
//     [GameStylesPossibility.SMW_AND_NSMBU,          'GameStyle=W&U',     'game-style-w,u',],
//     [GameStylesPossibility.SMB_AND_SMB3_AND_SMW,   'GameStyle=1&3&W',   'game-style-1,3,w',],
//     [GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU, 'GameStyle=1&3&U',   'game-style-1,3,u',],
//     [GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,  'GameStyle=1&W&U',   'game-style-1,w,u',],
//     [GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU, 'GameStyle=3&W&U',   'game-style-3,w,u',],
//     [GameStylesPossibility.NOT_SM3DW,              'GameStyle=1&3&W&U', 'game-style-1,3,w,u',],
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
 * @see Route
 * @see ViewDisplays
 * @see Games
 * @see GameStyles
 */
export abstract class EveryRoutes<const URL_NAME extends string = string,
    const URL_PATH extends string = string, >
    extends Enum<Ordinals, Names>
    implements ClassUsedInRoute<URL_PATH, URL_NAME> {

    //region -------------------- Sub class --------------------

    /**
     * A representation of an {@link EveryRoutes} instance with nothing in its route.
     * Meaning no {@link ViewDisplays}, {@link GameCollection}, {@link GameStyleCollection} and {@link TimeCollection}.
     */
    private static readonly Straight = class Straight_EveryRoutes<const URL_NAME extends string,
        const URL_PATH extends string, >
        extends EveryRoutes<URL_NAME, URL_PATH> {

        constructor(name: URL_NAME, path: URL_PATH, routeCallback: NothingRouteCallback,) {
            super(name, path, routeCallback,)
        }

        public override get viewDisplays(): ViewDisplayCollection { return NO_VIEW_DISPLAY }
        public override get defaultViewDisplay(): null { return null }

        public override get defaultGame(): null { return null }

        public override get defaultGameStyles(): null { return null }

        public override get defaultTimes(): NullOrArray<Times> { return null }

        protected override _createEveryRoutes(): Array<Route> {
            return [new Route(this.urlName, this.urlValue, null, null, null, null, this.routeCallback,),]
        }

        protected override _getPathFromGames(): EmptyString { return EMPTY_STRING }
        protected override _getPathFromTimes(): EmptyString { return EMPTY_STRING }
        protected override _getPathFromGameStyles(): EmptyString { return EMPTY_STRING }
        protected override _getPathFromViewDisplay(): EmptyString { return EMPTY_STRING }

    }

    /**
     * A representation of an {@link EveryRoutes} instance with everything in its route
     * ({@link ViewDisplays}, {@link GameCollection}, {@link GameStyleCollection} and {@link TimeCollection})
     */
    private static readonly All = class All_EveryRoutes<const URL_NAME extends string,
        const URL_PATH extends string, >
        extends EveryRoutes<URL_NAME, URL_PATH> {

        readonly #defaultViewDisplay
        readonly #defaultGame

        constructor(name: URL_NAME, path: URL_PATH, defaultViewDisplay: ViewDisplays, defaultGame: Games, routeCallback: RouteCallback,) {
            super(name, path, routeCallback,)
            this.#defaultViewDisplay = defaultViewDisplay
            this.#defaultGame = defaultGame
        }

        public override get viewDisplays(): ViewDisplayCollection { return ALL_VIEW_DISPLAY }
        public override get defaultViewDisplay(): ViewDisplays { return this.#defaultViewDisplay }

        public override get defaultGame(): Games { return this.#defaultGame }

        public override get defaultGameStyles(): CollectionHolder<GameStyles> { return GameStylesPossibility.ALL }

        public override get defaultTimes(): Array<Times> { return ALL_TIMES }

        protected override _createEveryRoutes(): Array<Route> {
            const name = this.urlName
            const path = this.urlValue
            const routeCallback = this.routeCallback

            //@ts-ignore: The 1124 routes have their types handled elsewhere
            return [
                //region -------------------- Time (all) --------------------

                //region -------------------- Game style (all) --------------------

                new Route(`${name} (list Game=all GameStyle=all Time=all)`,          `/game-all/game-style-all/time-all/list${path}`,           ALL_GAMES,    ALL_TIMES, GameStylesPossibility.ALL,          LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=all Time=all)`,            `/game-1/game-style-all/time-all/list${path}`,             SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.ALL,          LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=all Time=all)`,          `/game-3ds/game-style-all/time-all/list${path}`,           SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.ALL,          LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=all Time=all)`,            `/game-2/game-style-all/time-all/list${path}`,             SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.ALL,          LIST,  routeCallback,),
                new Route(`${name} (list Game=1&3DS GameStyle=all Time=all)`,        `/game-1,3ds/game-style-all/time-all/list${path}`,         SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.ALL,          LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=all Time=all)`,          `/game-1,2/game-style-all/time-all/list${path}`,           SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.ALL,          LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=all Time=all)`,        `/game-3ds,2/game-style-all/time-all/list${path}`,         SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.ALL,          LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=all Time=all)`,          `/game-all/game-style-all/time-all/card${path}`,           ALL_GAMES,    ALL_TIMES, GameStylesPossibility.ALL,          CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=all Time=all)`,            `/game-1/game-style-all/time-all/card${path}`,             SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.ALL,          CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=all Time=all)`,          `/game-3ds/game-style-all/time-all/card${path}`,           SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.ALL,          CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=all Time=all)`,            `/game-2/game-style-all/time-all/card${path}`,             SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.ALL,          CARD,  routeCallback,),
                new Route(`${name} (card Game=1&3DS GameStyle=all Time=all)`,        `/game-1,3ds/game-style-all/time-all/card${path}`,         SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.ALL,          CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=all Time=all)`,          `/game-1,2/game-style-all/time-all/card${path}`,           SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.ALL,          CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=all Time=all)`,        `/game-3ds,2/game-style-all/time-all/card${path}`,         SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.ALL,          CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=all Time=all)`,         `/game-all/game-style-all/time-all/table${path}`,          ALL_GAMES,    ALL_TIMES, GameStylesPossibility.ALL,          TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=all Time=all)`,           `/game-1/game-style-all/time-all/table${path}`,            SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.ALL,          TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=all Time=all)`,         `/game-3ds/game-style-all/time-all/table${path}`,          SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.ALL,          TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=all Time=all)`,           `/game-2/game-style-all/time-all/table${path}`,            SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.ALL,          TABLE, routeCallback,),
                new Route(`${name} (table Game=1&3DS GameStyle=all Time=all)`,       `/game-1,3ds/game-style-all/time-all/table${path}`,        SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.ALL,          TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=all Time=all)`,         `/game-1,2/game-style-all/time-all/table${path}`,          SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.ALL,          TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=all Time=all)`,       `/game-3ds,2/game-style-all/time-all/table${path}`,        SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.ALL,          TABLE, routeCallback,),

                //endregion -------------------- Game style (all) --------------------

                //region -------------------- Game style (smb) --------------------

                new Route(`${name} (list Game=all GameStyle=1 Time=all)`,            `/game-all/game-style-1/time-all/list${path}`,             ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_ONLY,                 LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=1 Time=all)`,              `/game-1/game-style-1/time-all/list${path}`,               SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_ONLY,                 LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=1 Time=all)`,            `/game-3ds/game-style-1/time-all/list${path}`,             SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB_ONLY,                 LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1 Time=all)`,              `/game-2/game-style-1/time-all/list${path}`,               SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_ONLY,                 LIST,  routeCallback,),
                new Route(`${name} (list Game=1&3DS GameStyle=1 Time=all)`,          `/game-1,3ds/game-style-1/time-all/list${path}`,           SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB_ONLY,                 LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1 Time=all)`,            `/game-1,2/game-style-1/time-all/list${path}`,             SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_ONLY,                 LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1 Time=all)`,          `/game-3ds,2/game-style-1/time-all/list${path}`,           SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_ONLY,                 LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1 Time=all)`,            `/game-all/game-style-1/time-all/card${path}`,             ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_ONLY,                 CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=1 Time=all)`,              `/game-1/game-style-1/time-all/card${path}`,               SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_ONLY,                 CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=1 Time=all)`,            `/game-3ds/game-style-1/time-all/card${path}`,             SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB_ONLY,                 CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1 Time=all)`,              `/game-2/game-style-1/time-all/card${path}`,               SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_ONLY,                 CARD,  routeCallback,),
                new Route(`${name} (card Game=1&3DS GameStyle=1 Time=all)`,          `/game-1,3ds/game-style-1/time-all/card${path}`,           SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB_ONLY,                 CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1 Time=all)`,            `/game-1,2/game-style-1/time-all/card${path}`,             SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_ONLY,                 CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1 Time=all)`,          `/game-3ds,2/game-style-1/time-all/card${path}`,           SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_ONLY,                 CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1 Time=all)`,           `/game-all/game-style-1/time-all/table${path}`,            ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_ONLY,                 TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=1 Time=all)`,             `/game-1/game-style-1/time-all/table${path}`,              SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_ONLY,                 TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=1 Time=all)`,           `/game-3ds/game-style-1/time-all/table${path}`,            SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB_ONLY,                 TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1 Time=all)`,             `/game-2/game-style-1/time-all/table${path}`,              SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_ONLY,                 TABLE, routeCallback,),
                new Route(`${name} (table Game=1&3DS GameStyle=1 Time=all)`,         `/game-1,3ds/game-style-1/time-all/table${path}`,          SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB_ONLY,                 TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1 Time=all)`,           `/game-1,2/game-style-1/time-all/table${path}`,            SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_ONLY,                 TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1 Time=all)`,         `/game-3ds,2/game-style-1/time-all/table${path}`,          SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_ONLY,                 TABLE, routeCallback,),

                //endregion -------------------- Game style (smb) --------------------
                //region -------------------- Game style (smb3) --------------------

                new Route(`${name} (list Game=all GameStyle=3 Time=all)`,            `/game-all/game-style-3/time-all/list${path}`,             ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB3_ONLY,                LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=3 Time=all)`,              `/game-1/game-style-3/time-all/list${path}`,               SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_ONLY,                LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=3 Time=all)`,            `/game-3ds/game-style-3/time-all/list${path}`,             SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB3_ONLY,                LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=3 Time=all)`,              `/game-2/game-style-3/time-all/list${path}`,               SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_ONLY,                LIST,  routeCallback,),
                new Route(`${name} (list Game=1&3DS GameStyle=3 Time=all)`,          `/game-1,3ds/game-style-3/time-all/list${path}`,           SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB3_ONLY,                LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=3 Time=all)`,            `/game-1,2/game-style-3/time-all/list${path}`,             SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB3_ONLY,                LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=3 Time=all)`,          `/game-3ds,2/game-style-3/time-all/list${path}`,           SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB3_ONLY,                LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=3 Time=all)`,            `/game-all/game-style-3/time-all/card${path}`,             ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB3_ONLY,                CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=3 Time=all)`,              `/game-1/game-style-3/time-all/card${path}`,               SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_ONLY,                CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=3 Time=all)`,            `/game-3ds/game-style-3/time-all/card${path}`,             SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB3_ONLY,                CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=3 Time=all)`,              `/game-2/game-style-3/time-all/card${path}`,               SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_ONLY,                CARD,  routeCallback,),
                new Route(`${name} (card Game=1&3DS GameStyle=3 Time=all)`,          `/game-1,3ds/game-style-3/time-all/card${path}`,           SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB3_ONLY,                CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=3 Time=all)`,            `/game-1,2/game-style-3/time-all/card${path}`,             SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB3_ONLY,                CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=3 Time=all)`,          `/game-3ds,2/game-style-3/time-all/card${path}`,           SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB3_ONLY,                CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=3 Time=all)`,           `/game-all/game-style-3/time-all/table${path}`,            ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB3_ONLY,                TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=3 Time=all)`,             `/game-1/game-style-3/time-all/table${path}`,              SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_ONLY,                TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=3 Time=all)`,           `/game-3ds/game-style-3/time-all/table${path}`,            SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB3_ONLY,                TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=3 Time=all)`,             `/game-2/game-style-3/time-all/table${path}`,              SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_ONLY,                TABLE, routeCallback,),
                new Route(`${name} (table Game=1&3DS GameStyle=3 Time=all)`,         `/game-1,3ds/game-style-3/time-all/table${path}`,          SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB3_ONLY,                TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=3 Time=all)`,           `/game-1,2/game-style-3/time-all/table${path}`,            SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB3_ONLY,                TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=3 Time=all)`,         `/game-3ds,2/game-style-3/time-all/table${path}`,          SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB3_ONLY,                TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3) --------------------
                //region -------------------- Game style (smw) --------------------

                new Route(`${name} (list Game=all GameStyle=W Time=all)`,            `/game-all/game-style-w/time-all/list${path}`,             ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMW_ONLY,                 LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=W Time=all)`,              `/game-1/game-style-w/time-all/list${path}`,               SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMW_ONLY,                 LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=W Time=all)`,            `/game-3ds/game-style-w/time-all/list${path}`,             SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMW_ONLY,                 LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=W Time=all)`,              `/game-2/game-style-w/time-all/list${path}`,               SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMW_ONLY,                 LIST,  routeCallback,),
                new Route(`${name} (list Game=1&3DS GameStyle=W Time=all)`,          `/game-1,3ds/game-style-w/time-all/list${path}`,           SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMW_ONLY,                 LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=W Time=all)`,            `/game-1,2/game-style-w/time-all/list${path}`,             SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMW_ONLY,                 LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=W Time=all)`,          `/game-3ds,2/game-style-w/time-all/list${path}`,           SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMW_ONLY,                 LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=W Time=all)`,            `/game-all/game-style-w/time-all/card${path}`,             ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMW_ONLY,                 CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=W Time=all)`,              `/game-1/game-style-w/time-all/card${path}`,               SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMW_ONLY,                 CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=W Time=all)`,            `/game-3ds/game-style-w/time-all/card${path}`,             SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMW_ONLY,                 CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=W Time=all)`,              `/game-2/game-style-w/time-all/card${path}`,               SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMW_ONLY,                 CARD,  routeCallback,),
                new Route(`${name} (card Game=1&3DS GameStyle=W Time=all)`,          `/game-1,3ds/game-style-w/time-all/card${path}`,           SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMW_ONLY,                 CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=W Time=all)`,            `/game-1,2/game-style-w/time-all/card${path}`,             SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMW_ONLY,                 CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=W Time=all)`,          `/game-3ds,2/game-style-w/time-all/card${path}`,           SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMW_ONLY,                 CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=W Time=all)`,           `/game-all/game-style-w/time-all/table${path}`,            ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMW_ONLY,                 TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=W Time=all)`,             `/game-1/game-style-w/time-all/table${path}`,              SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMW_ONLY,                 TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=W Time=all)`,           `/game-3ds/game-style-w/time-all/table${path}`,            SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMW_ONLY,                 TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=W Time=all)`,             `/game-2/game-style-w/time-all/table${path}`,              SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMW_ONLY,                 TABLE, routeCallback,),
                new Route(`${name} (table Game=1&3DS GameStyle=W Time=all)`,         `/game-1,3ds/game-style-w/time-all/table${path}`,          SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMW_ONLY,                 TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=W Time=all)`,           `/game-1,2/game-style-w/time-all/table${path}`,            SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMW_ONLY,                 TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=W Time=all)`,         `/game-3ds,2/game-style-w/time-all/table${path}`,          SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMW_ONLY,                 TABLE, routeCallback,),

                //endregion -------------------- Game style (smw) --------------------
                //region -------------------- Game style (nsmbu) --------------------

                new Route(`${name} (list Game=all GameStyle=U Time=all)`,            `/game-all/game-style-u/time-all/list${path}`,             ALL_GAMES,    ALL_TIMES, GameStylesPossibility.NSMBU_ONLY,               LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=U Time=all)`,              `/game-1/game-style-u/time-all/list${path}`,               SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.NSMBU_ONLY,               LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=U Time=all)`,            `/game-3ds/game-style-u/time-all/list${path}`,             SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.NSMBU_ONLY,               LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=U Time=all)`,              `/game-2/game-style-u/time-all/list${path}`,               SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.NSMBU_ONLY,               LIST,  routeCallback,),
                new Route(`${name} (list Game=1&3DS GameStyle=U Time=all)`,          `/game-1,3ds/game-style-u/time-all/list${path}`,           SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.NSMBU_ONLY,               LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=U Time=all)`,            `/game-1,2/game-style-u/time-all/list${path}`,             SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.NSMBU_ONLY,               LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=U Time=all)`,          `/game-3ds,2/game-style-u/time-all/list${path}`,           SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.NSMBU_ONLY,               LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=U Time=all)`,            `/game-all/game-style-u/time-all/card${path}`,             ALL_GAMES,    ALL_TIMES, GameStylesPossibility.NSMBU_ONLY,               CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=U Time=all)`,              `/game-1/game-style-u/time-all/card${path}`,               SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.NSMBU_ONLY,               CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=U Time=all)`,            `/game-3ds/game-style-u/time-all/card${path}`,             SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.NSMBU_ONLY,               CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=U Time=all)`,              `/game-2/game-style-u/time-all/card${path}`,               SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.NSMBU_ONLY,               CARD,  routeCallback,),
                new Route(`${name} (card Game=1&3DS GameStyle=U Time=all)`,          `/game-1,3ds/game-style-u/time-all/card${path}`,           SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.NSMBU_ONLY,               CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=U Time=all)`,            `/game-1,2/game-style-u/time-all/card${path}`,             SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.NSMBU_ONLY,               CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=U Time=all)`,          `/game-3ds,2/game-style-u/time-all/card${path}`,           SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.NSMBU_ONLY,               CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=U Time=all)`,           `/game-all/game-style-u/time-all/table${path}`,            ALL_GAMES,    ALL_TIMES, GameStylesPossibility.NSMBU_ONLY,               TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=U Time=all)`,             `/game-1/game-style-u/time-all/table${path}`,              SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.NSMBU_ONLY,               TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=U Time=all)`,           `/game-3ds/game-style-u/time-all/table${path}`,            SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.NSMBU_ONLY,               TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=U Time=all)`,             `/game-2/game-style-u/time-all/table${path}`,              SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.NSMBU_ONLY,               TABLE, routeCallback,),
                new Route(`${name} (table Game=1&3DS GameStyle=U Time=all)`,         `/game-1,3ds/game-style-u/time-all/table${path}`,          SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.NSMBU_ONLY,               TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=U Time=all)`,           `/game-1,2/game-style-u/time-all/table${path}`,            SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.NSMBU_ONLY,               TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=U Time=all)`,         `/game-3ds,2/game-style-u/time-all/table${path}`,          SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.NSMBU_ONLY,               TABLE, routeCallback,),

                //endregion -------------------- Game style (nsmbu) --------------------
                //region -------------------- Game style (sm3dw) --------------------

                new Route(`${name} (list Game=all GameStyle=3DW Time=all)`,          `/game-all/game-style-3dw/time-all/list${path}`,           ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SM3DW_ONLY,               LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=3DW Time=all)`,            `/game-2/game-style-3dw/time-all/list${path}`,             SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SM3DW_ONLY,               LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=3DW Time=all)`,          `/game-1,2/game-style-3dw/time-all/list${path}`,           SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SM3DW_ONLY,               LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=3DW Time=all)`,        `/game-3ds,2/game-style-3dw/time-all/list${path}`,         SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SM3DW_ONLY,               LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=3DW Time=all)`,          `/game-all/game-style-3dw/time-all/card${path}`,           ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SM3DW_ONLY,               CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=3DW Time=all)`,            `/game-2/game-style-3dw/time-all/card${path}`,             SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SM3DW_ONLY,               CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=3DW Time=all)`,          `/game-1,2/game-style-3dw/time-all/card${path}`,           SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SM3DW_ONLY,               CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=3DW Time=all)`,        `/game-3ds,2/game-style-3dw/time-all/card${path}`,         SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SM3DW_ONLY,               CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=3DW Time=all)`,         `/game-all/game-style-3dw/time-all/table${path}`,          ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SM3DW_ONLY,               TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=3DW Time=all)`,           `/game-2/game-style-3dw/time-all/table${path}`,            SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SM3DW_ONLY,               TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=3DW Time=all)`,         `/game-1,2/game-style-3dw/time-all/table${path}`,          SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SM3DW_ONLY,               TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=3DW Time=all)`,       `/game-3ds,2/game-style-3dw/time-all/table${path}`,        SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SM3DW_ONLY,               TABLE, routeCallback,),

                //endregion -------------------- Game style (sm3dw) --------------------

                //region -------------------- Game style (smb + smb3) --------------------

                new Route(`${name} (list Game=all GameStyle=1&3 Time=all)`,          `/game-all/game-style-1,3/time-all/list${path}`,           ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3,             LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=1&3 Time=all)`,            `/game-1/game-style-1,3/time-all/list${path}`,             SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3,             LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=1&3 Time=all)`,          `/game-3ds/game-style-1,3/time-all/list${path}`,           SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3,             LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&3 Time=all)`,            `/game-2/game-style-1,3/time-all/list${path}`,             SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3,             LIST,  routeCallback,),
                new Route(`${name} (list Game=1&3DS GameStyle=1&3 Time=all)`,        `/game-1,3ds/game-style-1,3/time-all/list${path}`,         SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3,             LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&3 Time=all)`,          `/game-1,2/game-style-1,3/time-all/list${path}`,           SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3,             LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&3 Time=all)`,        `/game-3ds,2/game-style-1,3/time-all/list${path}`,         SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3,             LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&3 Time=all)`,          `/game-all/game-style-1,3/time-all/card${path}`,           ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3,             CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=1&3 Time=all)`,            `/game-1/game-style-1,3/time-all/card${path}`,             SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3,             CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=1&3 Time=all)`,          `/game-3ds/game-style-1,3/time-all/card${path}`,           SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3,             CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&3 Time=all)`,            `/game-2/game-style-1,3/time-all/card${path}`,             SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3,             CARD,  routeCallback,),
                new Route(`${name} (card Game=1&3DS GameStyle=1&3 Time=all)`,        `/game-1,3ds/game-style-1,3/time-all/card${path}`,         SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3,             CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&3 Time=all)`,          `/game-1,2/game-style-1,3/time-all/card${path}`,           SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3,             CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&3 Time=all)`,        `/game-3ds,2/game-style-1,3/time-all/card${path}`,         SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3,             CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&3 Time=all)`,         `/game-all/game-style-1,3/time-all/table${path}`,          ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3,             TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=1&3 Time=all)`,           `/game-1/game-style-1,3/time-all/table${path}`,            SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3,             TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=1&3 Time=all)`,         `/game-3ds/game-style-1,3/time-all/table${path}`,          SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3,             TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&3 Time=all)`,           `/game-2/game-style-1,3/time-all/table${path}`,            SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3,             TABLE, routeCallback,),
                new Route(`${name} (table Game=1&3DS GameStyle=1&3 Time=all)`,       `/game-1,3ds/game-style-1,3/time-all/table${path}`,        SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3,             TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&3 Time=all)`,         `/game-1,2/game-style-1,3/time-all/table${path}`,          SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3,             TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&3 Time=all)`,       `/game-3ds,2/game-style-1,3/time-all/table${path}`,        SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3,             TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3) --------------------
                //region -------------------- Game style (smb + smw) --------------------

                new Route(`${name} (list Game=all GameStyle=1&W Time=all)`,          `/game-all/game-style-1,w/time-all/list${path}`,           ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMW,              LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=1&W Time=all)`,            `/game-1/game-style-1,w/time-all/list${path}`,             SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMW,              LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=1&W Time=all)`,          `/game-3ds/game-style-1,w/time-all/list${path}`,           SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB_AND_SMW,              LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&W Time=all)`,            `/game-2/game-style-1,w/time-all/list${path}`,             SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMW,              LIST,  routeCallback,),
                new Route(`${name} (list Game=1&3DS GameStyle=1&W Time=all)`,        `/game-1,3ds/game-style-1,w/time-all/list${path}`,         SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB_AND_SMW,              LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&W Time=all)`,          `/game-1,2/game-style-1,w/time-all/list${path}`,           SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_AND_SMW,              LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&W Time=all)`,        `/game-3ds,2/game-style-1,w/time-all/list${path}`,         SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_AND_SMW,              LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&W Time=all)`,          `/game-all/game-style-1,w/time-all/card${path}`,           ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMW,              CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=1&W Time=all)`,            `/game-1/game-style-1,w/time-all/card${path}`,             SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMW,              CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=1&W Time=all)`,          `/game-3ds/game-style-1,w/time-all/card${path}`,           SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB_AND_SMW,              CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&W Time=all)`,            `/game-2/game-style-1,w/time-all/card${path}`,             SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMW,              CARD,  routeCallback,),
                new Route(`${name} (card Game=1&3DS GameStyle=1&W Time=all)`,        `/game-1,3ds/game-style-1,w/time-all/card${path}`,         SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB_AND_SMW,              CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&W Time=all)`,          `/game-1,2/game-style-1,w/time-all/card${path}`,           SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_AND_SMW,              CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&W Time=all)`,        `/game-3ds,2/game-style-1,w/time-all/card${path}`,         SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_AND_SMW,              CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&W Time=all)`,         `/game-all/game-style-1,w/time-all/table${path}`,          ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMW,              TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=1&W Time=all)`,           `/game-1/game-style-1,w/time-all/table${path}`,            SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMW,              TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=1&W Time=all)`,         `/game-3ds/game-style-1,w/time-all/table${path}`,          SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB_AND_SMW,              TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&W Time=all)`,           `/game-2/game-style-1,w/time-all/table${path}`,            SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMW,              TABLE, routeCallback,),
                new Route(`${name} (table Game=1&3DS GameStyle=1&W Time=all)`,       `/game-1,3ds/game-style-1,w/time-all/table${path}`,        SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB_AND_SMW,              TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&W Time=all)`,         `/game-1,2/game-style-1,w/time-all/table${path}`,          SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_AND_SMW,              TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&W Time=all)`,       `/game-3ds,2/game-style-1,w/time-all/table${path}`,        SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_AND_SMW,              TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smw) --------------------
                //region -------------------- Game style (smb + nsmbu) --------------------

                new Route(`${name} (list Game=all GameStyle=1&U Time=all)`,          `/game-all/game-style-1,u/time-all/list${path}`,           ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU,            LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=1&U Time=all)`,            `/game-1/game-style-1,u/time-all/list${path}`,             SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU,            LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=1&U Time=all)`,          `/game-3ds/game-style-1,u/time-all/list${path}`,           SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU,            LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&U Time=all)`,            `/game-2/game-style-1,u/time-all/list${path}`,             SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU,            LIST,  routeCallback,),
                new Route(`${name} (list Game=1&3DS GameStyle=1&U Time=all)`,        `/game-1,3ds/game-style-1,u/time-all/list${path}`,         SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU,            LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&U Time=all)`,          `/game-1,2/game-style-1,u/time-all/list${path}`,           SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU,            LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&U Time=all)`,        `/game-3ds,2/game-style-1,u/time-all/list${path}`,         SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU,            LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&U Time=all)`,          `/game-all/game-style-1,u/time-all/card${path}`,           ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU,            CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=1&U Time=all)`,            `/game-1/game-style-1,u/time-all/card${path}`,             SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU,            CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=1&U Time=all)`,          `/game-3ds/game-style-1,u/time-all/card${path}`,           SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU,            CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&U Time=all)`,            `/game-2/game-style-1,u/time-all/card${path}`,             SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU,            CARD,  routeCallback,),
                new Route(`${name} (card Game=1&3DS GameStyle=1&U Time=all)`,        `/game-1,3ds/game-style-1,u/time-all/card${path}`,         SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU,            CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&U Time=all)`,          `/game-1,2/game-style-1,u/time-all/card${path}`,           SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU,            CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&U Time=all)`,        `/game-3ds,2/game-style-1,u/time-all/card${path}`,         SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU,            CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&U Time=all)`,         `/game-all/game-style-1,u/time-all/table${path}`,          ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU,            TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=1&U Time=all)`,           `/game-1/game-style-1,u/time-all/table${path}`,            SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU,            TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=1&U Time=all)`,         `/game-3ds/game-style-1,u/time-all/table${path}`,          SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU,            TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&U Time=all)`,           `/game-2/game-style-1,u/time-all/table${path}`,            SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU,            TABLE, routeCallback,),
                new Route(`${name} (table Game=1&3DS GameStyle=1&U Time=all)`,       `/game-1,3ds/game-style-1,u/time-all/table${path}`,        SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU,            TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&U Time=all)`,         `/game-1,2/game-style-1,u/time-all/table${path}`,          SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU,            TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&U Time=all)`,       `/game-3ds,2/game-style-1,u/time-all/table${path}`,        SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU,            TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + nsmbu) --------------------
                //region -------------------- Game style (smb + sm3dw) --------------------

                new Route(`${name} (list Game=all GameStyle=1&3DW Time=all)`,        `/game-all/game-style-1,3dw/time-all/list${path}`,         ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_AND_SM3DW,            LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&3DW Time=all)`,          `/game-2/game-style-1,3dw/time-all/list${path}`,           SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SM3DW,            LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&3DW Time=all)`,        `/game-1,2/game-style-1,3dw/time-all/list${path}`,         SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_AND_SM3DW,            LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&3DW Time=all)`,      `/game-3ds,2/game-style-1,3dw/time-all/list${path}`,       SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_AND_SM3DW,            LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&3DW Time=all)`,        `/game-all/game-style-1,3dw/time-all/card${path}`,         ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_AND_SM3DW,            CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&3DW Time=all)`,          `/game-2/game-style-1,3dw/time-all/card${path}`,           SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SM3DW,            CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&3DW Time=all)`,        `/game-1,2/game-style-1,3dw/time-all/card${path}`,         SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_AND_SM3DW,            CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&3DW Time=all)`,      `/game-3ds,2/game-style-1,3dw/time-all/card${path}`,       SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_AND_SM3DW,            CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&3DW Time=all)`,       `/game-all/game-style-1,3dw/time-all/table${path}`,        ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_AND_SM3DW,            TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&3DW Time=all)`,         `/game-2/game-style-1,3dw/time-all/table${path}`,          SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SM3DW,            TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&3DW Time=all)`,       `/game-1,2/game-style-1,3dw/time-all/table${path}`,        SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_AND_SM3DW,            TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&3DW Time=all)`,     `/game-3ds,2/game-style-1,3dw/time-all/table${path}`,      SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_AND_SM3DW,            TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + sm3dw) --------------------
                //region -------------------- Game style (smb3 + smw) --------------------

                new Route(`${name} (list Game=all GameStyle=3&W Time=all)`,          `/game-all/game-style-3,w/time-all/list${path}`,           ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW,             LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=3&W Time=all)`,            `/game-1/game-style-3,w/time-all/list${path}`,             SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW,             LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=3&W Time=all)`,          `/game-3ds/game-style-3,w/time-all/list${path}`,           SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW,             LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=3&W Time=all)`,            `/game-2/game-style-3,w/time-all/list${path}`,             SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW,             LIST,  routeCallback,),
                new Route(`${name} (list Game=3&3DS GameStyle=3&W Time=all)`,        `/game-3,3ds/game-style-3,w/time-all/list${path}`,         SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW,             LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=3&W Time=all)`,          `/game-1,2/game-style-3,w/time-all/list${path}`,           SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW,             LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=3&W Time=all)`,        `/game-3ds,2/game-style-3,w/time-all/list${path}`,         SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW,             LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=3&W Time=all)`,          `/game-all/game-style-3,w/time-all/card${path}`,             ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW,           CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=3&W Time=all)`,            `/game-1/game-style-3,w/time-all/card${path}`,               SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW,           CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=3&W Time=all)`,          `/game-3ds/game-style-3,w/time-all/card${path}`,             SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW,           CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=3&W Time=all)`,            `/game-2/game-style-3,w/time-all/card${path}`,               SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW,           CARD,  routeCallback,),
                new Route(`${name} (card Game=3&3DS GameStyle=3&W Time=all)`,        `/game-3,3ds/game-style-3,w/time-all/card${path}`,           SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW,           CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=3&W Time=all)`,          `/game-1,2/game-style-3,w/time-all/card${path}`,             SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW,           CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=3&W Time=all)`,        `/game-3ds,2/game-style-3,w/time-all/card${path}`,           SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW,           CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=3&W Time=all)`,         `/game-all/game-style-3,w/time-all/table${path}`,            ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW,           TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=3&W Time=all)`,           `/game-1/game-style-3,w/time-all/table${path}`,              SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW,           TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=3&W Time=all)`,         `/game-3ds/game-style-3,w/time-all/table${path}`,            SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW,           TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=3&W Time=all)`,           `/game-2/game-style-3,w/time-all/table${path}`,              SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW,           TABLE, routeCallback,),
                new Route(`${name} (table Game=3&3DS GameStyle=3&W Time=all)`,       `/game-3,3ds/game-style-3,w/time-all/table${path}`,          SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW,           TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=3&W Time=all)`,         `/game-1,2/game-style-3,w/time-all/table${path}`,            SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW,           TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=3&W Time=all)`,       `/game-3ds,2/game-style-3,w/time-all/table${path}`,          SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW,           TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + smw) --------------------
                //region -------------------- Game style (smb3 + nsmbu) --------------------

                new Route(`${name} (list Game=all GameStyle=3&U Time=all)`,          `/game-all/game-style-3,u/time-all/list${path}`,           ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU,           LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=3&U Time=all)`,            `/game-1/game-style-3,u/time-all/list${path}`,             SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU,           LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=3&U Time=all)`,          `/game-3ds/game-style-3,u/time-all/list${path}`,           SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU,           LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=3&U Time=all)`,            `/game-2/game-style-3,u/time-all/list${path}`,             SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU,           LIST,  routeCallback,),
                new Route(`${name} (list Game=1&3DS GameStyle=3&U Time=all)`,        `/game-3,3ds/game-style-3,u/time-all/list${path}`,         SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU,           LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=3&U Time=all)`,          `/game-3,2/game-style-3,u/time-all/list${path}`,           SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU,           LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=3&U Time=all)`,        `/game-3ds,2/game-style-3,u/time-all/list${path}`,         SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU,           LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=3&U Time=all)`,          `/game-all/game-style-3,u/time-all/card${path}`,           ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU,           CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=3&U Time=all)`,            `/game-1/game-style-3,u/time-all/card${path}`,             SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU,           CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=3&U Time=all)`,          `/game-3ds/game-style-3,u/time-all/card${path}`,           SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU,           CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=3&U Time=all)`,            `/game-2/game-style-3,u/time-all/card${path}`,             SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU,           CARD,  routeCallback,),
                new Route(`${name} (card Game=1&3DS GameStyle=3&U Time=all)`,        `/game-3,3ds/game-style-3,u/time-all/card${path}`,         SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU,           CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=3&U Time=all)`,          `/game-3,2/game-style-3,u/time-all/card${path}`,           SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU,           CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=3&U Time=all)`,        `/game-3ds,2/game-style-3,u/time-all/card${path}`,         SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU,           CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=3&U Time=all)`,         `/game-all/game-style-3,u/time-all/table${path}`,          ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU,           TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=3&U Time=all)`,           `/game-1/game-style-3,u/time-all/table${path}`,            SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU,           TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=3&U Time=all)`,         `/game-3ds/game-style-3,u/time-all/table${path}`,          SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU,           TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=3&U Time=all)`,           `/game-2/game-style-3,u/time-all/table${path}`,            SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU,           TABLE, routeCallback,),
                new Route(`${name} (table Game=1&3DS GameStyle=3&U Time=all)`,       `/game-3,3ds/game-style-3,u/time-all/table${path}`,        SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU,           TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=3&U Time=all)`,         `/game-3,2/game-style-3,u/time-all/table${path}`,          SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU,           TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=3&U Time=all)`,       `/game-3ds,2/game-style-3,u/time-all/table${path}`,        SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU,           TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + nsmbu) --------------------
                //region -------------------- Game style (smb3 + sm3dw) --------------------

                new Route(`${name} (list Game=all GameStyle=3&3DW Time=all)`,        `/game-all/game-style-3,3dw/time-all/list${path}`,         ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB3_AND_SM3DW,           LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=3&3DW Time=all)`,          `/game-2/game-style-3,3dw/time-all/list${path}`,           SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_AND_SM3DW,           LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=3&3DW Time=all)`,        `/game-3,2/game-style-3,3dw/time-all/list${path}`,         SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB3_AND_SM3DW,           LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=3&3DW Time=all)`,      `/game-3ds,2/game-style-3,3dw/time-all/list${path}`,       SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB3_AND_SM3DW,           LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=3&3DW Time=all)`,        `/game-all/game-style-3,3dw/time-all/card${path}`,         ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB3_AND_SM3DW,           CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=3&3DW Time=all)`,          `/game-2/game-style-3,3dw/time-all/card${path}`,           SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_AND_SM3DW,           CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=3&3DW Time=all)`,        `/game-3,2/game-style-3,3dw/time-all/card${path}`,         SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB3_AND_SM3DW,           CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=3&3DW Time=all)`,      `/game-3ds,2/game-style-3,3dw/time-all/card${path}`,       SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB3_AND_SM3DW,           CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=3&3DW Time=all)`,       `/game-all/game-style-3,3dw/time-all/table${path}`,        ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB3_AND_SM3DW,           TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=3&3DW Time=all)`,         `/game-2/game-style-3,3dw/time-all/table${path}`,          SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_AND_SM3DW,           TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=3&3DW Time=all)`,       `/game-3,2/game-style-3,3dw/time-all/table${path}`,        SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB3_AND_SM3DW,           TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=3&3DW Time=all)`,     `/game-3ds,2/game-style-3,3dw/time-all/table${path}`,      SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB3_AND_SM3DW,           TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + sm3dw) --------------------
                //region -------------------- Game style (smw + nsmbu) --------------------

                new Route(`${name} (list Game=all GameStyle=W&U Time=all)`,          `/game-all/game-style-w,u/time-all/list${path}`,           ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU,            LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=W&U Time=all)`,            `/game-1/game-style-w,u/time-all/list${path}`,             SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU,            LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=W&U Time=all)`,          `/game-3ds/game-style-w,u/time-all/list${path}`,           SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU,            LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=W&U Time=all)`,            `/game-2/game-style-w,u/time-all/list${path}`,             SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU,            LIST,  routeCallback,),
                new Route(`${name} (list Game=1&3DS GameStyle=W&U Time=all)`,        `/game-1,3ds/game-style-w,u/time-all/list${path}`,         SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU,            LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=W&U Time=all)`,          `/game-1,2/game-style-w,u/time-all/list${path}`,           SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU,            LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=W&U Time=all)`,        `/game-3ds,2/game-style-w,u/time-all/list${path}`,         SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU,            LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=W&U Time=all)`,          `/game-all/game-style-w,u/time-all/card${path}`,           ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU,            CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=W&U Time=all)`,            `/game-1/game-style-w,u/time-all/card${path}`,             SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU,            CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=W&U Time=all)`,          `/game-3ds/game-style-w,u/time-all/card${path}`,           SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU,            CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=W&U Time=all)`,            `/game-2/game-style-w,u/time-all/card${path}`,             SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU,            CARD,  routeCallback,),
                new Route(`${name} (card Game=1&3DS GameStyle=W&U Time=all)`,        `/game-1,3ds/game-style-w,u/time-all/card${path}`,         SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU,            CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=W&U Time=all)`,          `/game-1,2/game-style-w,u/time-all/card${path}`,           SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU,            CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=W&U Time=all)`,        `/game-3ds,2/game-style-w,u/time-all/card${path}`,         SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU,            CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=W&U Time=all)`,         `/game-all/game-style-w,u/time-all/table${path}`,          ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU,            TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=W&U Time=all)`,           `/game-1/game-style-w,u/time-all/table${path}`,            SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU,            TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=W&U Time=all)`,         `/game-3ds/game-style-w,u/time-all/table${path}`,          SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU,            TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=W&U Time=all)`,           `/game-2/game-style-w,u/time-all/table${path}`,            SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU,            TABLE, routeCallback,),
                new Route(`${name} (table Game=1&3DS GameStyle=W&U Time=all)`,       `/game-1,3ds/game-style-w,u/time-all/table${path}`,        SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU,            TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=W&U Time=all)`,         `/game-1,2/game-style-w,u/time-all/table${path}`,          SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU,            TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=W&U Time=all)`,       `/game-3ds,2/game-style-w,u/time-all/table${path}`,        SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU,            TABLE, routeCallback,),

                //endregion -------------------- Game style (smw + nsmbu) --------------------
                //region -------------------- Game style (smw + sm3dw) --------------------

                new Route(`${name} (list Game=all GameStyle=W&3DW Time=all)`,        `/game-all/game-style-w,3dw/time-all/list${path}`,         ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMW_AND_SM3DW,            LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=W&3DW Time=all)`,          `/game-2/game-style-w,3dw/time-all/list${path}`,           SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMW_AND_SM3DW,            LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=W&3DW Time=all)`,        `/game-1,2/game-style-w,3dw/time-all/list${path}`,         SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMW_AND_SM3DW,            LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=W&3DW Time=all)`,      `/game-3ds,2/game-style-w,3dw/time-all/list${path}`,       SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMW_AND_SM3DW,            LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=W&3DW Time=all)`,        `/game-all/game-style-w,3dw/time-all/card${path}`,         ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMW_AND_SM3DW,            CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=W&3DW Time=all)`,          `/game-2/game-style-w,3dw/time-all/card${path}`,           SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMW_AND_SM3DW,            CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=W&3DW Time=all)`,        `/game-1,2/game-style-w,3dw/time-all/card${path}`,         SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMW_AND_SM3DW,            CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=W&3DW Time=all)`,      `/game-3ds,2/game-style-w,3dw/time-all/card${path}`,       SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMW_AND_SM3DW,            CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=W&3DW Time=all)`,       `/game-all/game-style-w,3dw/time-all/table${path}`,        ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMW_AND_SM3DW,            TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=W&3DW Time=all)`,         `/game-2/game-style-w,3dw/time-all/table${path}`,          SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMW_AND_SM3DW,            TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=W&3DW Time=all)`,       `/game-1,2/game-style-w,3dw/time-all/table${path}`,        SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMW_AND_SM3DW,            TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=W&3DW Time=all)`,     `/game-3ds,2/game-style-w,3dw/time-all/table${path}`,      SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMW_AND_SM3DW,            TABLE, routeCallback,),

                //endregion -------------------- Game style (smw + sm3dw) --------------------
                //region -------------------- Game style (nsmbu + sm3dw) --------------------

                new Route(`${name} (list Game=all GameStyle=U&3DW Time=all)`,        `/game-all/game-style-u,3dw/time-all/list${path}`,         ALL_GAMES,    ALL_TIMES, GameStylesPossibility.NSMBU_AND_SM3DW,          LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=U&3DW Time=all)`,          `/game-2/game-style-u,3dw/time-all/list${path}`,           SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.NSMBU_AND_SM3DW,          LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=U&3DW Time=all)`,        `/game-1,2/game-style-u,3dw/time-all/list${path}`,         SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.NSMBU_AND_SM3DW,          LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=U&3DW Time=all)`,      `/game-3ds,2/game-style-u,3dw/time-all/list${path}`,       SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.NSMBU_AND_SM3DW,          LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=U&3DW Time=all)`,        `/game-all/game-style-u,3dw/time-all/card${path}`,         ALL_GAMES,    ALL_TIMES, GameStylesPossibility.NSMBU_AND_SM3DW,          CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=U&3DW Time=all)`,          `/game-2/game-style-u,3dw/time-all/card${path}`,           SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.NSMBU_AND_SM3DW,          CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=U&3DW Time=all)`,        `/game-1,2/game-style-u,3dw/time-all/card${path}`,         SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.NSMBU_AND_SM3DW,          CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=U&3DW Time=all)`,      `/game-3ds,2/game-style-u,3dw/time-all/card${path}`,       SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.NSMBU_AND_SM3DW,          CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=U&3DW Time=all)`,       `/game-all/game-style-u,3dw/time-all/table${path}`,        ALL_GAMES,    ALL_TIMES, GameStylesPossibility.NSMBU_AND_SM3DW,          TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=U&3DW Time=all)`,         `/game-2/game-style-u,3dw/time-all/table${path}`,          SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.NSMBU_AND_SM3DW,          TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=U&3DW Time=all)`,       `/game-1,2/game-style-u,3dw/time-all/table${path}`,        SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.NSMBU_AND_SM3DW,          TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=U&3DW Time=all)`,     `/game-3ds,2/game-style-u,3dw/time-all/table${path}`,      SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.NSMBU_AND_SM3DW,          TABLE, routeCallback,),

                //endregion -------------------- Game style (nsmbu + sm3dw) --------------------

                //region -------------------- Game style (smb + smb3 + smw) --------------------

                new Route(`${name} (list Game=all GameStyle=1&3&W Time=all)`,        `/game-all/game-style-1,3,w/time-all/list${path}`,         ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=1&3&W Time=all)`,          `/game-1/game-style-1,3,w/time-all/list${path}`,           SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=1&3&W Time=all)`,        `/game-3ds/game-style-1,3,w/time-all/list${path}`,         SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&3&W Time=all)`,          `/game-2/game-style-1,3,w/time-all/list${path}`,           SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),
                new Route(`${name} (list Game=1&3DS GameStyle=1&3&W Time=all)`,      `/game-1,3ds/game-style-1,3,w/time-all/list${path}`,       SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&3&W Time=all)`,        `/game-1,2/game-style-1,3,w/time-all/list${path}`,         SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&3&W Time=all)`,      `/game-3ds,2/game-style-1,3,w/time-all/list${path}`,       SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&3&W Time=all)`,        `/game-all/game-style-1,3,w/time-all/card${path}`,         ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=1&3&W Time=all)`,          `/game-1/game-style-1,3,w/time-all/card${path}`,           SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=1&3&W Time=all)`,        `/game-3ds/game-style-1,3,w/time-all/card${path}`,         SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&3&W Time=all)`,          `/game-2/game-style-1,3,w/time-all/card${path}`,           SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),
                new Route(`${name} (card Game=1&3DS GameStyle=1&3&W Time=all)`,      `/game-1,3ds/game-style-1,3,w/time-all/card${path}`,       SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&3&W Time=all)`,        `/game-1,2/game-style-1,3,w/time-all/card${path}`,         SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&3&W Time=all)`,      `/game-3ds,2/game-style-1,3,w/time-all/card${path}`,       SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&3&W Time=all)`,       `/game-all/game-style-1,3,w/time-all/table${path}`,        ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=1&3&W Time=all)`,         `/game-1/game-style-1,3,w/time-all/table${path}`,          SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=1&3&W Time=all)`,       `/game-3ds/game-style-1,3,w/time-all/table${path}`,        SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&3&W Time=all)`,         `/game-2/game-style-1,3,w/time-all/table${path}`,          SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),
                new Route(`${name} (table Game=1&3DS GameStyle=1&3&W Time=all)`,     `/game-1,3ds/game-style-1,3,w/time-all/table${path}`,      SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&3&W Time=all)`,       `/game-1,2/game-style-1,3,w/time-all/table${path}`,        SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&3&W Time=all)`,     `/game-3ds,2/game-style-1,3,w/time-all/table${path}`,      SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + smw) --------------------
                //region -------------------- Game style (smb + smb3 + nsmbu) --------------------

                new Route(`${name} (list Game=all GameStyle=1&3&U Time=all)`,        `/game-all/game-style-1,3,u/time-all/list${path}`,         ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=1&3&U Time=all)`,          `/game-1/game-style-1,3,u/time-all/list${path}`,           SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=1&3&U Time=all)`,        `/game-3ds/game-style-1,3,u/time-all/list${path}`,         SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&3&U Time=all)`,          `/game-2/game-style-1,3,u/time-all/list${path}`,           SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),
                new Route(`${name} (list Game=1&3DS GameStyle=1&3&U Time=all)`,      `/game-1,3ds/game-style-1,3,u/time-all/list${path}`,       SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&3&U Time=all)`,        `/game-1,2/game-style-1,3,u/time-all/list${path}`,         SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&3&U Time=all)`,      `/game-3ds,2/game-style-1,3,u/time-all/list${path}`,       SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&3&U Time=all)`,        `/game-all/game-style-1,3,u/time-all/card${path}`,         ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=1&3&U Time=all)`,          `/game-1/game-style-1,3,u/time-all/card${path}`,           SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=1&3&U Time=all)`,        `/game-3ds/game-style-1,3,u/time-all/card${path}`,         SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&3&U Time=all)`,          `/game-2/game-style-1,3,u/time-all/card${path}`,           SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),
                new Route(`${name} (card Game=1&3DS GameStyle=1&3&U Time=all)`,      `/game-1,3ds/game-style-1,3,u/time-all/card${path}`,       SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&3&U Time=all)`,        `/game-1,2/game-style-1,3,u/time-all/card${path}`,         SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&3&U Time=all)`,      `/game-3ds,2/game-style-1,3,u/time-all/card${path}`,       SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&3&U Time=all)`,       `/game-all/game-style-1,3,u/time-all/table${path}`,        ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=1&3&U Time=all)`,         `/game-1/game-style-1,3,u/time-all/table${path}`,          SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=1&3&U Time=all)`,       `/game-3ds/game-style-1,3,u/time-all/table${path}`,        SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&3&U Time=all)`,         `/game-2/game-style-1,3,u/time-all/table${path}`,          SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),
                new Route(`${name} (table Game=1&3DS GameStyle=1&3&U Time=all)`,     `/game-1,3ds/game-style-1,3,u/time-all/table${path}`,      SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&3&U Time=all)`,       `/game-1,2/game-style-1,3,u/time-all/table${path}`,        SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&3&U Time=all)`,     `/game-3ds,2/game-style-1,3,u/time-all/table${path}`,      SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + nsmbu) --------------------
                //region -------------------- Game style (smb + smb3 + sm3dw) --------------------

                new Route(`${name} (list Game=all GameStyle=1&3&3DW Time=all)`,      `/game-all/game-style-1,3,3dw/time-all/list${path}`,       ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SM3DW,   LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&3&3DW Time=all)`,        `/game-2/game-style-1,3,3dw/time-all/list${path}`,         SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SM3DW,   LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&3&3DW Time=all)`,      `/game-1,2/game-style-1,3,3dw/time-all/list${path}`,       SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SM3DW,   LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&3&3DW Time=all)`,    `/game-3ds,2/game-style-1,3,3dw/time-all/list${path}`,     SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SM3DW,   LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&3&3DW Time=all)`,      `/game-all/game-style-1,3,3dw/time-all/card${path}`,       ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SM3DW,   CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&3&3DW Time=all)`,        `/game-2/game-style-1,3,3dw/time-all/card${path}`,         SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SM3DW,   CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&3&3DW Time=all)`,      `/game-1,2/game-style-1,3,3dw/time-all/card${path}`,       SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SM3DW,   CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&3&3DW Time=all)`,    `/game-3ds,2/game-style-1,3,3dw/time-all/card${path}`,     SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SM3DW,   CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&3&3DW Time=all)`,     `/game-all/game-style-1,3,3dw/time-all/table${path}`,      ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SM3DW,   TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&3&3DW Time=all)`,       `/game-2/game-style-1,3,3dw/time-all/table${path}`,        SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SM3DW,   TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&3&3DW Time=all)`,     `/game-1,2/game-style-1,3,3dw/time-all/table${path}`,      SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SM3DW,   TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&3&3DW Time=all)`,   `/game-3ds,2/game-style-1,3,3dw/time-all/table${path}`,    SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_AND_SMB3_AND_SM3DW,   TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + sm3dw) --------------------
                //region -------------------- Game style (smb + smw + nsmbu) --------------------

                new Route(`${name} (list Game=all GameStyle=1&W&U Time=all)`,        `/game-all/game-style-1,w,u/time-all/list${path}`,         ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=1&W&U Time=all)`,          `/game-1/game-style-1,w,u/time-all/list${path}`,           SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=1&W&U Time=all)`,        `/game-3ds/game-style-1,w,u/time-all/list${path}`,         SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&W&U Time=all)`,          `/game-2/game-style-1,w,u/time-all/list${path}`,           SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),
                new Route(`${name} (list Game=1&3DS GameStyle=1&W&U Time=all)`,      `/game-1,3ds/game-style-1,w,u/time-all/list${path}`,       SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&W&U Time=all)`,        `/game-1,2/game-style-1,w,u/time-all/list${path}`,         SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&W&U Time=all)`,      `/game-3ds,2/game-style-1,w,u/time-all/list${path}`,       SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&W&U Time=all)`,        `/game-all/game-style-1,w,u/time-all/card${path}`,         ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=1&W&U Time=all)`,          `/game-1/game-style-1,w,u/time-all/card${path}`,           SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=1&W&U Time=all)`,        `/game-3ds/game-style-1,w,u/time-all/card${path}`,         SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&W&U Time=all)`,          `/game-2/game-style-1,w,u/time-all/card${path}`,           SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),
                new Route(`${name} (card Game=1&3DS GameStyle=1&W&U Time=all)`,      `/game-1,3ds/game-style-1,w,u/time-all/card${path}`,       SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&W&U Time=all)`,        `/game-1,2/game-style-1,w,u/time-all/card${path}`,         SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&W&U Time=all)`,      `/game-3ds,2/game-style-1,w,u/time-all/card${path}`,       SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&W&U Time=all)`,       `/game-all/game-style-1,w,u/time-all/table${path}`,        ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=1&W&U Time=all)`,         `/game-1/game-style-1,w,u/time-all/table${path}`,          SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=1&W&U Time=all)`,       `/game-3ds/game-style-1,w,u/time-all/table${path}`,        SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&W&U Time=all)`,         `/game-2/game-style-1,w,u/time-all/table${path}`,          SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),
                new Route(`${name} (table Game=1&3DS GameStyle=1&W&U Time=all)`,     `/game-1,3ds/game-style-1,w,u/time-all/table${path}`,      SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&W&U Time=all)`,       `/game-1,2/game-style-1,w,u/time-all/table${path}`,        SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&W&U Time=all)`,     `/game-3ds,2/game-style-1,w,u/time-all/table${path}`,      SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smw + nsmbu) --------------------
                //region -------------------- Game style (smb + smw + sm3dw) --------------------

                new Route(`${name} (list Game=all GameStyle=1&W&3DW Time=all)`,      `/game-all/game-style-1,w,3dw/time-all/list${path}`,       ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_SM3DW,    LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&W&3DW Time=all)`,        `/game-2/game-style-1,w,3dw/time-all/list${path}`,         SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_SM3DW,    LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&W&3DW Time=all)`,      `/game-1,2/game-style-1,w,3dw/time-all/list${path}`,       SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_SM3DW,    LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&W&3DW Time=all)`,    `/game-3ds,2/game-style-1,w,3dw/time-all/list${path}`,     SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_SM3DW,    LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&W&3DW Time=all)`,      `/game-all/game-style-1,w,3dw/time-all/card${path}`,       ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_SM3DW,    CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&W&3DW Time=all)`,        `/game-2/game-style-1,w,3dw/time-all/card${path}`,         SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_SM3DW,    CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&W&3DW Time=all)`,      `/game-1,2/game-style-1,w,3dw/time-all/card${path}`,       SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_SM3DW,    CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&W&3DW Time=all)`,    `/game-3ds,2/game-style-1,w,3dw/time-all/card${path}`,     SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_SM3DW,    CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&W&3DW Time=all)`,     `/game-all/game-style-1,w,3dw/time-all/table${path}`,      ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_SM3DW,    TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&W&3DW Time=all)`,       `/game-2/game-style-1,w,3dw/time-all/table${path}`,        SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_SM3DW,    TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&W&3DW Time=all)`,     `/game-1,2/game-style-1,w,3dw/time-all/table${path}`,      SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_SM3DW,    TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&W&3DW Time=all)`,   `/game-3ds,2/game-style-1,w,3dw/time-all/table${path}`,    SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_AND_SMW_AND_SM3DW,    TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smw + sm3dw) --------------------
                //region -------------------- Game style (smb + nsmbu + sm3dw) --------------------

                new Route(`${name} (list Game=all GameStyle=1&U&3DW Time=all)`,      `/game-all/game-style-1,u,3dw/time-all/list${path}`,       ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&U&3DW Time=all)`,        `/game-2/game-style-1,u,3dw/time-all/list${path}`,         SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&U&3DW Time=all)`,      `/game-1,2/game-style-1,u,3dw/time-all/list${path}`,       SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&U&3DW Time=all)`,    `/game-3ds,2/game-style-1,u,3dw/time-all/list${path}`,     SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&U&3DW Time=all)`,      `/game-all/game-style-1,u,3dw/time-all/card${path}`,       ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&U&3DW Time=all)`,        `/game-2/game-style-1,u,3dw/time-all/card${path}`,         SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&U&3DW Time=all)`,      `/game-1,2/game-style-1,u,3dw/time-all/card${path}`,       SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&U&3DW Time=all)`,    `/game-3ds,2/game-style-1,u,3dw/time-all/card${path}`,     SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&U&3DW Time=all)`,     `/game-all/game-style-1,u,3dw/time-all/table${path}`,      ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&U&3DW Time=all)`,       `/game-2/game-style-1,u,3dw/time-all/table${path}`,        SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&U&3DW Time=all)`,     `/game-1,2/game-style-1,u,3dw/time-all/table${path}`,      SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&U&3DW Time=all)`,   `/game-3ds,2/game-style-1,u,3dw/time-all/table${path}`,    SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + nsmbu + sm3dw) --------------------
                //region -------------------- Game style (smb3 + smw + nsmbu) --------------------

                new Route(`${name} (list Game=all GameStyle=3&W&U Time=all)`,        `/game-all/game-style-3,w,u/time-all/list${path}`,         ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=3&W&U Time=all)`,          `/game-1/game-style-3,w,u/time-all/list${path}`,           SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=3&W&U Time=all)`,        `/game-3ds/game-style-3,w,u/time-all/list${path}`,         SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=3&W&U Time=all)`,          `/game-2/game-style-3,w,u/time-all/list${path}`,           SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new Route(`${name} (list Game=1&3DS GameStyle=3&W&U Time=all)`,      `/game-1,3ds/game-style-3,w,u/time-all/list${path}`,       SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=3&W&U Time=all)`,        `/game-1,2/game-style-3,w,u/time-all/list${path}`,         SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=3&W&U Time=all)`,      `/game-3ds,2/game-style-3,w,u/time-all/list${path}`,       SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=3&W&U Time=all)`,        `/game-all/game-style-3,w,u/time-all/card${path}`,         ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=3&W&U Time=all)`,          `/game-1/game-style-3,w,u/time-all/card${path}`,           SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=3&W&U Time=all)`,        `/game-3ds/game-style-3,w,u/time-all/card${path}`,         SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=3&W&U Time=all)`,          `/game-2/game-style-3,w,u/time-all/card${path}`,           SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new Route(`${name} (card Game=1&3DS GameStyle=3&W&U Time=all)`,      `/game-1,3ds/game-style-3,w,u/time-all/card${path}`,       SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=3&W&U Time=all)`,        `/game-1,2/game-style-3,w,u/time-all/card${path}`,         SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=3&W&U Time=all)`,      `/game-3ds,2/game-style-3,w,u/time-all/card${path}`,       SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=3&W&U Time=all)`,       `/game-all/game-style-3,w,u/time-all/table${path}`,        ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=3&W&U Time=all)`,         `/game-1/game-style-3,w,u/time-all/table${path}`,          SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=3&W&U Time=all)`,       `/game-3ds/game-style-3,w,u/time-all/table${path}`,        SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=3&W&U Time=all)`,         `/game-2/game-style-3,w,u/time-all/table${path}`,          SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new Route(`${name} (table Game=1&3DS GameStyle=3&W&U Time=all)`,     `/game-1,3ds/game-style-3,w,u/time-all/table${path}`,      SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=3&W&U Time=all)`,       `/game-1,2/game-style-3,w,u/time-all/table${path}`,        SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=3&W&U Time=all)`,     `/game-3ds,2/game-style-3,w,u/time-all/table${path}`,      SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + smw + nsmbu) --------------------
                //region -------------------- Game style (smb3 + smw + sm3dw) --------------------

                new Route(`${name} (list Game=all GameStyle=3&W&3DW Time=all)`,      `/game-all/game-style-3,w,3dw/time-all/list${path}`,       ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_SM3DW,   LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=3&W&3DW Time=all)`,        `/game-2/game-style-3,w,3dw/time-all/list${path}`,         SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_SM3DW,   LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=3&W&3DW Time=all)`,      `/game-1,2/game-style-3,w,3dw/time-all/list${path}`,       SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_SM3DW,   LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=3&W&3DW Time=all)`,    `/game-3ds,2/game-style-3,w,3dw/time-all/list${path}`,     SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_SM3DW,   LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=3&W&3DW Time=all)`,      `/game-all/game-style-3,w,3dw/time-all/card${path}`,       ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_SM3DW,   CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=3&W&3DW Time=all)`,        `/game-2/game-style-3,w,3dw/time-all/card${path}`,         SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_SM3DW,   CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=3&W&3DW Time=all)`,      `/game-1,2/game-style-3,w,3dw/time-all/card${path}`,       SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_SM3DW,   CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=3&W&3DW Time=all)`,    `/game-3ds,2/game-style-3,w,3dw/time-all/card${path}`,     SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_SM3DW,   CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=3&W&3DW Time=all)`,     `/game-all/game-style-3,w,3dw/time-all/table${path}`,      ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_SM3DW,   TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=3&W&3DW Time=all)`,       `/game-2/game-style-3,w,3dw/time-all/table${path}`,        SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_SM3DW,   TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=3&W&3DW Time=all)`,     `/game-1,2/game-style-3,w,3dw/time-all/table${path}`,      SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_SM3DW,   TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=3&W&3DW Time=all)`,   `/game-3ds,2/game-style-3,w,3dw/time-all/table${path}`,    SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB3_AND_SMW_AND_SM3DW,   TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + smw + sm3dw) --------------------
                //region -------------------- Game style (smb3 + nsmbu + sm3dw) --------------------

                new Route(`${name} (list Game=all GameStyle=3&U&3DW Time=all)`,      `/game-all/game-style-3,u,3dw/time-all/list${path}`,       ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU_AND_SM3DW, LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=3&U&3DW Time=all)`,        `/game-2/game-style-3,u,3dw/time-all/list${path}`,         SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU_AND_SM3DW, LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=3&U&3DW Time=all)`,      `/game-1,2/game-style-3,u,3dw/time-all/list${path}`,       SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU_AND_SM3DW, LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=3&U&3DW Time=all)`,    `/game-3ds,2/game-style-3,u,3dw/time-all/list${path}`,     SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU_AND_SM3DW, LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=3&U&3DW Time=all)`,      `/game-all/game-style-3,u,3dw/time-all/card${path}`,       ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU_AND_SM3DW, CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=3&U&3DW Time=all)`,        `/game-2/game-style-3,u,3dw/time-all/card${path}`,         SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU_AND_SM3DW, CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=3&U&3DW Time=all)`,      `/game-1,2/game-style-3,u,3dw/time-all/card${path}`,       SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU_AND_SM3DW, CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=3&U&3DW Time=all)`,    `/game-3ds,2/game-style-3,u,3dw/time-all/card${path}`,     SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU_AND_SM3DW, CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=3&U&3DW Time=all)`,     `/game-all/game-style-3,u,3dw/time-all/table${path}`,      ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU_AND_SM3DW, TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=3&U&3DW Time=all)`,       `/game-2/game-style-3,u,3dw/time-all/table${path}`,        SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU_AND_SM3DW, TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=3&U&3DW Time=all)`,     `/game-1,2/game-style-3,u,3dw/time-all/table${path}`,      SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU_AND_SM3DW, TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=3&U&3DW Time=all)`,   `/game-3ds,2/game-style-3,u,3dw/time-all/table${path}`,    SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMB3_AND_NSMBU_AND_SM3DW, TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + nsmbu + sm3dw) --------------------
                //region -------------------- Game style (smw + nsmbu + sm3dw) --------------------

                new Route(`${name} (list Game=all GameStyle=W&U&3DW Time=all)`,      `/game-all/game-style-w,u,3dw/time-all/list${path}`,       ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=W&U&3DW Time=all)`,        `/game-2/game-style-w,u,3dw/time-all/list${path}`,         SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=W&U&3DW Time=all)`,      `/game-1,2/game-style-w,u,3dw/time-all/list${path}`,       SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=W&U&3DW Time=all)`,    `/game-3ds,2/game-style-w,u,3dw/time-all/list${path}`,     SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=W&U&3DW Time=all)`,      `/game-all/game-style-w,u,3dw/time-all/card${path}`,       ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=W&U&3DW Time=all)`,        `/game-2/game-style-w,u,3dw/time-all/card${path}`,         SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=W&U&3DW Time=all)`,      `/game-1,2/game-style-w,u,3dw/time-all/card${path}`,       SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=W&U&3DW Time=all)`,    `/game-3ds,2/game-style-w,u,3dw/time-all/card${path}`,     SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=W&U&3DW Time=all)`,     `/game-all/game-style-w,u,3dw/time-all/table${path}`,      ALL_GAMES,    ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=W&U&3DW Time=all)`,       `/game-2/game-style-w,u,3dw/time-all/table${path}`,        SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=W&U&3DW Time=all)`,     `/game-1,2/game-style-w,u,3dw/time-all/table${path}`,      SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=W&U&3DW Time=all)`,   `/game-3ds,2/game-style-w,u,3dw/time-all/table${path}`,    SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.SMW_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),

                //endregion -------------------- Game style (smw + nsmbu + sm3dw) --------------------

                //region -------------------- Game style (smb + smb3 + smw + nsmbu) --------------------

                new Route(`${name} (list Game=all GameStyle=1&3&W&U Time=all)`,      `/game-all/game-style-1,3,w,u/time-all/list${path}`,       ALL_GAMES,    ALL_TIMES, GameStylesPossibility.NOT_SM3DW,                LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=1&3&W&U Time=all)`,        `/game-1/game-style-1,3,w,u/time-all/list${path}`,         SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.NOT_SM3DW,                LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=1&3&W&U Time=all)`,      `/game-3ds/game-style-1,3,w,u/time-all/list${path}`,       SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.NOT_SM3DW,                LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&3&W&U Time=all)`,        `/game-2/game-style-1,3,w,u/time-all/list${path}`,         SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.NOT_SM3DW,                LIST,  routeCallback,),
                new Route(`${name} (list Game=1&3DS GameStyle=1&3&W&U Time=all)`,    `/game-1,3ds/game-style-1,3,w,u/time-all/list${path}`,     SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.NOT_SM3DW,                LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&3&W&U Time=all)`,      `/game-1,2/game-style-1,3,w,u/time-all/list${path}`,       SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.NOT_SM3DW,                LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&3&W&U Time=all)`,    `/game-3ds,2/game-style-1,3,w,u/time-all/list${path}`,     SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.NOT_SM3DW,                LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&3&W&U Time=all)`,      `/game-all/game-style-1,3,w,u/time-all/card${path}`,       ALL_GAMES,    ALL_TIMES, GameStylesPossibility.NOT_SM3DW,                CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=1&3&W&U Time=all)`,        `/game-1/game-style-1,3,w,u/time-all/card${path}`,         SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.NOT_SM3DW,                CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=1&3&W&U Time=all)`,      `/game-3ds/game-style-1,3,w,u/time-all/card${path}`,       SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.NOT_SM3DW,                CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&3&W&U Time=all)`,        `/game-2/game-style-1,3,w,u/time-all/card${path}`,         SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.NOT_SM3DW,                CARD,  routeCallback,),
                new Route(`${name} (card Game=1&3DS GameStyle=1&3&W&U Time=all)`,    `/game-1,3ds/game-style-1,3,w,u/time-all/card${path}`,     SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.NOT_SM3DW,                CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&3&W&U Time=all)`,      `/game-1,2/game-style-1,3,w,u/time-all/card${path}`,       SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.NOT_SM3DW,                CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&3&W&U Time=all)`,    `/game-3ds,2/game-style-1,3,w,u/time-all/card${path}`,     SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.NOT_SM3DW,                CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&3&W&U Time=all)`,     `/game-all/game-style-1,3,w,u/time-all/table${path}`,      ALL_GAMES,    ALL_TIMES, GameStylesPossibility.NOT_SM3DW,                TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=1&3&W&U Time=all)`,       `/game-1/game-style-1,3,w,u/time-all/table${path}`,        SMM1_ONLY,    ALL_TIMES, GameStylesPossibility.NOT_SM3DW,                TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=1&3&W&U Time=all)`,     `/game-3ds/game-style-1,3,w,u/time-all/table${path}`,      SMM3DS_ONLY,  ALL_TIMES, GameStylesPossibility.NOT_SM3DW,                TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&3&W&U Time=all)`,       `/game-2/game-style-1,3,w,u/time-all/table${path}`,        SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.NOT_SM3DW,                TABLE, routeCallback,),
                new Route(`${name} (table Game=1&3DS GameStyle=1&3&W&U Time=all)`,   `/game-1,3ds/game-style-1,3,w,u/time-all/table${path}`,    SMM1_AND_3DS, ALL_TIMES, GameStylesPossibility.NOT_SM3DW,                TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&3&W&U Time=all)`,     `/game-1,2/game-style-1,3,w,u/time-all/table${path}`,      SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.NOT_SM3DW,                TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&3&W&U Time=all)`,   `/game-3ds,2/game-style-1,3,w,u/time-all/table${path}`,    SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.NOT_SM3DW,                TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + smw + nsmbu) --------------------
                //region -------------------- Game style (smb3 + smw + nsmbu + sm3dw) --------------------

                new Route(`${name} (list Game=all GameStyle=3&W&U&3DW Time=all)`,    `/game-all/game-style-3,w,u,3dw/time-all/list${path}`,     ALL_GAMES,    ALL_TIMES, GameStylesPossibility.NOT_SMB,                  LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=3&W&U&3DW Time=all)`,      `/game-2/game-style-3,w,u,3dw/time-all/list${path}`,       SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.NOT_SMB,                  LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=3&W&U&3DW Time=all)`,    `/game-1,2/game-style-3,w,u,3dw/time-all/list${path}`,     SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.NOT_SMB,                  LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=3&W&U&3DW Time=all)`,  `/game-3ds,2/game-style-3,w,u,3dw/time-all/list${path}`,   SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.NOT_SMB,                  LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=3&W&U&3DW Time=all)`,    `/game-all/game-style-3,w,u,3dw/time-all/card${path}`,     ALL_GAMES,    ALL_TIMES, GameStylesPossibility.NOT_SMB,                  CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=3&W&U&3DW Time=all)`,      `/game-2/game-style-3,w,u,3dw/time-all/card${path}`,       SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.NOT_SMB,                  CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=3&W&U&3DW Time=all)`,    `/game-1,2/game-style-3,w,u,3dw/time-all/card${path}`,     SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.NOT_SMB,                  CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=3&W&U&3DW Time=all)`,  `/game-3ds,2/game-style-3,w,u,3dw/time-all/card${path}`,   SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.NOT_SMB,                  CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=3&W&U&3DW Time=all)`,   `/game-all/game-style-3,w,u,3dw/time-all/table${path}`,    ALL_GAMES,    ALL_TIMES, GameStylesPossibility.NOT_SMB,                  TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=3&W&U&3DW Time=all)`,     `/game-2/game-style-3,w,u,3dw/time-all/table${path}`,      SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.NOT_SMB,                  TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=3&W&U&3DW Time=all)`,   `/game-1,2/game-style-3,w,u,3dw/time-all/table${path}`,    SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.NOT_SMB,                  TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=3&W&U&3DW Time=all)`, `/game-3ds,2/game-style-3,w,u,3dw/time-all/table${path}`,  SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.NOT_SMB,                  TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + smw + nsmbu + sm3dw) --------------------
                //region -------------------- Game style (smb + smw + nsmbu + sm3dw) --------------------

                new Route(`${name} (list Game=all GameStyle=1&W&U&3DW Time=all)`,    `/game-all/game-style-1,w,u,3dw/time-all/list${path}`,     ALL_GAMES,    ALL_TIMES, GameStylesPossibility.NOT_SMB3,                 LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&W&U&3DW Time=all)`,      `/game-2/game-style-1,w,u,3dw/time-all/list${path}`,       SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.NOT_SMB3,                 LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&W&U&3DW Time=all)`,    `/game-1,2/game-style-1,w,u,3dw/time-all/list${path}`,     SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.NOT_SMB3,                 LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&W&U&3DW Time=all)`,  `/game-3ds,2/game-style-1,w,u,3dw/time-all/list${path}`,   SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.NOT_SMB3,                 LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&W&U&3DW Time=all)`,    `/game-all/game-style-1,w,u,3dw/time-all/card${path}`,     ALL_GAMES,    ALL_TIMES, GameStylesPossibility.NOT_SMB3,                 CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&W&U&3DW Time=all)`,      `/game-2/game-style-1,w,u,3dw/time-all/card${path}`,       SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.NOT_SMB3,                 CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&W&U&3DW Time=all)`,    `/game-1,2/game-style-1,w,u,3dw/time-all/card${path}`,     SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.NOT_SMB3,                 CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&W&U&3DW Time=all)`,  `/game-3ds,2/game-style-1,w,u,3dw/time-all/card${path}`,   SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.NOT_SMB3,                 CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&W&U&3DW Time=all)`,   `/game-all/game-style-1,w,u,3dw/time-all/table${path}`,    ALL_GAMES,    ALL_TIMES, GameStylesPossibility.NOT_SMB3,                 TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&W&U&3DW Time=all)`,     `/game-2/game-style-1,w,u,3dw/time-all/table${path}`,      SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.NOT_SMB3,                 TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&W&U&3DW Time=all)`,   `/game-1,2/game-style-1,w,u,3dw/time-all/table${path}`,    SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.NOT_SMB3,                 TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&W&U&3DW Time=all)`, `/game-3ds,2/game-style-1,w,u,3dw/time-all/table${path}`,  SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.NOT_SMB3,                 TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smw + nsmbu + sm3dw) --------------------
                //region -------------------- Game style (smb + smb3 + nsmbu + sm3dw) --------------------

                new Route(`${name} (list Game=all GameStyle=1&3&U&3DW Time=all)`,    `/game-all/game-style-1,3,u,3dw/time-all/list${path}`,     ALL_GAMES,    ALL_TIMES, GameStylesPossibility.NOT_SMW,                  LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&3&U&3DW Time=all)`,      `/game-2/game-style-1,3,u,3dw/time-all/list${path}`,       SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.NOT_SMW,                  LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&3&U&3DW Time=all)`,    `/game-1,2/game-style-1,3,u,3dw/time-all/list${path}`,     SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.NOT_SMW,                  LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&3&U&3DW Time=all)`,  `/game-3ds,2/game-style-1,3,u,3dw/time-all/list${path}`,   SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.NOT_SMW,                  LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&3&U&3DW Time=all)`,    `/game-all/game-style-1,3,u,3dw/time-all/card${path}`,     ALL_GAMES,    ALL_TIMES, GameStylesPossibility.NOT_SMW,                  CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&3&U&3DW Time=all)`,      `/game-2/game-style-1,3,u,3dw/time-all/card${path}`,       SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.NOT_SMW,                  CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&3&U&3DW Time=all)`,    `/game-1,2/game-style-1,3,u,3dw/time-all/card${path}`,     SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.NOT_SMW,                  CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&3&U&3DW Time=all)`,  `/game-3ds,2/game-style-1,3,u,3dw/time-all/card${path}`,   SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.NOT_SMW,                  CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&3&U&3DW Time=all)`,   `/game-all/game-style-1,3,u,3dw/time-all/table${path}`,    ALL_GAMES,    ALL_TIMES, GameStylesPossibility.NOT_SMW,                  TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&3&U&3DW Time=all)`,     `/game-2/game-style-1,3,u,3dw/time-all/table${path}`,      SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.NOT_SMW,                  TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&3&U&3DW Time=all)`,   `/game-1,2/game-style-1,3,u,3dw/time-all/table${path}`,    SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.NOT_SMW,                  TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&3&U&3DW Time=all)`, `/game-3ds,2/game-style-1,3,u,3dw/time-all/table${path}`,  SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.NOT_SMW,                  TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + nsmbu + sm3dw) --------------------
                //region -------------------- Game style (smb + smb3 + smw + sm3dw) --------------------

                new Route(`${name} (list Game=all GameStyle=1&3&W&3DW Time=all)`,    `/game-all/game-style-1,3,w,3dw/time-all/list${path}`,     ALL_GAMES,    ALL_TIMES, GameStylesPossibility.NOT_NSMBU,                LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&3&W&3DW Time=all)`,      `/game-2/game-style-1,3,w,3dw/time-all/list${path}`,       SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.NOT_NSMBU,                LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&3&W&3DW Time=all)`,    `/game-1,2/game-style-1,3,w,3dw/time-all/list${path}`,     SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.NOT_NSMBU,                LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&3&W&3DW Time=all)`,  `/game-3ds,2/game-style-1,3,w,3dw/time-all/list${path}`,   SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.NOT_NSMBU,                LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&3&W&3DW Time=all)`,    `/game-all/game-style-1,3,w,3dw/time-all/card${path}`,     ALL_GAMES,    ALL_TIMES, GameStylesPossibility.NOT_NSMBU,                CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&3&W&3DW Time=all)`,      `/game-2/game-style-1,3,w,3dw/time-all/card${path}`,       SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.NOT_NSMBU,                CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&3&W&3DW Time=all)`,    `/game-1,2/game-style-1,3,w,3dw/time-all/card${path}`,     SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.NOT_NSMBU,                CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&3&W&3DW Time=all)`,  `/game-3ds,2/game-style-1,3,w,3dw/time-all/card${path}`,   SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.NOT_NSMBU,                CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&3&W&3DW Time=all)`,   `/game-all/game-style-1,3,w,3dw/time-all/table${path}`,    ALL_GAMES,    ALL_TIMES, GameStylesPossibility.NOT_NSMBU,                TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&3&W&3DW Time=all)`,     `/game-2/game-style-1,3,w,3dw/time-all/table${path}`,      SMM2_ONLY,    ALL_TIMES, GameStylesPossibility.NOT_NSMBU,                TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&3&W&3DW Time=all)`,   `/game-1,2/game-style-1,3,w,3dw/time-all/table${path}`,    SMM1_AND_2,   ALL_TIMES, GameStylesPossibility.NOT_NSMBU,                TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&3&W&3DW Time=all)`, `/game-3ds,2/game-style-1,3,w,3dw/time-all/table${path}`,  SMM3DS_AND_2, ALL_TIMES, GameStylesPossibility.NOT_NSMBU,                TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + smw + sm3dw) --------------------

                //endregion -------------------- Time (all) --------------------
                //region -------------------- Time (day) --------------------

                //region -------------------- Game style (all) --------------------

                new Route(`${name} (list Game=all GameStyle=all Time=day)`,          `/game-all/game-style-all/time-day/list${path}`,           ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.ALL,          LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=all Time=day)`,            `/game-1/game-style-all/time-day/list${path}`,             SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.ALL,          LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=all Time=day)`,          `/game-3ds/game-style-all/time-day/list${path}`,           SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.ALL,          LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=all Time=day)`,            `/game-2/game-style-all/time-day/list${path}`,             SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.ALL,          LIST,  routeCallback,),
                new Route(`${name} (list Game=1&3DS GameStyle=all Time=day)`,        `/game-1,3ds/game-style-all/time-day/list${path}`,         SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.ALL,          LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=all Time=day)`,          `/game-1,2/game-style-all/time-day/list${path}`,           SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.ALL,          LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=all Time=day)`,        `/game-3ds,2/game-style-all/time-day/list${path}`,         SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.ALL,          LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=all Time=day)`,          `/game-all/game-style-all/time-day/card${path}`,           ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.ALL,          CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=all Time=day)`,            `/game-1/game-style-all/time-day/card${path}`,             SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.ALL,          CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=all Time=day)`,          `/game-3ds/game-style-all/time-day/card${path}`,           SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.ALL,          CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=all Time=day)`,            `/game-2/game-style-all/time-day/card${path}`,             SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.ALL,          CARD,  routeCallback,),
                new Route(`${name} (card Game=1&3DS GameStyle=all Time=day)`,        `/game-1,3ds/game-style-all/time-day/card${path}`,         SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.ALL,          CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=all Time=day)`,          `/game-1,2/game-style-all/time-day/card${path}`,           SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.ALL,          CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=all Time=day)`,        `/game-3ds,2/game-style-all/time-day/card${path}`,         SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.ALL,          CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=all Time=day)`,         `/game-all/game-style-all/time-day/table${path}`,          ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.ALL,          TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=all Time=day)`,           `/game-1/game-style-all/time-day/table${path}`,            SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.ALL,          TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=all Time=day)`,         `/game-3ds/game-style-all/time-day/table${path}`,          SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.ALL,          TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=all Time=day)`,           `/game-2/game-style-all/time-day/table${path}`,            SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.ALL,          TABLE, routeCallback,),
                new Route(`${name} (table Game=1&3DS GameStyle=all Time=day)`,       `/game-1,3ds/game-style-all/time-day/table${path}`,        SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.ALL,          TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=all Time=day)`,         `/game-1,2/game-style-all/time-day/table${path}`,          SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.ALL,          TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=all Time=day)`,       `/game-3ds,2/game-style-all/time-day/table${path}`,        SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.ALL,          TABLE, routeCallback,),

                //endregion -------------------- Game style (all) --------------------

                //region -------------------- Game style (smb) --------------------

                new Route(`${name} (list Game=all GameStyle=1 Time=day)`,            `/game-all/game-style-1/time-day/list${path}`,             ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_ONLY,                 LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=1 Time=day)`,              `/game-1/game-style-1/time-day/list${path}`,               SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_ONLY,                 LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=1 Time=day)`,            `/game-3ds/game-style-1/time-day/list${path}`,             SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB_ONLY,                 LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1 Time=day)`,              `/game-2/game-style-1/time-day/list${path}`,               SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_ONLY,                 LIST,  routeCallback,),
                new Route(`${name} (list Game=1&3DS GameStyle=1 Time=day)`,          `/game-1,3ds/game-style-1/time-day/list${path}`,           SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB_ONLY,                 LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1 Time=day)`,            `/game-1,2/game-style-1/time-day/list${path}`,             SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_ONLY,                 LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1 Time=day)`,          `/game-3ds,2/game-style-1/time-day/list${path}`,           SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_ONLY,                 LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1 Time=day)`,            `/game-all/game-style-1/time-day/card${path}`,             ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_ONLY,                 CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=1 Time=day)`,              `/game-1/game-style-1/time-day/card${path}`,               SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_ONLY,                 CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=1 Time=day)`,            `/game-3ds/game-style-1/time-day/card${path}`,             SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB_ONLY,                 CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1 Time=day)`,              `/game-2/game-style-1/time-day/card${path}`,               SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_ONLY,                 CARD,  routeCallback,),
                new Route(`${name} (card Game=1&3DS GameStyle=1 Time=day)`,          `/game-1,3ds/game-style-1/time-day/card${path}`,           SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB_ONLY,                 CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1 Time=day)`,            `/game-1,2/game-style-1/time-day/card${path}`,             SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_ONLY,                 CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1 Time=day)`,          `/game-3ds,2/game-style-1/time-day/card${path}`,           SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_ONLY,                 CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1 Time=day)`,           `/game-all/game-style-1/time-day/table${path}`,            ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_ONLY,                 TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=1 Time=day)`,             `/game-1/game-style-1/time-day/table${path}`,              SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_ONLY,                 TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=1 Time=day)`,           `/game-3ds/game-style-1/time-day/table${path}`,            SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB_ONLY,                 TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1 Time=day)`,             `/game-2/game-style-1/time-day/table${path}`,              SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_ONLY,                 TABLE, routeCallback,),
                new Route(`${name} (table Game=1&3DS GameStyle=1 Time=day)`,         `/game-1,3ds/game-style-1/time-day/table${path}`,          SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB_ONLY,                 TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1 Time=day)`,           `/game-1,2/game-style-1/time-day/table${path}`,            SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_ONLY,                 TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1 Time=day)`,         `/game-3ds,2/game-style-1/time-day/table${path}`,          SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_ONLY,                 TABLE, routeCallback,),

                //endregion -------------------- Game style (smb) --------------------
                //region -------------------- Game style (smb3) --------------------

                new Route(`${name} (list Game=all GameStyle=3 Time=day)`,            `/game-all/game-style-3/time-day/list${path}`,             ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB3_ONLY,                LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=3 Time=day)`,              `/game-1/game-style-3/time-day/list${path}`,               SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_ONLY,                LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=3 Time=day)`,            `/game-3ds/game-style-3/time-day/list${path}`,             SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB3_ONLY,                LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=3 Time=day)`,              `/game-2/game-style-3/time-day/list${path}`,               SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_ONLY,                LIST,  routeCallback,),
                new Route(`${name} (list Game=1&3DS GameStyle=3 Time=day)`,          `/game-1,3ds/game-style-3/time-day/list${path}`,           SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB3_ONLY,                LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=3 Time=day)`,            `/game-1,2/game-style-3/time-day/list${path}`,             SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB3_ONLY,                LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=3 Time=day)`,          `/game-3ds,2/game-style-3/time-day/list${path}`,           SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB3_ONLY,                LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=3 Time=day)`,            `/game-all/game-style-3/time-day/card${path}`,             ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB3_ONLY,                CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=3 Time=day)`,              `/game-1/game-style-3/time-day/card${path}`,               SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_ONLY,                CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=3 Time=day)`,            `/game-3ds/game-style-3/time-day/card${path}`,             SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB3_ONLY,                CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=3 Time=day)`,              `/game-2/game-style-3/time-day/card${path}`,               SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_ONLY,                CARD,  routeCallback,),
                new Route(`${name} (card Game=1&3DS GameStyle=3 Time=day)`,          `/game-1,3ds/game-style-3/time-day/card${path}`,           SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB3_ONLY,                CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=3 Time=day)`,            `/game-1,2/game-style-3/time-day/card${path}`,             SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB3_ONLY,                CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=3 Time=day)`,          `/game-3ds,2/game-style-3/time-day/card${path}`,           SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB3_ONLY,                CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=3 Time=day)`,           `/game-all/game-style-3/time-day/table${path}`,            ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB3_ONLY,                TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=3 Time=day)`,             `/game-1/game-style-3/time-day/table${path}`,              SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_ONLY,                TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=3 Time=day)`,           `/game-3ds/game-style-3/time-day/table${path}`,            SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB3_ONLY,                TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=3 Time=day)`,             `/game-2/game-style-3/time-day/table${path}`,              SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_ONLY,                TABLE, routeCallback,),
                new Route(`${name} (table Game=1&3DS GameStyle=3 Time=day)`,         `/game-1,3ds/game-style-3/time-day/table${path}`,          SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB3_ONLY,                TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=3 Time=day)`,           `/game-1,2/game-style-3/time-day/table${path}`,            SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB3_ONLY,                TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=3 Time=day)`,         `/game-3ds,2/game-style-3/time-day/table${path}`,          SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB3_ONLY,                TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3) --------------------
                //region -------------------- Game style (smw) --------------------

                new Route(`${name} (list Game=all GameStyle=W Time=day)`,            `/game-all/game-style-w/time-day/list${path}`,             ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMW_ONLY,                 LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=W Time=day)`,              `/game-1/game-style-w/time-day/list${path}`,               SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMW_ONLY,                 LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=W Time=day)`,            `/game-3ds/game-style-w/time-day/list${path}`,             SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMW_ONLY,                 LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=W Time=day)`,              `/game-2/game-style-w/time-day/list${path}`,               SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMW_ONLY,                 LIST,  routeCallback,),
                new Route(`${name} (list Game=1&3DS GameStyle=W Time=day)`,          `/game-1,3ds/game-style-w/time-day/list${path}`,           SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMW_ONLY,                 LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=W Time=day)`,            `/game-1,2/game-style-w/time-day/list${path}`,             SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMW_ONLY,                 LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=W Time=day)`,          `/game-3ds,2/game-style-w/time-day/list${path}`,           SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMW_ONLY,                 LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=W Time=day)`,            `/game-all/game-style-w/time-day/card${path}`,             ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMW_ONLY,                 CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=W Time=day)`,              `/game-1/game-style-w/time-day/card${path}`,               SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMW_ONLY,                 CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=W Time=day)`,            `/game-3ds/game-style-w/time-day/card${path}`,             SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMW_ONLY,                 CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=W Time=day)`,              `/game-2/game-style-w/time-day/card${path}`,               SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMW_ONLY,                 CARD,  routeCallback,),
                new Route(`${name} (card Game=1&3DS GameStyle=W Time=day)`,          `/game-1,3ds/game-style-w/time-day/card${path}`,           SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMW_ONLY,                 CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=W Time=day)`,            `/game-1,2/game-style-w/time-day/card${path}`,             SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMW_ONLY,                 CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=W Time=day)`,          `/game-3ds,2/game-style-w/time-day/card${path}`,           SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMW_ONLY,                 CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=W Time=day)`,           `/game-all/game-style-w/time-day/table${path}`,            ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMW_ONLY,                 TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=W Time=day)`,             `/game-1/game-style-w/time-day/table${path}`,              SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMW_ONLY,                 TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=W Time=day)`,           `/game-3ds/game-style-w/time-day/table${path}`,            SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMW_ONLY,                 TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=W Time=day)`,             `/game-2/game-style-w/time-day/table${path}`,              SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMW_ONLY,                 TABLE, routeCallback,),
                new Route(`${name} (table Game=1&3DS GameStyle=W Time=day)`,         `/game-1,3ds/game-style-w/time-day/table${path}`,          SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMW_ONLY,                 TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=W Time=day)`,           `/game-1,2/game-style-w/time-day/table${path}`,            SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMW_ONLY,                 TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=W Time=day)`,         `/game-3ds,2/game-style-w/time-day/table${path}`,          SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMW_ONLY,                 TABLE, routeCallback,),

                //endregion -------------------- Game style (smw) --------------------
                //region -------------------- Game style (nsmbu) --------------------

                new Route(`${name} (list Game=all GameStyle=U Time=day)`,            `/game-all/game-style-u/time-day/list${path}`,             ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.NSMBU_ONLY,               LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=U Time=day)`,              `/game-1/game-style-u/time-day/list${path}`,               SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.NSMBU_ONLY,               LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=U Time=day)`,            `/game-3ds/game-style-u/time-day/list${path}`,             SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.NSMBU_ONLY,               LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=U Time=day)`,              `/game-2/game-style-u/time-day/list${path}`,               SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.NSMBU_ONLY,               LIST,  routeCallback,),
                new Route(`${name} (list Game=1&3DS GameStyle=U Time=day)`,          `/game-1,3ds/game-style-u/time-day/list${path}`,           SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.NSMBU_ONLY,               LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=U Time=day)`,            `/game-1,2/game-style-u/time-day/list${path}`,             SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.NSMBU_ONLY,               LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=U Time=day)`,          `/game-3ds,2/game-style-u/time-day/list${path}`,           SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.NSMBU_ONLY,               LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=U Time=day)`,            `/game-all/game-style-u/time-day/card${path}`,             ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.NSMBU_ONLY,               CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=U Time=day)`,              `/game-1/game-style-u/time-day/card${path}`,               SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.NSMBU_ONLY,               CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=U Time=day)`,            `/game-3ds/game-style-u/time-day/card${path}`,             SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.NSMBU_ONLY,               CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=U Time=day)`,              `/game-2/game-style-u/time-day/card${path}`,               SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.NSMBU_ONLY,               CARD,  routeCallback,),
                new Route(`${name} (card Game=1&3DS GameStyle=U Time=day)`,          `/game-1,3ds/game-style-u/time-day/card${path}`,           SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.NSMBU_ONLY,               CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=U Time=day)`,            `/game-1,2/game-style-u/time-day/card${path}`,             SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.NSMBU_ONLY,               CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=U Time=day)`,          `/game-3ds,2/game-style-u/time-day/card${path}`,           SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.NSMBU_ONLY,               CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=U Time=day)`,           `/game-all/game-style-u/time-day/table${path}`,            ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.NSMBU_ONLY,               TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=U Time=day)`,             `/game-1/game-style-u/time-day/table${path}`,              SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.NSMBU_ONLY,               TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=U Time=day)`,           `/game-3ds/game-style-u/time-day/table${path}`,            SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.NSMBU_ONLY,               TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=U Time=day)`,             `/game-2/game-style-u/time-day/table${path}`,              SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.NSMBU_ONLY,               TABLE, routeCallback,),
                new Route(`${name} (table Game=1&3DS GameStyle=U Time=day)`,         `/game-1,3ds/game-style-u/time-day/table${path}`,          SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.NSMBU_ONLY,               TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=U Time=day)`,           `/game-1,2/game-style-u/time-day/table${path}`,            SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.NSMBU_ONLY,               TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=U Time=day)`,         `/game-3ds,2/game-style-u/time-day/table${path}`,          SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.NSMBU_ONLY,               TABLE, routeCallback,),

                //endregion -------------------- Game style (nsmbu) --------------------
                //region -------------------- Game style (sm3dw) --------------------

                new Route(`${name} (list Game=all GameStyle=3DW Time=day)`,          `/game-all/game-style-3dw/time-day/list${path}`,           ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SM3DW_ONLY,               LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=3DW Time=day)`,            `/game-2/game-style-3dw/time-day/list${path}`,             SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SM3DW_ONLY,               LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=3DW Time=day)`,          `/game-1,2/game-style-3dw/time-day/list${path}`,           SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SM3DW_ONLY,               LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=3DW Time=day)`,        `/game-3ds,2/game-style-3dw/time-day/list${path}`,         SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SM3DW_ONLY,               LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=3DW Time=day)`,          `/game-all/game-style-3dw/time-day/card${path}`,           ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SM3DW_ONLY,               CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=3DW Time=day)`,            `/game-2/game-style-3dw/time-day/card${path}`,             SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SM3DW_ONLY,               CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=3DW Time=day)`,          `/game-1,2/game-style-3dw/time-day/card${path}`,           SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SM3DW_ONLY,               CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=3DW Time=day)`,        `/game-3ds,2/game-style-3dw/time-day/card${path}`,         SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SM3DW_ONLY,               CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=3DW Time=day)`,         `/game-all/game-style-3dw/time-day/table${path}`,          ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SM3DW_ONLY,               TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=3DW Time=day)`,           `/game-2/game-style-3dw/time-day/table${path}`,            SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SM3DW_ONLY,               TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=3DW Time=day)`,         `/game-1,2/game-style-3dw/time-day/table${path}`,          SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SM3DW_ONLY,               TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=3DW Time=day)`,       `/game-3ds,2/game-style-3dw/time-day/table${path}`,        SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SM3DW_ONLY,               TABLE, routeCallback,),

                //endregion -------------------- Game style (sm3dw) --------------------

                //region -------------------- Game style (smb + smb3) --------------------

                new Route(`${name} (list Game=all GameStyle=1&3 Time=day)`,          `/game-all/game-style-1,3/time-day/list${path}`,           ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3,             LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=1&3 Time=day)`,            `/game-1/game-style-1,3/time-day/list${path}`,             SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3,             LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=1&3 Time=day)`,          `/game-3ds/game-style-1,3/time-day/list${path}`,           SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3,             LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&3 Time=day)`,            `/game-2/game-style-1,3/time-day/list${path}`,             SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3,             LIST,  routeCallback,),
                new Route(`${name} (list Game=1&3DS GameStyle=1&3 Time=day)`,        `/game-1,3ds/game-style-1,3/time-day/list${path}`,         SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3,             LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&3 Time=day)`,          `/game-1,2/game-style-1,3/time-day/list${path}`,           SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3,             LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&3 Time=day)`,        `/game-3ds,2/game-style-1,3/time-day/list${path}`,         SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3,             LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&3 Time=day)`,          `/game-all/game-style-1,3/time-day/card${path}`,           ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3,             CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=1&3 Time=day)`,            `/game-1/game-style-1,3/time-day/card${path}`,             SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3,             CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=1&3 Time=day)`,          `/game-3ds/game-style-1,3/time-day/card${path}`,           SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3,             CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&3 Time=day)`,            `/game-2/game-style-1,3/time-day/card${path}`,             SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3,             CARD,  routeCallback,),
                new Route(`${name} (card Game=1&3DS GameStyle=1&3 Time=day)`,        `/game-1,3ds/game-style-1,3/time-day/card${path}`,         SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3,             CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&3 Time=day)`,          `/game-1,2/game-style-1,3/time-day/card${path}`,           SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3,             CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&3 Time=day)`,        `/game-3ds,2/game-style-1,3/time-day/card${path}`,         SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3,             CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&3 Time=day)`,         `/game-all/game-style-1,3/time-day/table${path}`,          ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3,             TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=1&3 Time=day)`,           `/game-1/game-style-1,3/time-day/table${path}`,            SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3,             TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=1&3 Time=day)`,         `/game-3ds/game-style-1,3/time-day/table${path}`,          SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3,             TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&3 Time=day)`,           `/game-2/game-style-1,3/time-day/table${path}`,            SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3,             TABLE, routeCallback,),
                new Route(`${name} (table Game=1&3DS GameStyle=1&3 Time=day)`,       `/game-1,3ds/game-style-1,3/time-day/table${path}`,        SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3,             TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&3 Time=day)`,         `/game-1,2/game-style-1,3/time-day/table${path}`,          SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3,             TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&3 Time=day)`,       `/game-3ds,2/game-style-1,3/time-day/table${path}`,        SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3,             TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3) --------------------
                //region -------------------- Game style (smb + smw) --------------------

                new Route(`${name} (list Game=all GameStyle=1&W Time=day)`,          `/game-all/game-style-1,w/time-day/list${path}`,           ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW,              LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=1&W Time=day)`,            `/game-1/game-style-1,w/time-day/list${path}`,             SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW,              LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=1&W Time=day)`,          `/game-3ds/game-style-1,w/time-day/list${path}`,           SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW,              LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&W Time=day)`,            `/game-2/game-style-1,w/time-day/list${path}`,             SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW,              LIST,  routeCallback,),
                new Route(`${name} (list Game=1&3DS GameStyle=1&W Time=day)`,        `/game-1,3ds/game-style-1,w/time-day/list${path}`,         SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW,              LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&W Time=day)`,          `/game-1,2/game-style-1,w/time-day/list${path}`,           SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW,              LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&W Time=day)`,        `/game-3ds,2/game-style-1,w/time-day/list${path}`,         SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW,              LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&W Time=day)`,          `/game-all/game-style-1,w/time-day/card${path}`,           ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW,              CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=1&W Time=day)`,            `/game-1/game-style-1,w/time-day/card${path}`,             SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW,              CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=1&W Time=day)`,          `/game-3ds/game-style-1,w/time-day/card${path}`,           SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW,              CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&W Time=day)`,            `/game-2/game-style-1,w/time-day/card${path}`,             SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW,              CARD,  routeCallback,),
                new Route(`${name} (card Game=1&3DS GameStyle=1&W Time=day)`,        `/game-1,3ds/game-style-1,w/time-day/card${path}`,         SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW,              CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&W Time=day)`,          `/game-1,2/game-style-1,w/time-day/card${path}`,           SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW,              CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&W Time=day)`,        `/game-3ds,2/game-style-1,w/time-day/card${path}`,         SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW,              CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&W Time=day)`,         `/game-all/game-style-1,w/time-day/table${path}`,          ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW,              TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=1&W Time=day)`,           `/game-1/game-style-1,w/time-day/table${path}`,            SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW,              TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=1&W Time=day)`,         `/game-3ds/game-style-1,w/time-day/table${path}`,          SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW,              TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&W Time=day)`,           `/game-2/game-style-1,w/time-day/table${path}`,            SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW,              TABLE, routeCallback,),
                new Route(`${name} (table Game=1&3DS GameStyle=1&W Time=day)`,       `/game-1,3ds/game-style-1,w/time-day/table${path}`,        SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW,              TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&W Time=day)`,         `/game-1,2/game-style-1,w/time-day/table${path}`,          SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW,              TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&W Time=day)`,       `/game-3ds,2/game-style-1,w/time-day/table${path}`,        SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW,              TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smw) --------------------
                //region -------------------- Game style (smb + nsmbu) --------------------

                new Route(`${name} (list Game=all GameStyle=1&U Time=day)`,          `/game-all/game-style-1,u/time-day/list${path}`,           ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU,            LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=1&U Time=day)`,            `/game-1/game-style-1,u/time-day/list${path}`,             SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU,            LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=1&U Time=day)`,          `/game-3ds/game-style-1,u/time-day/list${path}`,           SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU,            LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&U Time=day)`,            `/game-2/game-style-1,u/time-day/list${path}`,             SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU,            LIST,  routeCallback,),
                new Route(`${name} (list Game=1&3DS GameStyle=1&U Time=day)`,        `/game-1,3ds/game-style-1,u/time-day/list${path}`,         SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU,            LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&U Time=day)`,          `/game-1,2/game-style-1,u/time-day/list${path}`,           SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU,            LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&U Time=day)`,        `/game-3ds,2/game-style-1,u/time-day/list${path}`,         SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU,            LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&U Time=day)`,          `/game-all/game-style-1,u/time-day/card${path}`,           ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU,            CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=1&U Time=day)`,            `/game-1/game-style-1,u/time-day/card${path}`,             SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU,            CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=1&U Time=day)`,          `/game-3ds/game-style-1,u/time-day/card${path}`,           SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU,            CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&U Time=day)`,            `/game-2/game-style-1,u/time-day/card${path}`,             SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU,            CARD,  routeCallback,),
                new Route(`${name} (card Game=1&3DS GameStyle=1&U Time=day)`,        `/game-1,3ds/game-style-1,u/time-day/card${path}`,         SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU,            CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&U Time=day)`,          `/game-1,2/game-style-1,u/time-day/card${path}`,           SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU,            CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&U Time=day)`,        `/game-3ds,2/game-style-1,u/time-day/card${path}`,         SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU,            CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&U Time=day)`,         `/game-all/game-style-1,u/time-day/table${path}`,          ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU,            TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=1&U Time=day)`,           `/game-1/game-style-1,u/time-day/table${path}`,            SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU,            TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=1&U Time=day)`,         `/game-3ds/game-style-1,u/time-day/table${path}`,          SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU,            TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&U Time=day)`,           `/game-2/game-style-1,u/time-day/table${path}`,            SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU,            TABLE, routeCallback,),
                new Route(`${name} (table Game=1&3DS GameStyle=1&U Time=day)`,       `/game-1,3ds/game-style-1,u/time-day/table${path}`,        SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU,            TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&U Time=day)`,         `/game-1,2/game-style-1,u/time-day/table${path}`,          SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU,            TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&U Time=day)`,       `/game-3ds,2/game-style-1,u/time-day/table${path}`,        SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU,            TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + nsmbu) --------------------
                //region -------------------- Game style (smb + sm3dw) --------------------

                new Route(`${name} (list Game=all GameStyle=1&3DW Time=day)`,        `/game-all/game-style-1,3dw/time-day/list${path}`,         ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SM3DW,            LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&3DW Time=day)`,          `/game-2/game-style-1,3dw/time-day/list${path}`,           SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SM3DW,            LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&3DW Time=day)`,        `/game-1,2/game-style-1,3dw/time-day/list${path}`,         SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_AND_SM3DW,            LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&3DW Time=day)`,      `/game-3ds,2/game-style-1,3dw/time-day/list${path}`,       SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_AND_SM3DW,            LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&3DW Time=day)`,        `/game-all/game-style-1,3dw/time-day/card${path}`,         ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SM3DW,            CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&3DW Time=day)`,          `/game-2/game-style-1,3dw/time-day/card${path}`,           SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SM3DW,            CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&3DW Time=day)`,        `/game-1,2/game-style-1,3dw/time-day/card${path}`,         SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_AND_SM3DW,            CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&3DW Time=day)`,      `/game-3ds,2/game-style-1,3dw/time-day/card${path}`,       SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_AND_SM3DW,            CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&3DW Time=day)`,       `/game-all/game-style-1,3dw/time-day/table${path}`,        ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SM3DW,            TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&3DW Time=day)`,         `/game-2/game-style-1,3dw/time-day/table${path}`,          SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SM3DW,            TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&3DW Time=day)`,       `/game-1,2/game-style-1,3dw/time-day/table${path}`,        SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_AND_SM3DW,            TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&3DW Time=day)`,     `/game-3ds,2/game-style-1,3dw/time-day/table${path}`,      SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_AND_SM3DW,            TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + sm3dw) --------------------
                //region -------------------- Game style (smb3 + smw) --------------------

                new Route(`${name} (list Game=all GameStyle=3&W Time=day)`,          `/game-all/game-style-3,w/time-day/list${path}`,           ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW,             LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=3&W Time=day)`,            `/game-1/game-style-3,w/time-day/list${path}`,             SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW,             LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=3&W Time=day)`,          `/game-3ds/game-style-3,w/time-day/list${path}`,           SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW,             LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=3&W Time=day)`,            `/game-2/game-style-3,w/time-day/list${path}`,             SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW,             LIST,  routeCallback,),
                new Route(`${name} (list Game=3&3DS GameStyle=3&W Time=day)`,        `/game-3,3ds/game-style-3,w/time-day/list${path}`,         SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW,             LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=3&W Time=day)`,          `/game-1,2/game-style-3,w/time-day/list${path}`,           SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW,             LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=3&W Time=day)`,        `/game-3ds,2/game-style-3,w/time-day/list${path}`,         SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW,             LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=3&W Time=day)`,          `/game-all/game-style-3,w/time-day/card${path}`,           ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW,             CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=3&W Time=day)`,            `/game-1/game-style-3,w/time-day/card${path}`,             SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW,             CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=3&W Time=day)`,          `/game-3ds/game-style-3,w/time-day/card${path}`,           SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW,             CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=3&W Time=day)`,            `/game-2/game-style-3,w/time-day/card${path}`,             SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW,             CARD,  routeCallback,),
                new Route(`${name} (card Game=3&3DS GameStyle=3&W Time=day)`,        `/game-3,3ds/game-style-3,w/time-day/card${path}`,         SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW,             CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=3&W Time=day)`,          `/game-1,2/game-style-3,w/time-day/card${path}`,           SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW,             CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=3&W Time=day)`,        `/game-3ds,2/game-style-3,w/time-day/card${path}`,         SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW,             CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=3&W Time=day)`,         `/game-all/game-style-3,w/time-day/table${path}`,          ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW,             TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=3&W Time=day)`,           `/game-1/game-style-3,w/time-day/table${path}`,            SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW,             TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=3&W Time=day)`,         `/game-3ds/game-style-3,w/time-day/table${path}`,          SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW,             TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=3&W Time=day)`,           `/game-2/game-style-3,w/time-day/table${path}`,            SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW,             TABLE, routeCallback,),
                new Route(`${name} (table Game=3&3DS GameStyle=3&W Time=day)`,       `/game-3,3ds/game-style-3,w/time-day/table${path}`,        SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW,             TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=3&W Time=day)`,         `/game-1,2/game-style-3,w/time-day/table${path}`,          SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW,             TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=3&W Time=day)`,       `/game-3ds,2/game-style-3,w/time-day/table${path}`,        SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW,             TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + smw) --------------------
                //region -------------------- Game style (smb3 + nsmbu) --------------------

                new Route(`${name} (list Game=all GameStyle=3&U Time=day)`,          `/game-all/game-style-3,u/time-day/list${path}`,           ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU,           LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=3&U Time=day)`,            `/game-1/game-style-3,u/time-day/list${path}`,             SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU,           LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=3&U Time=day)`,          `/game-3ds/game-style-3,u/time-day/list${path}`,           SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU,           LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=3&U Time=day)`,            `/game-2/game-style-3,u/time-day/list${path}`,             SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU,           LIST,  routeCallback,),
                new Route(`${name} (list Game=1&3DS GameStyle=3&U Time=day)`,        `/game-3,3ds/game-style-3,u/time-day/list${path}`,         SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU,           LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=3&U Time=day)`,          `/game-3,2/game-style-3,u/time-day/list${path}`,           SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU,           LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=3&U Time=day)`,        `/game-3ds,2/game-style-3,u/time-day/list${path}`,         SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU,           LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=3&U Time=day)`,          `/game-all/game-style-3,u/time-day/card${path}`,           ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU,           CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=3&U Time=day)`,            `/game-1/game-style-3,u/time-day/card${path}`,             SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU,           CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=3&U Time=day)`,          `/game-3ds/game-style-3,u/time-day/card${path}`,           SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU,           CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=3&U Time=day)`,            `/game-2/game-style-3,u/time-day/card${path}`,             SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU,           CARD,  routeCallback,),
                new Route(`${name} (card Game=1&3DS GameStyle=3&U Time=day)`,        `/game-3,3ds/game-style-3,u/time-day/card${path}`,         SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU,           CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=3&U Time=day)`,          `/game-3,2/game-style-3,u/time-day/card${path}`,           SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU,           CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=3&U Time=day)`,        `/game-3ds,2/game-style-3,u/time-day/card${path}`,         SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU,           CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=3&U Time=day)`,         `/game-all/game-style-3,u/time-day/table${path}`,          ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU,           TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=3&U Time=day)`,           `/game-1/game-style-3,u/time-day/table${path}`,            SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU,           TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=3&U Time=day)`,         `/game-3ds/game-style-3,u/time-day/table${path}`,          SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU,           TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=3&U Time=day)`,           `/game-2/game-style-3,u/time-day/table${path}`,            SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU,           TABLE, routeCallback,),
                new Route(`${name} (table Game=1&3DS GameStyle=3&U Time=day)`,       `/game-3,3ds/game-style-3,u/time-day/table${path}`,        SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU,           TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=3&U Time=day)`,         `/game-3,2/game-style-3,u/time-day/table${path}`,          SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU,           TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=3&U Time=day)`,       `/game-3ds,2/game-style-3,u/time-day/table${path}`,        SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU,           TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + nsmbu) --------------------
                //region -------------------- Game style (smb3 + sm3dw) --------------------

                new Route(`${name} (list Game=all GameStyle=3&3DW Time=day)`,        `/game-all/game-style-3,3dw/time-day/list${path}`,         ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_SM3DW,           LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=3&3DW Time=day)`,          `/game-2/game-style-3,3dw/time-day/list${path}`,           SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_SM3DW,           LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=3&3DW Time=day)`,        `/game-3,2/game-style-3,3dw/time-day/list${path}`,         SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB3_AND_SM3DW,           LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=3&3DW Time=day)`,      `/game-3ds,2/game-style-3,3dw/time-day/list${path}`,       SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB3_AND_SM3DW,           LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=3&3DW Time=day)`,        `/game-all/game-style-3,3dw/time-day/card${path}`,         ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_SM3DW,           CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=3&3DW Time=day)`,          `/game-2/game-style-3,3dw/time-day/card${path}`,           SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_SM3DW,           CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=3&3DW Time=day)`,        `/game-3,2/game-style-3,3dw/time-day/card${path}`,         SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB3_AND_SM3DW,           CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=3&3DW Time=day)`,      `/game-3ds,2/game-style-3,3dw/time-day/card${path}`,       SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB3_AND_SM3DW,           CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=3&3DW Time=day)`,       `/game-all/game-style-3,3dw/time-day/table${path}`,        ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_SM3DW,           TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=3&3DW Time=day)`,         `/game-2/game-style-3,3dw/time-day/table${path}`,          SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_SM3DW,           TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=3&3DW Time=day)`,       `/game-3,2/game-style-3,3dw/time-day/table${path}`,        SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB3_AND_SM3DW,           TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=3&3DW Time=day)`,     `/game-3ds,2/game-style-3,3dw/time-day/table${path}`,      SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB3_AND_SM3DW,           TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + sm3dw) --------------------
                //region -------------------- Game style (smw + nsmbu) --------------------

                new Route(`${name} (list Game=all GameStyle=W&U Time=day)`,          `/game-all/game-style-w,u/time-day/list${path}`,           ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU,            LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=W&U Time=day)`,            `/game-1/game-style-w,u/time-day/list${path}`,             SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU,            LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=W&U Time=day)`,          `/game-3ds/game-style-w,u/time-day/list${path}`,           SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU,            LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=W&U Time=day)`,            `/game-2/game-style-w,u/time-day/list${path}`,             SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU,            LIST,  routeCallback,),
                new Route(`${name} (list Game=1&3DS GameStyle=W&U Time=day)`,        `/game-1,3ds/game-style-w,u/time-day/list${path}`,         SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU,            LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=W&U Time=day)`,          `/game-1,2/game-style-w,u/time-day/list${path}`,           SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU,            LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=W&U Time=day)`,        `/game-3ds,2/game-style-w,u/time-day/list${path}`,         SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU,            LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=W&U Time=day)`,          `/game-all/game-style-w,u/time-day/card${path}`,           ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU,            CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=W&U Time=day)`,            `/game-1/game-style-w,u/time-day/card${path}`,             SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU,            CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=W&U Time=day)`,          `/game-3ds/game-style-w,u/time-day/card${path}`,           SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU,            CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=W&U Time=day)`,            `/game-2/game-style-w,u/time-day/card${path}`,             SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU,            CARD,  routeCallback,),
                new Route(`${name} (card Game=1&3DS GameStyle=W&U Time=day)`,        `/game-1,3ds/game-style-w,u/time-day/card${path}`,         SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU,            CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=W&U Time=day)`,          `/game-1,2/game-style-w,u/time-day/card${path}`,           SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU,            CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=W&U Time=day)`,        `/game-3ds,2/game-style-w,u/time-day/card${path}`,         SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU,            CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=W&U Time=day)`,         `/game-all/game-style-w,u/time-day/table${path}`,          ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU,            TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=W&U Time=day)`,           `/game-1/game-style-w,u/time-day/table${path}`,            SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU,            TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=W&U Time=day)`,         `/game-3ds/game-style-w,u/time-day/table${path}`,          SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU,            TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=W&U Time=day)`,           `/game-2/game-style-w,u/time-day/table${path}`,            SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU,            TABLE, routeCallback,),
                new Route(`${name} (table Game=1&3DS GameStyle=W&U Time=day)`,       `/game-1,3ds/game-style-w,u/time-day/table${path}`,        SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU,            TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=W&U Time=day)`,         `/game-1,2/game-style-w,u/time-day/table${path}`,          SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU,            TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=W&U Time=day)`,       `/game-3ds,2/game-style-w,u/time-day/table${path}`,        SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU,            TABLE, routeCallback,),

                //endregion -------------------- Game style (smw + nsmbu) --------------------
                //region -------------------- Game style (smw + sm3dw) --------------------

                new Route(`${name} (list Game=all GameStyle=W&3DW Time=day)`,        `/game-all/game-style-w,3dw/time-day/list${path}`,         ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMW_AND_SM3DW,            LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=W&3DW Time=day)`,          `/game-2/game-style-w,3dw/time-day/list${path}`,           SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMW_AND_SM3DW,            LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=W&3DW Time=day)`,        `/game-1,2/game-style-w,3dw/time-day/list${path}`,         SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMW_AND_SM3DW,            LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=W&3DW Time=day)`,      `/game-3ds,2/game-style-w,3dw/time-day/list${path}`,       SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMW_AND_SM3DW,            LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=W&3DW Time=day)`,        `/game-all/game-style-w,3dw/time-day/card${path}`,         ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMW_AND_SM3DW,            CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=W&3DW Time=day)`,          `/game-2/game-style-w,3dw/time-day/card${path}`,           SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMW_AND_SM3DW,            CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=W&3DW Time=day)`,        `/game-1,2/game-style-w,3dw/time-day/card${path}`,         SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMW_AND_SM3DW,            CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=W&3DW Time=day)`,      `/game-3ds,2/game-style-w,3dw/time-day/card${path}`,       SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMW_AND_SM3DW,            CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=W&3DW Time=day)`,       `/game-all/game-style-w,3dw/time-day/table${path}`,        ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMW_AND_SM3DW,            TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=W&3DW Time=day)`,         `/game-2/game-style-w,3dw/time-day/table${path}`,          SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMW_AND_SM3DW,            TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=W&3DW Time=day)`,       `/game-1,2/game-style-w,3dw/time-day/table${path}`,        SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMW_AND_SM3DW,            TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=W&3DW Time=day)`,     `/game-3ds,2/game-style-w,3dw/time-day/table${path}`,      SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMW_AND_SM3DW,            TABLE, routeCallback,),

                //endregion -------------------- Game style (smw + sm3dw) --------------------
                //region -------------------- Game style (nsmbu + sm3dw) --------------------

                new Route(`${name} (list Game=all GameStyle=U&3DW Time=day)`,        `/game-all/game-style-u,3dw/time-day/list${path}`,         ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.NSMBU_AND_SM3DW,          LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=U&3DW Time=day)`,          `/game-2/game-style-u,3dw/time-day/list${path}`,           SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.NSMBU_AND_SM3DW,          LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=U&3DW Time=day)`,        `/game-1,2/game-style-u,3dw/time-day/list${path}`,         SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.NSMBU_AND_SM3DW,          LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=U&3DW Time=day)`,      `/game-3ds,2/game-style-u,3dw/time-day/list${path}`,       SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.NSMBU_AND_SM3DW,          LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=U&3DW Time=day)`,        `/game-all/game-style-u,3dw/time-day/card${path}`,         ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.NSMBU_AND_SM3DW,          CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=U&3DW Time=day)`,          `/game-2/game-style-u,3dw/time-day/card${path}`,           SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.NSMBU_AND_SM3DW,          CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=U&3DW Time=day)`,        `/game-1,2/game-style-u,3dw/time-day/card${path}`,         SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.NSMBU_AND_SM3DW,          CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=U&3DW Time=day)`,      `/game-3ds,2/game-style-u,3dw/time-day/card${path}`,       SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.NSMBU_AND_SM3DW,          CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=U&3DW Time=day)`,       `/game-all/game-style-u,3dw/time-day/table${path}`,        ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.NSMBU_AND_SM3DW,          TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=U&3DW Time=day)`,         `/game-2/game-style-u,3dw/time-day/table${path}`,          SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.NSMBU_AND_SM3DW,          TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=U&3DW Time=day)`,       `/game-1,2/game-style-u,3dw/time-day/table${path}`,        SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.NSMBU_AND_SM3DW,          TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=U&3DW Time=day)`,     `/game-3ds,2/game-style-u,3dw/time-day/table${path}`,      SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.NSMBU_AND_SM3DW,          TABLE, routeCallback,),

                //endregion -------------------- Game style (nsmbu + sm3dw) --------------------

                //region -------------------- Game style (smb + smb3 + smw) --------------------

                new Route(`${name} (list Game=all GameStyle=1&3&W Time=day)`,        `/game-all/game-style-1,3,w/time-day/list${path}`,         ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=1&3&W Time=day)`,          `/game-1/game-style-1,3,w/time-day/list${path}`,           SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=1&3&W Time=day)`,        `/game-3ds/game-style-1,3,w/time-day/list${path}`,         SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&3&W Time=day)`,          `/game-2/game-style-1,3,w/time-day/list${path}`,           SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),
                new Route(`${name} (list Game=1&3DS GameStyle=1&3&W Time=day)`,      `/game-1,3ds/game-style-1,3,w/time-day/list${path}`,       SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&3&W Time=day)`,        `/game-1,2/game-style-1,3,w/time-day/list${path}`,         SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&3&W Time=day)`,      `/game-3ds,2/game-style-1,3,w/time-day/list${path}`,       SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&3&W Time=day)`,        `/game-all/game-style-1,3,w/time-day/card${path}`,         ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=1&3&W Time=day)`,          `/game-1/game-style-1,3,w/time-day/card${path}`,           SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=1&3&W Time=day)`,        `/game-3ds/game-style-1,3,w/time-day/card${path}`,         SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&3&W Time=day)`,          `/game-2/game-style-1,3,w/time-day/card${path}`,           SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),
                new Route(`${name} (card Game=1&3DS GameStyle=1&3&W Time=day)`,      `/game-1,3ds/game-style-1,3,w/time-day/card${path}`,       SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&3&W Time=day)`,        `/game-1,2/game-style-1,3,w/time-day/card${path}`,         SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&3&W Time=day)`,      `/game-3ds,2/game-style-1,3,w/time-day/card${path}`,       SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&3&W Time=day)`,       `/game-all/game-style-1,3,w/time-day/table${path}`,        ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=1&3&W Time=day)`,         `/game-1/game-style-1,3,w/time-day/table${path}`,          SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=1&3&W Time=day)`,       `/game-3ds/game-style-1,3,w/time-day/table${path}`,        SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&3&W Time=day)`,         `/game-2/game-style-1,3,w/time-day/table${path}`,          SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),
                new Route(`${name} (table Game=1&3DS GameStyle=1&3&W Time=day)`,     `/game-1,3ds/game-style-1,3,w/time-day/table${path}`,      SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&3&W Time=day)`,       `/game-1,2/game-style-1,3,w/time-day/table${path}`,        SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&3&W Time=day)`,     `/game-3ds,2/game-style-1,3,w/time-day/table${path}`,      SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SMW,     TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + smw) --------------------
                //region -------------------- Game style (smb + smb3 + nsmbu) --------------------

                new Route(`${name} (list Game=all GameStyle=1&3&U Time=day)`,        `/game-all/game-style-1,3,u/time-day/list${path}`,         ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=1&3&U Time=day)`,          `/game-1/game-style-1,3,u/time-day/list${path}`,           SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=1&3&U Time=day)`,        `/game-3ds/game-style-1,3,u/time-day/list${path}`,         SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&3&U Time=day)`,          `/game-2/game-style-1,3,u/time-day/list${path}`,           SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),
                new Route(`${name} (list Game=1&3DS GameStyle=1&3&U Time=day)`,      `/game-1,3ds/game-style-1,3,u/time-day/list${path}`,       SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&3&U Time=day)`,        `/game-1,2/game-style-1,3,u/time-day/list${path}`,         SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&3&U Time=day)`,      `/game-3ds,2/game-style-1,3,u/time-day/list${path}`,       SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&3&U Time=day)`,        `/game-all/game-style-1,3,u/time-day/card${path}`,         ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=1&3&U Time=day)`,          `/game-1/game-style-1,3,u/time-day/card${path}`,           SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=1&3&U Time=day)`,        `/game-3ds/game-style-1,3,u/time-day/card${path}`,         SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&3&U Time=day)`,          `/game-2/game-style-1,3,u/time-day/card${path}`,           SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),
                new Route(`${name} (card Game=1&3DS GameStyle=1&3&U Time=day)`,      `/game-1,3ds/game-style-1,3,u/time-day/card${path}`,       SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&3&U Time=day)`,        `/game-1,2/game-style-1,3,u/time-day/card${path}`,         SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&3&U Time=day)`,      `/game-3ds,2/game-style-1,3,u/time-day/card${path}`,       SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&3&U Time=day)`,       `/game-all/game-style-1,3,u/time-day/table${path}`,        ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=1&3&U Time=day)`,         `/game-1/game-style-1,3,u/time-day/table${path}`,          SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=1&3&U Time=day)`,       `/game-3ds/game-style-1,3,u/time-day/table${path}`,        SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&3&U Time=day)`,         `/game-2/game-style-1,3,u/time-day/table${path}`,          SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),
                new Route(`${name} (table Game=1&3DS GameStyle=1&3&U Time=day)`,     `/game-1,3ds/game-style-1,3,u/time-day/table${path}`,      SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&3&U Time=day)`,       `/game-1,2/game-style-1,3,u/time-day/table${path}`,        SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&3&U Time=day)`,     `/game-3ds,2/game-style-1,3,u/time-day/table${path}`,      SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,   TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + nsmbu) --------------------
                //region -------------------- Game style (smb + smb3 + sm3dw) --------------------

                new Route(`${name} (list Game=all GameStyle=1&3&3DW Time=day)`,      `/game-all/game-style-1,3,3dw/time-day/list${path}`,       ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SM3DW,   LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&3&3DW Time=day)`,        `/game-2/game-style-1,3,3dw/time-day/list${path}`,         SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SM3DW,   LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&3&3DW Time=day)`,      `/game-1,2/game-style-1,3,3dw/time-day/list${path}`,       SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SM3DW,   LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&3&3DW Time=day)`,    `/game-3ds,2/game-style-1,3,3dw/time-day/list${path}`,     SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SM3DW,   LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&3&3DW Time=day)`,      `/game-all/game-style-1,3,3dw/time-day/card${path}`,       ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SM3DW,   CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&3&3DW Time=day)`,        `/game-2/game-style-1,3,3dw/time-day/card${path}`,         SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SM3DW,   CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&3&3DW Time=day)`,      `/game-1,2/game-style-1,3,3dw/time-day/card${path}`,       SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SM3DW,   CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&3&3DW Time=day)`,    `/game-3ds,2/game-style-1,3,3dw/time-day/card${path}`,     SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SM3DW,   CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&3&3DW Time=day)`,     `/game-all/game-style-1,3,3dw/time-day/table${path}`,      ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SM3DW,   TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&3&3DW Time=day)`,       `/game-2/game-style-1,3,3dw/time-day/table${path}`,        SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SM3DW,   TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&3&3DW Time=day)`,     `/game-1,2/game-style-1,3,3dw/time-day/table${path}`,      SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SM3DW,   TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&3&3DW Time=day)`,   `/game-3ds,2/game-style-1,3,3dw/time-day/table${path}`,    SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMB3_AND_SM3DW,   TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + sm3dw) --------------------
                //region -------------------- Game style (smb + smw + nsmbu) --------------------

                new Route(`${name} (list Game=all GameStyle=1&W&U Time=day)`,        `/game-all/game-style-1,w,u/time-day/list${path}`,         ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=1&W&U Time=day)`,          `/game-1/game-style-1,w,u/time-day/list${path}`,           SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=1&W&U Time=day)`,        `/game-3ds/game-style-1,w,u/time-day/list${path}`,         SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&W&U Time=day)`,          `/game-2/game-style-1,w,u/time-day/list${path}`,           SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),
                new Route(`${name} (list Game=1&3DS GameStyle=1&W&U Time=day)`,      `/game-1,3ds/game-style-1,w,u/time-day/list${path}`,       SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&W&U Time=day)`,        `/game-1,2/game-style-1,w,u/time-day/list${path}`,         SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&W&U Time=day)`,      `/game-3ds,2/game-style-1,w,u/time-day/list${path}`,       SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&W&U Time=day)`,        `/game-all/game-style-1,w,u/time-day/card${path}`,         ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=1&W&U Time=day)`,          `/game-1/game-style-1,w,u/time-day/card${path}`,           SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=1&W&U Time=day)`,        `/game-3ds/game-style-1,w,u/time-day/card${path}`,         SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&W&U Time=day)`,          `/game-2/game-style-1,w,u/time-day/card${path}`,           SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),
                new Route(`${name} (card Game=1&3DS GameStyle=1&W&U Time=day)`,      `/game-1,3ds/game-style-1,w,u/time-day/card${path}`,       SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&W&U Time=day)`,        `/game-1,2/game-style-1,w,u/time-day/card${path}`,         SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&W&U Time=day)`,      `/game-3ds,2/game-style-1,w,u/time-day/card${path}`,       SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&W&U Time=day)`,       `/game-all/game-style-1,w,u/time-day/table${path}`,        ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=1&W&U Time=day)`,         `/game-1/game-style-1,w,u/time-day/table${path}`,          SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=1&W&U Time=day)`,       `/game-3ds/game-style-1,w,u/time-day/table${path}`,        SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&W&U Time=day)`,         `/game-2/game-style-1,w,u/time-day/table${path}`,          SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),
                new Route(`${name} (table Game=1&3DS GameStyle=1&W&U Time=day)`,     `/game-1,3ds/game-style-1,w,u/time-day/table${path}`,      SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&W&U Time=day)`,       `/game-1,2/game-style-1,w,u/time-day/table${path}`,        SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&W&U Time=day)`,     `/game-3ds,2/game-style-1,w,u/time-day/table${path}`,      SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,    TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smw + nsmbu) --------------------
                //region -------------------- Game style (smb + smw + sm3dw) --------------------

                new Route(`${name} (list Game=all GameStyle=1&W&3DW Time=day)`,      `/game-all/game-style-1,w,3dw/time-day/list${path}`,       ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_SM3DW,    LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&W&3DW Time=day)`,        `/game-2/game-style-1,w,3dw/time-day/list${path}`,         SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_SM3DW,    LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&W&3DW Time=day)`,      `/game-1,2/game-style-1,w,3dw/time-day/list${path}`,       SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_SM3DW,    LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&W&3DW Time=day)`,    `/game-3ds,2/game-style-1,w,3dw/time-day/list${path}`,     SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_SM3DW,    LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&W&3DW Time=day)`,      `/game-all/game-style-1,w,3dw/time-day/card${path}`,       ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_SM3DW,    CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&W&3DW Time=day)`,        `/game-2/game-style-1,w,3dw/time-day/card${path}`,         SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_SM3DW,    CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&W&3DW Time=day)`,      `/game-1,2/game-style-1,w,3dw/time-day/card${path}`,       SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_SM3DW,    CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&W&3DW Time=day)`,    `/game-3ds,2/game-style-1,w,3dw/time-day/card${path}`,     SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_SM3DW,    CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&W&3DW Time=day)`,     `/game-all/game-style-1,w,3dw/time-day/table${path}`,      ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_SM3DW,    TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&W&3DW Time=day)`,       `/game-2/game-style-1,w,3dw/time-day/table${path}`,        SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_SM3DW,    TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&W&3DW Time=day)`,     `/game-1,2/game-style-1,w,3dw/time-day/table${path}`,      SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_SM3DW,    TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&W&3DW Time=day)`,   `/game-3ds,2/game-style-1,w,3dw/time-day/table${path}`,    SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_AND_SMW_AND_SM3DW,    TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smw + sm3dw) --------------------
                //region -------------------- Game style (smb + nsmbu + sm3dw) --------------------

                new Route(`${name} (list Game=all GameStyle=1&U&3DW Time=day)`,      `/game-all/game-style-1,u,3dw/time-day/list${path}`,       ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&U&3DW Time=day)`,        `/game-2/game-style-1,u,3dw/time-day/list${path}`,         SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&U&3DW Time=day)`,      `/game-1,2/game-style-1,u,3dw/time-day/list${path}`,       SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&U&3DW Time=day)`,    `/game-3ds,2/game-style-1,u,3dw/time-day/list${path}`,     SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&U&3DW Time=day)`,      `/game-all/game-style-1,u,3dw/time-day/card${path}`,       ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&U&3DW Time=day)`,        `/game-2/game-style-1,u,3dw/time-day/card${path}`,         SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&U&3DW Time=day)`,      `/game-1,2/game-style-1,u,3dw/time-day/card${path}`,       SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&U&3DW Time=day)`,    `/game-3ds,2/game-style-1,u,3dw/time-day/card${path}`,     SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&U&3DW Time=day)`,     `/game-all/game-style-1,u,3dw/time-day/table${path}`,      ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&U&3DW Time=day)`,       `/game-2/game-style-1,u,3dw/time-day/table${path}`,        SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&U&3DW Time=day)`,     `/game-1,2/game-style-1,u,3dw/time-day/table${path}`,      SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&U&3DW Time=day)`,   `/game-3ds,2/game-style-1,u,3dw/time-day/table${path}`,    SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + nsmbu + sm3dw) --------------------
                //region -------------------- Game style (smb3 + smw + nsmbu) --------------------

                new Route(`${name} (list Game=all GameStyle=3&W&U Time=day)`,        `/game-all/game-style-3,w,u/time-day/list${path}`,         ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=3&W&U Time=day)`,          `/game-1/game-style-3,w,u/time-day/list${path}`,           SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=3&W&U Time=day)`,        `/game-3ds/game-style-3,w,u/time-day/list${path}`,         SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=3&W&U Time=day)`,          `/game-2/game-style-3,w,u/time-day/list${path}`,           SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new Route(`${name} (list Game=1&3DS GameStyle=3&W&U Time=day)`,      `/game-1,3ds/game-style-3,w,u/time-day/list${path}`,       SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=3&W&U Time=day)`,        `/game-1,2/game-style-3,w,u/time-day/list${path}`,         SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=3&W&U Time=day)`,      `/game-3ds,2/game-style-3,w,u/time-day/list${path}`,       SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=3&W&U Time=day)`,        `/game-all/game-style-3,w,u/time-day/card${path}`,         ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=3&W&U Time=day)`,          `/game-1/game-style-3,w,u/time-day/card${path}`,           SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=3&W&U Time=day)`,        `/game-3ds/game-style-3,w,u/time-day/card${path}`,         SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=3&W&U Time=day)`,          `/game-2/game-style-3,w,u/time-day/card${path}`,           SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new Route(`${name} (card Game=1&3DS GameStyle=3&W&U Time=day)`,      `/game-1,3ds/game-style-3,w,u/time-day/card${path}`,       SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=3&W&U Time=day)`,        `/game-1,2/game-style-3,w,u/time-day/card${path}`,         SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=3&W&U Time=day)`,      `/game-3ds,2/game-style-3,w,u/time-day/card${path}`,       SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=3&W&U Time=day)`,       `/game-all/game-style-3,w,u/time-day/table${path}`,        ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=3&W&U Time=day)`,         `/game-1/game-style-3,w,u/time-day/table${path}`,          SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=3&W&U Time=day)`,       `/game-3ds/game-style-3,w,u/time-day/table${path}`,        SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=3&W&U Time=day)`,         `/game-2/game-style-3,w,u/time-day/table${path}`,          SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new Route(`${name} (table Game=1&3DS GameStyle=3&W&U Time=day)`,     `/game-1,3ds/game-style-3,w,u/time-day/table${path}`,      SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=3&W&U Time=day)`,       `/game-1,2/game-style-3,w,u/time-day/table${path}`,        SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=3&W&U Time=day)`,     `/game-3ds,2/game-style-3,w,u/time-day/table${path}`,      SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + smw + nsmbu) --------------------
                //region -------------------- Game style (smb3 + smw + sm3dw) --------------------

                new Route(`${name} (list Game=all GameStyle=3&W&3DW Time=day)`,      `/game-all/game-style-3,w,3dw/time-day/list${path}`,       ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_SM3DW,   LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=3&W&3DW Time=day)`,        `/game-2/game-style-3,w,3dw/time-day/list${path}`,         SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_SM3DW,   LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=3&W&3DW Time=day)`,      `/game-1,2/game-style-3,w,3dw/time-day/list${path}`,       SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_SM3DW,   LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=3&W&3DW Time=day)`,    `/game-3ds,2/game-style-3,w,3dw/time-day/list${path}`,     SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_SM3DW,   LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=3&W&3DW Time=day)`,      `/game-all/game-style-3,w,3dw/time-day/card${path}`,       ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_SM3DW,   CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=3&W&3DW Time=day)`,        `/game-2/game-style-3,w,3dw/time-day/card${path}`,         SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_SM3DW,   CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=3&W&3DW Time=day)`,      `/game-1,2/game-style-3,w,3dw/time-day/card${path}`,       SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_SM3DW,   CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=3&W&3DW Time=day)`,    `/game-3ds,2/game-style-3,w,3dw/time-day/card${path}`,     SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_SM3DW,   CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=3&W&3DW Time=day)`,     `/game-all/game-style-3,w,3dw/time-day/table${path}`,      ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_SM3DW,   TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=3&W&3DW Time=day)`,       `/game-2/game-style-3,w,3dw/time-day/table${path}`,        SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_SM3DW,   TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=3&W&3DW Time=day)`,     `/game-1,2/game-style-3,w,3dw/time-day/table${path}`,      SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_SM3DW,   TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=3&W&3DW Time=day)`,   `/game-3ds,2/game-style-3,w,3dw/time-day/table${path}`,    SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB3_AND_SMW_AND_SM3DW,   TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + smw + sm3dw) --------------------
                //region -------------------- Game style (smb3 + nsmbu + sm3dw) --------------------

                new Route(`${name} (list Game=all GameStyle=3&U&3DW Time=day)`,      `/game-all/game-style-3,u,3dw/time-day/list${path}`,       ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU_AND_SM3DW, LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=3&U&3DW Time=day)`,        `/game-2/game-style-3,u,3dw/time-day/list${path}`,         SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU_AND_SM3DW, LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=3&U&3DW Time=day)`,      `/game-1,2/game-style-3,u,3dw/time-day/list${path}`,       SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU_AND_SM3DW, LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=3&U&3DW Time=day)`,    `/game-3ds,2/game-style-3,u,3dw/time-day/list${path}`,     SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU_AND_SM3DW, LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=3&U&3DW Time=day)`,      `/game-all/game-style-3,u,3dw/time-day/card${path}`,       ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU_AND_SM3DW, CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=3&U&3DW Time=day)`,        `/game-2/game-style-3,u,3dw/time-day/card${path}`,         SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU_AND_SM3DW, CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=3&U&3DW Time=day)`,      `/game-1,2/game-style-3,u,3dw/time-day/card${path}`,       SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU_AND_SM3DW, CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=3&U&3DW Time=day)`,    `/game-3ds,2/game-style-3,u,3dw/time-day/card${path}`,     SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU_AND_SM3DW, CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=3&U&3DW Time=day)`,     `/game-all/game-style-3,u,3dw/time-day/table${path}`,      ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU_AND_SM3DW, TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=3&U&3DW Time=day)`,       `/game-2/game-style-3,u,3dw/time-day/table${path}`,        SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU_AND_SM3DW, TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=3&U&3DW Time=day)`,     `/game-1,2/game-style-3,u,3dw/time-day/table${path}`,      SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU_AND_SM3DW, TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=3&U&3DW Time=day)`,   `/game-3ds,2/game-style-3,u,3dw/time-day/table${path}`,    SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMB3_AND_NSMBU_AND_SM3DW, TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + nsmbu + sm3dw) --------------------
                //region -------------------- Game style (smw + nsmbu + sm3dw) --------------------

                new Route(`${name} (list Game=all GameStyle=W&U&3DW Time=day)`,      `/game-all/game-style-w,u,3dw/time-day/list${path}`,       ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=W&U&3DW Time=day)`,        `/game-2/game-style-w,u,3dw/time-day/list${path}`,         SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=W&U&3DW Time=day)`,      `/game-1,2/game-style-w,u,3dw/time-day/list${path}`,       SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=W&U&3DW Time=day)`,    `/game-3ds,2/game-style-w,u,3dw/time-day/list${path}`,     SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU_AND_SM3DW,  LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=W&U&3DW Time=day)`,      `/game-all/game-style-w,u,3dw/time-day/card${path}`,       ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=W&U&3DW Time=day)`,        `/game-2/game-style-w,u,3dw/time-day/card${path}`,         SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=W&U&3DW Time=day)`,      `/game-1,2/game-style-w,u,3dw/time-day/card${path}`,       SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=W&U&3DW Time=day)`,    `/game-3ds,2/game-style-w,u,3dw/time-day/card${path}`,     SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU_AND_SM3DW,  CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=W&U&3DW Time=day)`,     `/game-all/game-style-w,u,3dw/time-day/table${path}`,      ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=W&U&3DW Time=day)`,       `/game-2/game-style-w,u,3dw/time-day/table${path}`,        SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=W&U&3DW Time=day)`,     `/game-1,2/game-style-w,u,3dw/time-day/table${path}`,      SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=W&U&3DW Time=day)`,   `/game-3ds,2/game-style-w,u,3dw/time-day/table${path}`,    SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.SMW_AND_NSMBU_AND_SM3DW,  TABLE, routeCallback,),

                //endregion -------------------- Game style (smw + nsmbu + sm3dw) --------------------

                //region -------------------- Game style (smb + smb3 + smw + nsmbu) --------------------

                new Route(`${name} (list Game=all GameStyle=1&3&W&U Time=day)`,      `/game-all/game-style-1,3,w,u/time-day/list${path}`,       ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.NOT_SM3DW,                LIST,  routeCallback,),
                new Route(`${name} (list Game=1 GameStyle=1&3&W&U Time=day)`,        `/game-1/game-style-1,3,w,u/time-day/list${path}`,         SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.NOT_SM3DW,                LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS GameStyle=1&3&W&U Time=day)`,      `/game-3ds/game-style-1,3,w,u/time-day/list${path}`,       SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.NOT_SM3DW,                LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&3&W&U Time=day)`,        `/game-2/game-style-1,3,w,u/time-day/list${path}`,         SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.NOT_SM3DW,                LIST,  routeCallback,),
                new Route(`${name} (list Game=1&3DS GameStyle=1&3&W&U Time=day)`,    `/game-1,3ds/game-style-1,3,w,u/time-day/list${path}`,     SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.NOT_SM3DW,                LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&3&W&U Time=day)`,      `/game-1,2/game-style-1,3,w,u/time-day/list${path}`,       SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.NOT_SM3DW,                LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&3&W&U Time=day)`,    `/game-3ds,2/game-style-1,3,w,u/time-day/list${path}`,     SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.NOT_SM3DW,                LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&3&W&U Time=day)`,      `/game-all/game-style-1,3,w,u/time-day/card${path}`,       ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.NOT_SM3DW,                CARD,  routeCallback,),
                new Route(`${name} (card Game=1 GameStyle=1&3&W&U Time=day)`,        `/game-1/game-style-1,3,w,u/time-day/card${path}`,         SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.NOT_SM3DW,                CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS GameStyle=1&3&W&U Time=day)`,      `/game-3ds/game-style-1,3,w,u/time-day/card${path}`,       SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.NOT_SM3DW,                CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&3&W&U Time=day)`,        `/game-2/game-style-1,3,w,u/time-day/card${path}`,         SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.NOT_SM3DW,                CARD,  routeCallback,),
                new Route(`${name} (card Game=1&3DS GameStyle=1&3&W&U Time=day)`,    `/game-1,3ds/game-style-1,3,w,u/time-day/card${path}`,     SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.NOT_SM3DW,                CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&3&W&U Time=day)`,      `/game-1,2/game-style-1,3,w,u/time-day/card${path}`,       SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.NOT_SM3DW,                CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&3&W&U Time=day)`,    `/game-3ds,2/game-style-1,3,w,u/time-day/card${path}`,     SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.NOT_SM3DW,                CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&3&W&U Time=day)`,     `/game-all/game-style-1,3,w,u/time-day/table${path}`,      ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.NOT_SM3DW,                TABLE, routeCallback,),
                new Route(`${name} (table Game=1 GameStyle=1&3&W&U Time=day)`,       `/game-1/game-style-1,3,w,u/time-day/table${path}`,        SMM1_ONLY,    DAY_ONLY,  GameStylesPossibility.NOT_SM3DW,                TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS GameStyle=1&3&W&U Time=day)`,     `/game-3ds/game-style-1,3,w,u/time-day/table${path}`,      SMM3DS_ONLY,  DAY_ONLY,  GameStylesPossibility.NOT_SM3DW,                TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&3&W&U Time=day)`,       `/game-2/game-style-1,3,w,u/time-day/table${path}`,        SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.NOT_SM3DW,                TABLE, routeCallback,),
                new Route(`${name} (table Game=1&3DS GameStyle=1&3&W&U Time=day)`,   `/game-1,3ds/game-style-1,3,w,u/time-day/table${path}`,    SMM1_AND_3DS, DAY_ONLY,  GameStylesPossibility.NOT_SM3DW,                TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&3&W&U Time=day)`,     `/game-1,2/game-style-1,3,w,u/time-day/table${path}`,      SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.NOT_SM3DW,                TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&3&W&U Time=day)`,   `/game-3ds,2/game-style-1,3,w,u/time-day/table${path}`,    SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.NOT_SM3DW,                TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + smw + nsmbu) --------------------
                //region -------------------- Game style (smb3 + smw + nsmbu + sm3dw) --------------------

                new Route(`${name} (list Game=all GameStyle=3&W&U&3DW Time=day)`,    `/game-all/game-style-3,w,u,3dw/time-day/list${path}`,     ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.NOT_SMB,                  LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=3&W&U&3DW Time=day)`,      `/game-2/game-style-3,w,u,3dw/time-day/list${path}`,       SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.NOT_SMB,                  LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=3&W&U&3DW Time=day)`,    `/game-1,2/game-style-3,w,u,3dw/time-day/list${path}`,     SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.NOT_SMB,                  LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=3&W&U&3DW Time=day)`,  `/game-3ds,2/game-style-3,w,u,3dw/time-day/list${path}`,   SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.NOT_SMB,                  LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=3&W&U&3DW Time=day)`,    `/game-all/game-style-3,w,u,3dw/time-day/card${path}`,     ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.NOT_SMB,                  CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=3&W&U&3DW Time=day)`,      `/game-2/game-style-3,w,u,3dw/time-day/card${path}`,       SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.NOT_SMB,                  CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=3&W&U&3DW Time=day)`,    `/game-1,2/game-style-3,w,u,3dw/time-day/card${path}`,     SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.NOT_SMB,                  CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=3&W&U&3DW Time=day)`,  `/game-3ds,2/game-style-3,w,u,3dw/time-day/card${path}`,   SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.NOT_SMB,                  CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=3&W&U&3DW Time=day)`,   `/game-all/game-style-3,w,u,3dw/time-day/table${path}`,    ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.NOT_SMB,                  TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=3&W&U&3DW Time=day)`,     `/game-2/game-style-3,w,u,3dw/time-day/table${path}`,      SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.NOT_SMB,                  TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=3&W&U&3DW Time=day)`,   `/game-1,2/game-style-3,w,u,3dw/time-day/table${path}`,    SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.NOT_SMB,                  TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=3&W&U&3DW Time=day)`, `/game-3ds,2/game-style-3,w,u,3dw/time-day/table${path}`,  SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.NOT_SMB,                  TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + smw + nsmbu + sm3dw) --------------------
                //region -------------------- Game style (smb + smw + nsmbu + sm3dw) --------------------

                new Route(`${name} (list Game=all GameStyle=1&W&U&3DW Time=day)`,    `/game-all/game-style-1,w,u,3dw/time-day/list${path}`,     ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.NOT_SMB3,                 LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&W&U&3DW Time=day)`,      `/game-2/game-style-1,w,u,3dw/time-day/list${path}`,       SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.NOT_SMB3,                 LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&W&U&3DW Time=day)`,    `/game-1,2/game-style-1,w,u,3dw/time-day/list${path}`,     SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.NOT_SMB3,                 LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&W&U&3DW Time=day)`,  `/game-3ds,2/game-style-1,w,u,3dw/time-day/list${path}`,   SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.NOT_SMB3,                 LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&W&U&3DW Time=day)`,    `/game-all/game-style-1,w,u,3dw/time-day/card${path}`,     ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.NOT_SMB3,                 CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&W&U&3DW Time=day)`,      `/game-2/game-style-1,w,u,3dw/time-day/card${path}`,       SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.NOT_SMB3,                 CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&W&U&3DW Time=day)`,    `/game-1,2/game-style-1,w,u,3dw/time-day/card${path}`,     SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.NOT_SMB3,                 CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&W&U&3DW Time=day)`,  `/game-3ds,2/game-style-1,w,u,3dw/time-day/card${path}`,   SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.NOT_SMB3,                 CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&W&U&3DW Time=day)`,   `/game-all/game-style-1,w,u,3dw/time-day/table${path}`,    ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.NOT_SMB3,                 TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&W&U&3DW Time=day)`,     `/game-2/game-style-1,w,u,3dw/time-day/table${path}`,      SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.NOT_SMB3,                 TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&W&U&3DW Time=day)`,   `/game-1,2/game-style-1,w,u,3dw/time-day/table${path}`,    SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.NOT_SMB3,                 TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&W&U&3DW Time=day)`, `/game-3ds,2/game-style-1,w,u,3dw/time-day/table${path}`,  SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.NOT_SMB3,                 TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smw + nsmbu + sm3dw) --------------------
                //region -------------------- Game style (smb + smb3 + nsmbu + sm3dw) --------------------

                new Route(`${name} (list Game=all GameStyle=1&3&U&3DW Time=day)`,    `/game-all/game-style-1,3,u,3dw/time-day/list${path}`,     ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.NOT_SMW,                  LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&3&U&3DW Time=day)`,      `/game-2/game-style-1,3,u,3dw/time-day/list${path}`,       SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.NOT_SMW,                  LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&3&U&3DW Time=day)`,    `/game-1,2/game-style-1,3,u,3dw/time-day/list${path}`,     SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.NOT_SMW,                  LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&3&U&3DW Time=day)`,  `/game-3ds,2/game-style-1,3,u,3dw/time-day/list${path}`,   SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.NOT_SMW,                  LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&3&U&3DW Time=day)`,    `/game-all/game-style-1,3,u,3dw/time-day/card${path}`,     ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.NOT_SMW,                  CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&3&U&3DW Time=day)`,      `/game-2/game-style-1,3,u,3dw/time-day/card${path}`,       SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.NOT_SMW,                  CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&3&U&3DW Time=day)`,    `/game-1,2/game-style-1,3,u,3dw/time-day/card${path}`,     SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.NOT_SMW,                  CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&3&U&3DW Time=day)`,  `/game-3ds,2/game-style-1,3,u,3dw/time-day/card${path}`,   SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.NOT_SMW,                  CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&3&U&3DW Time=day)`,   `/game-all/game-style-1,3,u,3dw/time-day/table${path}`,    ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.NOT_SMW,                  TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&3&U&3DW Time=day)`,     `/game-2/game-style-1,3,u,3dw/time-day/table${path}`,      SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.NOT_SMW,                  TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&3&U&3DW Time=day)`,   `/game-1,2/game-style-1,3,u,3dw/time-day/table${path}`,    SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.NOT_SMW,                  TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&3&U&3DW Time=day)`, `/game-3ds,2/game-style-1,3,u,3dw/time-day/table${path}`,  SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.NOT_SMW,                  TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + nsmbu + sm3dw) --------------------
                //region -------------------- Game style (smb + smb3 + smw + sm3dw) --------------------

                new Route(`${name} (list Game=all GameStyle=1&3&W&3DW Time=day)`,    `/game-all/game-style-1,3,w,3dw/time-day/list${path}`,     ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.NOT_NSMBU,                LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&3&W&3DW Time=day)`,      `/game-2/game-style-1,3,w,3dw/time-day/list${path}`,       SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.NOT_NSMBU,                LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&3&W&3DW Time=day)`,    `/game-1,2/game-style-1,3,w,3dw/time-day/list${path}`,     SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.NOT_NSMBU,                LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&3&W&3DW Time=day)`,  `/game-3ds,2/game-style-1,3,w,3dw/time-day/list${path}`,   SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.NOT_NSMBU,                LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&3&W&3DW Time=day)`,    `/game-all/game-style-1,3,w,3dw/time-day/card${path}`,     ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.NOT_NSMBU,                CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&3&W&3DW Time=day)`,      `/game-2/game-style-1,3,w,3dw/time-day/card${path}`,       SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.NOT_NSMBU,                CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&3&W&3DW Time=day)`,    `/game-1,2/game-style-1,3,w,3dw/time-day/card${path}`,     SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.NOT_NSMBU,                CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&3&W&3DW Time=day)`,  `/game-3ds,2/game-style-1,3,w,3dw/time-day/card${path}`,   SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.NOT_NSMBU,                CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&3&W&3DW Time=day)`,   `/game-all/game-style-1,3,w,3dw/time-day/table${path}`,    ALL_GAMES,    DAY_ONLY,  GameStylesPossibility.NOT_NSMBU,                TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&3&W&3DW Time=day)`,     `/game-2/game-style-1,3,w,3dw/time-day/table${path}`,      SMM2_ONLY,    DAY_ONLY,  GameStylesPossibility.NOT_NSMBU,                TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&3&W&3DW Time=day)`,   `/game-1,2/game-style-1,3,w,3dw/time-day/table${path}`,    SMM1_AND_2,   DAY_ONLY,  GameStylesPossibility.NOT_NSMBU,                TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&3&W&3DW Time=day)`, `/game-3ds,2/game-style-1,3,w,3dw/time-day/table${path}`,  SMM3DS_AND_2, DAY_ONLY,  GameStylesPossibility.NOT_NSMBU,                TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + smw + sm3dw) --------------------

                //endregion -------------------- Time (day) --------------------
                //region -------------------- Time (night) --------------------

                //region -------------------- Game style (all) --------------------

                new Route(`${name} (list Game=all GameStyle=all Time=night)`,         `/game-all/game-style-all/time-night/list${path}`,        ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.ALL,         LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=all Time=night)`,           `/game-2/game-style-all/time-night/list${path}`,          SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.ALL,         LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=all Time=night)`,         `/game-1,2/game-style-all/time-night/list${path}`,        SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.ALL,         LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=all Time=night)`,       `/game-3ds,2/game-style-all/time-night/list${path}`,      SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.ALL,         LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=all Time=night)`,         `/game-all/game-style-all/time-night/card${path}`,        ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.ALL,         CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=all Time=night)`,           `/game-2/game-style-all/time-night/card${path}`,          SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.ALL,         CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=all Time=night)`,         `/game-1,2/game-style-all/time-night/card${path}`,        SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.ALL,         CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=all Time=night)`,       `/game-3ds,2/game-style-all/time-night/card${path}`,      SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.ALL,         CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=all Time=night)`,        `/game-all/game-style-all/time-night/table${path}`,       ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.ALL,         TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=all Time=night)`,          `/game-2/game-style-all/time-night/table${path}`,         SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.ALL,         TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=all Time=night)`,        `/game-1,2/game-style-all/time-night/table${path}`,       SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.ALL,         TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=all Time=night)`,      `/game-3ds,2/game-style-all/time-night/table${path}`,     SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.ALL,         TABLE, routeCallback,),

                //endregion -------------------- Game style (all) --------------------

                //region -------------------- Game style (smb) --------------------

                new Route(`${name} (list Game=all GameStyle=1 Time=night)`,           `/game-all/game-style-1/time-night/list${path}`,          ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB_ONLY,                LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1 Time=night)`,             `/game-2/game-style-1/time-night/list${path}`,            SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB_ONLY,                LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1 Time=night)`,           `/game-1,2/game-style-1/time-night/list${path}`,          SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB_ONLY,                LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1 Time=night)`,         `/game-3ds,2/game-style-1/time-night/list${path}`,        SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB_ONLY,                LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1 Time=night)`,           `/game-all/game-style-1/time-night/card${path}`,          ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB_ONLY,                CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1 Time=night)`,             `/game-2/game-style-1/time-night/card${path}`,            SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB_ONLY,                CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1 Time=night)`,           `/game-1,2/game-style-1/time-night/card${path}`,          SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB_ONLY,                CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1 Time=night)`,         `/game-3ds,2/game-style-1/time-night/card${path}`,        SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB_ONLY,                CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1 Time=night)`,          `/game-all/game-style-1/time-night/table${path}`,         ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB_ONLY,                TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1 Time=night)`,            `/game-2/game-style-1/time-night/table${path}`,           SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB_ONLY,                TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1 Time=night)`,          `/game-1,2/game-style-1/time-night/table${path}`,         SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB_ONLY,                TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1 Time=night)`,        `/game-3ds,2/game-style-1/time-night/table${path}`,       SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB_ONLY,                TABLE, routeCallback,),

                //endregion -------------------- Game style (smb) --------------------
                //region -------------------- Game style (smb3) --------------------

                new Route(`${name} (list Game=all GameStyle=3 Time=night)`,           `/game-all/game-style-3/time-night/list${path}`,          ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB3_ONLY,               LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=3 Time=night)`,             `/game-2/game-style-3/time-night/list${path}`,            SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB3_ONLY,               LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=3 Time=night)`,           `/game-1,2/game-style-3/time-night/list${path}`,          SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB3_ONLY,               LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=3 Time=night)`,         `/game-3ds,2/game-style-3/time-night/list${path}`,        SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB3_ONLY,               LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=3 Time=night)`,           `/game-all/game-style-3/time-night/card${path}`,          ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB3_ONLY,               CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=3 Time=night)`,             `/game-2/game-style-3/time-night/card${path}`,            SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB3_ONLY,               CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=3 Time=night)`,           `/game-1,2/game-style-3/time-night/card${path}`,          SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB3_ONLY,               CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=3 Time=night)`,         `/game-3ds,2/game-style-3/time-night/card${path}`,        SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB3_ONLY,               CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=3 Time=night)`,          `/game-all/game-style-3/time-night/table${path}`,         ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB3_ONLY,               TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=3 Time=night)`,            `/game-2/game-style-3/time-night/table${path}`,           SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB3_ONLY,               TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=3 Time=night)`,          `/game-1,2/game-style-3/time-night/table${path}`,         SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB3_ONLY,               TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=3 Time=night)`,        `/game-3ds,2/game-style-3/time-night/table${path}`,       SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB3_ONLY,               TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3) --------------------
                //region -------------------- Game style (smw) --------------------

                new Route(`${name} (list Game=all GameStyle=W Time=night)`,           `/game-all/game-style-w/time-night/list${path}`,          ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMW_ONLY,                LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=W Time=night)`,             `/game-2/game-style-w/time-night/list${path}`,            SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMW_ONLY,                LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=W Time=night)`,           `/game-1,2/game-style-w/time-night/list${path}`,          SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMW_ONLY,                LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=W Time=night)`,         `/game-3ds,2/game-style-w/time-night/list${path}`,        SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMW_ONLY,                LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=W Time=night)`,           `/game-all/game-style-w/time-night/card${path}`,          ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMW_ONLY,                CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=W Time=night)`,             `/game-2/game-style-w/time-night/card${path}`,            SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMW_ONLY,                CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=W Time=night)`,           `/game-1,2/game-style-w/time-night/card${path}`,          SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMW_ONLY,                CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=W Time=night)`,         `/game-3ds,2/game-style-w/time-night/card${path}`,        SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMW_ONLY,                CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=W Time=night)`,          `/game-all/game-style-w/time-night/table${path}`,         ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMW_ONLY,                TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=W Time=night)`,            `/game-2/game-style-w/time-night/table${path}`,           SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMW_ONLY,                TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=W Time=night)`,          `/game-1,2/game-style-w/time-night/table${path}`,         SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMW_ONLY,                TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=W Time=night)`,        `/game-3ds,2/game-style-w/time-night/table${path}`,       SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMW_ONLY,                TABLE, routeCallback,),

                //endregion -------------------- Game style (smw) --------------------
                //region -------------------- Game style (nsmbu) --------------------

                new Route(`${name} (list Game=all GameStyle=U Time=night)`,           `/game-all/game-style-u/time-night/list${path}`,          ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.NSMBU_ONLY,              LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=U Time=night)`,             `/game-2/game-style-u/time-night/list${path}`,            SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.NSMBU_ONLY,              LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=U Time=night)`,           `/game-1,2/game-style-u/time-night/list${path}`,          SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.NSMBU_ONLY,              LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=U Time=night)`,         `/game-3ds,2/game-style-u/time-night/list${path}`,        SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.NSMBU_ONLY,              LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=U Time=night)`,           `/game-all/game-style-u/time-night/card${path}`,          ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.NSMBU_ONLY,              CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=U Time=night)`,             `/game-2/game-style-u/time-night/card${path}`,            SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.NSMBU_ONLY,              CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=U Time=night)`,           `/game-1,2/game-style-u/time-night/card${path}`,          SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.NSMBU_ONLY,              CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=U Time=night)`,         `/game-3ds,2/game-style-u/time-night/card${path}`,        SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.NSMBU_ONLY,              CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=U Time=night)`,          `/game-all/game-style-u/time-night/table${path}`,         ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.NSMBU_ONLY,              TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=U Time=night)`,            `/game-2/game-style-u/time-night/table${path}`,           SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.NSMBU_ONLY,              TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=U Time=night)`,          `/game-1,2/game-style-u/time-night/table${path}`,         SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.NSMBU_ONLY,              TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=U Time=night)`,        `/game-3ds,2/game-style-u/time-night/table${path}`,       SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.NSMBU_ONLY,              TABLE, routeCallback,),

                //endregion -------------------- Game style (nsmbu) --------------------

                //region -------------------- Game style (smb + smb3) --------------------

                new Route(`${name} (list Game=all GameStyle=1&3 Time=night)`,         `/game-all/game-style-1,3/time-night/list${path}`,        ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3,            LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&3 Time=night)`,           `/game-2/game-style-1,3/time-night/list${path}`,          SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3,            LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&3 Time=night)`,         `/game-1,2/game-style-1,3/time-night/list${path}`,        SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3,            LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&3 Time=night)`,       `/game-3ds,2/game-style-1,3/time-night/list${path}`,      SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3,            LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&3 Time=night)`,         `/game-all/game-style-1,3/time-night/card${path}`,        ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3,            CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&3 Time=night)`,           `/game-2/game-style-1,3/time-night/card${path}`,          SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3,            CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&3 Time=night)`,         `/game-1,2/game-style-1,3/time-night/card${path}`,        SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3,            CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&3 Time=night)`,       `/game-3ds,2/game-style-1,3/time-night/card${path}`,      SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3,            CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&3 Time=night)`,        `/game-all/game-style-1,3/time-night/table${path}`,       ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3,            TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&3 Time=night)`,          `/game-2/game-style-1,3/time-night/table${path}`,         SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3,            TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&3 Time=night)`,        `/game-1,2/game-style-1,3/time-night/table${path}`,       SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3,            TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&3 Time=night)`,      `/game-3ds,2/game-style-1,3/time-night/table${path}`,     SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3,            TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3) --------------------
                //region -------------------- Game style (smb + smw) --------------------

                new Route(`${name} (list Game=all GameStyle=1&W Time=night)`,         `/game-all/game-style-1,w/time-night/list${path}`,        ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMW,             LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&W Time=night)`,           `/game-2/game-style-1,w/time-night/list${path}`,          SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMW,             LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&W Time=night)`,         `/game-1,2/game-style-1,w/time-night/list${path}`,        SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMW,             LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&W Time=night)`,       `/game-3ds,2/game-style-1,w/time-night/list${path}`,      SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMW,             LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&W Time=night)`,         `/game-all/game-style-1,w/time-night/card${path}`,        ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMW,             CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&W Time=night)`,           `/game-2/game-style-1,w/time-night/card${path}`,          SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMW,             CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&W Time=night)`,         `/game-1,2/game-style-1,w/time-night/card${path}`,        SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMW,             CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&W Time=night)`,       `/game-3ds,2/game-style-1,w/time-night/card${path}`,      SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMW,             CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&W Time=night)`,        `/game-all/game-style-1,w/time-night/table${path}`,       ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMW,             TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&W Time=night)`,          `/game-2/game-style-1,w/time-night/table${path}`,         SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMW,             TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&W Time=night)`,        `/game-1,2/game-style-1,w/time-night/table${path}`,       SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMW,             TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&W Time=night)`,      `/game-3ds,2/game-style-1,w/time-night/table${path}`,     SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMW,             TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smw) --------------------
                //region -------------------- Game style (smb + nsmbu) --------------------

                new Route(`${name} (list Game=all GameStyle=1&U Time=night)`,         `/game-all/game-style-1,u/time-night/list${path}`,        ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_NSMBU,           LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&U Time=night)`,           `/game-2/game-style-1,u/time-night/list${path}`,          SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_NSMBU,           LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&U Time=night)`,         `/game-1,2/game-style-1,u/time-night/list${path}`,        SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB_AND_NSMBU,           LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&U Time=night)`,       `/game-3ds,2/game-style-1,u/time-night/list${path}`,      SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB_AND_NSMBU,           LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&U Time=night)`,         `/game-all/game-style-1,u/time-night/card${path}`,        ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_NSMBU,           CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&U Time=night)`,           `/game-2/game-style-1,u/time-night/card${path}`,          SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_NSMBU,           CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&U Time=night)`,         `/game-1,2/game-style-1,u/time-night/card${path}`,        SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB_AND_NSMBU,           CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&U Time=night)`,       `/game-3ds,2/game-style-1,u/time-night/card${path}`,      SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB_AND_NSMBU,           CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&U Time=night)`,        `/game-all/game-style-1,u/time-night/table${path}`,       ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_NSMBU,           TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&U Time=night)`,          `/game-2/game-style-1,u/time-night/table${path}`,         SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_NSMBU,           TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&U Time=night)`,        `/game-1,2/game-style-1,u/time-night/table${path}`,       SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB_AND_NSMBU,           TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&U Time=night)`,      `/game-3ds,2/game-style-1,u/time-night/table${path}`,     SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB_AND_NSMBU,           TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + nsmbu) --------------------
                //region -------------------- Game style (smb3 + smw) --------------------

                new Route(`${name} (list Game=all GameStyle=3&W Time=night)`,         `/game-all/game-style-3,w/time-night/list${path}`,        ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB3_AND_SMW,            LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=3&W Time=night)`,           `/game-2/game-style-3,w/time-night/list${path}`,          SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB3_AND_SMW,            LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=3&W Time=night)`,         `/game-1,2/game-style-3,w/time-night/list${path}`,        SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB3_AND_SMW,            LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=3&W Time=night)`,       `/game-3ds,2/game-style-3,w/time-night/list${path}`,      SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB3_AND_SMW,            LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=3&W Time=night)`,         `/game-all/game-style-3,w/time-night/card${path}`,        ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB3_AND_SMW,            CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=3&W Time=night)`,           `/game-2/game-style-3,w/time-night/card${path}`,          SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB3_AND_SMW,            CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=3&W Time=night)`,         `/game-1,2/game-style-3,w/time-night/card${path}`,        SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB3_AND_SMW,            CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=3&W Time=night)`,       `/game-3ds,2/game-style-3,w/time-night/card${path}`,      SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB3_AND_SMW,            CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=3&W Time=night)`,        `/game-all/game-style-3,w/time-night/table${path}`,       ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB3_AND_SMW,            TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=3&W Time=night)`,          `/game-2/game-style-3,w/time-night/table${path}`,         SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB3_AND_SMW,            TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=3&W Time=night)`,        `/game-1,2/game-style-3,w/time-night/table${path}`,       SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB3_AND_SMW,            TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=3&W Time=night)`,      `/game-3ds,2/game-style-3,w/time-night/table${path}`,     SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB3_AND_SMW,            TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + smw) --------------------
                //region -------------------- Game style (smb3 + nsmbu) --------------------

                new Route(`${name} (list Game=all GameStyle=3&U Time=night)`,         `/game-all/game-style-3,u/time-night/list${path}`,        ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB3_AND_NSMBU,          LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=3&U Time=night)`,           `/game-2/game-style-3,u/time-night/list${path}`,          SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB3_AND_NSMBU,          LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=3&U Time=night)`,         `/game-3,2/game-style-3,u/time-night/list${path}`,        SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB3_AND_NSMBU,          LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=3&U Time=night)`,       `/game-3ds,2/game-style-3,u/time-night/list${path}`,      SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB3_AND_NSMBU,          LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=3&U Time=night)`,         `/game-all/game-style-3,u/time-night/card${path}`,        ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB3_AND_NSMBU,          CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=3&U Time=night)`,           `/game-2/game-style-3,u/time-night/card${path}`,          SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB3_AND_NSMBU,          CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=3&U Time=night)`,         `/game-3,2/game-style-3,u/time-night/card${path}`,        SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB3_AND_NSMBU,          CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=3&U Time=night)`,       `/game-3ds,2/game-style-3,u/time-night/card${path}`,      SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB3_AND_NSMBU,          CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=3&U Time=night)`,        `/game-all/game-style-3,u/time-night/table${path}`,       ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB3_AND_NSMBU,          TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=3&U Time=night)`,          `/game-2/game-style-3,u/time-night/table${path}`,         SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB3_AND_NSMBU,          TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=3&U Time=night)`,        `/game-3,2/game-style-3,u/time-night/table${path}`,       SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB3_AND_NSMBU,          TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=3&U Time=night)`,      `/game-3ds,2/game-style-3,u/time-night/table${path}`,     SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB3_AND_NSMBU,          TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + nsmbu) --------------------
                //region -------------------- Game style (smw + nsmbu) --------------------

                new Route(`${name} (list Game=all GameStyle=W&U Time=night)`,         `/game-all/game-style-w,u/time-night/list${path}`,        ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMW_AND_NSMBU,           LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=W&U Time=night)`,           `/game-2/game-style-w,u/time-night/list${path}`,          SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMW_AND_NSMBU,           LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=W&U Time=night)`,         `/game-1,2/game-style-w,u/time-night/list${path}`,        SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMW_AND_NSMBU,           LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=W&U Time=night)`,       `/game-3ds,2/game-style-w,u/time-night/list${path}`,      SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMW_AND_NSMBU,           LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=W&U Time=night)`,         `/game-all/game-style-w,u/time-night/card${path}`,        ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMW_AND_NSMBU,           CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=W&U Time=night)`,           `/game-2/game-style-w,u/time-night/card${path}`,          SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMW_AND_NSMBU,           CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=W&U Time=night)`,         `/game-1,2/game-style-w,u/time-night/card${path}`,        SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMW_AND_NSMBU,           CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=W&U Time=night)`,       `/game-3ds,2/game-style-w,u/time-night/card${path}`,      SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMW_AND_NSMBU,           CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=W&U Time=night)`,        `/game-all/game-style-w,u/time-night/table${path}`,       ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMW_AND_NSMBU,           TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=W&U Time=night)`,          `/game-2/game-style-w,u/time-night/table${path}`,         SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMW_AND_NSMBU,           TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=W&U Time=night)`,        `/game-1,2/game-style-w,u/time-night/table${path}`,       SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMW_AND_NSMBU,           TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=W&U Time=night)`,      `/game-3ds,2/game-style-w,u/time-night/table${path}`,     SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMW_AND_NSMBU,           TABLE, routeCallback,),

                //endregion -------------------- Game style (smw + nsmbu) --------------------

                //region -------------------- Game style (smb + smb3 + smw) --------------------

                new Route(`${name} (list Game=all GameStyle=1&3&W Time=night)`,       `/game-all/game-style-1,3,w/time-night/list${path}`,      ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,    LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&3&W Time=night)`,         `/game-2/game-style-1,3,w/time-night/list${path}`,        SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,    LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&3&W Time=night)`,       `/game-1,2/game-style-1,3,w/time-night/list${path}`,      SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,    LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&3&W Time=night)`,     `/game-3ds,2/game-style-1,3,w/time-night/list${path}`,    SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,    LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&3&W Time=night)`,       `/game-all/game-style-1,3,w/time-night/card${path}`,      ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,    CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&3&W Time=night)`,         `/game-2/game-style-1,3,w/time-night/card${path}`,        SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,    CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&3&W Time=night)`,       `/game-1,2/game-style-1,3,w/time-night/card${path}`,      SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,    CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&3&W Time=night)`,     `/game-3ds,2/game-style-1,3,w/time-night/card${path}`,    SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,    CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&3&W Time=night)`,      `/game-all/game-style-1,3,w/time-night/table${path}`,     ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,    TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&3&W Time=night)`,        `/game-2/game-style-1,3,w/time-night/table${path}`,       SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,    TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&3&W Time=night)`,      `/game-1,2/game-style-1,3,w/time-night/table${path}`,     SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,    TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&3&W Time=night)`,    `/game-3ds,2/game-style-1,3,w/time-night/table${path}`,   SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3_AND_SMW,    TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + smw) --------------------
                //region -------------------- Game style (smb + smb3 + nsmbu) --------------------

                new Route(`${name} (list Game=all GameStyle=1&3&U Time=night)`,       `/game-all/game-style-1,3,u/time-night/list${path}`,      ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,  LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&3&U Time=night)`,         `/game-2/game-style-1,3,u/time-night/list${path}`,        SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,  LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&3&U Time=night)`,       `/game-1,2/game-style-1,3,u/time-night/list${path}`,      SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,  LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&3&U Time=night)`,     `/game-3ds,2/game-style-1,3,u/time-night/list${path}`,    SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,  LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&3&U Time=night)`,       `/game-all/game-style-1,3,u/time-night/card${path}`,      ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,  CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&3&U Time=night)`,         `/game-2/game-style-1,3,u/time-night/card${path}`,        SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,  CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&3&U Time=night)`,       `/game-1,2/game-style-1,3,u/time-night/card${path}`,      SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,  CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&3&U Time=night)`,     `/game-3ds,2/game-style-1,3,u/time-night/card${path}`,    SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,  CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&3&U Time=night)`,      `/game-all/game-style-1,3,u/time-night/table${path}`,     ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,  TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&3&U Time=night)`,        `/game-2/game-style-1,3,u/time-night/table${path}`,       SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,  TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&3&U Time=night)`,      `/game-1,2/game-style-1,3,u/time-night/table${path}`,     SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,  TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&3&U Time=night)`,    `/game-3ds,2/game-style-1,3,u/time-night/table${path}`,   SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU,  TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + nsmbu) --------------------
                //region -------------------- Game style (smb + smw + nsmbu) --------------------

                new Route(`${name} (list Game=all GameStyle=1&W&U Time=night)`,       `/game-all/game-style-1,w,u/time-night/list${path}`,      ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&W&U Time=night)`,         `/game-2/game-style-1,w,u/time-night/list${path}`,        SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&W&U Time=night)`,       `/game-1,2/game-style-1,w,u/time-night/list${path}`,      SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&W&U Time=night)`,     `/game-3ds,2/game-style-1,w,u/time-night/list${path}`,    SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,   LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&W&U Time=night)`,       `/game-all/game-style-1,w,u/time-night/card${path}`,      ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&W&U Time=night)`,         `/game-2/game-style-1,w,u/time-night/card${path}`,        SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&W&U Time=night)`,       `/game-1,2/game-style-1,w,u/time-night/card${path}`,      SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&W&U Time=night)`,     `/game-3ds,2/game-style-1,w,u/time-night/card${path}`,    SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,   CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&W&U Time=night)`,      `/game-all/game-style-1,w,u/time-night/table${path}`,     ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&W&U Time=night)`,        `/game-2/game-style-1,w,u/time-night/table${path}`,       SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&W&U Time=night)`,      `/game-1,2/game-style-1,w,u/time-night/table${path}`,     SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&W&U Time=night)`,    `/game-3ds,2/game-style-1,w,u/time-night/table${path}`,   SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB_AND_SMW_AND_NSMBU,   TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smw + nsmbu) --------------------
                //region -------------------- Game style (smb3 + smw + nsmbu) --------------------

                new Route(`${name} (list Game=all GameStyle=3&W&U Time=night)`,       `/game-all/game-style-3,w,u/time-night/list${path}`,      ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,  LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=3&W&U Time=night)`,         `/game-2/game-style-3,w,u/time-night/list${path}`,        SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,  LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=3&W&U Time=night)`,       `/game-1,2/game-style-3,w,u/time-night/list${path}`,      SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,  LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=3&W&U Time=night)`,     `/game-3ds,2/game-style-3,w,u/time-night/list${path}`,    SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,  LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=3&W&U Time=night)`,       `/game-all/game-style-3,w,u/time-night/card${path}`,      ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,  CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=3&W&U Time=night)`,         `/game-2/game-style-3,w,u/time-night/card${path}`,        SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,  CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=3&W&U Time=night)`,       `/game-1,2/game-style-3,w,u/time-night/card${path}`,      SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,  CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=3&W&U Time=night)`,     `/game-3ds,2/game-style-3,w,u/time-night/card${path}`,    SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,  CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=3&W&U Time=night)`,      `/game-all/game-style-3,w,u/time-night/table${path}`,     ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,  TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=3&W&U Time=night)`,        `/game-2/game-style-3,w,u/time-night/table${path}`,       SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,  TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=3&W&U Time=night)`,      `/game-1,2/game-style-3,w,u/time-night/table${path}`,     SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,  TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=3&W&U Time=night)`,    `/game-3ds,2/game-style-3,w,u/time-night/table${path}`,   SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU,  TABLE, routeCallback,),

                //endregion -------------------- Game style (smb3 + smw + nsmbu) --------------------

                //region -------------------- Game style (smb + smb3 + smw + nsmbu) --------------------

                new Route(`${name} (list Game=all GameStyle=1&3&W&U Time=night)`,     `/game-all/game-style-1,3,w,u/time-night/list${path}`,    ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.NOT_SM3DW,               LIST,  routeCallback,),
                new Route(`${name} (list Game=2 GameStyle=1&3&W&U Time=night)`,       `/game-2/game-style-1,3,w,u/time-night/list${path}`,      SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.NOT_SM3DW,               LIST,  routeCallback,),
                new Route(`${name} (list Game=1&2 GameStyle=1&3&W&U Time=night)`,     `/game-1,2/game-style-1,3,w,u/time-night/list${path}`,    SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.NOT_SM3DW,               LIST,  routeCallback,),
                new Route(`${name} (list Game=3DS&2 GameStyle=1&3&W&U Time=night)`,   `/game-3ds,2/game-style-1,3,w,u/time-night/list${path}`,  SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.NOT_SM3DW,               LIST,  routeCallback,),

                new Route(`${name} (card Game=all GameStyle=1&3&W&U Time=night)`,     `/game-all/game-style-1,3,w,u/time-night/card${path}`,    ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.NOT_SM3DW,               CARD,  routeCallback,),
                new Route(`${name} (card Game=2 GameStyle=1&3&W&U Time=night)`,       `/game-2/game-style-1,3,w,u/time-night/card${path}`,      SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.NOT_SM3DW,               CARD,  routeCallback,),
                new Route(`${name} (card Game=1&2 GameStyle=1&3&W&U Time=night)`,     `/game-1,2/game-style-1,3,w,u/time-night/card${path}`,    SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.NOT_SM3DW,               CARD,  routeCallback,),
                new Route(`${name} (card Game=3DS&2 GameStyle=1&3&W&U Time=night)`,   `/game-3ds,2/game-style-1,3,w,u/time-night/card${path}`,  SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.NOT_SM3DW,               CARD,  routeCallback,),

                new Route(`${name} (table Game=all GameStyle=1&3&W&U Time=night)`,    `/game-all/game-style-1,3,w,u/time-night/table${path}`,   ALL_GAMES,    NIGHT_ONLY, GameStylesPossibility.NOT_SM3DW,               TABLE, routeCallback,),
                new Route(`${name} (table Game=2 GameStyle=1&3&W&U Time=night)`,      `/game-2/game-style-1,3,w,u/time-night/table${path}`,     SMM2_ONLY,    NIGHT_ONLY, GameStylesPossibility.NOT_SM3DW,               TABLE, routeCallback,),
                new Route(`${name} (table Game=1&2 GameStyle=1&3&W&U Time=night)`,    `/game-1,2/game-style-1,3,w,u/time-night/table${path}`,   SMM1_AND_2,   NIGHT_ONLY, GameStylesPossibility.NOT_SM3DW,               TABLE, routeCallback,),
                new Route(`${name} (table Game=3DS&2 GameStyle=1&3&W&U Time=night)`,  `/game-3ds,2/game-style-1,3,w,u/time-night/table${path}`, SMM3DS_AND_2, NIGHT_ONLY, GameStylesPossibility.NOT_SM3DW,               TABLE, routeCallback,),

                //endregion -------------------- Game style (smb + smb3 + smw + nsmbu) --------------------

                //endregion -------------------- Time (night) --------------------
            ]
        }

    }

    //endregion -------------------- Sub class --------------------
    //region -------------------- Enum instances --------------------

    public static readonly HOME = new EveryRoutes.Straight('home', '/home', () => <HomeApp/>,)
    public static readonly ABOUT = new EveryRoutes.Straight('about', '/about', () => <AboutApp/>,)
    public static readonly SOURCES = new EveryRoutes.Straight('sources', '/sources', () => <SourcesApp/>,)

    public static readonly EVERY_MUSIC = new EveryRoutes.Straight('everyMusic', '/every/music', () => <MusicApp/>,)//TODO make the application doable with the game, game style, theme and time

    public static readonly EVERY_POWER_UP_RIDE_AND_HAT_PRIORITY = new EveryRoutes.All('everyPowerUp&Ride&HatPriority', '/every/power-up+ride+hat/priority', CARD, SMM2, (viewDisplay, games, gameStyles, times,) => <PriorityApp type={PowerUpPriorityTypes.ALL} viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>,)
    public static readonly EVERY_POWER_UP_AND_RIDE_PRIORITY = new EveryRoutes.All('everyPowerUp&RidePriority', '/every/power-up+ride/priority', CARD, SMM2, (viewDisplay, games, gameStyles, times,) => <PriorityApp type={PowerUpPriorityTypes.POWER_UP_AND_RIDE} viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>,)
    public static readonly EVERY_POWER_UP_AND_HAT_PRIORITY = new EveryRoutes.All('everyPowerUp&HatPriority', '/every/power-up+hat/priority', CARD, SMM2, (viewDisplay, games, gameStyles, times,) => <PriorityApp type={PowerUpPriorityTypes.POWER_UP_AND_HAT} viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>,)
    public static readonly EVERY_RIDE_AND_HAT_PRIORITY = new EveryRoutes.All('everyRide&HatPriority', '/every/ride+hat/priority', CARD, SMM2, (viewDisplay, games, gameStyles, times,) => <PriorityApp type={PowerUpPriorityTypes.RIDE_AND_HAT} viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>,)
    public static readonly EVERY_POWER_UP_PRIORITY = new EveryRoutes.All('everyPowerUpPriority', '/every/power-up/priority', CARD, SMM2, (viewDisplay, games, gameStyles, times,) => <PriorityApp type={PowerUpPriorityTypes.POWER_UP} viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>,)
    public static readonly EVERY_RIDE_PRIORITY = new EveryRoutes.All('everyRidePriority', '/every/ride/priority', CARD, SMM2, (viewDisplay, games, gameStyles, times,) => <PriorityApp type={PowerUpPriorityTypes.RIDE} viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>,)
    public static readonly EVERY_HAT_PRIORITY = new EveryRoutes.All('everyHatPriority', '/every/hat/priority', CARD, SMM2, (viewDisplay, games, gameStyles, times,) => <PriorityApp type={PowerUpPriorityTypes.HAT} viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>,)
    public static readonly NO_PRIORITY = new EveryRoutes.All('noPriority', '/no/priority', CARD, SMM2, (viewDisplay, games, gameStyles, times,) => <PriorityApp type={PowerUpPriorityTypes.NONE} viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>,)

    public static readonly EVERY_CHARACTER_NAME = new EveryRoutes.All('everyCharacterName', '/every/character-name', CARD, SMM2, (viewDisplay, games, gameStyles, times,) => <CharacterNameApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>,)

    public static readonly EVERY_GAME_REFERENCE = new EveryRoutes.All('everyGameReference', '/every/game-reference', LIST, SMM2, () => <GameReferenceApp/>,)//README: This has the view display (list) to be similar to the other routes
    public static readonly EVERY_GAME_STYLE = new EveryRoutes.All('everyGameStyle', '/every/game-style', CARD, SMM2, (viewDisplay, games, gameStyles, times,) => <GameStyleApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>,)

    public static readonly EVERY_ENTITY = new EveryRoutes.All('everyEntity', '/every/entity', TABLE, SMM2, (viewDisplay, games, gameStyles, times,) => <EntityApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>,)
    //TODO add "entity" on specific category
    public static readonly EVERY_ENTITY_CATEGORY = new EveryRoutes.All('everyEntityCategory', '/every/entity-category', CARD, SMM2, (viewDisplay, games, gameStyles, times,) => <EntityCategoryApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>,)
    public static readonly EVERY_GROUP = new EveryRoutes.Straight('everyGroup', '/every/entity-group', () => <EntityGroupApp/>)

    public static readonly EVERY_LIMIT = new EveryRoutes.All('everyLimit', '/every/limit', TABLE, SMM2, (viewDisplay, games, gameStyles, times,) => <LimitApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times} type={LimitTypes.ALL}/>,)
    public static readonly EVERY_PLAY_LIMIT = new EveryRoutes.All('playLimit', '/play/limit', TABLE, SMM2, (viewDisplay, games, gameStyles, times,) => <LimitApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times} type={LimitTypes.PLAY}/>,)
    public static readonly EVERY_EDITOR_LIMIT = new EveryRoutes.All('editorLimit', '/editor/limit', TABLE, SMM2, (viewDisplay, games, gameStyles, times,) => <LimitApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times} type={LimitTypes.EDITOR}/>,)

    public static readonly EVERY_THEME = new EveryRoutes.All('everyTheme', '/every/theme', CARD, SMM2, (viewDisplay, games, gameStyles, times,) => <ThemeApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times} type={ThemeTypes.ALL}/>,)
    public static readonly EVERY_COURSE_THEME = new EveryRoutes.All('courseTheme', '/course/theme', CARD, SMM2, (viewDisplay, games, gameStyles, times,) => <ThemeApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times} type={ThemeTypes.COURSE}/>,)
    public static readonly EVERY_WORLD_THEME = new EveryRoutes.All('worldTheme', '/world/theme', CARD, SMM2, (viewDisplay, games, gameStyles, times,) => <ThemeApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times} type={ThemeTypes.WORLD}/>,)

    public static readonly EVERY_SOUND_EFFECT = new EveryRoutes.All('everySoundEffect', '/every/sound-effect', TABLE, SMM2, (viewDisplay, games, gameStyles, times,) => <SoundEffectApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>,)
    //TODO add "sound effect" on specific category
    public static readonly EVERY_SOUND_EFFECT_CATEGORY = new EveryRoutes.All('everySoundEffectCategory', '/every/sound-effect-category', CARD, SMM2, (viewDisplay, games, gameStyles, times,) => <SoundEffectCategoryApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>)

    public static readonly EVERY_MII_COSTUME = new EveryRoutes.All('everyMiiCostume', '/every/mii-costume', TABLE, SMM2, (viewDisplay, games, gameStyles, times,) => <MiiCostumeApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>,)
    //TODO add "mii costume" on specific category
    public static readonly EVERY_MII_COSTUME_CATEGORY = new EveryRoutes.All('everyMiiCostumeCategory', '/every/mii-costume-category', CARD, SMM2, (viewDisplay, games, gameStyles, times,) => <MiiCostumeCategoryApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>,)

    public static readonly EVERY_MYSTERY_MUSHROOM = new EveryRoutes.All('everyMysteryMushroom', '/every/mystery-mushroom', CARD, SMM1, (viewDisplay, games, gameStyles, times,) => <MysteryMushroomApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>,)

    public static readonly EVERY_PREDEFINED_MESSAGE = new EveryRoutes.All('everyPredefinedMessage', '/every/predefined-message', LIST, SMM2, (viewDisplay, games, gameStyles, times,) => <PredefinedMessageApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>,)

    public static readonly EVERY_SAMPLE_COURSE = new EveryRoutes.All('everySampleCourse', '/every/sample-course', TABLE, SMM1, (viewDisplay, games, gameStyles, times,) => <SampleCourseApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>,)
    public static readonly EVERY_OFFICIAL_COURSE = new EveryRoutes.All('everyOfficialCourse', '/every/official-course', TABLE, SMM2, (viewDisplay, games, gameStyles, times,) => <OfficialCourseApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>,)

    public static readonly EVERY_MEDAL = new EveryRoutes.All('everyMedal', '/every/medal', CARD, SMM1, (viewDisplay, games, gameStyles, times,) => <MedalApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>,)

    public static readonly EVERY_COURSE_TAG = new EveryRoutes.All('everyCourseTag', '/every/course-tag', CARD, SMM2, (viewDisplay, games, gameStyles, times,) => <CourseTagApp viewDisplay={viewDisplay} type={CourseTagTypes.ALL} games={games} gameStyles={gameStyles} times={times}/>,)
    public static readonly EVERY_OFFICIAL_COURSE_TAG = new EveryRoutes.All('officialCourseTag', '/official/course-tag', CARD, SMM2, (viewDisplay, games, gameStyles, times,) => <CourseTagApp viewDisplay={viewDisplay} type={CourseTagTypes.OFFICIAL} games={games} gameStyles={gameStyles} times={times}/>,)
    public static readonly EVERY_UNOFFICIAL_COURSE_TAG = new EveryRoutes.All('unofficialCourseTag', '/unofficial/course-tag', CARD, SMM2, (viewDisplay, games, gameStyles, times,) => <CourseTagApp viewDisplay={viewDisplay} type={CourseTagTypes.UNOFFICIAL} games={games} gameStyles={gameStyles} times={times}/>,)
    public static readonly EVERY_MAKER_CENTRAL_COURSE_TAG = new EveryRoutes.All('makerCentralCourseTag', '/maker-central/course-tag', CARD, SMM2, (viewDisplay, games, gameStyles, times,) => <CourseTagApp viewDisplay={viewDisplay} type={CourseTagTypes.MAKER_CENTRAL} games={games} gameStyles={gameStyles} times={times}/>,)

    public static readonly EVERY_INSTRUMENT = new EveryRoutes.All('everyInstrument', '/every/instrument', CARD, SMM2, (viewDisplay, games, gameStyles, times,) => <InstrumentApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>,)

    public static readonly EVERY_EDITOR_VOICE = new EveryRoutes.All('everyEditorVoice', '/every/editor-voice', CARD, SMM2, (viewDisplay, games, gameStyles, times,) => <EditorVoiceApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>,)

    public static readonly EVERY_ROUTE = new EveryRoutes.Straight('everyRoute', '/debug/every-route', () => <RouteApp/>,)

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

        public getRouteFromName(name: PossibleRouteName, language?: Nullable<ProjectLanguages>, color?: Nullable<ColorThemes>,): EveryPossibleRoutes {
            for (const value of this.values) {
                const urlName = value.urlName
                if (urlName === name) {
                    const everyRoute = new ArrayAsCollection(value.everyRoute,)
                    const routeFoundByName = everyRoute.findFirstOrNull(it => it.name === name,)
                    if (routeFoundByName != null)
                        return value.getPath(language, color, routeFoundByName.games, routeFoundByName.gameStyles, routeFoundByName.times, routeFoundByName.viewDisplay,)

                    const pathToFind = `${
                        value._getPathFromGames()}${
                        value._getPathFromGameStyles()}${
                        value._getPathFromTimes()}${
                        value._getPathFromViewDisplay()}${
                        value.urlValue}`
                    const routeFoundByPath = everyRoute.findFirstOrNull(it => it.path === pathToFind,)
                    if (routeFoundByPath != null)
                        return value.getPath(language, color, routeFoundByPath.games, routeFoundByPath.gameStyles, routeFoundByPath.times, routeFoundByPath.viewDisplay,)
                    throw new ReferenceError(`No route is findable by the direct name "${name}".`,)
                }

                const routeFromOnlyViewDisplay = this.#getRouteFromOnlyViewDisplay(value, name, language, color,)
                if (routeFromOnlyViewDisplay != null)
                    return routeFromOnlyViewDisplay

                if (name.startsWith(`${urlName} `,)) {
                    const pathToFind = `${
                        value._getPathFromGames(GameCompanion.findInName(name,),)}${
                        value._getPathFromGameStyles(GameStyles.Companion.findInName(name,),)}${
                        value._getPathFromTimes(TimeCompanion.findInName(name,),)}${
                        value._getPathFromViewDisplay(ViewDisplayCompanion.findInName(name,),)}${
                        value.urlValue}`
                    const routeFound = new ArrayAsCollection(value.everyRoute,).findFirstOrNull(it => it.path === pathToFind,)
                    if (routeFound != null)
                        return value.getPath(language, color, routeFound.games, routeFound.gameStyles, routeFound.times, routeFound.viewDisplay,)
                    throw new ReferenceError(`No route is findable by the name starting by "${name}".`,)
                }
            }

            throw new ReferenceError(`No route is findable by the name "${name}".`,)
        }

        /**
         * Get a route (if applicable) from a {@link ViewDisplays} directly
         *
         * @param value    The current {@link EveryRoutes} instance
         * @param name     The name to find
         * @param language The language in the route
         * @param color    The colour in the route
         */
        #getRouteFromOnlyViewDisplay(value: EveryRoutes, name: PossibleRouteName, language: Nullable<ProjectLanguages>, color: Nullable<ColorThemes>,): NullOrString<EveryPossibleRoutes> {
            const viewDisplays = value.viewDisplays
            if (viewDisplays.isEmpty)
                return null

            const urlName = value.urlName
            if (viewDisplays.hasSimpleList)
                if (`${urlName} (list)` === name)
                    return value.getPath(language, color, null, null, null, LIST,)
            if (viewDisplays.hasCardList)
                if (`${urlName} (card)` === name)
                    return value.getPath(language, color, null, null, null, CARD,)
            if (viewDisplays.hasCardList)
                if (`${urlName} (table)` === name)
                    return value.getPath(language, color, null, null, null, TABLE,)
            return null
        }

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #urlName
    readonly #urlPath

    readonly #routeCallback

    #everyRoutes?: Array<Route>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(name: URL_NAME, path: URL_PATH, routeCallback: RouteCallback,) {
        super()
        this.#urlName = name
        this.#urlPath = path
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


    public abstract get viewDisplays(): ViewDisplayCollection
    public abstract get defaultViewDisplay(): NullOr<ViewDisplays>

    public abstract get defaultGame(): NullOr<Games>

    public abstract get defaultGameStyles(): NullOr<CollectionHolder<GameStyles>>

    public abstract get defaultTimes(): NullOrArray<Times>


    public get routeCallback(): RouteCallback {
        return this.#routeCallback
    }


    public get everyRoute(): Array<Route> {
        return this.#everyRoutes ??= this._createEveryRoutes()
    }

    protected abstract _createEveryRoutes(): Array<Route>

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    /**
     * Get the partial path from a {@link Nullable} {@link Games} {@link CollectionHolder}
     *
     * @param value The {@link Games} to retrieve its {@link Games.urlValue}
     */
    protected _getPathFromGames(value: Nullable<CollectionHolder<Games>> = null,): PossibleGamePath {
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
        if (value.isEmpty) {
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
        if (new ArrayAsCollection(value,).isEmpty) {
            const defaultTimes = this.defaultTimes
            if (defaultTimes == null)
                return EMPTY_STRING
            return `/time-${TimeCompanion.getGroupUrl(defaultTimes,)}`
        }
        return `/time-${TimeCompanion.getGroupUrl(value,)}`
    }

    /**
     * Get the partial path from a {@link Nullable} {@link GameStyles} {@link CollectionHolder}
     *
     * @param values The {@link GameStyles} to retrieve their {@link GameStyles.urlValue}
     */
    protected _getPathFromGameStyles(values: Nullable<CollectionHolder<GameStyles>> = null,): PossibleGameStylePath {
        if (values == null) {
            const currentGameStyles = GameStyles.Companion.currentOrNull
            if (currentGameStyles == null) {
                const defaultGameStyles = this.defaultGameStyles
                if (defaultGameStyles == null)
                    return EMPTY_STRING
                return `/game-style-${GameStyles.Companion.getGroupUrlValue(defaultGameStyles,)}`
            }
            return `/game-style-${GameStyles.Companion.getGroupUrlValue(currentGameStyles,)}`
        }
        if (values.isEmpty) {
            const defaultGameStyles = this.defaultGameStyles
            if (defaultGameStyles == null)
                return EMPTY_STRING
            return `/game-style-${GameStyles.Companion.getGroupUrlValue(defaultGameStyles,)}`
        }
        return `/game-style-${GameStyles.Companion.getGroupUrlValue(values,)}`
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

    public getPath(language: Nullable<ProjectLanguages>, color: Nullable<ColorThemes>, games: Nullable<CollectionHolder<Games>> = null, gameStyles: Nullable<CollectionHolder<GameStyles>> = null, times: NullableArray<Times> = null, viewDisplay: Nullable<ViewDisplays> = null,): EveryPossibleRoutes {
        language ??= LanguageCompanion.current
        color ??= ColorCompanion.current
        return `/${language.projectAcronym}/${ColorCompanion.PREFIX}${color.colorMode}${this._getPathFromGames(games,)}${this._getPathFromGameStyles(gameStyles,)}${this._getPathFromTimes(times,)}${this._getPathFromViewDisplay(viewDisplay,)}${this.urlValue}`
    }

    //endregion -------------------- Methods --------------------

}

export namespace EveryRoutes {// eslint-disable-line @typescript-eslint/no-namespace

    /** The companion instance of a {@link EveryRoutes} */
    export const Companion = EveryRoutes.CompanionEnum.get

    export const ALL = Companion.values.toArray()


    function __retrieveAllRoutes() {
        const routes: MutableArray<Route> = []
        Companion.values.forEach(it => forEachByArray(it.everyRoute, it => routes.push(it,),),)
        return routes
    }

    /**
     * All the possible {@link Route} possible in a 1-dimensional {@link ReadonlyArray Array}
     * ordered by the {@link EveryRoutes.ordinal ordinal} order of {@link EveryRoutes}
     */
    export const ALL_ROUTES = __retrieveAllRoutes() as Array<PossibleRoute>

}

//TODO remove this test variable when the application will be complete
(window.test ??= {}).EveryRoutes = EveryRoutes

// console.info(EveryRoutes.ALL_ROUTES.map(it => ({name: it.name, path: it.path,}),),)
