import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import type {NullOr}                 from '@joookiwi/type'
import {CompanionEnum, Enum}         from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleRouteName} from 'app/property/LimitGames.types'
import type {LimitTypes}                         from 'app/property/LimitTypes'

export class LimitGames
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly ALL_GAMES = new class LimitGames_AllGames extends LimitGames {

        public override getAllRouteName() {
            return null
        }

    }()
    public static readonly SUPER_MARIO_MAKER_OR_SUPER_MARIO_MAKER_FOR_NINTENDO_3DS = new class LimitGames_SuperMarioMakerOrSuperMarioMakerForNintendo3DS extends LimitGames {

        public override get allColor(): PossibleColor {
            return 'warning'
        }

        public override get smm2Color(): PossibleColor {
            return 'warning'
        }

        public override getSmm1Or3dsRouteName() {
            return null
        }

    }()
    public static readonly SUPER_MARIO_MAKER_2 = new class LimitGames_SuperMarioMaker2 extends LimitGames {

        public override get allColor(): PossibleColor {
            return 'warning'
        }

        public override get smm1Or3dsColor(): PossibleColor {
            return 'warning'
        }

        public override getSmm2RouteName() {
            return null
        }

    }()

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<LimitGames, typeof LimitGames> = class CompanionEnum_LimitGames
        extends CompanionEnum<LimitGames, typeof LimitGames> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_LimitGames

        private constructor() {
            super(LimitGames,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_LimitGames()
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

    public get smm1Or3dsColor(): PossibleColor {
        return 'success'
    }

    public get smm2Color(): PossibleColor {
        return 'success'
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public getAllRouteName(type: LimitTypes,): NullOr<PossibleRouteName> {
        return `${type.routeName} (Game=all)`
    }

    public getSmm1Or3dsRouteName(type: LimitTypes,): NullOr<PossibleRouteName> {
        return `${type.routeName} (Game=1&3DS)`
    }

    public getSmm2RouteName(type: LimitTypes,): NullOr<PossibleRouteName> {
        return `${type.routeName} (Game=2)`
    }

    //endregion -------------------- Methods --------------------

}

type PossibleColor = Extract<BootstrapColor, | 'success' | 'warning'>
