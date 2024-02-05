import type {Entities}        from 'core/entity/Entities'
import type {ReactProperties} from 'util/react/ReactProperties'

export interface EntityOnlyProperties
    extends ReactProperties {

    readonly value: Entities

}
