import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleName, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './Versions.types';
import type {StaticReference}                                                                                                                                                                     from '../../util/enum/Enum.types';

import {Enum}       from '../../util/enum/Enum';
import {Games}      from '../game/Games';
import {GameStyles} from '../gameStyle/GameStyles';

export class Versions
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static/* readonly*/ SMM_V1_00;
    public static/* readonly*/ SMM_V1_01;
    public static/* readonly*/ SMM_V1_10;
    public static/* readonly*/ SMM_V1_20;
    public static/* readonly*/ SMM_V1_21;
    public static/* readonly*/ SMM_V1_30;
    public static/* readonly*/ SMM_V1_31;
    public static/* readonly*/ SMM_V1_32;
    public static/* readonly*/ SMM_V1_40;
    public static/* readonly*/ SMM_V1_41;
    public static/* readonly*/ SMM_V1_42;
    public static/* readonly*/ SMM_V1_43;
    public static/* readonly*/ SMM_V1_44;
    public static/* readonly*/ SMM_V1_45;
    public static/* readonly*/ SMM_V1_46;
    public static/* readonly*/ SMM_V1_47;

    public static/* readonly*/ SMM3DS_V1_00;
    public static/* readonly*/ SMM3DS_V1_02;
    public static/* readonly*/ SMM3DS_V1_03;
    public static/* readonly*/ SMM3DS_V1_04;
    public static/* readonly*/ SMM3DS_V1_05;

    public static/* readonly*/ SMM2_V1_0_0;
    public static/* readonly*/ SMM2_V1_1_0;
    public static/* readonly*/ SMM2_V2_0_0;
    public static/* readonly*/ SMM2_V3_0_0;
    public static/* readonly*/ SMM2_SM3DW_V3_0_0;
    public static/* readonly*/ SMM2_V3_0_1;

    static {    
        this.SMM_V1_00 =         new Versions('v1.00',        1,     null,);
        this.SMM_V1_01 =         new Versions('v1.01',        1,     new Date(2015, 9,  10,),);
        this.SMM_V1_10 =         new Versions('v1.10',        1,     new Date(2015, 9,  23,),);
        this.SMM_V1_20 =         new Versions('v1.20',        1,     new Date(2015, 11, 4,),);
        this.SMM_V1_21 =         new Versions('v1.21',        1,     new Date(2015, 11, 12,),);
        this.SMM_V1_30 =         new Versions('v1.30',        1,     new Date(2015, 12, 21,),);
        this.SMM_V1_31 =         new Versions('v1.31',        1,     new Date(2015, 12, 28,),);
        this.SMM_V1_32 =         new Versions('v1.32',        1,     new Date(2016, 1,  28,),);
        this.SMM_V1_40 =         new Versions('v1.40',        1,     new Date(2016, 3,  9,),);
        this.SMM_V1_41 =         new Versions('v1.41',        1,     new Date(2016, 3,  17,),);
        this.SMM_V1_42 =         new Versions('v1.42',        1,     new Date(2016, 4,  6,),);
        this.SMM_V1_43 =         new Versions('v1.43',        1,     new Date(2016, 5,  19,),);
        this.SMM_V1_44 =         new Versions('v1.44',        1,     new Date(2016, 7,  22,),);
        this.SMM_V1_45 =         new Versions('v1.45',        1,     new Date(2016, 11, 30,),);
        this.SMM_V1_46 =         new Versions('v1.46',        1,     new Date(2017, 9,  5,),);
        this.SMM_V1_47 =         new Versions('v1.47',        1,     new Date(2017, 11, 7,),);
    
        this.SMM3DS_V1_00 =      new Versions('v1.00',        '3DS', null,);
        this.SMM3DS_V1_02 =      new Versions('v1.02',        '3DS', new Date(2016, 12, 2,),);
        this.SMM3DS_V1_03 =      new Versions('v1.03',        '3DS', new Date(2017, 4,  27,),);
        this.SMM3DS_V1_04 =      new Versions('v1.04',        '3DS', new Date(2017, 11, 7,),);
        this.SMM3DS_V1_05 =      new Versions('v1.05',        '3DS', new Date(2021, 3,  23,),);
    
        this.SMM2_V1_0_0 =       new Versions('v1.0.0',       2,     null,);
        this.SMM2_V1_1_0 =       new Versions('v1.1.0',       2,     new Date(2019, 11, 1,),);
        this.SMM2_V2_0_0 =       new Versions('v2.0.0',       2,     new Date(2019, 12, 5,),);
        this.SMM2_V3_0_0 =       new Versions('v3.0.0',       2,     new Date(2020, 4,  22,),);
        this.SMM2_SM3DW_V3_0_0 = new Versions('SM3DW v3.0.0', 2,     new Date(2020, 4,  22,), GameStyles.SUPER_MARIO_3D_WORLD,);
        this.SMM2_V3_0_1 =       new Versions('v3.0.1',       2,     new Date(2020, 7,  15,),);
    }

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: Versions;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #name;
    readonly #game;
    readonly #releaseDate;
    readonly #gameStyle;

    //endregion -------------------- Attributes --------------------

    private constructor(name: PossibleName, game: | 1 | '3DS' | 2, releaseDate: | Date | null,)
    private constructor(name: PossibleName, game: | 1 | '3DS' | 2, releaseDate: | Date | null, gameStyle: typeof GameStyles['SUPER_MARIO_3D_WORLD'],)
    private constructor(name: PossibleName, game: | 1 | '3DS' | 2, releaseDate: | Date | null, gameStyle?: typeof GameStyles['SUPER_MARIO_3D_WORLD'],) {
        super();
        this.#name = name;
        this.#game = Games.getValue(game.toString() as | '1' | '3DS' | '2');
        this.#releaseDate = releaseDate;
        this.#gameStyle = gameStyle ?? null;
    }

    //region -------------------- Getter methods --------------------

    public get simpleName(): PossibleName {
        return this.#name;
    }

    public get game(): Games {
        return this.#game;
    }

    public get gameStyle(): | typeof GameStyles['SUPER_MARIO_3D_WORLD'] | null {
        return this.#gameStyle;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static get everySimpleNames(): readonly PossibleName[] {
        return this.values.map(enumerable => enumerable.simpleName);
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<Versions> {
        return Versions;
    }

    //region -------------------- Enum value methods --------------------

    protected static override _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.simpleName === value)
            ?? null;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends Versions = Versions, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): Versions
    public static getValue(value: PossibleValue,): | Versions | null
    public static getValue(value: PossibleValue,) {
        return Enum.getValueOn(this, value,);
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }

    //endregion -------------------- Enum value methods --------------------

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
