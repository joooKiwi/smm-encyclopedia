import type {Content}                    from 'app/interpreter/AppInterpreter'
import type {AppInterpreterWithCardList} from 'app/interpreter/AppInterpreterWithCardList'
import type {ReactProperties}            from 'util/react/ReactProperties'

import NameComponent from 'lang/name/component/Name.component'

interface CardListProperties<CONTENT extends Content, >
    extends ReactProperties {

    readonly reactKey: string

    readonly interpreter: AppInterpreterWithCardList<CONTENT>

    readonly keyRetriever?: (enumerable: CONTENT,) => string

}

/**
 * Create a list of elements in a card manner.
 * It can be similar to the <u>simple list</u> but has more information displayed.
 *
 * @reactComponent
 */
export default function CardList<const CONTENT extends Content, >({reactKey, interpreter, keyRetriever,}: CardListProperties<CONTENT>,) {
    keyRetriever ??= enumerable => enumerable.englishName
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
            <div key={`${uniqueKey} - main card list container`} id={`${reactKey}-${enumerable.englishNameInHtml}-container`} className={`${reactKey}-container`}>
                <div key={`${uniqueKey} - main card list sub-container`} className="listElement-container cardListElement-container rounded-pill">
                    <NameComponent key={`${uniqueKey} - text container`} id="name" name={enumerable.reference.nameContainer} popoverOrientation="left"/>
                    <div key={`${uniqueKey} - card content container`} className="cardListName-content-container">{interpreter.createCardListContent(enumerable)}</div>
                </div>
            </div>
    }
    return <div className={`row ${dimensions} align-items-center flex-grow-1 gx-0`}>{contentToDisplay}</div>
}

function createDimension(interpreter: AppInterpreterWithCardList,): string {
    const dimensions = interpreter.createCardListDimension()
    const df = dimensions.default
    const sm = dimensions.small
    const md = dimensions.medium
    const lg = dimensions.large
    const xl = dimensions.extraLarge
    const xxl = dimensions.extraExtraLarge

    return `row-cols-${df}${sm == null ? '' : ` row-cols-sm-${sm}`}${md == null ? '' : ` row-cols-md-${md}`}${lg == null ? '' : ` row-cols-lg-${lg}`}${xl == null ? '' : ` row-cols-xl-${xl}`}${xxl == null ? '' : ` row-cols-xxl-${xxl}`}`
}
