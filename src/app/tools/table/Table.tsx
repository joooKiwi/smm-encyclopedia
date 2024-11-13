import './Table.scss'

import type {Enumerable}                                                from '@joookiwi/enumerable'
import type {Array, MutableArray, StringArray}                          from '@joookiwi/type'
import {filterNotNull, forEachByArray, joinToStringByArray, mapByArray} from '@joookiwi/collection'

import type {AppInterpreterWithTable}                                                         from 'app/interpreter/AppInterpreterWithTable'
import type {SingleHeaderContent}                                                             from 'app/tools/table/SimpleHeader'
import type {SingleTableContent}                                                              from 'app/tools/table/Table.types'
import type {ReactProperties, ReactPropertiesWithChildren, SimpleReactPropertiesWithChildren} from 'util/react/ReactProperties'

import Image             from 'app/tools/images/Image'
import Tooltip           from 'bootstrap/tooltip/Tooltip'
import {Empty}           from 'util/emptyVariables'
import {SPACE}           from 'util/commonVariables'
import {StringContainer} from 'util/StringContainer'
import {assert}          from 'util/utilitiesMethods'

import EMPTY_STRING = Empty.EMPTY_STRING

interface TableProperties
    extends ReactProperties {

    readonly id: string

    readonly interpreter: AppInterpreterWithTable

}

/**
 * Create a {@link HTMLTableElement table}-like element with a multiple parts:
 *  - header
 *  - content
 *  - footer
 *  - caption
 *
 * @param id The element id
 * @param interpreter The interpreter to retrieve its content
 * @reactComponent
 */
export default function Table({id, interpreter,}: TableProperties,) {
    const options = filterNotNull(interpreter.tableOptions,).toArray()
    const color = interpreter.tableColor
    const headersColor = interpreter.tableHeadersColor
    const caption = interpreter.tableCaption
    const additionalClasses = retrieveAdditionalClasses(interpreter, options,)
    const contents = retrieveContent(interpreter, options,)
    const headers = retrieveHeader(interpreter, options,)

    return <div id={id} className={`ttable ${color == null ? '' : `table-${color}`} ${headersColor == null ? '' : `headers-${headersColor}`} w-100`}>
        <TableHeader>{additionalClasses}{headers}</TableHeader>
        <TableContent>{additionalClasses}{contents}</TableContent>
        <TableFooter>{additionalClasses}{headers}</TableFooter>
        <TableCaption>{caption}</TableCaption>
    </div>
}

function TableHeader({children: [additionalClasses, headers,],}: SimpleReactPropertiesWithChildren<readonly [StringArray, Array<SingleHeaderContent>,]>,) {
    const columns = new Array<ReactJSXElement>(headers.length,)
    forEachByArray(headers, (it, i,) => {
        const elementId = `${getHeaderKey(it,)}-header`
        columns[i] = <div id={elementId} key={`table header (${getHeaderKey(it,)})`} className={`tcell${additionalClasses[i]}`}>
            <HeaderTooltip elementId={elementId}>{it}</HeaderTooltip>
            <HeaderOrFooterContent>{it}</HeaderOrFooterContent>
        </div>
    },)
    return <div className="theader">{columns}</div>
}

function TableContent({children: [additionalClasses, contents,],}: SimpleReactPropertiesWithChildren<readonly [StringArray, Array<SingleTableContent>]>,) {
    const tableContent = new Array<ReactJSXElement>(contents.length,)
    forEachByArray(contents, (content, i,) => {
        const rowContentKey = content[0]
        const rowContent = new Array<ReactJSXElement>(content.length - 1,)
        forEachByArray(content, (rowColumnContent, j,) => {
            if (rowColumnContent == null)
                rowContent[j] = <div key={`table content (empty ${rowContentKey} ${i + 1}-${j + 1})`} className="tcell empty-table-rowColumn-content-container"/>
            else
                rowContent[j] = <div key={`table content (${rowContentKey} ${i + 1}-${j + 1})`} className={`tcell${additionalClasses[j - 1]}`}>{rowColumnContent}</div>
        },)

        tableContent[i] =
            <div key={`table row content (${rowContentKey} ${i + 1})`} className={`trow table-row-${StringContainer.getInHtml(rowContentKey,)}`}>{rowContent}</div>
    },)
    return <div className="tcontent">{tableContent}</div>
}

function TableFooter({children: [additionalClasses, headers,],}: SimpleReactPropertiesWithChildren<readonly [StringArray, Array<SingleHeaderContent>,]>,) {
    const columns = new Array<ReactJSXElement>(headers.length,)
    forEachByArray(headers, (it, i,) => {
        const elementId = `${getHeaderKey(it,)}-footer`
        columns[i] = <div id={elementId} key={`table footer (${getHeaderKey(it,)})`} className={`tcell${additionalClasses[i]}`}>
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
 * @param interpreter The {@link AppInterpreterWithTable} to retrieve its possible classes
 * @param options The displayed options in the table
 * @private
 */
function retrieveAdditionalClasses({getAdditionalClass,}: AppInterpreterWithTable, options: Array<Enumerable>,): StringArray {
    if (getAdditionalClass == null)
        return Array.from({length: options.length,}, () => EMPTY_STRING,)
    return mapByArray(options, it => joinToStringByArray(getAdditionalClass(it,), SPACE, EMPTY_STRING, EMPTY_STRING,),).toArray()
}

/**
 * Retrieve the {@link SingleTableContent content} of the {@link interpreter} and put it in an {@link ReadonlyArray array}
 *
 * @param interpreter The {@link AppInterpreterWithTable} to retrieve its content
 * @param options The displayed options in the table
 * @private
 */
function retrieveContent({content, createTableContent,}: AppInterpreterWithTable, options: Array<Enumerable>,): Array<SingleTableContent> {
    return mapByArray(content, (contentValue, i,) => {
        const tableContent: SingleTableContent = [contentValue.englishName,]
        forEachByArray(options, option =>
            forEachByArray(createTableContent(contentValue, option,), it => tableContent.push(it,),),)
        return tableContent
    },).toArray()
}

/**
 * Retrieve the {@link SingleHeaderContent header} of the {@link interpreter} and put it in an {@link ReadonlyArray array}
 *
 *
 * @param interpreter The {@link AppInterpreterWithTable} to retrieve its content
 * @param options The displayed options in the table
 * @private
 */
function retrieveHeader({createTableHeader,}: AppInterpreterWithTable, options: Array<Enumerable>,): Array<SingleHeaderContent> {
    const headerContent: MutableArray<SingleHeaderContent> = []
    forEachByArray(options, it => {
        const tableHeader = createTableHeader(it,)
        if (tableHeader == null)
            return
        headerContent.push(tableHeader,)
    },)
    return headerContent
}
