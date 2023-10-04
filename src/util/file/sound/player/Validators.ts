import {Enum} from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                from 'core/ClassWithEnglishName'
import type {CompanionEnumByNameSingleton}                        from 'util/enumerable/Singleton.types'
import type {EnglishName, IsSourceFoundCallback, Names, Ordinals} from 'util/file/sound/player/Validators.types'

import {CompanionEnumByEnglishNameOnly} from 'util/enumerable/companion/CompanionEnumByEnglishNameOnly'

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
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumByNameSingleton<Validators, typeof Validators> = class CompanionEnum_Validators
        extends CompanionEnumByEnglishNameOnly<Validators, typeof Validators> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_Validators

        private constructor() {
            super(Validators,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_Validators()
        }

        //endregion -------------------- Singleton usage --------------------

        protected override readonly _DEFAULT = Validators.ON_PLAY_ONLY

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #englishName

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(englishName: EnglishName,) {
        super()
        this.#englishName = englishName
    }

    //endregion -------------------- Constructor --------------------
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

    //endregion -------------------- Methods --------------------

}
