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

    public static /*readonly*/ SEPARATED;
    public static /*readonly*/ YES;
    public static /*readonly*/ NO;

    static {
        this.SEPARATED = new ImageAnimations('separated',);
        this.YES =       new ImageAnimations(true,);
        this.NO =        new ImageAnimations(false,);
    }

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

    protected override get _static(): StaticReference<ImageAnimations> {
        return ImageAnimations;
    }

    //region -------------------- Enum value methods --------------------

    protected static override _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.value === value)
            ?? null;
    }

    protected static override _getValueByBoolean(value: boolean,) {
        return this.values.find(enumerable => enumerable.value === value)
            ?? null;
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
        return Enum.getValueOn(this, value,);
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }

    //endregion -------------------- Enum value methods --------------------

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
