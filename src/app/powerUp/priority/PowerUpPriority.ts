import type {Name}                          from '../../../lang/name/Name'
import type {ClassInAnySuperMarioMakerGame} from '../../../core/game/ClassInAnySuperMarioMakerGame'
import type {GameStyles}                    from '../../../core/gameStyle/GameStyles'
import type {Entities}                      from '../../../core/entity/Entities'

export interface PowerUpPriority {

    get name(): Name<string>

    get images(): readonly string[]

    get isIn(): ClassInAnySuperMarioMakerGame

}

export interface PowerUpBySMM1GameStylesPriority
    extends PowerUpPriority {

    get smbImages(): readonly string[]

    get smb3Images(): readonly string[]

    get smwImages(): readonly string[]

    get nsmbuImages(): readonly string[]

}

export interface PowerUpByAllGameStylesPriority
    extends PowerUpBySMM1GameStylesPriority {

    get sm3dwImages(): readonly string[]

}

export type PossibleGameStyles = | readonly [GameStyles, GameStyles,] | readonly [GameStyles, GameStyles, GameStyles,] | readonly [GameStyles, GameStyles, GameStyles, GameStyles,]
export type ImagesCallback = () => readonly string[]
export type ImageRetrieverCallback = (entity: Entities, gameStyle: GameStyles,) => readonly string[]
