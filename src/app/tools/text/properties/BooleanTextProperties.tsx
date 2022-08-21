import type {HTMLSpanProperties} from '../../../../util/react/html/HTMLSpanProperties';
import type {ReactProperties}    from '../../../../util/react/ReactProperties';

export interface BooleanTextProperties
    extends ReactProperties, Omit<HTMLSpanProperties, | 'content' | 'className'> {

    boolean: boolean

    true: string

    false: string

    classes?: | string[] | null

}
