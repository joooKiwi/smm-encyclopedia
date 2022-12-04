import type {SingleTableContent} from 'app/tools/table/Table.types'
import type {ReactProperties}    from 'util/react/ReactProperties'

export interface TableContentProperties
    extends ReactProperties {

    content: readonly SingleTableContent[]

}
