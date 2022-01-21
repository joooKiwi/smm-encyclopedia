import type {ClassWithEnglishName}                                                                                                             from '../ClassWithEnglishName';
import type {ClassWithImagePath}                                                                                                               from '../ClassWithImagePath';
import type {ClassWithReference}                                                                                                               from '../ClassWithReference';
import type {EntityCategory}                                                                                                                   from './EntityCategory';
import type {EnumArray, Names, Ordinals, PossibleEnglishName, PossibleImagePath, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './EntityCategories.types';
import type {StaticReference}                                                                                                                  from '../../util/enum/Enum.types';

import {Enum}            from '../../util/enum/Enum';
import {StringContainer} from '../../util/StringContainer';

export class EntityCategories
    extends Enum<Ordinals, Names>
    implements ClassWithReference<EntityCategory>,
        ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImagePath<PossibleImagePath> {

    //region -------------------- Enum instances --------------------

    public static readonly TERRAIN = new EntityCategories('Terrain',);
    public static readonly ITEM =    new EntityCategories('Item',   );
    public static readonly ENEMY =   new EntityCategories('Enemy',  );
    public static readonly GIZMO =   new EntityCategories('Gizmo',  );

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: EntityCategories;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    static #map?: ReadonlyMap<PossibleEnglishName, EntityCategory>;

    #reference?: EntityCategory;
    readonly #englishName;
    #imagePath?: PossibleImagePath;

    //endregion -------------------- Attributes --------------------

    // private constructor(englishNameAndImagePath: PossibleEntityCategories)
    // private constructor(englishName: PossibleEntityCategories, basicImagePath: string)
    private constructor(englishName: PossibleEnglishName,) {
        super();
        this.#englishName = new StringContainer<PossibleEnglishName, Lowercase<PossibleEnglishName>>(englishName);
    }

    //region -------------------- Getter methods --------------------

    private static get __map() {
        return this.#map ??= require('./EntityCategory.loader').EntityCategoryLoader.get.load();
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): EntityCategory {
        return this.#reference ??= EntityCategories.__map.get(this.englishName)!;
    }


    public get englishName(): PossibleEnglishName {
        return this.#englishName.get;
    }

    public get englishNameInHtml(): Lowercase<PossibleEnglishName> {
        return this.#englishName.getInHtml;
    }

    public get imagePath(): PossibleImagePath {
        return this.#imagePath ??= `/category/entity/${this.ordinal + 1} - ${this.englishName}.png` as PossibleImagePath;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static get everyEnglishNames(): readonly PossibleEnglishName[] {
        return this.values.map(enumeration => enumeration.englishName);
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<EntityCategories> {
        return EntityCategories;
    }


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
        return Enum.getValuesOn(this);
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}