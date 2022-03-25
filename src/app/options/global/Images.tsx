import {lazy} from 'react';

import type {ClassWithValue}                                                                                                                                                        from './ClassWithValue';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './Images.types';
import type {ImageProperties}                                                                                                                                                       from '../../tools/images/properties/ImageProperties';
import type {ReactElement}                                                                                                                                                          from '../../../util/react/ReactProperty';
import type {StaticReference}                                                                                                                                                       from '../../../util/enum/Enum.types';

import {EMPTY_REACT_ELEMENT} from '../../../util/emptyReactVariables';
import {Enum}                from '../../../util/enum/Enum';

//region -------------------- dynamic imports --------------------

const Image = lazy(() => import('../../tools/images/Image'));

//endregion -------------------- dynamic imports --------------------

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

    public static /*readonly*/ YES;
    public static /*readonly*/ NO;

    static {
        this.YES = new class Images_Yes extends Images {

            public renderComponent(properties: _ImageProperties,): ReactElement {
                return <Image {...properties}/>;
            }

        }(true,);
        this.NO =  new class Images_No extends Images {

            public renderComponent(): ReactElement {
                return EMPTY_REACT_ELEMENT;
            }

        }(false,);
    }

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: Images;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #value;

    //endregion -------------------- Attributes --------------------

    private constructor(value: boolean,) {
        super();
        this.#value = value;
    }

    //region -------------------- Getter methods --------------------

    public get value() {
        return this.#value;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract renderComponent(properties: _ImageProperties,):ReactElement;

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<Images> {
        return Images;
    }

    //region -------------------- Enum value methods --------------------

    protected static _getValueByBoolean(value: boolean,) {
        return this.values.find(enumerable => enumerable.value === value)
            ?? null;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends Images = Images, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): Images
    public static getValue(value: PossibleValue,): | Images | null
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

interface _ImageProperties
    extends Omit<ImageProperties, 'ref'> {

    ref?: Exclude<ImageProperties['ref'], string>

}
