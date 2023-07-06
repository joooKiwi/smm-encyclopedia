import type {CollectionHolder}                                       from '@joookiwi/collection'
import type {BasicCompanionEnumSingleton, PossibleEnumerableValueBy} from '@joookiwi/enumerable'
import {BasicCompanionEnum, Enum}                                    from '@joookiwi/enumerable'

import type {ClassWithValue}  from 'util/types/ClassWithValue'
import type {ImageProperties} from 'app/tools/images/properties/ImageProperties'
import type {Names, Ordinals} from 'app/options/global/Images.types'
import type {Nullable}        from 'util/types/nullable'
import type {ReactElement}    from 'util/react/ReactProperties'

import Image from 'app/tools/images/Image'

/**
 * The possible image as either
 *
 * <ul>
 *  <li>Yes → Display the images</li>
 *  <li>No → Display no images (and by definition no {@link ImageAnimations image animation})</li>
 * </ul>
 */
export abstract class Images
    extends Enum<Ordinals, Names>
    implements ClassWithValue<boolean> {

    //region -------------------- Enum instances --------------------

    public static readonly YES = new class Images_Yes extends Images {

        public override renderComponent(properties: ImageProperties,) {
            return <Image {...properties}/>
        }

    }(true,)
    public static readonly NO =  new class Images_No extends Images {

        public override renderComponent() {
            return null
        }

    }(false,)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: BasicCompanionEnumSingleton<Images, typeof Images> = class CompanionEnum_Images
        extends BasicCompanionEnum<Images, typeof Images> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_Images

        private constructor() {
            super(Images,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_Images()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #value

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(value: boolean,) {
        super()
        this.#value = value
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get value(): boolean {
        return this.#value
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract renderComponent(properties: ImageProperties,): ReactElement


    // public static getValueByValue<T, >(value: T,): ImagesByValue<T>
    public static getValueByValue(value: Nullable<| Images | boolean>,): Images {
        if (value == null)
            throw new TypeError(`No "${this.name}" could be found by a null value.`)
        if (value instanceof this)
            return value
        const valueFound = this.values.find(it => it.value === value)
        if (valueFound == null)
            throw new ReferenceError(`No "${this.name}" could be found by this value "${value}".`)
        return valueFound
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(value: PossibleEnumerableValueBy<Images>,): Images {
        return Images.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<Images> {
        return Images.CompanionEnum.get.values
    }

    public static* [Symbol.iterator](): IterableIterator<Images> {
        yield* Images.CompanionEnum.get
    }

    //endregion -------------------- Enum methods --------------------

}
