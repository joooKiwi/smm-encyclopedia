
export type SingleHeaderContent = | string | SimpleImageHeader | SimpleReactHeader;
export type SingleHeadersContent = readonly SingleHeaderContent[];
export type HeadersContent = readonly SingleHeadersContent[];
export type PossibleHeaderContent = | SingleHeadersContent | HeadersContent;

export interface SimpleHeader {

    key: string

    width?: number

    height?: number

}

export interface SimpleImageHeader
    extends SimpleHeader {

    /**
     * The name if the image cannot be loaded.
     */
    alt: string

    path: string

}

export interface SimpleReactHeader
    extends SimpleHeader {

    element: JSX.Element

}
