import type {ViewDisplays}                                                    from 'app/withInterpreter/ViewDisplays'
import type {PossibleUrlValue}                                                from 'app/withInterpreter/ViewDisplays.types'
import type {FullValidUrlValue, GroupValidUrlSimpleValue, GroupValidUrlValue} from 'core/game/Games.types'
import type {PossibleAcronym}                                                 from 'lang/ProjectLanguages.types'
import type {EveryRoutes}                                                     from 'route/EveryRoutes'
import type {GameCollection}                                                  from 'util/collection/GameCollection'

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
    HOME: Direct<'HOME'>
    ABOUT: Direct<'ABOUT'>
    SOURCES: Direct<'SOURCES'>

    EVERY_POWER_UP_RIDE_AND_HAT_PRIORITY: InAnyGame<'EVERY_POWER_UP_RIDE_AND_HAT_PRIORITY'>
    EVERY_POWER_UP_AND_RIDE_PRIORITY: InAnyGame<'EVERY_POWER_UP_AND_RIDE_PRIORITY'>
    EVERY_POWER_UP_AND_HAT_PRIORITY: InAnyGame<'EVERY_POWER_UP_AND_HAT_PRIORITY'>
    EVERY_RIDE_AND_HAT_PRIORITY: InAnyGame<'EVERY_RIDE_AND_HAT_PRIORITY'>
    EVERY_POWER_UP_PRIORITY: InAnyGame<'EVERY_POWER_UP_PRIORITY'>
    EVERY_RIDE_PRIORITY: InAnyGame<'EVERY_RIDE_PRIORITY'>
    EVERY_HAT_PRIORITY: InAnyGame<'EVERY_HAT_PRIORITY'>
    NO_PRIORITY: InAnyGame<'NO_PRIORITY'>

    EVERY_CHARACTER_NAME: InCardAndAnyGame<'EVERY_CHARACTER_NAME'>

    EVERY_GAME_REFERENCE: InAnyGame<'EVERY_GAME_REFERENCE'>
    EVERY_GAME_STYLE: InTableAndAnyGame<'EVERY_GAME_STYLE'>

    EVERY_ENTITY: InTableAndAnyGame<'EVERY_ENTITY'>
    EVERY_ENTITY_CATEGORY: InCardAndSMM2<'EVERY_ENTITY_CATEGORY'>
    EVERY_GROUP: Direct<'EVERY_GROUP'>

    EVERY_LIMIT: InTableAndAnyGame<'EVERY_LIMIT'>
    EVERY_PLAY_LIMIT: InTableAndAnyGame<'EVERY_PLAY_LIMIT'>
    EVERY_EDITOR_LIMIT: InTableAndAnyGame<'EVERY_EDITOR_LIMIT'>

    EVERY_THEME: InTableAndAnyGame<'EVERY_THEME'>
    EVERY_COURSE_THEME: InTableAndAnyGame<'EVERY_COURSE_THEME'>
    EVERY_WORLD_THEME: InTableAndAnyGame<'EVERY_WORLD_THEME'>

    EVERY_SOUND_EFFECT: InTableAndAnyGame<'EVERY_SOUND_EFFECT'>
    EVERY_SOUND_EFFECT_CATEGORY: InCardAndSMM2<'EVERY_SOUND_EFFECT_CATEGORY'>

    EVERY_MII_COSTUME: InTableAndSMM2<'EVERY_MII_COSTUME'>
    EVERY_MII_COSTUME_CATEGORY: InCardAndSMM2<'EVERY_MII_COSTUME_CATEGORY'>

    EVERY_MYSTERY_MUSHROOM: InTableAndSMM1<'EVERY_MYSTERY_MUSHROOM'>

    EVERY_PREDEFINED_MESSAGE: InListAndSMM2<'EVERY_PREDEFINED_MESSAGE'>

    EVERY_SAMPLE_COURSE: InTableAndSMM1<'EVERY_SAMPLE_COURSE'>

    EVERY_MEDAL: InCardAndSMM1<'EVERY_MEDAL'>

    EVERY_COURSE_TAG: InCardAndSMM2<'EVERY_COURSE_TAG'>
    EVERY_OFFICIAL_COURSE_TAG: InCardAndSMM2<'EVERY_OFFICIAL_COURSE_TAG'>
    EVERY_UNOFFICIAL_COURSE_TAG: InCardAndSMM2<'EVERY_UNOFFICIAL_COURSE_TAG'>
    EVERY_MAKER_CENTRAL_COURSE_TAG: InCardAndSMM2<'EVERY_MAKER_CENTRAL_COURSE_TAG'>

    EVERY_INSTRUMENT: InCardAndAnyGame<'EVERY_INSTRUMENT'>

    EVERY_EDITOR_VOICE: InCardAndAnyGame<'EVERY_EDITOR_VOICE'>
}

//region -------------------- Simple route map types --------------------

// type NameInSMM1<NAME extends string, > = | NAME | `${NAME} (Game=1)`
// type NameInSMM2<NAME extends string, > = | NAME | `${NAME} (Game=2)`
type NameInAnyGame<NAME extends string, > = | NAME | `${NAME} (Game=${GroupValidUrlSimpleValue})`
// type NameInTable<NAME extends string, > = | NAME | `${NAME} (${| 'table' | 'card' | 'list'})`
type NameInTableAndSMM1<NAME extends string, > = | NAME | `${NAME} (${| 'table' | 'card' | 'list' | 'table Game=1' | 'card Game=1' | 'list Game=1' | 'Game=1'})`
type NameInTableAndSMM2<NAME extends string, > = | NAME | `${NAME} (${| 'table' | 'card' | 'list' | 'table Game=2' | 'card Game=2' | 'list Game=2' | 'Game=2'})`
type NameInTableAndAnyGame<NAME extends string, > = | NAME | `${NAME} (${| 'table' | 'card' | 'list' | `table Game=${GroupValidUrlSimpleValue}` | `card Game=${GroupValidUrlSimpleValue}` | `list Game=${GroupValidUrlSimpleValue}` | `Game=${GroupValidUrlSimpleValue}`})`
// type NameInCard<NAME extends string, > = | NAME | `${NAME} (${| 'card' | 'list'})`
type NameInCardAndSMM1<NAME extends string, > = | NAME | `${NAME} (${| 'card' | 'list' | 'card Game=1' | 'list Game=1' | 'Game=1'})`
type NameInCardAndSMM2<NAME extends string, > = | NAME | `${NAME} (${| 'card' | 'list' | 'card Game=2' | 'list Game=2' | 'Game=2'})`
type NameInCardAndAnyGame<NAME extends string, > = | NAME | `${NAME} (${| 'card' | 'list' | `card Game=${GroupValidUrlSimpleValue}` | `list Game=${GroupValidUrlSimpleValue}` | `Game=${GroupValidUrlSimpleValue}`})`
// type NameInList<NAME extends string, > = | NAME | `${NAME} (list)`
// type NameInListAndSMM1<NAME extends string, > = | NAME | `${NAME} (${| 'list' | 'list Game=1' | 'Game=1'})`
type NameInListAndSMM2<NAME extends string, > = | NAME | `${NAME} (${| 'list' | 'list Game=2' | 'Game=2'})`
// type NameInListAndAnyGame<NAME extends string, > = | NAME | `${NAME} (${| 'list' | `list Game=${GroupValidUrlSimpleValue}` | `Game=${GroupValidUrlSimpleValue}`})`

type PathInAnyGame<PATH extends string, > = | PATH | `/game-${GroupValidUrlValue}${PATH}`
type PathInSMM1<PATH extends string, > = | PATH | `/game-1${PATH}`
type PathInSMM2<PATH extends string, > = | PATH | `/game-2${PATH}`
type PathInTable<PATH extends string, > = | PATH | `/${| 'table' | 'card' | 'list'}${PATH}`
type PathInTableAndSMM1<PATH extends string, > = | PATH | PathInTable<PATH> | PathInSMM1<| PATH | PathInTable<PATH>>
type PathInTableAndSMM2<PATH extends string, > = | PATH | PathInTable<PATH> | PathInSMM2<| PATH | PathInTable<PATH>>
type PathInTableAndAnyGame<PATH extends string, > = | PATH | PathInTable<PATH> | PathInAnyGame<| PATH | PathInTable<PATH>>
type PathInCard<PATH extends string, > = | PATH | `/${| 'card' | 'list'}${PATH}`
type PathInCardAndSMM1<PATH extends string, > = | PATH | PathInCard<PATH> | PathInSMM1<| PATH | PathInCard<PATH>>
type PathInCardAndSMM2<PATH extends string, > = | PATH | PathInCard<PATH> | PathInSMM2<| PATH | PathInCard<PATH>>
type PathInCardAndAnyGame<PATH extends string, > = | PATH | PathInCard<PATH> | PathInAnyGame<| PATH | PathInCard<PATH>>
type PathInList<PATH extends string, > = | PATH | `/list${PATH}`
// type PathInListAndSMM1<PATH extends string, > = | PATH | PathInList<PATH> | PathInSMM1<| PATH | PathInList<PATH>>
type PathInListAndSMM2<PATH extends string, > = | PATH | PathInList<PATH> | PathInSMM2<| PATH | PathInList<PATH>>
// type PathInListAndAnyGame<PATH extends string, > = | PATH | PathInList<PATH> | PathInAnyGame<| PATH | PathInList<PATH>>

type Direct<NAME extends Names, > = readonly [typeof EveryRoutes[NAME]['simpleName'], typeof EveryRoutes[NAME]['simplePath'],]
// type InSMM1<NAME extends Names, > = readonly [NameInSMM1<typeof EveryRoutes[NAME]['simpleName']>, PathInSMM1<typeof EveryRoutes[NAME]['simplePath']>,]
// type InSMM2<NAME extends Names, > = readonly [NameInSMM2<typeof EveryRoutes[NAME]['simpleName']>, PathInSMM2<typeof EveryRoutes[NAME]['simplePath']>,]
type InAnyGame<NAME extends Names, > = readonly [NameInAnyGame<typeof EveryRoutes[NAME]['simpleName']>, PathInAnyGame<typeof EveryRoutes[NAME]['simplePath']>,]
// type InTable<NAME extends Names, > = readonly [NameInTable<typeof EveryRoutes[NAME]['simpleName']>, PathInTable<typeof EveryRoutes[NAME]['simplePath']>,]
type InTableAndSMM1<NAME extends Names, > = readonly [NameInTableAndSMM1<typeof EveryRoutes[NAME]['simpleName']>, PathInTableAndSMM1<typeof EveryRoutes[NAME]['simplePath']>,]
type InTableAndSMM2<NAME extends Names, > = readonly [NameInTableAndSMM2<typeof EveryRoutes[NAME]['simpleName']>, PathInTableAndSMM2<typeof EveryRoutes[NAME]['simplePath']>,]
type InTableAndAnyGame<NAME extends Names, > = readonly [NameInTableAndAnyGame<typeof EveryRoutes[NAME]['simpleName']>, PathInTableAndAnyGame<typeof EveryRoutes[NAME]['simplePath']>,]
// type InCard<NAME extends Names, > = readonly [NameInCard<typeof EveryRoutes[NAME]['simpleName']>, PathInCard<typeof EveryRoutes[NAME]['simplePath']>,]
type InCardAndSMM1<NAME extends Names, > = readonly [NameInCardAndSMM1<typeof EveryRoutes[NAME]['simpleName']>, PathInCardAndSMM1<typeof EveryRoutes[NAME]['simplePath']>,]
type InCardAndSMM2<NAME extends Names, > = readonly [NameInCardAndSMM2<typeof EveryRoutes[NAME]['simpleName']>, PathInCardAndSMM2<typeof EveryRoutes[NAME]['simplePath']>,]
type InCardAndAnyGame<NAME extends Names, > = readonly [NameInCardAndAnyGame<typeof EveryRoutes[NAME]['simpleName']>, PathInCardAndAnyGame<typeof EveryRoutes[NAME]['simplePath']>,]
// type InList<NAME extends Names, > = readonly [NameInList<typeof EveryRoutes[NAME]['simpleName']>, PathInList<typeof EveryRoutes[NAME]['simplePath']>,]
// type InListAndSMM1<NAME extends Names, > = readonly [NameInListAndSMM1<typeof EveryRoutes[NAME]['simpleName']>, PathInListAndSMM1<typeof EveryRoutes[NAME]['simplePath']>,]
type InListAndSMM2<NAME extends Names, > = readonly [NameInListAndSMM2<typeof EveryRoutes[NAME]['simpleName']>, PathInListAndSMM2<typeof EveryRoutes[NAME]['simplePath']>,]
// type InListAndAnyGame<NAME extends Names, > = readonly [NameInListAndAnyGame<typeof EveryRoutes[NAME]['simpleName']>, PathInListAndAnyGame<typeof EveryRoutes[NAME]['simplePath']>,]

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
