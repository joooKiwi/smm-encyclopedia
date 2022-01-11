import {PureComponent} from 'react';

import type {BootstrapColor}                            from '../../../bootstrap/Bootstrap.types';
import type {HeaderHolder}                              from './header/HeaderHolder';
import type {EveryHeaderHolders, Layout}                from './TableHeaders.types';
import type {ReactComponent}                            from '../../../util/react/ReactComponent';
import type {SingleHeaderContent, SingleHeadersContent} from './SimpleHeader';
import type {TableProperties}                           from './Table.types';

import {HeaderTypes}           from './header/HeaderTypes';
import TableHeaders            from './TableHeaders';
import TableContent            from './TableContent';
import {HeaderHolderContainer} from './header/HeaderHolder.container';

/**
 * @reactComponent
 */
export default class Table
    extends PureComponent<TableProperties>
    implements ReactComponent {

    //region -------------------- Attributes --------------------

    public static readonly DEFAULT_TABLE_COLOR: BootstrapColor = 'primary';
    public static readonly DEFAULT_HEADERS_COLOR: BootstrapColor = 'info';


    #everyHeadersArray?: EveryHeaders;
    #everyHeaderHoldersMap?: EveryHeaderHolders;
    #layout?: Layout;


    //endregion -------------------- Attributes --------------------
    //region -------------------- Getter methods --------------------

    protected get id() {
        return this.props.id;
    }

    protected get caption() {
        return this.props.caption;
    }

    protected get headers(): SingleHeadersContent {
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


    private __getEveryHeadersAsArray(): EveryHeaders
    private __getEveryHeadersAsArray(headers: readonly SingleHeaderContent[],): readonly [string, SingleHeaderContent,][]
    private __getEveryHeadersAsArray(headers: readonly SingleHeaderContent[] = this.headers,): EveryHeaders {
        const array = [] as [string, SingleHeaderContent,][];
        for (let header of headers) {
            const subHeaders = TableHeaders.getSubHeaders(header);
            array.push([TableHeaders.getHeaderKey(header), header,]);
            if (subHeaders.length !== 0)
                array.push(...this.__getEveryHeadersAsArray(subHeaders,));
        }
        return array;
    }

    private get __everyHeaders(): EveryHeaders {
        return this.#everyHeadersArray ??= this.__getEveryHeadersAsArray();
    }

    private get __everyHeaderHolders(): EveryHeaderHolders {
        if (this.#everyHeaderHoldersMap == null) {
            const everyHeaderHolders = new Map<string, HeaderHolder>(this.__everyHeaders.map(([key, header,]) =>
                [key,
                    new HeaderHolderContainer(this.id, header,
                        headerHolder => TableHeaders.createSingleHeaderContent(HeaderTypes.HEAD, headerHolder.header, headerHolder.height, headerHolder.width,),
                        headerHolder => TableHeaders.createSingleHeaderContent(HeaderTypes.FOOT, headerHolder.header, headerHolder.height, headerHolder.width,),
                    ),]));

            //Set the sub headers (for the header) & set the parent (for the sub headers)
            everyHeaderHolders.forEach((header,) =>
                header.setSubHeaders(TableHeaders.getSubHeaders(header.header).map(subHeader =>
                    everyHeaderHolders.get(TableHeaders.getHeaderKey(subHeader))!).map(subHeader => subHeader.setParent(header))));

            this.#everyHeaderHoldersMap = everyHeaderHolders;
        }
        return this.#everyHeaderHoldersMap;
    }

    private get __layout(): Layout {
        if (this.#layout == null) {
            const layout: string[][] = [];

            this.__everyHeaderHolders.forEach((headerContainer, key,) => {
                const subLevel = headerContainer.subLevel;
                const height = headerContainer.height;
                const width = headerContainer.width;

                for (let j = 0; j < height; j++)
                    for (let i = 0; i < width; i++)
                        (layout[j + subLevel] ??= []).push(key);
            });
            this.#layout = layout;
        }
        return this.#layout;
    }

    //endregion -------------------- Getter methods --------------------

    public render() {
        return <table key={this.id} id={this.id} className={`table table-${this.tableColor} table-bordered table-striped`}>
            <caption>{this.caption}</caption>
            <thead className={`table-${this.headersColor} table-borderless`}>
                <TableHeaders id={this.id} type={HeaderTypes.HEAD} headers={this.headers}
                              everyHeadersHolder={() => this.__everyHeaderHolders} layout={() => this.__layout}/>
            </thead>
            <tbody><TableContent content={this.content}/></tbody>
            <tfoot className={`table-${this.headersColor} table-borderless`}>
                <TableHeaders id={this.id} type={HeaderTypes.FOOT} headers={this.headers}
                              everyHeadersHolder={() => this.__everyHeaderHolders} layout={() => this.__layout}/>
            </tfoot>
        </table>;
    }

}

type EveryHeaders = readonly [string, SingleHeaderContent,][];
