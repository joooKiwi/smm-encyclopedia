import resource from 'resources/compiled/Predefined message (SMM2).json'

import type {PredefinedMessage}                                              from 'core/predefinedMessage/PredefinedMessage'
import type {PredefinedMessageTemplate}                                      from 'core/predefinedMessage/PredefinedMessage.template'
import type {PossibleEnglishName}                                            from 'core/predefinedMessage/PredefinedMessages.types'
import type {PropertiesArrayWithOptionalLanguages as LanguagesPropertyArray} from 'lang/Loader.types'
import type {Loader}                                                         from 'util/loader/Loader'

import {AbstractTemplateBuilder}  from 'core/_template/AbstractTemplate.builder'
import {HeaderTypesForConvertor}  from 'core/_util/loader/HeaderTypesForConvertor'
import {PredefinedMessageBuilder} from 'core/predefinedMessage/PredefinedMessage.builder'
import {CSVLoader}                from 'util/loader/CSVLoader'

//region -------------------- CSV array related types --------------------

enum Headers {

    //region -------------------- Languages --------------------

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

    //endregion -------------------- Languages --------------------

}

//region -------------------- Properties --------------------

type PropertiesArray = [
    ...LanguagesPropertyArray,
]

//endregion -------------------- Exclusive properties --------------------

//endregion -------------------- CSV array related types --------------------

/**
 * @singleton
 * @recursiveReference<{@link PredefinedMessages}>
 */
export class PredefinedMessageLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, PredefinedMessage>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: PredefinedMessageLoader

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, PredefinedMessage>

    public load(): ReadonlyMap<PossibleEnglishName, PredefinedMessage> {
        if (this.#map == null) {
            const references = new Map<PossibleEnglishName, PredefinedMessage>()

            //region -------------------- CSV Loader --------------------

            new CSVLoader<PropertiesArray, PredefinedMessage, keyof typeof Headers>(resource, convertedContent => new PredefinedMessageBuilder(new TemplateBuilder(convertedContent)).build())
                .setDefaultConversion('emptyable string')

                .convertTo(HeaderTypesForConvertor.everyPossibleName_predefinedMessage, 'english',)

                .onAfterFinalObjectCreated(finalContent => references.set(finalContent.english as PossibleEnglishName, finalContent,))
                .load()

            //endregion -------------------- CSV Loader --------------------

            console.log('-------------------- "Predefined message" has been loaded --------------------')// temporary console.log
            console.log(references)// temporary console.log
            console.log('-------------------- "Predefined message" has been loaded --------------------')// temporary console.log

            this.#map = references
        }
        return this.#map
    }

}

class TemplateBuilder
    extends AbstractTemplateBuilder<PredefinedMessageTemplate, PropertiesArray, typeof Headers> {

    public constructor(content: PropertiesArray,) {
        super(content)
    }

    protected override get _headersIndexMap() {
        return Headers
    }

    public override build(): PredefinedMessageTemplate {
        return {
            name: this._createNameTemplate(),
        }
    }

}