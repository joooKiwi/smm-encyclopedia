import {Builder}     from '../../../../util/builder/Builder'
import {UnusedImage} from './UnusedImage'

export abstract class UnusedImageBuilder<T extends UnusedImage, N extends string, >
    implements Builder<T> {

    //region -------------------- Fields --------------------

    readonly #simpleImageName: N

    //endregion -------------------- Fields --------------------

    protected constructor(name: N,) {
        this.#simpleImageName = name
    }

    //region -------------------- Getter & setter methods --------------------

    public get simpleImageName(): N {
        return this.#simpleImageName
    }

    //endregion -------------------- Getter & setter methods --------------------

    public abstract build(): T

}
