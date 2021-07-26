import type {EntityCategory} from './EntityCategory';
import type {PossibleTheme}  from '../theme/Themes';
import type {SimpleEnum}     from '../../util/enum/EnumTypes';

import {EntityCategoryLoader} from './EntityCategoryLoader';
import {getLastOrdinalOn}     from '../../util/enum/ordinalMethods';

//region -------------------- category texts --------------------

export type PossibleEntityCategories = | 'Terrain' | 'Item' | 'Enemy' | 'Gizmo';

//endregion -------------------- category texts --------------------
//region -------------------- Enum types --------------------

export type EntityCategoriesOrdinals = | 0 | 1 | 2 | 3;
export type EntityCategoriesNames = | 'TERRAIN' | 'ITEM' | 'ENEMY' | 'GIZMO';
export type SimpleEntityCategories<T = EntityCategories, > = SimpleEnum<EntityCategoriesNames, T>;
export type EntityCategoriesArray<T = EntityCategories, > = readonly [
    SimpleEntityCategories<T>['TERRAIN'],
    SimpleEntityCategories<T>['ITEM'],
    SimpleEntityCategories<T>['ENEMY'],
    SimpleEntityCategories<T>['GIZMO'],
];

//endregion -------------------- Enum types --------------------

/**
 * @enum
 */
export class EntityCategories {

    //region -------------------- enum instances --------------------

    public static readonly TERRAIN = new EntityCategories('Terrain',);
    public static readonly ITEM =    new EntityCategories('Item',);
    public static readonly ENEMY =   new EntityCategories('Enemy',);
    public static readonly GIZMO =   new EntityCategories('Gizmo',);

    //endregion -------------------- enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES: EntityCategoriesArray;
    readonly #ordinal: EntityCategoriesOrdinals;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    #reference?: EntityCategory;
    readonly #englishName;
    // readonly #imagePath;

    //endregion -------------------- Attributes --------------------

    // private constructor(englishNameAndImagePath: PossibleEntityCategories)
    // private constructor(englishName: PossibleEntityCategories, basicImagePath: string)
    private constructor(englishName: PossibleEntityCategories/*, basicImagePath: string = englishName*/) {
        this.#ordinal = getLastOrdinalOn(EntityCategories);
        this.#englishName = englishName;
        // this.#imagePath = '/game/themes/' + basicImagePath;
    }

    //region -------------------- Methods --------------------

    public get englishName() {
        return this.#englishName;
    }

    public get reference() {
        return this.#reference ??= EntityCategoryLoader.get.load().get(this.englishName)!;
    }

    // public get imagePath() {
    //     return this.#imagePath;
    // }

    //endregion -------------------- Methods --------------------
    //region -------------------- enum methods --------------------

    public get ordinal(): EntityCategoriesOrdinals {
        return this.#ordinal;
    }

    public static getValue(value: | EntityCategories | PossibleTheme): EntityCategories
    public static getValue(value: string): | EntityCategories | null
    public static getValue(value: | EntityCategories | string): | EntityCategories | null
    public static getValue(value: | EntityCategories | string): | EntityCategories | null {
        return typeof value === 'string'
            ? this.values.find(theme => theme.englishName === value) ?? null
            : value;
    }

    public static get values(): EntityCategoriesArray {
        return this.#VALUES ??= [
            this.TERRAIN,
            this.ITEM,
            this.ENEMY,
            this.GIZMO,
        ];
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- enum methods --------------------

}