import type {ClassWithEntityEnglishName}                                                           from 'core/ClassWithEnglishName'
import type {ImageIdentifier, ImageNumber, PossibleAmountOfImages, UnusedSMM1BigMushroomImageFile} from 'core/entity/file/UnusedSMM1BigMushroomImageFile'
import type {ImageName_BigMushroom_Unused_SMM1}                                                    from 'core/entity/images/unused/UnusedImage'
import type {UnusedImage_BigMushroom}                                                              from 'core/entity/images/unused/UnusedImage_BigMushroom'
import type {NullOr}                                                                               from 'util/types/nullable'

import {UnusedSMM1BigMushroomImageFileContainer as ImageFile} from 'core/entity/file/UnusedSMM1BigMushroomImageFile.container'
import {UnusedImage_BigMushroomContainer}                     from 'core/entity/images/unused/UnusedImage_BigMushroom.container'
import {UnusedImageBuilder}                                   from 'core/entity/images/unused/UnusedImage.builder'

/**
 * @predefinedBuilder
 */
export class UnusedImage_BigMushroomBuilder
    extends UnusedImageBuilder<UnusedImage_BigMushroom, ImageName_BigMushroom_Unused_SMM1> {

    //region -------------------- Fields --------------------

    #identifierMap = new Map<ImageIdentifier, PossibleImageNumber>()

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(entity: ClassWithEntityEnglishName, name: ImageName_BigMushroom_Unused_SMM1,) {
        super(entity, name,)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter & setter methods --------------------

    protected get _identifierMap(): ReadonlyMap<ImageIdentifier, PossibleImageNumber> {
        return this.#identifierMap
    }

    public setImage(identifier: ImageIdentifier, images: readonly ImageNumber[],): this
    public setImage(identifier: ImageIdentifier, amount: PossibleAmountOfImages,): this
    public setImage(identifier: ImageIdentifier,): this
    public setImage(identifier: ImageIdentifier, amount_or_images?: | PossibleAmountOfImages | readonly ImageNumber[],): this {
        if (amount_or_images == null)
            this.#identifierMap.set(identifier, null,)
        else if (typeof amount_or_images == 'number')
            this.#identifierMap.set(identifier, [...new Array(amount_or_images)].map((_, index,) => index as ImageNumber),)
        else
            this.#identifierMap.set(identifier, amount_or_images,)
        return this
    }

    //endregion -------------------- Getter & setter methods --------------------
    //region -------------------- Build utility methods --------------------

    static #createImages(entity: ClassWithEntityEnglishName, name: ImageName_BigMushroom_Unused_SMM1, identifier: ImageIdentifier, images: NullOr<readonly ImageNumber[]>,): readonly UnusedSMM1BigMushroomImageFile[] {
        return images == null
            ? [new ImageFile(entity, name, identifier,),]
            : images.map(image => new ImageFile(entity, name, identifier, image,))
    }

    //endregion -------------------- Build utility methods --------------------

    public override build(): UnusedImage_BigMushroom {
        const entity = this._entity,
            name = this.simpleImageName

        return new UnusedImage_BigMushroomContainer([...this._identifierMap.entries()].map(([identifier, images,]) =>
            UnusedImage_BigMushroomBuilder.#createImages(entity, name, identifier, images,).flat()))
    }

}


type PossibleImageNumber = NullOr<readonly ImageNumber[]>
