import type {CollectionHolder, CollectionIterator}              from '@joookiwi/collection'
import type {CompanionEnumSingleton, PossibleEnumerableValueBy} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}                                    from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                         from 'core/ClassWithEnglishName'
import type {ClassWithReference}                           from 'core/ClassWithReference'
import type {EntityCategory}                               from 'core/entityCategory/EntityCategory'
import type {Names, Ordinals, PossibleEnglishName}         from 'core/entityCategory/EntityCategories.types'
import type {EntityCategoryImageFile, PossibleImageNumber} from 'core/entityCategory/file/EntityCategoryImageFile'
import type {ClassWithImageFile}                           from 'util/file/image/ClassWithImageFile'

import {EntityCategoryLoader}  from 'core/entityCategory/EntityCategory.loader'
import {entityCategoryImage}   from 'core/entityCategory/file/fileCreator'
import {StringContainer}       from 'util/StringContainer'
import {getValueByEnglishName} from 'util/utilitiesMethods'

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

    public static readonly CompanionEnum: CompanionEnumSingleton<EntityCategories, typeof EntityCategories> = class CompanionEnum_EntityCategories
        extends CompanionEnum<EntityCategories, typeof EntityCategories> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_EntityCategories

        private constructor() {
            super(EntityCategories,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_EntityCategories()
        }

        //endregion -------------------- Singleton usage --------------------

    }

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


    public get imageFile(): EntityCategoryImageFile {
        return this.#imageFile ??= entityCategoryImage(this.#imageNumber, this.englishName,)
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static getValueByName(value: Nullable<| EntityCategories | string>,): EntityCategories {
        return getValueByEnglishName(value, this,)
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(value: PossibleEnumerableValueBy<EntityCategories>,): EntityCategories {
        return EntityCategories.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<EntityCategories> {
        return EntityCategories.CompanionEnum.get.values
    }

    public static [Symbol.iterator](): CollectionIterator<EntityCategories> {
        return EntityCategories.CompanionEnum.get[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}