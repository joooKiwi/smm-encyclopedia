import type {ReactProperty}      from '../../../util/react/ReactProperty';
import type {SingleTableContent} from './Table.types';

export interface TableContentProperties
    extends ReactProperty {

    content: readonly SingleTableContent[]

}
