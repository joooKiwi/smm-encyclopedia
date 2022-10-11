import type {BasePath}         from '../../../variables'
import type {PossibleFileName} from '../MysteryMushrooms.types'

export interface Image<FILE extends PossibleFileName = PossibleFileName, > {

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


export type Path<FILE extends PossibleFileName = PossibleFileName, > = `/${BasePath}/entity/1 - SMB/In game/SMM1/Player Chara - ${FILE}`

export type SingleImage<FILE extends PossibleFileName = PossibleFileName, IMAGE_FILE extends PossibleImages = PossibleImages, > = `${Path<FILE>}/${IMAGE_FILE}`

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
                             | GoalPoleImageFile

export type WaitingImageFile = 'wait.0.tiff'

export type TauntImageFile = 'appeal.0.tiff'

export type PressingDownImageFile = 'stoop.0.tiff'

type WalkImageNumber = | 0 | 1 | 2
export type WalkImageFile<N extends WalkImageNumber = WalkImageNumber, > = `walk.${N}.tiff`

type RunningImageNumber = | 0 | 1 | 2
export type RunningImageFile<N extends RunningImageNumber = RunningImageNumber, > = `b_dash.${N}.tiff`

type SwimmingImageNumber = | 0 | 1 | 2 | 3 | 4 | 5
export type SwimmingImageFile<N extends SwimmingImageNumber = SwimmingImageNumber, > = `swim.${N}.tiff`

type JumpImageNumber = | 0 | 1 | 2
export type JumpImageFile<N extends JumpImageNumber = JumpImageNumber> = `jump.${N}.tiff`

export type FallingAfterJumpImageFile = 'jump_fall.0.tiff'

export type TurningImageFile = 'turn.0.tiff'

type ClimbingImageNumber = | 0 | 1
export type ClimbingImageFile<N extends ClimbingImageNumber = ClimbingImageNumber, > = `climb.${N}.tiff`

type GoalPoleImageNumber = | 0 | 1
export type GoalPoleImageFile<N extends GoalPoleImageNumber = GoalPoleImageNumber, > = `pole.${N}.tiff`

//endregion -------------------- Specific image files --------------------
//region -------------------- Possible images (array) --------------------

export type WaitingImage<FILE extends PossibleFileName = PossibleFileName, > =
    SingleImage<FILE, WaitingImageFile>

export type TauntImage<FILE extends PossibleFileName = PossibleFileName, > =
    SingleImage<FILE, TauntImageFile>

export type PressingDownImage<FILE extends PossibleFileName = PossibleFileName, > =
    SingleImage<FILE, PressingDownImageFile>

export type WalkImages<FILE extends PossibleFileName = PossibleFileName, > = readonly [
    SingleImage<FILE, WalkImageFile<0>>,
    SingleImage<FILE, WalkImageFile<1>>,
    SingleImage<FILE, WalkImageFile<2>>,
]

export type RunningImages<FILE extends PossibleFileName = PossibleFileName, > = readonly [
    SingleImage<FILE, RunningImageFile<0>>,
    SingleImage<FILE, RunningImageFile<1>>,
    SingleImage<FILE, RunningImageFile<2>>,
]

export type SwimmingImages<FILE extends PossibleFileName = PossibleFileName, > = readonly [
    SingleImage<FILE, SwimmingImageFile<0>>,
    SingleImage<FILE, SwimmingImageFile<1>>,
    SingleImage<FILE, SwimmingImageFile<2>>,
    SingleImage<FILE, SwimmingImageFile<3>>,
    SingleImage<FILE, SwimmingImageFile<4>>,
    SingleImage<FILE, SwimmingImageFile<5>>,
]

export type JumpImages<FILE extends PossibleFileName = PossibleFileName, > = | readonly [SingleImage<FILE, JumpImageFile<0>>,]
                                                                             | readonly [SingleImage<FILE, JumpImageFile<0>>, SingleImage<FILE, JumpImageFile<1>>, SingleImage<FILE, JumpImageFile<2>>,]

export type FallingAfterJumpImage<FILE extends PossibleFileName = PossibleFileName, > =
    SingleImage<FILE, FallingAfterJumpImageFile>

export type TurningImage<FILE extends PossibleFileName = PossibleFileName, > =
    SingleImage<FILE, TurningImageFile>

export type ClimbingImages<FILE extends PossibleFileName = PossibleFileName, > = readonly [
    SingleImage<FILE, ClimbingImageFile<0>>,
    SingleImage<FILE, ClimbingImageFile<1>>,
]

export type GoalPoleImages<FILE extends PossibleFileName = PossibleFileName, > = readonly [
    SingleImage<FILE, GoalPoleImageFile<0>>,
    SingleImage<FILE, GoalPoleImageFile<1>>,
]

//endregion -------------------- Possible images (array) --------------------
