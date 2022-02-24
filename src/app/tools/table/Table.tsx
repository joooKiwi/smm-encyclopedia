import {PureComponent} from 'react';

import type {BootstrapColor}             from '../../../bootstrap/Bootstrap.types';
import type {HeaderHolder}               from './header/HeaderHolder';
import type {EveryHeaderHolders, Layout} from './TableHeaders.types';
import type {ObjectHolder}               from '../../../util/holder/ObjectHolder';
import type {ReactComponent}             from '../../../util/react/ReactComponent';
import type {SingleHeaderContent}        from './SimpleHeader';
import type {TableProperties}            from './Table.types';

import {DelayedObjectHolderContainer} from '../../../util/holder/DelayedObjectHolder.container';
import {EMPTY_REACT_ELEMENT}          from '../../../util/emptyReactVariables';
import {HeaderTypes}                  from './header/HeaderTypes';
import {HeaderHolderContainer}        from './header/HeaderHolder.container';
import TableContent                   from './TableContent';
import TableHeaders                   from './TableHeaders';

/**
 * @reactComponent
 */
export default class Table
    extends PureComponent<TableProperties>
    implements ReactComponent {

    //region -------------------- Attributes --------------------

    public static readonly DEFAULT_TABLE_COLOR: BootstrapColor = 'primary';
    public static readonly DEFAULT_HEADERS_COLOR: BootstrapColor = 'info';

    //endregion -------------------- Attributes --------------------
    //region -------------------- Getter methods --------------------

    protected get id() {
        return this.props.id;
    }

    protected get caption() {
        return this.props.caption;
    }

    protected get headers() {
        return this.props.headers;
    }

    protected get content() {
        return this.props.content;
    }

    protected get tableColor() {
        return this.props['table-color'] ?? Table.DEFAULT_TABLE_COLOR;
    }

    protected get headersColor() {
        return this.props['headers-color'] ?? Table.DEFAULT_HEADERS_COLOR;
    }


    private __getEveryHeaders(): EveryHeaders
    private __getEveryHeaders(headers: readonly SingleHeaderContent[],): readonly [string, SingleHeaderContent,][]
    private __getEveryHeaders(headers: readonly SingleHeaderContent[] = this.headers ?? [],): EveryHeaders {
        const array = [] as [string, SingleHeaderContent,][];
        for (let header of headers) {
            const subHeaders = TableHeaders.getSubHeaders(header);
            array.push([TableHeaders.getHeaderKey(header), header,]);
            if (subHeaders.length !== 0)
                array.push(...this.__getEveryHeaders(subHeaders,));
        }
        return array;
    }

    private __getEveryHeaderHolders(everyHeaders: EveryHeaders,): EveryHeaderHolders {
        const everyHeaderHolders = new Map<string, HeaderHolder>(everyHeaders.map(([key, header,]) =>
            [key,
                new HeaderHolderContainer(this.id, header,
                    headerHolder => TableHeaders.createSingleHeaderContent(HeaderTypes.HEAD, headerHolder.header, headerHolder.height, headerHolder.width,),
                    headerHolder => TableHeaders.createSingleHeaderContent(HeaderTypes.FOOT, headerHolder.header, headerHolder.height, headerHolder.width,),
                ),]));

        //Set the sub headers (for the header) & set the parent (for the sub headers)
        everyHeaderHolders.forEach((header,) =>
            header.setSubHeaders(TableHeaders.getSubHeaders(header.header).map(subHeader =>
                everyHeaderHolders.get(TableHeaders.getHeaderKey(subHeader))!).map(subHeader => subHeader.setParent(header))));

        return everyHeaderHolders;
    }

    private __getLayout(everyHeaderHolders: EveryHeaderHolders,): Layout {
        const layout: string[][] = [];

        everyHeaderHolders.forEach((headerContainer, key,) => {
            const subLevel = headerContainer.subLevel;
            const height = headerContainer.height;
            const width = headerContainer.width;

            for (let j = 0; j < height; j++)
                for (let i = 0; i < width; i++)
                    (layout[j + subLevel] ??= []).push(key);
        });
        return layout;
    }

    //endregion -------------------- Getter methods --------------------

    public render() {
        const caption = this.caption;
        const headers = this.headers;
        const isHeaderNull = headers == null;
        const everyHeadersHolder: ObjectHolder<EveryHeaderHolders> = new DelayedObjectHolderContainer(() => this.__getEveryHeaderHolders(this.__getEveryHeaders()));
        const layoutHolder: ObjectHolder<Layout> = new DelayedObjectHolderContainer(() => this.__getLayout(everyHeadersHolder.get));

        return <table key={this.id} id={this.id} className={`table table-${this.tableColor} table-bordered table-striped`}>
            {caption == null ? EMPTY_REACT_ELEMENT : <caption>{caption}</caption>}
            {isHeaderNull ? EMPTY_REACT_ELEMENT : <thead className={`table-${this.headersColor} table-borderless`}>
            <TableHeaders id={this.id} type={HeaderTypes.HEAD} headers={headers}
                          everyHeadersHolder={() => everyHeadersHolder.get} layout={() => layoutHolder.get}/>
            </thead>}
            <tbody><TableContent content={this.content}/></tbody>
            {isHeaderNull ? EMPTY_REACT_ELEMENT : <tfoot className={`table-${this.headersColor} table-borderless`}>
            <TableHeaders id={this.id} type={HeaderTypes.FOOT} headers={headers}
                          everyHeadersHolder={() => everyHeadersHolder.get} layout={() => layoutHolder.get}/>
            </tfoot>}
        </table>;
    }

}

type EveryHeaders = readonly [string, SingleHeaderContent,][];
