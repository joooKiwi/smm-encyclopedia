import type {ClassWithEntityEnglishName}                                         from 'core/ClassWithEnglishName'
import type {PowerUpEditorImageFile}                                             from 'core/entity/file/PowerUpEditorImageFile'
import type {PossiblePowerUpAmountOfImages, PowerUpImageNumber, SimpleImageName} from 'core/entity/images/editor/EditorImage.types'
import type {PowerUpEditorImage}                                                 from 'core/entity/images/editor/PowerUpEditorImage'
import type {GameStyles}                                                         from 'core/gameStyle/GameStyles'
import type {Builder}                                                            from 'util/builder/Builder'

import {AbstractImageBuilder}                         from 'core/entity/images/AbstractImage.builder'
import {PowerUpEditorImageContainer}                  from 'core/entity/images/editor/PowerUpEditorImage.container'
import {PowerUpEditorImageFileContainer as ImageFile} from 'core/entity/file/PowerUpEditorImageFile.container'

// @ts-ignore
export class PowerUpEditorImageBuilder
    extends AbstractImageBuilder<NonNullable<SimpleImageName>, PossiblePowerUpAmountOfImages>
    implements Builder<PowerUpEditorImage> {

    //region -------------------- Fields --------------------

    readonly #entity

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    /**
     * Create a {@link EditorImage} with both
     * [`${NAME}_00.png`, `${NAME}Uni_00.png`,]
     * or [`${NAME}_01.png`, `${NAME}Uni_01.png`,]
     *
     * @param entity The reference to retrieve its name
     * @param gameStyle The game style (if null, its every game style)
     * @param simpleImageName The basic name
     * @param imageNumber The image number
     */
    public constructor(entity: ClassWithEntityEnglishName, gameStyle: Nullable<GameStyles>, simpleImageName: NonNullable<SimpleImageName>, imageNumber: PossiblePowerUpAmountOfImages = 1,) {
        super(simpleImageName, imageNumber,)
        this.#entity = entity
        gameStyle == null ? this.setAllGameStyles() : this._setGameStyle(gameStyle)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    protected get _entity(): ClassWithEntityEnglishName {
        return this.#entity
    }

    //endregion -------------------- Getter methods --------------------

    #createImages(): ReadonlyMap<GameStyles, readonly PowerUpEditorImageFile[]> {
        const imageNumber = this.imageNumber! - 1 as PowerUpImageNumber,
            name = this.simpleImageName,
            entity = this._entity

        return new Map(this._gameStyles.map(gameStyle => [gameStyle, [
            new ImageFile(gameStyle, entity, name, imageNumber, true,),
            new ImageFile(gameStyle, entity, name, imageNumber, false,),
        ],]))
    }

    public override build(): PowerUpEditorImage {
        // @ts-ignore
        return new PowerUpEditorImageContainer(this.#createImages(),)
    }

}
