import type {ReactNode} from 'react';
import {PureComponent}  from 'react';

import type {BootstrapColor}                                                                   from '../../../bootstrap/Bootstrap.types';
import type {HeadersContent, SimpleTableProperties, SingleHeaderContent, SingleHeadersContent} from './Table.types';
import type {ReactComponent}                                                                   from '../../../util/react/ReactComponent';

/**
 * @reactComponent
 */
export default class Table
    extends PureComponent<SimpleTableProperties>
    implements ReactComponent<ReactNode> {

    //region -------------------- Attributes --------------------

    public static readonly DEFAULT_TABLE_COLOR: BootstrapColor = 'primary';
    public static readonly DEFAULT_HEADERS_COLOR: BootstrapColor = 'info';

    #headers?: HeadersContent;

    //endregion -------------------- Attributes --------------------
    //region -------------------- Getter methods --------------------

    protected get id() {
        return this.props.id;
    }

    protected get caption() {
        return this.props.caption;
    }

    protected get headers(): HeadersContent {
        if (this.#headers == null) {
            const headerProperty = this.props.headers;
            this.#headers = headerProperty[0] instanceof Array ? (headerProperty as HeadersContent) : [headerProperty as SingleHeadersContent];
        }
        return this.#headers;
    }

    protected get content() {
        return this.props.content;
    }

    protected get tableColor() {
        return this.props['table-color'] ?? Table.DEFAULT_TABLE_COLOR;
    }

    protected get headersColor() {
        return this.props['headers-color'] ?? Table.DEFAULT_TABLE_COLOR;
    }

    //endregion -------------------- Getter methods --------------------

    private static __getHeaderKey(header: SingleHeaderContent,): string {
        return typeof header === 'string' ? header : header.key;
    }

    private static __getWidth(header: SingleHeaderContent,): | number | undefined {
        return typeof header === 'string' || header.width == null ? undefined : header.width;
    }

    private static __getHeight(header: SingleHeaderContent,): | number | undefined {
        return typeof header === 'string' || header.height == null ? undefined : header.height;
    }

    private static __getHeaderContent(header: SingleHeaderContent,) {
        return typeof header === 'string'
            ? <>{header}</>
            : 'element' in header
                ? header.element
                : <img key={header.key} alt={header.alt} src={header.path}/>;
    }

    private static __getSingleHeaderContent(headOrFootKey: HeaderOrFootKey, header: SingleHeaderContent,) {
        return <th key={`${this.__getHeaderKey(header)} (${headOrFootKey})`} colSpan={this.__getWidth(header)} rowSpan={this.__getHeight(header)}>{this.__getHeaderContent(header)}</th>;
    }

    private __getHeaders(isHead: boolean,) {
        const headers = this.headers;

        //region -------------------- If "isHead", return normal headers --------------------

        if (isHead)
            return headers.map((headerAsTr, index,) => <tr key={`head-${index}`}>{headerAsTr.map(headerAsTh => Table.__getSingleHeaderContent('head', headerAsTh,))}</tr>);

        //endregion -------------------- If "isHead", return normal headers --------------------
        //region -------------------- If headers has only 1 column, return normal headers --------------------

        const headersLength = headers.length;
        if (headersLength == 1)
            return headers.map((headerAsTr, index,) => <tr key={`foot-${index}`}>{headerAsTr.map(headerAsTh => Table.__getSingleHeaderContent('foot', headerAsTh,))}</tr>);

        //endregion -------------------- If headers has only 1 column, return normal headers --------------------
        //region -------------------- Reverse the headers while remaining the order similar to the thead --------------------

        const reversedHeaders: JSX.Element[][] = headers.map(() => []);

        for (let i = 0; i < headersLength; i++) {
            const headerAsTr = headers[i];
            for (let j = 0; j < headerAsTr.length; j++) {
                const headerAsTh = headerAsTr[j];
                const height = Table.__getHeight(headerAsTh) ?? 1;
                const indexToAddHeader = height === 1 ? i : (i + height - 1);

                reversedHeaders[indexToAddHeader].push(Table.__getSingleHeaderContent('foot', headerAsTh,));
            }
        }

        return reversedHeaders.reverse().map((reversedHeaderAsTr, index,) => <tr key={`foot-${index}`}>{reversedHeaderAsTr.map(reversedHeaderAsTh => reversedHeaderAsTh)}</tr>);

        //endregion -------------------- Reverse the headers while remaining the order similar to the thead --------------------
    }

    private __getContent(): JSX.Element[] {
        return this.content.map(content => {
            const key = content[0];
            return <tr key={key + '_header'}>
                {content.map((innerContent, index) =>
                    typeof innerContent !== 'string'
                        ? <td key={`${key}-${index}`}>{innerContent}</td>
                        : null)
                    .filter(content => content !== null)}
            </tr>;
        });
    }

    public render() {
        return <table key={this.id} id={this.id} className={`table table-${this.tableColor} table-bordered table-striped`}>
            <caption>{this.caption}</caption>
            <thead className={`table-${this.headersColor} table-borderless`}>{this.__getHeaders(true)}</thead>
            <tbody>{this.__getContent()}</tbody>
            <tfoot className={`table-${this.headersColor} table-borderless`}>{this.__getHeaders(false)}</tfoot>
        </table>;
    }

}

type HeaderOrFootKey = | 'head' | 'foot';
