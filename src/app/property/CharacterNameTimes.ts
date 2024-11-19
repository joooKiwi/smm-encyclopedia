import type {CompanionEnumWithParentSingleton}           from '@joookiwi/enumerable'
import type {NullOr}                                     from '@joookiwi/type'
import {CompanionEnumWithParent, EnumWithNullableParent} from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleRouteName} from 'app/property/CharacterNameTimes.types'

import {Times} from 'core/time/Times'

export class CharacterNameTimes
    extends EnumWithNullableParent<Times, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly ALL_TIMES = new class CharacterNameTimes_All extends CharacterNameTimes {

        public override get allRouteName() {
            return null
        }

    }()
    public static readonly DAY = new class CharacterNameTimes_Day extends CharacterNameTimes {

        public override get allColor(): PossibleColor {
            return 'warning'
        }

        public override get dayRouteName() {
            return null
        }

    }()
    public static readonly NIGHT = new class CharacterNameTimes_Night extends CharacterNameTimes {

        public override get allColor(): PossibleColor {
            return 'warning'
        }

        public override get dayColor(): PossibleColor {
            return 'warning'
        }

        public override get nightRouteName() {
            return null
        }

    }()

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<CharacterNameTimes, typeof CharacterNameTimes, Times, typeof Times> = class CompanionEnum_CharacterNameTimes
        extends CompanionEnumWithParent<CharacterNameTimes, typeof CharacterNameTimes, Times, typeof Times> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_CharacterNameTimes

        private constructor() {
            super(CharacterNameTimes, Times,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_CharacterNameTimes()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------
    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor() {
        super()
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get allColor(): PossibleColor {
        return 'success'
    }

    public get dayColor(): PossibleColor {
        return 'success'
    }

    public get nightColor(): PossibleColor {
        return 'success'
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public get allRouteName(): NullOr<PossibleRouteName> {
        return `everyCharacterName (Time=all)`
    }

    public get dayRouteName(): NullOr<PossibleRouteName> {
        return `everyCharacterName (Time=day)`
    }

    public get nightRouteName(): NullOr<PossibleRouteName> {
        return `everyCharacterName (Time=night)`
    }

    //endregion -------------------- Methods --------------------

}

type PossibleColor = Extract<BootstrapColor, | 'success' | 'warning'>
