import type {Image} from '../Image';

export interface UnusedImage
    extends Image {

    get all(): readonly (readonly string[])[]

}

export type ImageName_BigMushroom_Unused_SMM1 = | 'KoopaClown' | 'Kuribo' | 'Necchi';

export type UnusedImages = readonly [regular: UnusedImage, smm1_bigMushroom: UnusedImage,];
