import {ReactProperties} from 'util/react/ReactProperties'
import {Name}            from 'lang/name/Name'

export interface EntityPropertyProperties<R>
    extends ReactProperties {

    reference: R

    name: Name<string>

    displayAllAsText: boolean

}
