import type {ReactProperties}    from '../../../util/react/ReactProperties'
import type {SingleTableContent} from './Table.types'

export interface TableContentProperties
    extends ReactProperties {

    content: readonly SingleTableContent[]

}
