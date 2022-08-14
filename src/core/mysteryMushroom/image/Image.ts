import type {BasePath}          from '../../../variables';
import type {EnglishNameOnFile} from '../MysteryMushrooms.types';

export interface Image<FILE extends EnglishNameOnFile = EnglishNameOnFile, > {

    get waitingImage(): WaitingImage<FILE>

    get tauntImage(): TauntImage<FILE>

    get pressingDownImage(): PressingDownImage<FILE>

    get walkImages(): WalkImages<FILE>

    get runningImages(): RunningImages<FILE>

    get swimmingImages(): SwimmingImages<FILE>

    get jumpImages(): JumpImages<FILE>

    get fallingAfterJumpImage(): FallingAfterJumpImage<FILE>

    get turningImage(): TurningImage<FILE>

    get climbingImages(): ClimbingImages<FILE>

    get goalPoleImages(): GoalPoleImages<FILE>

}


export type Path<FILE extends EnglishNameOnFile = EnglishNameOnFile, > = `/${BasePath}/entity/1 - SMB/In game/SMM1/Player Chara - ${FILE}`;

export type SingleImage<FILE extends EnglishNameOnFile = EnglishNameOnFile, IMAGE_FILE extends PossibleImages = PossibleImages, > = `${Path<FILE>}/${IMAGE_FILE}`;

//region -------------------- Specific image files --------------------

export type PossibleImages = | WaitingImageFile
                             | TauntImageFile
                             | PressingDownImageFile
                             | WalkImageFile
                             | RunningImageFile
                             | SwimmingImageFile
                             | JumpImageFile | FallingAfterJumpImageFile
                             | TurningImageFile
                             | ClimbingImageFile
                             | GoalPoleImageFile;

export type WaitingImageFile = 'wait.0.tiff';

export type TauntImageFile = 'appeal.0.tiff';

export type PressingDownImageFile = 'stoop.0.tiff';

export type WalkImageNumber = | 0 | 1 | 2;
export type WalkImageFile<N extends WalkImageNumber = WalkImageNumber, > = `walk.${N}.tiff`;

export type RunningImageNumber = | 0 | 1 | 2;
export type RunningImageFile<N extends RunningImageNumber = RunningImageNumber, > = `/b_dash.${N}.tiff`;

export type SwimmingImageNumber = | 0 | 1 | 2 | 3 | 4 | 5;
export type SwimmingImageFile<N extends SwimmingImageNumber = SwimmingImageNumber, > = `swim.${N}.tiff`;

export type JumpImageNumber = | 0 | 1 | 2;
export type JumpImageFile<N extends JumpImageNumber = JumpImageNumber> = `jump.${N}.tiff`;

export type FallingAfterJumpImageFile = 'jump_fall.0.tiff';

export type TurningImageFile = 'turn.0.tiff';

export type ClimbingImageNumber = | 0 | 1;
export type ClimbingImageFile<N extends ClimbingImageNumber = ClimbingImageNumber, > = `climb.${N}.tiff`;

export type GoalPoleImageNumber = | 0 | 1;
export type GoalPoleImageFile<N extends GoalPoleImageNumber = GoalPoleImageNumber, > = `pole.${N}.tiff`;

//endregion -------------------- Specific image files --------------------
//region -------------------- Possible images (array) --------------------

export type WaitingImage<FILE extends EnglishNameOnFile = EnglishNameOnFile, > =
    SingleImage<FILE, WaitingImageFile>;

export type TauntImage<FILE extends EnglishNameOnFile = EnglishNameOnFile, > =
    SingleImage<FILE, TauntImageFile>;

export type PressingDownImage<FILE extends EnglishNameOnFile = EnglishNameOnFile, > =
    SingleImage<FILE, PressingDownImageFile>;

export type WalkImages<FILE extends EnglishNameOnFile = EnglishNameOnFile, > = readonly [
    SingleImage<FILE, WalkImageFile<0>>,
    SingleImage<FILE, WalkImageFile<1>>,
    SingleImage<FILE, WalkImageFile<2>>,
];

export type RunningImages<FILE extends EnglishNameOnFile = EnglishNameOnFile, > = readonly [
    SingleImage<FILE, RunningImageFile<0>>,
    SingleImage<FILE, RunningImageFile<1>>,
    SingleImage<FILE, RunningImageFile<2>>,
];

export type SwimmingImages<FILE extends EnglishNameOnFile = EnglishNameOnFile, > = readonly [
    SingleImage<FILE, SwimmingImageFile<0>>,
    SingleImage<FILE, SwimmingImageFile<1>>,
    SingleImage<FILE, SwimmingImageFile<2>>,
    SingleImage<FILE, SwimmingImageFile<3>>,
    SingleImage<FILE, SwimmingImageFile<4>>,
    SingleImage<FILE, SwimmingImageFile<5>>,
];

export type JumpImages<FILE extends EnglishNameOnFile = EnglishNameOnFile, > = | readonly [SingleImage<FILE, JumpImageFile<0>>,]
                                                                               | readonly [SingleImage<FILE, JumpImageFile<0>>, SingleImage<FILE, JumpImageFile<1>>, SingleImage<FILE, JumpImageFile<2>>,];

export type FallingAfterJumpImage<FILE extends EnglishNameOnFile = EnglishNameOnFile, > =
    SingleImage<FILE, FallingAfterJumpImageFile>;

export type TurningImage<FILE extends EnglishNameOnFile = EnglishNameOnFile, > =
    SingleImage<FILE, TurningImageFile>;

export type ClimbingImages<FILE extends EnglishNameOnFile = EnglishNameOnFile, > = readonly [
    SingleImage<FILE, ClimbingImageFile<0>>,
    SingleImage<FILE, ClimbingImageFile<1>>,
];

export type GoalPoleImages<FILE extends EnglishNameOnFile = EnglishNameOnFile, > = readonly [
    SingleImage<FILE, GoalPoleImageFile<0>>,
    SingleImage<FILE, GoalPoleImageFile<1>>,
];

//endregion -------------------- Possible images (array) --------------------
