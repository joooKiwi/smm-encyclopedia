import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}         from '@joookiwi/enumerable'

import {ViewDisplays}                            from 'app/withInterpreter/ViewDisplays'
import type {Names, Ordinals, PossibleRouteName} from 'app/property/EntityGameStyles.types'
import type {FullGroupUrlName}                   from 'core/game/Games.types'

export class EntityGameStyles
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly ALL_GAME_STYLES = new class EntityGameStyles_AllGameStyles extends EntityGameStyles {

        public override getAllRouteName() {
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

        public override getSmbRouteName() {
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

        public override getSmb3RouteName() {
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

        public override getSmwRouteName() {
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

        public override getNsmbuRouteName() {
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

        public override getSm3dwRouteName() {
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

    public static readonly CompanionEnum: CompanionEnumSingleton<EntityGameStyles, typeof EntityGameStyles> = class CompanionEnum_EntityGameStyles
        extends CompanionEnum<EntityGameStyles, typeof EntityGameStyles> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_EntityGameStyles

        private constructor() {
            super(EntityGameStyles,)
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

    public getAllRouteName(viewDisplay: ViewDisplays, gameName: FullGroupUrlName,): NullOr<PossibleRouteName> {
        return `everyEntity (${viewDisplay.urlValue} ${gameName} GameStyle=all)`
    }

    public getSmbRouteName(viewDisplay: ViewDisplays, gameName: FullGroupUrlName,): NullOr<PossibleRouteName> {
        return `everyEntity (${viewDisplay.urlValue} ${gameName} GameStyle=1)`
    }

    public getSmb3RouteName(viewDisplay: ViewDisplays, gameName: FullGroupUrlName,): NullOr<PossibleRouteName> {
        return `everyEntity (${viewDisplay.urlValue} ${gameName} GameStyle=3)`
    }

    public getSmwRouteName(viewDisplay: ViewDisplays, gameName: FullGroupUrlName,): NullOr<PossibleRouteName> {
        return `everyEntity (${viewDisplay.urlValue} ${gameName} GameStyle=W)`
    }

    public getNsmbuRouteName(viewDisplay: ViewDisplays, gameName: FullGroupUrlName,): NullOr<PossibleRouteName> {
        return `everyEntity (${viewDisplay.urlValue} ${gameName} GameStyle=U)`
    }

    public getSm3dwRouteName(viewDisplay: ViewDisplays, gameName: FullGroupUrlName,): NullOr<PossibleRouteName> {
        // README: We imply that the game cannot be in SMM1 or SMM3DS with SM3DW for this path in the EntityApp itself
        return `everyEntity (${viewDisplay.urlValue} ${gameName} GameStyle=3DW)` as PossibleRouteName
    }

    //endregion -------------------- Methods --------------------

}

type PossibleColor = Extract<BootstrapColor, | 'success' | 'warning'>
