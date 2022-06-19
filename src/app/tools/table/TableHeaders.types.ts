import type {HeaderTypes}          from './header/HeaderTypes';
import type {ReactProperty}        from '../../../util/react/ReactProperty';
import type {SingleHeadersContent} from './SimpleHeader';
import type {HeaderHolder}         from './header/HeaderHolder';


export type EveryHeaderHolders = ReadonlyMap<string, HeaderHolder>;
export type Layout = readonly string[][];

export interface TableHeadersProperties
    extends ReactProperty {

    id: string

    type: HeaderTypes

    headers: SingleHeadersContent

    layout: () => Layout

    everyHeadersHolder: () => EveryHeaderHolders

}
