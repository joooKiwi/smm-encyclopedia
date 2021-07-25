import type {SimpleEnum} from '../../util/enum/EnumTypes';

//region -------------------- limit type texts --------------------

export type PossibleEntityLimitTypeEnglishName = | 'Playing' | 'Editor';
export type EntityLimitTypeEnglishNameArray = readonly ['Playing', 'Editor',];

//endregion -------------------- limit type texts --------------------
//region -------------------- Enum types --------------------

export type EntityLimitTypesOrdinals = | 0 | 1;
export type EntityLimitTypesNames = | 'PLAYING' | 'EDITOR';
export type SimpleEntityLimitTypes<T = EntityLimitTypes, > = SimpleEnum<EntityLimitTypesNames, T>;
export type EntityLimitTypesArray<T = EntityLimitTypes, > = readonly [
    SimpleEntityLimitTypes<T>['PLAYING'],
    SimpleEntityLimitTypes<T>['EDITOR'],
];

//endregion -------------------- Enum types --------------------

/**
 * @enum
 */
export class EntityLimitTypes {

    //region -------------------- enum instances --------------------

    public static readonly PLAYING = new EntityLimitTypes('Playing',);
    public static readonly EDITOR =  new EntityLimitTypes('Editor',);

    //endregion -------------------- enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES: EntityLimitTypesArray;
    static #LAST_ORDINAL: EntityLimitTypesOrdinals = 0;
    readonly #ordinal: EntityLimitTypesOrdinals;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #englishName;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: PossibleEntityLimitTypeEnglishName,) {
        this.#ordinal = EntityLimitTypes.#LAST_ORDINAL++ as EntityLimitTypesOrdinals;
        this.#englishName = englishName;
    }

    //region -------------------- Methods --------------------

    public get englishName(): PossibleEntityLimitTypeEnglishName {
        return this.#englishName;
    }

    public static get everyEnglishNames(): EntityLimitTypeEnglishNameArray {
        return this.values.map(type => type.englishName) as unknown as EntityLimitTypeEnglishNameArray;
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- enum methods --------------------

    public get ordinal(): EntityLimitTypesOrdinals {
        return this.#ordinal;
    }

    public static getValue(value: | EntityLimitTypes | PossibleEntityLimitTypeEnglishName,): EntityLimitTypes
    public static getValue(value: string,): | EntityLimitTypes | null
    public static getValue(value: | EntityLimitTypes | string,): | EntityLimitTypes | null
    public static getValue(value: | EntityLimitTypes | string,): | EntityLimitTypes | null {
        return typeof value === 'string'
            ? this.values.find(limit => limit.englishName === value) ?? null
            : value;
    }

    public static get values(): EntityLimitTypesArray {
        return this.#VALUES ?? (this.#VALUES = [
            this.PLAYING,
            this.EDITOR,
        ]);
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- enum methods --------------------

}