import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                                                                          from '../ClassWithEnglishName'
import type {ClassWithImagePath}                                                                                            from '../ClassWithImagePath'
import type {ClassWithReference}                                                                                            from '../ClassWithReference'
import type {EnglishNames, Names, Ordinals, PossibleEnglishName, PossibleImageName, PossibleImageNumber, PossibleImagePath} from './SoundEffectCategories.types'
import type {Nullable}                                                                                                      from '../../util/types'
import type {SoundEffectCategory}                                                                                           from './SoundEffectCategory'

import {BASE_PATH}             from '../../variables'
import {getValueByEnglishName} from '../../util/utilitiesMethods'
import {Import}                from '../../util/DynamicImporter'
import {StringContainer}       from '../../util/StringContainer'

/**
 * @recursiveReference {@link SoundEffectCategoryLoader}
 * @classWithDynamicImport {@link SoundEffectCategoryLoader}
 */
export class SoundEffectCategories
    extends Enum<Ordinals, Names>
    implements ClassWithReference<SoundEffectCategory>,
        ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImagePath<PossibleImagePath> {

    //region -------------------- Enum instances --------------------

    public static readonly FEELINGS =   new SoundEffectCategories('Feelings',   4,)
    public static readonly STINGERS =   new SoundEffectCategories('Stingers',   5,)
    public static readonly REACTIONS =  new SoundEffectCategories('Reactions',  6,)
    public static readonly ANIMATIONS = new SoundEffectCategories('Animations', 7,)
    public static readonly MUSIC =      new SoundEffectCategories('Music',      8,)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: SoundEffectCategories

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, SoundEffectCategory>

    #reference?: SoundEffectCategory
    readonly #englishName
    readonly #imageName: PossibleImageName
    #imagePath?: PossibleImagePath

    //endregion -------------------- Fields --------------------

    public constructor(englishName: PossibleEnglishName, imageNumber: PossibleImageNumber,) {
        super()
        this.#englishName = new StringContainer(englishName)
        this.#imageName = `CategoryIcon_0${imageNumber}`
    }

    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, SoundEffectCategory> {
        return this.#REFERENCE_MAP ??= Import.SoundEffectCategoryLoader.get.load()
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

    public get imagePath(): PossibleImagePath {
        return this.#imagePath ??= `/${BASE_PATH}/category/${this.imageName}^s.tiff`
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static get everyEnglishNames(): EnglishNames {
        return this.values.map(soundEffectCategory => soundEffectCategory.englishName).toArray() as EnglishNames
    }

    // public static getValueByName<T extends string, >(value: Nullable<| SoundEffectCategories | T>,): SoundEffectCategoriesByName<T>
    public static getValueByName(value: Nullable<| SoundEffectCategories | string>,): SoundEffectCategories {
        return getValueByEnglishName(value, this,)
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return SoundEffectCategories
    }

    public static getValue(value: PossibleValueByEnumerable<SoundEffectCategories>,): SoundEffectCategories {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<SoundEffectCategories> {
        return Enum.getValuesOn(this)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}
