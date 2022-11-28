import type {CollectionHolder, EnumerableConstructorWithDefault, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                               from '@joookiwi/enumerable'

import type {EnglishName, IsSourceFoundCallback, Names, Ordinals} from './Validators.types'
import type {ClassWithEnglishName}                                from '../../../core/ClassWithEnglishName'
import type {Nullable, NullOrBoolean}                             from '../../types'

import {getValueByEnglishName} from '../../utilitiesMethods'

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
            callback(true)
        }

        public override onPlay(callback: IsSourceFoundCallback,): true {
            callback(true)
            return true
        }

    }('all yes',)
    /**
     * Tell that the sound will never be found.
     *
     * @noValidationOnPlay
     * @noValidationOnCreate
     */
    public static readonly ALL_NO =         new class SoundFounds_AllNo extends Validators {

        public override onCreate(callback: IsSourceFoundCallback,): void {
            callback(false)
        }

        public override onPlay(callback: IsSourceFoundCallback,): false {
            callback(false)
            return false
        }

    }('all no',)
    /**
     * Tell whenever the sound is present or not
     * when the audio source will be played.
     *
     * @noValidationOnCreate
     * @defaultValue
     */
    public static readonly ON_PLAY_ONLY =   new class SoundFounds_OnPlayOnly extends Validators {

        public override onPlay(callback: IsSourceFoundCallback,): null {
            callback()
            return null
        }

    }('on play only',)
    /**
     * Tell whenever the sound is present or not
     * when creating the audio element.
     *
     * @noValidationOnPlay
     */
    public static readonly ON_CREATE_ONLY = new class SoundFounds_OnCreateOnly extends Validators {

        public override onCreate(callback: IsSourceFoundCallback,): void {
            callback()
        }

    }('on create only',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: Validators
    protected static readonly _DEFAULT = Validators.ON_PLAY_ONLY

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    readonly #englishName

    //endregion -------------------- Fields --------------------

    private constructor(englishName: EnglishName,) {
        super()
        this.#englishName = englishName
    }

    //region -------------------- Getter methods --------------------

    public get englishName(): EnglishName {
        return this.#englishName
    }

    public get englishNameInHtml(): EnglishName {
        return this.englishName//TODO replace with a proper html name or remove this method entirely
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
    public onPlay(callback: IsSourceFoundCallback,): NullOrBoolean {
        return null
    }


    // public static getValueByName<T, >(value: T,): ValidatorsByName<T>
    public static getValueByName(value: Nullable<| Validators | string>,): Validators {
        return getValueByEnglishName(value, this,)
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructorWithDefault<Ordinals, Names> {
        return Validators
    }

    public static get default(): Validators {
        return Enum.getDefaultOn(this,)
    }

    public static set default(value: PossibleValueByEnumerable<Validators>,) {
        this.setDefault(value,)
    }

    public static setDefault(value: PossibleValueByEnumerable<Validators>,): typeof Validators {
        return Enum.setDefaultOn(this, value,)
    }

    public static getValue(value: PossibleValueByEnumerable<Validators>,): Validators {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<Validators> {
        return Enum.getValuesOn(this)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}
