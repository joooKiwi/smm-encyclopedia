import type {SingleHeadersContent} from 'app/tools/table/SimpleHeader'
import type {HeaderHolder}         from 'app/tools/table/header/HeaderHolder'
import type {HeaderTypes}          from 'app/tools/table/header/HeaderTypes'
import type {ReactProperties}      from 'util/react/ReactProperties'


export type EveryHeaderHolders = ReadonlyMap<string, HeaderHolder>
export type Layout = readonly (readonly string[])[]

export interface TableHeadersProperties
    extends ReactProperties {

    readonly id: string

    readonly type: HeaderTypes

    readonly headers: SingleHeadersContent

    readonly layout: Layout

    readonly everyHeadersHolder: EveryHeaderHolders

}
