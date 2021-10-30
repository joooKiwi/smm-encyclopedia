import type {ReactProperty} from '../../../util/react/ReactProperty';

export type SingleCaptionContent = | string | JSX.Element;
export type SingleHeaderContent = | string | SimpleImageHeader | SimpleReactHeader;
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

export interface SimpleTableProperties
    extends ReactProperty {

    id: string
    caption: SingleCaptionContent
    headers: readonly SingleHeaderContent[]
    content: readonly SingleTableContent[]

}
