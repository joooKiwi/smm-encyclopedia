import type {Entities}                      from 'core/entity/Entities'
import type {EntityImageFile}               from 'core/entity/file/EntityImageFile'
import type {ClassInAnySuperMarioMakerGame} from 'core/game/ClassInAnySuperMarioMakerGame'
import type {GameStyles}                    from 'core/gameStyle/GameStyles'
import type {Name}                          from 'lang/name/Name'

export interface PowerUpPriority {

    get name(): Name<string>

    get images(): readonly EntityImageFile[]

    get isIn(): ClassInAnySuperMarioMakerGame

}

export interface SMBPowerUpPriority
    extends PowerUpPriority {

    get smbImages(): readonly EntityImageFile[]

}

export interface SMB3PowerUpPriority
    extends PowerUpPriority {

    get smb3Images(): readonly EntityImageFile[]

}

export interface SMWPowerUpPriority
    extends PowerUpPriority {

    get smwImages(): readonly EntityImageFile[]

}

export interface NSMBUPowerUpPriority
    extends PowerUpPriority {

    get nsmbuImages(): readonly EntityImageFile[]

}

export interface SM3DWPowerUpPriority
    extends PowerUpPriority {

    get sm3dwImages(): readonly EntityImageFile[]

}

export interface PowerUpBySMM1GameStylesPriority
    extends PowerUpPriority,
        SMBPowerUpPriority,
        SMB3PowerUpPriority,
        SMWPowerUpPriority,
        NSMBUPowerUpPriority {}

export interface PowerUpByAllGameStylesPriority
    extends PowerUpBySMM1GameStylesPriority,
        SM3DWPowerUpPriority {}

export type PossibleGameStyles = | readonly [GameStyles, GameStyles,] | readonly [GameStyles, GameStyles, GameStyles,] | readonly [GameStyles, GameStyles, GameStyles, GameStyles,]
export type ImagesCallback = () => readonly EntityImageFile[]
export type ImagesCallbackByPriority<T extends PowerUpPriority, > = (priority: T,) => readonly EntityImageFile[]
export type ImagesRetrieverCallback = (entity: Entities, gameStyle: GameStyles,) => readonly EntityImageFile[]
