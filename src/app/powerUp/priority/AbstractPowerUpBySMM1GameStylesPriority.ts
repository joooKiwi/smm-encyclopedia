import type {ImagesRetrieverCallback, PossibleGameStyles, PowerUpBySMM1GameStylesPriority} from 'app/powerUp/priority/PowerUpPriority'
import type {Entities}                                                                     from 'core/entity/Entities'
import type {EntityImageFile}                                                              from 'core/entity/file/EntityImageFile'
import type {ClassInAnySuperMarioMakerGame}                                                from 'core/game/ClassInAnySuperMarioMakerGame'
import type {ObjectHolder}                                                                 from 'util/holder/ObjectHolder'

import {AbstractPowerUpPriority}      from 'app/powerUp/priority/AbstractPowerUpPriority'
import {GameStyles}                   from 'core/gameStyle/GameStyles'
import {DelayedObjectHolderContainer} from 'util/holder/DelayedObjectHolder.container'
import {ObjectHolders}                from 'util/holder/ObjectHolders'

//region -------------------- Import from deconstruction --------------------

const {SUPER_MARIO_BROS, SUPER_MARIO_BROS_3, SUPER_MARIO_WORLD, NEW_SUPER_MARIO_BROS_U,} = GameStyles

//endregion -------------------- Import from deconstruction --------------------

export abstract class AbstractPowerUpBySMM1GameStylesPriority
    extends AbstractPowerUpPriority
    implements PowerUpBySMM1GameStylesPriority {

    //region -------------------- Fields --------------------

    readonly #smbImagesHolder: ObjectHolder<readonly EntityImageFile[]>
    readonly #smb3ImagesHolder: ObjectHolder<readonly EntityImageFile[]>
    readonly #smwImagesHolder: ObjectHolder<readonly EntityImageFile[]>
    readonly #nsmbuImagesHolder: ObjectHolder<readonly EntityImageFile[]>

    //endregion -------------------- Fields --------------------

    protected constructor(entity: Entities, gameStylesDisplayed: | GameStyles | PossibleGameStyles, callback: ImagesRetrieverCallback, isIn: ClassInAnySuperMarioMakerGame,) {
        super(() => entity.reference.nameContainer,
            () => (gameStylesDisplayed instanceof Array ? gameStylesDisplayed : [gameStylesDisplayed]).map(gameStyle => callback(entity, gameStyle)).flat(),
            isIn,)
        this.#smbImagesHolder = entity.reference.isInSuperMarioBrosStyle ? new DelayedObjectHolderContainer(() => callback(entity, SUPER_MARIO_BROS)) : ObjectHolders.EMPTY_ARRAY
        this.#smb3ImagesHolder = entity.reference.isInSuperMarioBros3Style ? new DelayedObjectHolderContainer(() => callback(entity, SUPER_MARIO_BROS_3)) : ObjectHolders.EMPTY_ARRAY
        this.#smwImagesHolder = entity.reference.isInSuperMarioWorldStyle ? new DelayedObjectHolderContainer(() => callback(entity, SUPER_MARIO_WORLD)) : ObjectHolders.EMPTY_ARRAY
        this.#nsmbuImagesHolder = entity.reference.isInNewSuperMarioBrosUStyle ? new DelayedObjectHolderContainer(() => callback(entity, NEW_SUPER_MARIO_BROS_U)) : ObjectHolders.EMPTY_ARRAY
    }

    //region -------------------- Getter methods --------------------

    public get smbImages(): readonly EntityImageFile[] {
        return this.#smbImagesHolder.get
    }

    public get smb3Images(): readonly EntityImageFile[] {
        return this.#smb3ImagesHolder.get
    }

    public get smwImages(): readonly EntityImageFile[] {
        return this.#smwImagesHolder.get
    }

    public get nsmbuImages(): readonly EntityImageFile[] {
        return this.#nsmbuImagesHolder.get
    }

    //endregion -------------------- Getter methods --------------------

}
