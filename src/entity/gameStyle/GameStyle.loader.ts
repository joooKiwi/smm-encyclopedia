import everyGameStyles from '../../resources/Game styles.csv';

import type {Loader}                                    from '../../util/loader/Loader';
import type {GameStyle}                                 from './GameStyle';
import type {GameStyleTemplate}                         from './GameStyle.template';
import type {PropertiesArray as GamesPropertyArray}     from '../game/Loader.types';
import type {PropertiesArray as LanguagesPropertyArray} from '../../lang/Loader.types';
import type {PossibleGameStyleName}                     from './GameStyles.types';

import {AbstractTemplateBuilder} from '../_template/AbstractTemplate.builder';
import {CSVLoader}               from '../../util/loader/CSVLoader';
import {EntityLoader}            from '../simple/Entity.loader';
import {GameStyleBuilder}        from './GameStyle.builder';

//region -------------------- CSV array related types --------------------

enum Headers {

    //region -------------------- Games --------------------

    isInSuperMarioMaker1,
    isInSuperMarioMaker2,

    //endregion -------------------- Games --------------------
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
    greek,

    //endregion -------------------- Languages --------------------

}

//region -------------------- Properties --------------------

type PropertiesArray = [
    ...GamesPropertyArray,
    ...LanguagesPropertyArray,
];

//endregion -------------------- Properties --------------------

//endregion -------------------- CSV array related types --------------------

/**
 * @singleton
 * @recursiveReferenceVia<{@link GameStyleBuilder}, {@link GameStyles}>
 */
export class GameStyleLoader
    implements Loader<ReadonlyMap<PossibleGameStyleName, GameStyle>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: GameStyleLoader;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleGameStyleName, GameStyle>;

    public load(): ReadonlyMap<PossibleGameStyleName, GameStyle> {
        if (this.#map == null) {
            const references = new Map<PossibleGameStyleName, GameStyle>();

            //region -------------------- Builder initialisation --------------------

            GameStyleBuilder.entitiesMap = EntityLoader.get.load();

            //endregion -------------------- Builder initialisation --------------------
            //region -------------------- CSV Loader --------------------

            new CSVLoader<PropertiesArray, GameStyle, keyof typeof Headers>(everyGameStyles, convertedContent => new GameStyleBuilder(new TemplateBuilder(convertedContent)).build())
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

class TemplateBuilder
    extends AbstractTemplateBuilder<GameStyleTemplate, PropertiesArray, typeof Headers> {

    public constructor(content: PropertiesArray,) {
        super(content);
    }

    protected get _headersIndexMap() {
        return Headers;
    }

    public build(): GameStyleTemplate {
        return {
            isIn: {
                game: this._createGameTemplate(),
            },
            name: this._createNameTemplate(),
        };
    }

}
