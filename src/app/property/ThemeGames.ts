import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import type {NullOrString}           from '@joookiwi/type'
import {CompanionEnum, Enum}         from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleRouteName} from 'app/property/ThemeGames.types'
import type {ThemeTypes}                         from 'app/property/ThemeTypes'
import type {ViewDisplays}                       from 'app/withInterpreter/ViewDisplays'

export class ThemeGames
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly SUPER_MARIO_MAKER_OR_SUPER_MARIO_MAKER_FOR_NINTENDO_3DS = new class ThemeGames_SuperMarioMakerOrSuperMarioMakerForNintendo3DS extends ThemeGames {

        public override get smm2Color(): PossibleColor {
            return 'warning'
        }

        public override getSmm1Or3dsRouteName() {
            return null
        }

    }()
    public static readonly SUPER_MARIO_MAKER_2 = new class ThemeGames_SuperMarioMaker2 extends ThemeGames {

        public override getSmm2RouteName() {
            return null
        }

    }()

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<ThemeGames, typeof ThemeGames> = class CompanionEnum_ThemeGames
        extends CompanionEnum<ThemeGames, typeof ThemeGames> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_ThemeGames

        private constructor() {
            super(ThemeGames,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_ThemeGames()
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

    public get smm1Or3dsColor(): PossibleColor {
        return 'success'
    }

    public get smm2Color(): PossibleColor {
        return 'success'
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public getSmm1Or3dsRouteName(type: ThemeTypes, viewDisplay: ViewDisplays,): NullOrString<PossibleRouteName> {
        return `${type.routeName} (${viewDisplay.urlValue} Game=1)`
    }

    public getSmm2RouteName(type: ThemeTypes, viewDisplay: ViewDisplays,): NullOrString<PossibleRouteName> {
        return `${type.routeName} (${viewDisplay.urlValue} Game=2)`
    }

    //endregion -------------------- Methods --------------------

}

type PossibleColor = Extract<BootstrapColor, | 'success' | 'warning'>
