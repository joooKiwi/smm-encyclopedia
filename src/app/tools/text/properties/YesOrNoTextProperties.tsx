import type {BooleanTextProperties} from './BooleanTextProperties';
import type {ReactProperty}         from '../../../../util/react/ReactProperty';

/**
 * A simple boolean value property
 */
export interface YesOrNoTextProperties
    extends ReactProperty, Omit<BooleanTextProperties, `${boolean}`> {

}
