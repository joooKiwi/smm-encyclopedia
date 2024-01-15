import type {Singleton}        from '@joookiwi/enumerable'
import {CompanionEnum, Enum}   from '@joookiwi/enumerable'
import {lazy}                  from 'react'

import type {ClassUsedInRoute}                                                                                                                                                                  from 'route/ClassUsedInRoute'
import type {EveryPossibleRoutes, GameRouteCallback, Names, NothingRouteCallback, Ordinals, PossibleGamePath, PossibleGameStylePath, PossibleRouteName, PossibleViewDisplayPath, RouteCallback} from 'route/EveryRoutes.types'
import type {CompanionEnumDeclaration_EveryRoutes}                                                                                                                                              from 'route/EveryRoutes.companionEnumDeclaration'

import {CourseTagTypes}            from 'app/property/CourseTagTypes'
import {LimitTypes}                from 'app/property/LimitTypes'
import {PowerUpPriorityTypes}      from 'app/property/PowerUpPriorityTypes'
import {ThemeTypes}                from 'app/property/ThemeTypes'
import {ViewDisplays}              from 'app/withInterpreter/ViewDisplays'
import {Games}                     from 'core/game/Games'
import {GameStyles}                from 'core/gameStyle/GameStyles'
import {ProjectLanguages}          from 'lang/ProjectLanguages'
import {SimpleRoute}               from 'route/SimpleRoute'
import {EMPTY_ARRAY, EMPTY_STRING} from 'util/emptyVariables'
import {GameCollection}            from 'util/collection/GameCollection'
import {GameStyleCollection}       from 'util/collection/GameStyleCollection'
import {ViewDisplayCollection}     from 'util/collection/ViewDisplayCollection'
import {NullOr}                    from '@joookiwi/enumerable/dist/types/general type'

//region -------------------- Dynamic imports --------------------

const AboutApp = lazy(() => import('app/AboutApp'))
const PredefinedMessageApp = lazy(() => import('app/PredefinedMessageApp'))
const CharacterNameApp = lazy(() => import('app/CharacterNameApp'))
const CourseTagApp = lazy(() => import('app/CourseTagApp'))
const EditorVoiceApp = lazy(() => import('app/EditorVoiceApp'))
const EntityApp = lazy(() => import('app/EntityApp'))
const EntityCategoryApp = lazy(() => import('app/EntityCategoryApp'))
const EntityGroupApp = lazy(() => import('app/EntityGroupApp'))
const GameStyleApp = lazy(() => import('app/GameStyleApp'))
const GameReferenceApp = lazy(() => import('app/GameReferenceApp'))
const InstrumentApp = lazy(() => import('app/InstrumentApp'))
const LimitApp = lazy(() => import('app/LimitApp'))
const MiiCostumeApp = lazy(() => import('app/MiiCostumeApp'))
const MiiCostumeCategoryApp = lazy(() => import('app/MiiCostumeCategoryApp'))
const MysteryMushroomApp = lazy(() => import('app/MysteryMushroomApp'))
const PowerUpRideAndHatPriorityApp = lazy(() => import('app/PowerUpRideAndHatPriorityApp'))
const SoundEffectCategoryApp = lazy(() => import('app/SoundEffectCategoryApp'))
const SoundEffectApp = lazy(() => import('app/SoundEffectApp'))
const ThemeApp = lazy(() => import('app/ThemeApp'))
const SampleCourseApp = lazy(() => import('app/SampleCourseApp'))
const MedalApp = lazy(() => import('app/MedalApp'))
const HomeApp = lazy(() => import('app/HomeApp'))
const SourcesApp = lazy(() => import('app/SourcesApp'))
const RouteApp = lazy(() => import('app/RouteApp'))

//endregion -------------------- Dynamic imports --------------------
//region -------------------- Helper constants --------------------

const NO_VIEW_DISPLAY = new ViewDisplayCollection(EMPTY_ARRAY,)
const SIMPLE_LIST_VIEW_DISPLAY = new ViewDisplayCollection([ViewDisplays.SIMPLE_LIST,],)
const NOT_TABLE_VIEW_DISPLAY = new ViewDisplayCollection([ViewDisplays.SIMPLE_LIST, ViewDisplays.CARD_LIST,],)
const ALL_VIEW_DISPLAY = new ViewDisplayCollection(ViewDisplays.CompanionEnum.get.values,)


const GamePossibilities = Games.GamePossibilitiesCompanion.get

const SMM1_GAMES_ARRAY = GamePossibilities.SMM1_ONLY
const SMM1_AND_3DS_GAMES_ARRAY = GamePossibilities.SMM1_AND_3DS
const SMM1_AND_2_GAMES_ARRAY = GamePossibilities.SMM1_AND_2
const SMM3DS_GAMES_ARRAY = GamePossibilities.SMM3DS_ONLY
const SMM3DS_AND_2_GAMES_ARRAY = GamePossibilities.SMM3DS_AND_2
const SMM2_GAMES_ARRAY = GamePossibilities.SMM2_ONLY
const ALL_GAMES_ARRAY = GamePossibilities.ALL_GAMES

const NO_GAMES_COLLECTION = new GameCollection(EMPTY_ARRAY,)
const SMM1_GAMES_COLLECTION = new GameCollection(SMM1_GAMES_ARRAY,)
// const SMM3DS_GAMES_COLLECTION = new GameCollection(SMM3DS_GAMES_ARRAY,)
const SMM2_GAMES_COLLECTION = new GameCollection(SMM2_GAMES_ARRAY,)
const ALL_GAMES_COLLECTION = new GameCollection(ALL_GAMES_ARRAY,)


const GameStylePossibilities = GameStyles.Possibilities.get

const SMB = GameStylePossibilities.SMB_ONLY
const SMB_SMB3 = GameStylePossibilities.SMB_AND_SMB3
const SMB_SMB3_SMW = GameStylePossibilities.SMB_AND_SMB3_AND_SMW
const SMB_SMB3_SMW_NSMBU = GameStylePossibilities.NOT_SM3DW
const SMB_SMB3_SMW_SM3DW = GameStylePossibilities.NOT_NSMBU
const SMB_SMB3_NSMBU = GameStylePossibilities.SMB_AND_SMB3_AND_NSMBU
const SMB_SMB3_NSMBU_SM3DW = GameStylePossibilities.NOT_SMW
const SMB_SMB3_SM3DW = GameStylePossibilities.SMB_AND_SMB3_AND_SM3DW
const SMB_SMW = GameStylePossibilities.SMB_AND_SMW
const SMB_SMW_NSMBU = GameStylePossibilities.SMB_AND_SMW_AND_NSMBU
const SMB_SMW_NSMBU_SM3DW = GameStylePossibilities.NOT_SMB3
const SMB_SMW_SM3DW = GameStylePossibilities.SMB_AND_SMW_AND_SM3DW
const SMB_NSMBU = GameStylePossibilities.SMB_AND_NSMBU
const SMB_NSMBU_SM3DW = GameStylePossibilities.SMB_AND_NSMBU_AND_SM3DW
const SMB_SM3DW = GameStylePossibilities.SMB_AND_SM3DW
const SMB3 = GameStylePossibilities.SMB3_ONLY
const SMB3_SMW = GameStylePossibilities.SMB3_AND_SMW
const SMB3_SMW_NSMBU = GameStylePossibilities.SMB3_AND_SMW_AND_NSMBU
const SMB3_SMW_NSMBU_SM3DW = GameStylePossibilities.NOT_SMB
const SMB3_SMW_SM3DW = GameStylePossibilities.SMB3_AND_SMW_AND_SM3DW
const SMB3_NSMBU = GameStylePossibilities.SMB3_AND_NSMBU
const SMB3_NSMBU_SM3DW = GameStylePossibilities.SMB3_AND_NSMBU_AND_SM3DW
const SMB3_SM3DW = GameStylePossibilities.SMB3_AND_SM3DW
const SMW = GameStylePossibilities.SMW_ONLY
const SMW_NSMBU = GameStylePossibilities.SMW_AND_NSMBU
const SMW_NSMBU_SM3DW = GameStylePossibilities.SMW_AND_NSMBU_AND_SM3DW
const SMW_SM3DW = GameStylePossibilities.SMW_AND_SM3DW
const NSMBU = GameStylePossibilities.NSMBU_ONLY
const NSMBU_SM3DW = GameStylePossibilities.NSMBU_AND_SM3DW
const SM3DW = GameStylePossibilities.SM3DW_ONLY
const ALL_GAME_STYLES = GameStylePossibilities.ALL_GAME_STYLES

const NO_GAME_STYLES_COLLECTION = new GameStyleCollection(EMPTY_ARRAY,)
const ALL_GAME_STYLES_COLLECTION = new GameStyleCollection(ALL_GAME_STYLES,)

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


        protected override _createEveryRoutes(): readonly SimpleRoute[] {
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
    private static readonly EveryPath_EveryRoutes = class EveryPath_EveryRoutes<const out SIMPLE_NAME extends string, const out SIMPLE_PATH extends string, > extends EveryRoutes<SIMPLE_NAME, SIMPLE_PATH> {

        constructor(name: SIMPLE_NAME, path: SIMPLE_PATH, defaultViewDisplay: NullOr<ViewDisplays>, routeCallback: RouteCallback,) {
            super(name, path, ALL_VIEW_DISPLAY, defaultViewDisplay ?? ViewDisplays.TABLE, ALL_GAMES_COLLECTION, Games.SUPER_MARIO_MAKER_2, NO_GAME_STYLES_COLLECTION, null, routeCallback,)
        }

        protected override _createEveryRoutes(): readonly SimpleRoute[] {
            const simpleName = this.simpleName
            const simplePath = this.simplePath
            const routeCallback = this.routeCallback

            return [
                new SimpleRoute(`${simpleName} (list Game=all)`,    `/game-all/list${simplePath}`,    ALL_GAMES_ARRAY,          null, ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1)`,      `/game-1/list${simplePath}`,      SMM1_GAMES_ARRAY,         null, ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS)`,    `/game-3ds/list${simplePath}`,    SMM3DS_GAMES_ARRAY,       null, ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2)`,      `/game-2/list${simplePath}`,      SMM2_GAMES_ARRAY,         null, ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&3DS)`,  `/game-1,3ds/list${simplePath}`,  SMM1_AND_3DS_GAMES_ARRAY, null, ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2)`,    `/game-1,2/list${simplePath}`,    SMM1_AND_2_GAMES_ARRAY,   null, ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2)`,  `/game-3ds,2/list${simplePath}`,  SMM3DS_AND_2_GAMES_ARRAY, null, ViewDisplays.SIMPLE_LIST, routeCallback,),

                new SimpleRoute(`${simpleName} (card Game=all)`,    `/game-all/card${simplePath}`,    ALL_GAMES_ARRAY,          null, ViewDisplays.CARD_LIST,   routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1)`,      `/game-1/card${simplePath}`,      SMM1_GAMES_ARRAY,         null, ViewDisplays.CARD_LIST,   routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS)`,    `/game-3ds/card${simplePath}`,    SMM3DS_GAMES_ARRAY,       null, ViewDisplays.CARD_LIST,   routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2)`,      `/game-2/card${simplePath}`,      SMM2_GAMES_ARRAY,         null, ViewDisplays.CARD_LIST,   routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&3DS)`,  `/game-1,3ds/card${simplePath}`,  SMM1_AND_3DS_GAMES_ARRAY, null, ViewDisplays.CARD_LIST,   routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2)`,    `/game-1,2/card${simplePath}`,    SMM1_AND_2_GAMES_ARRAY,   null, ViewDisplays.CARD_LIST,   routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2)`,  `/game-3ds,2/card${simplePath}`,  SMM3DS_AND_2_GAMES_ARRAY, null, ViewDisplays.CARD_LIST,   routeCallback,),

                new SimpleRoute(`${simpleName} (table Game=all)`,   `/game-all/table${simplePath}`,   ALL_GAMES_ARRAY,          null, ViewDisplays.TABLE,       routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1)`,     `/game-1/table${simplePath}`,     SMM1_GAMES_ARRAY,         null, ViewDisplays.TABLE,       routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS)`,   `/game-3ds/table${simplePath}`,   SMM3DS_GAMES_ARRAY,       null, ViewDisplays.TABLE,       routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2)`,     `/game-2/table${simplePath}`,     SMM2_GAMES_ARRAY,         null, ViewDisplays.TABLE,       routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&3DS)`, `/game-1,3ds/table${simplePath}`, SMM1_AND_3DS_GAMES_ARRAY, null, ViewDisplays.TABLE,       routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2)`,   `/game-1,2/table${simplePath}`,   SMM1_AND_2_GAMES_ARRAY,   null, ViewDisplays.TABLE,       routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2)`, `/game-3ds,2/table${simplePath}`, SMM3DS_AND_2_GAMES_ARRAY, null, ViewDisplays.TABLE,       routeCallback,),
            ]
        }

        protected override _getPartialPathFromGameStyles() {
            return EMPTY_STRING
        }

    }
    /** A representation of an {@link EveryRoutes} instance with everything in its route ({@link ViewDisplays}, {@link GameCollection} and {@link GameStyleCollection}) */
    private static readonly EveryPath_EveryRoutesWithGameStyle = class EveryPath_EveryRoutesWithGameStyle<const out SIMPLE_NAME extends string, const out SIMPLE_PATH extends string, > extends EveryRoutes<SIMPLE_NAME, SIMPLE_PATH> {

        constructor(name: SIMPLE_NAME, path: SIMPLE_PATH, defaultViewDisplay: NullOr<ViewDisplays>, routeCallback: RouteCallback,) {
            super(name, path, ALL_VIEW_DISPLAY, defaultViewDisplay ?? ViewDisplays.TABLE, ALL_GAMES_COLLECTION, Games.SUPER_MARIO_MAKER_2, ALL_GAME_STYLES_COLLECTION, ALL_GAME_STYLES, routeCallback,)
        }

        protected override _createEveryRoutes(): readonly SimpleRoute[] {
            const simpleName = this.simpleName
            const simplePath = this.simplePath
            const routeCallback = this.routeCallback

            return [
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=all)`,          `/game-all/game-style-all/list${simplePath}`,          ALL_GAMES_ARRAY,          ALL_GAME_STYLES,      ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=1)`,            `/game-all/game-style-1/list${simplePath}`,            ALL_GAMES_ARRAY,          SMB,                  ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=3)`,            `/game-all/game-style-3/list${simplePath}`,            ALL_GAMES_ARRAY,          SMB3,                 ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=W)`,            `/game-all/game-style-w/list${simplePath}`,            ALL_GAMES_ARRAY,          SMW,                  ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=U)`,            `/game-all/game-style-u/list${simplePath}`,            ALL_GAMES_ARRAY,          NSMBU,                ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=3DW)`,          `/game-all/game-style-3dw/list${simplePath}`,          ALL_GAMES_ARRAY,          SM3DW,                ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=1&3)`,          `/game-all/game-style-1,3/list${simplePath}`,          ALL_GAMES_ARRAY,          SMB_SMB3,             ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=1&W)`,          `/game-all/game-style-1,w/list${simplePath}`,          ALL_GAMES_ARRAY,          SMB_SMW,              ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=1&U)`,          `/game-all/game-style-1,u/list${simplePath}`,          ALL_GAMES_ARRAY,          SMB_NSMBU,            ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=1&3DW)`,        `/game-all/game-style-1,3dw/list${simplePath}`,        ALL_GAMES_ARRAY,          SMB_SM3DW,            ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=3&W)`,          `/game-all/game-style-3,w/list${simplePath}`,          ALL_GAMES_ARRAY,          SMB3_SMW,             ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=3&U)`,          `/game-all/game-style-3,u/list${simplePath}`,          ALL_GAMES_ARRAY,          SMB3_NSMBU,           ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=3&3DW)`,        `/game-all/game-style-3,3dw/list${simplePath}`,        ALL_GAMES_ARRAY,          SMB3_SM3DW,           ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=W&U)`,          `/game-all/game-style-w,u/list${simplePath}`,          ALL_GAMES_ARRAY,          SMW_NSMBU,            ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=W&3DW)`,        `/game-all/game-style-w,3dw/list${simplePath}`,        ALL_GAMES_ARRAY,          SMW_SM3DW,            ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=U&3DW)`,        `/game-all/game-style-u,3dw/list${simplePath}`,        ALL_GAMES_ARRAY,          NSMBU_SM3DW,          ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=1&3&W)`,        `/game-all/game-style-1,3,w/list${simplePath}`,        ALL_GAMES_ARRAY,          SMB_SMB3_SMW,         ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=1&3&U)`,        `/game-all/game-style-1,3,u/list${simplePath}`,        ALL_GAMES_ARRAY,          SMB_SMB3_NSMBU,       ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=1&3&3DW)`,      `/game-all/game-style-1,3,3dw/list${simplePath}`,      ALL_GAMES_ARRAY,          SMB_SMB3_SM3DW,       ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=1&W&U)`,        `/game-all/game-style-1,w,u/list${simplePath}`,        ALL_GAMES_ARRAY,          SMB_SMW_NSMBU,        ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=1&W&3DW)`,      `/game-all/game-style-1,w,3dw/list${simplePath}`,      ALL_GAMES_ARRAY,          SMB_SMW_SM3DW,        ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=1&U&3DW)`,      `/game-all/game-style-1,u,3dw/list${simplePath}`,      ALL_GAMES_ARRAY,          SMB_NSMBU_SM3DW,      ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=3&W&U)`,        `/game-all/game-style-3,w,u/list${simplePath}`,        ALL_GAMES_ARRAY,          SMB3_SMW_NSMBU,       ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=3&W&3DW)`,      `/game-all/game-style-3,w,3dw/list${simplePath}`,      ALL_GAMES_ARRAY,          SMB3_SMW_SM3DW,       ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=3&U&3DW)`,      `/game-all/game-style-3,u,3dw/list${simplePath}`,      ALL_GAMES_ARRAY,          SMB3_NSMBU_SM3DW,     ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=W&U&3DW)`,      `/game-all/game-style-w,u,3dw/list${simplePath}`,      ALL_GAMES_ARRAY,          SMW_NSMBU_SM3DW,      ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=1&3&W&U)`,      `/game-all/game-style-1,3,w,u/list${simplePath}`,      ALL_GAMES_ARRAY,          SMB_SMB3_SMW_NSMBU,   ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=1&3&W&3DW)`,    `/game-all/game-style-1,3,w,3dw/list${simplePath}`,    ALL_GAMES_ARRAY,          SMB_SMB3_SMW_SM3DW,   ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=1&3&U&3DW)`,    `/game-all/game-style-1,3,u,3dw/list${simplePath}`,    ALL_GAMES_ARRAY,          SMB_SMB3_NSMBU_SM3DW, ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=1&W&U&3DW)`,    `/game-all/game-style-1,w,u,3dw/list${simplePath}`,    ALL_GAMES_ARRAY,          SMB_SMW_NSMBU_SM3DW,  ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=all GameStyle=3&W&U&3DW)`,    `/game-all/game-style-3,w,u,3dw/list${simplePath}`,    ALL_GAMES_ARRAY,          SMB3_SMW_NSMBU_SM3DW, ViewDisplays.SIMPLE_LIST, routeCallback,),

                new SimpleRoute(`${simpleName} (list Game=1 GameStyle=all)`,            `/game-1/game-style-all/list${simplePath}`,            SMM1_GAMES_ARRAY,         ALL_GAME_STYLES,      ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1 GameStyle=1)`,              `/game-1/game-style-1/list${simplePath}`,              SMM1_GAMES_ARRAY,         SMB,                  ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1 GameStyle=3)`,              `/game-1/game-style-3/list${simplePath}`,              SMM1_GAMES_ARRAY,         SMB3,                 ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1 GameStyle=W)`,              `/game-1/game-style-w/list${simplePath}`,              SMM1_GAMES_ARRAY,         SMW,                  ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1 GameStyle=U)`,              `/game-1/game-style-u/list${simplePath}`,              SMM1_GAMES_ARRAY,         NSMBU,                ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1 GameStyle=1&3)`,            `/game-1/game-style-1,3/list${simplePath}`,            SMM1_GAMES_ARRAY,         SMB_SMB3,             ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1 GameStyle=1&W)`,            `/game-1/game-style-1,w/list${simplePath}`,            SMM1_GAMES_ARRAY,         SMB_SMW,              ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1 GameStyle=1&U)`,            `/game-1/game-style-1,u/list${simplePath}`,            SMM1_GAMES_ARRAY,         SMB_NSMBU,            ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1 GameStyle=3&W)`,            `/game-1/game-style-3,w/list${simplePath}`,            SMM1_GAMES_ARRAY,         SMB3_SMW,             ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1 GameStyle=3&U)`,            `/game-1/game-style-3,u/list${simplePath}`,            SMM1_GAMES_ARRAY,         SMB3_NSMBU,           ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1 GameStyle=W&U)`,            `/game-1/game-style-w,u/list${simplePath}`,            SMM1_GAMES_ARRAY,         SMW_NSMBU,            ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1 GameStyle=1&3&W)`,          `/game-1/game-style-1,3,w/list${simplePath}`,          SMM1_GAMES_ARRAY,         SMB_SMB3_SMW,         ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1 GameStyle=1&3&U)`,          `/game-1/game-style-1,3,u/list${simplePath}`,          SMM1_GAMES_ARRAY,         SMB_SMB3_NSMBU,       ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1 GameStyle=1&W&U)`,          `/game-1/game-style-1,w,u/list${simplePath}`,          SMM1_GAMES_ARRAY,         SMB_SMW_NSMBU,        ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1 GameStyle=3&W&U)`,          `/game-1/game-style-3,w,u/list${simplePath}`,          SMM1_GAMES_ARRAY,         SMB3_SMW_NSMBU,       ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1 GameStyle=1&3&W&U)`,        `/game-1/game-style-1,3,w,u/list${simplePath}`,        SMM1_GAMES_ARRAY,         SMB_SMB3_SMW_NSMBU,   ViewDisplays.SIMPLE_LIST, routeCallback,),

                new SimpleRoute(`${simpleName} (list Game=3DS GameStyle=all)`,          `/game-3ds/game-style-all/list${simplePath}`,          SMM3DS_GAMES_ARRAY,       ALL_GAME_STYLES,      ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS GameStyle=1)`,            `/game-3ds/game-style-1/list${simplePath}`,            SMM3DS_GAMES_ARRAY,       SMB,                  ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS GameStyle=3)`,            `/game-3ds/game-style-3/list${simplePath}`,            SMM3DS_GAMES_ARRAY,       SMB3,                 ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS GameStyle=W)`,            `/game-3ds/game-style-w/list${simplePath}`,            SMM3DS_GAMES_ARRAY,       SMW,                  ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS GameStyle=U)`,            `/game-3ds/game-style-u/list${simplePath}`,            SMM3DS_GAMES_ARRAY,       NSMBU,                ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS GameStyle=1&3)`,          `/game-3ds/game-style-1,3/list${simplePath}`,          SMM3DS_GAMES_ARRAY,       SMB_SMB3,             ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS GameStyle=1&W)`,          `/game-3ds/game-style-1,w/list${simplePath}`,          SMM3DS_GAMES_ARRAY,       SMB_SMW,              ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS GameStyle=1&U)`,          `/game-3ds/game-style-1,u/list${simplePath}`,          SMM3DS_GAMES_ARRAY,       SMB_NSMBU,            ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS GameStyle=3&W)`,          `/game-3ds/game-style-3,w/list${simplePath}`,          SMM3DS_GAMES_ARRAY,       SMB3_SMW,             ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS GameStyle=3&U)`,          `/game-3ds/game-style-3,u/list${simplePath}`,          SMM3DS_GAMES_ARRAY,       SMB3_NSMBU,           ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS GameStyle=W&U)`,          `/game-3ds/game-style-w,u/list${simplePath}`,          SMM3DS_GAMES_ARRAY,       SMW_NSMBU,            ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS GameStyle=1&3&W)`,        `/game-3ds/game-style-1,3,w/list${simplePath}`,        SMM3DS_GAMES_ARRAY,       SMB_SMB3_SMW,         ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS GameStyle=1&3&U)`,        `/game-3ds/game-style-1,3,u/list${simplePath}`,        SMM3DS_GAMES_ARRAY,       SMB_SMB3_NSMBU,       ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS GameStyle=1&W&U)`,        `/game-3ds/game-style-1,w,u/list${simplePath}`,        SMM3DS_GAMES_ARRAY,       SMB_SMW_NSMBU,        ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS GameStyle=3&W&U)`,        `/game-3ds/game-style-3,w,u/list${simplePath}`,        SMM3DS_GAMES_ARRAY,       SMB3_SMW_NSMBU,       ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS GameStyle=1&3&W&U)`,      `/game-3ds/game-style-1,3,w,u/list${simplePath}`,      SMM3DS_GAMES_ARRAY,       SMB_SMB3_SMW_NSMBU,   ViewDisplays.SIMPLE_LIST, routeCallback,),

                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=all)`,            `/game-2/game-style-all/list${simplePath}`,            SMM2_GAMES_ARRAY,         ALL_GAME_STYLES,      ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=1)`,              `/game-2/game-style-1/list${simplePath}`,              SMM2_GAMES_ARRAY,         SMB,                  ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=3)`,              `/game-2/game-style-3/list${simplePath}`,              SMM2_GAMES_ARRAY,         SMB3,                 ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=W)`,              `/game-2/game-style-w/list${simplePath}`,              SMM2_GAMES_ARRAY,         SMW,                  ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=U)`,              `/game-2/game-style-u/list${simplePath}`,              SMM2_GAMES_ARRAY,         NSMBU,                ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=3DW)`,            `/game-2/game-style-3dw/list${simplePath}`,            SMM2_GAMES_ARRAY,         SM3DW,                ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=1&3)`,            `/game-2/game-style-1,3/list${simplePath}`,            SMM2_GAMES_ARRAY,         SMB_SMB3,             ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=1&W)`,            `/game-2/game-style-1,w/list${simplePath}`,            SMM2_GAMES_ARRAY,         SMB_SMW,              ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=1&U)`,            `/game-2/game-style-1,u/list${simplePath}`,            SMM2_GAMES_ARRAY,         SMB_NSMBU,            ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=1&3DW)`,          `/game-2/game-style-1,3dw/list${simplePath}`,          SMM2_GAMES_ARRAY,         SMB_SM3DW,            ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=3&W)`,            `/game-2/game-style-3,w/list${simplePath}`,            SMM2_GAMES_ARRAY,         SMB3_SMW,             ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=3&U)`,            `/game-2/game-style-3,u/list${simplePath}`,            SMM2_GAMES_ARRAY,         SMB3_NSMBU,           ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=3&3DW)`,          `/game-2/game-style-3,3dw/list${simplePath}`,          SMM2_GAMES_ARRAY,         SMB3_SM3DW,           ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=W&U)`,            `/game-2/game-style-w,u/list${simplePath}`,            SMM2_GAMES_ARRAY,         SMW_NSMBU,            ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=W&3DW)`,          `/game-2/game-style-w,3dw/list${simplePath}`,          SMM2_GAMES_ARRAY,         SMW_SM3DW,            ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=U&3DW)`,          `/game-2/game-style-u,3dw/list${simplePath}`,          SMM2_GAMES_ARRAY,         NSMBU_SM3DW,          ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=1&3&W)`,          `/game-2/game-style-1,3,w/list${simplePath}`,          SMM2_GAMES_ARRAY,         SMB_SMB3_SMW,         ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=1&3&U)`,          `/game-2/game-style-1,3,u/list${simplePath}`,          SMM2_GAMES_ARRAY,         SMB_SMB3_NSMBU,       ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=1&3&3DW)`,        `/game-2/game-style-1,3,3dw/list${simplePath}`,        SMM2_GAMES_ARRAY,         SMB_SMB3_SM3DW,       ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=1&W&U)`,          `/game-2/game-style-1,w,u/list${simplePath}`,          SMM2_GAMES_ARRAY,         SMB_SMW_NSMBU,        ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=1&W&3DW)`,        `/game-2/game-style-1,w,3dw/list${simplePath}`,        SMM2_GAMES_ARRAY,         SMB_SMW_SM3DW,        ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=1&U&3DW)`,        `/game-2/game-style-1,u,3dw/list${simplePath}`,        SMM2_GAMES_ARRAY,         SMB_NSMBU_SM3DW,      ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=3&W&U)`,          `/game-2/game-style-3,w,u/list${simplePath}`,          SMM2_GAMES_ARRAY,         SMB3_SMW_NSMBU,       ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=3&W&3DW)`,        `/game-2/game-style-3,w,3dw/list${simplePath}`,        SMM2_GAMES_ARRAY,         SMB3_SMW_SM3DW,       ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=3&U&3DW)`,        `/game-2/game-style-3,u,3dw/list${simplePath}`,        SMM2_GAMES_ARRAY,         SMB3_NSMBU_SM3DW,     ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=W&U&3DW)`,        `/game-2/game-style-w,u,3dw/list${simplePath}`,        SMM2_GAMES_ARRAY,         SMW_NSMBU_SM3DW,      ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=1&3&W&U)`,        `/game-2/game-style-1,3,w,u/list${simplePath}`,        SMM2_GAMES_ARRAY,         SMB_SMB3_SMW_NSMBU,   ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=1&3&W&3DW)`,      `/game-2/game-style-1,3,w,3dw/list${simplePath}`,      SMM2_GAMES_ARRAY,         SMB_SMB3_SMW_SM3DW,   ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=1&3&U&3DW)`,      `/game-2/game-style-1,3,u,3dw/list${simplePath}`,      SMM2_GAMES_ARRAY,         SMB_SMB3_NSMBU_SM3DW, ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=1&W&U&3DW)`,      `/game-2/game-style-1,w,u,3dw/list${simplePath}`,      SMM2_GAMES_ARRAY,         SMB_SMW_NSMBU_SM3DW,  ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2 GameStyle=3&W&U&3DW)`,      `/game-2/game-style-3,w,u,3dw/list${simplePath}`,      SMM2_GAMES_ARRAY,         SMB3_SMW_NSMBU_SM3DW, ViewDisplays.SIMPLE_LIST, routeCallback,),

                new SimpleRoute(`${simpleName} (list Game=1&3DS GameStyle=all)`,        `/game-1,3ds/game-style-all/list${simplePath}`,        SMM1_AND_3DS_GAMES_ARRAY, ALL_GAME_STYLES,      ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&3DS GameStyle=1)`,          `/game-1,3ds/game-style-1/list${simplePath}`,          SMM1_AND_3DS_GAMES_ARRAY, SMB,                  ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&3DS GameStyle=3)`,          `/game-1,3ds/game-style-3/list${simplePath}`,          SMM1_AND_3DS_GAMES_ARRAY, SMB3,                 ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&3DS GameStyle=W)`,          `/game-1,3ds/game-style-w/list${simplePath}`,          SMM1_AND_3DS_GAMES_ARRAY, SMW,                  ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&3DS GameStyle=U)`,          `/game-1,3ds/game-style-u/list${simplePath}`,          SMM1_AND_3DS_GAMES_ARRAY, NSMBU,                ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&3DS GameStyle=1&3)`,        `/game-1,3ds/game-style-1,3/list${simplePath}`,        SMM1_AND_3DS_GAMES_ARRAY, SMB_SMB3,             ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&3DS GameStyle=1&W)`,        `/game-1,3ds/game-style-1,w/list${simplePath}`,        SMM1_AND_3DS_GAMES_ARRAY, SMB_SMW,              ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&3DS GameStyle=1&U)`,        `/game-1,3ds/game-style-1,u/list${simplePath}`,        SMM1_AND_3DS_GAMES_ARRAY, SMB_NSMBU,            ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&3DS GameStyle=3&W)`,        `/game-1,3ds/game-style-3,w/list${simplePath}`,        SMM1_AND_3DS_GAMES_ARRAY, SMB3_SMW,             ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&3DS GameStyle=3&U)`,        `/game-1,3ds/game-style-3,u/list${simplePath}`,        SMM1_AND_3DS_GAMES_ARRAY, SMB3_NSMBU,           ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&3DS GameStyle=W&U)`,        `/game-1,3ds/game-style-w,u/list${simplePath}`,        SMM1_AND_3DS_GAMES_ARRAY, SMW_NSMBU,            ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&3DS GameStyle=1&3&W)`,      `/game-1,3ds/game-style-1,3,w/list${simplePath}`,      SMM1_AND_3DS_GAMES_ARRAY, SMB_SMB3_SMW,         ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&3DS GameStyle=1&3&U)`,      `/game-1,3ds/game-style-1,3,u/list${simplePath}`,      SMM1_AND_3DS_GAMES_ARRAY, SMB_SMB3_NSMBU,       ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&3DS GameStyle=1&W&U)`,      `/game-1,3ds/game-style-1,w,u/list${simplePath}`,      SMM1_AND_3DS_GAMES_ARRAY, SMB_SMW_NSMBU,        ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&3DS GameStyle=3&W&U)`,      `/game-1,3ds/game-style-3,w,u/list${simplePath}`,      SMM1_AND_3DS_GAMES_ARRAY, SMB3_SMW_NSMBU,       ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&3DS GameStyle=1&3&W&U)`,    `/game-1,3ds/game-style-1,3,w,u/list${simplePath}`,    SMM1_AND_3DS_GAMES_ARRAY, SMB_SMB3_SMW_NSMBU,   ViewDisplays.SIMPLE_LIST, routeCallback,),

                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=all)`,          `/game-1,2/game-style-all/list${simplePath}`,          SMM1_AND_2_GAMES_ARRAY,   ALL_GAME_STYLES,      ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=1)`,            `/game-1,2/game-style-1/list${simplePath}`,            SMM1_AND_2_GAMES_ARRAY,   SMB,                  ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=3)`,            `/game-1,2/game-style-3/list${simplePath}`,            SMM1_AND_2_GAMES_ARRAY,   SMB3,                 ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=W)`,            `/game-1,2/game-style-w/list${simplePath}`,            SMM1_AND_2_GAMES_ARRAY,   SMW,                  ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=U)`,            `/game-1,2/game-style-u/list${simplePath}`,            SMM1_AND_2_GAMES_ARRAY,   NSMBU,                ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=3DW)`,          `/game-1,2/game-style-3dw/list${simplePath}`,          SMM1_AND_2_GAMES_ARRAY,   SM3DW,                ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=1&3)`,          `/game-1,2/game-style-1,3/list${simplePath}`,          SMM1_AND_2_GAMES_ARRAY,   SMB_SMB3,             ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=1&W)`,          `/game-1,2/game-style-1,w/list${simplePath}`,          SMM1_AND_2_GAMES_ARRAY,   SMB_SMW,              ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=1&U)`,          `/game-1,2/game-style-1,u/list${simplePath}`,          SMM1_AND_2_GAMES_ARRAY,   SMB_NSMBU,            ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=1&3DW)`,        `/game-1,2/game-style-1,3dw/list${simplePath}`,        SMM1_AND_2_GAMES_ARRAY,   SMB_SM3DW,            ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=3&W)`,          `/game-1,2/game-style-3,w/list${simplePath}`,          SMM1_AND_2_GAMES_ARRAY,   SMB3_SMW,             ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=3&U)`,          `/game-1,2/game-style-3,u/list${simplePath}`,          SMM1_AND_2_GAMES_ARRAY,   SMB3_NSMBU,           ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=3&3DW)`,        `/game-1,2/game-style-3,3dw/list${simplePath}`,        SMM1_AND_2_GAMES_ARRAY,   SMB3_SM3DW,           ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=W&U)`,          `/game-1,2/game-style-w,u/list${simplePath}`,          SMM1_AND_2_GAMES_ARRAY,   SMW_NSMBU,            ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=W&3DW)`,        `/game-1,2/game-style-w,3dw/list${simplePath}`,        SMM1_AND_2_GAMES_ARRAY,   SMW_SM3DW,            ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=U&3DW)`,        `/game-1,2/game-style-u,3dw/list${simplePath}`,        SMM1_AND_2_GAMES_ARRAY,   NSMBU_SM3DW,          ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=1&3&W)`,        `/game-1,2/game-style-1,3,w/list${simplePath}`,        SMM1_AND_2_GAMES_ARRAY,   SMB_SMB3_SMW,         ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=1&3&U)`,        `/game-1,2/game-style-1,3,u/list${simplePath}`,        SMM1_AND_2_GAMES_ARRAY,   SMB_SMB3_NSMBU,       ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=1&3&3DW)`,      `/game-1,2/game-style-1,3,3dw/list${simplePath}`,      SMM1_AND_2_GAMES_ARRAY,   SMB_SMB3_SM3DW,       ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=1&W&U)`,        `/game-1,2/game-style-1,w,u/list${simplePath}`,        SMM1_AND_2_GAMES_ARRAY,   SMB_SMW_NSMBU,        ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=1&W&3DW)`,      `/game-1,2/game-style-1,w,3dw/list${simplePath}`,      SMM1_AND_2_GAMES_ARRAY,   SMB_SMW_SM3DW,        ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=1&U&3DW)`,      `/game-1,2/game-style-1,u,3dw/list${simplePath}`,      SMM1_AND_2_GAMES_ARRAY,   SMB_NSMBU_SM3DW,      ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=3&W&U)`,        `/game-1,2/game-style-3,w,u/list${simplePath}`,        SMM1_AND_2_GAMES_ARRAY,   SMB3_SMW_NSMBU,       ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=3&W&3DW)`,      `/game-1,2/game-style-3,w,3dw/list${simplePath}`,      SMM1_AND_2_GAMES_ARRAY,   SMB3_SMW_SM3DW,       ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=3&U&3DW)`,      `/game-1,2/game-style-3,u,3dw/list${simplePath}`,      SMM1_AND_2_GAMES_ARRAY,   SMB3_NSMBU_SM3DW,     ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=W&U&3DW)`,      `/game-1,2/game-style-w,u,3dw/list${simplePath}`,      SMM1_AND_2_GAMES_ARRAY,   SMW_NSMBU_SM3DW,      ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=1&3&W&U)`,      `/game-1,2/game-style-1,3,w,u/list${simplePath}`,      SMM1_AND_2_GAMES_ARRAY,   SMB_SMB3_SMW_NSMBU,   ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=1&3&W&3DW)`,    `/game-1,2/game-style-1,3,w,3dw/list${simplePath}`,    SMM1_AND_2_GAMES_ARRAY,   SMB_SMB3_SMW_SM3DW,   ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=1&3&U&3DW)`,    `/game-1,2/game-style-1,3,u,3dw/list${simplePath}`,    SMM1_AND_2_GAMES_ARRAY,   SMB_SMB3_NSMBU_SM3DW, ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=1&W&U&3DW)`,    `/game-1,2/game-style-1,w,u,3dw/list${simplePath}`,    SMM1_AND_2_GAMES_ARRAY,   SMB_SMW_NSMBU_SM3DW,  ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2 GameStyle=3&W&U&3DW)`,    `/game-1,2/game-style-3,w,u,3dw/list${simplePath}`,    SMM1_AND_2_GAMES_ARRAY,   SMB3_SMW_NSMBU_SM3DW, ViewDisplays.SIMPLE_LIST, routeCallback,),

                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=all)`,        `/game-3ds,2/game-style-all/list${simplePath}`,        SMM3DS_AND_2_GAMES_ARRAY, ALL_GAME_STYLES,      ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=1)`,          `/game-3ds,2/game-style-1/list${simplePath}`,          SMM3DS_AND_2_GAMES_ARRAY, SMB,                  ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=3)`,          `/game-3ds,2/game-style-3/list${simplePath}`,          SMM3DS_AND_2_GAMES_ARRAY, SMB3,                 ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=W)`,          `/game-3ds,2/game-style-w/list${simplePath}`,          SMM3DS_AND_2_GAMES_ARRAY, SMW,                  ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=U)`,          `/game-3ds,2/game-style-u/list${simplePath}`,          SMM3DS_AND_2_GAMES_ARRAY, NSMBU,                ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=3DW)`,        `/game-3ds,2/game-style-3dw/list${simplePath}`,        SMM3DS_AND_2_GAMES_ARRAY, SM3DW,                ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=1&3)`,        `/game-3ds,2/game-style-1,3/list${simplePath}`,        SMM3DS_AND_2_GAMES_ARRAY, SMB_SMB3,             ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=1&W)`,        `/game-3ds,2/game-style-1,w/list${simplePath}`,        SMM3DS_AND_2_GAMES_ARRAY, SMB_SMW,              ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=1&U)`,        `/game-3ds,2/game-style-1,u/list${simplePath}`,        SMM3DS_AND_2_GAMES_ARRAY, SMB_NSMBU,            ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=1&3DW)`,      `/game-3ds,2/game-style-1,3dw/list${simplePath}`,      SMM3DS_AND_2_GAMES_ARRAY, SMB_SM3DW,            ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=3&W)`,        `/game-3ds,2/game-style-3,w/list${simplePath}`,        SMM3DS_AND_2_GAMES_ARRAY, SMB3_SMW,             ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=3&U)`,        `/game-3ds,2/game-style-3,u/list${simplePath}`,        SMM3DS_AND_2_GAMES_ARRAY, SMB3_NSMBU,           ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=3&3DW)`,      `/game-3ds,2/game-style-3,3dw/list${simplePath}`,      SMM3DS_AND_2_GAMES_ARRAY, SMB3_SM3DW,           ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=W&U)`,        `/game-3ds,2/game-style-w,u/list${simplePath}`,        SMM3DS_AND_2_GAMES_ARRAY, SMW_NSMBU,            ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=W&3DW)`,      `/game-3ds,2/game-style-w,3dw/list${simplePath}`,      SMM3DS_AND_2_GAMES_ARRAY, SMW_SM3DW,            ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=U&3DW)`,      `/game-3ds,2/game-style-u,3dw/list${simplePath}`,      SMM3DS_AND_2_GAMES_ARRAY, NSMBU_SM3DW,          ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=1&3&W)`,      `/game-3ds,2/game-style-1,3,w/list${simplePath}`,      SMM3DS_AND_2_GAMES_ARRAY, SMB_SMB3_SMW,         ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=1&3&U)`,      `/game-3ds,2/game-style-1,3,u/list${simplePath}`,      SMM3DS_AND_2_GAMES_ARRAY, SMB_SMB3_NSMBU,       ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=1&3&3DW)`,    `/game-3ds,2/game-style-1,3,3dw/list${simplePath}`,    SMM3DS_AND_2_GAMES_ARRAY, SMB_SMB3_SM3DW,       ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=1&W&U)`,      `/game-3ds,2/game-style-1,w,u/list${simplePath}`,      SMM3DS_AND_2_GAMES_ARRAY, SMB_SMW_NSMBU,        ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=1&W&3DW)`,    `/game-3ds,2/game-style-1,w,3dw/list${simplePath}`,    SMM3DS_AND_2_GAMES_ARRAY, SMB_SMW_SM3DW,        ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=1&U&3DW)`,    `/game-3ds,2/game-style-1,u,3dw/list${simplePath}`,    SMM3DS_AND_2_GAMES_ARRAY, SMB_NSMBU_SM3DW,      ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=3&W&U)`,      `/game-3ds,2/game-style-3,w,u/list${simplePath}`,      SMM3DS_AND_2_GAMES_ARRAY, SMB3_SMW_NSMBU,       ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=3&W&3DW)`,    `/game-3ds,2/game-style-3,w,3dw/list${simplePath}`,    SMM3DS_AND_2_GAMES_ARRAY, SMB3_SMW_SM3DW,       ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=3&U&3DW)`,    `/game-3ds,2/game-style-3,u,3dw/list${simplePath}`,    SMM3DS_AND_2_GAMES_ARRAY, SMB3_NSMBU_SM3DW,     ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=W&U&3DW)`,    `/game-3ds,2/game-style-w,u,3dw/list${simplePath}`,    SMM3DS_AND_2_GAMES_ARRAY, SMW_NSMBU_SM3DW,      ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=1&3&W&U)`,    `/game-3ds,2/game-style-1,3,w,u/list${simplePath}`,    SMM3DS_AND_2_GAMES_ARRAY, SMB_SMB3_SMW_NSMBU,   ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=1&3&W&3DW)`,  `/game-3ds,2/game-style-1,3,w,3dw/list${simplePath}`,  SMM3DS_AND_2_GAMES_ARRAY, SMB_SMB3_SMW_SM3DW,   ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=1&3&U&3DW)`,  `/game-3ds,2/game-style-1,3,u,3dw/list${simplePath}`,  SMM3DS_AND_2_GAMES_ARRAY, SMB_SMB3_NSMBU_SM3DW, ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=1&W&U&3DW)`,  `/game-3ds,2/game-style-1,w,u,3dw/list${simplePath}`,  SMM3DS_AND_2_GAMES_ARRAY, SMB_SMW_NSMBU_SM3DW,  ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2 GameStyle=3&W&U&3DW)`,  `/game-3ds,2/game-style-3,w,u,3dw/list${simplePath}`,  SMM3DS_AND_2_GAMES_ARRAY, SMB3_SMW_NSMBU_SM3DW, ViewDisplays.SIMPLE_LIST, routeCallback,),


                new SimpleRoute(`${simpleName} (card Game=all GameStyle=all)`,          `/game-all/game-style-all/card${simplePath}`,          ALL_GAMES_ARRAY,          ALL_GAME_STYLES,      ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=all GameStyle=1)`,            `/game-all/game-style-1/card${simplePath}`,            ALL_GAMES_ARRAY,          SMB,                  ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=all GameStyle=3)`,            `/game-all/game-style-3/card${simplePath}`,            ALL_GAMES_ARRAY,          SMB3,                 ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=all GameStyle=W)`,            `/game-all/game-style-w/card${simplePath}`,            ALL_GAMES_ARRAY,          SMW,                  ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=all GameStyle=U)`,            `/game-all/game-style-u/card${simplePath}`,            ALL_GAMES_ARRAY,          NSMBU,                ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=all GameStyle=3DW)`,          `/game-all/game-style-3dw/card${simplePath}`,          ALL_GAMES_ARRAY,          SM3DW,                ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=all GameStyle=1&3)`,          `/game-all/game-style-1,3/card${simplePath}`,          ALL_GAMES_ARRAY,          SMB_SMB3,             ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=all GameStyle=1&W)`,          `/game-all/game-style-1,w/card${simplePath}`,          ALL_GAMES_ARRAY,          SMB_SMW,              ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=all GameStyle=1&U)`,          `/game-all/game-style-1,u/card${simplePath}`,          ALL_GAMES_ARRAY,          SMB_NSMBU,            ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=all GameStyle=1&3DW)`,        `/game-all/game-style-1,3dw/card${simplePath}`,        ALL_GAMES_ARRAY,          SMB_SM3DW,            ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=all GameStyle=3&W)`,          `/game-all/game-style-3,w/card${simplePath}`,          ALL_GAMES_ARRAY,          SMB3_SMW,             ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=all GameStyle=3&U)`,          `/game-all/game-style-3,u/card${simplePath}`,          ALL_GAMES_ARRAY,          SMB3_NSMBU,           ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=all GameStyle=3&3DW)`,        `/game-all/game-style-3,3dw/card${simplePath}`,        ALL_GAMES_ARRAY,          SMB3_SM3DW,           ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=all GameStyle=W&U)`,          `/game-all/game-style-w,u/card${simplePath}`,          ALL_GAMES_ARRAY,          SMW_NSMBU,            ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=all GameStyle=W&3DW)`,        `/game-all/game-style-w,3dw/card${simplePath}`,        ALL_GAMES_ARRAY,          SMW_SM3DW,            ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=all GameStyle=U&3DW)`,        `/game-all/game-style-u,3dw/card${simplePath}`,        ALL_GAMES_ARRAY,          NSMBU_SM3DW,          ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=all GameStyle=1&3&W)`,        `/game-all/game-style-1,3,w/card${simplePath}`,        ALL_GAMES_ARRAY,          SMB_SMB3_SMW,         ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=all GameStyle=1&3&U)`,        `/game-all/game-style-1,3,u/card${simplePath}`,        ALL_GAMES_ARRAY,          SMB_SMB3_NSMBU,       ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=all GameStyle=1&3&3DW)`,      `/game-all/game-style-1,3,3dw/card${simplePath}`,      ALL_GAMES_ARRAY,          SMB_SMB3_SM3DW,       ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=all GameStyle=1&W&U)`,        `/game-all/game-style-1,w,u/card${simplePath}`,        ALL_GAMES_ARRAY,          SMB_SMW_NSMBU,        ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=all GameStyle=1&W&3DW)`,      `/game-all/game-style-1,w,3dw/card${simplePath}`,      ALL_GAMES_ARRAY,          SMB_SMW_SM3DW,        ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=all GameStyle=1&U&3DW)`,      `/game-all/game-style-1,u,3dw/card${simplePath}`,      ALL_GAMES_ARRAY,          SMB_NSMBU_SM3DW,      ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=all GameStyle=3&W&U)`,        `/game-all/game-style-3,w,u/card${simplePath}`,        ALL_GAMES_ARRAY,          SMB3_SMW_NSMBU,       ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=all GameStyle=3&W&3DW)`,      `/game-all/game-style-3,w,3dw/card${simplePath}`,      ALL_GAMES_ARRAY,          SMB3_SMW_SM3DW,       ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=all GameStyle=3&U&3DW)`,      `/game-all/game-style-3,u,3dw/card${simplePath}`,      ALL_GAMES_ARRAY,          SMB3_NSMBU_SM3DW,     ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=all GameStyle=W&U&3DW)`,      `/game-all/game-style-w,u,3dw/card${simplePath}`,      ALL_GAMES_ARRAY,          SMW_NSMBU_SM3DW,      ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=all GameStyle=1&3&W&U)`,      `/game-all/game-style-1,3,w,u/card${simplePath}`,      ALL_GAMES_ARRAY,          SMB_SMB3_SMW_NSMBU,   ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=all GameStyle=1&3&W&3DW)`,    `/game-all/game-style-1,3,w,3dw/card${simplePath}`,    ALL_GAMES_ARRAY,          SMB_SMB3_SMW_SM3DW,   ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=all GameStyle=1&3&U&3DW)`,    `/game-all/game-style-1,3,u,3dw/card${simplePath}`,    ALL_GAMES_ARRAY,          SMB_SMB3_NSMBU_SM3DW, ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=all GameStyle=1&W&U&3DW)`,    `/game-all/game-style-1,w,u,3dw/card${simplePath}`,    ALL_GAMES_ARRAY,          SMB_SMW_NSMBU_SM3DW,  ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=all GameStyle=3&W&U&3DW)`,    `/game-all/game-style-3,w,u,3dw/card${simplePath}`,    ALL_GAMES_ARRAY,          SMB3_SMW_NSMBU_SM3DW, ViewDisplays.CARD_LIST, routeCallback,),

                new SimpleRoute(`${simpleName} (card Game=1 GameStyle=all)`,            `/game-1/game-style-all/card${simplePath}`,            SMM1_GAMES_ARRAY,         ALL_GAME_STYLES,      ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1 GameStyle=1)`,              `/game-1/game-style-1/card${simplePath}`,              SMM1_GAMES_ARRAY,         SMB,                  ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1 GameStyle=3)`,              `/game-1/game-style-3/card${simplePath}`,              SMM1_GAMES_ARRAY,         SMB3,                 ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1 GameStyle=W)`,              `/game-1/game-style-w/card${simplePath}`,              SMM1_GAMES_ARRAY,         SMW,                  ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1 GameStyle=U)`,              `/game-1/game-style-u/card${simplePath}`,              SMM1_GAMES_ARRAY,         NSMBU,                ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1 GameStyle=1&3)`,            `/game-1/game-style-1,3/card${simplePath}`,            SMM1_GAMES_ARRAY,         SMB_SMB3,             ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1 GameStyle=1&W)`,            `/game-1/game-style-1,w/card${simplePath}`,            SMM1_GAMES_ARRAY,         SMB_SMW,              ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1 GameStyle=1&U)`,            `/game-1/game-style-1,u/card${simplePath}`,            SMM1_GAMES_ARRAY,         SMB_NSMBU,            ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1 GameStyle=3&W)`,            `/game-1/game-style-3,w/card${simplePath}`,            SMM1_GAMES_ARRAY,         SMB3_SMW,             ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1 GameStyle=3&U)`,            `/game-1/game-style-3,u/card${simplePath}`,            SMM1_GAMES_ARRAY,         SMB3_NSMBU,           ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1 GameStyle=W&U)`,            `/game-1/game-style-w,u/card${simplePath}`,            SMM1_GAMES_ARRAY,         SMW_NSMBU,            ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1 GameStyle=1&3&W)`,          `/game-1/game-style-1,3,w/card${simplePath}`,          SMM1_GAMES_ARRAY,         SMB_SMB3_SMW,         ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1 GameStyle=1&3&U)`,          `/game-1/game-style-1,3,u/card${simplePath}`,          SMM1_GAMES_ARRAY,         SMB_SMB3_NSMBU,       ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1 GameStyle=1&W&U)`,          `/game-1/game-style-1,w,u/card${simplePath}`,          SMM1_GAMES_ARRAY,         SMB_SMW_NSMBU,        ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1 GameStyle=3&W&U)`,          `/game-1/game-style-3,w,u/card${simplePath}`,          SMM1_GAMES_ARRAY,         SMB3_SMW_NSMBU,       ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1 GameStyle=1&3&W&U)`,        `/game-1/game-style-1,3,w,u/card${simplePath}`,        SMM1_GAMES_ARRAY,         SMB_SMB3_SMW_NSMBU,   ViewDisplays.CARD_LIST, routeCallback,),

                new SimpleRoute(`${simpleName} (card Game=3DS GameStyle=all)`,          `/game-3ds/game-style-all/card${simplePath}`,          SMM3DS_GAMES_ARRAY,       ALL_GAME_STYLES,      ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS GameStyle=1)`,            `/game-3ds/game-style-1/card${simplePath}`,            SMM3DS_GAMES_ARRAY,       SMB,                  ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS GameStyle=3)`,            `/game-3ds/game-style-3/card${simplePath}`,            SMM3DS_GAMES_ARRAY,       SMB3,                 ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS GameStyle=W)`,            `/game-3ds/game-style-w/card${simplePath}`,            SMM3DS_GAMES_ARRAY,       SMW,                  ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS GameStyle=U)`,            `/game-3ds/game-style-u/card${simplePath}`,            SMM3DS_GAMES_ARRAY,       NSMBU,                ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS GameStyle=1&3)`,          `/game-3ds/game-style-1,3/card${simplePath}`,          SMM3DS_GAMES_ARRAY,       SMB_SMB3,             ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS GameStyle=1&W)`,          `/game-3ds/game-style-1,w/card${simplePath}`,          SMM3DS_GAMES_ARRAY,       SMB_SMW,              ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS GameStyle=1&U)`,          `/game-3ds/game-style-1,u/card${simplePath}`,          SMM3DS_GAMES_ARRAY,       SMB_NSMBU,            ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS GameStyle=3&W)`,          `/game-3ds/game-style-3,w/card${simplePath}`,          SMM3DS_GAMES_ARRAY,       SMB3_SMW,             ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS GameStyle=3&U)`,          `/game-3ds/game-style-3,u/card${simplePath}`,          SMM3DS_GAMES_ARRAY,       SMB3_NSMBU,           ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS GameStyle=W&U)`,          `/game-3ds/game-style-w,u/card${simplePath}`,          SMM3DS_GAMES_ARRAY,       SMW_NSMBU,            ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS GameStyle=1&3&W)`,        `/game-3ds/game-style-1,3,w/card${simplePath}`,        SMM3DS_GAMES_ARRAY,       SMB_SMB3_SMW,         ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS GameStyle=1&3&U)`,        `/game-3ds/game-style-1,3,u/card${simplePath}`,        SMM3DS_GAMES_ARRAY,       SMB_SMB3_NSMBU,       ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS GameStyle=1&W&U)`,        `/game-3ds/game-style-1,w,u/card${simplePath}`,        SMM3DS_GAMES_ARRAY,       SMB_SMW_NSMBU,        ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS GameStyle=3&W&U)`,        `/game-3ds/game-style-3,w,u/card${simplePath}`,        SMM3DS_GAMES_ARRAY,       SMB3_SMW_NSMBU,       ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS GameStyle=1&3&W&U)`,      `/game-3ds/game-style-1,3,w,u/card${simplePath}`,      SMM3DS_GAMES_ARRAY,       SMB_SMB3_SMW_NSMBU,   ViewDisplays.CARD_LIST, routeCallback,),

                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=all)`,            `/game-2/game-style-all/card${simplePath}`,            SMM2_GAMES_ARRAY,         ALL_GAME_STYLES,      ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=1)`,              `/game-2/game-style-1/card${simplePath}`,              SMM2_GAMES_ARRAY,         SMB,                  ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=3)`,              `/game-2/game-style-3/card${simplePath}`,              SMM2_GAMES_ARRAY,         SMB3,                 ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=W)`,              `/game-2/game-style-w/card${simplePath}`,              SMM2_GAMES_ARRAY,         SMW,                  ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=U)`,              `/game-2/game-style-u/card${simplePath}`,              SMM2_GAMES_ARRAY,         NSMBU,                ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=3DW)`,            `/game-2/game-style-3dw/card${simplePath}`,            SMM2_GAMES_ARRAY,         SM3DW,                ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=1&3)`,            `/game-2/game-style-1,3/card${simplePath}`,            SMM2_GAMES_ARRAY,         SMB_SMB3,             ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=1&W)`,            `/game-2/game-style-1,w/card${simplePath}`,            SMM2_GAMES_ARRAY,         SMB_SMW,              ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=1&U)`,            `/game-2/game-style-1,u/card${simplePath}`,            SMM2_GAMES_ARRAY,         SMB_NSMBU,            ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=1&3DW)`,          `/game-2/game-style-1,3dw/card${simplePath}`,          SMM2_GAMES_ARRAY,         SMB_SM3DW,            ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=3&W)`,            `/game-2/game-style-3,w/card${simplePath}`,            SMM2_GAMES_ARRAY,         SMB3_SMW,             ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=3&U)`,            `/game-2/game-style-3,u/card${simplePath}`,            SMM2_GAMES_ARRAY,         SMB3_NSMBU,           ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=3&3DW)`,          `/game-2/game-style-3,3dw/card${simplePath}`,          SMM2_GAMES_ARRAY,         SMB3_SM3DW,           ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=W&U)`,            `/game-2/game-style-w,u/card${simplePath}`,            SMM2_GAMES_ARRAY,         SMW_NSMBU,            ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=W&3DW)`,          `/game-2/game-style-w,3dw/card${simplePath}`,          SMM2_GAMES_ARRAY,         SMW_SM3DW,            ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=U&3DW)`,          `/game-2/game-style-u,3dw/card${simplePath}`,          SMM2_GAMES_ARRAY,         NSMBU_SM3DW,          ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=1&3&W)`,          `/game-2/game-style-1,3,w/card${simplePath}`,          SMM2_GAMES_ARRAY,         SMB_SMB3_SMW,         ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=1&3&U)`,          `/game-2/game-style-1,3,u/card${simplePath}`,          SMM2_GAMES_ARRAY,         SMB_SMB3_NSMBU,       ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=1&3&3DW)`,        `/game-2/game-style-1,3,3dw/card${simplePath}`,        SMM2_GAMES_ARRAY,         SMB_SMB3_SM3DW,       ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=1&W&U)`,          `/game-2/game-style-1,w,u/card${simplePath}`,          SMM2_GAMES_ARRAY,         SMB_SMW_NSMBU,        ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=1&W&3DW)`,        `/game-2/game-style-1,w,3dw/card${simplePath}`,        SMM2_GAMES_ARRAY,         SMB_SMW_SM3DW,        ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=1&U&3DW)`,        `/game-2/game-style-1,u,3dw/card${simplePath}`,        SMM2_GAMES_ARRAY,         SMB_NSMBU_SM3DW,      ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=3&W&U)`,          `/game-2/game-style-3,w,u/card${simplePath}`,          SMM2_GAMES_ARRAY,         SMB3_SMW_NSMBU,       ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=3&W&3DW)`,        `/game-2/game-style-3,w,3dw/card${simplePath}`,        SMM2_GAMES_ARRAY,         SMB3_SMW_SM3DW,       ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=3&U&3DW)`,        `/game-2/game-style-3,u,3dw/card${simplePath}`,        SMM2_GAMES_ARRAY,         SMB3_NSMBU_SM3DW,     ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=W&U&3DW)`,        `/game-2/game-style-w,u,3dw/card${simplePath}`,        SMM2_GAMES_ARRAY,         SMW_NSMBU_SM3DW,      ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=1&3&W&U)`,        `/game-2/game-style-1,3,w,u/card${simplePath}`,        SMM2_GAMES_ARRAY,         SMB_SMB3_SMW_NSMBU,   ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=1&3&W&3DW)`,      `/game-2/game-style-1,3,w,3dw/card${simplePath}`,      SMM2_GAMES_ARRAY,         SMB_SMB3_SMW_SM3DW,   ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=1&3&U&3DW)`,      `/game-2/game-style-1,3,u,3dw/card${simplePath}`,      SMM2_GAMES_ARRAY,         SMB_SMB3_NSMBU_SM3DW, ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=1&W&U&3DW)`,      `/game-2/game-style-1,w,u,3dw/card${simplePath}`,      SMM2_GAMES_ARRAY,         SMB_SMW_NSMBU_SM3DW,  ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2 GameStyle=3&W&U&3DW)`,      `/game-2/game-style-3,w,u,3dw/card${simplePath}`,      SMM2_GAMES_ARRAY,         SMB3_SMW_NSMBU_SM3DW, ViewDisplays.CARD_LIST, routeCallback,),

                new SimpleRoute(`${simpleName} (card Game=1&3DS GameStyle=all)`,        `/game-1,3ds/game-style-all/card${simplePath}`,        SMM1_AND_3DS_GAMES_ARRAY, ALL_GAME_STYLES,      ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&3DS GameStyle=1)`,          `/game-1,3ds/game-style-1/card${simplePath}`,          SMM1_AND_3DS_GAMES_ARRAY, SMB,                  ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&3DS GameStyle=3)`,          `/game-1,3ds/game-style-3/card${simplePath}`,          SMM1_AND_3DS_GAMES_ARRAY, SMB3,                 ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&3DS GameStyle=W)`,          `/game-1,3ds/game-style-w/card${simplePath}`,          SMM1_AND_3DS_GAMES_ARRAY, SMW,                  ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&3DS GameStyle=U)`,          `/game-1,3ds/game-style-u/card${simplePath}`,          SMM1_AND_3DS_GAMES_ARRAY, NSMBU,                ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&3DS GameStyle=1&3)`,        `/game-1,3ds/game-style-1,3/card${simplePath}`,        SMM1_AND_3DS_GAMES_ARRAY, SMB_SMB3,             ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&3DS GameStyle=1&W)`,        `/game-1,3ds/game-style-1,w/card${simplePath}`,        SMM1_AND_3DS_GAMES_ARRAY, SMB_SMW,              ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&3DS GameStyle=1&U)`,        `/game-1,3ds/game-style-1,u/card${simplePath}`,        SMM1_AND_3DS_GAMES_ARRAY, SMB_NSMBU,            ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&3DS GameStyle=3&W)`,        `/game-1,3ds/game-style-3,w/card${simplePath}`,        SMM1_AND_3DS_GAMES_ARRAY, SMB3_SMW,             ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&3DS GameStyle=3&U)`,        `/game-1,3ds/game-style-3,u/card${simplePath}`,        SMM1_AND_3DS_GAMES_ARRAY, SMB3_NSMBU,           ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&3DS GameStyle=W&U)`,        `/game-1,3ds/game-style-w,u/card${simplePath}`,        SMM1_AND_3DS_GAMES_ARRAY, SMW_NSMBU,            ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&3DS GameStyle=1&3&W)`,      `/game-1,3ds/game-style-1,3,w/card${simplePath}`,      SMM1_AND_3DS_GAMES_ARRAY, SMB_SMB3_SMW,         ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&3DS GameStyle=1&3&U)`,      `/game-1,3ds/game-style-1,3,u/card${simplePath}`,      SMM1_AND_3DS_GAMES_ARRAY, SMB_SMB3_NSMBU,       ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&3DS GameStyle=1&W&U)`,      `/game-1,3ds/game-style-1,w,u/card${simplePath}`,      SMM1_AND_3DS_GAMES_ARRAY, SMB_SMW_NSMBU,        ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&3DS GameStyle=3&W&U)`,      `/game-1,3ds/game-style-3,w,u/card${simplePath}`,      SMM1_AND_3DS_GAMES_ARRAY, SMB3_SMW_NSMBU,       ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&3DS GameStyle=1&3&W&U)`,    `/game-1,3ds/game-style-1,3,w,u/card${simplePath}`,    SMM1_AND_3DS_GAMES_ARRAY, SMB_SMB3_SMW_NSMBU,   ViewDisplays.CARD_LIST, routeCallback,),

                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=all)`,          `/game-1,2/game-style-all/card${simplePath}`,          SMM1_AND_2_GAMES_ARRAY,   ALL_GAME_STYLES,      ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=1)`,            `/game-1,2/game-style-1/card${simplePath}`,            SMM1_AND_2_GAMES_ARRAY,   SMB,                  ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=3)`,            `/game-1,2/game-style-3/card${simplePath}`,            SMM1_AND_2_GAMES_ARRAY,   SMB3,                 ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=W)`,            `/game-1,2/game-style-w/card${simplePath}`,            SMM1_AND_2_GAMES_ARRAY,   SMW,                  ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=U)`,            `/game-1,2/game-style-u/card${simplePath}`,            SMM1_AND_2_GAMES_ARRAY,   NSMBU,                ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=3DW)`,          `/game-1,2/game-style-3dw/card${simplePath}`,          SMM1_AND_2_GAMES_ARRAY,   SM3DW,                ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=1&3)`,          `/game-1,2/game-style-1,3/card${simplePath}`,          SMM1_AND_2_GAMES_ARRAY,   SMB_SMB3,             ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=1&W)`,          `/game-1,2/game-style-1,w/card${simplePath}`,          SMM1_AND_2_GAMES_ARRAY,   SMB_SMW,              ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=1&U)`,          `/game-1,2/game-style-1,u/card${simplePath}`,          SMM1_AND_2_GAMES_ARRAY,   SMB_NSMBU,            ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=1&3DW)`,        `/game-1,2/game-style-1,3dw/card${simplePath}`,        SMM1_AND_2_GAMES_ARRAY,   SMB_SM3DW,            ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=3&W)`,          `/game-1,2/game-style-3,w/card${simplePath}`,          SMM1_AND_2_GAMES_ARRAY,   SMB3_SMW,             ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=3&U)`,          `/game-1,2/game-style-3,u/card${simplePath}`,          SMM1_AND_2_GAMES_ARRAY,   SMB3_NSMBU,           ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=3&3DW)`,        `/game-1,2/game-style-3,3dw/card${simplePath}`,        SMM1_AND_2_GAMES_ARRAY,   SMB3_SM3DW,           ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=W&U)`,          `/game-1,2/game-style-w,u/card${simplePath}`,          SMM1_AND_2_GAMES_ARRAY,   SMW_NSMBU,            ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=W&3DW)`,        `/game-1,2/game-style-w,3dw/card${simplePath}`,        SMM1_AND_2_GAMES_ARRAY,   SMW_SM3DW,            ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=U&3DW)`,        `/game-1,2/game-style-u,3dw/card${simplePath}`,        SMM1_AND_2_GAMES_ARRAY,   NSMBU_SM3DW,          ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=1&3&W)`,        `/game-1,2/game-style-1,3,w/card${simplePath}`,        SMM1_AND_2_GAMES_ARRAY,   SMB_SMB3_SMW,         ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=1&3&U)`,        `/game-1,2/game-style-1,3,u/card${simplePath}`,        SMM1_AND_2_GAMES_ARRAY,   SMB_SMB3_NSMBU,       ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=1&3&3DW)`,      `/game-1,2/game-style-1,3,3dw/card${simplePath}`,      SMM1_AND_2_GAMES_ARRAY,   SMB_SMB3_SM3DW,       ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=1&W&U)`,        `/game-1,2/game-style-1,w,u/card${simplePath}`,        SMM1_AND_2_GAMES_ARRAY,   SMB_SMW_NSMBU,        ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=1&W&3DW)`,      `/game-1,2/game-style-1,w,3dw/card${simplePath}`,      SMM1_AND_2_GAMES_ARRAY,   SMB_SMW_SM3DW,        ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=1&U&3DW)`,      `/game-1,2/game-style-1,u,3dw/card${simplePath}`,      SMM1_AND_2_GAMES_ARRAY,   SMB_NSMBU_SM3DW,      ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=3&W&U)`,        `/game-1,2/game-style-3,w,u/card${simplePath}`,        SMM1_AND_2_GAMES_ARRAY,   SMB3_SMW_NSMBU,       ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=3&W&3DW)`,      `/game-1,2/game-style-3,w,3dw/card${simplePath}`,      SMM1_AND_2_GAMES_ARRAY,   SMB3_SMW_SM3DW,       ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=3&U&3DW)`,      `/game-1,2/game-style-3,u,3dw/card${simplePath}`,      SMM1_AND_2_GAMES_ARRAY,   SMB3_NSMBU_SM3DW,     ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=W&U&3DW)`,      `/game-1,2/game-style-w,u,3dw/card${simplePath}`,      SMM1_AND_2_GAMES_ARRAY,   SMW_NSMBU_SM3DW,      ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=1&3&W&U)`,      `/game-1,2/game-style-1,3,w,u/card${simplePath}`,      SMM1_AND_2_GAMES_ARRAY,   SMB_SMB3_SMW_NSMBU,   ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=1&3&W&3DW)`,    `/game-1,2/game-style-1,3,w,3dw/card${simplePath}`,    SMM1_AND_2_GAMES_ARRAY,   SMB_SMB3_SMW_SM3DW,   ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=1&3&U&3DW)`,    `/game-1,2/game-style-1,3,u,3dw/card${simplePath}`,    SMM1_AND_2_GAMES_ARRAY,   SMB_SMB3_NSMBU_SM3DW, ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=1&W&U&3DW)`,    `/game-1,2/game-style-1,w,u,3dw/card${simplePath}`,    SMM1_AND_2_GAMES_ARRAY,   SMB_SMW_NSMBU_SM3DW,  ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2 GameStyle=3&W&U&3DW)`,    `/game-1,2/game-style-3,w,u,3dw/card${simplePath}`,    SMM1_AND_2_GAMES_ARRAY,   SMB3_SMW_NSMBU_SM3DW, ViewDisplays.CARD_LIST, routeCallback,),

                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=all)`,        `/game-3ds,2/game-style-all/card${simplePath}`,        SMM3DS_AND_2_GAMES_ARRAY, ALL_GAME_STYLES,      ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=1)`,          `/game-3ds,2/game-style-1/card${simplePath}`,          SMM3DS_AND_2_GAMES_ARRAY, SMB,                  ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=3)`,          `/game-3ds,2/game-style-3/card${simplePath}`,          SMM3DS_AND_2_GAMES_ARRAY, SMB3,                 ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=W)`,          `/game-3ds,2/game-style-w/card${simplePath}`,          SMM3DS_AND_2_GAMES_ARRAY, SMW,                  ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=U)`,          `/game-3ds,2/game-style-u/card${simplePath}`,          SMM3DS_AND_2_GAMES_ARRAY, NSMBU,                ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=3DW)`,        `/game-3ds,2/game-style-3dw/card${simplePath}`,        SMM3DS_AND_2_GAMES_ARRAY, SM3DW,                ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=1&3)`,        `/game-3ds,2/game-style-1,3/card${simplePath}`,        SMM3DS_AND_2_GAMES_ARRAY, SMB_SMB3,             ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=1&W)`,        `/game-3ds,2/game-style-1,w/card${simplePath}`,        SMM3DS_AND_2_GAMES_ARRAY, SMB_SMW,              ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=1&U)`,        `/game-3ds,2/game-style-1,u/card${simplePath}`,        SMM3DS_AND_2_GAMES_ARRAY, SMB_NSMBU,            ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=1&3DW)`,      `/game-3ds,2/game-style-1,3dw/card${simplePath}`,      SMM3DS_AND_2_GAMES_ARRAY, SMB_SM3DW,            ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=3&W)`,        `/game-3ds,2/game-style-3,w/card${simplePath}`,        SMM3DS_AND_2_GAMES_ARRAY, SMB3_SMW,             ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=3&U)`,        `/game-3ds,2/game-style-3,u/card${simplePath}`,        SMM3DS_AND_2_GAMES_ARRAY, SMB3_NSMBU,           ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=3&3DW)`,      `/game-3ds,2/game-style-3,3dw/card${simplePath}`,      SMM3DS_AND_2_GAMES_ARRAY, SMB3_SM3DW,           ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=W&U)`,        `/game-3ds,2/game-style-w,u/card${simplePath}`,        SMM3DS_AND_2_GAMES_ARRAY, SMW_NSMBU,            ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=W&3DW)`,      `/game-3ds,2/game-style-w,3dw/card${simplePath}`,      SMM3DS_AND_2_GAMES_ARRAY, SMW_SM3DW,            ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=U&3DW)`,      `/game-3ds,2/game-style-u,3dw/card${simplePath}`,      SMM3DS_AND_2_GAMES_ARRAY, NSMBU_SM3DW,          ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=1&3&W)`,      `/game-3ds,2/game-style-1,3,w/card${simplePath}`,      SMM3DS_AND_2_GAMES_ARRAY, SMB_SMB3_SMW,         ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=1&3&U)`,      `/game-3ds,2/game-style-1,3,u/card${simplePath}`,      SMM3DS_AND_2_GAMES_ARRAY, SMB_SMB3_NSMBU,       ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=1&3&3DW)`,    `/game-3ds,2/game-style-1,3,3dw/card${simplePath}`,    SMM3DS_AND_2_GAMES_ARRAY, SMB_SMB3_SM3DW,       ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=1&W&U)`,      `/game-3ds,2/game-style-1,w,u/card${simplePath}`,      SMM3DS_AND_2_GAMES_ARRAY, SMB_SMW_NSMBU,        ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=1&W&3DW)`,    `/game-3ds,2/game-style-1,w,3dw/card${simplePath}`,    SMM3DS_AND_2_GAMES_ARRAY, SMB_SMW_SM3DW,        ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=1&U&3DW)`,    `/game-3ds,2/game-style-1,u,3dw/card${simplePath}`,    SMM3DS_AND_2_GAMES_ARRAY, SMB_NSMBU_SM3DW,      ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=3&W&U)`,      `/game-3ds,2/game-style-3,w,u/card${simplePath}`,      SMM3DS_AND_2_GAMES_ARRAY, SMB3_SMW_NSMBU,       ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=3&W&3DW)`,    `/game-3ds,2/game-style-3,w,3dw/card${simplePath}`,    SMM3DS_AND_2_GAMES_ARRAY, SMB3_SMW_SM3DW,       ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=3&U&3DW)`,    `/game-3ds,2/game-style-3,u,3dw/card${simplePath}`,    SMM3DS_AND_2_GAMES_ARRAY, SMB3_NSMBU_SM3DW,     ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=W&U&3DW)`,    `/game-3ds,2/game-style-w,u,3dw/card${simplePath}`,    SMM3DS_AND_2_GAMES_ARRAY, SMW_NSMBU_SM3DW,      ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=1&3&W&U)`,    `/game-3ds,2/game-style-1,3,w,u/card${simplePath}`,    SMM3DS_AND_2_GAMES_ARRAY, SMB_SMB3_SMW_NSMBU,   ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=1&3&W&3DW)`,  `/game-3ds,2/game-style-1,3,w,3dw/card${simplePath}`,  SMM3DS_AND_2_GAMES_ARRAY, SMB_SMB3_SMW_SM3DW,   ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=1&3&U&3DW)`,  `/game-3ds,2/game-style-1,3,u,3dw/card${simplePath}`,  SMM3DS_AND_2_GAMES_ARRAY, SMB_SMB3_NSMBU_SM3DW, ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=1&W&U&3DW)`,  `/game-3ds,2/game-style-1,w,u,3dw/card${simplePath}`,  SMM3DS_AND_2_GAMES_ARRAY, SMB_SMW_NSMBU_SM3DW,  ViewDisplays.CARD_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2 GameStyle=3&W&U&3DW)`,  `/game-3ds,2/game-style-3,w,u,3dw/card${simplePath}`,  SMM3DS_AND_2_GAMES_ARRAY, SMB3_SMW_NSMBU_SM3DW, ViewDisplays.CARD_LIST, routeCallback,),


                new SimpleRoute(`${simpleName} (table Game=all GameStyle=all)`,         `/game-all/game-style-all/table${simplePath}`,         ALL_GAMES_ARRAY,          ALL_GAME_STYLES,      ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=all GameStyle=1)`,           `/game-all/game-style-1/table${simplePath}`,           ALL_GAMES_ARRAY,          SMB,                  ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=all GameStyle=3)`,           `/game-all/game-style-3/table${simplePath}`,           ALL_GAMES_ARRAY,          SMB3,                 ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=all GameStyle=W)`,           `/game-all/game-style-w/table${simplePath}`,           ALL_GAMES_ARRAY,          SMW,                  ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=all GameStyle=U)`,           `/game-all/game-style-u/table${simplePath}`,           ALL_GAMES_ARRAY,          NSMBU,                ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=all GameStyle=3DW)`,         `/game-all/game-style-3dw/table${simplePath}`,         ALL_GAMES_ARRAY,          SM3DW,                ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=all GameStyle=1&3)`,         `/game-all/game-style-1,3/table${simplePath}`,         ALL_GAMES_ARRAY,          SMB_SMB3,             ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=all GameStyle=1&W)`,         `/game-all/game-style-1,w/table${simplePath}`,         ALL_GAMES_ARRAY,          SMB_SMW,              ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=all GameStyle=1&U)`,         `/game-all/game-style-1,u/table${simplePath}`,         ALL_GAMES_ARRAY,          SMB_NSMBU,            ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=all GameStyle=1&3DW)`,       `/game-all/game-style-1,3dw/table${simplePath}`,       ALL_GAMES_ARRAY,          SMB_SM3DW,            ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=all GameStyle=3&W)`,         `/game-all/game-style-3,w/table${simplePath}`,         ALL_GAMES_ARRAY,          SMB3_SMW,             ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=all GameStyle=3&U)`,         `/game-all/game-style-3,u/table${simplePath}`,         ALL_GAMES_ARRAY,          SMB3_NSMBU,           ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=all GameStyle=3&3DW)`,       `/game-all/game-style-3,3dw/table${simplePath}`,       ALL_GAMES_ARRAY,          SMB3_SM3DW,           ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=all GameStyle=W&U)`,         `/game-all/game-style-w,u/table${simplePath}`,         ALL_GAMES_ARRAY,          SMW_NSMBU,            ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=all GameStyle=W&3DW)`,       `/game-all/game-style-w,3dw/table${simplePath}`,       ALL_GAMES_ARRAY,          SMW_SM3DW,            ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=all GameStyle=U&3DW)`,       `/game-all/game-style-u,3dw/table${simplePath}`,       ALL_GAMES_ARRAY,          NSMBU_SM3DW,          ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=all GameStyle=1&3&W)`,       `/game-all/game-style-1,3,w/table${simplePath}`,       ALL_GAMES_ARRAY,          SMB_SMB3_SMW,         ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=all GameStyle=1&3&U)`,       `/game-all/game-style-1,3,u/table${simplePath}`,       ALL_GAMES_ARRAY,          SMB_SMB3_NSMBU,       ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=all GameStyle=1&3&3DW)`,     `/game-all/game-style-1,3,3dw/table${simplePath}`,     ALL_GAMES_ARRAY,          SMB_SMB3_SM3DW,       ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=all GameStyle=1&W&U)`,       `/game-all/game-style-1,w,u/table${simplePath}`,       ALL_GAMES_ARRAY,          SMB_SMW_NSMBU,        ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=all GameStyle=1&W&3DW)`,     `/game-all/game-style-1,w,3dw/table${simplePath}`,     ALL_GAMES_ARRAY,          SMB_SMW_SM3DW,        ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=all GameStyle=1&U&3DW)`,     `/game-all/game-style-1,u,3dw/table${simplePath}`,     ALL_GAMES_ARRAY,          SMB_NSMBU_SM3DW,      ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=all GameStyle=3&W&U)`,       `/game-all/game-style-3,w,u/table${simplePath}`,       ALL_GAMES_ARRAY,          SMB3_SMW_NSMBU,       ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=all GameStyle=3&W&3DW)`,     `/game-all/game-style-3,w,3dw/table${simplePath}`,     ALL_GAMES_ARRAY,          SMB3_SMW_SM3DW,       ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=all GameStyle=3&U&3DW)`,     `/game-all/game-style-3,u,3dw/table${simplePath}`,     ALL_GAMES_ARRAY,          SMB3_NSMBU_SM3DW,     ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=all GameStyle=W&U&3DW)`,     `/game-all/game-style-w,u,3dw/table${simplePath}`,     ALL_GAMES_ARRAY,          SMW_NSMBU_SM3DW,      ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=all GameStyle=1&3&W&U)`,     `/game-all/game-style-1,3,w,u/table${simplePath}`,     ALL_GAMES_ARRAY,          SMB_SMB3_SMW_NSMBU,   ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=all GameStyle=1&3&W&3DW)`,   `/game-all/game-style-1,3,w,3dw/table${simplePath}`,   ALL_GAMES_ARRAY,          SMB_SMB3_SMW_SM3DW,   ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=all GameStyle=1&3&U&3DW)`,   `/game-all/game-style-1,3,u,3dw/table${simplePath}`,   ALL_GAMES_ARRAY,          SMB_SMB3_NSMBU_SM3DW, ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=all GameStyle=1&W&U&3DW)`,   `/game-all/game-style-1,w,u,3dw/table${simplePath}`,   ALL_GAMES_ARRAY,          SMB_SMW_NSMBU_SM3DW,  ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=all GameStyle=3&W&U&3DW)`,   `/game-all/game-style-3,w,u,3dw/table${simplePath}`,   ALL_GAMES_ARRAY,          SMB3_SMW_NSMBU_SM3DW, ViewDisplays.TABLE, routeCallback,),

                new SimpleRoute(`${simpleName} (table Game=1 GameStyle=all)`,           `/game-1/game-style-all/table${simplePath}`,           SMM1_GAMES_ARRAY,         ALL_GAME_STYLES,      ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1 GameStyle=1)`,             `/game-1/game-style-1/table${simplePath}`,             SMM1_GAMES_ARRAY,         SMB,                  ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1 GameStyle=3)`,             `/game-1/game-style-3/table${simplePath}`,             SMM1_GAMES_ARRAY,         SMB3,                 ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1 GameStyle=W)`,             `/game-1/game-style-w/table${simplePath}`,             SMM1_GAMES_ARRAY,         SMW,                  ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1 GameStyle=U)`,             `/game-1/game-style-u/table${simplePath}`,             SMM1_GAMES_ARRAY,         NSMBU,                ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1 GameStyle=1&3)`,           `/game-1/game-style-1,3/table${simplePath}`,           SMM1_GAMES_ARRAY,         SMB_SMB3,             ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1 GameStyle=1&W)`,           `/game-1/game-style-1,w/table${simplePath}`,           SMM1_GAMES_ARRAY,         SMB_SMW,              ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1 GameStyle=1&U)`,           `/game-1/game-style-1,u/table${simplePath}`,           SMM1_GAMES_ARRAY,         SMB_NSMBU,            ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1 GameStyle=3&W)`,           `/game-1/game-style-3,w/table${simplePath}`,           SMM1_GAMES_ARRAY,         SMB3_SMW,             ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1 GameStyle=3&U)`,           `/game-1/game-style-3,u/table${simplePath}`,           SMM1_GAMES_ARRAY,         SMB3_NSMBU,           ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1 GameStyle=W&U)`,           `/game-1/game-style-w,u/table${simplePath}`,           SMM1_GAMES_ARRAY,         SMW_NSMBU,            ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1 GameStyle=1&3&W)`,         `/game-1/game-style-1,3,w/table${simplePath}`,         SMM1_GAMES_ARRAY,         SMB_SMB3_SMW,         ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1 GameStyle=1&3&U)`,         `/game-1/game-style-1,3,u/table${simplePath}`,         SMM1_GAMES_ARRAY,         SMB_SMB3_NSMBU,       ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1 GameStyle=1&W&U)`,         `/game-1/game-style-1,w,u/table${simplePath}`,         SMM1_GAMES_ARRAY,         SMB_SMW_NSMBU,        ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1 GameStyle=3&W&U)`,         `/game-1/game-style-3,w,u/table${simplePath}`,         SMM1_GAMES_ARRAY,         SMB3_SMW_NSMBU,       ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1 GameStyle=1&3&W&U)`,       `/game-1/game-style-1,3,w,u/table${simplePath}`,       SMM1_GAMES_ARRAY,         SMB_SMB3_SMW_NSMBU,   ViewDisplays.TABLE, routeCallback,),

                new SimpleRoute(`${simpleName} (table Game=3DS GameStyle=all)`,         `/game-3ds/game-style-all/table${simplePath}`,         SMM3DS_GAMES_ARRAY,       ALL_GAME_STYLES,      ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS GameStyle=1)`,           `/game-3ds/game-style-1/table${simplePath}`,           SMM3DS_GAMES_ARRAY,       SMB,                  ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS GameStyle=3)`,           `/game-3ds/game-style-3/table${simplePath}`,           SMM3DS_GAMES_ARRAY,       SMB3,                 ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS GameStyle=W)`,           `/game-3ds/game-style-w/table${simplePath}`,           SMM3DS_GAMES_ARRAY,       SMW,                  ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS GameStyle=U)`,           `/game-3ds/game-style-u/table${simplePath}`,           SMM3DS_GAMES_ARRAY,       NSMBU,                ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS GameStyle=1&3)`,         `/game-3ds/game-style-1,3/table${simplePath}`,         SMM3DS_GAMES_ARRAY,       SMB_SMB3,             ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS GameStyle=1&W)`,         `/game-3ds/game-style-1,w/table${simplePath}`,         SMM3DS_GAMES_ARRAY,       SMB_SMW,              ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS GameStyle=1&U)`,         `/game-3ds/game-style-1,u/table${simplePath}`,         SMM3DS_GAMES_ARRAY,       SMB_NSMBU,            ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS GameStyle=3&W)`,         `/game-3ds/game-style-3,w/table${simplePath}`,         SMM3DS_GAMES_ARRAY,       SMB3_SMW,             ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS GameStyle=3&U)`,         `/game-3ds/game-style-3,u/table${simplePath}`,         SMM3DS_GAMES_ARRAY,       SMB3_NSMBU,           ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS GameStyle=W&U)`,         `/game-3ds/game-style-w,u/table${simplePath}`,         SMM3DS_GAMES_ARRAY,       SMW_NSMBU,            ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS GameStyle=1&3&W)`,       `/game-3ds/game-style-1,3,w/table${simplePath}`,       SMM3DS_GAMES_ARRAY,       SMB_SMB3_SMW,         ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS GameStyle=1&3&U)`,       `/game-3ds/game-style-1,3,u/table${simplePath}`,       SMM3DS_GAMES_ARRAY,       SMB_SMB3_NSMBU,       ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS GameStyle=1&W&U)`,       `/game-3ds/game-style-1,w,u/table${simplePath}`,       SMM3DS_GAMES_ARRAY,       SMB_SMW_NSMBU,        ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS GameStyle=3&W&U)`,       `/game-3ds/game-style-3,w,u/table${simplePath}`,       SMM3DS_GAMES_ARRAY,       SMB3_SMW_NSMBU,       ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS GameStyle=1&3&W&U)`,     `/game-3ds/game-style-1,3,w,u/table${simplePath}`,     SMM3DS_GAMES_ARRAY,       SMB_SMB3_SMW_NSMBU,   ViewDisplays.TABLE, routeCallback,),

                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=all)`,           `/game-2/game-style-all/table${simplePath}`,           SMM2_GAMES_ARRAY,         ALL_GAME_STYLES,      ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=1)`,             `/game-2/game-style-1/table${simplePath}`,             SMM2_GAMES_ARRAY,         SMB,                  ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=3)`,             `/game-2/game-style-3/table${simplePath}`,             SMM2_GAMES_ARRAY,         SMB3,                 ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=W)`,             `/game-2/game-style-w/table${simplePath}`,             SMM2_GAMES_ARRAY,         SMW,                  ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=U)`,             `/game-2/game-style-u/table${simplePath}`,             SMM2_GAMES_ARRAY,         NSMBU,                ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=3DW)`,           `/game-2/game-style-3dw/table${simplePath}`,           SMM2_GAMES_ARRAY,         SM3DW,                ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=1&3)`,           `/game-2/game-style-1,3/table${simplePath}`,           SMM2_GAMES_ARRAY,         SMB_SMB3,             ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=1&W)`,           `/game-2/game-style-1,w/table${simplePath}`,           SMM2_GAMES_ARRAY,         SMB_SMW,              ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=1&U)`,           `/game-2/game-style-1,u/table${simplePath}`,           SMM2_GAMES_ARRAY,         SMB_NSMBU,            ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=1&3DW)`,         `/game-2/game-style-1,3dw/table${simplePath}`,         SMM2_GAMES_ARRAY,         SMB_SM3DW,            ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=3&W)`,           `/game-2/game-style-3,w/table${simplePath}`,           SMM2_GAMES_ARRAY,         SMB3_SMW,             ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=3&U)`,           `/game-2/game-style-3,u/table${simplePath}`,           SMM2_GAMES_ARRAY,         SMB3_NSMBU,           ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=3&3DW)`,         `/game-2/game-style-3,3dw/table${simplePath}`,         SMM2_GAMES_ARRAY,         SMB3_SM3DW,           ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=W&U)`,           `/game-2/game-style-w,u/table${simplePath}`,           SMM2_GAMES_ARRAY,         SMW_NSMBU,            ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=W&3DW)`,         `/game-2/game-style-w,3dw/table${simplePath}`,         SMM2_GAMES_ARRAY,         SMW_SM3DW,            ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=U&3DW)`,         `/game-2/game-style-u,3dw/table${simplePath}`,         SMM2_GAMES_ARRAY,         NSMBU_SM3DW,          ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=1&3&W)`,         `/game-2/game-style-1,3,w/table${simplePath}`,         SMM2_GAMES_ARRAY,         SMB_SMB3_SMW,         ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=1&3&U)`,         `/game-2/game-style-1,3,u/table${simplePath}`,         SMM2_GAMES_ARRAY,         SMB_SMB3_NSMBU,       ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=1&3&3DW)`,       `/game-2/game-style-1,3,3dw/table${simplePath}`,       SMM2_GAMES_ARRAY,         SMB_SMB3_SM3DW,       ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=1&W&U)`,         `/game-2/game-style-1,w,u/table${simplePath}`,         SMM2_GAMES_ARRAY,         SMB_SMW_NSMBU,        ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=1&W&3DW)`,       `/game-2/game-style-1,w,3dw/table${simplePath}`,       SMM2_GAMES_ARRAY,         SMB_SMW_SM3DW,        ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=1&U&3DW)`,       `/game-2/game-style-1,u,3dw/table${simplePath}`,       SMM2_GAMES_ARRAY,         SMB_NSMBU_SM3DW,      ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=3&W&U)`,         `/game-2/game-style-3,w,u/table${simplePath}`,         SMM2_GAMES_ARRAY,         SMB3_SMW_NSMBU,       ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=3&W&3DW)`,       `/game-2/game-style-3,w,3dw/table${simplePath}`,       SMM2_GAMES_ARRAY,         SMB3_SMW_SM3DW,       ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=3&U&3DW)`,       `/game-2/game-style-3,u,3dw/table${simplePath}`,       SMM2_GAMES_ARRAY,         SMB3_NSMBU_SM3DW,     ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=W&U&3DW)`,       `/game-2/game-style-w,u,3dw/table${simplePath}`,       SMM2_GAMES_ARRAY,         SMW_NSMBU_SM3DW,      ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=1&3&W&U)`,       `/game-2/game-style-1,3,w,u/table${simplePath}`,       SMM2_GAMES_ARRAY,         SMB_SMB3_SMW_NSMBU,   ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=1&3&W&3DW)`,     `/game-2/game-style-1,3,w,3dw/table${simplePath}`,     SMM2_GAMES_ARRAY,         SMB_SMB3_SMW_SM3DW,   ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=1&3&U&3DW)`,     `/game-2/game-style-1,3,u,3dw/table${simplePath}`,     SMM2_GAMES_ARRAY,         SMB_SMB3_NSMBU_SM3DW, ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=1&W&U&3DW)`,     `/game-2/game-style-1,w,u,3dw/table${simplePath}`,     SMM2_GAMES_ARRAY,         SMB_SMW_NSMBU_SM3DW,  ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2 GameStyle=3&W&U&3DW)`,     `/game-2/game-style-3,w,u,3dw/table${simplePath}`,     SMM2_GAMES_ARRAY,         SMB3_SMW_NSMBU_SM3DW, ViewDisplays.TABLE, routeCallback,),

                new SimpleRoute(`${simpleName} (table Game=1&3DS GameStyle=all)`,       `/game-1,3ds/game-style-all/table${simplePath}`,       SMM1_AND_3DS_GAMES_ARRAY, ALL_GAME_STYLES,      ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&3DS GameStyle=1)`,         `/game-1,3ds/game-style-1/table${simplePath}`,         SMM1_AND_3DS_GAMES_ARRAY, SMB,                  ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&3DS GameStyle=3)`,         `/game-1,3ds/game-style-3/table${simplePath}`,         SMM1_AND_3DS_GAMES_ARRAY, SMB3,                 ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&3DS GameStyle=W)`,         `/game-1,3ds/game-style-w/table${simplePath}`,         SMM1_AND_3DS_GAMES_ARRAY, SMW,                  ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&3DS GameStyle=U)`,         `/game-1,3ds/game-style-u/table${simplePath}`,         SMM1_AND_3DS_GAMES_ARRAY, NSMBU,                ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&3DS GameStyle=1&3)`,       `/game-1,3ds/game-style-1,3/table${simplePath}`,       SMM1_AND_3DS_GAMES_ARRAY, SMB_SMB3,             ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&3DS GameStyle=1&W)`,       `/game-1,3ds/game-style-1,w/table${simplePath}`,       SMM1_AND_3DS_GAMES_ARRAY, SMB_SMW,              ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&3DS GameStyle=1&U)`,       `/game-1,3ds/game-style-1,u/table${simplePath}`,       SMM1_AND_3DS_GAMES_ARRAY, SMB_NSMBU,            ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&3DS GameStyle=3&W)`,       `/game-1,3ds/game-style-3,w/table${simplePath}`,       SMM1_AND_3DS_GAMES_ARRAY, SMB3_SMW,             ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&3DS GameStyle=3&U)`,       `/game-1,3ds/game-style-3,u/table${simplePath}`,       SMM1_AND_3DS_GAMES_ARRAY, SMB3_NSMBU,           ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&3DS GameStyle=W&U)`,       `/game-1,3ds/game-style-w,u/table${simplePath}`,       SMM1_AND_3DS_GAMES_ARRAY, SMW_NSMBU,            ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&3DS GameStyle=1&3&W)`,     `/game-1,3ds/game-style-1,3,w/table${simplePath}`,     SMM1_AND_3DS_GAMES_ARRAY, SMB_SMB3_SMW,         ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&3DS GameStyle=1&3&U)`,     `/game-1,3ds/game-style-1,3,u/table${simplePath}`,     SMM1_AND_3DS_GAMES_ARRAY, SMB_SMB3_NSMBU,       ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&3DS GameStyle=1&W&U)`,     `/game-1,3ds/game-style-1,w,u/table${simplePath}`,     SMM1_AND_3DS_GAMES_ARRAY, SMB_SMW_NSMBU,        ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&3DS GameStyle=3&W&U)`,     `/game-1,3ds/game-style-3,w,u/table${simplePath}`,     SMM1_AND_3DS_GAMES_ARRAY, SMB3_SMW_NSMBU,       ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&3DS GameStyle=1&3&W&U)`,   `/game-1,3ds/game-style-1,3,w,u/table${simplePath}`,   SMM1_AND_3DS_GAMES_ARRAY, SMB_SMB3_SMW_NSMBU,   ViewDisplays.TABLE, routeCallback,),

                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=all)`,         `/game-1,2/game-style-all/table${simplePath}`,         SMM1_AND_2_GAMES_ARRAY,   ALL_GAME_STYLES,      ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=1)`,           `/game-1,2/game-style-1/table${simplePath}`,           SMM1_AND_2_GAMES_ARRAY,   SMB,                  ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=3)`,           `/game-1,2/game-style-3/table${simplePath}`,           SMM1_AND_2_GAMES_ARRAY,   SMB3,                 ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=W)`,           `/game-1,2/game-style-w/table${simplePath}`,           SMM1_AND_2_GAMES_ARRAY,   SMW,                  ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=U)`,           `/game-1,2/game-style-u/table${simplePath}`,           SMM1_AND_2_GAMES_ARRAY,   NSMBU,                ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=3DW)`,         `/game-1,2/game-style-3dw/table${simplePath}`,         SMM1_AND_2_GAMES_ARRAY,   SM3DW,                ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=1&3)`,         `/game-1,2/game-style-1,3/table${simplePath}`,         SMM1_AND_2_GAMES_ARRAY,   SMB_SMB3,             ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=1&W)`,         `/game-1,2/game-style-1,w/table${simplePath}`,         SMM1_AND_2_GAMES_ARRAY,   SMB_SMW,              ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=1&U)`,         `/game-1,2/game-style-1,u/table${simplePath}`,         SMM1_AND_2_GAMES_ARRAY,   SMB_NSMBU,            ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=1&3DW)`,       `/game-1,2/game-style-1,3dw/table${simplePath}`,       SMM1_AND_2_GAMES_ARRAY,   SMB_SM3DW,            ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=3&W)`,         `/game-1,2/game-style-3,w/table${simplePath}`,         SMM1_AND_2_GAMES_ARRAY,   SMB3_SMW,             ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=3&U)`,         `/game-1,2/game-style-3,u/table${simplePath}`,         SMM1_AND_2_GAMES_ARRAY,   SMB3_NSMBU,           ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=3&3DW)`,       `/game-1,2/game-style-3,3dw/table${simplePath}`,       SMM1_AND_2_GAMES_ARRAY,   SMB3_SM3DW,           ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=W&U)`,         `/game-1,2/game-style-w,u/table${simplePath}`,         SMM1_AND_2_GAMES_ARRAY,   SMW_NSMBU,            ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=W&3DW)`,       `/game-1,2/game-style-w,3dw/table${simplePath}`,       SMM1_AND_2_GAMES_ARRAY,   SMW_SM3DW,            ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=U&3DW)`,       `/game-1,2/game-style-u,3dw/table${simplePath}`,       SMM1_AND_2_GAMES_ARRAY,   NSMBU_SM3DW,          ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=1&3&W)`,       `/game-1,2/game-style-1,3,w/table${simplePath}`,       SMM1_AND_2_GAMES_ARRAY,   SMB_SMB3_SMW,         ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=1&3&U)`,       `/game-1,2/game-style-1,3,u/table${simplePath}`,       SMM1_AND_2_GAMES_ARRAY,   SMB_SMB3_NSMBU,       ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=1&3&3DW)`,     `/game-1,2/game-style-1,3,3dw/table${simplePath}`,     SMM1_AND_2_GAMES_ARRAY,   SMB_SMB3_SM3DW,       ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=1&W&U)`,       `/game-1,2/game-style-1,w,u/table${simplePath}`,       SMM1_AND_2_GAMES_ARRAY,   SMB_SMW_NSMBU,        ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=1&W&3DW)`,     `/game-1,2/game-style-1,w,3dw/table${simplePath}`,     SMM1_AND_2_GAMES_ARRAY,   SMB_SMW_SM3DW,        ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=1&U&3DW)`,     `/game-1,2/game-style-1,u,3dw/table${simplePath}`,     SMM1_AND_2_GAMES_ARRAY,   SMB_NSMBU_SM3DW,      ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=3&W&U)`,       `/game-1,2/game-style-3,w,u/table${simplePath}`,       SMM1_AND_2_GAMES_ARRAY,   SMB3_SMW_NSMBU,       ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=3&W&3DW)`,     `/game-1,2/game-style-3,w,3dw/table${simplePath}`,     SMM1_AND_2_GAMES_ARRAY,   SMB3_SMW_SM3DW,       ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=3&U&3DW)`,     `/game-1,2/game-style-3,u,3dw/table${simplePath}`,     SMM1_AND_2_GAMES_ARRAY,   SMB3_NSMBU_SM3DW,     ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=W&U&3DW)`,     `/game-1,2/game-style-w,u,3dw/table${simplePath}`,     SMM1_AND_2_GAMES_ARRAY,   SMW_NSMBU_SM3DW,      ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=1&3&W&U)`,     `/game-1,2/game-style-1,3,w,u/table${simplePath}`,     SMM1_AND_2_GAMES_ARRAY,   SMB_SMB3_SMW_NSMBU,   ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=1&3&W&3DW)`,   `/game-1,2/game-style-1,3,w,3dw/table${simplePath}`,   SMM1_AND_2_GAMES_ARRAY,   SMB_SMB3_SMW_SM3DW,   ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=1&3&U&3DW)`,   `/game-1,2/game-style-1,3,u,3dw/table${simplePath}`,   SMM1_AND_2_GAMES_ARRAY,   SMB_SMB3_NSMBU_SM3DW, ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=1&W&U&3DW)`,   `/game-1,2/game-style-1,w,u,3dw/table${simplePath}`,   SMM1_AND_2_GAMES_ARRAY,   SMB_SMW_NSMBU_SM3DW,  ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1&2 GameStyle=3&W&U&3DW)`,   `/game-1,2/game-style-3,w,u,3dw/table${simplePath}`,   SMM1_AND_2_GAMES_ARRAY,   SMB3_SMW_NSMBU_SM3DW, ViewDisplays.TABLE, routeCallback,),

                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=all)`,       `/game-3ds,2/game-style-all/table${simplePath}`,       SMM3DS_AND_2_GAMES_ARRAY, ALL_GAME_STYLES,      ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=1)`,         `/game-3ds,2/game-style-1/table${simplePath}`,         SMM3DS_AND_2_GAMES_ARRAY, SMB,                  ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=3)`,         `/game-3ds,2/game-style-3/table${simplePath}`,         SMM3DS_AND_2_GAMES_ARRAY, SMB3,                 ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=W)`,         `/game-3ds,2/game-style-w/table${simplePath}`,         SMM3DS_AND_2_GAMES_ARRAY, SMW,                  ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=U)`,         `/game-3ds,2/game-style-u/table${simplePath}`,         SMM3DS_AND_2_GAMES_ARRAY, NSMBU,                ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=3DW)`,       `/game-3ds,2/game-style-3dw/table${simplePath}`,       SMM3DS_AND_2_GAMES_ARRAY, SM3DW,                ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=1&3)`,       `/game-3ds,2/game-style-1,3/table${simplePath}`,       SMM3DS_AND_2_GAMES_ARRAY, SMB_SMB3,             ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=1&W)`,       `/game-3ds,2/game-style-1,w/table${simplePath}`,       SMM3DS_AND_2_GAMES_ARRAY, SMB_SMW,              ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=1&U)`,       `/game-3ds,2/game-style-1,u/table${simplePath}`,       SMM3DS_AND_2_GAMES_ARRAY, SMB_NSMBU,            ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=1&3DW)`,     `/game-3ds,2/game-style-1,3dw/table${simplePath}`,     SMM3DS_AND_2_GAMES_ARRAY, SMB_SM3DW,            ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=3&W)`,       `/game-3ds,2/game-style-3,w/table${simplePath}`,       SMM3DS_AND_2_GAMES_ARRAY, SMB3_SMW,             ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=3&U)`,       `/game-3ds,2/game-style-3,u/table${simplePath}`,       SMM3DS_AND_2_GAMES_ARRAY, SMB3_NSMBU,           ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=3&3DW)`,     `/game-3ds,2/game-style-3,3dw/table${simplePath}`,     SMM3DS_AND_2_GAMES_ARRAY, SMB3_SM3DW,           ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=W&U)`,       `/game-3ds,2/game-style-w,u/table${simplePath}`,       SMM3DS_AND_2_GAMES_ARRAY, SMW_NSMBU,            ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=W&3DW)`,     `/game-3ds,2/game-style-w,3dw/table${simplePath}`,     SMM3DS_AND_2_GAMES_ARRAY, SMW_SM3DW,            ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=U&3DW)`,     `/game-3ds,2/game-style-u,3dw/table${simplePath}`,     SMM3DS_AND_2_GAMES_ARRAY, NSMBU_SM3DW,          ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=1&3&W)`,     `/game-3ds,2/game-style-1,3,w/table${simplePath}`,     SMM3DS_AND_2_GAMES_ARRAY, SMB_SMB3_SMW,         ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=1&3&U)`,     `/game-3ds,2/game-style-1,3,u/table${simplePath}`,     SMM3DS_AND_2_GAMES_ARRAY, SMB_SMB3_NSMBU,       ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=1&3&3DW)`,   `/game-3ds,2/game-style-1,3,3dw/table${simplePath}`,   SMM3DS_AND_2_GAMES_ARRAY, SMB_SMB3_SM3DW,       ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=1&W&U)`,     `/game-3ds,2/game-style-1,w,u/table${simplePath}`,     SMM3DS_AND_2_GAMES_ARRAY, SMB_SMW_NSMBU,        ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=1&W&3DW)`,   `/game-3ds,2/game-style-1,w,3dw/table${simplePath}`,   SMM3DS_AND_2_GAMES_ARRAY, SMB_SMW_SM3DW,        ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=1&U&3DW)`,   `/game-3ds,2/game-style-1,u,3dw/table${simplePath}`,   SMM3DS_AND_2_GAMES_ARRAY, SMB_NSMBU_SM3DW,      ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=3&W&U)`,     `/game-3ds,2/game-style-3,w,u/table${simplePath}`,     SMM3DS_AND_2_GAMES_ARRAY, SMB3_SMW_NSMBU,       ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=3&W&3DW)`,   `/game-3ds,2/game-style-3,w,3dw/table${simplePath}`,   SMM3DS_AND_2_GAMES_ARRAY, SMB3_SMW_SM3DW,       ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=3&U&3DW)`,   `/game-3ds,2/game-style-3,u,3dw/table${simplePath}`,   SMM3DS_AND_2_GAMES_ARRAY, SMB3_NSMBU_SM3DW,     ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=W&U&3DW)`,   `/game-3ds,2/game-style-w,u,3dw/table${simplePath}`,   SMM3DS_AND_2_GAMES_ARRAY, SMW_NSMBU_SM3DW,      ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=1&3&W&U)`,   `/game-3ds,2/game-style-1,3,w,u/table${simplePath}`,   SMM3DS_AND_2_GAMES_ARRAY, SMB_SMB3_SMW_NSMBU,   ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=1&3&W&3DW)`, `/game-3ds,2/game-style-1,3,w,3dw/table${simplePath}`, SMM3DS_AND_2_GAMES_ARRAY, SMB_SMB3_SMW_SM3DW,   ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=1&3&U&3DW)`, `/game-3ds,2/game-style-1,3,u,3dw/table${simplePath}`, SMM3DS_AND_2_GAMES_ARRAY, SMB_SMB3_NSMBU_SM3DW, ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=1&W&U&3DW)`, `/game-3ds,2/game-style-1,w,u,3dw/table${simplePath}`, SMM3DS_AND_2_GAMES_ARRAY, SMB_SMW_NSMBU_SM3DW,  ViewDisplays.TABLE, routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=3DS&2 GameStyle=3&W&U&3DW)`, `/game-3ds,2/game-style-3,w,u,3dw/table${simplePath}`, SMM3DS_AND_2_GAMES_ARRAY, SMB3_SMW_NSMBU_SM3DW, ViewDisplays.TABLE, routeCallback,),
            ]
        }

    }
    /** A representation of an {@link EveryRoutes} instance with only the {@link GameCollection} in its route */
    private static readonly AnyGame_EveryRoutes = class AnyGame_EveryRoutes<const out SIMPLE_NAME extends string, const out SIMPLE_PATH extends string, > extends EveryRoutes<SIMPLE_NAME, SIMPLE_PATH> {

        constructor(name: SIMPLE_NAME, path: SIMPLE_PATH, routeCallback: GameRouteCallback,) {
            super(name, path, NO_VIEW_DISPLAY, null, ALL_GAMES_COLLECTION, Games.SUPER_MARIO_MAKER_2, NO_GAME_STYLES_COLLECTION, null, (_, games,) => routeCallback(games,),)
        }


        protected override _createEveryRoutes(): readonly SimpleRoute[] {
            const simpleName = this.simpleName
            const simplePath = this.simplePath
            const routeCallback = this.routeCallback

            return [
                new SimpleRoute(`${simpleName} (Game=all)`,   `/game-all${simplePath}`,   ALL_GAMES_ARRAY,          null, null, routeCallback,),
                new SimpleRoute(`${simpleName} (Game=1)`,     `/game-1${simplePath}`,     SMM1_GAMES_ARRAY,         null, null, routeCallback,),
                new SimpleRoute(`${simpleName} (Game=3DS)`,   `/game-3ds${simplePath}`,   SMM3DS_GAMES_ARRAY,       null, null, routeCallback,),
                new SimpleRoute(`${simpleName} (Game=2)`,     `/game-2${simplePath}`,     SMM2_GAMES_ARRAY,         null, null, routeCallback,),
                new SimpleRoute(`${simpleName} (Game=1&3DS)`, `/game-1,3ds${simplePath}`, SMM1_AND_3DS_GAMES_ARRAY, null, null, routeCallback,),
                new SimpleRoute(`${simpleName} (Game=1&2)`,   `/game-1,2${simplePath}`,   SMM1_AND_2_GAMES_ARRAY,   null, null, routeCallback,),
                new SimpleRoute(`${simpleName} (Game=3DS&2)`, `/game-3ds,2${simplePath}`, SMM3DS_AND_2_GAMES_ARRAY, null, null, routeCallback,),
            ]
        }

        protected override _getPartialPathFromGameStyles() {
            return EMPTY_STRING
        }

        protected override _getPartialPathFromViewDisplay() {
            return EMPTY_STRING
        }

    }
    /** A representation of an {@link EveryRoutes} instance as any possible {@link ViewDisplays} in its route only in {@link Games.SUPER_MARIO_MAKER_1 SMM1} */
    private static readonly AnyViewDisplayOnlyInSMM1_EveryRoutes = class AnyViewDisplayOnlyInSMM1_EveryRoutes<const out SIMPLE_NAME extends string, const out SIMPLE_PATH extends string, > extends EveryRoutes<SIMPLE_NAME, SIMPLE_PATH> {

        constructor(name: SIMPLE_NAME, path: SIMPLE_PATH, defaultViewDisplay: NullOr<ViewDisplays>, routeCallback: RouteCallback,) {
            super(name, path, ALL_VIEW_DISPLAY, defaultViewDisplay ?? ViewDisplays.TABLE, SMM1_GAMES_COLLECTION, Games.SUPER_MARIO_MAKER_1, NO_GAME_STYLES_COLLECTION, null, routeCallback,)
        }


        protected override _createEveryRoutes(): readonly SimpleRoute[] {
            const simpleName = this.simpleName
            const simplePath = this.simplePath
            const routeCallback = this.routeCallback

            return [
                new SimpleRoute(`${simpleName} (list Game=1)`,  `/game-1/list${simplePath}`,  SMM1_GAMES_ARRAY, null, ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1)`,  `/game-1/card${simplePath}`,  SMM1_GAMES_ARRAY, null, ViewDisplays.CARD_LIST,   routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=1)`, `/game-1/table${simplePath}`, SMM1_GAMES_ARRAY, null, ViewDisplays.TABLE,       routeCallback,),
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
    /** A representation of an {@link EveryRoutes} instance as any possible {@link ViewDisplays} in its route only in {@link Games.SUPER_MARIO_MAKER_2 SMM2} */
    private static readonly AnyViewDisplayOnlyInSMM2_EveryRoutes = class AnyViewDisplayOnlyInSMM2_EveryRoutes<const out SIMPLE_NAME extends string, const out SIMPLE_PATH extends string, > extends EveryRoutes<SIMPLE_NAME, SIMPLE_PATH> {

        constructor(name: SIMPLE_NAME, path: SIMPLE_PATH, defaultViewDisplay: NullOr<ViewDisplays>, routeCallback: RouteCallback,) {
            super(name, path, ALL_VIEW_DISPLAY, defaultViewDisplay ?? ViewDisplays.TABLE, SMM2_GAMES_COLLECTION, Games.SUPER_MARIO_MAKER_2, NO_GAME_STYLES_COLLECTION, null, routeCallback,)
        }


        protected override _createEveryRoutes(): readonly SimpleRoute[] {
            const simpleName = this.simpleName
            const simplePath = this.simplePath
            const routeCallback = this.routeCallback

            return [
                new SimpleRoute(`${simpleName} (list Game=2)`,  `/game-2/list${simplePath}`,  SMM2_GAMES_ARRAY, null, ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2)`,  `/game-2/card${simplePath}`,  SMM2_GAMES_ARRAY, null, ViewDisplays.CARD_LIST,   routeCallback,),
                new SimpleRoute(`${simpleName} (table Game=2)`, `/game-2/table${simplePath}`, SMM2_GAMES_ARRAY, null, ViewDisplays.TABLE,       routeCallback,),
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
    /** A representation of an {@link EveryRoutes} instance as only not the {@link ViewDisplays.TABLE} in its route in any {@link Games} */
    private static readonly AnyListViewDisplayInAnyGame_EveryRoutes = class AnyListViewDisplay_EveryRoutes<const out SIMPLE_NAME extends string, const out SIMPLE_PATH extends string, > extends EveryRoutes<SIMPLE_NAME, SIMPLE_PATH> {

        constructor(name: SIMPLE_NAME, path: SIMPLE_PATH, defaultViewDisplay: NullOr<ViewDisplays>, routeCallback: RouteCallback,) {
            super(name, path, NOT_TABLE_VIEW_DISPLAY, defaultViewDisplay ?? ViewDisplays.CARD_LIST, ALL_GAMES_COLLECTION, Games.SUPER_MARIO_MAKER_2, NO_GAME_STYLES_COLLECTION, null, routeCallback,)
        }


        protected override _createEveryRoutes(): readonly SimpleRoute[] {
            const simpleName = this.simpleName
            const simplePath = this.simplePath
            const routeCallback = this.routeCallback

            return [
                new SimpleRoute(`${simpleName} (list Game=all)`,   `/game-all/list${simplePath}`,   ALL_GAMES_ARRAY,          null, ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1)`,     `/game-1/list${simplePath}`,     SMM1_GAMES_ARRAY,         null, ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS)`,   `/game-3ds/list${simplePath}`,   SMM3DS_GAMES_ARRAY,       null, ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=2)`,     `/game-2/list${simplePath}`,     SMM2_GAMES_ARRAY,         null, ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&3DS)`, `/game-1,3ds/list${simplePath}`, SMM1_AND_3DS_GAMES_ARRAY, null, ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=1&2)`,   `/game-1,2/list${simplePath}`,   SMM1_AND_2_GAMES_ARRAY,   null, ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (list Game=3DS&2)`, `/game-3ds,2/list${simplePath}`, SMM3DS_AND_2_GAMES_ARRAY, null, ViewDisplays.SIMPLE_LIST, routeCallback,),

                new SimpleRoute(`${simpleName} (card Game=all)`,   `/game-all/card${simplePath}`,   ALL_GAMES_ARRAY,          null, ViewDisplays.CARD_LIST,   routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1)`,     `/game-1/card${simplePath}`,     SMM1_GAMES_ARRAY,         null, ViewDisplays.CARD_LIST,   routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS)`,   `/game-3ds/card${simplePath}`,   SMM3DS_GAMES_ARRAY,       null, ViewDisplays.CARD_LIST,   routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2)`,     `/game-2/card${simplePath}`,     SMM2_GAMES_ARRAY,         null, ViewDisplays.CARD_LIST,   routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&3DS)`, `/game-1,3ds/card${simplePath}`, SMM1_AND_3DS_GAMES_ARRAY, null, ViewDisplays.CARD_LIST,   routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1&2)`,   `/game-1,2/card${simplePath}`,   SMM1_AND_2_GAMES_ARRAY,   null, ViewDisplays.CARD_LIST,   routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=3DS&2)`, `/game-3ds,2/card${simplePath}`, SMM3DS_AND_2_GAMES_ARRAY, null, ViewDisplays.CARD_LIST,   routeCallback,),
            ]
        }

        protected override _getPartialPathFromGames(value: NullOr<readonly Games[]>,): PossibleGamePath {
            if (value == null)
                value = Games.selected.toArray()
            if (value.length === 0)
                return EMPTY_STRING
            return `/game-${Games.getGroupUrlValue(value,)}` as PossibleGamePath
        }

        protected override _getPartialPathFromGameStyles() {
            return EMPTY_STRING
        }

        protected override _getPartialPathFromViewDisplay(value: NullOr<ViewDisplays>,): PossibleViewDisplayPath {
            if (value == null)
                value = ViewDisplays.CompanionEnum.get.currentOrNull
            if (value == null)
                value = this.defaultViewDisplay!
            else if (value === ViewDisplays.TABLE)
                value = this.defaultViewDisplay!
            return `/${value.urlValue}`
        }

    }
    /** A representation of an {@link EveryRoutes} instance as only not the {@link ViewDisplays.TABLE} in its route only in {@link Games.SUPER_MARIO_MAKER_1 SMM1} */
    private static readonly AnyListViewDisplayOnlyInSMM1_EveryRoutes = class AnyListViewDisplayOnlyInSMM1_EveryRoutes<const out SIMPLE_NAME extends string, const out SIMPLE_PATH extends string, > extends EveryRoutes<SIMPLE_NAME, SIMPLE_PATH> {

        constructor(name: SIMPLE_NAME, path: SIMPLE_PATH, defaultViewDisplay: NullOr<ViewDisplays>, routeCallback: RouteCallback,) {
            super(name, path, NOT_TABLE_VIEW_DISPLAY, defaultViewDisplay ?? ViewDisplays.CARD_LIST, SMM1_GAMES_COLLECTION, Games.SUPER_MARIO_MAKER_1, NO_GAME_STYLES_COLLECTION, null, routeCallback,)
        }


        protected override _createEveryRoutes(): readonly SimpleRoute[] {
            const simpleName = this.simpleName
            const simplePath = this.simplePath
            const routeCallback = this.routeCallback

            return [
                new SimpleRoute(`${simpleName} (list Game=1)`, `/game-1/list${simplePath}`, SMM1_GAMES_ARRAY, null, ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=1)`, `/game-1/card${simplePath}`, SMM1_GAMES_ARRAY, null, ViewDisplays.CARD_LIST,   routeCallback,),
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
            else if (value === ViewDisplays.TABLE)
                value = this.defaultViewDisplay!
            return `/${value.urlValue}`
        }

    }
    /** A representation of an {@link EveryRoutes} instance as only not the {@link ViewDisplays.TABLE} in its route only in {@link Games.SUPER_MARIO_MAKER_2 SMM2} */
    private static readonly AnyListViewDisplayOnlyInSMM2_EveryRoutes = class AnyListViewDisplayOnlyInSMM2_EveryRoutes<const out SIMPLE_NAME extends string, const out SIMPLE_PATH extends string, > extends EveryRoutes<SIMPLE_NAME, SIMPLE_PATH> {

        constructor(name: SIMPLE_NAME, path: SIMPLE_PATH, defaultViewDisplay: NullOr<ViewDisplays>, routeCallback: RouteCallback,) {
            super(name, path, NOT_TABLE_VIEW_DISPLAY, defaultViewDisplay ?? ViewDisplays.CARD_LIST, SMM2_GAMES_COLLECTION, Games.SUPER_MARIO_MAKER_2, NO_GAME_STYLES_COLLECTION, null, routeCallback,)
        }


        protected override _createEveryRoutes(): readonly SimpleRoute[] {
            const simpleName = this.simpleName
            const simplePath = this.simplePath
            const routeCallback = this.routeCallback

            return [
                new SimpleRoute(`${simpleName} (list Game=2)`, `/game-2/list${simplePath}`, SMM2_GAMES_ARRAY, null, ViewDisplays.SIMPLE_LIST, routeCallback,),
                new SimpleRoute(`${simpleName} (card Game=2)`, `/game-2/card${simplePath}`, SMM2_GAMES_ARRAY, null, ViewDisplays.CARD_LIST,   routeCallback,),
            ]
        }

        protected override _getPartialPathFromGames() {
            return '/game-2' as const satisfies PossibleGamePath
        }

        protected override _getPartialPathFromGameStyles() {
            return EMPTY_STRING
        }

        protected override _getPartialPathFromViewDisplay(value: NullOr<ViewDisplays>,): PossibleViewDisplayPath {
            if (value == null)
                value = ViewDisplays.CompanionEnum.get.currentOrNull
            if (value == null)
                value = this.defaultViewDisplay!
            else if (value === ViewDisplays.TABLE)
                value = this.defaultViewDisplay!
            return `/${value.urlValue}`
        }

    }
    /** A representation of an {@link EveryRoutes} instance as only the {@link ViewDisplays.SIMPLE_LIST} in its route */
    private static readonly OnlySimpleViewDisplayOnlyInSMM2_EveryRoutes = class OnlySimpleViewDisplayOnlyInSMM2_EveryRoutes<const out SIMPLE_NAME extends string, const out SIMPLE_PATH extends string, > extends EveryRoutes<SIMPLE_NAME, SIMPLE_PATH> {

        constructor(name: SIMPLE_NAME, path: SIMPLE_PATH, routeCallback: RouteCallback,) {
            super(name, path, SIMPLE_LIST_VIEW_DISPLAY, ViewDisplays.SIMPLE_LIST, SMM2_GAMES_COLLECTION, Games.SUPER_MARIO_MAKER_2, NO_GAME_STYLES_COLLECTION, null, routeCallback,)
        }


        protected override _createEveryRoutes(): readonly SimpleRoute[] {
            return [new SimpleRoute(`${this.simpleName} (list Game=2)`, `/game-2/list${this.simplePath}`, SMM2_GAMES_ARRAY, null, ViewDisplays.SIMPLE_LIST, this.routeCallback,),]
        }

        protected override _getPartialPathFromGames() {
            return '/game-2' as const satisfies PossibleGamePath
        }

        protected override _getPartialPathFromGameStyles() {
            return EMPTY_STRING
        }

        protected override _getPartialPathFromViewDisplay() {
            return `/list` as const satisfies PossibleViewDisplayPath
        }

    }

    //endregion -------------------- Sub class --------------------
    //region -------------------- Enum instances --------------------

    public static readonly HOME = new EveryRoutes.Straight_EveryRoutes('home', '/home', () => <HomeApp/>,)
    public static readonly ABOUT = new EveryRoutes.Straight_EveryRoutes('about', '/about', () => <AboutApp/>,)
    public static readonly SOURCES = new EveryRoutes.Straight_EveryRoutes('sources', '/sources', () => <SourcesApp/>,)

    public static readonly EVERY_POWER_UP_RIDE_AND_HAT_PRIORITY = new EveryRoutes.AnyGame_EveryRoutes('everyPowerUp&Ride&HatPriority', '/every/power-up+ride+hat/priority', games => <PowerUpRideAndHatPriorityApp games={games} type={PowerUpPriorityTypes.ALL}/>,)
    public static readonly EVERY_POWER_UP_AND_RIDE_PRIORITY = new EveryRoutes.AnyGame_EveryRoutes('everyPowerUp&RidePriority', '/every/power-up+ride/priority', games => <PowerUpRideAndHatPriorityApp games={games} type={PowerUpPriorityTypes.POWER_UP_AND_RIDE}/>,)
    public static readonly EVERY_POWER_UP_AND_HAT_PRIORITY = new EveryRoutes.AnyGame_EveryRoutes('everyPowerUp&HatPriority', '/every/power-up+hat/priority', games => <PowerUpRideAndHatPriorityApp games={games} type={PowerUpPriorityTypes.POWER_UP_AND_HAT}/>,)
    public static readonly EVERY_RIDE_AND_HAT_PRIORITY = new EveryRoutes.AnyGame_EveryRoutes('everyRide&HatPriority', '/every/ride+hat/priority', games => <PowerUpRideAndHatPriorityApp games={games} type={PowerUpPriorityTypes.RIDE_AND_HAT}/>,)
    public static readonly EVERY_POWER_UP_PRIORITY = new EveryRoutes.AnyGame_EveryRoutes('everyPowerUpPriority', '/every/power-up/priority', games => <PowerUpRideAndHatPriorityApp games={games} type={PowerUpPriorityTypes.POWER_UP}/>,)
    public static readonly EVERY_RIDE_PRIORITY = new EveryRoutes.AnyGame_EveryRoutes('everyRidePriority', '/every/ride/priority', games => <PowerUpRideAndHatPriorityApp games={games} type={PowerUpPriorityTypes.RIDE}/>,)
    public static readonly EVERY_HAT_PRIORITY = new EveryRoutes.AnyGame_EveryRoutes('everyHatPriority', '/every/hat/priority', games => <PowerUpRideAndHatPriorityApp games={games} type={PowerUpPriorityTypes.HAT}/>,)
    public static readonly NO_PRIORITY = new EveryRoutes.AnyGame_EveryRoutes('noPriority', '/no/priority', games => <PowerUpRideAndHatPriorityApp games={games} type={PowerUpPriorityTypes.NONE}/>,)

    public static readonly EVERY_CHARACTER_NAME = new EveryRoutes.AnyListViewDisplayInAnyGame_EveryRoutes('everyCharacterName', '/every/character-name', null, (viewDisplay, games,) => <CharacterNameApp viewDisplay={viewDisplay} games={games}/>,)

    public static readonly EVERY_GAME_REFERENCE = new EveryRoutes.AnyGame_EveryRoutes('everyGameReference', '/every/game-reference', () => <GameReferenceApp/>,)
    public static readonly EVERY_GAME_STYLE = new EveryRoutes.EveryPath_EveryRoutes('everyGameStyle', '/every/game-style', ViewDisplays.CARD_LIST, (viewDisplay, games,) => <GameStyleApp viewDisplay={viewDisplay} games={games}/>,)

    public static readonly EVERY_ENTITY = new EveryRoutes.EveryPath_EveryRoutesWithGameStyle('everyEntity', '/every/entity', null, (viewDisplay, games, gameStyles,) => <EntityApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles}/>,)
    public static readonly EVERY_ENTITY_CATEGORY = new EveryRoutes.AnyListViewDisplayOnlyInSMM2_EveryRoutes('everyEntityCategory', '/every/entity-category', null, viewDisplay => <EntityCategoryApp viewDisplay={viewDisplay}/>,)
    public static readonly EVERY_GROUP = new EveryRoutes.Straight_EveryRoutes('everyGroup', '/every/entity-group', () => <EntityGroupApp/>)

    public static readonly EVERY_LIMIT = new EveryRoutes.EveryPath_EveryRoutes('everyLimit', '/every/limit', null, (viewDisplay, games,) => <LimitApp viewDisplay={viewDisplay} games={games} type={LimitTypes.ALL}/>,)
    public static readonly EVERY_PLAY_LIMIT = new EveryRoutes.EveryPath_EveryRoutes('playLimit', '/play/limit', null, (viewDisplay, games,) => <LimitApp viewDisplay={viewDisplay} games={games} type={LimitTypes.PLAY}/>,)
    public static readonly EVERY_EDITOR_LIMIT = new EveryRoutes.EveryPath_EveryRoutes('editorLimit', '/editor/limit', null, (viewDisplay, games,) => <LimitApp viewDisplay={viewDisplay} games={games} type={LimitTypes.EDITOR}/>,)

    public static readonly EVERY_THEME = new EveryRoutes.EveryPath_EveryRoutes('everyTheme', '/every/theme', ViewDisplays.CARD_LIST, (viewDisplay, games,) => <ThemeApp viewDisplay={viewDisplay} games={games} type={ThemeTypes.ALL}/>,)
    public static readonly EVERY_COURSE_THEME = new EveryRoutes.EveryPath_EveryRoutes('courseTheme', '/course/theme', ViewDisplays.CARD_LIST, (viewDisplay, games,) => <ThemeApp viewDisplay={viewDisplay} games={games} type={ThemeTypes.COURSE}/>,)
    public static readonly EVERY_WORLD_THEME = new EveryRoutes.EveryPath_EveryRoutes('worldTheme', '/world/theme', ViewDisplays.CARD_LIST, (viewDisplay, games,) => <ThemeApp viewDisplay={viewDisplay} games={games} type={ThemeTypes.WORLD}/>,)

    public static readonly EVERY_SOUND_EFFECT = new EveryRoutes.EveryPath_EveryRoutesWithGameStyle('everySoundEffect', '/every/sound-effect', null, (viewDisplay, games, gameStyles,) => <SoundEffectApp viewDisplay={viewDisplay} games={games} gameStyles={gameStyles}/>,)
    public static readonly EVERY_SOUND_EFFECT_CATEGORY = new EveryRoutes.AnyListViewDisplayOnlyInSMM2_EveryRoutes('everySoundEffectCategory', '/every/sound-effect-category', null, viewDisplay => <SoundEffectCategoryApp viewDisplay={viewDisplay}/>)

    public static readonly EVERY_MII_COSTUME = new EveryRoutes.AnyViewDisplayOnlyInSMM2_EveryRoutes('everyMiiCostume', '/every/mii-costume', null, viewDisplay => <MiiCostumeApp viewDisplay={viewDisplay}/>,)
    public static readonly EVERY_MII_COSTUME_CATEGORY = new EveryRoutes.AnyListViewDisplayOnlyInSMM2_EveryRoutes('everyMiiCostumeCategory', '/every/mii-costume-category', null, viewDisplay => <MiiCostumeCategoryApp viewDisplay={viewDisplay}/>,)

    public static readonly EVERY_MYSTERY_MUSHROOM = new EveryRoutes.AnyViewDisplayOnlyInSMM1_EveryRoutes('everyMysteryMushroom', '/every/mystery-mushroom', ViewDisplays.CARD_LIST, viewDisplay => <MysteryMushroomApp viewDisplay={viewDisplay}/>,)

    public static readonly EVERY_PREDEFINED_MESSAGE = new EveryRoutes.OnlySimpleViewDisplayOnlyInSMM2_EveryRoutes('everyPredefinedMessage', '/every/predefined-message', viewDisplay => <PredefinedMessageApp viewDisplay={viewDisplay}/>,)

    public static readonly EVERY_SAMPLE_COURSE = new EveryRoutes.AnyViewDisplayOnlyInSMM1_EveryRoutes('everySampleCourse', '/every/sample-course', null, viewDisplay => <SampleCourseApp viewDisplay={viewDisplay}/>,)

    public static readonly EVERY_MEDAL = new EveryRoutes.AnyListViewDisplayOnlyInSMM1_EveryRoutes('everyMedal', '/every/medal', null, viewDisplay => <MedalApp viewDisplay={viewDisplay}/>,)

    public static readonly EVERY_COURSE_TAG = new EveryRoutes.AnyListViewDisplayOnlyInSMM2_EveryRoutes('everyCourseTag', '/every/course-tag', null, viewDisplay => <CourseTagApp viewDisplay={viewDisplay} type={CourseTagTypes.ALL}/>,)
    public static readonly EVERY_OFFICIAL_COURSE_TAG = new EveryRoutes.AnyListViewDisplayOnlyInSMM2_EveryRoutes('officialCourseTag', '/official/course-tag', null, viewDisplay => <CourseTagApp viewDisplay={viewDisplay} type={CourseTagTypes.OFFICIAL}/>,)
    public static readonly EVERY_UNOFFICIAL_COURSE_TAG = new EveryRoutes.AnyListViewDisplayOnlyInSMM2_EveryRoutes('unofficialCourseTag', '/unofficial/course-tag', null, viewDisplay => <CourseTagApp viewDisplay={viewDisplay} type={CourseTagTypes.UNOFFICIAL}/>,)
    public static readonly EVERY_MAKER_CENTRAL_COURSE_TAG = new EveryRoutes.AnyListViewDisplayOnlyInSMM2_EveryRoutes('makerCentralCourseTag', '/maker-central/course-tag', null, viewDisplay => <CourseTagApp viewDisplay={viewDisplay} type={CourseTagTypes.MAKER_CENTRAL}/>,)

    public static readonly EVERY_INSTRUMENT = new EveryRoutes.AnyListViewDisplayInAnyGame_EveryRoutes('everyInstrument', '/every/instrument', null, viewDisplay => <InstrumentApp viewDisplay={viewDisplay}/>,)//TODO add the games on the InstrumentApp

    public static readonly EVERY_EDITOR_VOICE = new EveryRoutes.AnyListViewDisplayInAnyGame_EveryRoutes('everyEditorVoice', '/every/editor-voice', null, (viewDisplay, games,) => <EditorVoiceApp viewDisplay={viewDisplay} games={games}/>,)

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

        #everyRoute?: readonly SimpleRoute[]

        public get everyRoute(): readonly SimpleRoute[] {
            if (this.#everyRoute != null)
                return this.#everyRoute

            const routes = [] as SimpleRoute[]
            this.values.forEach(it => {
                const valuesToAdd = it.everyRoute
                const size = valuesToAdd.length
                let index = -1
                while (++index < size)
                    routes.push(valuesToAdd[index],)
            },)
            return this.#everyRoute = routes
        }

        public getValueInUrl(url: string,): NullOr<EveryRoutes> {
            const values = this.values
            const size = values.size
            let index = -1
            while (++index < size) {
                const value = values[index]!
                if (url.endsWith(value.simplePath,))
                    return value
            }
            return null
        }

        public getRouteFromName(name: PossibleRouteName, language?: Nullable<ProjectLanguages>,): EveryPossibleRoutes {
            language ??= ProjectLanguages.CompanionEnum.get.current
            const values = this.values
            const size1 = values.size
            let index1 = -1
            while (++index1 < size1) {
                const value = values[index1]!
                if (value.simpleName === name) {
                    const everyRoute = value.everyRoute
                    //region -------------------- Route by direct name --------------------

                    const size2 = everyRoute.length
                    let index2 = -1
                    while (++index2 < size2) {
                        const route = everyRoute[index2]
                        if (route.name === name)
                            return value.getPath(language, route.games, route.gameStyles, route.viewDisplay,)
                    }

                    //endregion -------------------- Route by direct name --------------------
                    //region -------------------- Route by direct path --------------------

                    const pathToFind = `${value._getPartialPathFromGames(Games.selected.toArray(),)}${value._getPartialPathFromGameStyles(GameStyles.selected.toArray(),)}${value._getPartialPathFromViewDisplay(ViewDisplays.CompanionEnum.get.currentOrNull,)}${value.simplePath}`

                    let index3 = -1
                    while (++index3 < size2) {
                        const route = everyRoute[index3]
                        if (route.path === pathToFind)
                            return value.getPath(language, route.games, route.gameStyles, route.viewDisplay,)
                    }

                    //endregion -------------------- Route by direct path --------------------

                    throw new ReferenceError(`No route is findable by the direct name "${name}".`,)
                }

                const routeFromOnlyViewDisplay = this.#getRouteFromOnlyViewDisplay(value, name, language,)
                if (routeFromOnlyViewDisplay != null)
                    return routeFromOnlyViewDisplay

                if (name.startsWith(`${value.simpleName} `,)) {
                    const gamesToFind = this.#getGamesInName(name,)
                    const gameStylesToFind = this.#getGameStylesInName(name,)
                    const viewDisplayToFind = this.#getViewDisplayInName(name,)
                    const pathToFind = `${value._getPartialPathFromGames(gamesToFind,)}${value._getPartialPathFromGameStyles(gameStylesToFind,)}${value._getPartialPathFromViewDisplay(viewDisplayToFind,)}${value.simplePath}`

                    const everyRoute = value.everyRoute
                    const size2 = everyRoute.length
                    let index2 = -1
                    while (++index2 < size2) {
                        const route = everyRoute[index2]
                        if (route.path === pathToFind)
                            return value.getPath(language, route.games, route.gameStyles, route.viewDisplay,)
                    }
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
         */
        #getGamesInName(name: PossibleRouteName,): readonly Games[] {
            const indexOfGame = name.indexOf('Game=',)
            if (indexOfGame === -1)
                return EMPTY_ARRAY

            const Companion = Games.CompanionEnum.get
            const selectedGames = name.substring(indexOfGame, -1,).split(Companion.NAME_ARGUMENT_SEPARATOR,)
            const size = selectedGames.length
            const games = new Array<Games>(size,)
            let index = size
            while (--index > 0)
                games[index] = Companion.getValueBySimpleValue(selectedGames[index],)
            return games
        }

        #getGameStylesInName(name: PossibleRouteName,): readonly GameStyles[] {
            const indexOfGame = name.indexOf('GameStyle=',)
            if (indexOfGame === -1)
                return EMPTY_ARRAY

            const Companion = GameStyles.CompanionEnum.get
            const selectedGames = name.substring(indexOfGame, -1,).split(Companion.NAME_ARGUMENT_SEPARATOR,)
            const size = selectedGames.length
            const gameStyles = new Array<GameStyles>(size,)
            let index = size
            while (--index > 0)
                gameStyles[index] = Companion.getValueBySimpleValue(selectedGames[index],)
            return gameStyles
        }

        /**
         * Get the {@link ViewDisplays} selected in the {@link name} received
         *
         * @param name The name to retrieve the {@link ViewDisplays}
         */
        #getViewDisplayInName(name: PossibleRouteName,): NullOr<ViewDisplays> {
            if (name.includes('(list'))
                return ViewDisplays.SIMPLE_LIST
            if (name.includes('(card'))
                return ViewDisplays.CARD_LIST
            if (name.includes('(table'))
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

    #everyRoutes?: readonly SimpleRoute[]

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(name: SIMPLE_NAME, path: SIMPLE_PATH,
                        viewDisplays: ViewDisplayCollection, defaultViewDisplay: NullOr<ViewDisplays>,
                        games: GameCollection, defaultGame: NullOr<Games>,
                        gameStyles: GameStyleCollection, defaultGameStyles: NullOr<readonly GameStyles[]>,
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

    public get defaultGameStyles(): NullOr<readonly GameStyles[]> {
        return this.#defaultGameStyles
    }

    public get routeCallback(): RouteCallback {
        return this.#routeCallback
    }


    public get everyRoute(): readonly SimpleRoute[] {
        return this.#everyRoutes ??= this._createEveryRoutes()
    }

    protected abstract _createEveryRoutes(): readonly SimpleRoute[]

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    /**
     * Get the partial path from a {@link Nullable} {@link Games} {@link ReadonlyArray array}
     *
     * @param value The {@link Games} to retrieve its {@link Games.urlValue}
     */
    protected _getPartialPathFromGames(value: NullOr<readonly Games[]>,): PossibleGamePath {
        if (value == null)
            return `/game-${Games.getGroupUrlValue(Games.selected,)}`
        if (value.length === 0) {
            const defaultGame = this.defaultGame
            if (defaultGame == null)
                return EMPTY_STRING
            return `/game-${defaultGame.urlValue}`
        }
        if (value.length === 0)
            return EMPTY_STRING
        return `/game-${Games.getGroupUrlValue(value,)}`
    }

    protected _getPartialPathFromGameStyles(values: NullOr<readonly GameStyles[]>,): PossibleGameStylePath {
        if (values == null)
            return `/game-style-${GameStyles.getGroupUrlValue(GameStyles.selected,)}` as PossibleGameStylePath
        if (values.length === 0) {
            const defaultGameStyles = this.defaultGameStyles
            if (defaultGameStyles == null)
                return EMPTY_STRING
            values = defaultGameStyles
        }
        if (values.length === 0)
            return EMPTY_STRING
        return `/game-style-${GameStyles.getGroupUrlValue(values,)}` as PossibleGameStylePath
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

    public getPath(language: NullOr<ProjectLanguages>, games: NullOr<readonly Games[]>, gameStyles: NullOr<readonly GameStyles[]>, viewDisplay: NullOr<ViewDisplays>,): EveryPossibleRoutes {
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
