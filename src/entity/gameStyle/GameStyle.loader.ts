import everyGameStyles from '../../resources/Game styles.csv';

import type {Loader}                                                                 from '../../util/loader/Loader';
import type {GameStyle}                                                              from './GameStyle';
import type {GameStyleTemplate}                                                      from './GameStyle.template';
import type {Headers as GamesHeaders, PropertiesArray as GamesPropertyArray}         from '../game/Loader.types';
import type {Headers as LanguagesHeaders, PropertiesArray as LanguagesPropertyArray} from '../../lang/Loader.types';
import type {PossibleGameStyleName}                                                  from './GameStyles.types';
import type {SMM2NameTemplate}                                                       from '../lang/SMM2Name.template';

import {CSVLoader}        from '../../util/loader/CSVLoader';
import {EntityLoader}     from '../simple/Entity.loader';
import {GameStyleBuilder} from './GameStyle.builder';

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
//TODO Move EMPTY_GREEK & __createNameTemplate() to anew AbstractTemplateCreator

class TemplateCreator {

    static readonly #EMPTY_GREEK = null;

    public static createTemplate(content: PropertiesArray,): GameStyleTemplate {
        const languages: LanguagesPropertyArray = [content[2], content[3], content[4], content[5], content[6], content[7], content[8], content[9], content[10], content[11], content[12], content[13], content[14], content[15], content[16], content[17], content[18], content[19], content[20], content[21], content[22],] as LanguagesPropertyArray;

        return {
            isIn: {
                game: {
                    '1': content[0],
                    '2': content[1],
                },
            },
            name: this.__createNameTemplate(languages),
        };
    }

    private static __createNameTemplate([english, americanEnglish, europeanEnglish, french, canadianFrench, europeanFrench, german, spanish, americanSpanish, europeanSpanish, italian, dutch, portuguese, americanPortuguese, europeanPortuguese, russian, japanese, chinese, traditionalChinese, simplifiedChinese, korean,]: LanguagesPropertyArray,): SMM2NameTemplate {
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
            greek: this.#EMPTY_GREEK,
        };
    }

}

//endregion -------------------- Template related methods & classes --------------------
