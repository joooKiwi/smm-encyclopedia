import resource from '../../resources/Game reference.csv';

import type {GameReference}                             from './GameReference';
import type {GameReferenceTemplate}                     from './GameReference.template';
import type {Loader}                                    from '../../util/loader/Loader';
import type {PossibleAcronym, PossibleEnglishName}      from './GameReferences.types';
import type {PropertiesArray as LanguagesPropertyArray} from '../../lang/Loader.types';

import {AbstractTemplateBuilder} from '../_template/AbstractTemplate.builder';
import {CSVLoader}               from '../../util/loader/CSVLoader';
import {HeaderTypesForConvertor} from '../_util/loader/HeaderTypesForConvertor';
import {GameReferenceBuilder}    from './GameReference.builder';

//region -------------------- CSV array related types --------------------

enum Headers {

    acronym,
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

type ExclusivePropertiesArray = [
    acronym: PossibleAcronym,
];
type PropertiesArray = [
    ...ExclusivePropertiesArray,
    ...LanguagesPropertyArray,
];

//endregion -------------------- CSV array related types --------------------

/**
 * @singleton
 * @recursiveReference<{@link GameReferences}>
 */
export class GameReferenceLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, GameReference>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: GameReferenceLoader;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------
    #map?: Map<PossibleEnglishName, GameReference>;

    public load(): ReadonlyMap<PossibleEnglishName, GameReference> {
        if (this.#map == null) {
            const references = new Map<PossibleEnglishName, GameReference>();


            //region -------------------- CSV Loader --------------------

            new CSVLoader<PropertiesArray, GameReference, keyof typeof Headers>(resource, convertedContent => new GameReferenceBuilder(new TemplateBuilder(convertedContent)).build())
                .setDefaultConversion('emptyable string')

                .convertTo(HeaderTypesForConvertor.everyPossibleGameReferenceAcronym, 'acronym',)
                .convertTo(HeaderTypesForConvertor.everyPossibleGameReferenceEnglishName, 'english',)

                .onAfterFinalObjectCreated(finalContent => references.set(finalContent.english as PossibleEnglishName, finalContent,))
                .load();

            //endregion -------------------- CSV Loader --------------------

            console.log('-------------------- "game references" has been loaded --------------------');// temporary console.log
            console.log(references);// temporary console.log
            console.log('-------------------- "game references" has been loaded --------------------');// temporary console.log

            this.#map = references;
        }
        return this.#map;
    }
}

class TemplateBuilder
    extends AbstractTemplateBuilder<GameReferenceTemplate, PropertiesArray, typeof Headers> {


    public constructor(content: PropertiesArray) {
        super(content);
    }

    protected get _headersIndexMap(): typeof Headers {
        return Headers;
    }

    public build(): GameReferenceTemplate {
        return {
            acronym: this._getContent(this._headersIndexMap.acronym),
            name: this._createNameTemplate(),
        };
    }
}