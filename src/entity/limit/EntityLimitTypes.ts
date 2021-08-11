import type {SimpleEnum} from '../../util/enum/EnumTypes';

import {Enum} from '../../util/enum/Enum';

//region -------------------- Limit type texts --------------------

export type PossibleEntityLimitTypeEnglishName = | 'Playing' | 'Editor';
export type EntityLimitTypeEnglishNameArray = readonly ['Playing', 'Editor',];

//endregion -------------------- Limit type texts --------------------
//region -------------------- Enum types --------------------

export type EntityLimitTypesOrdinals = | 0 | 1;
export type EntityLimitTypesNames = | 'PLAYING' | 'EDITOR';
export type SimpleEntityLimitTypes<T = EntityLimitTypes, > = SimpleEnum<EntityLimitTypesNames, T>;
export type EntityLimitTypesArray<T = EntityLimitTypes, > = readonly [
    SimpleEntityLimitTypes<T>['PLAYING'],
    SimpleEntityLimitTypes<T>['EDITOR'],
];

//endregion -------------------- Enum types --------------------

export class EntityLimitTypes
    extends Enum<EntityLimitTypesOrdinals, EntityLimitTypesNames> {

    //region -------------------- Enum instances --------------------

    public static readonly PLAYING = new EntityLimitTypes('Playing',);
    public static readonly EDITOR =  new EntityLimitTypes('Editor',);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES: EntityLimitTypesArray;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #englishName;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: PossibleEntityLimitTypeEnglishName,) {
        super(EntityLimitTypes);
        this.#englishName = englishName;
    }

    //region -------------------- Getter methods --------------------

    public get englishName(): PossibleEntityLimitTypeEnglishName {
        return this.#englishName;
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
    public static getValue(name: PossibleEntityLimitTypeEnglishName,): EntityLimitTypes
    public static getValue(name: string,): | EntityLimitTypes | null
    public static getValue<I extends EntityLimitTypes = EntityLimitTypes, >(instance: I,): I
    public static getValue(value: | EntityLimitTypes | string | number | null | undefined,): | EntityLimitTypes | null
    public static getValue(value: | EntityLimitTypes | string | number | null | undefined,): | EntityLimitTypes | null {
        return value == null
            ? null
            : typeof value === 'string'
                ? Reflect.get(this, value.toUpperCase(),)
                    ?? this.values.find(limit => limit.englishName === value)
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