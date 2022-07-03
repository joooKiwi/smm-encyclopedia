import type {ClassWithEnglishName}                                                                                                                                                                                                                                  from '../ClassWithEnglishName';
import type {ClassWithImagePath}                                                                                                                                                                                                                                    from '../ClassWithImagePath';
import type {ClassWithReference}                                                                                                                                                                                                                                    from '../ClassWithReference';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleEnglishName, PossibleImageName, PossibleImageNumber, PossibleImagePath, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './MiiCostumeCategories.types';
import type {MiiCostumeCategory}                                                                                                                                                                                                                                    from './MiiCostumeCategory';
import type {StaticReference}                                                                                                                                                                                                                                       from '../../util/enum/Enum.types';

import {BASE_PATH}       from '../../variables';
import {Enum}            from '../../util/enum/Enum';
import {Import}          from '../../util/DynamicImporter';
import {StringContainer} from '../../util/StringContainer';

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

    public static readonly HEADGEAR = new MiiCostumeCategories('Headgear', 1,);
    public static readonly TOP =      new MiiCostumeCategories('Top', 0,);
    public static readonly COSTUME =  new MiiCostumeCategories('Costume', 3,);
    public static readonly BOTTOM =   new MiiCostumeCategories('Bottom', 2,);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: MiiCostumeCategories;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, MiiCostumeCategory>;

    #reference?: MiiCostumeCategory;
    readonly #englishName: StringContainer<PossibleEnglishName>;
    readonly #imageName: PossibleImageName;
    #imagePath?: PossibleImagePath;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: PossibleEnglishName, imageNumber: PossibleImageNumber,) {
        super();
        this.#englishName = new StringContainer(englishName);
        this.#imageName = `DressIcon_0${imageNumber}`;
    }

    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, MiiCostumeCategory> {
        return this.#REFERENCE_MAP ??= Import.MiiCostumeCategoryLoader.get.load();
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): MiiCostumeCategory {
        return this.#reference ??= MiiCostumeCategories.REFERENCE_MAP.get(this.englishName)!;
    }


    public get englishName(): PossibleEnglishName {
        return this.#englishName.get;
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml;
    }

    public get imageName(): PossibleImageName {
        return this.#imageName;
    }

    public get imagePath(): PossibleImagePath {
        return this.#imagePath ??= `/${BASE_PATH}/category/${this.imageName}^s.tiff`;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static get everyEnglishNames(): readonly PossibleEnglishName[] {
        return this.values.map(soundEffectCategory => soundEffectCategory.englishName);
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<MiiCostumeCategories> {
        return MiiCostumeCategories;
    }

    //region -------------------- Enum value methods --------------------

    protected static override _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.englishName === value
                || enumerable.imageName === value)
            ?? null;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends MiiCostumeCategories = MiiCostumeCategories, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): MiiCostumeCategories
    public static getValue(value: PossibleValue,): | MiiCostumeCategories | null
    public static getValue(value: PossibleValue,) {
        return Enum.getValueOn(this, value,);
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }

    //endregion -------------------- Enum value methods --------------------

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
