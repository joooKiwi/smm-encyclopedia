import type {EnumArray, EnumArray_EnglishName, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleEnglishCommonText, PossibleEnglishName, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './EntityLimitTypes.types';
import type {StaticReference}                                                                                                                                                                                                                              from '../../util/enum/Enum.types';

import {Enum} from '../../util/enum/Enum';

export class EntityLimitTypes
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static /*readonly*/ WHILE_PLAYING;
    public static /*readonly*/ EDITOR;

    static {
        this.WHILE_PLAYING = new EntityLimitTypes('While Playing', 'While playing',);
        this.EDITOR =        new EntityLimitTypes('Editor',        'In the editor',);
    }

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: EntityLimitTypes;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #englishName;
    readonly #englishCommonText;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: PossibleEnglishName, englishCommonText: PossibleEnglishCommonText,) {
        super();
        this.#englishName = englishName;
        this.#englishCommonText = englishCommonText;
    }

    //region -------------------- Getter methods --------------------

    public get englishName(): PossibleEnglishName {
        return this.#englishName;
    }

    public get englishCommonText(): PossibleEnglishCommonText {
        return this.#englishCommonText;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static get everyEnglishNames(): EnumArray_EnglishName {
        return this.values.map(type => type.englishName) as unknown as EnumArray_EnglishName;
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<EntityLimitTypes> {
        return EntityLimitTypes;
    }

    //region -------------------- Enum value methods --------------------

    protected static override _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.englishName === value
                || enumerable.englishCommonText === value)
            ?? null;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends EntityLimitTypes = EntityLimitTypes, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): EntityLimitTypes
    public static getValue(value: PossibleValue,): | EntityLimitTypes | null
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