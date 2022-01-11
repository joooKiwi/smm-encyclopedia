import type {SingleHeaderContent} from '../../tools/table/SimpleHeader';

export interface AppOptionWithTable {

    get renderTableHeader(): | SingleHeaderContent | null

}
