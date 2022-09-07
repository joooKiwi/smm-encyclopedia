import type {HTMLImageProperties} from '../../../../util/react/html/HTMLImageProperties';
import type {ReactProperties}     from '../../../../util/react/ReactProperties';

export interface ImageProperties
    extends ReactProperties, Omit<HTMLImageProperties, | 'src' | 'alt'> {

    source: string

    fallbackName: string

}
