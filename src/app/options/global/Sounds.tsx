import {lazy} from 'react';

import type {ClassWithValue}                                                                                                                                                        from './ClassWithValue';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './Sounds.types';
import type {ReactElement}                                                                                                                                                          from '../../../util/react/ReactProperty';
import type {SimpleSoundProperties}                                                                                                                                                 from '../../tools/sounds/properties/SimpleSoundProperties';
import type {StaticReference}                                                                                                                                                       from '../../../util/enum/Enum.types';

import {EMPTY_REACT_ELEMENT} from '../../../util/emptyReactVariables';
import {Enum}                from '../../../util/enum/Enum';

//region -------------------- dynamic imports --------------------

const SimpleSound = lazy(() => import('../../tools/sounds/SimpleSound'));

//endregion -------------------- dynamic imports --------------------

/**
 * The possible sound as either
 *
 * <ul>
 *  <li>Yes → Display the sound viewer</li>
 *  <li>No → Display no sound viewer</li>
 * </ul>
 *
 * @see SimpleSound
 */
export abstract class Sounds
    extends Enum<Ordinals, Names>
    implements ClassWithValue<boolean> {

    //region -------------------- Enum instances --------------------

    public static /*readonly*/ YES;
    public static /*readonly*/ NO;

    static {
        this.YES = new class Sounds_Yes extends Sounds {

            public renderComponent(properties: SimpleSoundProperties,): ReactElement {
                return <SimpleSound {...properties}/>;
            }

        }(true,);
        this.NO =  new class Sounds_No extends Sounds {

            public renderComponent(): ReactElement {
                return EMPTY_REACT_ELEMENT;
            }

        }(false,);
    }

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: Sounds;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #value;

    //endregion -------------------- Attributes --------------------

    private constructor(value: boolean,) {
        super();
        this.#value = value;
    }

    //region -------------------- Getter methods --------------------

    public get value(): boolean {
        return this.#value;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract renderComponent(properties: SimpleSoundProperties,):ReactElement;

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<Sounds> {
        return Sounds;
    }


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
    public static getValue<I extends Sounds = Sounds, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): Sounds
    public static getValue(value: PossibleValue,): | Sounds | null
    public static getValue(value: PossibleValue,) {
        return Enum.getValueOn(this, value,);
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
