import type {ReactProperties}     from 'util/react/ReactProperties'
import type {HTMLImageProperties} from 'util/react/html/HTMLImageProperties'

export interface ImageProperties
    extends ReactProperties, Omit<HTMLImageProperties, | 'src' | 'alt'> {

    readonly source: string

    readonly fallbackName: string

}
