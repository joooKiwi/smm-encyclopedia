export type PossibleEntityLimitTypeEnglishName = 'Playing' | 'Editor';

/**
 * @enum
 */
export class EntityLimitTypes {

    //region -------------------- enum instances --------------------

    public static readonly PLAYING = new EntityLimitTypes('Playing');
    public static readonly EDITOR = new EntityLimitTypes('Editor');

    //endregion -------------------- enum instances --------------------

    static #VALUES: readonly [EntityLimitTypes, EntityLimitTypes,];
    //region -------------------- Attributes --------------------

    readonly #englishName;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: PossibleEntityLimitTypeEnglishName,) {
        this.#englishName = englishName;
    }

    //region -------------------- Methods --------------------

    public get englishName(): PossibleEntityLimitTypeEnglishName {
        return this.#englishName;
    }

    public static get everyEnglishNames(): readonly [PossibleEntityLimitTypeEnglishName, PossibleEntityLimitTypeEnglishName,] {
        return this.values.map(type => type.englishName) as [PossibleEntityLimitTypeEnglishName, PossibleEntityLimitTypeEnglishName,];
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- enum methods --------------------

    public static getValue(value: EntityLimitTypes | PossibleEntityLimitTypeEnglishName): EntityLimitTypes
    public static getValue(value: string): EntityLimitTypes | null
    public static getValue(value: EntityLimitTypes | string): EntityLimitTypes | null
    public static getValue(value: EntityLimitTypes | string): EntityLimitTypes | null {
        return typeof value === 'string'
            ? this.values.find(limit => limit.englishName === value) ?? null
            : value;
    }

    public static get values(): readonly [EntityLimitTypes, EntityLimitTypes,] {
        return this.#VALUES ?? (this.#VALUES = [
            this.PLAYING,
            this.EDITOR,
        ]);
    }

    public static* [Symbol.iterator]() {
        for (const value of this.values)
            yield value;
    }

    //endregion -------------------- enum methods --------------------

}