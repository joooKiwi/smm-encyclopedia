
export type SingleTableContent = [key: string, ...content: JSX.Element[]];

export interface SimpleImageHeader {

    key: string
    /**
     * The name if the image cannot be loaded.
     */
    alt: string
    path: string

}

export interface SimpleReactHeader {

    key: string
    element: JSX.Element

}

export interface SimpleTableComponent {

    id: string
    caption: string | JSX.Element
    headers: readonly (| string | SimpleImageHeader | SimpleReactHeader)[]
    content: readonly SingleTableContent[]

}