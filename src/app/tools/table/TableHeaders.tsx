import {PureComponent} from 'react'

import type {SingleHeaderContent, SingleHeadersContent}          from 'app/tools/table/SimpleHeader'
import type {EveryHeaderHolders, Layout, TableHeadersProperties} from 'app/tools/table/TableHeaders.types'
import type {ClassWithType}                                      from 'core/ClassWithType'
import type {ReactComponent}                                     from 'util/react/ReactComponent'

import {HeaderTypes} from 'app/tools/table/header/HeaderTypes'
import Image         from 'app/tools/images/Image'
import Tooltip       from 'bootstrap/tooltip/Tooltip'
import {EMPTY_ARRAY} from 'util/emptyVariables'

/**
 * @reactComponent
 */
export default class TableHeaders
    extends PureComponent<TableHeadersProperties>
    implements ReactComponent, ClassWithType<HeaderTypes> {

    //region -------------------- Fields --------------------

    #everyHeaderHolders?: EveryHeaderHolders
    #layout?: Layout

    //endregion -------------------- Fields --------------------
    //region -------------------- Getter methods --------------------

    public get id(): string {
        return this.props.id
    }

    public get type(): HeaderTypes {
        return this.props.type
    }

    public get headers(): SingleHeadersContent {
        return this.props.headers
    }

    public get everyHeaderHolders(): EveryHeaderHolders {
        return this.#everyHeaderHolders ??= this.props.everyHeadersHolder()
    }

    public get layout(): Layout {
        return this.#layout ??= this.props.layout()
    }

    //endregion -------------------- Getter methods --------------------

    public static getHeaderKey(header: SingleHeaderContent,): string {
        return typeof header == 'string' ? header : header.key
    }

    public static getSubHeaders(header: SingleHeaderContent,): readonly SingleHeaderContent[] {
        return typeof header == 'string' ? EMPTY_ARRAY : header.subHeaders ?? EMPTY_ARRAY
    }

    public static getHeaderContent(header: SingleHeaderContent,) {
        return typeof header == 'string'
            ? <>{header}</>
            : 'element' in header
                ? header.element
                : <Image key={header.key} source={header.path} fallbackName={header.alt}/>
    }

    public static createTooltip(type: HeaderTypes, header: SingleHeaderContent,) {
        if (typeof header == 'string')
            return null

        const tooltip = header.tooltip
        if (tooltip == null)
            return null

        return <Tooltip option={({title: tooltip, placement: type.placement,})} elementId={`${this.getHeaderKey(header)}-${type.simpleName}`}/>
    }

    public static createSingleHeaderContent(type: HeaderTypes, header: SingleHeaderContent, height: number, width: number,) {
        const key = this.getHeaderKey(header)

        return <th key={`${key} (${type.simpleName})`} id={`${key}-${type.simpleName}`} className={`th-${type.simpleName} ${key}`} colSpan={width} rowSpan={height}>
            {this.createTooltip(type, header,)}
            {this.getHeaderContent(header)}
        </th>
    }


    public override render(): JSX.Element {
        const headers = this.headers

        //region -------------------- If headers has only 1 column, return simple headers --------------------

        const headersLength = headers.length
        if (headersLength === 1)
            return <tr key={`${this.id} - ${this.type.simpleName}`} className={`tr-${this.type.simpleName}`}>{
                headers.map(headerAsTh => TableHeaders.createSingleHeaderContent(this.type, headerAsTh, 1, 1,))
            }</tr>

        //endregion -------------------- If headers has only 1 column, return simple headers --------------------~
        //region -------------------- Display headers with variable columns and height --------------------

        const everyHeaderHolders = this.everyHeaderHolders
        everyHeaderHolders.forEach(headerHolder => headerHolder.resetRendered())

        return <>{this.type.getLayout(this.layout).map((layoutAsTr, index,) =>
            <tr key={`${this.id} - ${this.type.simpleName} #${index}`} className={`tr-${this.type.simpleName}`}>{
                layoutAsTr.map(layoutAsTh => everyHeaderHolders.get(layoutAsTh)!.render(this.type === HeaderTypes.HEAD))
            }</tr>)}</>

        //endregion -------------------- Display headers with variable columns and height --------------------
    }

}
