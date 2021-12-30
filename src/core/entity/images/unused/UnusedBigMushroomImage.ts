import type {UnusedImage} from './UnusedImage';

/**
 * An unused {@link Entities.BIG_MUSHROOM_CLASSIC} or {@link Entities.BIG_MUSHROOM_MODERN}
 * image for some specific entities.
 *
 * It can only be from a {@link Entities.KOOPA_CLOWN_CAR}, {@link Entities.GOOMBA} or {@link Entities.STRETCH}.
 *
 * It is also only applicable in the {@link GameStyles.SUPER_MARIO_BROS "Super Mario Bros." game style}
 * as well as only in the {@link Games.SUPER_MARIO_MAKER_1 "Super Mario Maker" game}.
 */
export interface UnusedBigMushroomImage
    extends UnusedImage {

    get all(): | EveryImages_ClownCar | EveryImages_Goomba | EveryImages_Stretch

}

export interface UnusedBigMushroomImage_ClownCar
    extends UnusedBigMushroomImage {

    get waitImages(): WaitingImages_ClownCar

    get angryImages(): AngryImages_ClownCar

    get blinkingImages(): BlinkingImages_ClownCar

    get weepingImages(): WeepingImages_ClownCar


    get all(): readonly [this['waitImages'], this['angryImages'], this['blinkingImages'], this['weepingImages'],]

}

export interface UnusedBigMushroomImage_Goomba
    extends UnusedBigMushroomImage {

    get damagingImages(): DamagingImages_Goomba

    get swimmingImages(): SwimmingImages_Goomba

    get walkingImages(): WalkingImages_Goomba

    get inBootImages(): InBootImages_Goomba


    get all(): readonly [this['damagingImages'], this['swimmingImages'], this['walkingImages'], this['inBootImages'],]

}

export interface UnusedBigMushroomInGameImage_Stretch
    extends UnusedBigMushroomImage {

    get waitImages1(): WaitImages1_Stretch

    get waitImages2(): WaitImages2_Stretch

    get waitImages3(): WaitImages3_Stretch

    get movingImages(): MovingImages_Stretch


    get all(): readonly [this['waitImages1'],this['waitImages3'],this['waitImages3'], this['movingImages'],]

}

export type PossibleUnusedBigMushroomImage = | UnusedBigMushroomImage_ClownCar | UnusedBigMushroomImage_Goomba | UnusedBigMushroomInGameImage_Stretch;


export type WaitingImages_ClownCar = readonly [string, string, string, string,];
export type AngryImages_ClownCar = readonly [string, string, string, string,];
export type BlinkingImages_ClownCar = readonly [string, string, string, string,];
export type WeepingImages_ClownCar = readonly [string, string, string, string,];
export type EveryImages_ClownCar = readonly [WaitingImages_ClownCar, AngryImages_ClownCar, BlinkingImages_ClownCar, WeepingImages_ClownCar,];

export type DamagingImages_Goomba = readonly [string,];
export type SwimmingImages_Goomba = readonly [string, string,];
export type WalkingImages_Goomba = readonly [string, string,];
export type InBootImages_Goomba = readonly [string,];
export type EveryImages_Goomba = readonly [DamagingImages_Goomba, SwimmingImages_Goomba, WalkingImages_Goomba, InBootImages_Goomba,];

export type WaitImages1_Stretch = readonly [string,];
export type WaitImages2_Stretch = readonly [string,];
export type WaitImages3_Stretch = readonly [string,];
export type MovingImages_Stretch = readonly [string,];
export type EveryImages_Stretch = readonly [WaitImages1_Stretch, WaitImages2_Stretch, WaitImages3_Stretch, MovingImages_Stretch,];
