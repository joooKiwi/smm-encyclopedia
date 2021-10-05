import everyGameStyles from '../../resources/Game styles.csv';

import type {Loader}                                                                 from '../../util/loader/Loader';
import type {GameStyle}                                                              from './GameStyle';
import type {GameStyleTemplate}                                                      from './GameStyle.template';
import type {Headers as GamesHeaders, PropertiesArray as GamesPropertyArray}         from '../game/Loader.types';
import type {Headers as LanguagesHeaders, PropertiesArray as LanguagesPropertyArray} from '../../lang/Loader.types';

import {CSVLoader}        from '../../util/loader/CSVLoader';
import {EntityLoader}     from '../simple/EntityLoader';
import {GameStyleBuilder} from './GameStyleBuilder';

//region -------------------- CSV array related types --------------------

type Headers =
    | GamesHeaders
    | LanguagesHeaders;
type PropertiesArray = [
    ...GamesPropertyArray,
    ...LanguagesPropertyArray,
];

//endregion -------------------- CSV array related types --------------------

/**
 * @singleton
 * @recursiveReferenceVia<{@link GameStyleBuilder}, {@link GameStyles}>
 */
export class GameStyleLoader
    implements Loader<ReadonlyMap<string, GameStyle>> {

    static readonly #instance = new GameStyleLoader();
    //region -------------------- Attributes --------------------

    #everyGameStyleMap?: Map<string, GameStyle>;

    //endregion -------------------- Attributes --------------------

    private constructor() {
    }

    public static get get() {
        return this.#instance;
    }


    public load() {
        if (this.#everyGameStyleMap == null) {
            const references: Map<string, GameStyle> = new Map();

            //region -------------------- Builder initialisation --------------------

            GameStyleBuilder.entitiesMap = EntityLoader.get.load();

            //endregion -------------------- Builder initialisation --------------------
            //region -------------------- CSV Loader --------------------

            const csvLoader = new CSVLoader<PropertiesArray, GameStyleBuilder, Headers>(everyGameStyles, convertedContent => new GameStyleBuilder(TemplateCreator.createTemplate(convertedContent)))
                .setDefaultConversion('emptyable string')
                .convertToBoolean('isInSuperMarioMaker1', 'isInSuperMarioMaker2',)
                .onAfterFinalObjectCreated(finalContent => references.set(finalContent.englishReference, finalContent.build(),))
                .load();

            //endregion -------------------- CSV Loader --------------------

            console.log('-------------------- game style has been loaded --------------------');// temporary console.log
            console.log(csvLoader.content);// temporary console.log

            this.#everyGameStyleMap = references;
        }
        return this.#everyGameStyleMap;
    }

}

//region -------------------- Template related methods & classes --------------------

class TemplateCreator {

    static readonly #EMPTY_PORTUGUESE = {simple: null, european: null, american: null,};

    public static createTemplate(content: PropertiesArray,): GameStyleTemplate {
        return {
            isIn: {
                game: {
                    '1': content[0],
                    '2': content[1],
                },
            },
            name: {
                english: {
                    simple: content[2],
                    american: content[3],
                    european: content[4],
                },
                french: {
                    simple: content[5],
                    canadian: content[6],
                    european: content[7],
                },
                german: content[8],
                spanish: {
                    simple: content[9],
                    american: content[10],
                    european: content[11],
                },
                italian: content[12],
                dutch: content[13],
                portuguese: this.#EMPTY_PORTUGUESE,
                russian: content[14],
                japanese: content[15],
                chinese: {
                    simple: content[16],
                    traditional: content[17],
                    simplified: content[18],
                },
                korean: content[19],
            }
        };
    }

}

//endregion -------------------- Template related methods & classes --------------------
