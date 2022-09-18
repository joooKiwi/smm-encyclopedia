import type {EnglishName, EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, IsSourceFoundCallback, Names, Ordinals, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './Validators.types';
import type {ClassWithEnglishName}                                                                                                                                                                                      from '../../../core/ClassWithEnglishName';
import type {StaticReference}                                                                                                                                                                                           from '../../enum/Enum.types';

import {Enum} from '../../enum/Enum';

export abstract class Validators
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<EnglishName> {

    //region -------------------- Enum instances --------------------

    /**
     * Tell that the sound will always be found.
     *
     * @noValidationOnPlay
     * @noValidationOnCreate
     */
    public static readonly ALL_YES =        new class SoundFounds_AllYes extends Validators {

        public override onCreate(callback: IsSourceFoundCallback,): void {
            callback(true);
        }

        public override onPlay(callback: IsSourceFoundCallback,): true {
            callback(true);
            return true;
        }

    }('all yes',);
    /**
     * Tell that the sound will never be found.
     *
     * @noValidationOnPlay
     * @noValidationOnCreate
     */
    public static readonly ALL_NO =         new class SoundFounds_AllNo extends Validators {

        public override onCreate(callback: IsSourceFoundCallback,): void {
            callback(false);
        }

        public override onPlay(callback: IsSourceFoundCallback,): false {
            callback(false);
            return false;
        }

    }('all no',);
    /**
     * Tell whenever the sound is present or not
     * when the audio source will be played.
     *
     * @noValidationOnCreate
     * @defaultValue
     */
    public static readonly ON_PLAY_ONLY =   new class SoundFounds_OnPlayOnly extends Validators {

        public override onPlay(callback: IsSourceFoundCallback,): null {
            callback();
            return null;
        }

    }('on play only',);
    /**
     * Tell whenever the sound is present or not
     * when creating the audio element.
     *
     * @noValidationOnPlay
     */
    public static readonly ON_CREATE_ONLY = new class SoundFounds_OnCreateOnly extends Validators {

        public override onCreate(callback: IsSourceFoundCallback,): void {
            callback();
        }

    }('on create only',);

    protected static readonly _DEFAULT = Validators.ON_PLAY_ONLY;

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: Validators;

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    readonly #englishName;

    //endregion -------------------- Fields --------------------

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

    /**
     * Handle the state when the {@link SoundPlayer sound player} is created.
     *
     * @param callback the callback to execute
     */
    public onCreate(callback: IsSourceFoundCallback,): void {
    }

    /**
     * Handle the state when the {@link HTMLAudioElement audio element} is playing.
     *
     * @param callback the callback to execute
     */
    public onPlay(callback: IsSourceFoundCallback,): | boolean | null {
        return null;
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<Validators> {
        return Validators;
    }

    //region -------------------- Enum default methods --------------------

    public static get default(): Validators {
        return Enum.getNonNullDefaultOn(this);
    }

    public static set default(value: | Validators | string,) {
        this.setDefault(value);
    }

    public static setDefault(value: | Validators | string,): typeof Validators {
        return Enum.setNonNullDefaultOn(this, value,);
    }

    //endregion -------------------- Enum default methods --------------------
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
    public static getValue<I extends Validators, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): Validators
    public static getValue(value: PossibleValue,): | Validators | null
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