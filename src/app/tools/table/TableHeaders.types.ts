import type {SingleHeadersContent} from 'app/tools/table/SimpleHeader'
import type {HeaderHolder}         from 'app/tools/table/header/HeaderHolder'
import type {HeaderTypes}          from 'app/tools/table/header/HeaderTypes'
import type {ReactProperties}      from 'util/react/ReactProperties'


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
