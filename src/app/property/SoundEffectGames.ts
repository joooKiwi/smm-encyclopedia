import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import type {NullOrString}           from '@joookiwi/type'
import {CompanionEnum, Enum}         from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleRouteName} from 'app/property/SoundEffectGames.types'
import type {ViewDisplays}                       from 'app/withInterpreter/ViewDisplays'

export class SoundEffectGames
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly ALL_GAMES = new class SoundEffectGames_AllGames extends SoundEffectGames {

        public override getAllRouteName() {
            return null
        }

    }()
    public static readonly SUPER_MARIO_MAKER_OR_SUPER_MARIO_MAKER_FOR_NINTENDO_3DS = new class SoundEffectGames_SuperMarioMakerOrSuperMarioMakerForNintendo3DS extends SoundEffectGames {

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
    public static readonly SUPER_MARIO_MAKER_2 = new class SoundEffectGames_SuperMarioMaker2 extends SoundEffectGames {

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

    public static readonly CompanionEnum: CompanionEnumSingleton<SoundEffectGames, typeof SoundEffectGames> = class CompanionEnum_SoundEffectGames
        extends CompanionEnum<SoundEffectGames, typeof SoundEffectGames> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_SoundEffectGames

        private constructor() {
            super(SoundEffectGames,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_SoundEffectGames()
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

    public getAllRouteName(viewDisplay: ViewDisplays,): NullOrString<PossibleRouteName> {
        return `everySoundEffect (${viewDisplay.urlValue} Game=all)`
    }

    public getSmm1Or3dsRouteName(viewDisplay: ViewDisplays,): NullOrString<PossibleRouteName> {
        return `everySoundEffect (${viewDisplay.urlValue} Game=1)`
    }

    public getSmm2RouteName(viewDisplay: ViewDisplays,): NullOrString<PossibleRouteName> {
        return `everySoundEffect (${viewDisplay.urlValue} Game=2)`
    }

    //endregion -------------------- Methods --------------------

}

type PossibleColor = Extract<BootstrapColor, | 'success' | 'warning'>
