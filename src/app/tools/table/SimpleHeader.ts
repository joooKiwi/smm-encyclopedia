import type {Namespace, SimpleAnyTranslationProperty} from '../../../lang/components/TranslationProperty';

export type SingleHeaderContent = | string | SimpleImageHeader | SimpleReactHeader;
export type SingleHeadersContent = readonly SingleHeaderContent[];

export interface SimpleHeader {

    key: string

    subHeaders?: SingleHeadersContent

    tooltip?: SimpleAnyTranslationProperty<Namespace>

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
