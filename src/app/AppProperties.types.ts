import type {PossibleType as PossibleType_CourseTag}   from 'app/property/CourseTagTypes.types'
import type {PossibleType as PossibleType_EntityLimit} from 'app/property/EntityLimitTypes.types'
import type {PossibleType as PossibleType_Theme}       from 'app/property/ThemeTypes.types'
import type {Names as ViewDisplayName}                 from 'app/withInterpreter/ViewDisplays.types'
import type {ReactProperties}                          from 'util/react/ReactProperties'

export interface AppProperties
    extends ReactProperties {

}

export interface AppWithInterpreterProperties
    extends AppProperties {

    typeDisplayed: ViewDisplayName

}

//region -------------------- Specific properties --------------------

export interface ThemeAppProperties
    extends AppWithInterpreterProperties {

    type: PossibleType_Theme

}

export interface LimitAppProperties
    extends AppWithInterpreterProperties {

    type: PossibleType_EntityLimit

}

export interface CourseTagAppProperties
    extends AppWithInterpreterProperties {

    type: PossibleType_CourseTag

}


//endregion -------------------- Specific properties --------------------
