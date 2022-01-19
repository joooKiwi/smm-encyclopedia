import type {BootstrapColor}              from '../../../bootstrap/Bootstrap.types';
import type {SingleHeadersContent}        from './SimpleHeader';
import type {ReactElement, ReactProperty} from '../../../util/react/ReactProperty';

export type SingleCaptionContent = | string | ReactElement;
export type SingleTableContent = [key: string, ...content: ReactElement[]];

export interface TableProperties
    extends ReactProperty {

    id: string

    caption?: SingleCaptionContent

    headers?: SingleHeadersContent

    content: readonly SingleTableContent[]

    'table-color'?: BootstrapColor

    'headers-color'?: BootstrapColor

}
