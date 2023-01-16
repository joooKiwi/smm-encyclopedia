import type {PossibleType as PossibleType_CourseTag}   from 'app/property/CourseTagTypes.types'
import type {PossibleType as PossibleType_EntityLimit} from 'app/property/EntityLimitTypes.types'
import type {ReactProperties}                          from 'util/react/ReactProperties'

export interface AppProperties
    extends ReactProperties {

}

//region -------------------- Specific properties --------------------

export interface EntityLimitAppProperties
    extends AppProperties {

    type: PossibleType_EntityLimit

}

export interface CourseTagAppProperties
    extends AppProperties {

    type: PossibleType_CourseTag

}


//endregion -------------------- Specific properties --------------------
