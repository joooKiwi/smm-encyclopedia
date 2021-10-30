import type {Builder}                  from '../../util/Builder';
import type {PossibleSMM2NameTemplate} from './SMM2Name.template';
import type {Name}                     from '../../lang/name/Name';
import type {PossibleGameReceived}     from './NameBuilder.types';

import {NameBuilder as OriginalNameBuilder} from '../../lang/name/NameBuilder';
import {Games}                              from '../game/Games';

export class NameBuilder
    implements Builder<Name> {

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

    readonly #template;
    readonly #game;
    readonly #isACompleteName;

    //endregion -------------------- Attributes --------------------

    public constructor(template: PossibleSMM2NameTemplate, game: PossibleGameReceived, isACompleteName: boolean,) {
        this.#template = template;
        this.#game = game === 'all' ? Games.values : game;
        this.#isACompleteName = isACompleteName;
    }

    public get template() {
        return this.#template;
    }

    public get game() {
        return this.#game;
    }

    public get isACompleteName() {
        return this.#isACompleteName;
    }

    private static __interpretTranslation<S extends string = string, >(canBeNullable: false, value: | S | null,): S
    private static __interpretTranslation<S extends string = string, >(canBeNullable: boolean, value: | S | null,): | S | null
    private static __interpretTranslation<S1 extends string = string, S2 extends string = string, S3 extends string = string, >(canBeNullable: false, value1: | S1 | null, value2: | S2 | null, value3: | S3 | null,): | S1 | [S2, S3,]
    private static __interpretTranslation<S1 extends string = string, S2 extends string = string, S3 extends string = string, >(canBeNullable: boolean, value1: | S1 | null, value2: | S2 | null, value3: | S3 | null,): | S1 | [S2, S3,] | null
    private static __interpretTranslation(canBeNullable: boolean, value1: | string | null, value2?: | string | null, value3?: | string | null,): | string | [string, string,] | null {
        if (value2 === undefined) {
            if (!canBeNullable && value1 == null)
                throw new ReferenceError('The value cannot be null');
            return value1;
        }

        const all3ValuesAreNull = value1 == null && value2 == null && value3 == null;
        if (!canBeNullable && all3ValuesAreNull)
            throw new ReferenceError('The values received cannot be null.');
        return all3ValuesAreNull ? null : value1 ?? [value2!, value3!,];
    }

    public build() {
        const {english, french, german, spanish, italian, dutch, portuguese, russian, japanese, chinese, korean, greek,} = this.template;
        const isANonCompleteGame = !this.isACompleteName;

        //TODO change to the EveryLanguages.isACompleteLanguage instead
        return new OriginalNameBuilder()
            .setEnglish(NameBuilder.__interpretTranslation(NameBuilder.#IS_NULLABLE_FOR_COMPLETED_LANGUAGES, english.simple, english.american, english.european,))
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
            .setGreek(NameBuilder.__interpretTranslation(NameBuilder.#IS_NULLABLE_FOR_OPTIONAL_LANGUAGES, greek,))
            .build();
    }

}
