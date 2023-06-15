import type {EntityImageFile}     from 'core/entity/file/EntityImageFile'
import type {PossibleGameAcronym} from 'core/gameStyle/GameStyles.types'

export interface InGameSMM2ImageFile
    extends EntityImageFile<ImageFilePath, PossibleInGameSMM2ImageFileName, 'tiff', PossibleInGameSMM2ImageFallbackName> {
}

export type ImageFilePath = `in game/${ImagePath}`

export type ImageType = | 'Enemy' | 'Object' | 'Player'
/** A simple type containing the koopaling file name */
export type KoopalingImageFileName = | 'Iggy' | 'Larry' | 'Lemmy' | 'Ludwig' | 'Morton' | 'Roy' | 'Wendy'
/** A simple type for the blooper & the mini blooper file name */
export type BlooperImageFileName = `Gesso${| '' | 'Mini'}`
/** A simple type for the key, cursed key and phanto file name*/
export type KeyAndPhantoImageFileName = 'Key' | 'Key2' | 'Phanto'
/** A simple type containing the liquid in the game (water, poison & lava) */
export type LiquidImageFileName = `${| 'Magma' | 'Poison' | 'Water'}Half`
/** A simple type containing every block object (from ?, ice, empty, snake and others)*/
export type BlockImageFileName = | `Block${| 'Kara' | 'Katai' | 'Kori' | 'Kumo' | 'Onpu' | 'Pow' | 'Renga' | `Snake${| '' | 2}` | 'Tomei' | 'Tuta'}`
                                 | 'StartBlock'
export type ShoeImageFileName = `KutsuKuribo${| 'A' | 'B'}`
export type YoshiProjectileImageFileName = `Yoshi${| 'Fire' | 'Poison'}`
/** A simple type containing the projectile names */
export type ProjectileImageFileName = | 'Superball' | 'Arrow' | 'LinkBomb'
type ObjectImageFileName = | 'Balloon'
type ImagePath = `${PossibleGameAcronym} ${ImageType} - ${ImageName_SMM2}`
export type ImageName_SMM2 = | KoopalingImageFileName | BlooperImageFileName | KeyAndPhantoImageFileName | LiquidImageFileName | BlockImageFileName
                             | ShoeImageFileName | YoshiProjectileImageFileName
                             | ProjectileImageFileName | ObjectImageFileName

type PossibleInGameSMM2ImageFileName_SMM3DW = |'TractorBubble_Alb'
type PossibleInGameSMM2ImageFileName_NSMBU = never
type PossibleInGameSMM2ImageFileName_4Styles = | 'startblock'
                                               | `${| 'walk' | 'effect' | 'ring' | 'fire'}.${| 0 | 1 | 2}`
                                               | `${| 'wait' | 'body' | 'top'}.${| 0 | 1 | 2 | 3}`
                                               | `balloon${| '' | 2}.0` | 'superball' | 'arrow'
                                               | 'ball.0' | 'ball_specular' | 'wand'
export type PossibleInGameSMM2ImageFileName = | PossibleInGameSMM2ImageFileName_4Styles | PossibleInGameSMM2ImageFileName_NSMBU | PossibleInGameSMM2ImageFileName_SMM3DW

export type PossibleInGameSMM2ImageFallbackName = 'In game - SMM2'
