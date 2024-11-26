import type {CompanionEnumWithParentSingleton}           from '@joookiwi/enumerable'
import type {NullOrString}                               from '@joookiwi/type'
import {CompanionEnumWithParent, EnumWithNullableParent} from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleRouteName} from 'app/property/EntityGames.types'

import {Games} from 'core/game/Games'

export class EntityGames
    extends EnumWithNullableParent<Games, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly ALL_GAMES = new class EntityGames_AllGames extends EntityGames {

        public override get allRouteName() {
            return null
        }

    }()
    public static readonly SUPER_MARIO_MAKER = new class EntityGames_SuperMarioMaker extends EntityGames {

        public override get allColor(): PossibleColor {
            return 'warning'
        }

        public override get smm2Color(): PossibleColor {
            return 'warning'
        }

        public override get smm1RouteName() {
            return null
        }

    }()
    public static readonly SUPER_MARIO_MAKER_FOR_NINTENDO_3DS = new class EntityGames_SuperMarioMakerForNintendo3DS extends EntityGames {

        public override get allColor(): PossibleColor {
            return 'warning'
        }

        public override get smm1Color(): PossibleColor {
            return 'warning'
        }

        public override get smm2Color(): PossibleColor {
            return 'warning'
        }

        public override get smm3dsRouteName() {
            return null
        }

    }()
    public static readonly SUPER_MARIO_MAKER_2 = new class EntityGames_SuperMarioMaker2 extends EntityGames {

        public override get allColor(): PossibleColor {
            return 'warning'
        }

        public override get smm3dsColor(): PossibleColor {
            return 'warning'
        }

        public override get smm1Color(): PossibleColor {
            return 'warning'
        }

        public override get smm2RouteName() {
            return null
        }

    }()

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<EntityGames, typeof EntityGames, Games, typeof Games> = class CompanionEnum_EntityGames
        extends CompanionEnumWithParent<EntityGames, typeof EntityGames, Games, typeof Games> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_EntityGames

        private constructor() {
            super(EntityGames, Games,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_EntityGames()
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

    public get smm1Color(): PossibleColor {
        return 'success'
    }

    public get smm3dsColor(): PossibleColor {
        return 'success'
    }

    public get smm2Color(): PossibleColor {
        return 'success'
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public get allRouteName(): NullOrString<PossibleRouteName> {
        return `everyEntity (Game=all)`
    }

    public get smm1RouteName(): NullOrString<PossibleRouteName> {
        return `everyEntity (Game=1)`
    }

    public get smm3dsRouteName(): NullOrString<PossibleRouteName> {
        return `everyEntity (Game=3DS)`
    }

    public get smm2RouteName(): NullOrString<PossibleRouteName> {
        return `everyEntity (Game=2)`
    }

    //endregion -------------------- Methods --------------------

}

type PossibleColor = Extract<BootstrapColor, | 'success' | 'warning'>
