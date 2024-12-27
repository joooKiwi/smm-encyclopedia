import type {EmptyString} from '@joookiwi/type'

import type {ViewDisplays}                                                                                                                                                                  from 'app/withInterpreter/ViewDisplays'
import type {PossibleUrlValue as UrlValue_ViewDisplay}                                                                                                                                      from 'app/withInterpreter/ViewDisplays.types'
import type {FullGroupUrlName as FullUrlName_Game, FullGroupUrlName_WithNotSMM2, FullGroupUrlName_WithSMM2, FullUrlValue as UrlValue_Game, FullUrlValue_WithNotSMM2, FullUrlValue_WithSMM2} from 'core/game/Games.types'
import type {FullGroupUrlName as FullUrlName_GameStyle, FullGroupUrlName_SMM1, FullUrlValue as FullUrlValue_GameStyle, FullUrlValue_SMM1}                                                   from 'core/gameStyle/GameStyles.types'
import type {FullUrlName as FullUrlName_Time, FullUrlValue as FullUrlValue_Time}                                                                                                            from 'core/time/Times.types'
import type {EveryRoutes}                                                                                                                                                                   from 'route/EveryRoutes'
import type {SimpleRoute}                                                                                                                                                                   from 'route/SimpleRoute'
import type {GameCollection}                                                                                                                                                                from 'util/collection/GameCollection'
import type {GameStyleCollection}                                                                                                                                                           from 'util/collection/GameStyleCollection'
import type {TimeCollection}                                                                                                                                                                from 'util/collection/TimeCollection'

enum Enum {
    HOME,
    ABOUT,
    SOURCES,

    EVERY_MUSIC,

    EVERY_POWER_UP_RIDE_AND_HAT_PRIORITY,
    EVERY_POWER_UP_AND_RIDE_PRIORITY, EVERY_POWER_UP_AND_HAT_PRIORITY, EVERY_RIDE_AND_HAT_PRIORITY,
    EVERY_POWER_UP_PRIORITY, EVERY_RIDE_PRIORITY, EVERY_HAT_PRIORITY,
    NO_PRIORITY,

    EVERY_CHARACTER_NAME,

    EVERY_GAME_REFERENCE,
    EVERY_GAME_STYLE,

    EVERY_ENTITY, EVERY_ENTITY_CATEGORY,
    EVERY_GROUP,

    EVERY_LIMIT, EVERY_PLAY_LIMIT, EVERY_EDITOR_LIMIT,

    EVERY_THEME, EVERY_COURSE_THEME, EVERY_WORLD_THEME,

    EVERY_SOUND_EFFECT, EVERY_SOUND_EFFECT_CATEGORY,

    EVERY_MII_COSTUME, EVERY_MII_COSTUME_CATEGORY,

    EVERY_MYSTERY_MUSHROOM,

    EVERY_PREDEFINED_MESSAGE,

    EVERY_SAMPLE_COURSE,
    EVERY_OFFICIAL_COURSE,

    EVERY_MEDAL,

    EVERY_COURSE_TAG,
    EVERY_OFFICIAL_COURSE_TAG, EVERY_UNOFFICIAL_COURSE_TAG, EVERY_MAKER_CENTRAL_COURSE_TAG,

    EVERY_INSTRUMENT,

    EVERY_EDITOR_VOICE,

    EVERY_ROUTE,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum


/** A map type made to give each possibility for a path and a name to a specific {@link EveryRoutes} */
interface SimpleRouteMap {
    HOME:    Of<'HOME'>
    ABOUT:   Of<'ABOUT'>
    SOURCES: Of<'SOURCES'>

    EVERY_MUSIC: Of<'EVERY_MUSIC'>

    EVERY_POWER_UP_RIDE_AND_HAT_PRIORITY: InAnyGame<'EVERY_POWER_UP_RIDE_AND_HAT_PRIORITY'>
    EVERY_POWER_UP_AND_RIDE_PRIORITY:     InAnyGame<'EVERY_POWER_UP_AND_RIDE_PRIORITY'>
    EVERY_POWER_UP_AND_HAT_PRIORITY:      InAnyGame<'EVERY_POWER_UP_AND_HAT_PRIORITY'>
    EVERY_RIDE_AND_HAT_PRIORITY:          InAnyGame<'EVERY_RIDE_AND_HAT_PRIORITY'>
    EVERY_POWER_UP_PRIORITY:              InAnyGame<'EVERY_POWER_UP_PRIORITY'>
    EVERY_RIDE_PRIORITY:                  InAnyGame<'EVERY_RIDE_PRIORITY'>
    EVERY_HAT_PRIORITY:                   InAnyGame<'EVERY_HAT_PRIORITY'>
    NO_PRIORITY:                          InAnyGame<'NO_PRIORITY'>

    EVERY_CHARACTER_NAME: InTableAndGameAndTime<'EVERY_CHARACTER_NAME'>

    EVERY_GAME_REFERENCE: InAnyGame<'EVERY_GAME_REFERENCE'>
    EVERY_GAME_STYLE:     InTableAndAnyGame<'EVERY_GAME_STYLE'>

    EVERY_ENTITY:          InViewDisplay_Game_GameStyle_Time<'EVERY_ENTITY'>
    EVERY_ENTITY_CATEGORY: InOnlySmm2<'EVERY_ENTITY_CATEGORY'>
    EVERY_GROUP:           Of<'EVERY_GROUP'>

    EVERY_LIMIT:        InViewDisplay_Game_GameStyle_Time<'EVERY_LIMIT'>
    EVERY_PLAY_LIMIT:   InViewDisplay_Game_GameStyle_Time<'EVERY_PLAY_LIMIT'>
    EVERY_EDITOR_LIMIT: InViewDisplay_Game_GameStyle_Time<'EVERY_EDITOR_LIMIT'>

    EVERY_THEME:        InTableAndAnyGame<'EVERY_THEME'>
    EVERY_COURSE_THEME: InTableAndAnyGame<'EVERY_COURSE_THEME'>
    EVERY_WORLD_THEME:  InTableAndAnyGame<'EVERY_WORLD_THEME'>

    EVERY_SOUND_EFFECT:          InViewDisplay_Game_GameStyle_Time<'EVERY_SOUND_EFFECT'>
    EVERY_SOUND_EFFECT_CATEGORY: InOnlySmm2<'EVERY_SOUND_EFFECT_CATEGORY'>

    EVERY_MII_COSTUME:          InOnlySmm2<'EVERY_MII_COSTUME'>
    EVERY_MII_COSTUME_CATEGORY: InOnlySmm2<'EVERY_MII_COSTUME_CATEGORY'>

    EVERY_MYSTERY_MUSHROOM: InOnlySmm1<'EVERY_MYSTERY_MUSHROOM'>

    EVERY_PREDEFINED_MESSAGE: InOnlySmm2<'EVERY_PREDEFINED_MESSAGE'>

    EVERY_SAMPLE_COURSE:   InOnlySmm1<'EVERY_SAMPLE_COURSE'>
    EVERY_OFFICIAL_COURSE: InTableAndAnyGame<'EVERY_OFFICIAL_COURSE'>

    EVERY_MEDAL: InOnlySmm1<'EVERY_MEDAL'>

    EVERY_COURSE_TAG:               InOnlySmm2<'EVERY_COURSE_TAG'>
    EVERY_OFFICIAL_COURSE_TAG:      InOnlySmm2<'EVERY_OFFICIAL_COURSE_TAG'>
    EVERY_UNOFFICIAL_COURSE_TAG:    InOnlySmm2<'EVERY_UNOFFICIAL_COURSE_TAG'>
    EVERY_MAKER_CENTRAL_COURSE_TAG: InOnlySmm2<'EVERY_MAKER_CENTRAL_COURSE_TAG'>

    EVERY_INSTRUMENT: InViewDisplay_Game_GameStyle_Time<'EVERY_INSTRUMENT'>

    EVERY_EDITOR_VOICE: InTableAndGameAndTime<'EVERY_EDITOR_VOICE'>

    EVERY_ROUTE: Of<'EVERY_ROUTE'>
}

//region -------------------- Route types --------------------

type PossibleViewDisplay = | 'table' | 'card' | 'list'

//region -------------------- Route name --------------------

/** The union of the 1st value (in parentheses) with the name separated by space */
type NameJoin1<NAME extends string, FIRST extends string, > = | NAME | `${NAME} (${FIRST})`
/** The union of the 1st & 2nd value (in parentheses) with the name separated by space */
type NameJoin2<NAME extends string, FIRST extends string, SECOND extends string, > = | NAME
                                                                                     | `${NAME} (${| FIRST | SECOND})`
                                                                                     | `${NAME} (${FIRST} ${SECOND})`
/** The union of the 1st, 2nd & 3rd value (in parentheses) with the name separated by space */
type NameJoin3<NAME extends string, FIRST extends string, SECOND extends string, THIRD extends string, > = | NAME
                                                                                                           | `${NAME} (${| FIRST | SECOND | THIRD})`
                                                                                                           | `${NAME} (${FIRST} ${| SECOND | THIRD})`
                                                                                                           | `${NAME} (${FIRST} ${SECOND} ${THIRD})`
                                                                                                           | `${NAME} (${SECOND} ${THIRD})`
/** The union of the 1st, 2nd, 3rd & 4th value (in parentheses) with the name separated by space */
type NameJoin4<NAME extends string, FIRST extends string, SECOND extends string, THIRD extends string, FOURTH extends string, > = | NAME
                                                                                                                                  | `${NAME} (${| FIRST | SECOND | THIRD | FOURTH})`
                                                                                                                                  | `${NAME} (${FIRST} ${| SECOND | THIRD | FOURTH})`
                                                                                                                                  | `${NAME} (${FIRST} ${SECOND} ${| THIRD | FOURTH})`
                                                                                                                                  | `${NAME} (${SECOND} ${| THIRD | FOURTH})`
                                                                                                                                  | `${NAME} (${THIRD} ${FOURTH})`


type NameInSMM1 = 'Game=1'
type NameInSMM2 = 'Game=2'
type NameInAllGame = FullUrlName_Game
type NameInSMM1Or3DS = FullGroupUrlName_WithNotSMM2
type NameInAllGameOrRelatedToSMM2 = FullGroupUrlName_WithSMM2

type NameInAllTime = FullUrlName_Time
type NameInNotNightTime = | "Time=day" | 'Time=all'

type NameInAllGameStyleInSMM1Or3DS = FullGroupUrlName_SMM1
type NameInAllGameStyle = FullUrlName_GameStyle


type NameInAnyGame<NAME extends string, > =                        NameJoin1<NAME, NameInAllGame>
type NameInOnlySmm1<NAME extends string, > =                       NameJoin2<NAME, PossibleViewDisplay, NameInSMM1>
type NameInOnlySmm2<NAME extends string, > =                       NameJoin2<NAME, PossibleViewDisplay, NameInSMM2>
type NameInTableAndAnyGame<NAME extends string, > =                NameJoin2<NAME, PossibleViewDisplay, NameInAllGame>
type NameInTableAndGameAndTime<NAME extends string, > =            | NameJoin3<NAME, PossibleViewDisplay, NameInSMM1Or3DS, NameInNotNightTime>
                                                                   | NameJoin3<NAME, PossibleViewDisplay, NameInAllGameOrRelatedToSMM2, NameInAllTime>
// type NameInTableAndAnyGameAndAnyGameStyle<NAME extends string, > = | NameJoin3<NAME, PossibleViewDisplay, NameInSMM1Or3DS, NameInAllGameStyleInSMM1Or3DS>
//                                                                    | NameJoin3<NAME, PossibleViewDisplay, NameInAllGameOrRelatedToSMM2, NameInAllGameStyle>
type NameInViewDisplay_Game_GameStyle_Time<NAME extends string, > = | NameJoin4<NAME, PossibleViewDisplay, NameInSMM1Or3DS, NameInAllGameStyleInSMM1Or3DS, NameInNotNightTime>
                                                                    | NameJoin4<NAME, PossibleViewDisplay, NameInAllGameOrRelatedToSMM2, NameInAllGameStyle, NameInAllTime>

//endregion -------------------- Route name --------------------
//region -------------------- Route path --------------------

/** The union of the 1st value with the path */
type PathJoin1<PATH extends string, FIRST extends string, > = | PATH | `/${FIRST}${PATH}`
/** The union of the 1st & 2nd value with the path separated by <b>/</b> */
type PathJoin2<PATH extends string, FIRST extends string, SECOND extends string, > = | PATH | `/${FIRST}${PATH}` | `/${FIRST}/${SECOND}${PATH}` | `/${SECOND}${PATH}`
/** The union of the 1st, 2nd & 3rd value with the path separated by <b>/</b> */
type PathJoin3<PATH extends string, FIRST extends string, SECOND extends string, THIRD extends string, > = | PATH
                                                                                                           | `/${| FIRST | SECOND | THIRD}${PATH}`
                                                                                                           | `/${FIRST}/${| SECOND | THIRD}${PATH}`
                                                                                                           | `/${FIRST}/${SECOND}/${THIRD}${PATH}`
                                                                                                           | `/${SECOND}/${THIRD}${PATH}`
/** The union of the 1st, 2nd, 3rd & 4th value with the path separated by <b>/</b> */
type PathJoin4<PATH extends string, FIRST extends string, SECOND extends string, THIRD extends string, FOURTH extends string, > = | PATH
                                                                                                                                  | `/${| FIRST | SECOND | THIRD | FOURTH}${PATH}`
                                                                                                                                  | `/${FIRST}/${| SECOND | THIRD | FOURTH}${PATH}`
                                                                                                                                  | `/${FIRST}/${SECOND}/${| THIRD | FOURTH}${PATH}`
                                                                                                                                  | `/${SECOND}/${| THIRD | FOURTH}${PATH}`
                                                                                                                                  | `/${THIRD}/${FOURTH}${PATH}`


type PathInSMM1 = 'game-1'
type PathInSMM2 = 'game-2'
type PathInAllGame = UrlValue_Game
type PathInSMM1Or3DS = FullUrlValue_WithNotSMM2
type PathInAllGameOrRelatedToSMM2 = FullUrlValue_WithSMM2

type PathInAllTime = FullUrlValue_Time
type PathInNotNightTime = | 'time-day' | 'time-all'

type PathInAllGameStyleInSMM1Or3DS = FullUrlValue_SMM1
type PathInAllGameStyle = FullUrlValue_GameStyle


type PathInAnyGame<PATH extends string, > =                     PathJoin1<PATH , PathInAllGame>
type PathInOnlySmm1<PATH extends string, > =                    PathJoin2<PATH, PossibleViewDisplay, PathInSMM1>
type PathInOnlySmm2<PATH extends string, > =                    PathJoin2<PATH, PossibleViewDisplay, PathInSMM2>
type PathInTableAndAnyGame<PATH extends string, > =             PathJoin2<PATH, PossibleViewDisplay, PathInAllGame>
type PathInTableAndGameAndTime<PATH extends string, > =         | PathJoin3<PATH, PossibleViewDisplay, PathInSMM1Or3DS, PathInNotNightTime>
                                                                | PathJoin3<PATH, PossibleViewDisplay, PathInAllGameOrRelatedToSMM2, PathInAllTime>
// type PathInTableAndAnyGameAndGameStyle<PATH extends string, > = | PathJoin3<PATH, PossibleViewDisplay, PathInSMM1Or3DS, PathInAllGameStyleInSMM1Or3DS>
//                                                                 | PathJoin3<PATH, PossibleViewDisplay, PathInAllGameOrRelatedToSMM2, PathInAllGameStyle>
type PathInViewDisplay_Game_GameStyle_Time<PATH extends string, > = | PathJoin4<PATH, PossibleViewDisplay, PathInSMM1Or3DS, PathInAllGameStyleInSMM1Or3DS, PathInNotNightTime>
                                                                    | PathJoin4<PATH, PossibleViewDisplay, PathInAllGameOrRelatedToSMM2, PathInAllGameStyle, PathInAllTime>

//endregion -------------------- Route path --------------------
//region -------------------- Route (name + path) --------------------

/** The routes directly from the arguments */
type Of<NAME extends Names, > =  readonly [typeof EveryRoutes[NAME]['urlName'], typeof EveryRoutes[NAME]['urlValue'],]

type InAnyGame<NAME extends Names, > =                        readonly [NameInAnyGame<typeof EveryRoutes[NAME]['urlName']>,                          PathInAnyGame<typeof EveryRoutes[NAME]['urlValue']>,]
type InOnlySmm1<NAME extends Names, > =                       readonly [NameInOnlySmm1<typeof EveryRoutes[NAME]['urlName']>,                         PathInOnlySmm1<typeof EveryRoutes[NAME]['urlValue']>,]
type InOnlySmm2<NAME extends Names, > =                       readonly [NameInOnlySmm2<typeof EveryRoutes[NAME]['urlName']>,                         PathInOnlySmm2<typeof EveryRoutes[NAME]['urlValue']>,]
type InTableAndAnyGame<NAME extends Names, > =                readonly [NameInTableAndAnyGame<typeof EveryRoutes[NAME]['urlName']>,                  PathInTableAndAnyGame<typeof EveryRoutes[NAME]['urlValue']>,]
type InTableAndGameAndTime<NAME extends Names, > =            readonly [NameInTableAndGameAndTime<typeof EveryRoutes[NAME]['urlName']>,              PathInTableAndGameAndTime<typeof EveryRoutes[NAME]['urlValue']>,]
// type InTableAndAnyGameAndAnyGameStyle<NAME extends Names, > = readonly [NameInTableAndAnyGameAndAnyGameStyle<typeof EveryRoutes[NAME]['urlName']>,   PathInTableAndAnyGameAndGameStyle<typeof EveryRoutes[NAME]['urlValue']>,]
type InViewDisplay_Game_GameStyle_Time<NAME extends Names, > = readonly [NameInViewDisplay_Game_GameStyle_Time<typeof EveryRoutes[NAME]['urlName']>, PathInViewDisplay_Game_GameStyle_Time<typeof EveryRoutes[NAME]['urlValue']>,]

//endregion -------------------- Route (name + path) --------------------

//endregion -------------------- Route types --------------------

/** The possible name for a route with nothing surrounding it */
export type PossibleStraightRouteName = typeof EveryRoutes[Names]['urlName']
export type PossibleRouteName = SimpleRouteMap[Names][0]
/** The possible path for a route with nothing surrounding it */
export type PossibleStraightRoutePath = typeof EveryRoutes[Names]['urlValue']
export type PossibleRoutePath = SimpleRouteMap[Names][1]
/** All the possible route instances */
export type PossibleRoute = SimpleRoute<PossibleRouteName, PossibleRoutePath>


export type RouteCallback = (viewDisplay: ViewDisplays, games: GameCollection, gameStyles: GameStyleCollection, time: TimeCollection,) => ReactJSXElement
/** A type-alias of {@link RouteCallback} with only the {@link ViewDisplays} as an argument */
export type RouteCallbackWithOnlyViewDisplay = (viewDisplay: ViewDisplays,) => ReactJSXElement
/** A close relative to {@link RouteCallback} with only the {@link Games} as an argument */
export type GameRouteCallback = (games: GameCollection,) => ReactJSXElement
/** A type-alias of {@link RouteCallback} with no arguments */
export type NothingRouteCallback = () => ReactJSXElement

/** The partial path of a {@link EveryRoutes} made from a {@link ViewDisplays} */
export type PossibleViewDisplayPath = | EmptyString | `/${UrlValue_ViewDisplay}`
/** The partial path of a {@link EveryRoutes} made from the {@link Games} */
export type PossibleGamePath = | EmptyString | `/${UrlValue_Game}`
/** The partial path of a {@link EveryRoutes} made from the {@link GameStyles} */
export type PossibleGameStylePath = | EmptyString | `/${FullUrlValue_GameStyle}`
/** The partial path of a {@link EveryRoutes} made from the {@link Times} */
export type PossibleTimePath = | EmptyString | `/${FullUrlValue_Time}`


/**
 * All the {@link PossibleRoutePath possible route path} that is applicable with the language beforehand.
 *
 * @note There is over 20 000 possibilities without the language in it
 */
export type EveryPossibleRoutes = string//`/${PossibleAcronym}${PossibleRoutePath}`
