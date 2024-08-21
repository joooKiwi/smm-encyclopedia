import type {ReactProperties}              from 'util/react/ReactProperties'
import type {AppInterpreterWithSimpleList} from 'app/interpreter/AppInterpreterWithSimpleList'
import type {Content}                      from 'app/interpreter/AppInterpreter'

import NameComponent from 'lang/name/component/Name.component'

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

    const size = content.length
    const contentToDisplay = new Array<ReactElement>(size,)
    let index = size
    while (index-- > 0) {
        const enumerable = content[index]
        const uniqueKey = keyRetriever(enumerable,)

        //TODO change the popover to be on the id instead of the name directly
        contentToDisplay[index] =
            <div key={`${uniqueKey} - main list container`} id={`${reactKey}-${enumerable.englishNameInHtml}-container`} className={`${reactKey}-container`}>
                <span className="listElement-container simpleListElement-container rounded-pill">
                    <NameComponent id="name" name={enumerable.reference.nameContainer} popoverOrientation="left"/>
                </span>
            </div>
    }
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

    return `row-cols-${df}${sm == null ? '' : ` row-cols-sm-${sm}`}${md == null ? '' : ` row-cols-md-${md}`}${lg == null ? '' : ` row-cols-lg-${lg}`}${xl == null ? '' : ` row-cols-xl-${xl}`}${xxl == null ? '' : ` row-cols-xxl-${xxl}`}`
}
