import type {HTMLImageProperties} from '../../../../util/react/html/HTMLImageProperties';
import type {ReactProperty}       from '../../../../util/react/ReactProperty';

export interface ImageProperties
    extends ReactProperty, Omit<HTMLImageProperties, | 'src' | 'alt'> {

    source: string

    fallbackName: string

}
