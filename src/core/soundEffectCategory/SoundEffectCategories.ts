import {Enum} from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                                         from 'core/ClassWithEnglishName'
import type {ClassWithReference}                                                           from 'core/ClassWithReference'
import type {Names, Ordinals, PossibleEnglishName, PossibleImageName, PossibleImageNumber} from 'core/soundEffectCategory/SoundEffectCategories.types'
import type {SoundEffectCategory}                                                          from 'core/soundEffectCategory/SoundEffectCategory'
import type {SoundEffectCategoryImageFile}                                                 from 'core/soundEffectCategory/file/SoundEffectCategoryImageFile'
import type {CompanionEnumByNameSingleton}                                                 from 'util/enumerable/Singleton.types'
import type {ClassWithImageFile}                                                           from 'util/file/image/ClassWithImageFile'

import {SoundEffectCategoryLoader}      from 'core/soundEffectCategory/SoundEffectCategory.loader'
import * as FileCreator                 from 'core/soundEffectCategory/file/fileCreator'
import {StringContainer}                from 'util/StringContainer'
import {CompanionEnumByEnglishNameOnly} from 'util/enumerable/companion/CompanionEnumByEnglishNameOnly'

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

    public static readonly CompanionEnum: CompanionEnumByNameSingleton<SoundEffectCategories, typeof SoundEffectCategories> = class CompanionEnum_SoundEffectCategories
        extends CompanionEnumByEnglishNameOnly<SoundEffectCategories, typeof SoundEffectCategories>{

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


    public get imageFile(): SoundEffectCategoryImageFile {
        return this.#imageFile ??= FileCreator.soundEffectCategoryImage(this.#imageName, this.englishName,)
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}

export namespace SoundEffectCategories {

    /** The companion instance of a {@link SoundEffectCategories} */
    export const Companion = SoundEffectCategories.CompanionEnum.get

    export const ALL = Companion.values.toArray()

}

// @ts-ignore: TODO remove this test variable when the application will be complete
(window.test ??= {}).SoundEffectCategories = SoundEffectCategories
