import type {ReactElementOrString} from 'util/react/ReactProperties'

export type SingleHeaderContent = | string | SimpleImageHeader | SimpleReactHeader
export type SingleHeadersContent = readonly SingleHeaderContent[]

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
