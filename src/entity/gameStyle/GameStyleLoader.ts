import everyGameStyles from '../../resources/Game styles.csv';

import type {Loader}            from '../../util/Loader';
import type {GameStyle}         from './GameStyle';
import type {GameStyleTemplate} from './GameStyleTemplate';

import {CallbackCaller}   from '../../util/CallbackCaller';
import {EntityLoader}     from '../simple/EntityLoader';
import {CSVLoader}        from '../../util/loader/CSVLoader';
import {GameStyleBuilder} from './GameStyleBuilder';

//region -------------------- CSV array related types --------------------

type GameStylePropertiesArray = [

    isInSuperMarioMaker1: boolean,
    isInSuperMarioMaker2: boolean,

    //region ---------- Language properties ----------

    english: | string | null,
    americanEnglish: | string | null,
    europeanEnglish: | string | null,

    french: | string | null,
    canadianFrench: | string | null,
    europeanFrench: | string | null,

    german: | string | null,

    spanish: | string | null,
    americanSpanish: | string | null,
    europeanSpanish: | string | null,

    italian: | string | null,

    dutch: | string | null,

    portuguese: | string | null,
    americanPortuguese: | string | null,
    europeanPortuguese: | string | null,

    russian: | string | null,

    japanese: | string | null,

    chinese: | string | null,
    simplifiedChinese: | string | null,
    tradionalChinese: | string | null,

    korean: | string | null,
    //endregion ---------- Language properties ----------
];

//endregion -------------------- CSV array related types --------------------

/**
 * @singleton
 */
export class GameStyleLoader
    implements Loader<ReadonlyMap<string, GameStyle>> {

    static readonly #instance = new GameStyleLoader();
    //region -------------------- Attributes --------------------

    readonly #everyGameStyleMap: CallbackCaller<Map<string, GameStyle>>;

    //endregion -------------------- Attributes --------------------

    private constructor() {
        this.#everyGameStyleMap = new CallbackCaller(() => {
            const finalReferences: Map<string, GameStyle> = new Map();
            GameStyleBuilder.entitiesMap = EntityLoader.get.load();

            const csvLoader = new CSVLoader<GameStylePropertiesArray, GameStyleBuilder>(everyGameStyles, convertedContent => new GameStyleBuilder(TemplateCreator.createTemplate(convertedContent)))
                .convertToBoolean(
                    'isInSuperMarioMaker1', 'isInSuperMarioMaker2',
                ).convertToEmptyableString(
                    'english', 'americanEnglish', 'europeanEnglish',
                    'french', 'canadianFrench', 'europeanFrench',
                    'german',
                    'spanish', 'americanSpanish', 'europeanSpanish',
                    'dutch', 'italian',
                    'portuguese', 'americanPortuguese', 'europeanPortuguese',
                    'russian', 'japanese',
                    'chinese', 'simplifiedChinese', 'traditionalChinese',
                    'korean',
                )
                .onAfterFinalObjectCreated(finalContent => finalReferences.set(finalContent.englishReference, finalContent.build(),))
                .load();

            console.log('-------------------- game style has been loaded --------------------');// temporary console.log
            console.log(csvLoader.content);// temporary console.log
            return finalReferences;
        });
    }

    public static get get() {
        return this.#instance;
    }


    public load() {
        return this.#everyGameStyleMap.get;
    }

}

//region -------------------- Template related methods & classes --------------------

class TemplateCreator {

    public static createTemplate(content: GameStylePropertiesArray): GameStyleTemplate {
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
                portuguese: {
                    simple: content[14],
                    american: content[15],
                    european: content[16],
                },
                russian: content[17],
                japanese: content[18],
                chinese: {
                    simple: content[19],
                    simplified: content[20],
                    traditional: content[21],
                },
                korean: content[22],
            }
        };
    }

}

//endregion -------------------- Template related methods & classes --------------------
