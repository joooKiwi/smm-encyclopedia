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

export interface AppWithTimesProperties
    extends AppProperties { readonly times: TimeCollection }

export interface AppWithGameStylesProperties
    extends AppProperties { readonly gameStyles: GameStyleCollection }

//region -------------------- Specific properties --------------------

export interface PowerUpAndRidePriorityProperties
    extends AppPropertiesWithType<PowerUpPriorityTypes>, AppWithGamesProperties {}

export interface CharacterNameProperties
    extends AppWithInterpreterProperties, AppWithGamesProperties, AppWithTimesProperties {}

//game reference

export interface GameStyleProperties
    extends AppWithInterpreterProperties, AppWithGamesProperties {}

export interface EntityProperties
    extends AppWithInterpreterProperties, AppWithGamesProperties, AppWithGameStylesProperties {}

//entity category

//entity group

export interface LimitAppProperties
    extends AppPropertiesWithType<LimitTypes>, AppWithInterpreterProperties, AppWithGamesProperties {}

export interface ThemeAppProperties
    extends AppPropertiesWithType<ThemeTypes>, AppWithInterpreterProperties, AppWithGamesProperties {}

export interface SoundEffectProperties
    extends AppWithInterpreterProperties, AppWithGamesProperties, AppWithGameStylesProperties {}

//sound effect category

//mii costume

//mii costume category

//mystery mushroom

export interface CourseTagAppProperties
    extends AppPropertiesWithType<CourseTagTypes>, AppWithInterpreterProperties {}

export interface InstrumentAppProperties
    extends AppWithInterpreterProperties, AppWithGamesProperties, AppWithTimesProperties {}

export interface EditorVoiceProperties
    extends AppWithInterpreterProperties, AppWithGamesProperties, AppWithTimesProperties {}


//endregion -------------------- Specific properties --------------------
