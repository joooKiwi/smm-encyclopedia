import type {HeaderTypes}          from './header/HeaderTypes'
import type {ReactProperties}      from '../../../util/react/ReactProperties'
import type {SingleHeadersContent} from './SimpleHeader'
import type {HeaderHolder}         from './header/HeaderHolder'


export type EveryHeaderHolders = ReadonlyMap<string, HeaderHolder>
export type Layout = readonly string[][]

export interface TableHeadersProperties
    extends ReactProperties {

    id: string

    type: HeaderTypes

    headers: SingleHeadersContent

    layout: () => Layout

    everyHeadersHolder: () => EveryHeaderHolders

}
