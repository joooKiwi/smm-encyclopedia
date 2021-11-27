import {Enum}                                                                                                                                                                               from '../../../util/enum/Enum';
import {Characters}                                                                                                                                                                         from '../../../lang/Characters';
import {EnglishName, EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './SoundStates.types';
import {ClassWithEnglishName}                                                                                                                                                               from '../../../entity/ClassWithEnglishName';
import {ReactElement}                                                                                                                                                                       from '../../../util/react/ReactProperty';

export abstract class SoundStates
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<EnglishName> {

    //region -------------------- Enum instances --------------------

    public static readonly STANDBY = new class SoundState_Standby extends SoundStates {

        public getElements(playElement: () => ReactElement, pauseElement: () => ReactElement, stopElement: () => ReactElement): readonly ReactElement[] {
            return [playElement(),];
        }

    }('standby',);
    public static readonly PAUSED =  new class SoundState_Paused extends SoundStates {

        public getElements(playElement: () => ReactElement, pauseElement: () => ReactElement, stopElement: () => ReactElement): readonly ReactElement[] {
            return [pauseElement(), stopElement(),];
        }

    } ('paused',);
    public static readonly PLAYING = new class SoundState_Playing extends SoundStates {

        public getElements(playElement: () => ReactElement, pauseElement: () => ReactElement, stopElement: () => ReactElement): readonly ReactElement[] {
            return [playElement(), stopElement(),];
        }

    }('playing',);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES?: EnumArray;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #englishName;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: EnglishName,) {
        super(SoundStates);
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

    public static getValue(value: | null | undefined,): null
    public static getValue<O extends Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<PS extends PossibleStringValue = PossibleStringValue, >(nameOrCharacter: PS,): EnumByPossibleString<PS>
    public static getValue<S extends string, >(nameOrCharacter: S,): EnumByString<S>
    public static getValue<I extends Characters, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): Characters
    public static getValue(value: PossibleValue,): | Characters | null
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
        return this.#VALUES ??= [
            this.STANDBY,
            this.PAUSED,
            this.PLAYING,
        ];
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------
}