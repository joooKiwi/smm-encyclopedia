import type {ClassInAnySuperMarioMakerGame}                                               from '../../../core/game/ClassInAnySuperMarioMakerGame'
import type {Entities}                                                                    from '../../../core/entity/Entities'
import type {ImageRetrieverCallback, PossibleGameStyles, PowerUpBySMM1GameStylesPriority} from './PowerUpPriority'
import type {ObjectHolder}                                                                from '../../../util/holder/ObjectHolder'

import {AbstractPowerUpPriority}      from './AbstractPowerUpPriority'
import {DelayedObjectHolderContainer} from '../../../util/holder/DelayedObjectHolder.container'
import {GameStyles}                   from '../../../core/gameStyle/GameStyles'
import {ObjectHolders}                from '../../../util/holder/objectHolders'

//region -------------------- Import from deconstruction --------------------

const {SUPER_MARIO_BROS, SUPER_MARIO_BROS_3, SUPER_MARIO_WORLD, NEW_SUPER_MARIO_BROS_U,} = GameStyles

//endregion -------------------- Import from deconstruction --------------------

export abstract class AbstractPowerUpBySMM1GameStylesPriority
    extends AbstractPowerUpPriority
    implements PowerUpBySMM1GameStylesPriority {

    //region -------------------- Fields --------------------

    readonly #smbImagesHolder: ObjectHolder<readonly string[]>
    readonly #smb3ImagesHolder: ObjectHolder<readonly string[]>
    readonly #smwImagesHolder: ObjectHolder<readonly string[]>
    readonly #nsmbuImagesHolder: ObjectHolder<readonly string[]>

    //endregion -------------------- Fields --------------------

    protected constructor(entity: Entities, gameStylesDisplayed: | GameStyles | PossibleGameStyles, callback: ImageRetrieverCallback, isIn: ClassInAnySuperMarioMakerGame,) {
        super(() => entity.reference.nameContainer,
            () => (gameStylesDisplayed instanceof Array ? gameStylesDisplayed : [gameStylesDisplayed]).map(gameStyle => callback(entity, gameStyle)).flat(),
            isIn,)
        this.#smbImagesHolder = entity.reference.isInSuperMarioBrosStyle ? new DelayedObjectHolderContainer(() => callback(entity, SUPER_MARIO_BROS)) : ObjectHolders.EMPTY_ARRAY
        this.#smb3ImagesHolder = entity.reference.isInSuperMarioBros3Style ? new DelayedObjectHolderContainer(() => callback(entity, SUPER_MARIO_BROS_3)) : ObjectHolders.EMPTY_ARRAY
        this.#smwImagesHolder = entity.reference.isInSuperMarioWorldStyle ? new DelayedObjectHolderContainer(() => callback(entity, SUPER_MARIO_WORLD)) : ObjectHolders.EMPTY_ARRAY
        this.#nsmbuImagesHolder = entity.reference.isInNewSuperMarioBrosUStyle ? new DelayedObjectHolderContainer(() => callback(entity, NEW_SUPER_MARIO_BROS_U)) : ObjectHolders.EMPTY_ARRAY
    }

    //region -------------------- Getter methods --------------------

    public get smbImages(): readonly string[] {
        return this.#smbImagesHolder.get
    }

    public get smb3Images(): readonly string[] {
        return this.#smb3ImagesHolder.get
    }

    public get smwImages(): readonly string[] {
        return this.#smwImagesHolder.get
    }

    public get nsmbuImages(): readonly string[] {
        return this.#nsmbuImagesHolder.get
    }

    //endregion -------------------- Getter methods --------------------

}
