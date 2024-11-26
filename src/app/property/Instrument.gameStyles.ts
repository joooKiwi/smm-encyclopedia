import type {CompanionEnumWithParentSingleton}           from '@joookiwi/enumerable'
import type {NullOrString}                               from '@joookiwi/type'
import {CompanionEnumWithParent, EnumWithNullableParent} from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleRouteName} from 'app/property/Instrument.gameStyles.types'

import {GameStyles} from 'core/gameStyle/GameStyles'

export class InstrumentGameStyles
    extends EnumWithNullableParent<GameStyles, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly ALL_GAME_STYLES = new class InstrumentGameStyles_AllGameStyles extends InstrumentGameStyles {

        public override get allRouteName() {
            return null
        }

    }()

    public static readonly SMB = new class InstrumentGameStyles_Smb extends InstrumentGameStyles {

        public override get allColor(): PossibleColor {
            return 'warning'
        }

        public override smb3Color(): PossibleColor {
            return 'warning'
        }

        public override smwColor(): PossibleColor {
            return 'warning'
        }

        public override nsmbuColor(): PossibleColor {
            return 'warning'
        }

        public override get smbRouteName() {
            return null
        }

    }()
    public static readonly SMB3 = new class InstrumentGameStyles_Smb3 extends InstrumentGameStyles {

        public override get allColor(): PossibleColor {
            return 'warning'
        }

        public override smbColor(): PossibleColor {
            return 'warning'
        }

        public override smwColor(): PossibleColor {
            return 'warning'
        }

        public override nsmbuColor(): PossibleColor {
            return 'warning'
        }

        public override get smb3RouteName() {
            return null
        }

    }()
    public static readonly SMW = new class InstrumentGameStyles_Smw extends InstrumentGameStyles {

        public override get allColor(): PossibleColor {
            return 'warning'
        }

        public override smbColor(): PossibleColor {
            return 'warning'
        }

        public override smb3Color(): PossibleColor {
            return 'warning'
        }

        public override nsmbuColor(): PossibleColor {
            return 'warning'
        }

        public override get smwRouteName() {
            return null
        }

    }()
    public static readonly NSMBU = new class InstrumentGameStyles_Nsmbu extends InstrumentGameStyles {

        public override get allColor(): PossibleColor {
            return 'warning'
        }

        public override smbColor(): PossibleColor {
            return 'warning'
        }

        public override smb3Color(): PossibleColor {
            return 'warning'
        }

        public override smwColor(): PossibleColor {
            return 'warning'
        }

        public override get nsmbuRouteName() {
            return null
        }

    }()

    public static readonly MIXED_GAME_STYLE = new class InstrumentGameStyles_MixedGameStyle extends InstrumentGameStyles {

        public override get allColor(): PossibleColor {
            return 'warning'
        }

        public override smbColor(isSelected: boolean,): PossibleColor {
            return isSelected ? 'success' : 'warning'
        }

        public override smb3Color(isSelected: boolean,): PossibleColor {
            return isSelected ? 'success' : 'warning'
        }

        public override smwColor(isSelected: boolean,): PossibleColor {
            return isSelected ? 'success' : 'warning'
        }

        public override nsmbuColor(isSelected: boolean,): PossibleColor {
            return isSelected ? 'success' : 'warning'
        }

    }()

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<InstrumentGameStyles, typeof InstrumentGameStyles, GameStyles, typeof GameStyles> = class CompanionEnum_InstrumentGameStyles
        extends CompanionEnumWithParent<InstrumentGameStyles, typeof InstrumentGameStyles, GameStyles, typeof GameStyles> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_InstrumentGameStyles

        private constructor() {
            super(InstrumentGameStyles, GameStyles,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_InstrumentGameStyles()
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

    public smbColor(isSelected: boolean,): PossibleColor {
        return 'success'
    }

    public smb3Color(isSelected: boolean,): PossibleColor {
        return 'success'
    }

    public smwColor(isSelected: boolean,): PossibleColor {
        return 'success'
    }

    public nsmbuColor(isSelected: boolean,): PossibleColor {
        return 'success'
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public get allRouteName(): NullOrString<PossibleRouteName> {
        return `everyInstrument (GameStyle=all)`
    }

    public get smbRouteName(): NullOrString<PossibleRouteName> {
        return `everyInstrument (GameStyle=1)`
    }

    public get smb3RouteName(): NullOrString<PossibleRouteName> {
        return `everyInstrument (GameStyle=3)`
    }

    public get smwRouteName(): NullOrString<PossibleRouteName> {
        return `everyInstrument (GameStyle=W)`
    }

    public get nsmbuRouteName(): NullOrString<'everyInstrument (GameStyle=U)'> {
        return `everyInstrument (GameStyle=U)`
    }

    //endregion -------------------- Methods --------------------

}

type PossibleColor = Extract<BootstrapColor, | 'success' | 'warning'>
