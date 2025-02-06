import type {CompanionEnumWithParentSingleton}           from '@joookiwi/enumerable'
import type {NullOrString}                               from '@joookiwi/type'
import {CompanionEnumWithParent, EnumWithNullableParent} from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleRouteName} from 'app/property/EntityGameStyles.types'

import {GameStyles} from 'core/gameStyle/GameStyles'

export class EntityGameStyles
    extends EnumWithNullableParent<GameStyles, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly ALL_GAME_STYLES = new class EntityGameStyles_AllGameStyles extends EntityGameStyles {

        public override get allRouteName() {
            return null
        }

    }()

    public static readonly SUPER_MARIO_BROS = new class EntityGameStyles_SuperMarioBros extends EntityGameStyles {

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
    public static readonly SUPER_MARIO_BROS_3 = new class EntityGameStyles_SuperMarioBros3 extends EntityGameStyles {

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
    public static readonly SUPER_MARIO_WORLD = new class EntityGameStyles_SuperMarioWorld extends EntityGameStyles {

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
    public static readonly NEW_SUPER_MARIO_BROS_U = new class EntityGameStyles_NewSuperMarioBrosU extends EntityGameStyles {

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
    public static readonly SUPER_MARIO_3D_WORLD = new class EntityGameStyles_SuperMario3DWorld extends EntityGameStyles {

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

    public static readonly NOT_INDIVIDUAL_GAME_STYLE = new class EntityGameStyles_NotIndividualGameStyle extends EntityGameStyles {

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

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<EntityGameStyles, typeof EntityGameStyles, GameStyles, typeof GameStyles> = class CompanionEnum_EntityGameStyles
        extends CompanionEnumWithParent<EntityGameStyles, typeof EntityGameStyles, GameStyles, typeof GameStyles> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_EntityGameStyles

        private constructor() {
            super(EntityGameStyles, GameStyles,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_EntityGameStyles()
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

    public smbColor(isSelected: boolean,): PossibleColor {// eslint-disable-line @typescript-eslint/no-unused-vars
        return 'success'
    }

    public smb3Color(isSelected: boolean,): PossibleColor {// eslint-disable-line @typescript-eslint/no-unused-vars
        return 'success'
    }

    public smwColor(isSelected: boolean,): PossibleColor {// eslint-disable-line @typescript-eslint/no-unused-vars
        return 'success'
    }

    public nsmbuColor(isSelected: boolean,): PossibleColor {// eslint-disable-line @typescript-eslint/no-unused-vars
        return 'success'
    }

    public sm3dwColor(isSelected: boolean,): PossibleColor {// eslint-disable-line @typescript-eslint/no-unused-vars
        return 'success'
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public get allRouteName(): NullOrString<PossibleRouteName> {
        return `everyEntity (GameStyle=all)`
    }

    public get smbRouteName(): NullOrString<PossibleRouteName> {
        return `everyEntity (GameStyle=1)`
    }

    public get smb3RouteName(): NullOrString<PossibleRouteName> {
        return `everyEntity (GameStyle=3)`
    }

    public get smwRouteName(): NullOrString<PossibleRouteName> {
        return `everyEntity (GameStyle=W)`
    }

    public get nsmbuRouteName(): NullOrString<PossibleRouteName> {
        return `everyEntity (GameStyle=U)`
    }

    public get sm3dwRouteName(): NullOrString<PossibleRouteName> {
        return `everyEntity (GameStyle=3DW)`
    }

    //endregion -------------------- Methods --------------------

}

type PossibleColor = Extract<BootstrapColor, | 'success' | 'warning'>
