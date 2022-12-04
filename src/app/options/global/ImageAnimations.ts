import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleImageAnimation} from 'app/options/global/ImageAnimations.types'
import type {ClassWithValue}                          from 'util/types/ClassWithValue'
import type {Nullable}                                from 'util/types/nullable'

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
    //region -------------------- Enum fields --------------------

    static [index: number]: ImageAnimations

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    readonly #value

    //endregion -------------------- Fields --------------------

    private constructor(value: PossibleImageAnimation,) {
        super()
        this.#value = value
    }

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
        if(value instanceof this)
            return value
        const valueFound = this.values.find(it => it.value === value)
        if (valueFound == null)
            throw new ReferenceError(`No "${this.name}" could be found by this value "${value}".`)
        return valueFound
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return ImageAnimations
    }

    public static getValue(value: PossibleValueByEnumerable<ImageAnimations>,): ImageAnimations {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<ImageAnimations> {
        return Enum.getValuesOn(this)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}
