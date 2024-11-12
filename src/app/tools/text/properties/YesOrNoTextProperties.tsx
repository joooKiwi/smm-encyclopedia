import type {BooleanResultTextProperties} from 'app/tools/text/properties/BooleanResultTextProperties'
import type {ReactProperties}             from 'util/react/ReactProperties'

/** A {@link Boolean} value property */
export interface YesOrNoTextProperties
    extends ReactProperties, Omit<BooleanResultTextProperties, `${boolean}`> {}
