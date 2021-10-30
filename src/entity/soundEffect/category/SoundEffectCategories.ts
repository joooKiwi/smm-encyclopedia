import type {PossibleSoundEffectCategoriesEnglishName, SoundEffectCategoriesArray, SoundEffectCategoriesEnglishNameArray, SoundEffectCategoriesNames, SoundEffectCategoriesOrdinals} from './SoundEffectCategories.types';
import type {ClassWithEnglishName}                                                                                                                                                   from '../../ClassWithEnglishName';

import {Enum} from '../../../util/enum/Enum';

export class SoundEffectCategories
    extends Enum<SoundEffectCategoriesOrdinals, SoundEffectCategoriesNames>
    implements ClassWithEnglishName<PossibleSoundEffectCategoriesEnglishName> {

    //region -------------------- Enum instances --------------------

    public static readonly FEELINGS =   new SoundEffectCategories('Feelings',  );
    public static readonly STINGERS =   new SoundEffectCategories('Stingers',  );
    public static readonly REACTIONS =  new SoundEffectCategories('Reactions', );
    public static readonly ANIMATIONS = new SoundEffectCategories('Animations',);
    public static readonly MUSIC =      new SoundEffectCategories('Music',     );

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES: SoundEffectCategoriesArray;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #englishName;

    //endregion -------------------- Attributes --------------------

    public constructor(englishName: PossibleSoundEffectCategoriesEnglishName,) {
        super(SoundEffectCategories);
        this.#englishName = englishName;
    }

    //region -------------------- Getter methods --------------------

    public get englishName(): PossibleSoundEffectCategoriesEnglishName {
        return this.#englishName;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static get everyEnglishNames(): SoundEffectCategoriesEnglishNameArray {
        return this.values.map(soundEffectCategory => soundEffectCategory.englishName) as unknown as SoundEffectCategoriesEnglishNameArray;
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends SoundEffectCategoriesOrdinals = SoundEffectCategoriesOrdinals, >(ordinal: O,): SoundEffectCategoriesArray[O]
    public static getValue<O extends number = number, >(ordinal: O,): | NonNullable<SoundEffectCategoriesArray[O]> | null
    public static getValue(name: | SoundEffectCategoriesNames | PossibleSoundEffectCategoriesEnglishName,): SoundEffectCategories
    public static getValue(name: string,): | SoundEffectCategories | null
    public static getValue<I extends SoundEffectCategories = SoundEffectCategories, >(instance: I,): I
    public static getValue(value: | SoundEffectCategories | string | number | null | undefined,): | SoundEffectCategories | null
    public static getValue(value: | SoundEffectCategories | string | number | null | undefined,): | SoundEffectCategories | null {
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

    public static get values(): SoundEffectCategoriesArray {
        return this.#VALUES ??= [
            this.FEELINGS,
            this.STINGERS,
            this.REACTIONS,
            this.ANIMATIONS,
            this.MUSIC,
        ];
    }


    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
