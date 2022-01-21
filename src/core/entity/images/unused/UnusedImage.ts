import type {Image}                   from '../Image';
import type {UnusedImage_BigMushroom} from './UnusedImage_BigMushroom';
import type {UnusedImage_Regular}     from './UnusedImage_Regular';

export interface UnusedImage
    extends Image {

}

export type ImageName_BigMushroom_Unused_SMM1 = | 'KoopaClown' | 'Kuribo D' | 'Necchi' | `Koopa${| '' | 'Jr'}` | 'SenkanHoudai D';
export type ImageName_Unused_SMM1 = | 'KoopaClown' | 'Necchi' | 'PSwitch';

export type UnusedImages = readonly [regular: UnusedImage_Regular, smm1_bigMushroom: UnusedImage_BigMushroom,];
