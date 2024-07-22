import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}         from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleRouteName} from 'app/property/GameStyleGames.types'
import type {ViewDisplays}                       from 'app/withInterpreter/ViewDisplays'

export class GameStyleGames
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly SUPER_MARIO_MAKER_OR_SUPER_MARIO_MAKER_FOR_NINTENDO_3DS = new class GameStyleGames_SuperMarioMakerOrSuperMarioMakerForNintendo3DS extends GameStyleGames {

        public override get smm2Color(): PossibleColor {
            return 'warning'
        }

        public override getSmm1Or3dsRouteName() {
            return null
        }

    }()
    public static readonly SUPER_MARIO_MAKER_2 = new class GameStyleGames_SuperMarioMaker2 extends GameStyleGames {

        public override getSmm2RouteName() {
            return null
        }

    }()

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<GameStyleGames, typeof GameStyleGames> = class CompanionEnum_GameStyleGames
        extends CompanionEnum<GameStyleGames, typeof GameStyleGames> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_GameStyleGames

        private constructor() {
            super(GameStyleGames,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_GameStyleGames()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------
    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor() {
        super()
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get smm1Or3dsColor(): PossibleColor {
        return 'success'
    }

    public get smm2Color(): PossibleColor {
        return 'success'
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public getSmm1Or3dsRouteName(viewDisplay: ViewDisplays,): NullOr<PossibleRouteName> {
        return `everyGameStyle (${viewDisplay.urlValue} Game=1)`
    }

    public getSmm2RouteName(viewDisplay: ViewDisplays,): NullOr<PossibleRouteName> {
        return `everyGameStyle (${viewDisplay.urlValue} Game=2)`
    }

    //endregion -------------------- Methods --------------------

}

type PossibleColor = Extract<BootstrapColor, | 'success' | 'warning'>
