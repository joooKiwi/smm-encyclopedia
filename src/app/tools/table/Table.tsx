import './Table.scss'

import type {CollectionHolder}                from '@joookiwi/collection'
import type {Array, Nullable, NullableString} from '@joookiwi/type'
import {dropByArray, filterNotNull}           from '@joookiwi/collection'

import type {Content}                                                                         from 'app/interpreter/AppInterpreter'
import type {SingleHeaderContent}                                                             from 'app/tools/table/SimpleHeader'
import type {SingleTableContent}                                                              from 'app/tools/table/Table.types'
import type {TableOption}                                                                     from 'app/tools/table/TableOption'
import type {ReactProperties, ReactPropertiesWithChildren, SimpleReactPropertiesWithChildren} from 'util/react/ReactProperties'

import Image    from 'app/tools/images/Image'
import Tooltip  from 'bootstrap/tooltip/Tooltip'
import {Empty}  from 'util/emptyVariables'
import {assert} from 'util/utilitiesMethods'

import EMPTY_CALLBACK = Empty.EMPTY_CALLBACK
import EMPTY_STRING =   Empty.EMPTY_STRING

interface TableProperties<out CONTENT extends Content,
    out OPTION extends TableOption<CONTENT>, >
    extends ReactProperties {

    /** The element id */
    readonly id: string

    /** The content to be displayed in a {@link HTMLTableElement} form */
    readonly items: CollectionHolder<CONTENT>

    /** The option displayed in the {@link HTMLTableElement} */
    readonly options: Array<Nullable<OPTION>>

    /** The {@link HTMLTableCaptionElement} applicable to the table */
    readonly caption: ReactElementOrString

    /** The table base colour */
    readonly color?: NullableString<BootstrapThemeColor>
    /** The colour that will be used in both {@link HTMLTableSectionElement} (thead and tfoot) */
    readonly headersColor?: NullableString<BootstrapThemeColor>

    onRowClicked?(content: CONTENT,): void

}

/**
 * Create a {@link HTMLTableElement table}-like element with a multiple parts:
 *  - header
 *  - content
 *  - footer
 *  - caption
 *
 * @reactComponent
 */
export default function Table<const CONTENT extends Content, const OPTION extends TableOption<CONTENT>, >({id, items, options, caption, color, headersColor, onRowClicked = EMPTY_CALLBACK,}: TableProperties<CONTENT, OPTION>,) {
    const nonNullOptions = filterNotNull(options,)
    const associatedClass = retrieveAssociatedClass(nonNullOptions,)
    const contents = retrieveContent(items, nonNullOptions,)
    const headers = retrieveHeader(nonNullOptions,)

    return <div id={id} className={`ttable ${color == null ? EMPTY_STRING : `table-${color}`} ${headersColor == null ? EMPTY_STRING : `headers-${headersColor}`} w-100`}>
        <TableHeader associatedClass={associatedClass} headers={headers}/>
        <TableContent associatedClass={associatedClass} items={items} contents={contents} onRowClicked={onRowClicked}/>
        <TableFooter associatedClass={associatedClass} headers={headers}/>
        <TableCaption>{caption}</TableCaption>
    </div>
}

interface TableHeaderProperties
    extends ReactProperties {

    readonly associatedClass: CollectionHolder<string>
    readonly headers: CollectionHolder<SingleHeaderContent>

}

function TableHeader({associatedClass, headers,}: TableHeaderProperties,) {
    return <div className="theader">{headers.map((it, i,) => {
        const elementId = `${getHeaderKey(it,)}-header`
        return <div id={elementId} key={`table header (${getHeaderKey(it,)})`} className={`tcell ${associatedClass.get(i,)}`}>
            <HeaderTooltip elementId={elementId}>{it}</HeaderTooltip>
            <HeaderOrFooterContent>{it}</HeaderOrFooterContent>
        </div>
    },)}</div>
}


interface TableContentProperties<CONTENT extends Content,>
    extends ReactProperties {

    readonly associatedClass: CollectionHolder<string>
    readonly items: CollectionHolder<CONTENT>
    readonly contents: CollectionHolder<SingleTableContent>
    readonly onRowClicked: (content: CONTENT,) => void

}

function TableContent<const CONTENT extends Content, >({associatedClass, items, contents, onRowClicked,}: TableContentProperties<CONTENT>,) {
    return <div className="tcontent">{contents.map((content, i,) => {
        const {englishName, englishNameInHtml,} = items.get(i,)

        return <div key={`table row content (${englishName} ${i + 1})`} className={`trow table-row-${englishNameInHtml}`}
                    onClick={() => onRowClicked(items.get(i,),)}>{dropByArray(content, 1,).map((rowColumnContent, j,) =>
            rowColumnContent == null
                ? <div key={`table content (empty ${englishName} ${i + 1}-${j + 2})`} className="tcell empty-table-rowColumn-content-container"/>
                : <div key={`table content (${englishName} ${i + 1}-${j + 2})`} className={`tcell ${associatedClass.get(j,)}`}>{rowColumnContent}</div>,)
        }</div>
    },)}</div>
}


interface TableFooterProperties
    extends ReactProperties {

    readonly associatedClass: CollectionHolder<string>
    readonly headers: CollectionHolder<SingleHeaderContent>

}

function TableFooter({associatedClass, headers,}: TableFooterProperties,) {
    return <div className="tfooter mb-2">{headers.map((it, i,) => {
        const elementId = `${getHeaderKey(it,)}-footer`
        return <div id={elementId} key={`table footer (${getHeaderKey(it,)})`} className={`tcell ${associatedClass.get(i,)}`}>
            <FooterTooltip elementId={elementId}>{it}</FooterTooltip>
            <HeaderOrFooterContent>{it}</HeaderOrFooterContent>
        </div>
    },)}</div>
}


function HeaderTooltip({children, elementId,}: ReactPropertiesWithChildren<{ readonly elementId: string, }, SingleHeaderContent>,) {
    assert(typeof children != 'string', 'No tooltip can be displayed on a header that is a string.',)

    const tooltip = children.tooltip
    if (tooltip == null)
        return null
    return <Tooltip option={{title: tooltip, placement: 'bottom',}} reference={elementId}/>
}

function FooterTooltip({children, elementId,}: ReactPropertiesWithChildren<{ readonly elementId: string, }, SingleHeaderContent>,) {
    assert(typeof children != 'string', 'No tooltip can be displayed on a footer that is a string.',)

    const tooltip = children.tooltip
    if (tooltip == null)
        return null
    return <Tooltip option={{title: tooltip, placement: 'top',}} reference={elementId}/>
}

function HeaderOrFooterContent({children,}: SimpleReactPropertiesWithChildren<SingleHeaderContent>,) {
    if (typeof children == 'string')
        return <>{children}</>
    if ('element' in children)
        return children.element
    return <Image source={children.path} fallbackName={children.alt}/>
}

function TableCaption({children,}: SimpleReactPropertiesWithChildren<ReactElementOrString>,) {
    if (children == null)
        return null
    return <small className="tcaption alert alert-info flex-grow-1 py-2" role="alert">{children}</small>
}


/**
 * Get the header key from either a {@link String} or a {@link SimpleHeader}
 *
 * @param header The header to retrieve its key
 */
function getHeaderKey(header: SingleHeaderContent,): string {
    return typeof header == 'string' ? header : header.key
}

/**
 * Get the classes with a space before and between the values
 *
 * @param options The displayed options in the table
 * @private
 */
function retrieveAssociatedClass<const OPTION extends TableOption, >(options: CollectionHolder<OPTION>,): CollectionHolder<string> {
    return options.map(it => it.associatedClass,)
}

/**
 * Retrieve the {@link SingleTableContent content} of the {@link interpreter} into a {@link CollectionHolder}
 *
 * @param items   The values to generate the table content
 * @param options The displayed options in the table
 * @private
 */
function retrieveContent<const CONTENT extends Content, const OPTION extends TableOption<CONTENT>, >(items: CollectionHolder<CONTENT>, options: CollectionHolder<OPTION>,): CollectionHolder<SingleTableContent> {
    return items.map(contentValue => {
        const tableContent: SingleTableContent = [contentValue.englishName,]
        options.forEach(option => tableContent.push(option.renderContent(contentValue,),),)
        return tableContent
    },)
}

/**
 * Retrieve the {@link SingleHeaderContent header} from the given {@link options}
 *
 * @param options The displayed options in the table
 * @private
 */
function retrieveHeader<const OPTION extends TableOption, >(options: CollectionHolder<OPTION>,): CollectionHolder<SingleHeaderContent> {
    return options.map(it => it.renderHeader(),)
}
