import type {ClassWithEntityEnglishName} from 'core/ClassWithEnglishName'
import type {UnusedImage}                from 'core/entity/images/unused/UnusedImage'
import type {Builder}                    from 'util/builder/Builder'

export abstract class UnusedImageBuilder<T extends UnusedImage, NAME extends string, >
    implements Builder<T> {

    //region -------------------- Fields --------------------

    readonly #entity
    readonly #simpleImageName: NAME

    //endregion -------------------- Fields --------------------

    protected constructor(entity: ClassWithEntityEnglishName, name: NAME,) {
        this.#entity = entity
        this.#simpleImageName = name
    }

    //region -------------------- Getter methods --------------------

    protected get _entity(): ClassWithEntityEnglishName {
        return this.#entity
    }

    public get simpleImageName(): NAME {
        return this.#simpleImageName
    }

    //endregion -------------------- Getter methods --------------------

    public abstract build(): T

}
