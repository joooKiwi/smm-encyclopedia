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

export interface PowerUpBySMM1GameStylesPriority
    extends PowerUpPriority {

    get smbImages(): readonly EntityImageFile[]

    get smb3Images(): readonly EntityImageFile[]

    get smwImages(): readonly EntityImageFile[]

    get nsmbuImages(): readonly EntityImageFile[]

}

export interface PowerUpByAllGameStylesPriority
    extends PowerUpBySMM1GameStylesPriority {

    get sm3dwImages(): readonly EntityImageFile[]

}

export type PossibleGameStyles = | readonly [GameStyles, GameStyles,] | readonly [GameStyles, GameStyles, GameStyles,] | readonly [GameStyles, GameStyles, GameStyles, GameStyles,]
export type ImagesCallback = () => readonly EntityImageFile[]
export type ImagesRetrieverCallback = (entity: Entities, gameStyle: GameStyles,) => readonly EntityImageFile[]
