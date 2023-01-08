import type {ImageFile} from 'util/file/image/ImageFile'

export interface ClassWithImageFile<FILE extends ImageFile, > {

    get imageFile(): FILE

}
