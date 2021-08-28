import type {EntityLimitTypeEnglishNameArray, EntityLimitTypesArray, EntityLimitTypesNames, EntityLimitTypesOrdinals, PossibleEntityLimitTypeEnglishCommonText, PossibleEntityLimitTypeEnglishName} from './EntityLimitTypes.types';

import {Enum} from '../../util/enum/Enum';

export class EntityLimitTypes
    extends Enum<EntityLimitTypesOrdinals, EntityLimitTypesNames> {

    //region -------------------- Enum instances --------------------

    public static readonly PLAYING = new EntityLimitTypes('Playing', 'While playing',);
    public static readonly EDITOR =  new EntityLimitTypes('Editor',  'In the editor',);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES: EntityLimitTypesArray;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #englishName;
    readonly #englishCommonText;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: PossibleEntityLimitTypeEnglishName, englishCommonText: PossibleEntityLimitTypeEnglishCommonText,) {
        super(EntityLimitTypes);
        this.#englishName = englishName;
        this.#englishCommonText = englishCommonText;
    }

    //region -------------------- Getter methods --------------------

    public get englishName(): PossibleEntityLimitTypeEnglishName {
        return this.#englishName;
    }

    public get englishCommonText(): PossibleEntityLimitTypeEnglishCommonText {
        return this.#englishCommonText;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static get everyEnglishNames(): EntityLimitTypeEnglishNameArray {
        return this.values.map(type => type.englishName) as unknown as EntityLimitTypeEnglishNameArray;
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends EntityLimitTypesOrdinals = EntityLimitTypesOrdinals, >(ordinal: O,): EntityLimitTypesArray[O]
    public static getValue<O extends number = number, >(ordinal: O,): | NonNullable<EntityLimitTypesArray[O]> | null
    public static getValue(name: | PossibleEntityLimitTypeEnglishName | EntityLimitTypesNames | PossibleEntityLimitTypeEnglishCommonText,): EntityLimitTypes
    public static getValue(name: string,): | EntityLimitTypes | null
    public static getValue<I extends EntityLimitTypes = EntityLimitTypes, >(instance: I,): I
    public static getValue(value: | EntityLimitTypes | string | number | null | undefined,): | EntityLimitTypes | null
    public static getValue(value: | EntityLimitTypes | string | number | null | undefined,): | EntityLimitTypes | null {
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

    public static get values(): EntityLimitTypesArray {
        return this.#VALUES ??= [
            this.PLAYING,
            this.EDITOR,
        ];
    }


    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}