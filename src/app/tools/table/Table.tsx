import './Table.scss'

import type {Enumerable} from '@joookiwi/enumerable'

import type {AppInterpreterWithTable}                                                         from 'app/interpreter/AppInterpreterWithTable'
import type {SingleHeaderContent}                                                             from 'app/tools/table/SimpleHeader'
import type {SingleTableContent}                                                              from 'app/tools/table/Table.types'
import type {ReactProperties, ReactPropertiesWithChildren, SimpleReactPropertiesWithChildren} from 'util/react/ReactProperties'

import Image             from 'app/tools/images/Image'
import Tooltip           from 'bootstrap/tooltip/Tooltip'
import {EMPTY_STRING}    from 'util/emptyVariables'
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

function TableHeader({children: [additionalClasses, headers,],}: SimpleReactPropertiesWithChildren<readonly [readonly string[], readonly SingleHeaderContent[],]>,) {
    const size = headers.length
    const columns = new Array<ReactJSXElement>(size,)
    let index = size
    while (index-- > 0) {
        const it = headers[index]
        const elementId = `${getHeaderKey(it,)}-header`
        columns[index] = <div id={elementId} key={`table header (${getHeaderKey(it,)})`} className={`tcell${additionalClasses[index]}`}>
            <HeaderTooltip elementId={elementId}>{it}</HeaderTooltip>
            <HeaderOrFooterContent>{it}</HeaderOrFooterContent>
        </div>
    }
    return <div className="theader">{columns}</div>
}

function TableContent({children: [additionalClasses, contents,],}: SimpleReactPropertiesWithChildren<readonly [readonly string[], readonly SingleTableContent[]]>,) {
    const size1 = contents.length
    const tableContent = new Array<ReactJSXElement>(size1,)
    let index1 = size1
    while (index1-- > 0) {
        const content = contents[index1]
        const rowContentKey = content[0]
        const size2 = content.length
        const rowContent = new Array<ReactJSXElement>(size2 - 1,)
        let index2 = size2
        while (index2-- > 1) {
            const rowColumnContent = content[index2] as ReactElement//FIXME: Make the cast not present
            if (rowColumnContent == null)
                rowContent[index2] = <div key={`table content (empty ${rowContentKey} ${index1 + 1}-${index2 + 1})`} className="tcell empty-table-rowColumn-content-container"/>
            else
                rowContent[index2] = <div key={`table content (${rowContentKey} ${index1 + 1}-${index2 + 1})`} className={`tcell${additionalClasses[index2 - 1]}`}>{rowColumnContent}</div>
        }

        tableContent[index1] =
            <div key={`table row content (${rowContentKey} ${index1 + 1})`} className={`trow table-row-${StringContainer.getInHtml(rowContentKey,)}`}>{rowContent}</div>
    }
    return <div className="tcontent">{tableContent}</div>
}

function TableFooter({children: [additionalClasses, headers,],}: SimpleReactPropertiesWithChildren<readonly [readonly string[], readonly SingleHeaderContent[],]>,) {
    const size = headers.length
    const columns = new Array<ReactJSXElement>(size,)
    let index = size
    while (index-- > 0) {
        const it = headers[index]
        const elementId = `${getHeaderKey(it,)}-footer`
        columns[index] = <div id={elementId} key={`table footer (${getHeaderKey(it,)})`} className={`tcell${additionalClasses[index]}`}>
            <FooterTooltip elementId={elementId}>{it}</FooterTooltip>
            <HeaderOrFooterContent>{it}</HeaderOrFooterContent>
        </div>
    }

    return <div className="tfooter mb-2">{columns}</div>
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
function retrieveAdditionalClasses({getAdditionalClass,}: AppInterpreterWithTable, options: readonly Enumerable[],): readonly string[] {
    if (getAdditionalClass == null)
        return Array.from({length: options.length,}, () => EMPTY_STRING,)

    const size1 = options.length
    const additionalClasses = new Array<string>(size1,)
    let index1 = size1
    while (index1-- > 0) {
        const additionalClass = getAdditionalClass(options[index1],)
        if (additionalClass.length === 0) {
            additionalClasses[index1] = EMPTY_STRING
            continue
        }

        let classesJoined = ''
        const size2 = additionalClass.length
        let index2 = -1
        while (++index2 < size2)
            classesJoined += ` ${additionalClass[index2]}`
        additionalClasses[index1] = classesJoined
    }
    return additionalClasses
}

/**
 * Retrieve the {@link SingleTableContent content} of the {@link interpreter} and put it in an {@link ReadonlyArray array}
 *
 * @param interpreter The {@link AppInterpreterWithTable} to retrieve its content
 * @param options The displayed options in the table
 * @private
 */
function retrieveContent({content, createTableContent,}: AppInterpreterWithTable, options: readonly Enumerable[],): readonly SingleTableContent[] {
    const size2 = options.length
    const size1 = content.length
    const tableContents = new Array<SingleTableContent>(size1,)
    let index1 = size1
    while (index1-- > 0) {
        const contentValue = content[index1]

        const tableContent: SingleTableContent = [contentValue.englishName,]
        let index2 = -1
        while (++index2 < size2) {
            const tableContentCreated = createTableContent(contentValue, options[index2],)
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
 * Retrieve the {@link SingleHeaderContent header} of the {@link interpreter} and put it in an {@link ReadonlyArray array}
 *
 *
 * @param interpreter The {@link AppInterpreterWithTable} to retrieve its content
 * @param options The displayed options in the table
 * @private
 */
function retrieveHeader({createTableHeader,}: AppInterpreterWithTable, options: readonly Enumerable[],): readonly SingleHeaderContent[] {
    const headerContent = [] as SingleHeaderContent[]
    const size = options.length
    let index = -1
    while (++index < size) {
        const tableHeader = createTableHeader(options[index],)
        if (tableHeader == null)
            continue
        headerContent.push(tableHeader,)
    }
    return headerContent
}
