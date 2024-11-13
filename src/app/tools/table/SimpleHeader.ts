import type {Array} from '@joookiwi/type'

export type SingleHeaderContent = | string | SimpleImageHeader | SimpleReactHeader
export type SingleHeadersContent = Array<SingleHeaderContent>

export interface SimpleHeader {

    key: string

    subHeaders?: SingleHeadersContent

    tooltip?: string

}

export interface SimpleImageHeader
    extends SimpleHeader {

    /** The name if the image cannot be loaded */
    alt: string

    /** The path of the image */
    path: string

}

export interface SimpleReactHeader
    extends SimpleHeader {

    element: ReactElementOrString

}
