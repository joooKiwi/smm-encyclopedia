import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}         from '@joookiwi/enumerable'

import {ViewDisplays}                            from 'app/withInterpreter/ViewDisplays'
import type {Names, Ordinals, PossibleRouteName} from 'app/property/EntityGames.types'
import type {FullGroupUrlName}                   from 'core/gameStyle/GameStyles.types'

export class EntityGames
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly ALL_GAMES = new class EntityGames_AllGames extends EntityGames {

        public override getAllRouteName() {
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

        public override getSmm1RouteName() {
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

        public override getSmm3dsRouteName() {
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

        public override getSmm2RouteName() {
            return null
        }

    }()

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<EntityGames, typeof EntityGames> = class CompanionEnum_EntityGames
        extends CompanionEnum<EntityGames, typeof EntityGames> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_EntityGames

        private constructor() {
            super(EntityGames,)
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

    public getAllRouteName(viewDisplay: ViewDisplays, gameStyleName: FullGroupUrlName,): NullOr<PossibleRouteName> {
        return `everyEntity (${viewDisplay.urlValue} Game=all ${gameStyleName})`
    }

    public getSmm1RouteName(viewDisplay: ViewDisplays, gameStyleName: FullGroupUrlName,): NullOr<PossibleRouteName> {
        // README: We imply that the game cannot be in SM3DW with SMM1 for this path in the EntityApp itself
        return `everyEntity (${viewDisplay.urlValue} Game=1 ${gameStyleName})` as PossibleRouteName
    }

    public getSmm3dsRouteName(viewDisplay: ViewDisplays, gameStyleName: FullGroupUrlName,): NullOr<PossibleRouteName> {
        // README: We imply that the game cannot be in SM3DW with SMM3DS for this path in the EntityApp itself
        return `everyEntity (${viewDisplay.urlValue} Game=3DS ${gameStyleName})` as PossibleRouteName
    }

    public getSmm2RouteName(viewDisplay: ViewDisplays, gameStyleName: FullGroupUrlName,): NullOr<PossibleRouteName> {
        return `everyEntity (${viewDisplay.urlValue} Game=2 ${gameStyleName})`
    }

    //endregion -------------------- Methods --------------------

}

type PossibleColor = Extract<BootstrapColor, | 'success' | 'warning'>
