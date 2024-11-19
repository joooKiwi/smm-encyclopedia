import type {CompanionEnumWithParentSingleton}           from '@joookiwi/enumerable'
import type {NullOr}                                     from '@joookiwi/type'
import {CompanionEnumWithParent, EnumWithNullableParent} from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleRouteName} from 'app/property/InstrumentTimes.types'

import {Times} from 'core/time/Times'

export class InstrumentTimes
    extends EnumWithNullableParent<Times, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly ALL_TIMES = new class InstrumentTimes_All extends InstrumentTimes {

        public override get allRouteName() {
            return null
        }

    }()
    public static readonly DAY = new class InstrumentTimes_Day extends InstrumentTimes {

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
    public static readonly NIGHT = new class InstrumentTimes_Night extends InstrumentTimes {

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

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<InstrumentTimes, typeof InstrumentTimes, Times, typeof Times> = class CompanionEnum_InstrumentTimes
        extends CompanionEnumWithParent<InstrumentTimes, typeof InstrumentTimes, Times, typeof Times> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_InstrumentTimes

        private constructor() {
            super(InstrumentTimes, Times,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_InstrumentTimes()
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
        return `everyInstrument (Time=all)`
    }

    public get dayRouteName(): NullOr<PossibleRouteName> {
        return `everyInstrument (Time=day)`
    }

    public get nightRouteName(): NullOr<PossibleRouteName> {
        return `everyInstrument (Time=night)`
    }

    //endregion -------------------- Methods --------------------

}

type PossibleColor = Extract<BootstrapColor, | 'success' | 'warning'>
