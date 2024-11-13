import {forEachByArray} from '@joookiwi/collection'

import type {Content}                    from 'app/interpreter/AppInterpreter'
import type {AppInterpreterWithCardList} from 'app/interpreter/AppInterpreterWithCardList'
import type {ReactProperties}            from 'util/react/ReactProperties'

import NameComponent from 'lang/name/component/Name.component'
import {Empty}       from 'util/emptyVariables'

import EMPTY_STRING = Empty.EMPTY_STRING

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

    const contentToDisplay = new Array<NonNullReactElement>(content.length,)
    forEachByArray(content, (enumerable, i,) => {
        const uniqueKey = keyRetriever(enumerable,)

        //TODO change the popover to be on the id instead of the name directly
        contentToDisplay[i] =
            <div key={`${uniqueKey} - main card list container`} id={`${reactKey}-${enumerable.englishNameInHtml}-container`} className={`${reactKey}-container`}>
                <div key={`${uniqueKey} - main card list sub-container`} className="listElement-container cardListElement-container rounded-pill">
                    <NameComponent key={`${uniqueKey} - text container`} id="name" name={enumerable.reference.nameContainer} popoverOrientation="left"/>
                    <div key={`${uniqueKey} - card content container`} className="cardListName-content-container">{interpreter.createCardListContent(enumerable)}</div>
                </div>
            </div>
    },)
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

    return `row-cols-${df}${sm == null ? EMPTY_STRING : ` row-cols-sm-${sm}`}${md == null ? EMPTY_STRING : ` row-cols-md-${md}`}${lg == null ? EMPTY_STRING : ` row-cols-lg-${lg}`}${xl == null ? EMPTY_STRING : ` row-cols-xl-${xl}`}${xxl == null ? EMPTY_STRING : ` row-cols-xxl-${xxl}`}`
}
