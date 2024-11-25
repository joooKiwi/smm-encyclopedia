import type {CompanionEnumWithParentSingleton}           from '@joookiwi/enumerable'
import type {NullOr}                                     from '@joookiwi/type'
import {CompanionEnumWithParent, EnumWithNullableParent} from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleRouteName} from 'app/property/SoundEffect.times.types'

import {Times} from 'core/time/Times'

export class SoundEffectTimes
    extends EnumWithNullableParent<Times, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly ALL_TIMES = new class SoundEffectTimes_All extends SoundEffectTimes {

        public override get allRouteName() {
            return null
        }

    }()
    public static readonly DAY = new class SoundEffectTimes_Day extends SoundEffectTimes {

        public override get allColor(): PossibleColor {
            return 'warning'
        }

        public override get nightColor(): PossibleColor {
            return 'warning'
        }

        public override get dayRouteName() {
            return null
        }

    }()
    public static readonly NIGHT = new class SoundEffectTimes_Night extends SoundEffectTimes {

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

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<SoundEffectTimes, typeof SoundEffectTimes, Times, typeof Times> = class CompanionEnum_SoundEffectTimes
        extends CompanionEnumWithParent<SoundEffectTimes, typeof SoundEffectTimes, Times, typeof Times> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_SoundEffectTimes

        private constructor() {
            super(SoundEffectTimes, Times,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_SoundEffectTimes()
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
        return `everySoundEffect (Time=all)`
    }

    public get dayRouteName(): NullOr<PossibleRouteName> {
        return `everySoundEffect (Time=day)`
    }

    public get nightRouteName(): NullOr<PossibleRouteName> {
        return `everySoundEffect (Time=night)`
    }

    //endregion -------------------- Methods --------------------

}

type PossibleColor = Extract<BootstrapColor, | 'success' | 'warning'>
