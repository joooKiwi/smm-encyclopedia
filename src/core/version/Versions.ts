import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleName, PossibleName_SMM1, PossibleName_SMM2, PossibleName_SMM3DS} from './Versions.types'

import {Games}      from '../game/Games'
import {GameStyles} from '../gameStyle/GameStyles'

//region -------------------- Import from deconstruction --------------------

const {SUPER_MARIO_MAKER_1, SUPER_MARIO_MAKER_2, SUPER_MARIO_MAKER_FOR_NINTENDO_3DS,} = Games
const {SUPER_MARIO_3D_WORLD,} = GameStyles

//endregion -------------------- Import from deconstruction --------------------

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
    public static readonly SMM2_SM3DW_V3_0_0 = new Versions('SM3DW v3.0.0', 2,     new Date(2020, 4,  22,), SUPER_MARIO_3D_WORLD,)
    public static readonly SMM2_V3_0_1 =       new Versions('v3.0.1',       2,     new Date(2020, 7,  15,),)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: Versions

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    readonly #name
    readonly #game
    readonly #releaseDate
    readonly #gameStyle

    //endregion -------------------- Fields --------------------

    private constructor(name: PossibleName, game: | 1 | '3DS' | 2, releaseDate: | Date | null,)
    private constructor(name: PossibleName, game: | 1 | '3DS' | 2, releaseDate: | Date | null, gameStyle: typeof GameStyles['SUPER_MARIO_3D_WORLD'],)
    private constructor(name: PossibleName, game: | 1 | '3DS' | 2, releaseDate: | Date | null, gameStyle?: typeof GameStyles['SUPER_MARIO_3D_WORLD'],) {
        super()
        this.#name = name
        this.#game = Games.getValueByValue(game === 1 ? 'SMM' : `SMM${game}` as const)
        this.#releaseDate = releaseDate
        this.#gameStyle = gameStyle ?? null
    }

    //region -------------------- Getter methods --------------------

    public get simpleName(): PossibleName {
        return this.#name
    }

    public get game(): Games {
        return this.#game
    }

    public get gameStyle(): | typeof GameStyles['SUPER_MARIO_3D_WORLD'] | null {
        return this.#gameStyle
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static get everyNames(): readonly PossibleName[] {
        return this.values.map(it => it.simpleName).toArray()
    }

    public static get everyNames_smm1(): readonly PossibleName_SMM1[] {
        return this.values.filter(it => it.game === SUPER_MARIO_MAKER_1).map(it => it.simpleName as PossibleName_SMM1).toArray()
    }

    public static get everyNames_smm3ds(): readonly PossibleName_SMM3DS[] {
        return this.values.filter(it => it.game === SUPER_MARIO_MAKER_FOR_NINTENDO_3DS).map(it => it.simpleName as PossibleName_SMM3DS).toArray()
    }

    public static get everyNames_smm2(): readonly PossibleName_SMM2[] {
        return this.values.filter(it => it.game === SUPER_MARIO_MAKER_2).map(it => it.simpleName as PossibleName_SMM2).toArray()
    }


    // public static getValueByName<T extends string, >(value: | Versions | T | null | undefined,): VersionsByName<T>
    public static getValueByName(value: | Versions | string | null | undefined,): Versions {
        if (value == null)
            throw new TypeError(`No "${this.name}" could be found by a null value.`)
        if (value instanceof this)
            return value
        const valueFound = this.values.find(it => it.simpleName === value)
        if (valueFound == null)
            throw new ReferenceError(`No "Versions" could be found by this value "${value}".`)
        return valueFound
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): EnumerableConstructor<Ordinals, Names> {
        return Versions
    }

    public static getValue(value: PossibleValueByEnumerable<Versions>,): Versions {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<Versions> {
        return Enum.getValuesOn(this)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}
