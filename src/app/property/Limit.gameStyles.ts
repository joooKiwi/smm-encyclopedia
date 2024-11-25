import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}         from '@joookiwi/enumerable'
import type {NullOrString}           from '@joookiwi/type'

import type {Names, Ordinals, PossibleRouteName} from 'app/property/Limit.gameStyles.types'
import {LimitTypes}                              from 'app/property/LimitTypes'

export class LimitGameStyles
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly ALL_GAME_STYLES = new class LimitGameStyles_AllGameStyles extends LimitGameStyles {

        public override getAllRouteName() {
            return null
        }

    }()

    public static readonly SMB = new class LimitGameStyles_Smb extends LimitGameStyles {

        public override get allColor(): PossibleColor {
            return 'warning'
        }

        public override sm3dwColor(): PossibleColor {
            return 'warning'
        }

        public override getSmbRouteName() {
            return null
        }

    }()
    public static readonly SMB3 = new class LimitGameStyles_Smb3 extends LimitGameStyles {

        public override get allColor(): PossibleColor {
            return 'warning'
        }

        public override smbColor(): PossibleColor {
            return 'warning'
        }

        public override getSmb3RouteName() {
            return null
        }

    }()
    public static readonly SMW_OR_NSMBU = new class LimitGameStyles_Nsmbu extends LimitGameStyles {

        public override get allColor(): PossibleColor {
            return 'warning'
        }

        public override smbColor(): PossibleColor {
            return 'warning'
        }

        public override smb3Color(): PossibleColor {
            return 'warning'
        }

        public override smwOrNsmbuColor(): PossibleColor {
            return 'warning'
        }

        public override sm3dwColor(): PossibleColor {
            return 'warning'
        }

        public override getSmwOrNsmbuRouteName() {
            return null
        }

    }()
    public static readonly SM3DW = new class LimitGameStyles_Sm3dw extends LimitGameStyles {

        public override get allColor(): PossibleColor {
            return 'warning'
        }

        public override smbColor(): PossibleColor {
            return 'warning'
        }

        public override smb3Color(): PossibleColor {
            return 'warning'
        }

        public override smwOrNsmbuColor(): PossibleColor {
            return 'warning'
        }

        public override getSm3dwRouteName() {
            return null
        }

    }()

    public static readonly MIXED_GAME_STYLE = new class LimitGameStyles_MixedGameStyle extends LimitGameStyles {

        public override get allColor(): PossibleColor {
            return 'warning'
        }

        public override smbColor(isSelected: boolean,): PossibleColor {
            return isSelected ? 'success' : 'warning'
        }

        public override smb3Color(isSelected: boolean,): PossibleColor {
            return isSelected ? 'success' : 'warning'
        }

        public override smwOrNsmbuColor(isSelected: boolean,): PossibleColor {
            return isSelected ? 'success' : 'warning'
        }

        public override sm3dwColor(isSelected: boolean,): PossibleColor {
            return isSelected ? 'success' : 'warning'
        }

    }()

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<LimitGameStyles, typeof LimitGameStyles> = class CompanionEnum_LimitGameStyles
        extends CompanionEnum<LimitGameStyles, typeof LimitGameStyles> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_LimitGameStyles

        private constructor() {
            super(LimitGameStyles,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_LimitGameStyles()
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

    public smwOrNsmbuColor(isSelected: boolean,): PossibleColor {
        return 'success'
    }

    public sm3dwColor(isSelected: boolean,): PossibleColor {
        return 'success'
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public getAllRouteName(type: LimitTypes,): NullOrString<PossibleRouteName> {
        return `${type.routeName} (GameStyle=all)`
    }

    public getSmbRouteName(type: LimitTypes,): NullOrString<PossibleRouteName> {
        return `${type.routeName} (GameStyle=1)`
    }

    public getSmb3RouteName(type: LimitTypes,): NullOrString<PossibleRouteName> {
        return `${type.routeName} (GameStyle=3)`
    }

    public getSmwOrNsmbuRouteName(type: LimitTypes,): NullOrString<PossibleRouteName> {
        return `${type.routeName} (GameStyle=W&U)`
    }

    public getSm3dwRouteName(type: LimitTypes,): NullOrString<PossibleRouteName> {
        return `${type.routeName} (GameStyle=3DW)`
    }

    //endregion -------------------- Methods --------------------

}

type PossibleColor = Extract<BootstrapColor, | 'success' | 'warning'>
