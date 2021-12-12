import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from '../../theme/Themes.types';
import type {StaticReference}                                                                                                                                                       from '../../../util/enum/Enum.types';

import {Enum}                                       from '../../../util/enum/Enum';
import {Themes as OriginalThemes}                   from '../../theme/Themes';
import {Night, VariantEditorImage_RegularGameStyle} from './EditorImage.types';

export class Themes
    extends OriginalThemes {

    //region -------------------- Enum instances --------------------

    public static readonly GROUND =      new Themes(OriginalThemes.GROUND,      'plain',)        as Themes & typeof OriginalThemes['GROUND'];
    public static readonly UNDERGROUND = new Themes(OriginalThemes.UNDERGROUND, 'underground',)  as Themes & typeof OriginalThemes['UNDERGROUND'];
    public static readonly UNDERWATER =  new Themes(OriginalThemes.UNDERWATER,  'water',)        as Themes & typeof OriginalThemes['UNDERWATER'];
    public static readonly DESERT =      new Themes(OriginalThemes.DESERT,      'desert',)       as Themes & typeof OriginalThemes['DESERT'];
    public static readonly SNOW =        new Themes(OriginalThemes.SNOW,        'snow', )        as Themes & typeof OriginalThemes['SNOW'];
    public static readonly SKY =         new Themes(OriginalThemes.SKY,         'athletic',)     as Themes & typeof OriginalThemes['SKY'];
    public static readonly FOREST =      new Themes(OriginalThemes.FOREST,      'woods',)        as Themes & typeof OriginalThemes['FOREST'];
    public static readonly GHOST_HOUSE = new Themes(OriginalThemes.GHOST_HOUSE, 'hauntedhouse',) as Themes & typeof OriginalThemes['GHOST_HOUSE'];
    public static readonly AIRSHIP =     new Themes(OriginalThemes.AIRSHIP,     'airship',)      as Themes & typeof OriginalThemes['AIRSHIP'];
    public static readonly CASTLE =      new Themes(OriginalThemes.CASTLE,      'castle',)       as Themes & typeof OriginalThemes['CASTLE'];

    public static readonly VOLCANO =     new Themes(OriginalThemes.VOLCANO) as Themes & typeof OriginalThemes['VOLCANO'];
    public static readonly SPACE =       new Themes(OriginalThemes.SPACE)   as Themes & typeof OriginalThemes['SPACE'];

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Attributes --------------------

    readonly #parent;
    readonly #text: | VariantEditorImage_RegularGameStyle | null;

    //endregion -------------------- Attributes --------------------

    // @ts-ignore
    protected constructor(enumeration: Themes,)
    private constructor(enumeration: typeof OriginalThemes['VOLCANO'] | typeof OriginalThemes['SPACE'],)
    private constructor(enumeration: OriginalThemes, text: VariantEditorImage_RegularGameStyle,)
    private constructor(enumeration: OriginalThemes, text: | VariantEditorImage_RegularGameStyle | null = null,) {
        super(enumeration);
        this.#parent = enumeration;
        if (enumeration instanceof Themes)
            this.#text = enumeration.#text;
        else
            this.#text = text;
    }

    //region -------------------- Getter methods --------------------

    public get parent(): OriginalThemes {
        return this.#parent;
    }

    public get text(): | VariantEditorImage_RegularGameStyle | null {
        return this.#text;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public getName<N extends string = string, >(name: | N | null, isNightTheme: false,): | '' | `${N}_${NonNullable<this['text']>}`
    public getName<N extends string = string, >(name: | N | null, isNightTheme: true,): | '' | `${N}_${Night<NonNullable<this['text']>>}`
    public getName<N extends string = string, >(name: | N | null, isNightTheme: boolean,): | '' | `${N}_${NonNullable<this['text']>}` | `${N}_${Night<NonNullable<this['text']>>}`
    public getName(name: |string|null, isNightTheme: boolean,): string {
        if (name == null)
            return '';
        const text = this.text;
        if (text == null)
            return '';
        return isNightTheme ? `${name}_${text}_night` : `${name}_${text}`;
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
