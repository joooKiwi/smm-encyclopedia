import type {AmericanOrEuropeanArray, AmericanOrEuropeanOriginal, CanadianOrEuropeanArray, CanadianOrEuropeanOriginal, ChineseArray, Language, PossibleAmericanOrEuropeanValue, PossibleChineseValue} from './containers/Language';
import type {EmptyableOptionalLanguage}                                                                                                                                                               from './containers/EmptyableOptionalLanguage';
import type {EmptyableLanguage}                                                                                                                                                                       from './containers/EmptyableLanguage';
import type {Name}                                                                                                                                                                                    from './Name';
import type {OptionalLanguage}                                                                                                                                                                        from './containers/OptionalLanguage';
import type {PossibleLanguageValue}                                                                                                                                                                   from '../ClassWithOnlyProjectLanguages';

import {assert}                    from '../../util/utilitiesMethods';
import {EmptyLanguageContainer}    from './containers/EmptyLanguageContainer';
import {EveryLanguages}            from '../EveryLanguages';
import {LanguageContainer}         from './containers/LanguageContainer';
import {OptionalLanguageContainer} from './containers/OptionalLanguageContainer';
import {ProjectLanguages}          from '../ProjectLanguages';

export class NameContainer<T, >
    implements Name<T> {

    //region -------------------- Attributes --------------------

    static readonly #OPTIONAL_LANGUAGES = [EveryLanguages.HEBREW, EveryLanguages.POLISH,
        EveryLanguages.UKRAINIAN, EveryLanguages.GREEK,] as const;

    readonly #originalLanguages: readonly EveryLanguages[];
    #map?: Map<EveryLanguages, T>;

    readonly #englishContainer: Language<T, T, AmericanOrEuropeanArray<T>>;
    readonly #frenchContainer: Language<T, T, CanadianOrEuropeanArray<T>>;
    readonly #germanContainer: EmptyableLanguage<T, T, never>;
    readonly #spanishContainer: EmptyableLanguage<T, T, AmericanOrEuropeanArray<T>>;
    readonly #italianContainer: EmptyableLanguage<T, T, never>;
    readonly #dutchContainer: EmptyableLanguage<T, T, never>;
    readonly #portugueseContainer: EmptyableLanguage<T, T, AmericanOrEuropeanArray<T>>;
    readonly #russianContainer: EmptyableLanguage<T, T, never>;
    readonly #japaneseContainer: EmptyableLanguage<T, T, never>;
    readonly #chineseContainer: EmptyableLanguage<T, T, ChineseArray<T>>;
    readonly #koreanContainer: EmptyableLanguage<T, T, never>;
    readonly #hebrewContainer: EmptyableOptionalLanguage<T, T, never>;
    readonly #polishContainer: EmptyableOptionalLanguage<T, T, never>;
    readonly #ukrainianContainer: EmptyableOptionalLanguage<T, T, never>;
    readonly #greekContainer: EmptyableOptionalLanguage<T, T, never>;

    //endregion -------------------- Attributes --------------------

    public constructor(english: AmericanOrEuropeanOriginal<T>,
                       french: CanadianOrEuropeanOriginal<T>,
                       german: PossibleLanguageValue<T>,
                       spanish: PossibleAmericanOrEuropeanValue<T>,
                       italian: PossibleLanguageValue<T>,
                       dutch: PossibleLanguageValue<T>,
                       portuguese: PossibleAmericanOrEuropeanValue<T>,
                       russian: PossibleLanguageValue<T>,
                       japanese: PossibleLanguageValue<T>,
                       chinese: PossibleChineseValue<T>,
                       korean: PossibleLanguageValue<T>,
                       hebrew: PossibleLanguageValue<T>,
                       polish: PossibleLanguageValue<T>,
                       ukrainian: PossibleLanguageValue<T>,
                       greek: PossibleLanguageValue<T>,) {
        const originalLanguages: EveryLanguages[] = [];

        this.#englishContainer = NameContainer.__newLanguageContainer<T, T, AmericanOrEuropeanArray<T>>(EveryLanguages.ENGLISH, originalLanguages, english,);
        this.#frenchContainer = NameContainer.__newLanguageContainer<T, T, CanadianOrEuropeanArray<T>>(EveryLanguages.FRENCH, originalLanguages, french,);
        this.#germanContainer = NameContainer.__newLanguageContainer<T, T>(EveryLanguages.GERMAN, originalLanguages, german,);
        this.#spanishContainer = NameContainer.__newLanguageContainer<T, T, AmericanOrEuropeanArray<T>>(EveryLanguages.SPANISH, originalLanguages, spanish,);
        this.#italianContainer = NameContainer.__newLanguageContainer<T, T>(EveryLanguages.ITALIAN, originalLanguages, italian,);
        this.#dutchContainer = NameContainer.__newLanguageContainer<T, T>(EveryLanguages.DUTCH, originalLanguages, dutch,);
        this.#portugueseContainer = NameContainer.__newLanguageContainer<T, T, AmericanOrEuropeanArray<T>>(EveryLanguages.PORTUGUESE, originalLanguages, portuguese,);
        this.#russianContainer = NameContainer.__newLanguageContainer<T, T>(EveryLanguages.RUSSIAN, originalLanguages, russian,);
        this.#japaneseContainer = NameContainer.__newLanguageContainer<T, T>(EveryLanguages.JAPANESE, originalLanguages, japanese,);
        this.#chineseContainer = NameContainer.__newLanguageContainer<T, T, ChineseArray<T>>(EveryLanguages.CHINESE, originalLanguages, chinese,);
        this.#koreanContainer = NameContainer.__newLanguageContainer<T, T>(EveryLanguages.KOREAN, originalLanguages, korean,);
        this.#hebrewContainer = NameContainer.__newLanguageContainer<T, T>(EveryLanguages.HEBREW, originalLanguages, hebrew,);
        this.#polishContainer = NameContainer.__newLanguageContainer<T, T>(EveryLanguages.POLISH, originalLanguages, polish,);
        this.#ukrainianContainer = NameContainer.__newLanguageContainer<T, T>(EveryLanguages.UKRAINIAN, originalLanguages, ukrainian,);
        this.#greekContainer = NameContainer.__newLanguageContainer<T, T>(EveryLanguages.GREEK, originalLanguages, greek,);

        this.#originalLanguages = originalLanguages;
    }


    //region -------------------- Name properties --------------------

    /**
     * The optional languages on the {@link Name} used in the project:
     * <ol>
     *  <li>{@link EveryLanguages.HEBREW}</li>
     *  <li>{@link EveryLanguages.POLISH}</li>
     *  <li>{@link EveryLanguages.UKRAINIAN}</li>
     *  <li>{@link EveryLanguages.GREEK}</li>
     * </ol>
     *
     * @see ProjectLanguages.isInEverySuperMarioMakerGame
     */
    public static get optionalLanguages(): readonly [EveryLanguages, EveryLanguages, EveryLanguages, EveryLanguages,] {
        return this._optionalLanguages;
    }

    /**
     * The options languages on the {@link NameContainer},
     * but as the type used by the private static attributes.
     */
    protected static get _optionalLanguages() {
        return this.#OPTIONAL_LANGUAGES;
    }

    public get languageValue(): T {
        return ProjectLanguages.currentLanguage.get<T>(this);
    }

    //region -------------------- English properties --------------------

    public get originalEnglish(): AmericanOrEuropeanOriginal<T> {
        return this.#englishContainer.original;
    }

    public get english(): T {
        return this.#englishContainer.get();
    }

    public get americanEnglish(): T {
        return this.#englishContainer.get(0);
    }

    public get europeanEnglish(): T {
        return this.#englishContainer.get(1);
    }

    //endregion -------------------- English properties --------------------
    //region -------------------- French properties --------------------

    public get originalFrench(): CanadianOrEuropeanOriginal<T> {
        return this.#frenchContainer.original;
    }

    public get french(): T {
        return this.#frenchContainer.get();
    }

    public get canadianFrench(): T {
        return this.#frenchContainer.get(0);
    }

    public get europeanFrench(): T {
        return this.#frenchContainer.get(1);
    }

    //endregion -------------------- French properties --------------------
    //region -------------------- German properties --------------------

    public get german(): PossibleLanguageValue<T> {
        return this.#germanContainer.original;
    }

    //endregion -------------------- German properties --------------------
    //region -------------------- Spanish properties --------------------

    public get originalSpanish(): PossibleAmericanOrEuropeanValue<T> {
        return this.#spanishContainer.original;
    }

    public get spanish(): PossibleLanguageValue<T> {
        return this.#spanishContainer.get();
    }

    public get americanSpanish(): PossibleLanguageValue<T> {
        return this.#spanishContainer.get(0);
    }

    public get europeanSpanish(): PossibleLanguageValue<T> {
        return this.#spanishContainer.get(1);
    }

    //endregion -------------------- Spanish properties --------------------
    //region -------------------- Italian properties --------------------

    public get italian(): PossibleLanguageValue<T> {
        return this.#italianContainer.original;
    }

    //endregion -------------------- Italian properties --------------------
    //region -------------------- Dutch properties --------------------

    public get dutch(): PossibleLanguageValue<T> {
        return this.#dutchContainer.original;
    }

    //endregion -------------------- Dutch properties --------------------
    //region -------------------- Portuguese properties --------------------

    public get originalPortuguese(): PossibleAmericanOrEuropeanValue<T> {
        return this.#portugueseContainer.original;
    }

    public get portuguese(): PossibleLanguageValue<T> {
        return this.#portugueseContainer.get();
    }

    public get americanPortuguese(): PossibleLanguageValue<T> {
        return this.#portugueseContainer.get(0);
    }

    public get europeanPortuguese(): PossibleLanguageValue<T> {
        return this.#portugueseContainer.get(1);
    }

    //endregion -------------------- Portuguese properties --------------------
    //region -------------------- Russian properties --------------------

    public get russian(): PossibleLanguageValue<T> {
        return this.#russianContainer.original;
    }

    //endregion -------------------- Russian properties --------------------
    //region -------------------- Japanese properties --------------------

    public get japanese(): PossibleLanguageValue<T> {
        return this.#japaneseContainer.original;
    }

    //endregion -------------------- Japanese properties --------------------
    //region -------------------- Chinese properties --------------------

    public get originalChinese(): PossibleChineseValue<T> {
        return this.#chineseContainer.original;
    }

    public get chinese(): PossibleLanguageValue<T> {
        return this.#chineseContainer.get();
    }

    public get traditionalChinese(): PossibleLanguageValue<T> {
        return this.#chineseContainer.get(1);
    }

    public get simplifiedChinese(): PossibleLanguageValue<T> {
        return this.#chineseContainer.get(0);
    }

    //endregion -------------------- Chinese properties --------------------
    //region -------------------- Korean properties --------------------

    public get korean(): PossibleLanguageValue<T> {
        return this.#koreanContainer.original;
    }

    //endregion -------------------- Korean properties --------------------
    //region -------------------- Hebrew properties --------------------

    public get isHebrewUsed(): boolean {
        return this.#hebrewContainer.isUsed;
    }

    public get hebrew(): PossibleLanguageValue<T> {
        return this.#hebrewContainer.original;
    }

    //endregion -------------------- Hebrew properties --------------------
    //region -------------------- Polish properties --------------------

    public get isPolishUsed(): boolean {
        return this.#polishContainer.isUsed;
    }

    public get polish(): PossibleLanguageValue<T> {
        return this.#polishContainer.original;
    }

    //endregion -------------------- Polish properties --------------------
    //region -------------------- Ukrainian properties --------------------

    public get isUkrainianUsed(): boolean {
        return this.#ukrainianContainer.isUsed;
    }

    public get ukrainian(): PossibleLanguageValue<T> {
        return this.#ukrainianContainer.original;
    }

    //endregion -------------------- Ukrainian properties --------------------
    //region -------------------- Greek properties --------------------

    public get isGreekUsed(): boolean {
        return this.#greekContainer.isUsed;
    }

    public get greek(): PossibleLanguageValue<T> {
        return this.#greekContainer.original;
    }

    //endregion -------------------- Greek properties --------------------

    public get originalLanguages(): readonly EveryLanguages[] {
        return this.#originalLanguages;
    }

    //endregion -------------------- Name properties --------------------

    public toNameMap(): ReadonlyMap<EveryLanguages, T> {
        return this.#map ??= new Map(this.originalLanguages.map(language => [language, language.get(this)!,]));
    }


    private static __newLanguageContainer<T, S extends T, >(language: OptionalLanguages, originalLanguages: EveryLanguages[], value: S,): EmptyableOptionalLanguage<T, S, never>
    private static __newLanguageContainer<T, S extends T, >(language: OptionalLanguages, originalLanguages: EveryLanguages[], value: | S | null,): OptionalLanguage<T, S, never>
    private static __newLanguageContainer<T, S extends T, >(language: EveryLanguages, originalLanguages: EveryLanguages[], value: | S,): EmptyableLanguage<T, S, never>
    private static __newLanguageContainer<T, S extends T, >(language: EveryLanguages, originalLanguages: EveryLanguages[], value: | S | null,): Language<T, S, never>
    private static __newLanguageContainer<T, S extends T, A extends readonly T[], >(language: OptionalLanguages, originalLanguages: EveryLanguages[], value: | S | A,): OptionalLanguage<T, S, A>
    private static __newLanguageContainer<T, S extends T, A extends readonly T[], >(language: OptionalLanguages, originalLanguages: EveryLanguages[], value: | S | A | null,): EmptyableOptionalLanguage<T, S, A>
    private static __newLanguageContainer<T, S extends T, A extends readonly T[], >(language: EveryLanguages, originalLanguages: EveryLanguages[], value: | S | A | null,): Language<T, S, A>
    private static __newLanguageContainer<T, S extends T, A extends readonly T[], >(language: EveryLanguages, originalLanguages: EveryLanguages[], value: | S | A,): EmptyableLanguage<T, S, A>
    private static __newLanguageContainer<T, >(language: EveryLanguages, originalLanguages: EveryLanguages[], value: | T | readonly T[] | null,) {
        if (value == null) {
            assert(!language.isACompleteLanguage, `The language "${language.englishName}" cannot be null if it is a complete language.`,);
            return EmptyLanguageContainer.get;
        }

        const languageContainer = this.optionalLanguages.includes(language) ? OptionalLanguageContainer.newInstance(value) : LanguageContainer.newInstance(value);
        const isValueArray = value instanceof Array;

        switch (language) {
            case EveryLanguages.ENGLISH:
            case EveryLanguages.FRENCH:
            case EveryLanguages.SPANISH:
            case EveryLanguages.CHINESE:
            case EveryLanguages.PORTUGUESE:
                if (isValueArray)
                    originalLanguages.push(...language.children);
                else
                    originalLanguages.push(language);
                break;
            case EveryLanguages.HEBREW:
            case EveryLanguages.POLISH:
            case EveryLanguages.UKRAINIAN:
            case EveryLanguages.GREEK:
                if ((languageContainer as OptionalLanguage<T>).isUsed)
                    originalLanguages.push(language);
                break;
            default:
                originalLanguages.push(language);
        }

        return languageContainer;
    }

}

type OptionalLanguages = typeof NameContainer['optionalLanguages'][number];
