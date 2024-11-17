import type {ReactProperties}              from 'util/react/ReactProperties'
import type {AppInterpreterWithSimpleList} from 'app/interpreter/AppInterpreterWithSimpleList'
import type {Content}                      from 'app/interpreter/AppInterpreter'

import NameComponent from 'lang/name/component/Name.component'
import {Empty}       from 'util/emptyVariables'

import EMPTY_STRING = Empty.EMPTY_STRING

interface SimpleListProperties<CONTENT extends Content, >
    extends ReactProperties {

    readonly reactKey: string

    readonly interpreter: AppInterpreterWithSimpleList<CONTENT>

    readonly keyRetriever?: (enumerable: CONTENT,) => string

}

/**
 * Create a list with only the names displayed
 *
 * @reactComponent
 */
export default function SimpleList<const CONTENT extends Content, >({reactKey, interpreter, keyRetriever = it => it.englishName,}: SimpleListProperties<CONTENT>,) {
    const dimensions = createDimension(interpreter,)
    const content = interpreter.content

    const contentToDisplay = new Array<NonNullReactElement>(content.length,)
    content.forEach((enumerable, i,) => {
        const uniqueKey = keyRetriever(enumerable,)

        //TODO change the popover to be on the id instead of the name directly
        contentToDisplay[i] =
            <div key={`${uniqueKey} - main list container`} id={`${reactKey}-${enumerable.englishNameInHtml}-container`} className={`${reactKey}-container`}>
                <span className="listElement-container simpleListElement-container rounded-pill">
                    <NameComponent id="name" name={enumerable.reference.nameContainer} popoverOrientation="left"/>
                </span>
            </div>
    },)
    return <div className={`row ${dimensions} align-items-center flex-grow-1 gx-0`}>{contentToDisplay}</div>
}

function createDimension(interpreter: AppInterpreterWithSimpleList,): string {
    const dimensions = interpreter.createListDimension()
    const df = dimensions.default
    const sm = dimensions.small
    const md = dimensions.medium
    const lg = dimensions.large
    const xl = dimensions.extraLarge
    const xxl = dimensions.extraExtraLarge

    return `row-cols-${df}${sm == null ? EMPTY_STRING : ` row-cols-sm-${sm}`}${md == null ? EMPTY_STRING : ` row-cols-md-${md}`}${lg == null ? EMPTY_STRING : ` row-cols-lg-${lg}`}${xl == null ? EMPTY_STRING : ` row-cols-xl-${xl}`}${xxl == null ? EMPTY_STRING : ` row-cols-xxl-${xxl}`}`
}
