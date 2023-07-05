import type {CollectionHolder}                                                    from '@joookiwi/collection'
import type {BasicCompanionEnumDeclaration, PossibleEnumerableValueBy, Singleton} from '@joookiwi/enumerable'
import {BasicCompanionEnum, Enum}                                                 from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                                         from 'core/ClassWithEnglishName'
import type {ClassWithReference}                                                           from 'core/ClassWithReference'
import type {Names, Ordinals, PossibleEnglishName, PossibleImageName, PossibleImageNumber} from 'core/soundEffectCategory/SoundEffectCategories.types'
import type {SoundEffectCategory}                                                          from 'core/soundEffectCategory/SoundEffectCategory'
import type {SoundEffectCategoryImageFile}                                                 from 'core/soundEffectCategory/file/SoundEffectCategoryImageFile'
import type {ClassWithImageFile}                                                           from 'util/file/image/ClassWithImageFile'
import type {Nullable}                                                                     from 'util/types/nullable'

import {SoundEffectCategoryLoader}                          from 'core/soundEffectCategory/SoundEffectCategory.loader'
import {SoundEffectCategoryImageFileContainer as ImageFile} from 'core/soundEffectCategory/file/SoundEffectCategoryImageFile.container'
import {getValueByEnglishName}                              from 'util/utilitiesMethods'
import {StringContainer}                                    from 'util/StringContainer'

export class SoundEffectCategories
    extends Enum<Ordinals, Names>
    implements ClassWithReference<SoundEffectCategory>,
        ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImageFile<SoundEffectCategoryImageFile> {

    //region -------------------- Enum instances --------------------

    public static readonly FEELINGS =   new SoundEffectCategories('Feelings',   4,)
    public static readonly STINGERS =   new SoundEffectCategories('Stingers',   5,)
    public static readonly REACTIONS =  new SoundEffectCategories('Reactions',  6,)
    public static readonly ANIMATIONS = new SoundEffectCategories('Animations', 7,)
    public static readonly MUSIC =      new SoundEffectCategories('Music',      8,)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: Singleton<BasicCompanionEnumDeclaration<SoundEffectCategories, typeof SoundEffectCategories>> = class CompanionEnum_SoundEffectCategories
        extends BasicCompanionEnum<SoundEffectCategories, typeof SoundEffectCategories> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_SoundEffectCategories

        private constructor() {
            super(SoundEffectCategories,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_SoundEffectCategories()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, SoundEffectCategory>

    #reference?: SoundEffectCategory
    readonly #englishName
    readonly #imageName: PossibleImageName
    #imageFile?: SoundEffectCategoryImageFile

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(englishName: PossibleEnglishName, imageNumber: PossibleImageNumber,) {
        super()
        this.#englishName = new StringContainer(englishName)
        this.#imageName = `CategoryIcon_0${imageNumber}`
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, SoundEffectCategory> {
        return this.#REFERENCE_MAP ??= SoundEffectCategoryLoader.get.load()
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): SoundEffectCategory {
        return this.#reference ??= SoundEffectCategories.REFERENCE_MAP.get(this.englishName)!
    }

    public get englishName(): PossibleEnglishName {
        return this.#englishName.get
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml
    }


    public get imageName(): PossibleImageName {
        return this.#imageName
    }

    public get imageFile(): SoundEffectCategoryImageFile {
        return this.#imageFile ??= new ImageFile(this.englishName, this.imageName,)
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static getValueByName(value: Nullable<| SoundEffectCategories | string>,): SoundEffectCategories {
        return getValueByEnglishName(value, this,)
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(value: PossibleEnumerableValueBy<SoundEffectCategories>,): SoundEffectCategories {
        return SoundEffectCategories.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<SoundEffectCategories> {
        return SoundEffectCategories.CompanionEnum.get.values
    }

    public static* [Symbol.iterator](): IterableIterator<SoundEffectCategories> {
        yield* SoundEffectCategories.CompanionEnum.get
    }

    //endregion -------------------- Enum methods --------------------

}
