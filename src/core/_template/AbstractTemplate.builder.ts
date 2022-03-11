import type {Builder}                                                               from '../../util/builder/Builder';
import type {EntityNameTemplate}                                                    from '../entity/Entity.template';
import type {HasAReferenceInMarioMaker}                                             from '../entityTypes';
import type {NameTemplate, NameTemplateWithOptionalLanguages, PossibleNameTemplate} from '../../lang/name/Name.template';
import type {PartialGameEnumFrom1And2}                                              from './PartialGameEnumFrom1And2';
import type {PartialGameEnumFromAllGames}                                           from './PartialGameEnumFromAllGames';
import type {PossibleLanguagesDefinition}                                           from './PartialLanguageEnum';
import type {PropertiesArray, PropertiesArrayWithOptionalLanguages}                 from '../../lang/Loader.types';
import type {SimpleGameFrom1And2Template, SimpleGameFromAllGamesTemplate}           from '../game/SimpleGame.template';

/**
 * An abstract template builder with a lot of utilities methods
 * to create other small templates
 */
export abstract class AbstractTemplateBuilder<TEMPLATE, ARRAY extends any[], HEADERS_INDEX_MAP, >
    implements Builder<TEMPLATE> {

    //region -------------------- Attributes --------------------

    static readonly #EMPTY_HEBREW = null;
    static readonly #EMPTY_POLISH = null;
    static readonly #EMPTY_UKRAINIAN = null;
    static readonly #EMPTY_GREEK = null;

    readonly #content;

    //endregion -------------------- Attributes --------------------

    protected constructor(content: ARRAY,) {
        this.#content = content;
    }

    //region -------------------- Getter methods --------------------

    protected get _content(): ARRAY {
        return this.#content;
    }

    /**
     * Get the headers indexes map for the template that will be received
     * and for the content received.
     *
     * @protected
     */
    protected abstract get _headersIndexMap(): HEADERS_INDEX_MAP;

    //endregion -------------------- Getter methods --------------------

    //region -------------------- Headers methods --------------------

    protected _getContent<N extends number, >(header: N,): ARRAY[N] {
        return this.#content[header];
    }

    private static __getContent<N extends number, ARRAY extends any[], >(content: ARRAY, header: N,): ARRAY[N] {
        return content[header];
    }

    // protected getContent<N extends number, >(header: N,): ARRAY[N]
    // protected getContent<S extends keyof HEADERS, N extends number ,>(header: S,): ARRAY[N]
    // protected getContent<N extends number, >(header: |string|number,): ARRAY[N] {
    //     return typeof header == 'string' ? this._content[this._headers[header]]:this._content[header];
    // }

    //endregion -------------------- Headers methods --------------------
    //region -------------------- Name template methods --------------------

    protected _createNameTemplate(): NameTemplate
    protected _createNameTemplate(): NameTemplateWithOptionalLanguages
    protected _createNameTemplate(): PossibleNameTemplate {
        return AbstractTemplateBuilder.__createNameTemplateFromClass(this._headersIndexMap as unknown as PossibleLanguagesDefinition, this._content,);
    }

    private static __createNameTemplateFromClass<ARRAY extends any[], >(headers: PossibleLanguagesDefinition, content: ARRAY,): PossibleNameTemplate {
        const hebrew = 'hebrew' in headers ? content[headers.hebrew] : this.#EMPTY_HEBREW;
        const polish = 'polish' in headers ? content[headers.polish] : this.#EMPTY_POLISH;
        const ukrainian = 'ukrainian' in headers ? content[headers.ukrainian] : this.#EMPTY_UKRAINIAN;
        const greek = 'greek' in headers ? content[headers.greek] : this.#EMPTY_GREEK;

        const languages: PropertiesArrayWithOptionalLanguages = [
            content[headers.english], content[headers.americanEnglish], content[headers.europeanEnglish],
            content[headers.french], content[headers.canadianFrench], content[headers.europeanFrench],
            content[headers.german],
            content[headers.spanish], content[headers.americanSpanish], content[headers.europeanSpanish],
            content[headers.italian],
            content[headers.dutch],
            content[headers.portuguese], content[headers.americanPortuguese], content[headers.europeanPortuguese],
            content[headers.russian],
            content[headers.japanese],
            content[headers.chinese], content[headers.traditionalChinese], content[headers.simplifiedChinese],
            content[headers.korean],
            hebrew,
            polish,
            ukrainian,
            greek,
        ];

        return this.__createNameTemplateFromArray(languages);
    }

    private static __createNameTemplateFromArray([english, americanEnglish, europeanEnglish, french, canadianFrench, europeanFrench, german, spanish, americanSpanish, europeanSpanish, italian, dutch, portuguese, americanPortuguese, europeanPortuguese, russian, japanese, chinese, traditionalChinese, simplifiedChinese, korean,
                                                     hebrew = this.#EMPTY_HEBREW, polish = this.#EMPTY_POLISH, ukrainian = this.#EMPTY_UKRAINIAN, greek = this.#EMPTY_GREEK,]: | PropertiesArray | PropertiesArrayWithOptionalLanguages,): PossibleNameTemplate {
        return {
            english: {
                simple: english,
                american: americanEnglish,
                european: europeanEnglish,
            },
            french: {
                simple: french,
                canadian: canadianFrench,
                european: europeanFrench,
            },
            german: german,
            spanish: {
                simple: spanish,
                american: americanSpanish,
                european: europeanSpanish,
            },
            italian: italian,
            dutch: dutch,
            portuguese: {
                simple: portuguese,
                american: americanPortuguese,
                european: europeanPortuguese,
            },
            russian: russian,
            chinese: {
                simple: chinese,
                traditional: traditionalChinese,
                simplified: simplifiedChinese,
            },
            japanese: japanese,
            korean: korean,
            hebrew: hebrew,
            polish: polish,
            ukrainian: ukrainian,
            greek: greek,
        };
    }

    protected _createEntityNameTemplate(hasAReferenceInMarioMaker: | HasAReferenceInMarioMaker,): EntityNameTemplate {
        const nameTemplateWithOptionalLanguages = this._createNameTemplate();
        return {hasAReferenceInMarioMaker: hasAReferenceInMarioMaker, ...nameTemplateWithOptionalLanguages,};
    }

    //endregion -------------------- Name template methods --------------------
    //region -------------------- Game methods --------------------

    /**
     * Create a game template (without any validations).
     * It implies that has
     * <ol>
     *     <li>{@link Games.SUPER_MARIO_MAKER_1 SMM1} & {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS}</li>
     *     <li>{@link Games.SUPER_MARIO_MAKER_2 SMM2}</li>
     * </ol>
     * properties that returns a {@link boolean}.
     *
     * @see PartialGameEnumFrom1And2
     */
    protected _createGameTemplateFrom1And2(): SimpleGameFrom1And2Template<boolean, boolean> {
        const headers = this._headersIndexMap as unknown as PartialGameEnumFrom1And2;
        return {
            '1And3DS': AbstractTemplateBuilder.__getContent(this._content, headers.isInSuperMarioMaker1And3DS),
            2: AbstractTemplateBuilder.__getContent(this._content, headers.isInSuperMarioMaker2),
        };
    }

    /**
     * Create a game template (without any validations).
     * It implies that has
     * <ol>
     *     <li>{@link Games.SUPER_MARIO_MAKER_1 SMM1}</li>
     *     <li>{@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS}</li>
     *     <li>{@link Games.SUPER_MARIO_MAKER_2 SMM2}</li>
     * </ol>
     * properties that returns a {@link boolean}.
     *
     * @see PartialGameEnumFromAllGames
     */
    protected _createGameTemplateFromAllGames(): SimpleGameFromAllGamesTemplate<boolean, boolean, boolean> {
        const headers = this._headersIndexMap as unknown as PartialGameEnumFromAllGames;
        return {
            1: AbstractTemplateBuilder.__getContent(this._content, headers.isInSuperMarioMaker1),
            '3DS': AbstractTemplateBuilder.__getContent(this._content, headers.isInSuperMarioMakerFor3DS),
            2: AbstractTemplateBuilder.__getContent(this._content, headers.isInSuperMarioMaker2),
        };
    }

    //endregion -------------------- Game methods --------------------

    public abstract build(): TEMPLATE;

}
