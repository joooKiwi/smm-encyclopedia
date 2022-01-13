import type {UnusedImage} from './UnusedImage';

export interface UnusedImage_Regular
    extends UnusedImage {

}

export interface UnusedImage_Regular_Stretch
    extends UnusedImage_Regular {

    get outImages(): OutImages_Stretch

    get waitingImages(): WaitingImages_Stretch


    get all(): readonly [this['outImages'], this['waitingImages'],]

}

export type PossibleUnusedImage_Regular = UnusedImage_Regular;


export type OutImages_Stretch = readonly [string,];
export type WaitingImages_Stretch = readonly [string,];
export type EveryImages_Stretch = readonly [OutImages_Stretch, WaitingImages_Stretch,];