import type {PossibleCourseTagType} from 'app/property/CourseTagType.types'
import type {ReactProperties}       from 'util/react/ReactProperties'

export interface AppProperties
    extends ReactProperties {

}

//region -------------------- Specific properties --------------------

export interface CourseTagAppProperties
    extends AppProperties {

    type: PossibleCourseTagType

}


//endregion -------------------- Specific properties --------------------
