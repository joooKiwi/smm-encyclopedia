import resource from '../../resources/compiled/Instrument.json';

import type {Instrument}                                from './Instrument';
import type {InstrumentTemplate}                        from './Instrument.template';
import type {Loader}                                    from '../../util/loader/Loader';
import type {PossibleEnglishName}                       from './Instruments.types';
import type {PropertiesArray as LanguagesPropertyArray} from '../../lang/Loader.types';

import {AbstractTemplateBuilder} from '../_template/AbstractTemplate.builder';
import {CSVLoader}               from '../../util/loader/CSVLoader';
import {HeaderTypesForConvertor} from '../_util/loader/HeaderTypesForConvertor';
import {InstrumentBuilder}       from './Instrument.builder';

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

type PropertiesArray = [
    ...LanguagesPropertyArray,
];

//endregion -------------------- CSV array related types --------------------

/**
 * @singleton
 * @recursiveReference<{@link Instruments}>
 */
export class InstrumentLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, Instrument>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: InstrumentLoader;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, Instrument>;

    public load(): ReadonlyMap<PossibleEnglishName, Instrument> {
        if (this.#map == null) {
            const references = new Map<PossibleEnglishName, Instrument>();


            //region -------------------- CSV Loader --------------------

            new CSVLoader<PropertiesArray, Instrument, keyof typeof Headers>(resource, convertedContent => new InstrumentBuilder(new TemplateBuilder(convertedContent)).build())
                .setDefaultConversion('emptyable string')

                .convertTo(HeaderTypesForConvertor.everyPossibleName_instrument, 'english',)

                .onAfterFinalObjectCreated(finalContent => references.set(finalContent.english as PossibleEnglishName, finalContent,))
                .load();

            //endregion -------------------- CSV Loader --------------------

            console.log('-------------------- "instrument" has been loaded --------------------');// temporary console.log
            console.log(references);// temporary console.log
            console.log('-------------------- "instrument" has been loaded --------------------');// temporary console.log

            this.#map = references;
        }
        return this.#map;
    }

}

class TemplateBuilder
    extends AbstractTemplateBuilder<InstrumentTemplate, PropertiesArray, typeof Headers> {

    public constructor(content: PropertiesArray,) {
        super(content);
    }

    protected override get _headersIndexMap(): typeof Headers {
        return Headers;
    }

    public override build(): InstrumentTemplate {
        return {
            name: this._createNameTemplate(),
        };
    }

}
