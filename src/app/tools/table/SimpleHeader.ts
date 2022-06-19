import type {Namespace, SimpleAnyTranslationProperty, TranslationReplaceKeysMap} from '../../../lang/components/TranslationProperty';

export type SingleHeaderContent = | string | SimpleImageHeader | SimpleReactHeader;
export type SingleHeadersContent = readonly SingleHeaderContent[];

export interface SimpleHeader {

    key: string

    subHeaders?: SingleHeadersContent

    tooltip?: HeaderTooltip

}

export interface HeaderTooltip
    extends Omit<SimpleAnyTranslationProperty<Namespace>, 'replace'> {

    replace?: TranslationReplaceKeysMap<string>

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
