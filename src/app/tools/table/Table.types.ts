import type {BootstrapColor} from '../../../bootstrap/Bootstrap.types';
import type {ReactProperty}  from '../../../util/react/ReactProperty';

export type SingleCaptionContent = | string | JSX.Element;
export type SingleHeaderContent = | string | SimpleImageHeader | SimpleReactHeader;
export type SingleTableContent = [key: string, ...content: JSX.Element[]];
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

export interface SimpleTableProperties
    extends ReactProperty {

    id: string

    caption: SingleCaptionContent

    headers: PossibleHeaderContent

    content: readonly SingleTableContent[]

    'table-color'?: BootstrapColor

    'headers-color'?: BootstrapColor

}
