import type {ClassWithEnglishName}                                                                                 from '../ClassWithEnglishName';
import type {ClassWithReference}                                                                                   from '../ClassWithReference';
import type {EntityCategory}                                                                                       from './EntityCategory';
import type {EveryLanguagesNames, EveryLanguagesOrdinals}                                                          from '../../lang/EveryLanguages.types';
import type {EntityCategoriesArray, EntityCategoriesNames, EntityCategoriesOrdinals, PossibleEntityCategoriesName} from './EntityCategories.types';

import {EntityCategoryLoader} from './EntityCategoryLoader';
import {Enum}                 from '../../util/enum/Enum';

export class EntityCategories
    extends Enum<EveryLanguagesOrdinals, EveryLanguagesNames>
    implements ClassWithReference<EntityCategory>,
        ClassWithEnglishName<PossibleEntityCategoriesName> {

    //region -------------------- Enum instances --------------------

    public static readonly TERRAIN = new EntityCategories('Terrain',);
    public static readonly ITEM =    new EntityCategories('Item',   );
    public static readonly ENEMY =   new EntityCategories('Enemy',  );
    public static readonly GIZMO =   new EntityCategories('Gizmo',  );

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
    private constructor(englishName: PossibleEntityCategoriesName/*, basicImagePath: string = englishName*/) {
        super(EntityCategories);
        this.#englishName = englishName;
        // this.#imagePath = '/game/themes/' + basicImagePath;
    }

    //region -------------------- Getter methods --------------------

    public get reference(): EntityCategory {
        return this.#reference ??= EntityCategoryLoader.get.load().get(this.englishName)!;
    }


    public get englishName(): PossibleEntityCategoriesName {
        return this.#englishName;
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
    public static getValue(name: | PossibleEntityCategoriesName | EntityCategoriesNames,): EntityCategories
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