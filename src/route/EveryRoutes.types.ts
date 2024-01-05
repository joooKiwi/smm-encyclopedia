import type {ViewDisplays}                                from 'app/withInterpreter/ViewDisplays'
import type {PossibleUrlValue}                            from 'app/withInterpreter/ViewDisplays.types'
import type {FullValidUrlValue, GroupValidUrlSimpleValue} from 'core/game/Games.types'
import type {PossibleAcronym}                             from 'lang/ProjectLanguages.types'
import type {EveryRoutes}                                 from 'route/EveryRoutes'
import type {GameCollection}                              from 'util/collection/GameCollection'

enum Enum {
    HOME,
    ABOUT,
    SOURCES,

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

    EVERY_MEDAL,

    EVERY_COURSE_TAG,
    EVERY_OFFICIAL_COURSE_TAG, EVERY_UNOFFICIAL_COURSE_TAG, EVERY_MAKER_CENTRAL_COURSE_TAG,

    EVERY_INSTRUMENT,

    EVERY_EDITOR_VOICE,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum


/** A simple map type made to give each possibilities for a path and a name to a specific {@link EveryRoutes} */
interface SimpleRouteMap {
    HOME:    Direct<'HOME'>
    ABOUT:   Direct<'ABOUT'>
    SOURCES: Direct<'SOURCES'>

    EVERY_POWER_UP_RIDE_AND_HAT_PRIORITY: InAnyGame<'EVERY_POWER_UP_RIDE_AND_HAT_PRIORITY'>
    EVERY_POWER_UP_AND_RIDE_PRIORITY:     InAnyGame<'EVERY_POWER_UP_AND_RIDE_PRIORITY'>
    EVERY_POWER_UP_AND_HAT_PRIORITY:      InAnyGame<'EVERY_POWER_UP_AND_HAT_PRIORITY'>
    EVERY_RIDE_AND_HAT_PRIORITY:          InAnyGame<'EVERY_RIDE_AND_HAT_PRIORITY'>
    EVERY_POWER_UP_PRIORITY:              InAnyGame<'EVERY_POWER_UP_PRIORITY'>
    EVERY_RIDE_PRIORITY:                  InAnyGame<'EVERY_RIDE_PRIORITY'>
    EVERY_HAT_PRIORITY:                   InAnyGame<'EVERY_HAT_PRIORITY'>
    NO_PRIORITY:                          InAnyGame<'NO_PRIORITY'>

    EVERY_CHARACTER_NAME: InCardAndAnyGame<'EVERY_CHARACTER_NAME'>

    EVERY_GAME_REFERENCE: InAnyGame<'EVERY_GAME_REFERENCE'>
    EVERY_GAME_STYLE:     InTableAndAnyGame<'EVERY_GAME_STYLE'>

    EVERY_ENTITY:          InTableAndAnyGame<'EVERY_ENTITY'>
    EVERY_ENTITY_CATEGORY: InCardAndSMM2<'EVERY_ENTITY_CATEGORY'>
    EVERY_GROUP:           Direct<'EVERY_GROUP'>

    EVERY_LIMIT:        InTableAndAnyGame<'EVERY_LIMIT'>
    EVERY_PLAY_LIMIT:   InTableAndAnyGame<'EVERY_PLAY_LIMIT'>
    EVERY_EDITOR_LIMIT: InTableAndAnyGame<'EVERY_EDITOR_LIMIT'>

    EVERY_THEME:        InTableAndAnyGame<'EVERY_THEME'>
    EVERY_COURSE_THEME: InTableAndAnyGame<'EVERY_COURSE_THEME'>
    EVERY_WORLD_THEME:  InTableAndAnyGame<'EVERY_WORLD_THEME'>

    EVERY_SOUND_EFFECT:          InTableAndAnyGame<'EVERY_SOUND_EFFECT'>
    EVERY_SOUND_EFFECT_CATEGORY: InCardAndSMM2<'EVERY_SOUND_EFFECT_CATEGORY'>

    EVERY_MII_COSTUME:          InTableAndSMM2<'EVERY_MII_COSTUME'>
    EVERY_MII_COSTUME_CATEGORY: InCardAndSMM2<'EVERY_MII_COSTUME_CATEGORY'>

    EVERY_MYSTERY_MUSHROOM: InTableAndSMM1<'EVERY_MYSTERY_MUSHROOM'>

    EVERY_PREDEFINED_MESSAGE: InListAndSMM2<'EVERY_PREDEFINED_MESSAGE'>

    EVERY_SAMPLE_COURSE: InTableAndSMM1<'EVERY_SAMPLE_COURSE'>

    EVERY_MEDAL: InCardAndSMM1<'EVERY_MEDAL'>

    EVERY_COURSE_TAG:               InCardAndSMM2<'EVERY_COURSE_TAG'>
    EVERY_OFFICIAL_COURSE_TAG:      InCardAndSMM2<'EVERY_OFFICIAL_COURSE_TAG'>
    EVERY_UNOFFICIAL_COURSE_TAG:    InCardAndSMM2<'EVERY_UNOFFICIAL_COURSE_TAG'>
    EVERY_MAKER_CENTRAL_COURSE_TAG: InCardAndSMM2<'EVERY_MAKER_CENTRAL_COURSE_TAG'>

    EVERY_INSTRUMENT: InCardAndAnyGame<'EVERY_INSTRUMENT'>

    EVERY_EDITOR_VOICE: InCardAndAnyGame<'EVERY_EDITOR_VOICE'>
}

//region -------------------- Simple route map types --------------------

type TableCardOrList = | 'table' | 'card' | 'list'
type CardOrList = | 'card' | 'list'
type List = 'list'

//region -------------------- Simple route map types (name) --------------------


/** The union of both the first and second value both separately and joined with a space */
type NameJoin1<NAME extends string, FIRST extends string, > = | NAME | `${NAME} (${FIRST})`
/** The union of both the first and second value both separately and joined with a space */
type NameJoin2<NAME extends string, FIRST extends string, SECOND extends string, > = | NAME | `${NAME} (${| FIRST | `${FIRST} ${SECOND}` | SECOND})`

type NameInSMM1 = 'Game=1'
type NameInSMM2 = 'Game=2'
type NameInAllGame = `Game=${GroupValidUrlSimpleValue}`

// type NameInSMM1<NAME extends string, > =            NameJoin1<NAME, NameInSMM1>
// type NameInSMM2<NAME extends string, > =            NameJoin1<NAME, NameInSMM2>
type NameInAnyGame<NAME extends string, > =         NameJoin1<NAME, NameInAllGame>
// type NameInTable<NAME extends string, > =           NameJoin1<NAME, TableCardOrList>
type NameInTableAndSMM1<NAME extends string, > =    NameJoin2<NAME, TableCardOrList, NameInSMM1>
type NameInTableAndSMM2<NAME extends string, > =    NameJoin2<NAME, TableCardOrList, NameInSMM2>
type NameInTableAndAnyGame<NAME extends string, > = NameJoin2<NAME, TableCardOrList, NameInAllGame>
// type NameInCard<NAME extends string, > =            NameJoin1<NAME, CardOrList>
type NameInCardAndSMM1<NAME extends string, > =     NameJoin2<NAME, CardOrList, NameInSMM1>
type NameInCardAndSMM2<NAME extends string, > =     NameJoin2<NAME, CardOrList, NameInSMM2>
type NameInCardAndAnyGame<NAME extends string, > =  NameJoin2<NAME, CardOrList, NameInAllGame>
// type NameInList<NAME extends string, > =           NameJoin1<NAME, List>
// type NameInListAndSMM1<NAME extends string, > =    NameJoin2<NAME, List, NameInSMM1>
type NameInListAndSMM2<NAME extends string, > =    NameJoin2<NAME, List, NameInSMM2>
// type NameInListAndAnyGame<NAME extends string, > = NameJoin2<NAME, List, NameInAllGame>

//endregion -------------------- Simple route map types (name) --------------------
//region -------------------- Simple route map types (path) --------------------

/** The union of both the first value both separately and joined with a slash */
type PathJoin1<PATH extends string, FIRST extends string, > = | PATH | `/${FIRST}${PATH}`
/** The union of both the first and second value both separately and joined with a slash */
type PathJoin2<PATH extends string, FIRST extends string, SECOND extends string, > = | PATH | `/${FIRST | `${FIRST}/${SECOND}` | SECOND}${PATH}`

type PathInSMM1 = 'game-1'
type PathInSMM2 = 'game-2'
type PathInAllGame = FullValidUrlValue

// type PathInSMM1<PATH extends string, > =            PathJoin1<PATH , PathInSMM1>
// type PathInSMM2<PATH extends string, > =            PathJoin1<PATH , PathInSMM2>
type PathInAnyGame<PATH extends string, > =         PathJoin1<PATH , PathInAllGame>
// type PathInTable<PATH extends string, > =           PathJoin1<PATH, TableCardOrList>
type PathInTableAndSMM1<PATH extends string, > =    PathJoin2<PATH, TableCardOrList, PathInSMM1>
type PathInTableAndSMM2<PATH extends string, > =    PathJoin2<PATH, TableCardOrList, PathInSMM2>
type PathInTableAndAnyGame<PATH extends string, > = PathJoin2<PATH, TableCardOrList, PathInAllGame>
// type PathInCard<PATH extends string, > =            PathJoin1<PATH, CardOrList>
type PathInCardAndSMM1<PATH extends string, > =     PathJoin2<PATH, CardOrList, PathInSMM1>
type PathInCardAndSMM2<PATH extends string, > =     PathJoin2<PATH, CardOrList, PathInSMM2>
type PathInCardAndAnyGame<PATH extends string, > =  PathJoin2<PATH, CardOrList, PathInAllGame>
// type PathInList<PATH extends string = string, > =   PathJoin1<PATH, List>
// type PathInListAndSMM1<PATH extends string, > =     PathJoin2<PATH, List, PathInSMM1>
type PathInListAndSMM2<PATH extends string, > =     PathJoin2<PATH, List, PathInSMM2>
// type PathInListAndAnyGame<PATH extends string, > =  PathJoin2<PATH, List, PathInAllGame>

//endregion -------------------- Simple route map types (path) --------------------
//region -------------------- Simple route map types (name + path) --------------------

type Direct<NAME extends Names, > =            readonly [typeof EveryRoutes[NAME]['simpleName'],                        typeof EveryRoutes[NAME]['simplePath'],]
// type InSMM1<NAME extends Names, > =            readonly [NameInSMM1<typeof EveryRoutes[NAME]['simpleName']>,            PathInSMM1<typeof EveryRoutes[NAME]['simplePath']>,]
// type InSMM2<NAME extends Names, > =            readonly [NameInSMM2<typeof EveryRoutes[NAME]['simpleName']>,            PathInSMM2<typeof EveryRoutes[NAME]['simplePath']>,]
type InAnyGame<NAME extends Names, > =         readonly [NameInAnyGame<typeof EveryRoutes[NAME]['simpleName']>,         PathInAnyGame<typeof EveryRoutes[NAME]['simplePath']>,]
// type InTable<NAME extends Names, > =           readonly [NameInTable<typeof EveryRoutes[NAME]['simpleName']>,           PathInTable<typeof EveryRoutes[NAME]['simplePath']>,]
type InTableAndSMM1<NAME extends Names, > =    readonly [NameInTableAndSMM1<typeof EveryRoutes[NAME]['simpleName']>,    PathInTableAndSMM1<typeof EveryRoutes[NAME]['simplePath']>,]
type InTableAndSMM2<NAME extends Names, > =    readonly [NameInTableAndSMM2<typeof EveryRoutes[NAME]['simpleName']>,    PathInTableAndSMM2<typeof EveryRoutes[NAME]['simplePath']>,]
type InTableAndAnyGame<NAME extends Names, > = readonly [NameInTableAndAnyGame<typeof EveryRoutes[NAME]['simpleName']>, PathInTableAndAnyGame<typeof EveryRoutes[NAME]['simplePath']>,]
// type InCard<NAME extends Names, > =            readonly [NameInCard<typeof EveryRoutes[NAME]['simpleName']>,            PathInCard<typeof EveryRoutes[NAME]['simplePath']>,]
type InCardAndSMM1<NAME extends Names, > =     readonly [NameInCardAndSMM1<typeof EveryRoutes[NAME]['simpleName']>,     PathInCardAndSMM1<typeof EveryRoutes[NAME]['simplePath']>,]
type InCardAndSMM2<NAME extends Names, > =     readonly [NameInCardAndSMM2<typeof EveryRoutes[NAME]['simpleName']>,     PathInCardAndSMM2<typeof EveryRoutes[NAME]['simplePath']>,]
type InCardAndAnyGame<NAME extends Names, > =  readonly [NameInCardAndAnyGame<typeof EveryRoutes[NAME]['simpleName']>,  PathInCardAndAnyGame<typeof EveryRoutes[NAME]['simplePath']>,]
// type InList<NAME extends Names, > =            readonly [NameInList<typeof EveryRoutes[NAME]['simpleName']>,            PathInList<typeof EveryRoutes[NAME]['simplePath']>,]
// type InListAndSMM1<NAME extends Names, > =     readonly [NameInListAndSMM1<typeof EveryRoutes[NAME]['simpleName']>,     PathInListAndSMM1<typeof EveryRoutes[NAME]['simplePath']>,]
type InListAndSMM2<NAME extends Names, > =     readonly [NameInListAndSMM2<typeof EveryRoutes[NAME]['simpleName']>,     PathInListAndSMM2<typeof EveryRoutes[NAME]['simplePath']>,]
// type InListAndAnyGame<NAME extends Names, > =  readonly [NameInListAndAnyGame<typeof EveryRoutes[NAME]['simpleName']>,  PathInListAndAnyGame<typeof EveryRoutes[NAME]['simplePath']>,]

//endregion -------------------- Simple route map types (name + path) --------------------

//endregion -------------------- Simple route map types --------------------

/** The possible name for a route with nothing surrounding it */
export type PossibleSimpleRouteName = typeof EveryRoutes[Names]['simpleName']
export type PossibleRouteName = SimpleRouteMap[Names][0]
/** The possible path for a route with nothing surrounding it */
export type PossibleSimpleRoutePath = typeof EveryRoutes[Names]['simplePath']
export type PossibleRoutePath = SimpleRouteMap[Names][1]


export type RouteCallback = (viewDisplay: ViewDisplays, games: GameCollection,) => ReactJSXElement
export type GameRouteCallback = (games: GameCollection,) => ReactJSXElement
export type NothingRouteCallback = () => ReactJSXElement

/** The partial path of a {@link EveryRoutes} made from a {@link ViewDisplays} */
export type PossibleViewDisplayPath = | '' | `/${PossibleUrlValue}`
/** The partial path of a {@link EveryRoutes} made from the {@link Games} */
export type PossibleGamePath = | '' | `/${FullValidUrlValue}`


export type EveryPossibleRoutes = `/${PossibleAcronym}${PossibleRoutePath}`
