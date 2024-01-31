import {ReactProperties} from 'util/react/ReactProperties'
import {Name}            from 'lang/name/Name'

export interface EntityPropertyProperties<R>
    extends ReactProperties {

    readonly reference: R

    readonly name: Name<string>

    readonly displayAllAsText: boolean

}
