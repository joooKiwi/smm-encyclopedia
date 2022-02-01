import type {ClassWithValue}                                                                                                                                                                                from './ClassWithValue';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleImageAnimation, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './ImageAnimations.types';
import type {StaticReference}                                                                                                                                                                               from '../../../util/enum/Enum.types';

import {Enum} from '../../../util/enum/Enum';

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

    public static readonly ANIMATION = new ImageAnimations('separated',);
    public static readonly YES =       new ImageAnimations(true,);
    public static readonly NO =        new ImageAnimations(false,);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: ImageAnimations;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #value;

    //endregion -------------------- Attributes --------------------

    private constructor(value: PossibleImageAnimation,) {
        super();
        this.#value = value;
    }

    //region -------------------- Getter methods --------------------

    public get value() {
        return this.#value;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<ImageAnimations> {
        return ImageAnimations;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends ImageAnimations = ImageAnimations, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): ImageAnimations
    public static getValue(value: PossibleValue,): | ImageAnimations | null
    public static getValue(value: PossibleValue,) {
        return value == null
            ? null
            : typeof value === 'string'
                ? Reflect.get(this, value.toUpperCase(),)
                    ?? this.values.find(enumerable => enumerable.value === value)
                    ?? null
                : typeof value === 'number'
                    ? this[value] ?? null
                    : typeof value == 'boolean'
                        ? this.values.find(enumerable => enumerable.value === value)
                        : value;
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
