import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}         from '@joookiwi/enumerable'

import {ViewDisplays}                            from 'app/withInterpreter/ViewDisplays'
import type {Names, Ordinals, PossibleRouteName} from 'app/property/CharacterNameGames.types'

export class CharacterNameGames
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly ALL_GAMES = new class CharacterNameGames_AllGames extends CharacterNameGames {

        public override getAllRouteName() {
            return null
        }

    }()
    public static readonly SUPER_MARIO_MAKER = new class CharacterNameGames_SuperMarioMaker extends CharacterNameGames {

        public override get allColor(): PossibleColor {
            return 'warning'
        }

        public override get smm2Color(): PossibleColor {
            return 'warning'
        }

        public override getSmm1RouteName() {
            return null
        }

    }()
    public static readonly SUPER_MARIO_MAKER_FOR_NINTENDO_3DS = new class CharacterNameGames_SuperMarioMakerForNintendo3DS extends CharacterNameGames {

        public override get allColor(): PossibleColor {
            return 'warning'
        }

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
    public static readonly SUPER_MARIO_MAKER_2 = new class CharacterNameGames_SuperMarioMaker2 extends CharacterNameGames {

        public override get allColor(): PossibleColor {
            return 'warning'
        }

        public override get smm3dsColor(): PossibleColor {
            return 'warning'
        }

        public override get smm1Color(): PossibleColor {
            return 'warning'
        }

        public override getSmm2RouteName() {
            return null
        }

    }()

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<CharacterNameGames, typeof CharacterNameGames> = class CompanionEnum_CharacterNameGames
        extends CompanionEnum<CharacterNameGames, typeof CharacterNameGames> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_CharacterNameGames

        private constructor() {
            super(CharacterNameGames,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_CharacterNameGames()
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

    public getAllRouteName(viewDisplay: ViewDisplays,): NullOr<PossibleRouteName> {
        return `everyCharacterName (${viewDisplay.urlValue as | 'list' | 'card'} Game=all)`
    }

    public getSmm1RouteName(viewDisplay: ViewDisplays,): NullOr<PossibleRouteName> {
        return `everyCharacterName (${viewDisplay.urlValue as | 'list' | 'card'} Game=1)`
    }

    public getSmm3dsRouteName(viewDisplay: ViewDisplays,): NullOr<PossibleRouteName> {
        return `everyCharacterName (${viewDisplay.urlValue as | 'list' | 'card'} Game=3DS)`
    }

    public getSmm2RouteName(viewDisplay: ViewDisplays,): NullOr<PossibleRouteName> {
        return `everyCharacterName (${viewDisplay.urlValue as | 'list' | 'card'} Game=2)`
    }

    //endregion -------------------- Methods --------------------

}

type PossibleColor = Extract<BootstrapColor, | 'success' | 'warning'>