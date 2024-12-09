import './Table.scss'

import type {CollectionHolder}                from '@joookiwi/collection'
import type {Array, Nullable, NullableString} from '@joookiwi/type'
import {dropByArray, filterNotNull}           from '@joookiwi/collection'

import type {Content}                                                                         from 'app/interpreter/AppInterpreter'
import type {SingleHeaderContent}                                                             from 'app/tools/table/SimpleHeader'
import type {SingleTableContent}                                                              from 'app/tools/table/Table.types'
import type {TableOption}                                                                     from 'app/tools/table/TableOption'
import type {ReactProperties, ReactPropertiesWithChildren, SimpleReactPropertiesWithChildren} from 'util/react/ReactProperties'

import Image             from 'app/tools/images/Image'
import Tooltip           from 'bootstrap/tooltip/Tooltip'
import {Empty}           from 'util/emptyVariables'
import {StringContainer} from 'util/StringContainer'
import {assert}          from 'util/utilitiesMethods'
import EMPTY_STRING = Empty.EMPTY_STRING
import getInHtml = StringContainer.getInHtml

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
export default function Table<const CONTENT extends Content, const OPTION extends TableOption<CONTENT>, >({id, items, options, color, headersColor, caption,}: TableProperties<CONTENT, OPTION>,) {
    const nonNullOptions = filterNotNull(options,)
    const additionalClasses = retrieveAssociatedClass(nonNullOptions,)
    const contents = retrieveContent(items, nonNullOptions,)
    const headers = retrieveHeader(nonNullOptions,)

    return <div id={id} className={`ttable ${color == null ? EMPTY_STRING : `table-${color}`} ${headersColor == null ? EMPTY_STRING : `headers-${headersColor}`} w-100`}>
        <TableHeader>{additionalClasses}{headers}</TableHeader>
        <TableContent>{additionalClasses}{contents}</TableContent>
        <TableFooter>{additionalClasses}{headers}</TableFooter>
        <TableCaption>{caption}</TableCaption>
    </div>
}

function TableHeader({children: [additionalClasses, headers,],}: SimpleReactPropertiesWithChildren<readonly [CollectionHolder<string>, CollectionHolder<SingleHeaderContent>,]>,) {
    const columns = new Array<ReactJSXElement>(headers.length,)
    headers.forEach((it, i,) => {
        const elementId = `${getHeaderKey(it,)}-header`
        columns[i] = <div id={elementId} key={`table header (${getHeaderKey(it,)})`} className={`tcell${additionalClasses.get(i,)}`}>
            <HeaderTooltip elementId={elementId}>{it}</HeaderTooltip>
            <HeaderOrFooterContent>{it}</HeaderOrFooterContent>
        </div>
    },)
    return <div className="theader">{columns}</div>
}

function TableContent({children: [additionalClasses, contents,],}: SimpleReactPropertiesWithChildren<readonly [CollectionHolder<string>, CollectionHolder<SingleTableContent>]>,) {
    const tableContent = new Array<ReactJSXElement>(contents.length,)
    contents.forEach((content, i,) => {
        const rowContentKey = content[0]
        const rowContent = new Array<ReactJSXElement>(content.length - 1,)
        dropByArray(content, 1,).forEach((rowColumnContent, j,) => {
            if (rowColumnContent == null)
                rowContent[j] = <div key={`table content (empty ${rowContentKey} ${i + 1}-${j + 2})`} className="tcell empty-table-rowColumn-content-container"/>
            else
                rowContent[j] = <div key={`table content (${rowContentKey} ${i + 1}-${j + 2})`} className={`tcell${additionalClasses.get(j,)}`}>{rowColumnContent}</div>
        },)

        tableContent[i] =
            <div key={`table row content (${rowContentKey} ${i + 1})`} className={`trow table-row-${getInHtml(rowContentKey,)}`}>{rowContent}</div>
    },)
    return <div className="tcontent">{tableContent}</div>
}

function TableFooter({children: [additionalClasses, headers,],}: SimpleReactPropertiesWithChildren<readonly [CollectionHolder<string>, CollectionHolder<SingleHeaderContent>,]>,) {
    const columns = new Array<ReactJSXElement>(headers.length,)
    headers.forEach((it, i,) => {
        const elementId = `${getHeaderKey(it,)}-footer`
        columns[i] = <div id={elementId} key={`table footer (${getHeaderKey(it,)})`} className={`tcell${additionalClasses.get(i,)}`}>
            <FooterTooltip elementId={elementId}>{it}</FooterTooltip>
            <HeaderOrFooterContent>{it}</HeaderOrFooterContent>
        </div>
    },)

    return <div className="tfooter mb-2">{columns}</div>
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
