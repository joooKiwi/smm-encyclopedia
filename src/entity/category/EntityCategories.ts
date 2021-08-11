import type {EntityCategory}                              from './EntityCategory';
import type {EveryLanguagesNames, EveryLanguagesOrdinals} from '../../lang/EveryLanguages';
import type {PossibleTheme}                               from '../theme/Themes';
import type {SimpleEnum}                                  from '../../util/enum/EnumTypes';

import {EntityCategoryLoader}                        from './EntityCategoryLoader';
import {Enum}                                        from '../../util/enum/Enum';

//region -------------------- Entity category texts --------------------

export type PossibleEntityCategories = | 'Terrain' | 'Item' | 'Enemy' | 'Gizmo';

//endregion -------------------- Entity category texts --------------------
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

export class EntityCategories
    extends Enum<EveryLanguagesOrdinals, EveryLanguagesNames> {

    //region -------------------- Enum instances --------------------

    public static readonly TERRAIN = new EntityCategories('Terrain',);
    public static readonly ITEM = new EntityCategories('Item',);
    public static readonly ENEMY = new EntityCategories('Enemy',);
    public static readonly GIZMO = new EntityCategories('Gizmo',);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES: EntityCategoriesArray;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    #reference?: EntityCategory;
    readonly #englishName;
    // readonly #imagePath;

    //endregion -------------------- Attributes --------------------

    // private constructor(englishNameAndImagePath: PossibleEntityCategories)
    // private constructor(englishName: PossibleEntityCategories, basicImagePath: string)
    private constructor(englishName: PossibleEntityCategories/*, basicImagePath: string = englishName*/) {
        super(EntityCategories);
        this.#englishName = englishName;
        // this.#imagePath = '/game/themes/' + basicImagePath;
    }

    //region -------------------- Getter methods --------------------

    public get englishName() {
        return this.#englishName;
    }

    public get reference() {
        return this.#reference ??= EntityCategoryLoader.get.load().get(this.englishName)!;
    }

    // public get imagePath() {
    //     return this.#imagePath;
    // }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends EntityCategoriesOrdinals = EntityCategoriesOrdinals, >(ordinal: O,): EntityCategoriesArray[O]
    public static getValue<O extends number = number, >(ordinal: O,): | NonNullable<EntityCategoriesArray[O]> | null
    public static getValue(name: PossibleTheme,): EntityCategories
    public static getValue(name: string,): | EntityCategories | null
    public static getValue<I extends EntityCategories = EntityCategories, >(instance: I,): I
    public static getValue(value: | EntityCategories | string | number | null | undefined,): | EntityCategories | null
    public static getValue(value: | EntityCategories | string | number | null | undefined,): | EntityCategories | null {
        return value == null
            ? null
            : typeof value === 'string'
                ? Reflect.get(this, value.toUpperCase(),)
                    ?? this.values.find(theme => theme.englishName === value)
                    ?? null
                : typeof value === 'number'
                    ? this.values[value] ?? null
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

    //endregion -------------------- Enum methods --------------------

}