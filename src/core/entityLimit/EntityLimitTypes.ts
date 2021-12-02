import type {EnumArray, EnumArray_EnglishName, Names, Ordinals, PossibleEnglishCommonText, PossibleEnglishName, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './EntityLimitTypes.types';
import type {StaticReference}                                                                                                                                                 from '../../util/enum/Enum.types';

import {Enum} from '../../util/enum/Enum';

export class EntityLimitTypes
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly WHILE_PLAYING = new EntityLimitTypes('While Playing', 'While playing',);
    public static readonly EDITOR =        new EntityLimitTypes('Editor',        'In the editor',);

    //endregion -------------------- Enum instances --------------------
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

    protected get _static(): StaticReference<EntityLimitTypes> {
        return EntityLimitTypes;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumArray[O]
    public static getValue<O extends number = number, >(ordinal: O,): | NonNullable<EnumArray[O]> | null
    public static getValue<N extends Names = Names, >(name: N,): typeof EntityLimitTypes[N]
    public static getValue(name: PossibleStringValue,): EntityLimitTypes
    public static getValue(name: string,): | EntityLimitTypes | null
    public static getValue<I extends EntityLimitTypes = EntityLimitTypes, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): EntityLimitTypes
    public static getValue(value: PossibleValue,): | EntityLimitTypes | null
    public static getValue(value: PossibleValue,) {
        return value == null
            ? null
            : typeof value === 'string'
                ? Reflect.get(this, value.toUpperCase(),)
                    ?? this.values.find(limit => limit.englishName === value)
                    ?? this.values.find(limit => limit.englishCommonText === value)
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