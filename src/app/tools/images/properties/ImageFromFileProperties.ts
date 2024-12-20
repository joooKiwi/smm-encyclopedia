import type {Nullable} from '@joookiwi/type'

import type {ReactProperties}     from 'util/react/ReactProperties'
import type {HTMLImageProperties} from 'util/react/html/HTMLImageProperties'
import type {ImageFile}           from 'util/file/image/ImageFile'

export interface ImageFromFileProperties
    extends ReactProperties, Omit<HTMLImageProperties, | 'src' | 'alt'> {

    readonly file: Nullable<ImageFile>

}
