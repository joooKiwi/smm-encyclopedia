import type {ReactProperties} from 'util/react/ReactProperties'
import type {Entities}        from 'core/entity/Entities'

export interface SimpleLimitComponentProperties
    extends ReactProperties {

    readonly reference: Entities

}
