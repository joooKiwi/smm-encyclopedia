import type {EnumArray, EnumArray_OnlyCourseTheme, EnumArray_OnlyWorldTheme, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from '../../../theme/Themes.types';
import type {Night}                                                                                                                                                                                                    from './EditorImage.types';
import type {StaticReference}                                                                                                                                                                                                            from '../../../../util/enum/Enum.types';

import {Enum}                     from '../../../../util/enum/Enum';
import {Themes as OriginalThemes} from '../../../theme/Themes';

export class Themes
    extends OriginalThemes {

    //region -------------------- Enum instances --------------------

    public static readonly GROUND =      new Themes(OriginalThemes.GROUND,     ) as Themes & typeof OriginalThemes['GROUND'];
    public static readonly UNDERGROUND = new Themes(OriginalThemes.UNDERGROUND,) as Themes & typeof OriginalThemes['UNDERGROUND'];
    public static readonly UNDERWATER =  new Themes(OriginalThemes.UNDERWATER, ) as Themes & typeof OriginalThemes['UNDERWATER'];
    public static readonly DESERT =      new Themes(OriginalThemes.DESERT,     ) as Themes & typeof OriginalThemes['DESERT'];
    public static readonly SNOW =        new Themes(OriginalThemes.SNOW,       ) as Themes & typeof OriginalThemes['SNOW'];
    public static readonly SKY =         new Themes(OriginalThemes.SKY,        ) as Themes & typeof OriginalThemes['SKY'];
    public static readonly FOREST =      new Themes(OriginalThemes.FOREST,     ) as Themes & typeof OriginalThemes['FOREST'];
    public static readonly GHOST_HOUSE = new Themes(OriginalThemes.GHOST_HOUSE,) as Themes & typeof OriginalThemes['GHOST_HOUSE'];
    public static readonly AIRSHIP =     new Themes(OriginalThemes.AIRSHIP,    ) as Themes & typeof OriginalThemes['AIRSHIP'];
    public static readonly CASTLE =      new Themes(OriginalThemes.CASTLE,     ) as Themes & typeof OriginalThemes['CASTLE'];

    public static readonly VOLCANO =     new Themes(OriginalThemes.VOLCANO) as Themes & typeof OriginalThemes['VOLCANO'];
    public static readonly SPACE =       new Themes(OriginalThemes.SPACE)   as Themes & typeof OriginalThemes['SPACE'];

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Attributes --------------------

    static #COURSES?: EnumArray_OnlyCourseTheme<Themes>;
    static #WORLDS?: EnumArray_OnlyWorldTheme<Themes>;

    readonly #parent;

    //endregion -------------------- Attributes --------------------

    // @ts-ignore
    protected constructor(enumeration: Themes,)
    private constructor(enumeration: OriginalThemes,)
    private constructor(enumeration: OriginalThemes,) {
        super(enumeration);
        this.#parent = enumeration;
    }

    //region -------------------- Getter methods --------------------

    public get parent(): OriginalThemes {
        return this.#parent;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public getGameName(name: null, isNightTheme: any,): ''
    public getGameName<N extends string = string, >(name: | N | null, isNightTheme: false,): | '' | `${N}_${NonNullable<this['gameName']>}`
    public getGameName<N extends string = string, >(name: N, isNightTheme: false,): | '' | `${N}_${NonNullable<this['gameName']>}`
    public getGameName<N extends string = string, >(name: | N | null, isNightTheme: true,): | '' | `${N}_${Night<NonNullable<this['gameName']>>}`
    public getGameName<N extends string = string, >(name: N, isNightTheme: true,): | '' | `${N}_${Night<NonNullable<this['gameName']>>}`
    public getGameName<N extends string = string, >(name: | N | null, isNightTheme: boolean,): | '' | `${N}_${NonNullable<this['gameName']>}` | `${N}_${Night<NonNullable<this['gameName']>>}`
    public getGameName<N extends string = string, >(name: N, isNightTheme: boolean,): | '' | `${N}_${NonNullable<this['gameName']>}` | `${N}_${Night<NonNullable<this['gameName']>>}`
    public getGameName(name: | string | null, isNightTheme: boolean,) {
        if (name == null)
            return '';
        const text = this.gameName;
        if (text == null)
            return '';
        return isNightTheme ? `${name}_${text}_night` : `${name}_${text}`;
    }

    public static get courseThemes(): EnumArray_OnlyCourseTheme<Themes> {
        return this.#COURSES ??= OriginalThemes.courseThemes.map(theme => this.getValue(theme)) as unknown as EnumArray_OnlyCourseTheme<Themes>;
    }

    public static get worldThemes(): EnumArray_OnlyWorldTheme<Themes> {
        return this.#WORLDS ??= OriginalThemes.worldThemes.map(theme => this.getValue(theme)) as unknown as EnumArray_OnlyWorldTheme<Themes>;
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<Themes> {
        return Themes;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O, Themes>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O, Themes>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N, Themes>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S, Themes>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S, Themes>
    public static getValue<I extends Themes = Themes, >(instance: I,): I
    public static getValue(instance: OriginalThemes,): Themes
    public static getValue(value: PossibleNonNullableValue,): Themes
    public static getValue(value: PossibleValue,): | Themes | null
    public static getValue(value: PossibleValue,) {
        return value == null ? null
            : this.values[OriginalThemes.getValue(value)?.ordinal ?? -1] ?? null;
    }

    public static get values(): EnumArray<Themes> {
        return Enum.getValuesOn(this);
    }


    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
