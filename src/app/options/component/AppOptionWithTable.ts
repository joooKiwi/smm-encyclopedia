import type {SingleHeaderContent} from 'app/tools/table/SimpleHeader'
import type {NullOr}              from 'util/types/nullable'

export interface AppOptionWithTable {

    get renderTableHeader(): NullOr<SingleHeaderContent>

}
