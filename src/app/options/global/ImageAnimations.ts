import type {CollectionHolder}                                  from '@joookiwi/collection'
import type {CompanionEnumSingleton, PossibleEnumerableValueBy} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}                                    from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleImageAnimation} from 'app/options/global/ImageAnimations.types'
import type {ClassWithValue}                          from 'util/types/ClassWithValue'

/**
 * The possible image animation as either
 *
 * <ul>
 *  <li>Separated → display the image animation individually</li>
 *  <li>Yes → Display the image animation</li>
 *  <li>No → Display no image animation</li>
 * </ul>
 */
export class ImageAnimations
    extends Enum<Ordinals, Names>
    implements ClassWithValue<PossibleImageAnimation> {

    //region -------------------- Enum instances --------------------

    public static readonly SEPARATED = new ImageAnimations('separated',)
    public static readonly YES =       new ImageAnimations(true,)
    public static readonly NO =        new ImageAnimations(false,)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<ImageAnimations, typeof ImageAnimations> = class CompanionEnum_ImageAnimations
        extends CompanionEnum<ImageAnimations, typeof ImageAnimations> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_ImageAnimations

        private constructor() {
            super(ImageAnimations,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_ImageAnimations()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #value

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(value: PossibleImageAnimation,) {
        super()
        this.#value = value
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get value(): PossibleImageAnimation {
        return this.#value
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    // public static getValueByValue<T, >(value: T,): ImageAnimationByValue<T>
    public static getValueByValue(value: Nullable<| ImageAnimations | boolean | string>,): ImageAnimations {
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

    public static getValue(value: PossibleEnumerableValueBy<ImageAnimations>,): ImageAnimations {
        return ImageAnimations.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<ImageAnimations> {
        return ImageAnimations.CompanionEnum.get.values
    }

    public static* [Symbol.iterator](): IterableIterator<ImageAnimations> {
        yield* ImageAnimations.CompanionEnum.get
    }

    //endregion -------------------- Enum methods --------------------

}
