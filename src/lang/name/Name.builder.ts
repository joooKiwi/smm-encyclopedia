import type {AmericanOrEuropeanOriginal, CanadianOrEuropeanOriginal, PossibleAmericanOrEuropeanValue, PossibleChineseValue} from './containers/Language';
import type {Builder}                                                                                                       from '../../util/builder/Builder';
import type {Name}                                                                                                          from './Name';
import type {PossibleNameTemplate}                                                                                          from './Name.template';
import type {PossibleGameReceived}                                                                                          from './Name.builder.types';
import type {PossibleLanguageValue}                                                                                         from '../ClassWithOnlyProjectLanguages';

import {assert}        from '../../util/utilitiesMethods';
import {Games}         from '../../core/game/Games';
import {NameContainer} from './Name.container';

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
    readonly #isACompleteName;

    //endregion -------------------- Attributes --------------------

    public constructor(template: T, game: PossibleGameReceived, isACompleteName: boolean,) {
        this.#template = template;
        this.#game = game === 'all' ? Games.values : game;
        this.#isACompleteName = isACompleteName;
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

    public get game() {
        return this.#game;
    }

    public get isACompleteName(): boolean {
        return this.#isACompleteName;
    }

    //endregion -------------------- Getter & setter methods --------------------
    //region -------------------- Methods --------------------

    private static __interpretTranslation<S extends string = string, >(canBeNullable: false, value: | S | null,): S
    private static __interpretTranslation<S extends string = string, >(canBeNullable: boolean, value: | S | null,): | S | null
    private static __interpretTranslation<S1 extends string = string, S2 extends string = string, S3 extends string = string, >(canBeNullable: false, value1: | S1 | null, value2: | S2 | null, value3: | S3 | null,): | S1 | [S2, S3,]
    private static __interpretTranslation<S1 extends string = string, S2 extends string = string, S3 extends string = string, >(canBeNullable: boolean, value1: | S1 | null, value2: | S2 | null, value3: | S3 | null,): | S1 | [S2, S3,] | null
    private static __interpretTranslation(canBeNullable: boolean, value1: PossibleLanguageValue<string>, value2?: PossibleLanguageValue<string>, value3?: PossibleLanguageValue<string>,): | string | [string, string,] | null {
        if (value2 === undefined) {
            assert(canBeNullable || value1 != null, 'The value cannot be null',);
            return value1;
        }

        const all3ValuesAreNull = value1 == null && value2 == null && value3 == null;
        assert(canBeNullable || !all3ValuesAreNull, 'The values received cannot be null.',);
        return all3ValuesAreNull ? null : value1 ?? [value2!, value3!,];
    }


    //endregion -------------------- Methods --------------------

    public build(): Name<string> {
        const {english, french, german, spanish, italian, dutch, portuguese, russian, japanese, chinese, korean, greek,} = this.template;
        const isANonCompleteGame = !this.isACompleteName;

        //TODO change to the EveryLanguages.isACompleteLanguage instead
        this.setEnglish(NameBuilder.__interpretTranslation(NameBuilder.#IS_NULLABLE_FOR_COMPLETED_LANGUAGES, english.simple, english.american, english.european,))
            .setFrench(NameBuilder.__interpretTranslation(NameBuilder.#IS_NULLABLE_FOR_COMPLETED_LANGUAGES, french.simple, french.canadian, french.european,))
            .setGerman(NameBuilder.__interpretTranslation(isANonCompleteGame, german,))
            .setSpanish(NameBuilder.__interpretTranslation(isANonCompleteGame, spanish.simple, spanish.american, spanish.european,))
            .setItalian(NameBuilder.__interpretTranslation(isANonCompleteGame, italian,))
            .setDutch(NameBuilder.__interpretTranslation(isANonCompleteGame, dutch,))
            .setPortuguese(NameBuilder.__interpretTranslation(isANonCompleteGame, portuguese.simple, portuguese.american, portuguese.european,))
            .setRussian(NameBuilder.__interpretTranslation(isANonCompleteGame, russian,))
            .setJapanese(NameBuilder.__interpretTranslation(isANonCompleteGame, japanese,))
            .setChinese(NameBuilder.__interpretTranslation(isANonCompleteGame, chinese.simple, chinese.simplified, chinese.traditional,))
            .setKorean(NameBuilder.__interpretTranslation(isANonCompleteGame, korean,))
            .setGreek(NameBuilder.__interpretTranslation(NameBuilder.#IS_NULLABLE_FOR_OPTIONAL_LANGUAGES, greek,));

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
