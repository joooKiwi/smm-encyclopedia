import {Enum} from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                             from 'core/ClassWithEnglishName'
import type {ClassWithReference}                               from 'core/ClassWithReference'
import type {Names, Ordinals, PossibleEnglishName}             from 'core/miiCostumeCategory/MiiCostumeCategories.types'
import type {MiiCostumeCategory}                               from 'core/miiCostumeCategory/MiiCostumeCategory'
import type {MiiCostumeCategoryImageFile, PossibleImageNumber} from 'core/miiCostumeCategory/file/MiiCostumeCategoryImageFile'
import type {CompanionEnumByNameSingleton}                     from 'util/enumerable/Singleton.types'
import type {ClassWithImageFile}                               from 'util/file/image/ClassWithImageFile'

import {MiiCostumeCategoryLoader}       from 'core/miiCostumeCategory/MiiCostumeCategory.loader'
import {miiCostumeCategoryImage}        from 'core/miiCostumeCategory/file/fileCreator'
import {StringContainer}                from 'util/StringContainer'
import {CompanionEnumByEnglishNameOnly} from 'util/enumerable/companion/CompanionEnumByEnglishNameOnly'

export class MiiCostumeCategories
    extends Enum<Ordinals, Names>
    implements ClassWithReference<MiiCostumeCategory>,
        ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImageFile<MiiCostumeCategoryImageFile> {

    //region -------------------- Enum instances --------------------

    public static readonly HEADGEAR = new MiiCostumeCategories('Headgear', 1,)
    public static readonly TOP =      new MiiCostumeCategories('Top', 0,)
    public static readonly COSTUME =  new MiiCostumeCategories('Costume', 3,)
    public static readonly BOTTOM =   new MiiCostumeCategories('Bottom', 2,)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumByNameSingleton<MiiCostumeCategories, typeof MiiCostumeCategories> = class CompanionEnum_MiiCostumeCategories
        extends CompanionEnumByEnglishNameOnly<MiiCostumeCategories, typeof MiiCostumeCategories> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_MiiCostumeCategories

        private constructor() {
            super(MiiCostumeCategories,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_MiiCostumeCategories()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, MiiCostumeCategory>

    #reference?: MiiCostumeCategory

    readonly #englishName: StringContainer<PossibleEnglishName>

    readonly #imageNumber
    #imageFile?: MiiCostumeCategoryImageFile

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(englishName: PossibleEnglishName, imageNumber: PossibleImageNumber,) {
        super()
        this.#englishName = new StringContainer(englishName)
        this.#imageNumber = imageNumber
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, MiiCostumeCategory> {
        return this.#REFERENCE_MAP ??= MiiCostumeCategoryLoader.get.load()
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): MiiCostumeCategory {
        return this.#reference ??= MiiCostumeCategories.REFERENCE_MAP.get(this.englishName)!
    }


    public get englishName(): PossibleEnglishName {
        return this.#englishName.get
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml
    }


    public get imageFile(): MiiCostumeCategoryImageFile {
        return this.#imageFile ??= miiCostumeCategoryImage(this.#imageNumber, this.englishName,)
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}
