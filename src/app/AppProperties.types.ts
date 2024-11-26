import type {CourseTagTypes}       from 'app/property/CourseTagTypes'
import type {LimitTypes}           from 'app/property/LimitTypes'
import type {PowerUpPriorityTypes} from 'app/property/PowerUpPriorityTypes'
import type {ThemeTypes}           from 'app/property/ThemeTypes'
import type {ViewDisplays}         from 'app/withInterpreter/ViewDisplays'
import type {GameCollection}       from 'util/collection/GameCollection'
import type {GameStyleCollection}  from 'util/collection/GameStyleCollection'
import type {TimeCollection}       from 'util/collection/TimeCollection'
import type {ReactProperties}      from 'util/react/ReactProperties'

export interface AppProperties
    extends ReactProperties {}

interface AppPropertiesWithType<out T,>
    extends AppProperties { readonly type: T }

export interface AppWithInterpreterProperties
    extends AppProperties { readonly viewDisplay: ViewDisplays }

export interface AppWithGamesProperties
    extends AppProperties { readonly games: GameCollection }

export interface AppWithGameStylesProperties
    extends AppProperties { readonly gameStyles: GameStyleCollection }

export interface AppWithTimesProperties
    extends AppProperties { readonly times: TimeCollection }

interface AppWithInterpreter_Games_GameStyle_TimeProperties
    extends AppWithInterpreterProperties, AppWithGamesProperties, AppWithGameStylesProperties, AppWithTimesProperties {}

//region -------------------- Specific properties --------------------

export interface PowerUpAndRidePriorityProperties
    extends AppPropertiesWithType<PowerUpPriorityTypes>, AppWithGamesProperties {}

export interface CharacterNameProperties
    extends AppWithInterpreter_Games_GameStyle_TimeProperties {}

//game reference

export interface GameStyleProperties
    extends AppWithInterpreter_Games_GameStyle_TimeProperties {}

export interface EntityProperties
    extends AppWithInterpreter_Games_GameStyle_TimeProperties {}

//entity category

//entity group

export interface LimitAppProperties
    extends AppPropertiesWithType<LimitTypes>, AppWithInterpreter_Games_GameStyle_TimeProperties {}

export interface ThemeAppProperties
    extends AppPropertiesWithType<ThemeTypes>, AppWithInterpreter_Games_GameStyle_TimeProperties {}

export interface SoundEffectProperties
    extends AppWithInterpreter_Games_GameStyle_TimeProperties {}

//sound effect category

//mii costume

//mii costume category

export interface OfficialCourseProperties
    extends AppWithInterpreter_Games_GameStyle_TimeProperties {}

//mystery mushroom

export interface CourseTagAppProperties
    extends AppPropertiesWithType<CourseTagTypes>, AppWithInterpreterProperties {}

export interface InstrumentAppProperties
    extends AppWithInterpreter_Games_GameStyle_TimeProperties {}

export interface EditorVoiceProperties
    extends AppWithInterpreter_Games_GameStyle_TimeProperties {}


//endregion -------------------- Specific properties --------------------
