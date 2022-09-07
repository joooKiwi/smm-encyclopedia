import {PureComponent} from 'react';

import type {EveryHeaderHolders, Layout, TableHeadersProperties} from './TableHeaders.types';
import type {ReactComponent}                                     from '../../../util/react/ReactComponent';
import type {ReactElement}                                       from '../../../util/react/ReactProperties';
import type {SingleHeaderContent, SingleHeadersContent}          from './SimpleHeader';

import AnyTranslationComponent from '../../../lang/components/AnyTranslationComponent';
import {EMPTY_ARRAY}           from '../../../util/emptyVariables';
import {EMPTY_REACT_ELEMENT}   from '../../../util/emptyReactVariables';
import {HeaderTypes}           from './header/HeaderTypes';
import Image                   from '../images/Image';
import Tooltip                 from '../../../bootstrap/tooltip/Tooltip';

/**
 * @reactComponent
 */
export default class TableHeaders
    extends PureComponent<TableHeadersProperties>
    implements ReactComponent {

    //region -------------------- Fields --------------------

    #everyHeaderHolders?: EveryHeaderHolders;
    #layout?: Layout;

    //endregion -------------------- Fields --------------------
    //region -------------------- Getter methods --------------------

    public get id(): string {
        return this.props.id;
    }

    public get type(): HeaderTypes {
        return this.props.type;
    }

    public get headers(): SingleHeadersContent {
        return this.props.headers;
    }

    public get everyHeaderHolders(): EveryHeaderHolders {
        return this.#everyHeaderHolders ??= this.props.everyHeadersHolder();
    }

    public get layout(): Layout {
        return this.#layout ??= this.props.layout();
    }

    //endregion -------------------- Getter methods --------------------

    public static getHeaderKey(header: SingleHeaderContent,): string {
        return typeof header == 'string' ? header : header.key;
    }

    public static getSubHeaders(header: SingleHeaderContent,): readonly SingleHeaderContent[] {
        return typeof header == 'string' ? EMPTY_ARRAY : header.subHeaders ?? EMPTY_ARRAY;
    }

    public static getHeaderContent(header: SingleHeaderContent,) {
        return typeof header == 'string'
            ? <>{header}</>
            : 'element' in header
                ? header.element
                : <Image key={header.key} source={header.path} fallbackName={header.alt}/>;
    }

    public static createTooltip(type: HeaderTypes, header: SingleHeaderContent,) {
        if (typeof header == 'string')
            return EMPTY_REACT_ELEMENT;

        const tooltip = header.tooltip;
        if (tooltip == null)
            return EMPTY_REACT_ELEMENT;

        return <AnyTranslationComponent namespace={tooltip.namespace}>{translation =>
            <Tooltip option={({title: translation(tooltip.translationKey, tooltip.replace,) as string, placement: type.placement,})}
                     elementId={`${this.getHeaderKey(header)}-${type.simpleName}`}/>}</AnyTranslationComponent>;
    }

    public static createSingleHeaderContent(type: HeaderTypes, header: SingleHeaderContent, height: number, width: number,) {
        const key = this.getHeaderKey(header);

        return <th key={`${key} (${type.simpleName})`} id={`${key}-${type.simpleName}`} className={`th-${type.simpleName} ${key}`} colSpan={width} rowSpan={height}>
            {this.createTooltip(type, header,)}
            {this.getHeaderContent(header)}
        </th>;
    }


    public override render(): ReactElement {
        const headers = this.headers;

        //region -------------------- If headers has only 1 column, return simple headers --------------------

        const headersLength = headers.length;
        if (headersLength === 1)
            return <tr key={`${this.id} - ${this.type.simpleName}`} className={`tr-${this.type.simpleName}`}>{
                headers.map(headerAsTh => TableHeaders.createSingleHeaderContent(this.type, headerAsTh, 1, 1,))
            }</tr>;

        //endregion -------------------- If headers has only 1 column, return simple headers --------------------~
        //region -------------------- Display headers with variable columns and height --------------------

        const everyHeaderHolders = this.everyHeaderHolders;
        everyHeaderHolders.forEach(headerHolder => headerHolder.resetRendered());

        return <>{this.type.getLayout(this.layout).map((layoutAsTr, index,) =>
            <tr key={`${this.id} - ${this.type.simpleName} #${index}`} className={`tr-${this.type.simpleName}`}>{
                layoutAsTr.map(layoutAsTh => everyHeaderHolders.get(layoutAsTh)!.render(this.type === HeaderTypes.HEAD))
            }</tr>)}</>;

        //endregion -------------------- Display headers with variable columns and height --------------------
    }

}
