import type {LanguageContent}                                             from 'core/_template/LanguageContent'
import type {NameTemplate}                                                from 'lang/name/Name.template'
import type {SimpleGameFrom1And2Template, SimpleGameFromAllGamesTemplate} from 'core/game/SimpleGame.template'
import type {GameContentFrom1And2, GameContentFromAllGames}               from 'core/game/Loader.types'

/**
 * A simple generic template declaration with utilities methods to create:
 *  - {@link NameTemplate}
 *  - {@link SimpleGameFrom1And2Template}
 *  - {@link SimpleGameFromAllGamesTemplate}
 */
export abstract class AbstractTemplateCreator<TEMPLATE extends object, CONTENT extends object, > {

    //region -------------------- Fields --------------------

    static readonly #EMPTY_HEBREW = null
    static readonly #EMPTY_POLISH = null
    static readonly #EMPTY_UKRAINIAN = null
    static readonly #EMPTY_GREEK = null

    readonly #content

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    protected constructor(content: CONTENT,) {
        this.#content = content
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    protected get _content() {
        return this.#content
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    //region -------------------- Name template methods --------------------

    /**
     * Create a {@link NameTemplate name template} assuming the content is of a type {@link LanguageContent}
     *
     * @return {NameTemplate} A new template prepared for the {@link NameContainer}
     */
    protected _createNameTemplate(): NameTemplate {
        return AbstractTemplateCreator.__createNameTemplate(this._content as LanguageContent)
    }

    private static __createNameTemplate({
                                             english, americanEnglish, europeanEnglish,
                                             french, canadianFrench, europeanFrench,
                                             german,
                                             spanish, americanSpanish, europeanSpanish,
                                             italian,
                                             dutch,
                                             portuguese, americanPortuguese, europeanPortuguese,
                                             russian,
                                             japanese,
                                             chinese, traditionalChinese, simplifiedChinese,
                                             korean,
                                             hebrew = this.#EMPTY_HEBREW,
                                             polish = this.#EMPTY_POLISH,
                                             ukrainian = this.#EMPTY_UKRAINIAN,
                                             greek = this.#EMPTY_GREEK,
                                         }: LanguageContent,): NameTemplate {
        return {
            english: {simple: english, american: americanEnglish, european: europeanEnglish,},
            french: {simple: french, canadian: canadianFrench, european: europeanFrench,},
            german: german,
            spanish: {simple: spanish, american: americanSpanish, european: europeanSpanish,},
            italian: italian,
            dutch: dutch,
            portuguese: {simple: portuguese, american: americanPortuguese, european: europeanPortuguese,},
            russian: russian,
            chinese: {simple: chinese, traditional: traditionalChinese, simplified: simplifiedChinese,},
            japanese: japanese,
            korean: korean,
            hebrew: hebrew,
            polish: polish,
            ukrainian: ukrainian,
            greek: greek,
        }
    }

    //endregion -------------------- Name template methods --------------------
    //region -------------------- Game template methods --------------------

    /**
     * Create a game template assuming it is a {@link GameContentFrom1And2}
     *
     * It implies that has properties that are {@link boolean}.
     *  1. {@link Games.SUPER_MARIO_MAKER_1 SMM1} & {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS}
     *  1. {@link Games.SUPER_MARIO_MAKER_2 SMM2}
     */
    protected _createGameTemplateFrom1And2() {
        return AbstractTemplateCreator.__createGameTemplateFrom1And2(this._content as GameContentFrom1And2)
    }

    private static __createGameTemplateFrom1And2({isInSuperMarioMaker1And3DS, isInSuperMarioMaker2,}: GameContentFrom1And2,): SimpleGameFrom1And2Template<boolean, boolean> {
        return {'1And3DS': isInSuperMarioMaker1And3DS, 2: isInSuperMarioMaker2,}
    }


    /**
     * Create a game template assuming it is a {@link GameContentFromAllGames}
     *
     * It implied that has properties that are {@link boolean}.
     *  1. {@link Games.SUPER_MARIO_MAKER_1 SMM1}
     *  1. {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS}
     *  1. {@link Games.SUPER_MARIO_MAKER_2 SMM2}
     */
    protected _createGameTemplateFromAllGames() {
        return AbstractTemplateCreator.__createGameTemplateFromAllGames(this._content as GameContentFromAllGames)
    }

    private static __createGameTemplateFromAllGames({isInSuperMarioMaker1, isInSuperMarioMakerFor3DS, isInSuperMarioMaker2,}: GameContentFromAllGames,): SimpleGameFromAllGamesTemplate<boolean, boolean, boolean> {
        return {1: isInSuperMarioMaker1, '3DS': isInSuperMarioMakerFor3DS, 2: isInSuperMarioMaker2,}
    }

    //endregion -------------------- Game template methods --------------------

    //endregion -------------------- Methods --------------------

    /** Create the template */
    public abstract create(): TEMPLATE

}
