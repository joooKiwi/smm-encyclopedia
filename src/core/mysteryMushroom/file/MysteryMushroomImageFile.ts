import type {PossibleFileName} from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {ImageFile}        from 'util/file/image/ImageFile'

/**
 * An {@link ImageFile} made to be related to a {@link MysteryMushrooms}
 *
 * @see ClimbingImageFile
 * @see GoalPoleImageFile
 * @see JumpImageFile
 * @see PressingDownImageFile
 * @see RunningImageFile
 * @see TauntImageFile
 * @see TurningImageFile
 * @see WaitingImageFile
 * @see WalkImageFile
 */
export type MysteryMushroomImageFile<NAME extends PossibleName = PossibleName, > = ImageFile<`entity/in game/M1 Player Chara - ${PossibleFileName}`, NAME, 'tiff'>

//region -------------------- Waiting --------------------

export type WaitingImageFile = MysteryMushroomImageFile<ImageFileName_Waiting>

type ImageFileName_Waiting = 'wait.0'

//endregion -------------------- Waiting --------------------
//region -------------------- Taunt --------------------

export type TauntImageFile = MysteryMushroomImageFile<ImageFileName_Taunt>

type ImageFileName_Taunt = 'appeal.0'

//endregion -------------------- Taunt --------------------
//region -------------------- Pressing ↓ --------------------

export type PressingDownImageFile = MysteryMushroomImageFile<ImageFileName_PressingDown>

type ImageFileName_PressingDown = 'stoop.0'

//endregion -------------------- Pressing ↓ --------------------
//region -------------------- Walk --------------------

export type WalkImageFile = MysteryMushroomImageFile<ImageFileName_Walk>

type ImageFileName_Walk = | 'walk.0'
                          | 'walk.1'
                          | 'walk.2'

//endregion -------------------- Walk --------------------
//region -------------------- Running --------------------

export type RunningImageFile = MysteryMushroomImageFile<ImageFileName_Running>

type ImageFileName_Running = | `b_dash.0`
                             | `b_dash.1`
                             | `b_dash.2`

//endregion -------------------- Running --------------------
//region -------------------- Swimming --------------------

export type SwimmingImageFile = MysteryMushroomImageFile<ImageFileName_Swimming>

type ImageFileName_Swimming = | 'swim.0'
                              | 'swim.1'
                              | 'swim.2'
                              | 'swim.3'
                              | 'swim.4'
                              | 'swim.5'

//endregion -------------------- Swimming --------------------
//region -------------------- Jump --------------------

export type JumpImageFile = MysteryMushroomImageFile<ImageFileName_Jump>

type ImageFileName_Jump = | 'jump.0'
                          | 'jump.1'
                          | 'jump.2'

//endregion -------------------- Jump --------------------
//region -------------------- Falling after a jump --------------------

export type FallingAfterAJumpImageFile = MysteryMushroomImageFile<ImageFileName_FallingAfterAJump>

type ImageFileName_FallingAfterAJump = 'jump_fall.0'

//endregion -------------------- Falling after a jump --------------------
//region -------------------- Turning --------------------

export type TurningImageFile = MysteryMushroomImageFile<ImageFileName_Turning>

type ImageFileName_Turning = 'turn.0'

//endregion -------------------- Turning --------------------
//region -------------------- Climbing --------------------

export type ClimbingImageFile = MysteryMushroomImageFile<ImageFileName_Climbing>

type ImageFileName_Climbing = | 'climb.0'
                              | 'climb.1'

//endregion -------------------- Climbing --------------------
//region -------------------- Goal pole --------------------

export type GoalPoleImageFile = MysteryMushroomImageFile<ImageFileName_GoalPole>

type ImageFileName_GoalPole = | 'pole.0'
                              | 'pole.1'

//endregion -------------------- Goal pole --------------------

type PossibleName =
    | ImageFileName_Waiting
    | ImageFileName_Taunt
    | ImageFileName_PressingDown
    | ImageFileName_Walk
    | ImageFileName_Running
    | ImageFileName_Swimming
    | ImageFileName_Jump | ImageFileName_FallingAfterAJump
    | ImageFileName_Turning
    | ImageFileName_Climbing
    | ImageFileName_GoalPole
