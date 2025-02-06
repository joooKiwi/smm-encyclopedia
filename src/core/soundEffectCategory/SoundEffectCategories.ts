import {Enum} from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                              from 'core/ClassWithEnglishName'
import type {ClassWithReference}                                from 'core/ClassWithReference'
import type {Names, Ordinals, PossibleEnglishName}              from 'core/soundEffectCategory/SoundEffectCategories.types'
import type {SoundEffectCategory}                               from 'core/soundEffectCategory/SoundEffectCategory'
import type {PossibleImageNumber, SoundEffectCategoryImageFile} from 'core/soundEffectCategory/file/SoundEffectCategoryImageFile'
import type {CompanionEnumByNameSingleton}                      from 'util/enumerable/Singleton.types'
import type {ClassWithImageFile}                                from 'util/file/image/ClassWithImageFile'

import {SoundEffectCategoryLoader}      from 'core/soundEffectCategory/SoundEffectCategory.loader'
import * as FileCreator                 from 'core/soundEffectCategory/file/fileCreator'
import {CompanionEnumByEnglishNameOnly} from 'util/enumerable/companion/CompanionEnumByEnglishNameOnly'

export class SoundEffectCategories<const NAME extends PossibleEnglishName = PossibleEnglishName,
    const IMAGE_NUMBER extends PossibleImageNumber = PossibleImageNumber, >
    extends Enum<Ordinals, Names>
    implements ClassWithReference<SoundEffectCategory>,
        ClassWithEnglishName<NAME, Lowercase<NAME>>,
        ClassWithImageFile<SoundEffectCategoryImageFile<IMAGE_NUMBER>> {

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
    #englishNameInHtml?: Lowercase<NAME>
    readonly #imageNumber
    #imageFile?: SoundEffectCategoryImageFile<IMAGE_NUMBER>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(englishName: NAME, imageNumber: IMAGE_NUMBER,) {
        super()
        this.#englishName = englishName
        this.#imageNumber = imageNumber
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
        return this.#reference ??= SoundEffectCategories.REFERENCE_MAP.get(this.englishName,)!
    }

    public get englishName(): NAME {
        return this.#englishName
    }

    public get englishNameInHtml(): Lowercase<NAME> {
        return this.#englishNameInHtml ??= this.englishName.toLowerCase() as Lowercase<NAME>
    }


    public get imageFile(): SoundEffectCategoryImageFile<IMAGE_NUMBER> {
        return this.#imageFile ??= FileCreator.soundEffectCategoryImage(this.#imageNumber, this.englishName,)
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}

export namespace SoundEffectCategories {// eslint-disable-line @typescript-eslint/no-namespace

    /** The companion instance of a {@link SoundEffectCategories} */
    export const Companion = SoundEffectCategories.CompanionEnum.get

    export const ALL = Companion.values.toArray()

}

//TODO remove this test variable when the application will be complete
(window.test ??= {}).SoundEffectCategories = SoundEffectCategories
