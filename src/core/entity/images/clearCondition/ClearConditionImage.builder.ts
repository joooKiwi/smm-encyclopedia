import type {ClassWithEnglishName}                                 from 'core/ClassWithEnglishName'
import type {PossibleEnglishName}                                  from 'core/entity/Entities.types'
import type {ClearConditionImageFile}                              from 'core/entity/file/ClearConditionImageFile'
import type {ClearConditionImage}                                  from 'core/entity/images/clearCondition/ClearConditionImage'
import type {ImageNumber, PossibleAmountOfImages, SimpleImageName} from 'core/entity/images/clearCondition/ClearConditionImage.types'
import type {GameStyles}                                           from 'core/gameStyle/GameStyles'

import {AbstractImageBuilder}                           from 'core/entity/images/AbstractImage.builder'
import {ClearConditionImageContainer as ImageContainer} from 'core/entity/images/clearCondition/ClearConditionImage.container'
import {ClearConditionImageFileContainer as ImageFile}  from 'core/entity/file/ClearConditionImageFile.container'

export class ClearConditionImageBuilder<const NAME extends NonNullable<SimpleImageName> = NonNullable<SimpleImageName>, >
    extends AbstractImageBuilder<NAME, PossibleAmountOfImages> {

    //region -------------------- Fields --------------------

    readonly #entity

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(entity: ClassWithEnglishName<PossibleEnglishName>, simpleImageName: NAME,)
    public constructor(entity: ClassWithEnglishName<PossibleEnglishName>, simpleImageName: NAME, imageNumber: PossibleAmountOfImages,)
    public constructor(entity: ClassWithEnglishName<PossibleEnglishName>, simpleImageName: NAME, imageNumber?: PossibleAmountOfImages,) {
        super(simpleImageName, imageNumber,)
        this.#entity = entity
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Build utility methods --------------------

    protected _createImageFile(gameStyle: GameStyles, imageNumber: Nullable<ImageNumber>,) {
        return new ImageFile(gameStyle, this.#entity, this.simpleImageName, imageNumber,)
    }

    protected _createNewMap(...numbers: readonly Nullable<ImageNumber>[]): ReadonlyMap<GameStyles, readonly ClearConditionImageFile[]> {
        return new Map(this._gameStyles.map(gameStyle => [
            gameStyle,
            numbers.map(number => this._createImageFile(gameStyle, number,)),
        ]))
    }

    protected _createImages(): ReadonlyMap<GameStyles, readonly ClearConditionImageFile[]> {
        const imageNumber = this.imageNumber

        return this._createNewMap(imageNumber == null ? null : imageNumber - 1 as ImageNumber,)
    }

    //endregion -------------------- Build utility methods --------------------

    public override build(): ClearConditionImage {
        return new ImageContainer(this._createImages(),)
    }

}
