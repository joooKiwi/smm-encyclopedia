import type {ClassWithEnglishName}                                                                                          from '../ClassWithEnglishName';
import type {ClassWithReference}                                                                                            from '../ClassWithReference';
import type {EntityCategory}                                                                                                from './EntityCategory';
import type {EnumArray, Names, Ordinals, PossibleEnglishName, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './EntityCategories.types';

import {EntityCategoryLoader} from './EntityCategory.loader';
import {Enum}                 from '../../util/enum/Enum';
import {StringContainer}      from '../StringContainer';

export class EntityCategories
    extends Enum<Ordinals, Names>
    implements ClassWithReference<EntityCategory>,
        ClassWithEnglishName<PossibleEnglishName> {

    //region -------------------- Enum instances --------------------

    public static readonly TERRAIN = new EntityCategories('Terrain',);
    public static readonly ITEM =    new EntityCategories('Item',   );
    public static readonly ENEMY =   new EntityCategories('Enemy',  );
    public static readonly GIZMO =   new EntityCategories('Gizmo',  );

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES: EnumArray;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    #reference?: EntityCategory;
    readonly #englishName;
    // readonly #imagePath;

    //endregion -------------------- Attributes --------------------

    // private constructor(englishNameAndImagePath: PossibleEntityCategories)
    // private constructor(englishName: PossibleEntityCategories, basicImagePath: string)
    private constructor(englishName: PossibleEnglishName/*, basicImagePath: string = englishName*/) {
        super(EntityCategories);
        this.#englishName = new StringContainer<PossibleEnglishName, Lowercase<PossibleEnglishName>>(englishName);
        // this.#imagePath = '/game/themes/' + basicImagePath;
    }

    //region -------------------- Getter methods --------------------

    public get reference(): EntityCategory {
        return this.#reference ??= EntityCategoryLoader.get.load().get(this.englishName)!;
    }


    public get englishName(): PossibleEnglishName {
        return this.#englishName.get;
    }

    public get englishNameInHtml(): Lowercase<PossibleEnglishName> {
        return this.#englishName.getInHtml;
    }

    // public get imagePath() {
    //     return this.#imagePath;
    // }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumArray[O]
    public static getValue<O extends number = number, >(ordinal: O,): | NonNullable<EnumArray[O]> | null
    public static getValue<N extends Names = Names, >(name: N,): typeof EntityCategories[N]
    public static getValue(name: PossibleStringValue,): EntityCategories
    public static getValue(name: string,): | EntityCategories | null
    public static getValue<I extends EntityCategories = EntityCategories, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): EntityCategories
    public static getValue(value: PossibleValue,): | EntityCategories | null
    public static getValue(value: PossibleValue,) {
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

    public static get values(): EnumArray {
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