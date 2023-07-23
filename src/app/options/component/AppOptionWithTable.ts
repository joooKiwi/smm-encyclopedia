import type {SingleHeaderContent} from 'app/tools/table/SimpleHeader'

export interface AppOptionWithTable {

    get renderTableHeader(): NullOr<SingleHeaderContent>

}
