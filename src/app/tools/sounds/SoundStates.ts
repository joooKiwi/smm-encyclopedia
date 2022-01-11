import type {EnglishName, EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './SoundStates.types';
import type {ClassWithEnglishName}                                                                                                                                                               from '../../../entity/ClassWithEnglishName';
import type {StaticReference}                                                                                                                                                                    from '../../../util/enum/Enum.types';
import type {ReactElement}                                                                                                                                                                       from '../../../util/react/ReactProperty';

import {Enum} from '../../../util/enum/Enum';

export abstract class SoundStates
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<EnglishName> {

    //region -------------------- Enum instances --------------------

    public static readonly STANDBY = new class SoundStates_Standby extends SoundStates {

        public getElements(playElement: () => ReactElement, pauseElement: () => ReactElement, stopElement: () => ReactElement): readonly ReactElement[] {
            return [playElement(),];
        }

    }('standby',);
    public static readonly PAUSED =  new class SoundStates_Paused extends SoundStates {

        public getElements(playElement: () => ReactElement, pauseElement: () => ReactElement, stopElement: () => ReactElement): readonly ReactElement[] {
            return [playElement(), stopElement(),];
        }

    } ('paused',);
    public static readonly PLAYING = new class SoundStates_Playing extends SoundStates {

        public getElements(playElement: () => ReactElement, pauseElement: () => ReactElement, stopElement: () => ReactElement): readonly ReactElement[] {
            return [pauseElement(), stopElement(),];
        }

    }('playing',);

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

    public abstract getElements(playElement: () => ReactElement, pauseElement: () => ReactElement, stopElement: () => ReactElement,): readonly ReactElement[];

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<SoundStates> {
        return SoundStates;
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
        return value == null
            ? null
            : typeof value === 'string'
                ? Reflect.get(this, value.toUpperCase(),)
                    ?? this.values.find(enumeration => enumeration.englishName === value)
                    ?? null
                : typeof value == 'number'
                    ? this.values[value] ?? null
                    : value ?? null;
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------
}