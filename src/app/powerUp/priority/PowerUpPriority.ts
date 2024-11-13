import type {Array} from '@joookiwi/type'

import type {Entities}                      from 'core/entity/Entities'
import type {EntityImageFile}               from 'core/entity/file/EntityImageFile'
import type {ClassInAnySuperMarioMakerGame} from 'core/game/ClassInAnySuperMarioMakerGame'
import type {GameStyles}                    from 'core/gameStyle/GameStyles'
import type {Name}                          from 'lang/name/Name'

export interface PowerUpPriority {

    get name(): Name<string>

    get images(): Array<EntityImageFile>

    get isIn(): ClassInAnySuperMarioMakerGame

}

export interface SMBPowerUpPriority
    extends PowerUpPriority {

    get smbImages(): Array<EntityImageFile>

}

export interface SMB3PowerUpPriority
    extends PowerUpPriority {

    get smb3Images(): Array<EntityImageFile>

}

export interface SMWPowerUpPriority
    extends PowerUpPriority {

    get smwImages(): Array<EntityImageFile>

}

export interface NSMBUPowerUpPriority
    extends PowerUpPriority {

    get nsmbuImages(): Array<EntityImageFile>

}

export interface SM3DWPowerUpPriority
    extends PowerUpPriority {

    get sm3dwImages(): Array<EntityImageFile>

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
export type ImagesCallback = () => Array<EntityImageFile>
export type ImagesCallbackByPriority<T extends PowerUpPriority, > = (priority: T,) => Array<EntityImageFile>
export type ImagesRetrieverCallback = (entity: Entities, gameStyle: GameStyles,) => Array<EntityImageFile>
