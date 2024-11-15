import type {Nullable, NullOr} from '@joookiwi/type'
import {Enum}                  from '@joookiwi/enumerable'

import type {GameStyles_SM3DW}              from 'core/gameStyle/GameStyles.types'
import type {Names, Ordinals, PossibleName} from 'core/version/Versions.types'
import type {CompanionEnumByNameSingleton}  from 'util/enumerable/Singleton.types'

import {Games}               from 'core/game/Games'
import {GameStyles}          from 'core/gameStyle/GameStyles'
import {CompanionEnumByName} from 'util/enumerable/companion/CompanionEnumByName'

import SM3DW = GameStyles.SM3DW

export class Versions
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly SMM_V1_00 =         new Versions('v1.00',        1,     null,)
    public static readonly SMM_V1_01 =         new Versions('v1.01',        1,     new Date(2015, 9,  10,),)
    public static readonly SMM_V1_10 =         new Versions('v1.10',        1,     new Date(2015, 9,  23,),)
    public static readonly SMM_V1_20 =         new Versions('v1.20',        1,     new Date(2015, 11, 4,),)
    public static readonly SMM_V1_21 =         new Versions('v1.21',        1,     new Date(2015, 11, 12,),)
    public static readonly SMM_V1_30 =         new Versions('v1.30',        1,     new Date(2015, 12, 21,),)
    public static readonly SMM_V1_31 =         new Versions('v1.31',        1,     new Date(2015, 12, 28,),)
    public static readonly SMM_V1_32 =         new Versions('v1.32',        1,     new Date(2016, 1,  28,),)
    public static readonly SMM_V1_40 =         new Versions('v1.40',        1,     new Date(2016, 3,  9,),)
    public static readonly SMM_V1_41 =         new Versions('v1.41',        1,     new Date(2016, 3,  17,),)
    public static readonly SMM_V1_42 =         new Versions('v1.42',        1,     new Date(2016, 4,  6,),)
    public static readonly SMM_V1_43 =         new Versions('v1.43',        1,     new Date(2016, 5,  19,),)
    public static readonly SMM_V1_44 =         new Versions('v1.44',        1,     new Date(2016, 7,  22,),)
    public static readonly SMM_V1_45 =         new Versions('v1.45',        1,     new Date(2016, 11, 30,),)
    public static readonly SMM_V1_46 =         new Versions('v1.46',        1,     new Date(2017, 9,  5,),)
    public static readonly SMM_V1_47 =         new Versions('v1.47',        1,     new Date(2017, 11, 7,),)

    public static readonly SMM3DS_V1_00 =      new Versions('v1.00',        '3DS', null,)
    public static readonly SMM3DS_V1_02 =      new Versions('v1.02',        '3DS', new Date(2016, 12, 2,),)
    public static readonly SMM3DS_V1_03 =      new Versions('v1.03',        '3DS', new Date(2017, 4,  27,),)
    public static readonly SMM3DS_V1_04 =      new Versions('v1.04',        '3DS', new Date(2017, 11, 7,),)
    public static readonly SMM3DS_V1_05 =      new Versions('v1.05',        '3DS', new Date(2021, 3,  23,),)

    public static readonly SMM2_V1_0_0 =       new Versions('v1.0.0',       2,     null,)
    public static readonly SMM2_V1_1_0 =       new Versions('v1.1.0',       2,     new Date(2019, 11, 1,),)
    public static readonly SMM2_V2_0_0 =       new Versions('v2.0.0',       2,     new Date(2019, 12, 5,),)
    public static readonly SMM2_V3_0_0 =       new Versions('v3.0.0',       2,     new Date(2020, 4,  22,),)
    public static readonly SMM2_SM3DW_V3_0_0 = new Versions('SM3DW v3.0.0', 2,     new Date(2020, 4,  22,), SM3DW,)
    public static readonly SMM2_V3_0_1 =       new Versions('v3.0.1',       2,     new Date(2020, 7,  15,),)
    public static readonly SMM2_V3_0_2 =       new Versions('v3.0.2',       2,     new Date(2022, 11, 23,),)
    public static readonly SMM2_V3_0_3 =       new Versions('v3.0.3',       2,     new Date(2024, 1, 6,),)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumByNameSingleton<Versions, typeof Versions> = class CompanionEnum_Versions
        extends CompanionEnumByName<Versions, typeof Versions> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_Versions

        private constructor() {
            super(Versions,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_Versions()
        }

        //endregion -------------------- Singleton usage --------------------

        public override getValueByName(value: Nullable<| Versions | string>,): Versions {
            if (value == null)
                throw new TypeError(`No "${this.instance.name}" could be found by a null name.`,)
            if (value instanceof this.instance)
                return value
            const valueFound = this.values.findFirstOrNull(it => it.simpleName === value,)
            if (valueFound == null)
                throw new ReferenceError(`No "${this.instance.name}" could be found by this value "${value}".`,)
            return valueFound
        }

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #name
    readonly #game
    readonly #releaseDate
    readonly #gameStyle

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(name: PossibleName, game: PossibleGame, releaseDate: NullOr<Date>,)
    private constructor(name: PossibleName, game: PossibleGame, releaseDate: NullOr<Date>, gameStyle: GameStyles_SM3DW,)
    private constructor(name: PossibleName, game: PossibleGame, releaseDate: NullOr<Date>, gameStyle?: GameStyles_SM3DW,) {
        super()
        this.#name = name
        this.#game = Games.CompanionEnum.get.getValueByUrlName(game,)
        this.#releaseDate = releaseDate
        this.#gameStyle = gameStyle ?? null
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get simpleName(): PossibleName {
        return this.#name
    }

    public get game(): Games {
        return this.#game
    }

    public get releaseDate(): NullOr<Date> {
        return this.#releaseDate
    }

    public get gameStyle(): NullOr<GameStyles_SM3DW> {
        return this.#gameStyle
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}

type PossibleGame = | 1 | '3DS' | 2
