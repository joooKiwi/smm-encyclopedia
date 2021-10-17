import type {EntityNameTemplate}                                                                from './simple/Entity.template';
import type {HasAReferenceInMarioMaker}                                                         from './entityTypes';
import type {PropertiesArray, PropertiesArrayWithOptionalLanguages}                             from '../lang/Loader.types';
import type {PossibleSMM2NameTemplate, SMM2NameTemplate, SMM2NameTemplateWithOptionalLanguages} from './lang/SMM2Name.template';

/**
 * An abstract template creator with a lot of utilities methods
 * to create other small templates
 *
 * @note the sub classes should be a <b>singleton</b> to optimize their uses.
 */
export abstract class AbstractTemplateCreator<TEMPLATE, ARRAY extends any[], > {

    static readonly #EMPTY_GREEK = null;

    public abstract createTemplate(content: ARRAY,): TEMPLATE;

    //region -------------------- Name template methods --------------------

    protected _createNameTemplate([english, americanEnglish, europeanEnglish, french, canadianFrench, europeanFrench, german, spanish, americanSpanish, europeanSpanish, italian, dutch, portuguese, americanPortuguese, europeanPortuguese, russian, japanese, chinese, traditionalChinese, simplifiedChinese, korean,]: PropertiesArray,): SMM2NameTemplate
    protected _createNameTemplate([english, americanEnglish, europeanEnglish, french, canadianFrench, europeanFrench, german, spanish, americanSpanish, europeanSpanish, italian, dutch, portuguese, americanPortuguese, europeanPortuguese, russian, japanese, chinese, traditionalChinese, simplifiedChinese, korean, greek,]: PropertiesArrayWithOptionalLanguages,): SMM2NameTemplateWithOptionalLanguages
    protected _createNameTemplate([english, americanEnglish, europeanEnglish, french, canadianFrench, europeanFrench, german, spanish, americanSpanish, europeanSpanish, italian, dutch, portuguese, americanPortuguese, europeanPortuguese, russian, japanese, chinese, traditionalChinese, simplifiedChinese, korean, greek = AbstractTemplateCreator.#EMPTY_GREEK,]: | PropertiesArray | PropertiesArrayWithOptionalLanguages,): PossibleSMM2NameTemplate {
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
            greek: greek,
        };
    }

    protected _createEntityNameTemplate([hasAReferenceInMarioMaker, ...languages]: [HasAReferenceInMarioMaker, ...PropertiesArrayWithOptionalLanguages],): EntityNameTemplate {
        const nameTemplateWithOptionalLanguages = this._createNameTemplate(languages);
        return {hasAReferenceInMarioMaker: hasAReferenceInMarioMaker, ...nameTemplateWithOptionalLanguages,};
    }

    //endregion -------------------- Name template methods --------------------

}
