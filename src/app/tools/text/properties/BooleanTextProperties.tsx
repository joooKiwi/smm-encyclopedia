import type {ReactProperties}    from 'util/react/ReactProperties'
import type {HTMLSpanProperties} from 'util/react/html/HTMLSpanProperties'

export interface BooleanTextProperties
    extends ReactProperties, Omit<HTMLSpanProperties, | 'content' | 'className'> {

    boolean: boolean

    true: string

    false: string

    classes?: NullOr<string[]>

}
