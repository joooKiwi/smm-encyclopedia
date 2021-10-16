import everyGameStyles from '../../resources/Game styles.csv';

import type {Loader}                                                                 from '../../util/loader/Loader';
import type {GameStyle}                                                              from './GameStyle';
import type {GameStyleTemplate}                                                      from './GameStyle.template';
import type {Headers as GamesHeaders, PropertiesArray as GamesPropertyArray}         from '../game/Loader.types';
import type {Headers as LanguagesHeaders, PropertiesArray as LanguagesPropertyArray} from '../../lang/Loader.types';

import {CSVLoader}             from '../../util/loader/CSVLoader';
import {EntityLoader}          from '../simple/Entity.loader';
import {GameStyleBuilder}      from './GameStyle.builder';
import {PossibleGameStyleName} from './GameStyles.types';

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
    implements Loader<ReadonlyMap<PossibleGameStyleName, GameStyle>> {

    static #instance?: GameStyleLoader;
    #map?: Map<PossibleGameStyleName, GameStyle>;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }


    public load(): ReadonlyMap<PossibleGameStyleName, GameStyle> {
        if (this.#map == null) {
            const references = new Map<PossibleGameStyleName, GameStyle>();

            //region -------------------- Builder initialisation --------------------

            GameStyleBuilder.entitiesMap = EntityLoader.get.load();

            //endregion -------------------- Builder initialisation --------------------
            //region -------------------- CSV Loader --------------------

            new CSVLoader<PropertiesArray, GameStyle, Headers>(everyGameStyles, convertedContent => new GameStyleBuilder(TemplateCreator.createTemplate(convertedContent)).build())
                .setDefaultConversion('emptyable string')

                .convertToBoolean('isInSuperMarioMaker1', 'isInSuperMarioMaker2',)

                .onAfterFinalObjectCreated(finalContent => references.set(finalContent.english as PossibleGameStyleName, finalContent,))
                .load();

            //endregion -------------------- CSV Loader --------------------

            console.log('-------------------- "game style" has been loaded --------------------');// temporary console.log
            console.log(references);// temporary console.log
            console.log('-------------------- "game style" has been loaded --------------------');// temporary console.log

            this.#map = references;
        }
        return this.#map;
    }

}

//region -------------------- Template related methods & classes --------------------

class TemplateCreator {

    static readonly #EMPTY_PORTUGUESE = {simple: null, european: null, american: null,};
    static readonly #EMPTY_GREEK = null;

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
                greek: this.#EMPTY_GREEK,
            }
        };
    }

}

//endregion -------------------- Template related methods & classes --------------------
