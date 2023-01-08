import type {ClassWithEntityEnglishName}                                          from 'core/ClassWithEnglishName'
import type {ImageIdentifier, ImageNumber, ImageType, UnusedSMM1RegularImageFile} from 'core/entity/file/UnusedSMM1RegularImageFile'
import type {ImageName_Unused_SMM1}                                               from 'core/entity/images/unused/UnusedImage'
import type {UnusedImage_Regular}                                                 from 'core/entity/images/unused/UnusedImage_Regular'
import type {GameStyles}                                                          from 'core/gameStyle/GameStyles'
import type {ExtendedMap}                                                         from 'util/extended/ExtendedMap'

import {UnusedSMM1RegularImageFileContainer as ImageFile} from 'core/entity/file/UnusedSMM1RegularImageFile.container'
import {UnusedImage_RegularContainer}                     from 'core/entity/images/unused/UnusedImage_Regular.container'
import {UnusedImageBuilder}                               from 'core/entity/images/unused/UnusedImage.builder'
import {ExtendedMapContainer}                             from 'util/extended/ExtendedMap.container'

export class UnusedImage_RegularBuilder
    extends UnusedImageBuilder<UnusedImage_Regular, ImageName_Unused_SMM1> {

    //region -------------------- Fields --------------------

    readonly #type
    #identifierMap: ExtendedMap<GameStyles, ExtendedMap<ImageIdentifier, readonly ImageNumber[]>> = new ExtendedMapContainer()

    //endregion -------------------- Fields --------------------

    public constructor(entity: ClassWithEntityEnglishName, type: ImageType, name: ImageName_Unused_SMM1,) {
        super(entity, name,)
        this.#type = type
    }

    //region -------------------- Getter & setter methods --------------------


    protected get _type(): ImageType {
        return this.#type
    }

    protected get _identifierMap(): ExtendedMap<GameStyles, ExtendedMap<ImageIdentifier, readonly ImageNumber[]>> {
        return this.#identifierMap
    }

    public setImage(gameStyle: GameStyles, identifier: ImageIdentifier, image: ImageNumber,): this
    public setImage(gameStyle: GameStyles, identifier: ImageIdentifier, images: readonly ImageNumber[],): this
    public setImage(gameStyle: GameStyles, identifier: ImageIdentifier, images: | ImageNumber | readonly ImageNumber[],): this {
        const map = this.#identifierMap
        if (!map.has(gameStyle))
            this.#identifierMap.set(gameStyle, new ExtendedMapContainer(),)
        const imagesMap = map.get(gameStyle)!

        imagesMap.set(identifier, images instanceof Array ? images : [images],)
        return this
    }

    //endregion -------------------- Getter & setter methods --------------------

    static #createImageFiles(entity: ClassWithEntityEnglishName, gameStyle: GameStyles, name: ImageName_Unused_SMM1, type: ImageType, identifier: ImageIdentifier, numbers: readonly ImageNumber[],): readonly UnusedSMM1RegularImageFile[] {
        return numbers.map(number => new ImageFile(entity, gameStyle, name, type, identifier, number,))
    }


    public override build(): UnusedImage_Regular {
        const entity = this._entity,
            name = this.simpleImageName,
            type = this._type

        return new UnusedImage_RegularContainer(new Map(this._identifierMap
            .map((gameStyle, imagesMap,) => imagesMap.toArray()).toArray()
            .map(({key: gameStyle, value: imagesArray,},) => [gameStyle, imagesArray.map(({key: identifier, value: images,},) =>
                UnusedImage_RegularBuilder.#createImageFiles(entity, gameStyle, name, type, identifier, images,)),]))
        )
    }

}
