import type {AmericanOrEuropeanArray, AmericanOrEuropeanOriginal, CanadianOrEuropeanArray, CanadianOrEuropeanOriginal, ChineseArray, ChineseOriginal, Language} from './containers/Language';
import type {Name}                                                                                                                                              from './Name';

import {EveryLanguages}            from '../EveryLanguages';
import {ProjectLanguages}          from '../ProjectLanguages';
import {LanguageContainer}         from './containers/LanguageContainer';
import {OptionalLanguage}          from './containers/OptionalLanguage';
import {OptionalLanguageContainer} from './containers/OptionalLanguageContainer';

export class NameContainer
    implements Name {

    //region -------------------- Attributes --------------------

    /**
     * The optional languages used in the project.
     *
     * @see ProjectLanguages.isASupportedLanguageInSMM for the usage outside this class.
     */
    public static readonly OPTIONAL_LANGUAGES = [EveryLanguages.PORTUGUESE,] as const;

    readonly #originalLanguages: readonly EveryLanguages[];
    #map?: Map<EveryLanguages, string>;

    readonly #english: Language<string, AmericanOrEuropeanArray>;
    readonly #french: Language<string, CanadianOrEuropeanArray>;
    readonly #german: Language<string>;
    readonly #spanish: Language<string, AmericanOrEuropeanArray>;
    readonly #italian: Language<string>;
    readonly #dutch: Language<string>;
    readonly #portuguese: OptionalLanguage<boolean, string, AmericanOrEuropeanArray>;
    readonly #russian: Language<string>;
    readonly #japanese: Language<string>;
    readonly #chinese: Language<string, ChineseArray>;
    readonly #korean: Language<string>;

    //endregion -------------------- Attributes --------------------

    public constructor(english: AmericanOrEuropeanOriginal,
                       french: CanadianOrEuropeanOriginal,
                       german: string,
                       spanish: AmericanOrEuropeanOriginal,
                       italian: string,
                       dutch: string,
                       portuguese: AmericanOrEuropeanOriginal,
                       russian: string,
                       japanese: string,
                       chinese: ChineseOriginal,
                       korean: string,) {
        const originalLanguages: EveryLanguages[] = [];

        this.#english = NameContainer.__newLanguageContainer<string, AmericanOrEuropeanArray>(EveryLanguages.ENGLISH, originalLanguages, english,);
        this.#french = NameContainer.__newLanguageContainer<string, CanadianOrEuropeanArray>(EveryLanguages.FRENCH, originalLanguages, french,);
        this.#german = NameContainer.__newLanguageContainer(EveryLanguages.GERMAN, originalLanguages, german,);
        this.#spanish = NameContainer.__newLanguageContainer<string, AmericanOrEuropeanArray>(EveryLanguages.SPANISH, originalLanguages, spanish,);
        this.#italian = NameContainer.__newLanguageContainer(EveryLanguages.ITALIAN, originalLanguages, italian,);
        this.#dutch = NameContainer.__newLanguageContainer(EveryLanguages.DUTCH, originalLanguages, dutch,);
        this.#portuguese = NameContainer.__newLanguageContainer<string, AmericanOrEuropeanArray>(EveryLanguages.PORTUGUESE, originalLanguages, portuguese,);
        this.#russian = NameContainer.__newLanguageContainer(EveryLanguages.RUSSIAN, originalLanguages, russian,);
        this.#japanese = NameContainer.__newLanguageContainer(EveryLanguages.JAPANESE, originalLanguages, japanese,);
        this.#chinese = NameContainer.__newLanguageContainer<string, ChineseArray>(EveryLanguages.CHINESE, originalLanguages, chinese,);
        this.#korean = NameContainer.__newLanguageContainer(EveryLanguages.KOREAN, originalLanguages, korean,);

        this.#originalLanguages = originalLanguages;
    }


    //region -------------------- Name properties --------------------

    public get languageValue() {
        return ProjectLanguages.currentLanguage.get(this);
    }

    //region -------------------- English properties --------------------

    public get originalEnglish() {
        return this.#english.original;
    }

    public get english() {
        return this.#english.get();
    }

    public get americanEnglish() {
        return this.#english.get(0);
    }

    public get europeanEnglish() {
        return this.#english.get(1);
    }

    //endregion -------------------- English properties --------------------
    //region -------------------- French properties --------------------

    public get originalFrench() {
        return this.#french.original;
    }

    public get french() {
        return this.#french.get();
    }

    public get canadianFrench() {
        return this.#french.get(0);
    }

    public get europeanFrench() {
        return this.#french.get(1);
    }

    //endregion -------------------- French properties --------------------
    //region -------------------- German properties --------------------

    public get german() {
        return this.#german.original;
    }

    //endregion -------------------- German properties --------------------
    //region -------------------- Spanish properties --------------------

    public get originalSpanish() {
        return this.#spanish.original;
    }

    public get spanish() {
        return this.#spanish.get();
    }

    public get americanSpanish() {
        return this.#spanish.get(0);
    }

    public get europeanSpanish() {
        return this.#spanish.get(1);
    }

    //endregion -------------------- Spanish properties --------------------
    //region -------------------- Italian properties --------------------

    public get italian() {
        return this.#italian.original;
    }

    //endregion -------------------- Italian properties --------------------
    //region -------------------- Dutch properties --------------------

    public get dutch() {
        return this.#dutch.original;
    }

    //endregion -------------------- Dutch properties --------------------
    //region -------------------- Portuguese properties --------------------

    public get isPortugueseUsed(): boolean {
        return this.#portuguese.isUsed;
    }

    public get originalPortuguese() {
        return this.#portuguese.original;
    }

    public get portuguese() {
        return this.#portuguese.get();
    }

    public get americanPortuguese() {
        return this.#portuguese.get(0);
    }

    public get europeanPortuguese() {
        return this.#portuguese.get(1);
    }

    //endregion -------------------- Portuguese properties --------------------
    //region -------------------- Russian properties --------------------

    public get russian() {
        return this.#russian.original;
    }

    //endregion -------------------- Russian properties --------------------
    //region -------------------- Japanese properties --------------------

    public get japanese() {
        return this.#japanese.original;
    }

    //endregion -------------------- Japanese properties --------------------
    //region -------------------- Chinese properties --------------------

    public get originalChinese() {
        return this.#chinese.original;
    }

    public get chinese() {
        return this.#chinese.get();
    }

    public get simplifiedChinese() {
        return this.#chinese.get(0);
    }

    public get traditionalChinese() {
        return this.#chinese.get(1);
    }

    //endregion -------------------- Chinese properties --------------------
    //region -------------------- Korean properties --------------------

    public get korean() {
        return this.#korean.original;
    }

    //endregion -------------------- Korean properties --------------------

    public get originalLanguages() {
        return this.#originalLanguages;
    }

    //endregion -------------------- Name properties --------------------

    public toNameMap() {
        return this.#map ??= new Map(this.originalLanguages.map(language => [language, language.get(this),]));
    }


    private static __newLanguageContainer<S extends string, >(language: OptionalLanguages, originalLanguages: EveryLanguages[], value: S,): Language<S>
    private static __newLanguageContainer<S extends string, >(language: EveryLanguages, originalLanguages: EveryLanguages[], value: S,): Language<S>
    private static __newLanguageContainer<S extends string, A extends readonly string[], >(language: OptionalLanguages, originalLanguages: EveryLanguages[], value: | S | A,): OptionalLanguage<boolean, S, A>
    private static __newLanguageContainer<S extends string, A extends readonly string[], >(language: EveryLanguages, originalLanguages: EveryLanguages[], value: | S | A,): Language<S, A>
    private static __newLanguageContainer<S extends string, A extends readonly string[], >(language: EveryLanguages, originalLanguages: EveryLanguages[], value: | S | A,) {
        const languageContainer = this.OPTIONAL_LANGUAGES.includes(language) ? OptionalLanguageContainer.newInstance(value) : LanguageContainer.newInstance(value);

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
                if ((languageContainer as OptionalLanguage<boolean, S, A>).isUsed)
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

type OptionalLanguages = typeof EveryLanguages.PORTUGUESE;
