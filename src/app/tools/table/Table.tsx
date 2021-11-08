import {PureComponent} from 'react';

import type {BootstrapColor}                                            from '../../../bootstrap/Bootstrap.types';
import type {HeadersContent, SingleHeaderContent, SingleHeadersContent} from './SimpleHeader';
import type {SimpleTableProperties}                                     from './Table.types';
import type {ReactComponent}                                            from '../../../util/react/ReactComponent';

import AnyTranslationComponent from '../../../lang/components/AnyTranslationComponent';
import {EMPTY_REACT_ELEMENT}   from '../../../util/emptyReactVariables';
import Tooltip                 from '../../../bootstrap/tooltip/Tooltip';

/**
 * @reactComponent
 */
export default class Table
    extends PureComponent<SimpleTableProperties>
    implements ReactComponent {

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
        return this.props['headers-color'] ?? Table.DEFAULT_HEADERS_COLOR;
    }

    //endregion -------------------- Getter methods --------------------

    private static __getHeaderKey(header: SingleHeaderContent,): string {
        return typeof header === 'string' ? header : header.key;
    }

    private static __getHeaderWidth(header: SingleHeaderContent,): | number | undefined {
        return typeof header === 'string' || header.width == null ? undefined : header.width;
    }

    private static __getHeaderHeight(header: SingleHeaderContent,): | number | undefined {
        return typeof header === 'string' || header.height == null ? undefined : header.height;
    }

    private static __getHeaderContent(header: SingleHeaderContent,) {
        return typeof header === 'string'
            ? <>{header}</>
            : 'element' in header
                ? header.element
                : <img key={header.key} alt={header.alt} src={header.path}/>;
    }

    private static __createTooltip(isHead: boolean, headOrFootKey: HeaderOrFootKey, header: SingleHeaderContent,) {
        if (typeof header == 'string')
            return EMPTY_REACT_ELEMENT;

        const tooltip = header.tooltip;
        if (tooltip == null)
            return EMPTY_REACT_ELEMENT;

        const placement = isHead ? 'bottom' : 'top';

        return <AnyTranslationComponent namespace={tooltip.namespace}>{translation =>
            <Tooltip option={({title: translation(tooltip.translationKey) as string, placement: placement,})} elementId={`${this.__getHeaderKey(header)}_${headOrFootKey}`}/>}
        </AnyTranslationComponent>;
    }

    private static __createSingleHeaderContent(isHead: boolean, headOrFootKey: HeaderOrFootKey, header: SingleHeaderContent,) {
        const key = this.__getHeaderKey(header);

        return <th key={`${key} (${headOrFootKey})`} id={`${key}_${headOrFootKey}`} colSpan={this.__getHeaderWidth(header)} rowSpan={this.__getHeaderHeight(header)}>
            {this.__createTooltip(isHead, headOrFootKey, header)}
            {this.__getHeaderContent(header)}
        </th>;
    }

    private __createHeaders(isHead: boolean,) {
        const headers = this.headers;

        //region -------------------- If "isHead", return normal headers --------------------

        if (isHead)
            return headers.map((headerAsTr, index,) => <tr key={`head-${index}`}>{headerAsTr.map(headerAsTh => Table.__createSingleHeaderContent(isHead, 'head', headerAsTh,))}</tr>);

        //endregion -------------------- If "isHead", return normal headers --------------------
        //region -------------------- If headers has only 1 column, return normal headers --------------------

        const headersLength = headers.length;
        if (headersLength === 1)
            return headers.map((headerAsTr, index,) => <tr key={`foot-${index}`}>{headerAsTr.map(headerAsTh => Table.__createSingleHeaderContent(isHead, 'foot', headerAsTh,))}</tr>);

        //endregion -------------------- If headers has only 1 column, return normal headers --------------------
        //region -------------------- Reverse the headers while remaining the order similar to the thead --------------------

        const elementsMap: Map<string, JSX.Element> = new Map(headers.map(headerAsTr => headerAsTr.map(headerAsTh => [Table.__getHeaderKey(headerAsTh), Table.__createSingleHeaderContent(isHead, 'foot', headerAsTh,),] as const)).flat(1));

        const alreadyAddedKeysOnLayout: string[] = [];
        const layout: string[][] = headers.map(() => []);

        for (let i = 0; i < headersLength; i++) {
            const headerAsTr = headers[i];
            const headerAsTrLength = headerAsTr.length;

            for (let j = 0; j < headerAsTrLength; j++) {
                const headerAsTh = headerAsTr[j];
                const key = Table.__getHeaderKey(headerAsTh);
                if (alreadyAddedKeysOnLayout.includes(key))
                    continue;
                let indexToAdd = 0;
                const height = Table.__getHeaderHeight(headerAsTh) ?? 1;
                const width = Table.__getHeaderWidth(headerAsTh) ?? 1;
                const alreadyAddedThKeys: Set<string> = new Set();

                //region -------------------- Addition based on height --------------------

                for (; indexToAdd < height; indexToAdd++) {
                    layout[i + indexToAdd].push(key);
                    alreadyAddedThKeys.add(key);
                }

                //endregion -------------------- Addition based on height --------------------
                //region -------------------- Addition based on width --------------------

                for (let k = 1; k < width; k++) {
                    layout[i + indexToAdd - 1].push(key);
                    alreadyAddedThKeys.add(key);
                    for (let l = 0; l < indexToAdd; l++) {
                        const forwardKeyOnWidthAndHeight = Table.__getHeaderKey(headers[indexToAdd][k]);
                        layout[i + indexToAdd].push(forwardKeyOnWidthAndHeight);
                        alreadyAddedThKeys.add(forwardKeyOnWidthAndHeight);
                    }
                }

                //endregion -------------------- Addition based on width --------------------

                for (let k = 0; indexToAdd < headersLength; indexToAdd++, k++) {
                    const forwardKeyOnHeight = Table.__getHeaderKey(headers[indexToAdd][k]);
                    const forwardArray = layout[i + indexToAdd];

                    forwardArray.splice(forwardArray.length - (alreadyAddedThKeys.size - 1), 0, forwardKeyOnHeight,);
                    alreadyAddedThKeys.add(forwardKeyOnHeight);
                }

                alreadyAddedKeysOnLayout.push(...alreadyAddedThKeys);

            }
        }

        const alreadyRenderedKeys: Set<string> = new Set();
        return layout.reverse().map((headerAsTrLayout, index,) => <tr key={`foot-${index}`}>{headerAsTrLayout.map(headerAsThKey => {
            if (alreadyRenderedKeys.has(headerAsThKey))
                return EMPTY_REACT_ELEMENT;
            alreadyRenderedKeys.add(headerAsThKey);
            return elementsMap.get(headerAsThKey)!;
        })}</tr>);

        //endregion -------------------- Reverse the headers while remaining the order similar to the thead --------------------
    }

    private __createContent(): JSX.Element[] {
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
            <thead className={`table-${this.headersColor} table-borderless`}>{this.__createHeaders(true)}</thead>
            <tbody>{this.__createContent()}</tbody>
            <tfoot className={`table-${this.headersColor} table-borderless`}>{this.__createHeaders(false)}</tfoot>
        </table>;
    }

}

type HeaderOrFootKey = | 'head' | 'foot';
