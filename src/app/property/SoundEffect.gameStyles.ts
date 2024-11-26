import type {CompanionEnumWithParentSingleton}           from '@joookiwi/enumerable'
import type {NullOrString}                               from '@joookiwi/type'
import {CompanionEnumWithParent, EnumWithNullableParent} from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleRouteName} from 'app/property/SoundEffect.gameStyles.types'

import {GameStyles} from 'core/gameStyle/GameStyles'

export class SoundEffectGameStyles
    extends EnumWithNullableParent<GameStyles, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly ALL_GAME_STYLES = new class SoundEffectGameStyles_AllGameStyles extends SoundEffectGameStyles {

        public override get allRouteName() {
            return null
        }

    }()

    public static readonly SMB = new class SoundEffectGameStyles_Smb extends SoundEffectGameStyles {

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

        public override sm3dwColor(): PossibleColor {
            return 'warning'
        }

        public override get smbRouteName() {
            return null
        }

    }()
    public static readonly SMB3 = new class SoundEffectGameStyles_Smb3 extends SoundEffectGameStyles {

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

        public override sm3dwColor(): PossibleColor {
            return 'warning'
        }

        public override get smb3RouteName() {
            return null
        }

    }()
    public static readonly SMW = new class SoundEffectGameStyles_Smw extends SoundEffectGameStyles {

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

        public override sm3dwColor(): PossibleColor {
            return 'warning'
        }

        public override get smwRouteName() {
            return null
        }

    }()
    public static readonly NSMBU = new class SoundEffectGameStyles_Nsmbu extends SoundEffectGameStyles {

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

        public override sm3dwColor(): PossibleColor {
            return 'warning'
        }

        public override get nsmbuRouteName() {
            return null
        }

    }()
    public static readonly SM3DW = new class SoundEffectGameStyles_Sm3dw extends SoundEffectGameStyles {

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

        public override nsmbuColor(): PossibleColor {
            return 'warning'
        }

        public override get sm3dwRouteName() {
            return null
        }

    }()

    public static readonly MIXED_GAME_STYLE = new class SoundEffectGameStyles_MixedGameStyle extends SoundEffectGameStyles {

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

        public override sm3dwColor(isSelected: boolean,): PossibleColor {
            return isSelected ? 'success' : 'warning'
        }

    }()

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<SoundEffectGameStyles, typeof SoundEffectGameStyles, GameStyles, typeof GameStyles> = class CompanionEnum_SoundEffectGameStyles
        extends CompanionEnumWithParent<SoundEffectGameStyles, typeof SoundEffectGameStyles, GameStyles, typeof GameStyles> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_SoundEffectGameStyles

        private constructor() {
            super(SoundEffectGameStyles, GameStyles,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_SoundEffectGameStyles()
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

    public sm3dwColor(isSelected: boolean,): PossibleColor {
        return 'success'
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public get allRouteName(): NullOrString<PossibleRouteName> {
        return `everySoundEffect (GameStyle=all)`
    }

    public get smbRouteName(): NullOrString<PossibleRouteName> {
        return `everySoundEffect (GameStyle=1)`
    }

    public get smb3RouteName(): NullOrString<PossibleRouteName> {
        return `everySoundEffect (GameStyle=3)`
    }

    public get smwRouteName(): NullOrString<PossibleRouteName> {
        return `everySoundEffect (GameStyle=W)`
    }

    public get nsmbuRouteName(): NullOrString<'everySoundEffect (GameStyle=U)'> {
        return `everySoundEffect (GameStyle=U)`
    }

    public get sm3dwRouteName(): NullOrString<PossibleRouteName> {
        return `everySoundEffect (GameStyle=3DW)`
    }

    //endregion -------------------- Methods --------------------

}

type PossibleColor = Extract<BootstrapColor, | 'success' | 'warning'>
