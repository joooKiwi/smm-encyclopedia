import type {CompanionEnumWithParentSingleton}   from '@joookiwi/enumerable'
import {CompanionEnumWithParent, EnumWithParent} from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleRouteName} from 'app/property/EditorVoiceGames.types'

import {ViewDisplays} from 'app/withInterpreter/ViewDisplays'
import {Games}        from 'core/game/Games'

export class EditorVoiceGames
    extends EnumWithParent<Games, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly ALL_GAMES = new class EditorVoiceGames_AllGames extends EditorVoiceGames {

        public override getAllRouteName() {
            return null
        }

    }()
    public static readonly SUPER_MARIO_MAKER = new class EditorVoiceGames_SuperMarioMaker extends EditorVoiceGames {

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
    public static readonly SUPER_MARIO_MAKER_FOR_NINTENDO_3DS = new class EditorVoiceGames_SuperMarioMakerForNintendo3DS extends EditorVoiceGames {

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
    public static readonly SUPER_MARIO_MAKER_2 = new class EditorVoiceGames_SuperMarioMaker2 extends EditorVoiceGames {

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

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<EditorVoiceGames, typeof EditorVoiceGames, Games, typeof Games> = class CompanionEnum_EditorVoiceGames
        extends CompanionEnumWithParent<EditorVoiceGames, typeof EditorVoiceGames, Games, typeof Games> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_EditorVoiceGames

        private constructor() {
            super(EditorVoiceGames, Games,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_EditorVoiceGames()
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
        return `everyEditorVoice (${viewDisplay.urlValue as | 'list' | 'card'} Game=all)`
    }

    public getSmm1RouteName(viewDisplay: ViewDisplays,): NullOr<PossibleRouteName> {
        return `everyEditorVoice (${viewDisplay.urlValue as | 'list' | 'card'} Game=1)`
    }

    public getSmm3dsRouteName(viewDisplay: ViewDisplays,): NullOr<PossibleRouteName> {
        return `everyEditorVoice (${viewDisplay.urlValue as | 'list' | 'card'} Game=3DS)`
    }

    public getSmm2RouteName(viewDisplay: ViewDisplays,): NullOr<PossibleRouteName> {
        return `everyEditorVoice (${viewDisplay.urlValue as | 'list' | 'card'} Game=2)`
    }

    //endregion -------------------- Methods --------------------

}

type PossibleColor = Extract<BootstrapColor, | 'success' | 'warning'>
