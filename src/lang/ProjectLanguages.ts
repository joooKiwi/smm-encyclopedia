import type {AmericanOrEuropeanOriginal, CanadianOrEuropeanOriginal, ChineseOriginal}                                                                                                                                                                                                                                    from './name/containers/Language';
import type {ClassWithEveryLanguages}                                                                                                                                                                                                                                                                                    from './ClassWithEveryLanguages';
import type {LanguageEnumerable}                                                                                                                                                                                                                                                                                         from './LanguageEnumerable';
import type {PossibleNonNullableValue, ProjectLanguagesOrdinals}                                                                                                                                                                                                                                                         from './ProjectLanguages.types';
import type {PossibleEveryLanguagesAcronym, PossibleEveryLanguagesEnglishName, PossibleEveryLanguagesInternationalAcronym, PossibleEveryLanguagesOriginalName, PossibleProjectLanguagesAcronym, PossibleProjectLanguagesEnglishName, PossibleProjectLanguagesOriginalName, ProjectLanguagesArray, ProjectLanguagesNames} from './EveryLanguages.types';

import {Enum}                            from '../util/enum/Enum';
import {EveryLanguages}                  from './EveryLanguages';
import {CompleteClassWithEveryLanguages} from './ClassWithEveryLanguages';

/**
 * <p>
 *     An enum class containing every languages in the project.
 *     The languages used are only those direct languages and not a basic language.
 * </p>
 *
 * <p>
 *     The other utility class is the getter and setter from a {@link ClassWithEveryLanguages}
 *     to retrieve its property by the instance that is used.
 * </p>
 *
 * As it stands, the languages are:
 * <ol>
 *     <li>en_AM - American English</li>
 *     <li>en_EU - European English</li>
 *     <li>fr_CA - Canadian French</li>
 *     <li>fr_EU - European French</li>
 *     <li>de    - German</li>
 *     <li>es_AM - American Spanish</li>
 *     <li>es_EU - European Spanish</li>
 *     <li>it    - Italian</li>
 *     <li>nl    - Dutch</li>
 *     <li>pt_AM - American Portuguese</li>
 *     <li>pt_EU - European Portuguese</li>
 *     <li>ru    - Russian</li>
 *     <li>ja    - Japanese</li>
 *     <li>zh_T  - Traditional Chinese</li>
 *     <li>zh_S  - Simplified Chinese</li>
 *     <li>ko    - Korean</li>
 * </ol>
 *
 * @indirectlyInherit<EveryLanguages>
 */
export class ProjectLanguages
    extends Enum<ProjectLanguagesOrdinals, ProjectLanguagesNames>
    implements LanguageEnumerable {

    //region -------------------- Enum instances --------------------

    public static readonly AMERICAN_ENGLISH =    new ProjectLanguages(EveryLanguages.AMERICAN_ENGLISH,   true, );
    public static readonly EUROPEAN_ENGLISH =    new ProjectLanguages(EveryLanguages.EUROPEAN_ENGLISH,   true, );
    public static readonly CANADIAN_FRENCH =     new ProjectLanguages(EveryLanguages.CANADIAN_FRENCH,    true, );
    public static readonly EUROPEAN_FRENCH =     new ProjectLanguages(EveryLanguages.EUROPEAN_FRENCH,    true, );
    public static readonly GERMAN =              new ProjectLanguages(EveryLanguages.GERMAN,             true, );
    public static readonly AMERICAN_SPANISH =    new ProjectLanguages(EveryLanguages.AMERICAN_SPANISH,   true, );
    public static readonly EUROPEAN_SPANISH =    new ProjectLanguages(EveryLanguages.EUROPEAN_SPANISH,   true, );
    public static readonly ITALIAN =             new ProjectLanguages(EveryLanguages.ITALIAN,            true, );
    public static readonly DUTCH =               new ProjectLanguages(EveryLanguages.DUTCH,              true, );
    public static readonly AMERICAN_PORTUGUESE = new ProjectLanguages(EveryLanguages.AMERICAN_PORTUGUESE,false,);
    public static readonly EUROPEAN_PORTUGUESE = new ProjectLanguages(EveryLanguages.EUROPEAN_PORTUGUESE,false,);
    public static readonly RUSSIAN =             new ProjectLanguages(EveryLanguages.RUSSIAN,            true, );
    public static readonly JAPANESE =            new ProjectLanguages(EveryLanguages.JAPANESE,           true, );
    public static readonly TRADITIONAL_CHINESE = new ProjectLanguages(EveryLanguages.TRADITIONAL_CHINESE,true, );
    public static readonly SIMPLIFIED_CHINESE =  new ProjectLanguages(EveryLanguages.SIMPLIFIED_CHINESE, true, );
    public static readonly KOREAN =              new ProjectLanguages(EveryLanguages.KOREAN,             true, );

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES?: ProjectLanguagesArray<ProjectLanguages>;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #language: EveryLanguages;
    readonly #isASupportedLanguageInSMM: boolean;

    //endregion -------------------- Attributes --------------------

    protected constructor(language: ProjectLanguages,)
    // @ts-ignore
    private constructor(language: EveryLanguages, isASupportedLanguageInSMM: boolean,)
    protected constructor(language: EveryLanguages | ProjectLanguages, isASupportedLanguageInSMM?: boolean,) {
        super(ProjectLanguages);
        if (language instanceof ProjectLanguages) {
            this.#language = language.language;
            this.#isASupportedLanguageInSMM = language.isASupportedLanguageInSMM;
        } else {
            this.#language = language;
            this.#isASupportedLanguageInSMM = isASupportedLanguageInSMM as boolean;
        }
    }

    //region -------------------- Getter methods --------------------

    public get language(): EveryLanguages {
        return this.#language;
    }

    public get isACompleteLanguage(): boolean {
        return this.language.isACompleteLanguage;
    }

    public get projectAcronym(): PossibleEveryLanguagesAcronym {
        return this.language.projectAcronym;
    }

    public get internationalAcronym(): PossibleEveryLanguagesInternationalAcronym {
        return this.language.internationalAcronym;
    }

    public get englishName(): PossibleEveryLanguagesEnglishName {
        return this.language.englishName;
    }

    public get originalName(): PossibleEveryLanguagesOriginalName {
        return this.language.originalName;
    }

    public get isCurrentLanguage(): boolean {
        return this.language.isCurrentLanguage;
    }

    public get isCurrentLanguageOrAssociatedWithIt(): boolean {
        return this.language.isCurrentLanguageOrAssociatedWithIt;
    }

    public get isASupportedLanguageInSMM(): boolean {
        return this.#isASupportedLanguageInSMM;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public get<T extends CompleteClassWithEveryLanguages, >(classWithEveryLanguages: T,): string
    public get<T extends ClassWithEveryLanguages, >(classWithEveryLanguages: T,): string
    public get<T extends | ClassWithEveryLanguages | CompleteClassWithEveryLanguages, >(classWithEveryLanguages: T,): string {
        return this.language.get(classWithEveryLanguages);
    }

    public original(classWithEveryLanguages: CompleteClassWithEveryLanguages,): | string | AmericanOrEuropeanOriginal | CanadianOrEuropeanOriginal | ChineseOriginal
    public original(classWithEveryLanguages: ClassWithEveryLanguages,): | string | AmericanOrEuropeanOriginal | CanadianOrEuropeanOriginal | ChineseOriginal | null
    public original(classWithEveryLanguages: | ClassWithEveryLanguages | CompleteClassWithEveryLanguages,): | string | AmericanOrEuropeanOriginal | CanadianOrEuropeanOriginal | ChineseOriginal | null {
        return this.language.original(classWithEveryLanguages);
    }


    public static get currentLanguage(): ProjectLanguages {
        return this.getValue(EveryLanguages.currentLanguage)!;
    }

    public static set currentLanguage(value: | EveryLanguages | ProjectLanguages | string | number,) {
        this.setCurrentLanguage(value);
    }

    public static setCurrentLanguage(value: | EveryLanguages | ProjectLanguages | string | number,): typeof ProjectLanguages {
        if (value instanceof ProjectLanguages)
            EveryLanguages.setCurrentLanguage(value.language);
        else
            EveryLanguages.setCurrentLanguage(value);
        return this;
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static get default(): ProjectLanguages {
        return this.getValue(EveryLanguages.default)!;
    }

    public static set default(value: | EveryLanguages | ProjectLanguages | string | number,) {
        this.setDefault(value);
    }

    public static setDefault(value: | EveryLanguages | ProjectLanguages | string | number,): typeof ProjectLanguages {
        if (value instanceof ProjectLanguages)
            EveryLanguages.setDefault(value.language);
        else
            EveryLanguages.setDefault(value);
        return this;
    }


    public static getValue(nullValue: | null | undefined,): null
    public static getValue(value: PossibleNonNullableValue,): ProjectLanguages
    public static getValue<O extends ProjectLanguagesOrdinals, >(ordinal: O,): ProjectLanguagesArray<ProjectLanguages>[O]
    public static getValue<O extends number, >(ordinal: O,): | NonNullable<ProjectLanguagesArray<ProjectLanguages>[O]> | null
    public static getValue(nameOrAcronym: | PossibleProjectLanguagesAcronym | PossibleProjectLanguagesEnglishName | PossibleProjectLanguagesOriginalName | ProjectLanguagesNames,): ProjectLanguages
    public static getValue(nameOrAcronym: string,): | ProjectLanguages | null
    public static getValue<I extends ProjectLanguages, >(instance: I,): I
    public static getValue(instance: EveryLanguages,): | ProjectLanguages | null
    public static getValue(value: | ProjectLanguages | EveryLanguages | string | number | null | undefined,): | ProjectLanguages | null
    public static getValue(value: | ProjectLanguages | EveryLanguages | string | number | null | undefined,): | ProjectLanguages | null {
        return value == null
            ? null
            : typeof value === 'string'
                ? Reflect.get(this, value.toUpperCase(),)
                    ?? this.getValue(EveryLanguages.getValue(value))
                    ?? null
                : typeof value === 'number'
                    ? this.values[value] ?? null
                    : value instanceof EveryLanguages
                        ? this.values.find(language => language.language === value) ?? null
                        : value;
    }


    public static get values(): ProjectLanguagesArray<ProjectLanguages> {
        return this.#VALUES ??= [
            this.AMERICAN_ENGLISH, this.EUROPEAN_ENGLISH,
            this.CANADIAN_FRENCH, this.EUROPEAN_FRENCH,
            this.GERMAN,
            this.AMERICAN_SPANISH, this.EUROPEAN_SPANISH,
            this.ITALIAN,
            this.DUTCH,
            this.AMERICAN_PORTUGUESE, this.EUROPEAN_PORTUGUESE,
            this.RUSSIAN,
            this.JAPANESE,
            this.TRADITIONAL_CHINESE, this.SIMPLIFIED_CHINESE,
            this.KOREAN,
        ];
    }


    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
