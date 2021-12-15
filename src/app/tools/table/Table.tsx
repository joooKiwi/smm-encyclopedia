import {PureComponent} from 'react';

import type {BootstrapColor}                            from '../../../bootstrap/Bootstrap.types';
import type {HeaderHolder}                              from './header/HeaderHolder';
import type {SingleHeaderContent, SingleHeadersContent} from './SimpleHeader';
import type {SimpleTableProperties}                     from './Table.types';
import type {ReactComponent}                            from '../../../util/react/ReactComponent';

import AnyTranslationComponent from '../../../lang/components/AnyTranslationComponent';
import {EMPTY_REACT_ELEMENT}   from '../../../util/emptyReactVariables';
import {HeaderHolderContainer} from './header/HeaderHolder.container';
import {HeaderTypes}           from './header/HeaderTypes';
import Image                   from '../images/Image';
import Tooltip                 from '../../../bootstrap/tooltip/Tooltip';

/**
 * @reactComponent
 */
export default class Table
    extends PureComponent<SimpleTableProperties>
    implements ReactComponent {

    //region -------------------- Attributes --------------------

    static readonly #EMPTY_ARRAY = [];
    public static readonly DEFAULT_TABLE_COLOR: BootstrapColor = 'primary';
    public static readonly DEFAULT_HEADERS_COLOR: BootstrapColor = 'info';

    #everyHeadersMap?: ReadonlyMap<string, SingleHeaderContent>;
    #everyHeaderHoldersMap?: ReadonlyMap<string, HeaderHolder>;
    #layout?: readonly string[][];

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

    private __getEveryHeadersRecursive(): readonly [string, SingleHeaderContent][]
    private __getEveryHeadersRecursive(headers: readonly SingleHeaderContent[], array: [string, SingleHeaderContent][],): [string, SingleHeaderContent][]
    private __getEveryHeadersRecursive(headers: readonly SingleHeaderContent[] = this.headers, array: [string, SingleHeaderContent][] = [],): readonly [string, SingleHeaderContent][] {
        for (let header of headers) {
            const subHeaders = Table.__getSubHeaders(header);
            array.push([Table.__getHeaderKey(header), header,]);
            if (subHeaders.length !== 0)
                array.push(...this.__getEveryHeadersRecursive(subHeaders, array,));
        }
        return array;
    }

    private get __everyHeaders(): ReadonlyMap<string, SingleHeaderContent> {
        return this.#everyHeadersMap ??= new Map(this.__getEveryHeadersRecursive());
    }

    private get __everyHeaderHolders(): ReadonlyMap<string, HeaderHolder> {
        if (this.#everyHeaderHoldersMap == null) {
            const everyHeaderHolders = new Map<string, HeaderHolder>([...this.__everyHeaders]
                .map<[string, HeaderHolder,]>(([key, header,]) => [key,
                    new HeaderHolderContainer(this.id, header,
                        headerHolder => Table.__createSingleHeaderContent(HeaderTypes.HEAD, headerHolder.header, headerHolder.height, headerHolder.width,),
                        headerHolder => Table.__createSingleHeaderContent(HeaderTypes.FOOT, headerHolder.header, headerHolder.height, headerHolder.width,),
                    ),]));

            //Set the sub headers (for the header) & set the parent (for the sub headers)
            everyHeaderHolders.forEach((header,) =>
                header.setSubHeaders(Table.__getSubHeaders(header.header).map(subHeader =>
                    everyHeaderHolders.get(Table.__getHeaderKey(subHeader))!).map(subHeader => subHeader.setParent(header))));

            this.#everyHeaderHoldersMap = everyHeaderHolders;
        }
        return this.#everyHeaderHoldersMap;
    }

    private get __layout(): readonly string[][] {
        if (this.#layout == null) {
            const everyHeaderHolders = this.__everyHeaderHolders;
            const layout: string[][] = [];

            everyHeaderHolders.forEach((headerContainer, key,) => {
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

    protected get content() {
        return this.props.content;
    }

    protected get tableColor() {
        return this.props['table-color'] ?? Table.DEFAULT_TABLE_COLOR;
    }

    protected get headersColor() {
        return this.props['headers-color'] ?? Table.DEFAULT_HEADERS_COLOR;
    }

    //endregion -------------------- Getter methods --------------------

    private static __getHeaderKey(header: SingleHeaderContent,): string {
        return typeof header == 'string' ? header : header.key;
    }

    private static __getSubHeaders(header: SingleHeaderContent,): readonly SingleHeaderContent[] {
        return typeof header == 'string' ? this.#EMPTY_ARRAY : header.subHeaders ?? this.#EMPTY_ARRAY;
    }

    private static __getHeaderContent(header: SingleHeaderContent,) {
        return typeof header == 'string'
            ? <>{header}</>
            : 'element' in header
                ? header.element
                : <Image key={header.key} source={header.path} fallbackName={header.alt}/>;
    }

    private static __createTooltip(type: HeaderTypes, header: SingleHeaderContent,) {
        if (typeof header == 'string')
            return EMPTY_REACT_ELEMENT;

        const tooltip = header.tooltip;
        if (tooltip == null)
            return EMPTY_REACT_ELEMENT;

        return <AnyTranslationComponent namespace={tooltip.namespace}>{translation =>
            <Tooltip option={({title: translation(tooltip.translationKey) as string, placement: type.placement,})} elementId={`${this.__getHeaderKey(header)}-${type.simpleName}`}/>}
        </AnyTranslationComponent>;
    }

    private static __createSingleHeaderContent(type: HeaderTypes, header: SingleHeaderContent, height: number, width: number,) {
        const key = this.__getHeaderKey(header);

        return <th key={`${key} (${type.simpleName})`} id={`${key}-${type.simpleName}`} colSpan={width} rowSpan={height}>
            {this.__createTooltip(type, header,)}
            {this.__getHeaderContent(header)}
        </th>;
    }

    private __createHeaders(type: HeaderTypes,) {
        const headers = this.headers;

        //region -------------------- If headers has only 1 column, return simple headers --------------------

        const headersLength = headers.length;
        if (headersLength === 1)
            return <tr key={`${this.id} - ${type.simpleName}`}>{headers.map(headerAsTh => Table.__createSingleHeaderContent(type, headerAsTh, 1, 1,))}</tr>;

        //endregion -------------------- If headers has only 1 column, return simple headers --------------------
        //region -------------------- Display headers with variable columns and height --------------------

        const everyHeaderHolders = this.__everyHeaderHolders;
        everyHeaderHolders.forEach(headerHolder => headerHolder.resetRendered());

        return type.getLayout(this.__layout).map((layoutAsTr, index,) =>
            <tr key={`${type.simpleName}-${index}`}>{
                layoutAsTr.map(layoutAsTh => everyHeaderHolders.get(layoutAsTh)!.render(type === HeaderTypes.HEAD))
            }</tr>);

        //endregion -------------------- Display headers with variable columns and height --------------------
    }

    private __createContent(): JSX.Element[] {
        return this.content.map(content => {
            const key = content[0];
            return <tr key={`${key} (header)`}>
                {content.map((innerContent, index) =>
                    typeof innerContent != 'string'
                        ? <td key={`${key}-${index}`}>{innerContent}</td>
                        : null)
                    .filter(content => content !== null)}
            </tr>;
        });
    }

    public render() {
        return <table key={this.id} id={this.id} className={`table table-${this.tableColor} table-bordered table-striped`}>
            <caption>{this.caption}</caption>
            <thead className={`table-${this.headersColor} table-borderless`}>{this.__createHeaders(HeaderTypes.HEAD)}</thead>
            <tbody>{this.__createContent()}</tbody>
            <tfoot className={`table-${this.headersColor} table-borderless`}>{this.__createHeaders(HeaderTypes.FOOT)}</tfoot>
        </table>;
    }

}
