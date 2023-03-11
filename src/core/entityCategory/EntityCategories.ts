import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                         from 'core/ClassWithEnglishName'
import type {ClassWithReference}                           from 'core/ClassWithReference'
import type {EntityCategory}                               from 'core/entityCategory/EntityCategory'
import type {Names, Ordinals, PossibleEnglishName}         from 'core/entityCategory/EntityCategories.types'
import type {EntityCategoryImageFile, PossibleImageNumber} from 'core/entityCategory/file/EntityCategoryImageFile'
import type {ClassWithImageFile}                           from 'util/file/image/ClassWithImageFile'
import type {Nullable}                                     from 'util/types/nullable'

import {EntityCategoryLoader}                          from 'core/entityCategory/EntityCategory.loader'
import {EntityCategoryImageFileContainer as ImageFile} from 'core/entityCategory/file/EntityCategoryImageFile.container'
import {StringContainer}                               from 'util/StringContainer'
import {getValueByEnglishName}                         from 'util/utilitiesMethods'

export class EntityCategories
    extends Enum<Ordinals, Names>
    implements ClassWithReference<EntityCategory>,
        ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImageFile<EntityCategoryImageFile> {

    //region -------------------- Enum instances --------------------

    public static readonly TERRAIN = new EntityCategories('Terrain', 0,)
    public static readonly ITEM =    new EntityCategories('Item',    1,)
    public static readonly ENEMY =   new EntityCategories('Enemy',   2,)
    public static readonly GIZMO =   new EntityCategories('Gizmo',   3,)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: EntityCategories

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, EntityCategory>

    #reference?: EntityCategory
    readonly #englishName
    readonly #imageNumber
    #imageFile?: EntityCategoryImageFile

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(englishName: PossibleEnglishName, imageNumber: PossibleImageNumber,) {
        super()
        this.#englishName = new StringContainer<PossibleEnglishName, Lowercase<PossibleEnglishName>>(englishName)
        this.#imageNumber = imageNumber
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, EntityCategory> {
        return this.#REFERENCE_MAP ??= EntityCategoryLoader.get.load()
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): EntityCategory {
        return this.#reference ??= EntityCategories.REFERENCE_MAP.get(this.englishName)!
    }


    public get englishName(): PossibleEnglishName {
        return this.#englishName.get
    }

    public get englishNameInHtml(): Lowercase<PossibleEnglishName> {
        return this.#englishName.getInHtml
    }


    private get __imageNumber(): PossibleImageNumber {
        return this.#imageNumber
    }

    public get imageFile(): EntityCategoryImageFile {
        return this.#imageFile ??= new ImageFile(this.__imageNumber, this.englishName,)
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static getValueByName(value: Nullable<| EntityCategories | string>,): EntityCategories {
        return getValueByEnglishName(value, this,)
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return EntityCategories
    }

    public static getValue(value: PossibleValueByEnumerable<EntityCategories>,): EntityCategories {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<EntityCategories> {
        return Enum.getValuesOn(this,)
    }

    public static* [Symbol.iterator](): IterableIterator<EntityCategories> {
        yield* this.values
    }

    //endregion -------------------- Enum methods --------------------

}