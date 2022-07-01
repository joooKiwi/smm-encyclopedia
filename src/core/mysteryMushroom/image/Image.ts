import type {ClassWithPath, ClimbingImage, DownImage, FallingAfterJumpImage, GoalPoleImage, JumpImage, PossibleBasicPath, PossibleImages, PossibleJapaneseImagePath, PossibleLeftVariationImagePath, PossiblePath, PossibleUnderwaterVariationImagePath, RunningImage, SwimmingImage, TauntImage, TurningImage, WaitingImage, WalkImage} from '../path/ClassWithPath';

export interface Image<T extends PossiblePath = PossiblePath, >
    extends ClassWithPath {

    get waitingImages(): WaitingImages<T>

    get tauntImages(): TauntImages<T>

    get downImages(): DownImages<T>

    get walkImages(): WalkImages<T>

    get runningImages(): RunningImages<T>

    get swimmingImages(): SwimmingImages<T>

    get jumpImages(): JumpImages<T>

    get fallingAfterJumpImages(): FallingAfterJumpImages<T>

    get turningImages(): TurningImages<T>

    get climbingImages(): ClimbingImages<T>

    get goalPoleImages(): GoalPoleImages<T>

}

export type BasicImage<T extends PossiblePath = PossiblePath, > = Image<T>;
export type ImageWithJapanese<T extends PossiblePath = PossiblePath, > = BasicImage<T>;
export type ImageWithLeftVariation<T extends PossiblePath = PossiblePath, > = BasicImage<T>;
export type ImageWithUnderwaterVariation<T extends PossiblePath = PossiblePath, > = BasicImage<T>;

//region -------------------- Possible images (array) --------------------

export type WaitingImages<T extends PossiblePath = PossiblePath, > = PossibleImages_Array<WaitingImage, T>

export type TauntImages<T extends PossiblePath = PossiblePath, > = PossibleImages_Array<TauntImage, T>;

export type DownImages<T extends PossiblePath = PossiblePath, > = PossibleImages_Array<DownImage, T>;

export type WalkImages<T extends PossiblePath = PossiblePath, > = readonly [
    PossibleImages_Array<WalkImage<0>, T>,
    PossibleImages_Array<WalkImage<1>, T>,
    PossibleImages_Array<WalkImage<2>, T>,
];

export type RunningImages<T extends PossiblePath = PossiblePath, > = readonly [
    PossibleImages_Array<RunningImage<0>, T>,
    PossibleImages_Array<RunningImage<1>, T>,
    PossibleImages_Array<RunningImage<2>, T>,
];

export type SwimmingImages<T extends PossiblePath = PossiblePath, > = readonly [
    PossibleImages_Array<SwimmingImage<0>, T>,
    PossibleImages_Array<SwimmingImage<1>, T>,
    PossibleImages_Array<SwimmingImage<2>, T>,
    PossibleImages_Array<SwimmingImage<3>, T>,
    PossibleImages_Array<SwimmingImage<4>, T>,
    PossibleImages_Array<SwimmingImage<5>, T>,
];

export type JumpImages<T extends PossiblePath = PossiblePath, > = readonly [
    PossibleImages_Array<JumpImage<0>, T>,
    PossibleImages_Array<JumpImage<1>, T>,
    PossibleImages_Array<JumpImage<2>, T>,
];

export type FallingAfterJumpImages<T extends PossiblePath = PossiblePath, > = PossibleImages_Array<FallingAfterJumpImage, T>;

export type TurningImages<T extends PossiblePath = PossiblePath, > = PossibleImages_Array<TurningImage, T>;

export type ClimbingImages<T extends PossiblePath = PossiblePath, > = readonly [
    PossibleImages_Array<ClimbingImage<0>, T>,
    PossibleImages_Array<ClimbingImage<1>, T>,
];

export type GoalPoleImages<T extends PossiblePath = PossiblePath, > = readonly [
    PossibleImages_Array<GoalPoleImage<0>, T>,
    PossibleImages_Array<GoalPoleImage<1>, T>,
];


export type PossibleImages_Array<V extends PossibleImages = PossibleImages, T extends PossiblePath = PossiblePath, > =
    | readonly []
    | readonly [`${PossibleBasicPath<T>}/${V}`,]
    | readonly [`${PossibleBasicPath<T>}/${V}`, `${PossibleJapaneseImagePath<T>}/${V}`,]
    | readonly [`${PossibleBasicPath<T>}/${V}`, `${PossibleLeftVariationImagePath<T>}/${V}`,]
    | readonly [`${PossibleBasicPath<T>}/${V}`, `${PossibleUnderwaterVariationImagePath<T>}/${V}`,];

//endregion -------------------- Possible images (array) --------------------
