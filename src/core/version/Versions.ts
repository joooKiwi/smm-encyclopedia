import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, Names, Ordinals, PossibleName, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './Versions.types';
import type {StaticReference}                                                                                                                                 from '../../util/enum/Enum.types';

import {Enum}       from '../../util/enum/Enum';
import {Games}      from '../game/Games';
import {GameStyles} from '../gameStyle/GameStyles';

export class Versions
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly V1_20 = new Versions('v1.20', 1,);
    public static readonly V1_30 = new Versions('v1.30', 1,);
    public static readonly V1_40 = new Versions('v1.40', 2,);

    public static readonly V_2_0_0 = new Versions('v2.0.0', 2,);
    public static readonly V_3_0_0 = new Versions('v3.0.0', 2,);
    public static readonly SM3DW_V_3_0_0 = new Versions('SM3DW v3.0.0', 2, GameStyles.SUPER_MARIO_3D_WORLD,);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: Versions;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #name;
    readonly #game;
    readonly #gameStyle;

    //endregion -------------------- Attributes --------------------

    private constructor(name: PossibleName, game: | 1 | 2,)
    private constructor(name: PossibleName, game: | 1 | 2, gameStyle: typeof GameStyles['SUPER_MARIO_3D_WORLD'],)
    private constructor(name: PossibleName, game: | 1 | 2, gameStyle?: typeof GameStyles['SUPER_MARIO_3D_WORLD'],) {
        super();
        this.#name = name;
        this.#game = Games.getValue((game - 1) as | 0 | 1,);
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
    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<Versions> {
        return Versions;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue(name: PossibleStringValue,): Versions
    public static getValue(name: string,): | Versions | null
    public static getValue<I extends Versions = Versions, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): Versions
    public static getValue(value: PossibleValue,): | Versions | null
    public static getValue(value: PossibleValue,) {
        return value == null
            ? null
            : typeof value === 'string'
                ? Reflect.get(this, value.toUpperCase(),)
                    ?? this.values.find(enumeration => enumeration.simpleName === value)
                    ?? null
                : typeof value === 'number'
                    ? this.values[value] ?? null
                    : value;
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
