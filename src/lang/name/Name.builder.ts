import type {AmericanOrEuropeanOriginal, CanadianOrEuropeanOriginal, PossibleAmericanOrEuropeanValue, PossibleChineseValue} from './containers/Language';
import type {Builder}                                                                                                       from '../../util/builder/Builder';
import type {EnumArray as GameArray}                                                  from '../../core/game/Games.types';
import type {IsACompleteNameCallback, PossibleGameReceived}                           from './Name.builder.types';
import type {Name}                                                                    from './Name';
import type {PossibleNameTemplate}                                                                                          from './Name.template';
import type {PossibleLanguageValue}                                                                                         from '../ClassWithOnlyProjectLanguages';

import {assert}         from '../../util/utilitiesMethods';
import {EveryLanguages} from '../EveryLanguages';
import {Games}          from '../../core/game/Games';
import {NameContainer}  from './Name.container';

export class NameBuilder<T extends PossibleNameTemplate, >
    implements Builder<Name<string>> {

    //region -------------------- Attributes --------------------

    /**
     * A constant meant to signify a complete language.
     *
     * As it stands, only the english and french language are complete.
     *
     * @see EveryLanguages.isACompleteLanguage
     * @private
     */
    static readonly #IS_NULLABLE_FOR_COMPLETED_LANGUAGES = false;
    /**
     * A constant meant to signify an optional language.
     *
     * As it stands, only the greek is optional.
     *
     * @see ProjectLanguages.isInEverySuperMarioMakerGame
     * @private
     */
    static readonly #IS_NULLABLE_FOR_OPTIONAL_LANGUAGES = true;

    static readonly #SMM1_LANGUAGES: readonly EveryLanguages[] = [EveryLanguages.ENGLISH, EveryLanguages.FRENCH, EveryLanguages.GERMAN, EveryLanguages.SPANISH, EveryLanguages.ITALIAN, EveryLanguages.DUTCH, EveryLanguages.PORTUGUESE, EveryLanguages.RUSSIAN, EveryLanguages.JAPANESE,];
    static readonly #SMM2_LANGUAGES: readonly EveryLanguages[] = [EveryLanguages.ENGLISH, EveryLanguages.FRENCH, EveryLanguages.GERMAN, EveryLanguages.SPANISH, EveryLanguages.ITALIAN, EveryLanguages.DUTCH, EveryLanguages.RUSSIAN, EveryLanguages.JAPANESE, EveryLanguages.CHINESE, EveryLanguages.KOREAN,];
    static readonly #IS_A_COMPLETE_NAME_BASED_ON_GAME: (game: Games, language: EveryLanguages,) => boolean
        = (game, language,) => game === Games.SUPER_MARIO_MAKER_1 ? this.#SMM1_LANGUAGES.includes(language) : this.#SMM2_LANGUAGES.includes(language);


    #english?: AmericanOrEuropeanOriginal<string>;
    #french?: CanadianOrEuropeanOriginal<string>;
    #german?: PossibleLanguageValue<string>;
    #spanish?: PossibleAmericanOrEuropeanValue<string>;
    #italian?: PossibleLanguageValue<string>;
    #dutch?: PossibleLanguageValue<string>;
    #portuguese?: PossibleAmericanOrEuropeanValue<string>;
    #russian?: PossibleLanguageValue<string>;
    #japanese?: PossibleLanguageValue<string>;
    #chinese?: PossibleChineseValue<string>;
    #korean?: PossibleLanguageValue<string>;
    #greek?: PossibleLanguageValue<string>;

    readonly #template;
    readonly #game;
    readonly #isACompleteName: IsACompleteNameCallback;

    //endregion -------------------- Attributes --------------------

    /**
     * Create a new {@link Builder builder} instance to create a {@link Name}.
     *
     * @param template the {@link PossibleNameTemplate name template}
     * @param game the game received
     * @param isACompleteName tell whenever it is a complete name
     *
     * @note When it receive the game as {@link AllGameReceived "all"}, then it will only be the value received by the 3rd argument (is a complete name).
     */
    public constructor(template: T, game: PossibleGameReceived, isACompleteName: boolean,) {
        this.#template = template;
        if (game === 'all') {
            this.#game = Games.values;
            this.#isACompleteName = () => isACompleteName;
        } else {
            const _game = this.#game = game;
            this.#isACompleteName = language => NameBuilder.#IS_A_COMPLETE_NAME_BASED_ON_GAME(_game, language,) && isACompleteName;
        }
    }

    //region -------------------- Getter & setter methods --------------------

    //region -------------------- English getter & setter methods --------------------

    public get english() {
        return this.#english;
    }

    public setEnglish(value: AmericanOrEuropeanOriginal<string>,): this {
        this.#english = value;
        return this;
    }

    //endregion -------------------- English getter & setter methods --------------------
    //region -------------------- French getter & setter methods --------------------

    public get french() {
        return this.#french;
    }

    public setFrench(value: CanadianOrEuropeanOriginal<string>,): this {
        this.#french = value;
        return this;
    }

    //endregion -------------------- French getter & setter methods --------------------
    //region -------------------- German getter & setter methods --------------------

    public get german() {
        return this.#german;
    }

    public setGerman(value: PossibleLanguageValue<string>,): this {
        this.#german = value;
        return this;
    }

    //endregion -------------------- German getter & setter methods --------------------
    //region -------------------- Spanish getter & setter methods --------------------

    public get spanish() {
        return this.#spanish;
    }

    public setSpanish(value: PossibleAmericanOrEuropeanValue<string>,): this {
        this.#spanish = value;
        return this;
    }

    //endregion -------------------- Spanish getter & setter methods --------------------
    //region -------------------- Italian getter & setter methods --------------------

    public get italian() {
        return this.#italian;
    }

    public setItalian(value: PossibleLanguageValue<string>,): this {
        this.#italian = value;
        return this;
    }

    //endregion -------------------- Italian getter & setter methods --------------------
    //region -------------------- Dutch getter & setter methods --------------------

    public get dutch() {
        return this.#dutch;
    }

    public setDutch(value: PossibleLanguageValue<string>,): this {
        this.#dutch = value;
        return this;
    }

    //endregion -------------------- Dutch getter & setter methods --------------------
    //region -------------------- Portuguese getter & setter methods --------------------

    public get portuguese() {
        return this.#portuguese;
    }

    public setPortuguese(value: PossibleAmericanOrEuropeanValue<string>,): this {
        this.#portuguese = value;
        return this;
    }

    //endregion -------------------- Portuguese getter & setter methods --------------------
    //region -------------------- Russian getter & setter methods --------------------

    public get russian() {
        return this.#russian;
    }

    public setRussian(value: PossibleLanguageValue<string>,): this {
        this.#russian = value;
        return this;
    }

    //endregion -------------------- Russian getter & setter methods --------------------
    //region -------------------- Japanese getter & setter methods --------------------

    public get japanese() {
        return this.#japanese;
    }

    public setJapanese(value: PossibleLanguageValue<string>,): this {
        this.#japanese = value;
        return this;
    }

    //endregion -------------------- Japanese getter & setter methods --------------------
    //region -------------------- Chinese getter & setter methods --------------------

    public get chinese() {
        return this.#chinese;
    }

    public setChinese(value: |PossibleChineseValue<string>,): this {
        this.#chinese = value;
        return this;
    }

    //endregion -------------------- Chinese getter & setter methods --------------------
    //region -------------------- Korean getter & setter methods --------------------

    public get korean() {
        return this.#korean;
    }

    public setKorean(value: PossibleLanguageValue<string>,): this {
        this.#korean = value;
        return this;
    }

    //endregion -------------------- Korean getter & setter methods --------------------
    //region -------------------- Greek getter & setter methods --------------------

    public get greek() {
        return this.#greek;
    }

    public setGreek(value: PossibleLanguageValue<string>,): this {
        this.#greek = value;
        return this;
    }

    //endregion -------------------- Greek getter & setter methods --------------------

    public get template(): T {
        return this.#template;
    }

    public get game(): | Games | GameArray {
        return this.#game;
    }

    public get isACompleteName(): IsACompleteNameCallback {
        return this.#isACompleteName;
    }

    //endregion -------------------- Getter & setter methods --------------------
    //region -------------------- Methods --------------------

    private __get<S extends string = string, >(language: EveryLanguages, value: | S | null,): | S | null
    private __get<S1 extends string = string, S2 extends string = string, S3 extends string = string, >(language: EveryLanguages, value1: | S1 | null, value2: | S2 | null, value3: | S3 | null,): | S1 | [S2, S3,]
    private __get(language: EveryLanguages, value1: PossibleLanguageValue<string>, value2?: PossibleLanguageValue<string>, value3?: PossibleLanguageValue<string>,) {
        const canBeNullable = (() => {
            //TODO change to the ProjectLanguages.isACompleteLanguage instead
            switch (language) {
                case EveryLanguages.ENGLISH:
                case EveryLanguages.FRENCH:
                    return NameBuilder.#IS_NULLABLE_FOR_COMPLETED_LANGUAGES;
                case EveryLanguages.GREEK:
                    return NameBuilder.#IS_NULLABLE_FOR_OPTIONAL_LANGUAGES;
                default:
                    return !this.isACompleteName(language,);
            }
        })();
        if (value2 === undefined) {
            assert(canBeNullable || value1 != null, `The value cannot be null on the ${language.englishName} attribute.`,);
            return value1;
        }

        const all3ValuesAreNull = value1 == null && value2 == null && value3 == null;
        assert(canBeNullable || !all3ValuesAreNull, `The 3 values received cannot be null on the ${language.englishName} attribute.`,);
        return all3ValuesAreNull ? null : value1 ?? [value2, value3,];
    }


    //endregion -------------------- Methods --------------------

    public build(): Name<string> {
        const {english, french, german, spanish, italian, dutch, portuguese, russian, japanese, chinese, korean, greek,} = this.template;

        this.setEnglish(this.__get(EveryLanguages.ENGLISH, english.simple, english.american, english.european,))
            .setFrench(this.__get(EveryLanguages.FRENCH, french.simple, french.canadian, french.european,))
            .setGerman(this.__get(EveryLanguages.GERMAN, german,))
            .setSpanish(this.__get(EveryLanguages.SPANISH, spanish.simple, spanish.american, spanish.european,))
            .setItalian(this.__get(EveryLanguages.ITALIAN, italian,))
            .setDutch(this.__get(EveryLanguages.DUTCH, dutch,))
            .setPortuguese(this.__get(EveryLanguages.PORTUGUESE, portuguese.simple, portuguese.american, portuguese.european,))
            .setRussian(this.__get(EveryLanguages.RUSSIAN, russian,))
            .setJapanese(this.__get(EveryLanguages.JAPANESE, japanese,))
            .setChinese(this.__get(EveryLanguages.CHINESE, chinese.simple, chinese.simplified, chinese.traditional,))
            .setKorean(this.__get(EveryLanguages.KOREAN, korean,))
            .setGreek(this.__get(EveryLanguages.GREEK, greek,));

        assert(this.english !== undefined, 'The english reference has not been initialised.',);
        assert(this.french !== undefined, 'The french reference has not been initialised.',);
        assert(this.german !== undefined, 'The german reference has not been initialised.',);
        assert(this.spanish !== undefined, 'The spanish reference has not been initialised.',);
        assert(this.italian !== undefined, 'The italian reference has not been initialised.',);
        assert(this.dutch !== undefined, 'The dutch reference has not been initialised.',);
        assert(this.portuguese !== undefined, 'The portuguese reference has not been initialised.',);
        assert(this.russian !== undefined, 'The russian reference has not been initialised.',);
        assert(this.japanese !== undefined, 'The japanese reference has not been initialised.',);
        assert(this.chinese !== undefined, 'The chinese reference has not been initialised.',);
        assert(this.korean !== undefined, 'The korean reference has not been initialised.',);
        assert(this.greek !== undefined, 'The greek reference has not been initialised.',);


        return new NameContainer(
            this.english,
            this.french,
            this.german,
            this.spanish,
            this.italian,
            this.dutch,
            this.portuguese,
            this.russian,
            this.japanese,
            this.chinese,
            this.korean,
            this.greek,
        );
    }

}
