import './Table.scss'

import type {CollectionHolder}                from '@joookiwi/collection'
import type {Enumerable}                      from '@joookiwi/enumerable'
import type {NullableString}                  from '@joookiwi/type'
import type {default as TooltipFromBootstrap} from 'bootstrap/js/dist/tooltip'
import {useRef}                               from 'react'

import type {SingleHeaderContent}                          from 'app/tools/table/SimpleHeader'
import type {TableOption}                                  from 'app/tools/table/TableOption'
import type {ClassWithEnglishName}                         from 'core/ClassWithEnglishName'
import type {ReactProperties, ReactPropertiesWithChildren} from 'util/react/ReactProperties'

import Image               from 'app/tools/images/Image'
import Tooltip             from 'bootstrap/tooltip/Tooltip'
import {Empty}             from 'util/emptyVariables'

import EMPTY_CALLBACK = Empty.EMPTY_CALLBACK
import EMPTY_STRING =   Empty.EMPTY_STRING

type ContentOnATable = Enumerable & ClassWithEnglishName<string>

interface TableProperties<out CONTENT extends ContentOnATable,
    out OPTION extends TableOption<CONTENT>, >
    extends ReactProperties {

    /** The element id */
    readonly id: string

    /** The content to be displayed in a {@link HTMLTableElement} form */
    readonly items: CollectionHolder<CONTENT>

    /** The option displayed in the {@link HTMLTableElement} */
    readonly options: CollectionHolder<OPTION>

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
export default function Table<const CONTENT extends ContentOnATable, const OPTION extends TableOption<CONTENT>, >({id, items, options, caption, color, headersColor, onRowClicked = EMPTY_CALLBACK,}: TableProperties<CONTENT, OPTION>,) {
    const associatedClass = retrieveAssociatedClass(options,)
    const contents = retrieveContent(items, options,)
    const headers = retrieveHeader(options,)

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

/** @reactComponent */
function TableHeader({associatedClass, headers,}: TableHeaderProperties,) {
    return <div className="theader sticky-top">{headers.map((it, i,) =>
        <HeaderOrFooterContent key={`table header # ${i}`} type="header" content={it} associatedClass={associatedClass.get(i,)} tooltip-placement="bottom"/>
    ,)}</div>
}


interface TableContentProperties<CONTENT extends ContentOnATable, >
    extends ReactProperties {

    readonly associatedClass: CollectionHolder<string>
    readonly items: CollectionHolder<CONTENT>
    readonly contents: CollectionHolder<CollectionHolder<ReactElement>>
    readonly onRowClicked: (content: CONTENT,) => void

}

/** @reactComponent */
function TableContent<const CONTENT extends ContentOnATable, >({associatedClass, items, contents, onRowClicked,}: TableContentProperties<CONTENT>,) {
    return <div className="tcontent">{contents.map((content, i,) => {
        const {englishName, englishNameInHtml,} = items.get(i,)

        return <div key={`table row content (${englishName} ${i + 1})`} className={`trow table-row-${englishNameInHtml}`}
                    onClick={() => onRowClicked(items.get(i,),)}>{content.map((rowColumnContent, j,) =>
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

/** @reactComponent */
function TableFooter({associatedClass, headers,}: TableFooterProperties,) {
    return <div className="tfooter mb-2">{headers.map((it, i,) =>
        <HeaderOrFooterContent key={`table footer #${i + 1}`} type="footer" content={it} associatedClass={associatedClass.get(i,)} tooltip-placement="top"/>
    ,)}</div>
}


interface HeaderOrFooterContentProperties
    extends ReactProperties {

    readonly type: | 'header' | 'footer'

    readonly content: SingleHeaderContent

    readonly associatedClass: string

    readonly 'tooltip-placement': Extract<TooltipFromBootstrap.PopoverPlacement, | 'top' | 'bottom'>

}

/** @reactComponent */
function HeaderOrFooterContent(properties: HeaderOrFooterContentProperties,) {
    const htmlElement = useRef<HTMLDivElement>(null,)
    const {content, associatedClass,} = properties
    if (typeof content === 'string')
        return <div id={content} className={`tcell ${associatedClass}`}>{content}</div>

    const {key, tooltip,} = content
    if (tooltip == null)
        if ('element' in content)
            return <div id={key} className={`tcell ${associatedClass}`}>{content.element}</div>
        else
            return <div id={key} className={`tcell ${associatedClass}`}>
                <Image source={content.path} fallbackName={content.alt}/>
            </div>

    const tooltipPlacement = properties['tooltip-placement']
    if ('element' in content)
        return <div ref={htmlElement} id={key} className={`tcell ${associatedClass}`}>
            <Tooltip option={{title: tooltip, placement: tooltipPlacement,}} reference={htmlElement}/>
            {content.element}
        </div>
    return <div ref={htmlElement} id={key} className={`tcell ${associatedClass}`}>
        <Tooltip option={{title: tooltip, placement: tooltipPlacement,}} reference={htmlElement}/>
        <Image source={content.path} fallbackName={content.alt}/>
    </div>
}


/** @reactComponent */
function TableCaption({children,}: ReactPropertiesWithChildren<ReactElementOrString>,) {
    if (children == null)
        return null
    return <small className="tcaption alert alert-info flex-grow-1 py-2" role="alert">{children}</small>
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
function retrieveContent<const CONTENT extends ContentOnATable, const OPTION extends TableOption<CONTENT>, >(items: CollectionHolder<CONTENT>, options: CollectionHolder<OPTION>,): CollectionHolder<CollectionHolder<ReactElement>> {
    return items.map(contentValue => options.map(option => option.renderContent(contentValue,),),)
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
