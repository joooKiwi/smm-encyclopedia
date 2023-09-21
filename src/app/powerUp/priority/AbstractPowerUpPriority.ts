import type {Lazy} from '@joookiwi/lazy'
import {lazy}      from '@joookiwi/lazy'

import type {ImagesCallback, ImagesRetrieverCallback, PossibleGameStyles, PowerUpPriority} from 'app/powerUp/priority/PowerUpPriority'
import type {Entities}                                                                     from 'core/entity/Entities'
import type {EntityImageFile}                                                              from 'core/entity/file/EntityImageFile'
import type {ClassInAnySuperMarioMakerGame}                                                from 'core/game/ClassInAnySuperMarioMakerGame'
import type {Name}                                                                         from 'lang/name/Name'

import {GameStyles}  from 'core/gameStyle/GameStyles'
import {Themes}      from 'core/theme/Themes'
import {Times}       from 'core/time/Times'
import {EMPTY_ARRAY} from 'util/emptyVariables'

//region -------------------- Import from deconstruction --------------------

const {SUPER_MARIO_BROS, SUPER_MARIO_BROS_3, SUPER_MARIO_WORLD, NEW_SUPER_MARIO_BROS_U, SUPER_MARIO_3D_WORLD,} = GameStyles

//endregion -------------------- Import from deconstruction --------------------

export abstract class AbstractPowerUpPriority
    implements PowerUpPriority {

    //region -------------------- Fields --------------------

    protected static _EMPTY_CALLBACK = () => EMPTY_ARRAY

    //region -------------------- Game styles --------------------

    public static readonly SMB_AND_SMB3 = [SUPER_MARIO_BROS, SUPER_MARIO_BROS_3,] as const
    public static readonly SMW_AND_NSMBU = [SUPER_MARIO_WORLD, NEW_SUPER_MARIO_BROS_U,] as const

    public static readonly SMB_SMB3_AND_SMW = [SUPER_MARIO_BROS, SUPER_MARIO_BROS_3, SUPER_MARIO_WORLD,] as const
    public static readonly SMB3_SMW_AND_NSMBU = [SUPER_MARIO_BROS_3, SUPER_MARIO_WORLD, NEW_SUPER_MARIO_BROS_U,] as const

    public static readonly SMB_SMB3_SMW_AND_NSMBU = GameStyles.gameStyles_smm1
    public static readonly SMB3_SMW_NSMBU_AND_SM3DW = [SUPER_MARIO_BROS_3, SUPER_MARIO_WORLD, NEW_SUPER_MARIO_BROS_U, SUPER_MARIO_3D_WORLD,] as const

    public static readonly ALL_GAME_STYLES = GameStyles.values

    //endregion -------------------- Game styles --------------------
    //region -------------------- Image callbacks --------------------

    public static FIRST_EDITOR_IMAGE_CALLBACK: ImagesRetrieverCallback = (entity, gameStyle,) => [this.EDITOR_IMAGE_CALLBACK(entity, gameStyle,)[0],]
    public static FIRST_IN_GAME_IMAGE_CALLBACK: ImagesRetrieverCallback = (entity, gameStyle,) => [this.IN_GAME_IMAGE_CALLBACK(entity, gameStyle,)[0],]
    public static EDITOR_IMAGE_CALLBACK: ImagesRetrieverCallback = (entity, gameStyle,) => entity.editorImage.get(gameStyle, Themes.GROUND, Times.DAY,)
    public static IN_GAME_IMAGE_CALLBACK: ImagesRetrieverCallback = (entity, gameStyle,) => entity.inGameImage.get(gameStyle,)
    public static FIRST_EDITOR_IN_NSMBU_AND_IN_GAME_IN_OTHER_IMAGE_CALLBACK: ImagesRetrieverCallback = (entity, gameStyle) => gameStyle === GameStyles.NEW_SUPER_MARIO_BROS_U ? this.EDITOR_IMAGE_CALLBACK(entity, gameStyle,) : this.FIRST_IN_GAME_IMAGE_CALLBACK(entity, gameStyle,)

    //endregion -------------------- Image callbacks --------------------

    readonly #nameHolder: Lazy<Name<string>>
    readonly #imagesHolder: Lazy<readonly EntityImageFile[]>
    readonly #isIn

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    protected constructor(nameCallback: () => Name<string>,
                          imagesCallback: ImagesCallback,
                          isIn: ClassInAnySuperMarioMakerGame,) {
        this.#nameHolder = lazy(nameCallback,)
        this.#imagesHolder = lazy(imagesCallback,)
        this.#isIn = isIn
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get name(): Name<string> {
        return this.#nameHolder.value
    }

    public get images(): readonly EntityImageFile[] {
        return this.#imagesHolder.value
    }

    public get isIn(): ClassInAnySuperMarioMakerGame {
        return this.#isIn
    }


    public static getEditorImages(entity: Entities, gameStyles: | GameStyles | PossibleGameStyles,): readonly EntityImageFile[] {
        return (gameStyles instanceof Array ? gameStyles : [gameStyles])
            .map(gameStyle => this.EDITOR_IMAGE_CALLBACK(entity, gameStyle,)).flat()
    }

    //endregion -------------------- Getter methods --------------------

}
