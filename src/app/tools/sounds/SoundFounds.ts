import type {EnglishName, EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, IsSourceFoundCallback, Names, Ordinals, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './SoundFounds.types';
import type {ClassWithEnglishName}                                                                                                                                                                                      from '../../../core/ClassWithEnglishName';
import type {StaticReference}                                                                                                                                                                                           from '../../../util/enum/Enum.types';

import {Enum} from '../../../util/enum/Enum';

export abstract class SoundFounds
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<EnglishName> {

    //region -------------------- Enum instances --------------------

    /**
     * Tell that the sound will always be found.
     *
     * @noValidationOnPlay
     * @noValidationOnCreate
     */
    public static readonly YES =       new class SoundFounds_Yes extends SoundFounds {

        public onCreate(callback: IsSourceFoundCallback,): void {
            callback(true);
        }

        public onPlay(callback: IsSourceFoundCallback,): true {
            callback(true);
            return true;
        }

    }('yes',);
    /**
     * Tell that the sound will never be found.
     *
     * @noValidationOnPlay
     * @noValidationOnCreate
     */
    public static readonly NO =        new class SoundFounds_No extends SoundFounds {

        public onCreate(callback: IsSourceFoundCallback,): void {
            callback(false);
        }

        public onPlay(callback: IsSourceFoundCallback,): false {
            callback(false);
            return false;
        }

    }('no',);
    /**
     * Tell whenever the sound is present or not
     * when the audio source will be played.
     *
     * @noValidationOnCreate
     * @defaultValue
     */
    public static readonly ON_PLAY =   new class SoundFounds_OnPlay extends SoundFounds {

        public onPlay(callback: IsSourceFoundCallback,): null {
            callback();
            return null;
        }

    }('on play',);
    /**
     * Tell whenever the sound is present or not
     * when creating the audio element.
     *
     * @noValidationOnPlay
     */
    public static readonly ON_CREATE = new class SoundFounds_OnCreate extends SoundFounds {

        public onCreate(callback: IsSourceFoundCallback,): void {
            callback();
        }

    }('on create',);

    protected static readonly _DEFAULT = SoundFounds.ON_PLAY;

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: SoundFounds;

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

    /**
     * Handle the state when the {@link SimpleSound sound element} is created.
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

    protected get _static(): StaticReference<SoundFounds> {
        return SoundFounds;
    }

    public static get default(): SoundFounds {
        return Enum.getNonNullDefaultOn(this);
    }

    public static set default(value: | SoundFounds | string,) {
        this.setDefault(value);
    }

    public static setDefault(value: | SoundFounds | string,): typeof SoundFounds {
        return Enum.setNonNullDefaultOn(this, value,);
    }


    public static _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.englishName === value)
            ?? null;
    }

    public static getValue(value: | null | undefined,): null
    public static getValue<O extends Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(nameOrCharacter: S,): EnumByPossibleString<S>
    public static getValue<S extends string, >(nameOrCharacter: S,): EnumByString<S>
    public static getValue<I extends SoundFounds, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): SoundFounds
    public static getValue(value: PossibleValue,): | SoundFounds | null
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