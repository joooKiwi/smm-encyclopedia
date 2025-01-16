import type {Name}               from 'lang/name/Name'
import type {ReactProperties}    from 'util/react/ReactProperties'
import type {HTMLSpanProperties} from 'util/react/html/HTMLSpanProperties'

export interface NameProperties
    extends ReactProperties, Omit<HTMLSpanProperties, | 'key' | 'id' | 'name'> {

    readonly popoverOrientation?: PossiblePopoverOrientation

    readonly id: string

    readonly name: Name<string>

}
