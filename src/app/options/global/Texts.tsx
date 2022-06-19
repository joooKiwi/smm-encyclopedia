import {lazy} from 'react';

import type {ClassWithValue}                                                                                                                                                        from './ClassWithValue';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './Texts.types';
import type {ReactElement}                                                                                                                                                          from '../../../util/react/ReactProperty';
import type {StaticReference}                                                                                                                                                       from '../../../util/enum/Enum.types';

import {EMPTY_REACT_ELEMENT}                 from '../../../util/emptyReactVariables';
import {Enum}                                from '../../../util/enum/Enum';
import {PossibleTextContent, TextProperties} from '../../tools/text/properties/TextProperties';
import {YesOrNoTextProperties}               from '../../tools/text/properties/YesOrNoTextProperties';
import {BooleanTextProperties}               from '../../tools/text/properties/BooleanTextProperties';
import {BooleanResultTextProperties}         from '../../tools/text/properties/BooleanResultTextProperties';
import {NameProperties}                      from '../../../lang/name/component/Name.properties';

//region -------------------- dynamic imports --------------------

const TextComponent =              lazy(() => import('../../tools/text/TextComponent'));
const NameComponent =              lazy(() => import('../../../lang/name/component/Name.component'));
const YesOrNoResultTextComponent = lazy(() => import('../../tools/text/YesOrNoResultTextComponent'));
const BooleanTextComponent =       lazy(() => import('../../tools/text/BooleanTextComponent'));
const BooleanResultTextComponent = lazy(() => import('../../tools/text/BooleanResultTextComponent'));

//endregion -------------------- dynamic imports --------------------

/**
 * The possible text as either
 *
 * <ul>
 *  <li>Yes → Display the text</li>
 *  <li>No → Display no text</li>
 * </ul>
 *
 * @see TextComponent
 * @see YesOrNoResultTextComponent
 * @see BooleanTextComponent
 * @see BooleanResultTextComponent
 */
export abstract class Texts
    extends Enum<Ordinals, Names>
    implements ClassWithValue<boolean> {

    //region -------------------- Enum instances --------------------

    public static /*readonly*/ YES;
    public static /*readonly*/ NO;

    static {
        this.YES = new class Texts_Yes extends Texts {

            public override renderTextComponent<T extends PossibleTextContent = PossibleTextContent, >(properties: _TextProperties<T>,): ReactElement {
                return <TextComponent {...properties}/>;
            }

            public override renderNameComponent(properties: _NameProperties,): ReactElement {
                return <NameComponent {...properties}/>;
            }

            public override renderYesNoComponent(properties: _YesOrNoTextProperties,): ReactElement {
                return <YesOrNoResultTextComponent {...properties}/>;
            }

            public override renderBooleanComponent(properties: _BooleanTextProperties,): ReactElement {
                return <BooleanTextComponent {...properties}/>;
            }

            public override renderBooleanResultComponent(properties: _BooleanResultTextProperties,): ReactElement {
                return <BooleanResultTextComponent {...properties}/>;
            }

        }(true,);
        this.NO =  new class Texts_No extends Texts {

            public override renderTextComponent(): ReactElement {
                return EMPTY_REACT_ELEMENT;
            }

            public override renderNameComponent(): ReactElement {
                return EMPTY_REACT_ELEMENT;
            }

            public override renderYesNoComponent(): ReactElement {
                return EMPTY_REACT_ELEMENT;
            }

            public override renderBooleanComponent(): ReactElement {
                return EMPTY_REACT_ELEMENT;
            }

            public override renderBooleanResultComponent(): ReactElement {
                return EMPTY_REACT_ELEMENT;
            }

        }(false,);
    }

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: Texts;

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

    public abstract renderTextComponent<T extends PossibleTextContent = PossibleTextContent, >(properties: _TextProperties<T>,): ReactElement;

    public abstract renderNameComponent(properties: _NameProperties,): ReactElement;

    public abstract renderYesNoComponent(properties: _YesOrNoTextProperties,): ReactElement;

    public abstract renderBooleanComponent(properties: _BooleanTextProperties,): ReactElement;

    public abstract renderBooleanResultComponent(properties: _BooleanResultTextProperties,): ReactElement;

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<Texts> {
        return Texts;
    }

    //region -------------------- Enum value methods --------------------

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
    public static getValue<I extends Texts = Texts, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): Texts
    public static getValue(value: PossibleValue,): | Texts | null
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

interface _TextProperties<T extends PossibleTextContent = PossibleTextContent, >
    extends Omit<TextProperties<T>, 'ref'> {

    ref?: Exclude<TextProperties<T>['ref'], string>

}

interface _NameProperties
    extends Omit<NameProperties, 'ref'> {

    ref?: Exclude<NameProperties['ref'], string>

}

interface _YesOrNoTextProperties
    extends Omit<YesOrNoTextProperties, 'ref'> {

    ref?: Exclude<YesOrNoTextProperties['ref'], string>

}

interface _BooleanTextProperties
    extends Omit<BooleanTextProperties, 'ref'> {

    ref?: Exclude<BooleanTextProperties['ref'], string>

}

interface _BooleanResultTextProperties
    extends Omit<BooleanResultTextProperties, 'ref'> {

    ref?: Exclude<BooleanResultTextProperties['ref'], string>

}
