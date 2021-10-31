import type {Namespace} from 'react-i18next';

import type {SimpleAnyTranslationProperty} from '../../../lang/components/TranslationProperty';

export type SingleHeaderContent = | string | SimpleImageHeader | SimpleReactHeader;
export type SingleHeadersContent = readonly SingleHeaderContent[];
export type HeadersContent = readonly SingleHeadersContent[];
export type PossibleHeaderContent = | SingleHeadersContent | HeadersContent;

export interface SimpleHeader {

    key: string

    width?: number

    height?: number

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
