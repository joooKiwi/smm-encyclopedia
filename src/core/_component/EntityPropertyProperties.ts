import type {ReactProperties} from 'util/react/ReactProperties'
import type {Name}            from 'lang/name/Name'

export interface EntityPropertyProperties<R>
    extends ReactProperties {

    readonly reference: R

    readonly name: Name<string>

    readonly displayAllAsText: boolean

}
