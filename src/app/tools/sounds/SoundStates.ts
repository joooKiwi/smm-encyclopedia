import type {EnglishName, EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './SoundStates.types';
import type {ClassWithEnglishName}                                                                                                                                                               from '../../../core/ClassWithEnglishName';
import type {StaticReference}                                                                                                                                                                    from '../../../util/enum/Enum.types';
import type {ReactElement}                                                                                                                                                                       from '../../../util/react/ReactProperty';
import type {SoundSubElementsHolder}                                                                                                                                                             from './holder/SoundSubElementsHolder';

import {Enum} from '../../../util/enum/Enum';

export abstract class SoundStates
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<EnglishName> {

    //region -------------------- Enum instances --------------------

    public static readonly STANDBY = new class SoundStates_Standby extends SoundStates {

        public override getElements({playElement,}: SoundSubElementsHolder,): readonly ReactElement[] {
            return [playElement(),];
        }

    }('standby',);
    public static readonly PAUSED =  new class SoundStates_Paused extends SoundStates {

        public override getElements({playElement, stopElement,}: SoundSubElementsHolder,): readonly ReactElement[] {
            return [playElement(), stopElement(),];
        }

    }('paused',);
    public static readonly PLAYING = new class SoundStates_Playing extends SoundStates {

        public override getElements({pauseElement, stopElement,}: SoundSubElementsHolder,): readonly ReactElement[] {
            return [pauseElement(), stopElement(),];
        }

    }('playing',);
    public static readonly EXCEPTION = new class SoundStates_Exception extends SoundStates {

        public override getElements({exceptionElement,}: SoundSubElementsHolder,): readonly ReactElement[] {
            return [exceptionElement(),];
        }

    }('exception',);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: SoundStates;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #englishName;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: EnglishName,) {
        super();
        this.#englishName = englishName;
    }

    //region -------------------- Getter methods --------------------

    public get englishName(): EnglishName {
        return this.#englishName;
    }

    public get englishNameInHtml(): EnglishName {
        return this.englishName;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract getElements(elementsHolder: SoundSubElementsHolder,): readonly ReactElement[];

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<SoundStates> {
        return SoundStates;
    }

    //region -------------------- Enum value methods --------------------

    public static override _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.englishName === value)
            ?? null;
    }

    public static getValue(value: | null | undefined,): null
    public static getValue<O extends Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(nameOrCharacter: S,): EnumByPossibleString<S>
    public static getValue<S extends string, >(nameOrCharacter: S,): EnumByString<S>
    public static getValue<I extends SoundStates, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): SoundStates
    public static getValue(value: PossibleValue,): | SoundStates | null
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