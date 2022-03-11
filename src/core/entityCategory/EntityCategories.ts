import type {ClassWithEnglishName}                                                                                                                                                                                                                                  from '../ClassWithEnglishName';
import type {ClassWithImagePath}                                                                                                                                                                                                                                    from '../ClassWithImagePath';
import type {ClassWithReference}                                                                                                                                                                                                                                    from '../ClassWithReference';
import type {EntityCategory}                                                                                                                                                                                                                                        from './EntityCategory';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleEnglishName, PossibleImageName, PossibleImageNumber, PossibleImagePath, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './EntityCategories.types';
import type {StaticReference}                                                                                                                                                                                                                                       from '../../util/enum/Enum.types';

import {Enum}            from '../../util/enum/Enum';
import {Import}          from '../../util/DynamicImporter';
import {StringContainer} from '../../util/StringContainer';

/**
 * @recursiveReference {@link EntityCategoryLoader}
 * @classWithDynamicImport {@link EntityCategoryLoader}
 */
export class EntityCategories
    extends Enum<Ordinals, Names>
    implements ClassWithReference<EntityCategory>,
        ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImagePath<PossibleImagePath> {

    //region -------------------- Enum instances --------------------

    public static readonly TERRAIN = new EntityCategories('Terrain', 0,);
    public static readonly ITEM =    new EntityCategories('Item',    1,);
    public static readonly ENEMY =   new EntityCategories('Enemy',   2,);
    public static readonly GIZMO =   new EntityCategories('Gizmo',   3,);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: EntityCategories;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, EntityCategory>;

    #reference?: EntityCategory;
    readonly #englishName;
    readonly #imageName: PossibleImageName;
    #imagePath?: PossibleImagePath;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: PossibleEnglishName, imageNumber: PossibleImageNumber,) {
        super();
        this.#englishName = new StringContainer<PossibleEnglishName, Lowercase<PossibleEnglishName>>(englishName);
        this.#imageName = `CategoryIcon_0${imageNumber}`;
    }

    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, EntityCategory> {
        return this.#REFERENCE_MAP ??= Import.EntityCategoryLoader.get.load();
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): EntityCategory {
        return this.#reference ??= EntityCategories.REFERENCE_MAP.get(this.englishName)!;
    }


    public get englishName(): PossibleEnglishName {
        return this.#englishName.get;
    }

    public get englishNameInHtml(): Lowercase<PossibleEnglishName> {
        return this.#englishName.getInHtml;
    }

    public get imageName(): PossibleImageName {
        return this.#imageName;
    }

    public get imagePath(): PossibleImagePath {
        return this.#imagePath ??= `/category/${this.imageName}^s.tiff`;
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


    protected static _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.englishName === value)
            ?? null;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends EntityCategories = EntityCategories, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): EntityCategories
    public static getValue(value: PossibleValue,): | EntityCategories | null
    public static getValue(value: PossibleValue,) {
        return Enum.getValueOn(this, value,);
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}