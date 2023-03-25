import type {CourseTagTypes}  from 'app/property/CourseTagTypes'
import type {LimitTypes}      from 'app/property/LimitTypes'
import type {ThemeTypes}      from 'app/property/ThemeTypes'
import type {ViewDisplays}    from 'app/withInterpreter/ViewDisplays'
import type {Games}           from 'core/game/Games'
import type {ReactProperties} from 'util/react/ReactProperties'

export interface AppProperties
    extends ReactProperties {

}

export interface AppWithInterpreterProperties
    extends AppProperties {

    viewDisplay: ViewDisplays

}

export interface AppWithGamesProperties
    extends AppProperties {

    readonly games: readonly Games[]

}

//region -------------------- Specific properties --------------------

export interface PowerUpAndRidePriorityProperties
    extends AppWithGamesProperties {
}

//character name

//game reference

export interface GameStyleProperties
    extends AppWithGamesProperties, AppWithInterpreterProperties {
}

//entity

//entity category

//entity group

export interface LimitAppProperties
    extends AppWithInterpreterProperties {

    type: LimitTypes

}

export interface ThemeAppProperties
    extends AppWithInterpreterProperties {

    type: ThemeTypes

}

//sound effect

//sound effect category

//mii costume

//mii costume category

//mystery mushroom

export interface CourseTagAppProperties
    extends AppWithInterpreterProperties {

    type: CourseTagTypes

}

//instrument

//editor voice


//endregion -------------------- Specific properties --------------------
