import type {ReactProperties}    from 'util/react/ReactProperties'
import type {HTMLSpanProperties} from 'util/react/html/HTMLSpanProperties'

export interface BooleanTextProperties
    extends ReactProperties, Omit<HTMLSpanProperties, | 'content' | 'className'> {

    readonly boolean: boolean

    readonly true: string

    readonly false: string

    readonly classes?: NullOr<string[]>

}
