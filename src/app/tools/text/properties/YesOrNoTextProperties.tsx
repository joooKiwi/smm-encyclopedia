import type {BooleanResultTextProperties} from './BooleanResultTextProperties';
import type {ReactProperty}               from '../../../../util/react/ReactProperty';

/**
 * A simple boolean value property
 */
export interface YesOrNoTextProperties
    extends ReactProperty, Omit<BooleanResultTextProperties, `${boolean}`> {

}
