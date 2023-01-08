import type {ReactProperties}     from 'util/react/ReactProperties'
import type {HTMLImageProperties} from 'util/react/html/HTMLImageProperties'
import type {ImageFile}           from 'util/file/image/ImageFile'
import type {Nullable}            from 'util/types/nullable'

export interface ImageFromFileProperties
    extends ReactProperties, Omit<HTMLImageProperties, | 'src' | 'alt'> {

    file: Nullable<ImageFile>

}
