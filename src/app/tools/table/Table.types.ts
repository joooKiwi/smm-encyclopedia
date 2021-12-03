import type {BootstrapColor}       from '../../../bootstrap/Bootstrap.types';
import type {SingleHeadersContent} from './SimpleHeader';
import type {ReactProperty}        from '../../../util/react/ReactProperty';

export type SingleCaptionContent = | string | JSX.Element;
export type SingleTableContent = [key: string, ...content: JSX.Element[]];

export interface SimpleTableProperties
    extends ReactProperty {

    id: string

    caption: SingleCaptionContent

    headers: SingleHeadersContent

    content: readonly SingleTableContent[]

    'table-color'?: BootstrapColor

    'headers-color'?: BootstrapColor

}
