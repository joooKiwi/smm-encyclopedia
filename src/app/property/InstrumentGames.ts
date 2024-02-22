import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}         from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleRouteName} from 'app/property/InstrumentGames.types'
import type {ViewDisplays}                       from 'app/withInterpreter/ViewDisplays'

export abstract class InstrumentGames
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly SUPER_MARIO_MAKER = new class InstrumentGames_SuperMarioMaker extends InstrumentGames {

        public override get smm2Color(): PossibleColor {
            return 'warning'
        }

        public override getSmm1RouteName() {
            return null
        }

    }()
    public static readonly SUPER_MARIO_MAKER_FOR_NINTENDO_3DS = new class InstrumentGames_SuperMarioMakerForNintendo3DS extends InstrumentGames {

        public override get smm1Color(): PossibleColor {
            return 'warning'
        }

        public override get smm2Color(): PossibleColor {
            return 'warning'
        }

        public override getSmm3dsRouteName() {
            return null
        }

    }()
    public static readonly SUPER_MARIO_MAKER_2 = new class InstrumentGames_SuperMarioMaker2 extends InstrumentGames {

        public override getSmm2RouteName() {
            return null
        }

    }()

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<InstrumentGames, typeof InstrumentGames> = class CompanionEnum_InstrumentGames
        extends CompanionEnum<InstrumentGames, typeof InstrumentGames> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_InstrumentGames

        private constructor() {
            super(InstrumentGames,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_InstrumentGames()
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

    public getSmm1RouteName(viewDisplay: ViewDisplays,): NullOr<PossibleRouteName> {
        return `everyInstrument (${viewDisplay.urlValue as | 'list' | 'card'} Game=1)`
    }

    public getSmm3dsRouteName(viewDisplay: ViewDisplays,): NullOr<PossibleRouteName> {
        return `everyInstrument (${viewDisplay.urlValue as | 'list' | 'card'} Game=3DS)`
    }

    public getSmm2RouteName(viewDisplay: ViewDisplays,): NullOr<PossibleRouteName> {
        return `everyInstrument (${viewDisplay.urlValue as | 'list' | 'card'} Game=2)`
    }

    //endregion -------------------- Methods --------------------

}

type PossibleColor = Extract<BootstrapColor, | 'success' | 'warning'>
