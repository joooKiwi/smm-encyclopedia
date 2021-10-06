import type {AmericanOrEuropeanArray, AmericanOrEuropeanOriginal, CanadianOrEuropeanArray, CanadianOrEuropeanOriginal, ChineseArray, ChineseOriginal, Language} from './containers/Language';
import type {EmptyableOptionalLanguage}                                                                                                                         from './containers/EmptyableOptionalLanguage';
import type {EmptyableLanguage}                                                                                                                                 from './containers/EmptyableLanguage';
import type {Name}                                                                                                                                              from './Name';
import type {OptionalLanguage}                                                                                                                                  from './containers/OptionalLanguage';

import {EveryLanguages}            from '../EveryLanguages';
import {ProjectLanguages}          from '../ProjectLanguages';
import {LanguageContainer}         from './containers/LanguageContainer';
import {OptionalLanguageContainer} from './containers/OptionalLanguageContainer';
import {EmptyLanguageContainer}    from './containers/EmptyLanguageContainer';

export class NameContainer
    implements Name {

    //region -------------------- Attributes --------------------

    static readonly #OPTIONAL_LANGUAGES = [EveryLanguages.PORTUGUESE,] as const;

    readonly #originalLanguages: readonly EveryLanguages[];
    #map?: Map<EveryLanguages, string>;

    readonly #englishContainer: Language<string, AmericanOrEuropeanArray>;
    readonly #frenchContainer: Language<string, CanadianOrEuropeanArray>;
    readonly #germanContainer: EmptyableLanguage<string>;
    readonly #spanishContainer: EmptyableLanguage<string, AmericanOrEuropeanArray>;
    readonly #italianContainer: EmptyableLanguage<string>;
    readonly #dutchContainer: EmptyableLanguage<string>;
    readonly #portugueseContainer: EmptyableOptionalLanguage<string, AmericanOrEuropeanArray>;
    readonly #russianContainer: EmptyableLanguage<string>;
    readonly #japaneseContainer: EmptyableLanguage<string>;
    readonly #chineseContainer: EmptyableLanguage<string, ChineseArray>;
    readonly #koreanContainer: EmptyableLanguage<string>;

    //endregion -------------------- Attributes --------------------

    public constructor(english: AmericanOrEuropeanOriginal,
                       french: CanadianOrEuropeanOriginal,
                       german: | string | null,
                       spanish: | AmericanOrEuropeanOriginal | null,
                       italian: | string | null,
                       dutch: | string | null,
                       portuguese: | AmericanOrEuropeanOriginal | null,
                       russian: | string | null,
                       japanese: | string | null,
                       chinese: | ChineseOriginal | null,
                       korean: | string | null,) {
        const originalLanguages: EveryLanguages[] = [];

        this.#englishContainer = NameContainer.__newLanguageContainer<string, AmericanOrEuropeanArray>(EveryLanguages.ENGLISH, originalLanguages, english,);
        this.#frenchContainer = NameContainer.__newLanguageContainer<string, CanadianOrEuropeanArray>(EveryLanguages.FRENCH, originalLanguages, french,);
        this.#germanContainer = NameContainer.__newLanguageContainer(EveryLanguages.GERMAN, originalLanguages, german,);
        this.#spanishContainer = NameContainer.__newLanguageContainer<string, AmericanOrEuropeanArray>(EveryLanguages.SPANISH, originalLanguages, spanish,);
        this.#italianContainer = NameContainer.__newLanguageContainer(EveryLanguages.ITALIAN, originalLanguages, italian,);
        this.#dutchContainer = NameContainer.__newLanguageContainer(EveryLanguages.DUTCH, originalLanguages, dutch,);
        this.#portugueseContainer = NameContainer.__newLanguageContainer<string, AmericanOrEuropeanArray>(EveryLanguages.PORTUGUESE, originalLanguages, portuguese,);
        this.#russianContainer = NameContainer.__newLanguageContainer(EveryLanguages.RUSSIAN, originalLanguages, russian,);
        this.#japaneseContainer = NameContainer.__newLanguageContainer(EveryLanguages.JAPANESE, originalLanguages, japanese,);
        this.#chineseContainer = NameContainer.__newLanguageContainer<string, ChineseArray>(EveryLanguages.CHINESE, originalLanguages, chinese,);
        this.#koreanContainer = NameContainer.__newLanguageContainer(EveryLanguages.KOREAN, originalLanguages, korean,);

        this.#originalLanguages = originalLanguages;
    }


    //region -------------------- Name properties --------------------

    /**
     * The optional languages on the {@link Name} used in the project.
     *
     * As it stands, only the portuguese is there, but other languages may be added in the future when more translation are found.
     *
     * @see ProjectLanguages.isASupportedLanguageInSMM
     */
    public static get optionalLanguages(): readonly [EveryLanguages] {
        return this._optionalLanguages;
    }

    /**
     * The options languages on the {@link NameContainer},
     * but as the type used by the private static attributes.
     *
     * @protected
     */
    protected static get _optionalLanguages() {
        return this.#OPTIONAL_LANGUAGES;
    }

    public get languageValue() {
        return ProjectLanguages.currentLanguage.get(this);
    }

    //region -------------------- English properties --------------------

    public get originalEnglish() {
        return this.#englishContainer.original;
    }

    public get english() {
        return this.#englishContainer.get();
    }

    public get americanEnglish() {
        return this.#englishContainer.get(0);
    }

    public get europeanEnglish() {
        return this.#englishContainer.get(1);
    }

    //endregion -------------------- English properties --------------------
    //region -------------------- French properties --------------------

    public get originalFrench() {
        return this.#frenchContainer.original;
    }

    public get french() {
        return this.#frenchContainer.get();
    }

    public get canadianFrench() {
        return this.#frenchContainer.get(0);
    }

    public get europeanFrench() {
        return this.#frenchContainer.get(1);
    }

    //endregion -------------------- French properties --------------------
    //region -------------------- German properties --------------------

    public get german() {
        return this.#germanContainer.original;
    }

    //endregion -------------------- German properties --------------------
    //region -------------------- Spanish properties --------------------

    public get originalSpanish() {
        return this.#spanishContainer.original;
    }

    public get spanish() {
        return this.#spanishContainer.get();
    }

    public get americanSpanish() {
        return this.#spanishContainer.get(0);
    }

    public get europeanSpanish() {
        return this.#spanishContainer.get(1);
    }

    //endregion -------------------- Spanish properties --------------------
    //region -------------------- Italian properties --------------------

    public get italian() {
        return this.#italianContainer.original;
    }

    //endregion -------------------- Italian properties --------------------
    //region -------------------- Dutch properties --------------------

    public get dutch() {
        return this.#dutchContainer.original;
    }

    //endregion -------------------- Dutch properties --------------------
    //region -------------------- Portuguese properties --------------------

    public get isPortugueseUsed(): boolean {
        return this.#portugueseContainer.isUsed;
    }

    public get originalPortuguese() {
        return this.#portugueseContainer.original;
    }

    public get portuguese() {
        return this.#portugueseContainer.get();
    }

    public get americanPortuguese() {
        return this.#portugueseContainer.get(0);
    }

    public get europeanPortuguese() {
        return this.#portugueseContainer.get(1);
    }

    //endregion -------------------- Portuguese properties --------------------
    //region -------------------- Russian properties --------------------

    public get russian() {
        return this.#russianContainer.original;
    }

    //endregion -------------------- Russian properties --------------------
    //region -------------------- Japanese properties --------------------

    public get japanese() {
        return this.#japaneseContainer.original;
    }

    //endregion -------------------- Japanese properties --------------------
    //region -------------------- Chinese properties --------------------

    public get originalChinese() {
        return this.#chineseContainer.original;
    }

    public get chinese() {
        return this.#chineseContainer.get();
    }

    public get traditionalChinese() {
        return this.#chineseContainer.get(1);
    }

    public get simplifiedChinese() {
        return this.#chineseContainer.get(0);
    }

    //endregion -------------------- Chinese properties --------------------
    //region -------------------- Korean properties --------------------

    public get korean() {
        return this.#koreanContainer.original;
    }

    //endregion -------------------- Korean properties --------------------

    public get originalLanguages() {
        return this.#originalLanguages;
    }

    //endregion -------------------- Name properties --------------------

    public toNameMap() {
        return this.#map ??= new Map(this.originalLanguages.map(language => [language, language.get(this)!,]));
    }


    private static __newLanguageContainer<S extends string, >(language: OptionalLanguages, originalLanguages: EveryLanguages[], value: | S,): EmptyableOptionalLanguage<S>
    private static __newLanguageContainer<S extends string, >(language: OptionalLanguages, originalLanguages: EveryLanguages[], value: | S | null,): OptionalLanguage<S>
    private static __newLanguageContainer<S extends string, >(language: EveryLanguages, originalLanguages: EveryLanguages[], value: | S,): EmptyableLanguage<S>
    private static __newLanguageContainer<S extends string, >(language: EveryLanguages, originalLanguages: EveryLanguages[], value: | S | null,): Language<S>
    private static __newLanguageContainer<S extends string, A extends readonly string[], >(language: OptionalLanguages, originalLanguages: EveryLanguages[], value: | S | A,): OptionalLanguage<S, A>
    private static __newLanguageContainer<S extends string, A extends readonly string[], >(language: OptionalLanguages, originalLanguages: EveryLanguages[], value: | S | A | null,): EmptyableOptionalLanguage<S, A>
    private static __newLanguageContainer<S extends string, A extends readonly string[], >(language: EveryLanguages, originalLanguages: EveryLanguages[], value: | S | A | null,): Language<S, A>
    private static __newLanguageContainer<S extends string, A extends readonly string[], >(language: EveryLanguages, originalLanguages: EveryLanguages[], value: | S | A,): EmptyableLanguage<S, A>
    private static __newLanguageContainer<S extends string, A extends readonly string[], >(language: EveryLanguages, originalLanguages: EveryLanguages[], value: | S | A | null,) {
        if (value == null) {
            if (language.isACompleteLanguage)
                throw new ReferenceError(`The language "${language.englishName}" cannot be null if it is a complete language.`);
            return EmptyLanguageContainer.get;
        }

        const languageContainer = this.optionalLanguages.includes(language) ? OptionalLanguageContainer.newInstance(value) : LanguageContainer.newInstance(value);

        const isValueString = typeof value === 'string';


        switch (language) {
            case EveryLanguages.ENGLISH:
                if (isValueString)
                    originalLanguages.push(EveryLanguages.ENGLISH);
                else
                    originalLanguages.push(EveryLanguages.AMERICAN_ENGLISH, EveryLanguages.EUROPEAN_ENGLISH,);
                break;
            case EveryLanguages.FRENCH:
                if (isValueString)
                    originalLanguages.push(EveryLanguages.FRENCH);
                else
                    originalLanguages.push(EveryLanguages.CANADIAN_FRENCH, EveryLanguages.EUROPEAN_FRENCH,);
                break;
            case EveryLanguages.SPANISH:
                if (isValueString)
                    originalLanguages.push(EveryLanguages.SPANISH);
                else
                    originalLanguages.push(EveryLanguages.AMERICAN_SPANISH, EveryLanguages.EUROPEAN_SPANISH,);
                break;
            case EveryLanguages.CHINESE:
                if (isValueString)
                    originalLanguages.push(EveryLanguages.CHINESE);
                else
                    originalLanguages.push(EveryLanguages.TRADITIONAL_CHINESE, EveryLanguages.SIMPLIFIED_CHINESE,);
                break;
            case EveryLanguages.PORTUGUESE:
                if ((languageContainer as OptionalLanguage<S, A>).isUsed)
                    if (isValueString)
                        originalLanguages.push(EveryLanguages.PORTUGUESE);
                    else
                        originalLanguages.push(EveryLanguages.AMERICAN_PORTUGUESE, EveryLanguages.EUROPEAN_PORTUGUESE,);
                break;
            default:
                originalLanguages.push(language);
        }

        return languageContainer;
    }

}

type OptionalLanguages = typeof NameContainer['_optionalLanguages'][number];
