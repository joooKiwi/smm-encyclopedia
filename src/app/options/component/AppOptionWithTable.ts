import type {NullOr}              from '../../../util/types'
import type {SingleHeaderContent} from '../../tools/table/SimpleHeader'

export interface AppOptionWithTable {

    get renderTableHeader(): NullOr<SingleHeaderContent>

}
