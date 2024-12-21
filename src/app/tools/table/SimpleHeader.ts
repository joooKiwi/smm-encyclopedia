import type {Array} from '@joookiwi/type'

export type SingleHeaderContent = | string | SimpleImageHeader | SimpleReactHeader

export interface SimpleHeader {

    /** The partial id that will be used in the table column */
    readonly key: string

    readonly subHeaders?: Array<SingleHeaderContent>

    /** The Bootstrap tooltip to be displayed bellow on top and above on bottom */
    readonly tooltip?: string

}

export interface SimpleImageHeader
    extends SimpleHeader {

    /** The name if the image cannot be loaded */
    readonly alt: string

    /** The path of the image */
    readonly path: string

}

export interface SimpleReactHeader
    extends SimpleHeader {

    /** The element to be displayed in the table row */
    readonly element: ReactElementOrString

}
