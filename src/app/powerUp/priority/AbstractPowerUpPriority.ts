import type {ClassInAnySuperMarioMakerGame}                                               from '../../../core/game/ClassInAnySuperMarioMakerGame'
import type {Name}                                                                        from '../../../lang/name/Name'
import type {ObjectHolder}                                                                from '../../../util/holder/ObjectHolder'
import type {ImageRetrieverCallback, ImagesCallback, PossibleGameStyles, PowerUpPriority} from './PowerUpPriority'

import {DelayedObjectHolderContainer} from '../../../util/holder/DelayedObjectHolder.container'
import {EMPTY_ARRAY}                  from '../../../util/emptyVariables'
import {Entities}                     from '../../../core/entity/Entities'
import {GameStyles}                   from '../../../core/gameStyle/GameStyles'
import {Themes}                       from '../../../core/theme/Themes'
import {Times}                        from '../../../core/time/Times'

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

    public static FIRST_EDITOR_IMAGE_CALLBACK: ImageRetrieverCallback = (entity, gameStyle,) => [this.EDITOR_IMAGE_CALLBACK(entity, gameStyle,)[0],]
    public static EDITOR_IMAGE_CALLBACK: ImageRetrieverCallback = (entity, gameStyle,) => entity.editorImage.get(false, gameStyle, Themes.GROUND, Times.DAY,)
    public static IN_GAME_IMAGE_CALLBACK: ImageRetrieverCallback = (entity, gameStyle,) => entity.inGameImage.get(false, gameStyle, Themes.GROUND,)
    public static CLEAR_CONDITION_IMAGE_CALLBACK: ImageRetrieverCallback = (entity, gameStyle,) => entity.clearConditionImage.get(gameStyle,)

    //endregion -------------------- Image callbacks --------------------

    readonly #nameHolder: ObjectHolder<Name<string>>
    readonly #imagesHolder: ObjectHolder<readonly string[]>
    readonly #isIn

    //endregion -------------------- Fields --------------------

    protected constructor(nameCallback: () => Name<string>, imagesCallback: ImagesCallback, isIn: ClassInAnySuperMarioMakerGame,) {
        this.#nameHolder = new DelayedObjectHolderContainer(nameCallback)
        this.#imagesHolder = new DelayedObjectHolderContainer(imagesCallback)
        this.#isIn = isIn
    }

    //region -------------------- Getter methods --------------------

    public get name(): Name<string> {
        return this.#nameHolder.get
    }

    public get images(): readonly string[] {
        return this.#imagesHolder.get
    }

    public get isIn() {
        return this.#isIn
    }


    public static getEditorImages(entity: Entities, gameStyles: | GameStyles | PossibleGameStyles,): readonly string[] {
        return (gameStyles instanceof Array ? gameStyles : [gameStyles])
            .map(gameStyle => this.EDITOR_IMAGE_CALLBACK(entity, gameStyle,)).flat()
    }

    //endregion -------------------- Getter methods --------------------

}
