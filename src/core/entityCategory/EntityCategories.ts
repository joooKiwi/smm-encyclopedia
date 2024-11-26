import {Enum} from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                         from 'core/ClassWithEnglishName'
import type {ClassWithReference}                           from 'core/ClassWithReference'
import type {EntityCategory}                               from 'core/entityCategory/EntityCategory'
import type {Names, Ordinals, PossibleEnglishName}         from 'core/entityCategory/EntityCategories.types'
import type {EntityCategoryImageFile, PossibleImageNumber} from 'core/entityCategory/file/EntityCategoryImageFile'
import type {CompanionEnumByNameSingleton}                 from 'util/enumerable/Singleton.types'
import type {ClassWithImageFile}                           from 'util/file/image/ClassWithImageFile'

import {EntityCategoryLoader}           from 'core/entityCategory/EntityCategory.loader'
import {entityCategoryImage}            from 'core/entityCategory/file/fileCreator'
import {CompanionEnumByEnglishNameOnly} from 'util/enumerable/companion/CompanionEnumByEnglishNameOnly'

export class EntityCategories<const NAME extends PossibleEnglishName = PossibleEnglishName,
    const IMAGE_NUMBER extends PossibleImageNumber = PossibleImageNumber, >
    extends Enum<Ordinals, Names>
    implements ClassWithReference<EntityCategory>,
        ClassWithEnglishName<NAME, Lowercase<NAME>>,
        ClassWithImageFile<EntityCategoryImageFile<IMAGE_NUMBER>> {

    //region -------------------- Enum instances --------------------

    public static readonly TERRAIN = new EntityCategories('Terrain', 0,)
    public static readonly ITEM =    new EntityCategories('Item',    1,)
    public static readonly ENEMY =   new EntityCategories('Enemy',   2,)
    public static readonly GIZMO =   new EntityCategories('Gizmo',   3,)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    public static readonly CompanionEnum: CompanionEnumByNameSingleton<EntityCategories, typeof EntityCategories> = class CompanionEnum_EntityCategories
        extends CompanionEnumByEnglishNameOnly<EntityCategories, typeof EntityCategories> {

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
    #englishNameInHtml?: Lowercase<NAME>
    readonly #imageNumber
    #imageFile?: EntityCategoryImageFile<IMAGE_NUMBER>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(englishName: NAME, imageNumber: IMAGE_NUMBER,) {
        super()
        this.#englishName = englishName
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


    public get englishName(): NAME {
        return this.#englishName
    }

    public get englishNameInHtml(): Lowercase<NAME> {
        return this.#englishNameInHtml ??= this.englishName.toLowerCase() as Lowercase<NAME>
    }


    public get imageFile(): EntityCategoryImageFile<IMAGE_NUMBER> {
        return this.#imageFile ??= entityCategoryImage(this.#imageNumber, this.englishName,)
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}

export namespace EntityCategories {

    /** The companion instance of a {@link EntityCategories} */
    export const Companion = EntityCategories.CompanionEnum.get

    export const ALL = Companion.values.toArray()

}

// @ts-ignore: TODO remove this test variable when the application will be complete
(window.test ??= {}).EntityCategories = EntityCategories
