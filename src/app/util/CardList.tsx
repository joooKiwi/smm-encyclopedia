import type {CollectionHolder} from '@joookiwi/collection'
import type {Nullable}         from '@joookiwi/type'

import type {ClassWithEnglishName} from 'core/ClassWithEnglishName'
import type {ReactProperties}      from 'util/react/ReactProperties'

import {Empty} from 'util/emptyVariables'

import EMPTY_STRING = Empty.EMPTY_STRING

interface CardProperties<out T extends ClassWithEnglishName<string>, >
    extends ReactProperties {

    /** The partial identifier that is used in the card list and the items */
    readonly 'partial-id': string

    /** The items to loop over and create the card list */
    readonly items: CollectionHolder<T>

    /** The value as “row-cols-X” */
    readonly default: PossibleBootstrapRowDimensionOrAutomatic
    /** The value in “row-cols-sm-X” */
    readonly small?: Nullable<PossibleBootstrapRowDimensionOrAutomatic>
    /** The value in “row-cols-md-X” */
    readonly medium?: Nullable<PossibleBootstrapRowDimensionOrAutomatic>
    /** The value in “row-cols-lg-X” */
    readonly large?: Nullable<PossibleBootstrapRowDimensionOrAutomatic>
    /** The value in “row-cols-xl-X” */
    readonly 'extra-large'?: Nullable<PossibleBootstrapRowDimensionOrAutomatic>
    /** The value in “row-cols-xxl-X” */
    readonly 'extra-extra-large'?: Nullable<PossibleBootstrapRowDimensionOrAutomatic>

    /** A method to create the child content from a value in the {@link items} */
    children(item: T,): NonNullReactElement

}

export default function CardList<const T extends ClassWithEnglishName<string>, >(properties: CardProperties<T>,) {
    const {items, small, medium, large, children,} = properties
    const partialId = properties['partial-id']
    const xl = properties['extra-large']
    const xxl = properties['extra-extra-large']

    return <div id={`${partialId}-cardList`} className={`cardList row row-cols-${properties.default}${
        small == null ? EMPTY_STRING : ` row-cols-sm-${small}`}${
        medium == null ? EMPTY_STRING : ` row-cols-md-${medium}`}${
        large == null ? EMPTY_STRING : ` row-cols-lg-${large}`}${
        xl == null ? EMPTY_STRING : ` row-cols-xl-${xl}`}${
        xxl == null ? EMPTY_STRING : ` row-cols-xxl-${xxl}`} align-items-stretch justify-content-center flex-grow-1 gx-1 gy-2`}>{items.map((it, i,) => {
        const {englishNameInHtml,} = it
        return <div key={`Card list item #${i} (in ${partialId}`} id={`${partialId}-${englishNameInHtml}-cardList-item`} className="cardList-item">
            <div className="bg-primary-subtle p-1 d-flex flex-column justify-content-center align-items-center text-center h-100 rounded-pill">{children(it,)}</div>
        </div>
    },)}</div>
}
