import type {PossibleEnglishName, PossibleFileName}                                                                    from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {ImageFallbackName as ClimbingImageFallbackName, ImageFileName as ClimbingImageFileName}                   from 'core/mysteryMushroom/file/ClimbingImageFile'
import type {ImageFallbackName as FallingAfterAJumpImageFallbackName, ImageFileName as FallingAfterAJumpImageFileName} from 'core/mysteryMushroom/file/FallingAfterAJumpImageFile'
import type {ImageFallbackName as GoalPoleImageFallbackName, ImageFileName as GoalPoleImageFileName}                   from 'core/mysteryMushroom/file/GoalPoleImageFile'
import type {ImageFallbackName as JumpImageFallbackName, ImageFileName as JumpImageFileName}                           from 'core/mysteryMushroom/file/JumpImageFile'
import type {ImageFallbackName as PressingDownImageFallbackName, ImageFileName as PressingDownImageFileName}           from 'core/mysteryMushroom/file/PressingDownImageFile'
import type {ImageFallbackName as RunningImageFallbackName, ImageFileName as RunningImageFileName}                     from 'core/mysteryMushroom/file/RunningImageFile'
import type {ImageFallbackName as SwimmingImageFallbackName, ImageFileName as SwimmingImageFileName}                   from 'core/mysteryMushroom/file/SwimmingImageFile'
import type {ImageFallbackName as TauntImageFallbackName, ImageFileName as TauntImageFileName}                         from 'core/mysteryMushroom/file/TauntImageFile'
import type {ImageFallbackName as TurningImageFallbackName, ImageFileName as TurningImageFileName}                     from 'core/mysteryMushroom/file/TurningImageFile'
import type {ImageFallbackName as WaitingImageFallbackName, ImageFileName as WaitingImageFileName}                     from 'core/mysteryMushroom/file/WaitingImageFile'
import type {ImageFallbackName as WalkImageFallbackName, ImageFileName as WalkImageFileName}                           from 'core/mysteryMushroom/file/WalkImageFile'
import type {ImageFile}                                                                                                from 'util/file/image/ImageFile'

export interface MysteryMushroomImageFile<NAME extends PossibleImageFileName = PossibleImageFileName, PARTIAL_FALLBACK extends PossibleImagePartialFallbackName = PossibleImagePartialFallbackName, >
    extends ImageFile<ImageFilePath, NAME, ImageFileExtension, PossibleImageFallbackName<PARTIAL_FALLBACK>> {
}

export type ImageFilePath = `entity/1 - SMB/In game/SMM1/Player Chara - ${PossibleFileName}`

export type PossibleImageFileName =
    | WaitingImageFileName
    | TauntImageFileName
    | PressingDownImageFileName
    | WalkImageFileName
    | RunningImageFileName
    | SwimmingImageFileName
    | JumpImageFileName | FallingAfterAJumpImageFileName
    | TurningImageFileName
    | ClimbingImageFileName
    | GoalPoleImageFileName

export type ImageFileExtension = 'tiff'

export type PossibleImageFallbackName<PARTIAL_FALLBACK extends PossibleImagePartialFallbackName = PossibleImagePartialFallbackName, > = `${PossibleEnglishName} (${PARTIAL_FALLBACK})`
export type PossibleImagePartialFallbackName =
    | WaitingImageFallbackName
    | TauntImageFallbackName
    | PressingDownImageFallbackName
    | WalkImageFallbackName
    | RunningImageFallbackName
    | SwimmingImageFallbackName
    | JumpImageFallbackName | FallingAfterAJumpImageFallbackName
    | TurningImageFallbackName
    | ClimbingImageFallbackName
    | GoalPoleImageFallbackName
