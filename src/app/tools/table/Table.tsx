import './Table.scss'

import type {Enumerable} from '@joookiwi/enumerable'

import type {AppInterpreterWithTable}                                                         from 'app/interpreter/AppInterpreterWithTable'
import type {SingleHeaderContent}                                                             from 'app/tools/table/SimpleHeader'
import type {SingleTableContent}                                                              from 'app/tools/table/Table.types'
import type {ReactProperties, ReactPropertiesWithChildren, SimpleReactPropertiesWithChildren} from 'util/react/ReactProperties'

import Image             from 'app/tools/images/Image'
import Tooltip           from 'bootstrap/tooltip/Tooltip'
import {StringContainer} from 'util/StringContainer'
import {assert, nonNull} from 'util/utilitiesMethods'

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
    const options = nonNull(interpreter.tableOptions,)
    const color = interpreter.tableColor
    const headersColor = interpreter.tableHeadersColor
    const caption = interpreter.tableCaption
    const content = retrieveContent(interpreter, options,)
    const headers = retrieveHeader(interpreter, options,)

    return <div id={id} className={`table-container ${color == null ? '' : `table-${color}`} ${headersColor == null ? '' : `table-headers-${headersColor}`} d-table w-100`}>
        <TableHeader>{headers}</TableHeader>
        <TableContent>{content}</TableContent>
        <TableFooter>{headers}</TableFooter>
        <TableCaption>{caption}</TableCaption>
    </div>
}

function TableHeader({children,}: SimpleReactPropertiesWithChildren<readonly SingleHeaderContent[]>,) {
    const size = children.length
    const columns = new Array<ReactJSXElement>(size,)
    let index = size
    while (index-- > 0) {
        const it = children[index]
        const elementId = `${getHeaderKey(it,)}-header`
        columns[index] = <div id={elementId} key={`table header (${getHeaderKey(it,)})`} className="table-cell-container">
            <HeaderTooltip elementId={elementId}>{it}</HeaderTooltip>
            <HeaderOrFooterContent>{it}</HeaderOrFooterContent>
        </div>
    }
    return <div className="table-header-container">{columns}</div>
}

function TableContent({children,}: SimpleReactPropertiesWithChildren<readonly SingleTableContent[]>,) {
    const size1 = children.length
    const tableContent = new Array<ReactJSXElement>(size1,)
    let index1 = size1
    while (index1-- > 0) {
        const content = children[index1]
        const rowContentKey = content[0]
        const size2 = content.length
        const rowContent = new Array<ReactJSXElement>(size2 - 1,)
        let index2 = size2
        while (index2-- > 1) {
            const rowColumnContent = content[index2] as ReactElement//FIXME: Make the cast not present
            if (rowColumnContent == null)
                rowContent[index2] = <div key={`table content (empty ${rowContentKey} ${index1 + 1}-${index2 + 1})`} className="table-cell-container empty-table-rowColumn-content-container"/>
            else
                rowContent[index2] = <div key={`table content (${rowContentKey} ${index1 + 1}-${index2 + 1})`} className="table-cell-container">{rowColumnContent}</div>
        }

        tableContent[index1] = <div key={`table row content (${rowContentKey} ${index1 + 1})`} className={`table-row-container table-row-${StringContainer.getInHtml(rowContentKey,)}`}>{rowContent}</div>
    }
    return <div className="table-content-container">{tableContent}</div>
}

function TableFooter({children,}: SimpleReactPropertiesWithChildren<readonly SingleHeaderContent[]>,) {
    const size = children.length
    const columns = new Array<ReactJSXElement>(size,)
    let index = size
    while (index-- > 0) {
        const it = children[index]
        const elementId = `${getHeaderKey(it,)}-footer`
        columns[index] = <div id={elementId} key={`table footer (${getHeaderKey(it,)})`} className="table-cell-container">
            <FooterTooltip elementId={elementId}>{it}</FooterTooltip>
            <HeaderOrFooterContent>{it}</HeaderOrFooterContent>
        </div>
    }

    return <div className="table-footer-container mb-2">{columns}</div>
}

function HeaderTooltip({children, elementId,}: ReactPropertiesWithChildren<{ readonly elementId: string, }, SingleHeaderContent>,) {
    assert(typeof children != 'string', 'No tooltip can be displayed on a header that is a string.',)

    const tooltip = children.tooltip
    if (tooltip == null)
        return null
    return <Tooltip elementId={elementId} option={{title: tooltip, placement: 'bottom',}}/>
}

function FooterTooltip({children, elementId,}: ReactPropertiesWithChildren<{ readonly elementId: string, }, SingleHeaderContent>,) {
    assert(typeof children != 'string', 'No tooltip can be displayed on a footer that is a string.',)

    const tooltip = children.tooltip
    if (tooltip == null)
        return null
    return <Tooltip elementId={elementId} option={{title: tooltip, placement: 'top',}}/>
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
    return <small className="table-caption-container alert alert-info flex-grow-1 py-2" role="alert">{children}</small>
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
 * Retrieve the {@link SingleTableContent content} of the {@link interpreter} and put it in a {@link CollectionHolder}
 *
 * @param interpreter The {@link AppInterpreterWithTable} to retrieve its content
 * @param options The displayed options in the table
 * @private
 */
function retrieveContent(interpreter: AppInterpreterWithTable, options: readonly Enumerable[],): readonly SingleTableContent[] {
    const size2 = options.length
    const content = interpreter.content
    const size1 = content.length
    const tableContents = new Array<SingleTableContent>(size1,)
    let index1 = size1
    while (index1-- > 0) {
        const contentValue = content[index1]

        const tableContent: SingleTableContent = [contentValue.englishName,]
        let index2 = -1
        while (++index2 < size2) {
            const tableContentCreated = interpreter.createNewTableContent(contentValue, options[index2],)
            const size3 = tableContentCreated.length
            let index3 = -1
            while (++index3 < size3)
                tableContent.push(tableContentCreated[index3],)
        }
        tableContents[index1] = tableContent
    }
    return tableContents
}

/**
 * Retrieve the {@link SingleHeaderContent header} of the {@link interpreter} and put it in a {@link CollectionHolder}
 *
 *
 * @param interpreter The {@link AppInterpreterWithTable} to retrieve its content
 * @param options The displayed options in the table
 * @private
 */
function retrieveHeader(interpreter: AppInterpreterWithTable, options: readonly Enumerable[],): readonly SingleHeaderContent[] {
    const headerContent = [] as SingleHeaderContent[]
    const size = options.length
    let index = -1
    while (++index < size) {
        const tableHeader = interpreter.createTableHeader(options[index],)
        if (tableHeader == null)
            continue
        headerContent.push(tableHeader,)
    }
    return headerContent
}
