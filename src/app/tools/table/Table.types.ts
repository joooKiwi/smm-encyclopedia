import type {BootstrapColor}                from '../../../bootstrap/Bootstrap.types'
import type {SingleHeadersContent}          from './SimpleHeader'
import type {ReactElement, ReactProperties} from '../../../util/react/ReactProperties'

export type SingleCaptionContent = | string | ReactElement
export type SingleTableContent = [key: string, ...content: ReactElement[],]

export interface TableProperties
    extends ReactProperties {

    id: string

    caption?: SingleCaptionContent

    headers?: SingleHeadersContent

    content: readonly SingleTableContent[]

    'table-color'?: BootstrapColor

    'headers-color'?: BootstrapColor

}
