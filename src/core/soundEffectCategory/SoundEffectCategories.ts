import type {ClassWithEnglishName}                                                                                                                                                                                                                                                         from '../ClassWithEnglishName'
import type {ClassWithImagePath}                                                                                                                                                                                                                                                           from '../ClassWithImagePath'
import type {ClassWithReference}                                                                                                                                                                                                                                                           from '../ClassWithReference'
import type {EnumArray, EnumArray_EnglishName, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleEnglishName, PossibleImageName, PossibleImageNumber, PossibleImagePath, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './SoundEffectCategories.types'
import type {SoundEffectCategory}                                                                                                                                                                                                                                                          from './SoundEffectCategory'
import type {StaticReference}                                                                                                                                                                                                                                                              from '../../util/enum/Enum.types'

import {BASE_PATH}       from '../../variables'
import {Enum}            from '../../util/enum/Enum'
import {Import}          from '../../util/DynamicImporter'
import {StringContainer} from '../../util/StringContainer'

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

    public static get everyEnglishNames(): EnumArray_EnglishName {
        return this.values.map(soundEffectCategory => soundEffectCategory.englishName) as unknown as EnumArray_EnglishName
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<SoundEffectCategories> {
        return SoundEffectCategories
    }

    //region -------------------- Enum value methods --------------------

    protected static override _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.englishName === value)
            ?? null
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends SoundEffectCategories = SoundEffectCategories, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): SoundEffectCategories
    public static getValue(value: PossibleValue,): | SoundEffectCategories | null
    public static getValue(value: PossibleValue,) {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this)
    }

    //endregion -------------------- Enum value methods --------------------

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}
