import type {ImageFile} from 'util/file/image/ImageFile'

export interface ClassWithImageFile<out FILE extends ImageFile, > {

    readonly imageFile: FILE

}
