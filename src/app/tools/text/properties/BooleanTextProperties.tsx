import type {HTMLSpanProperties} from '../../../../util/react/html/HTMLSpanProperties';
import type {ReactProperty}      from '../../../../util/react/ReactProperty';

export interface BooleanTextProperties
    extends ReactProperty, Omit<HTMLSpanProperties, | 'content' | 'className'> {

    boolean: boolean

    true: string

    false: string

    classes?: | string[] | null

}
