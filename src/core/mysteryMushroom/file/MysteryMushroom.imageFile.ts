import type {ImageFile} from 'util/file/image/ImageFile'

/** An {@link ImageFile} made to be related to a {@link MysteryMushrooms} */
export type MysteryMushroomImageFile<FILE_NAME extends string = string, >
    = | WaitingImageFile<FILE_NAME>
      | TauntImageFile<FILE_NAME>
      | PressingDownImageFile<FILE_NAME>
      | WalkImageFile<FILE_NAME>
      | RunningImageFile<FILE_NAME>
      | SwimmingImageFile<FILE_NAME>
      | JumpImageFile<FILE_NAME>
      | FallingAfterAJumpImageFile<FILE_NAME>
      | TurningImageFile<FILE_NAME>
      | ClimbingImageFile<FILE_NAME>
      | GoalPoleImageFile<FILE_NAME>


export type WaitingImageFile<FILE_NAME extends string = string, >
    = ImageFile<`entity/in game/M1 Player Chara - ${FILE_NAME}`, 'wait.0', 'tiff'>

export type TauntImageFile<FILE_NAME extends string = string, >
    = ImageFile<`entity/in game/M1 Player Chara - ${FILE_NAME}`, 'appeal.0', 'tiff'>

export type PressingDownImageFile<FILE_NAME extends string = string, >
    = ImageFile<`entity/in game/M1 Player Chara - ${FILE_NAME}`, 'stoop.0', 'tiff'>

export type WalkImageFile<FILE_NAME extends string = string, >
    = ImageFile<`entity/in game/M1 Player Chara - ${FILE_NAME}`, | 'walk.0' | 'walk.1' | 'walk.2', 'tiff'>

export type RunningImageFile<FILE_NAME extends string = string, >
    = ImageFile<`entity/in game/M1 Player Chara - ${FILE_NAME}`, | `b_dash.0` | `b_dash.1` | `b_dash.2`, 'tiff'>

export type SwimmingImageFile<FILE_NAME extends string = string, >
    = ImageFile<`entity/in game/M1 Player Chara - ${FILE_NAME}`, | 'swim.0' | 'swim.1' | 'swim.2' | 'swim.3' | 'swim.4' | 'swim.5', 'tiff'>

export type JumpImageFile<FILE_NAME extends string = string, >
    = ImageFile<`entity/in game/M1 Player Chara - ${FILE_NAME}`, | 'jump.0' | 'jump.1' | 'jump.2', 'tiff'>

export type FallingAfterAJumpImageFile<FILE_NAME extends string = string, >
    = ImageFile<`entity/in game/M1 Player Chara - ${FILE_NAME}`, 'jump_fall.0', 'tiff'>

export type TurningImageFile<FILE_NAME extends string = string, >
    = ImageFile<`entity/in game/M1 Player Chara - ${FILE_NAME}`, 'turn.0', 'tiff'>

export type ClimbingImageFile<FILE_NAME extends string = string, >
    = ImageFile<`entity/in game/M1 Player Chara - ${FILE_NAME}`, | 'climb.0' | 'climb.1', 'tiff'>

export type GoalPoleImageFile<FILE_NAME extends string = string, >
    = ImageFile<`entity/in game/M1 Player Chara - ${FILE_NAME}`, | 'pole.0' | 'pole.1', 'tiff'>
