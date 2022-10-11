import type {ImageName_Unused_SMM1}            from './UnusedImage'
import type {ExtendedMap}                      from '../../../../util/extended/ExtendedMap'
import type {UnusedImage_Regular}              from './UnusedImage_Regular'
import type {GameStyles as OriginalGameStyles} from '../../../gameStyle/GameStyles'

import {ExtendedMapContainer}         from '../../../../util/extended/ExtendedMap.container'
import {GameStyles}                   from '../GameStyles'
import {UnusedImage_RegularContainer} from './UnusedImage_Regular.container'
import {UnusedImageBuilder}           from './UnusedImage.builder'

export class UnusedImage_RegularBuilder
    extends UnusedImageBuilder<UnusedImage_Regular, ImageName_Unused_SMM1> {

    //region -------------------- Fields --------------------

    #identifierMap: ExtendedMap<OriginalGameStyles, ExtendedMap<ImageIdentifier, PossibleImageNumber>> = new ExtendedMapContainer()

    //endregion -------------------- Fields --------------------

    public constructor(name: ImageName_Unused_SMM1,) {
        super(name,)
    }

    //region -------------------- Getter & setter methods --------------------

    protected get _identifierMap(): ExtendedMap<OriginalGameStyles, ExtendedMap<ImageIdentifier, PossibleImageNumber>> {
        return this.#identifierMap
    }

    public setImage(gameStyle: OriginalGameStyles, identifier: ImageIdentifier, image: ImageNumber,): this
    public setImage(gameStyle: OriginalGameStyles, identifier: ImageIdentifier, images: readonly ImageNumber[],): this
    public setImage(gameStyle: OriginalGameStyles, identifier: ImageIdentifier, images: | ImageNumber | readonly ImageNumber[],): this {
        const map = this.#identifierMap
        if (!map.has(gameStyle))
            this.#identifierMap.set(gameStyle, new ExtendedMapContainer(),)
        const imagesMap = map.get(gameStyle)!

        imagesMap.set(identifier, images instanceof Array ? images : [images],)
        return this
    }

    //endregion -------------------- Getter & setter methods --------------------

    protected _getImagePath(gameStyle: OriginalGameStyles, identifier: ImageIdentifier, numbers: readonly ImageNumber[],): readonly string[] {
        return numbers.map(number => `${GameStyles.getValue(gameStyle).gamePath_inGameSmm1}Enemy - ${this.simpleImageName}/${identifier}.${number}.tiff`)
    }


    public override build(): UnusedImage_Regular {
        return new UnusedImage_RegularContainer(new Map(this._identifierMap
            .map((gameStyle, imagesMap,) => imagesMap.toArray()).toArray()
            .map(({key: gameStyle, value: imagesArray,},) =>
                [gameStyle, imagesArray.map(({key: identifier, value: images,},) => this._getImagePath(gameStyle, identifier, images,)),]))
        )
    }

}

export type ImageIdentifier = | 'out' | 'wait' | 'weep' | 'down_switch_hatena_Alb'
export type ImageNumber = | 0 | 1 | 2 | 4 | 5 | 6 | 7 | `00${| 0 | 4}`
type PossibleImageNumber = readonly ImageNumber[]
