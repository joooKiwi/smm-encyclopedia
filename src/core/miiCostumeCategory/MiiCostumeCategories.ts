import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                                                            from '../ClassWithEnglishName'
import type {ClassWithImagePath}                                                                              from '../ClassWithImagePath'
import type {ClassWithReference}                                                                              from '../ClassWithReference'
import type {Names, Ordinals, PossibleEnglishName, PossibleImageName, PossibleImageNumber, PossibleImagePath} from './MiiCostumeCategories.types'
import type {Nullable}                                                                                        from '../../util/types'
import type {MiiCostumeCategory}                                                                              from './MiiCostumeCategory'

import {BASE_PATH}       from '../../variables'
import {Import}          from '../../util/DynamicImporter'
import {StringContainer} from '../../util/StringContainer'

/**
 * @recursiveReference {@link MiiCostumeCategoryLoader}
 * @classWithDynamicImport {@link MiiCostumeCategoryLoader}
 */
export class MiiCostumeCategories
    extends Enum<Ordinals, Names>
    implements ClassWithReference<MiiCostumeCategory>,
        ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImagePath<PossibleImagePath> {

    //region -------------------- Enum instances --------------------

    public static readonly HEADGEAR = new MiiCostumeCategories('Headgear', 1,)
    public static readonly TOP =      new MiiCostumeCategories('Top', 0,)
    public static readonly COSTUME =  new MiiCostumeCategories('Costume', 3,)
    public static readonly BOTTOM =   new MiiCostumeCategories('Bottom', 2,)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: MiiCostumeCategories

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, MiiCostumeCategory>

    #reference?: MiiCostumeCategory
    readonly #englishName: StringContainer<PossibleEnglishName>
    readonly #imageName: PossibleImageName
    #imagePath?: PossibleImagePath

    //endregion -------------------- Fields --------------------

    private constructor(englishName: PossibleEnglishName, imageNumber: PossibleImageNumber,) {
        super()
        this.#englishName = new StringContainer(englishName)
        this.#imageName = `DressIcon_0${imageNumber}`
    }

    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, MiiCostumeCategory> {
        return this.#REFERENCE_MAP ??= Import.MiiCostumeCategoryLoader.get.load()
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

    public get imageName(): PossibleImageName {
        return this.#imageName
    }

    public get imagePath(): PossibleImagePath {
        return this.#imagePath ??= `/${BASE_PATH}/category/${this.imageName}^s.tiff`
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static get everyEnglishNames(): readonly PossibleEnglishName[] {
        return this.values.map(it => it.englishName).toArray()
    }

    // public static getValueByName<T extends string, >(value: Nullable<| MiiCostumeCategories | T>,): MiiCostumeCategoriesByName<T>
    public static getValueByName(value: Nullable<| MiiCostumeCategories | string>,): MiiCostumeCategories {
        if (value == null)
            throw new TypeError(`No "${this.name}" could be found by a null value.`)
        if (value instanceof this)
            return value
        const valueFound = this.values.find(enumerable => enumerable.englishName === value
            || enumerable.imageName === value)
        if (valueFound == null)
            throw new ReferenceError(`No "${this.name}" could be found by this value "${value}".`)
        return valueFound
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return MiiCostumeCategories
    }

    public static getValue(value: PossibleValueByEnumerable<MiiCostumeCategories>,): MiiCostumeCategories {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<MiiCostumeCategories> {
        return Enum.getValuesOn(this)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}
