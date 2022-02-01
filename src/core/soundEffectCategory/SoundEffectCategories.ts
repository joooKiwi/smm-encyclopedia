import type {ClassWithEnglishName}                                                                                                                                                                                                                 from '../ClassWithEnglishName';
import type {ClassWithImagePath}                                                                                                                                                                                                                   from '../ClassWithImagePath';
import type {ClassWithReference}                                                                                                                                                                                                                   from '../ClassWithReference';
import type {EnumArray, EnumArray_EnglishName, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleEnglishName, PossibleImagePath, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './SoundEffectCategories.types';
import type {SoundEffectCategory}                                                                                                                                                                                                                  from './SoundEffectCategory';
import type {StaticReference}                                                                                                                                                                                                                      from '../../util/enum/Enum.types';

import {Enum}            from '../../util/enum/Enum';
import {StringContainer} from '../../util/StringContainer';

/**
 * @recursiveReference<{@link SoundEffectCategoryLoader}>
 */
export class SoundEffectCategories
    extends Enum<Ordinals, Names>
    implements ClassWithReference<SoundEffectCategory>,
        ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImagePath<PossibleImagePath> {

    //region -------------------- Enum instances --------------------

    public static readonly FEELINGS =   new SoundEffectCategories('Feelings',  );
    public static readonly STINGERS =   new SoundEffectCategories('Stingers',  );
    public static readonly REACTIONS =  new SoundEffectCategories('Reactions', );
    public static readonly ANIMATIONS = new SoundEffectCategories('Animations',);
    public static readonly MUSIC =      new SoundEffectCategories('Music',     );

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: SoundEffectCategories;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    static #map?: ReadonlyMap<PossibleEnglishName, SoundEffectCategory>;

    #reference?: SoundEffectCategory;
    readonly #englishName;
    #imagePath?: PossibleImagePath;

    //endregion -------------------- Attributes --------------------

    public constructor(englishName: PossibleEnglishName,) {
        super();
        this.#englishName = new StringContainer(englishName);
    }

    //region -------------------- Getter methods --------------------

    private static get __map() {
        return this.#map ??= require('./SoundEffectCategory.loader').SoundEffectCategoryLoader.get.load();
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): SoundEffectCategory {
        return this.#reference ??= SoundEffectCategories.__map.get(this.englishName)!;
    }

    public get englishName(): PossibleEnglishName {
        return this.#englishName.get;
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml;
    }

    public get imagePath(): PossibleImagePath {
        return this.#imagePath ??= `/category/sound effect/${this.ordinal + 1} - ${this.englishName}.png` as PossibleImagePath;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static get everyEnglishNames(): EnumArray_EnglishName {
        return this.values.map(soundEffectCategory => soundEffectCategory.englishName) as unknown as EnumArray_EnglishName;
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<SoundEffectCategories> {
        return SoundEffectCategories;
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
        return value == null
            ? null
            : typeof value === 'string'
                ? Reflect.get(this, value.toUpperCase(),)
                    ?? this.values.find(soundEffectCategory => soundEffectCategory.englishName === value)
                    ?? null
                : typeof value === 'number'
                    ? this.values[value] ?? null
                    : value;
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }


    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
