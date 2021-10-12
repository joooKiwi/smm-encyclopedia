import everyThemes from '../../resources/Themes.csv';

import type {CourseAndWorldTheme}                                                    from './Themes.types';
import type {Headers as GamesHeaders, PropertiesArray as GamesPropertyArray}         from '../game/Loader.types';
import type {Headers as LanguagesHeaders, PropertiesArray as LanguagesPropertyArray} from '../../lang/Loader.types';
import type {Loader}                                                                 from '../../util/loader/Loader';
import type {ThemeTemplate}                                                          from './Theme.template';

import {CSVLoader}    from '../../util/loader/CSVLoader';
import {EntityLoader} from '../simple/EntityLoader';
import {ThemeBuilder} from './ThemeBuilder';

//region -------------------- CSV array related types --------------------

type Headers =
    `isIn${| 'Course' | 'World'}Theme`
    | GamesHeaders
    | LanguagesHeaders;
type ExclusivePropertiesArray = [
    isInCourseTheme: boolean,
    isInWorldTheme: boolean,
];
type PropertiesArray = [
    ...ExclusivePropertiesArray,
    ...GamesPropertyArray,
    ...LanguagesPropertyArray,
];

//endregion -------------------- CSV array related types --------------------

/**
 * @singleton
 * @recursiveReferenceVia<{@link ThemeBuilder}, {@link Themes}>
 */
export class ThemeLoader
    implements Loader<ReadonlyMap<string, CourseAndWorldTheme>> {

    static #instance?: ThemeLoader;
    #map?: Map<string, CourseAndWorldTheme>;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }


    public load() {
        if (this.#map == null) {
            const references: Map<string, CourseAndWorldTheme> = new Map();

            //region -------------------- Builder initialisation --------------------

            ThemeBuilder.entitiesMap = EntityLoader.get.load();

            //endregion -------------------- Builder initialisation --------------------
            //region -------------------- CSV Loader --------------------

            const csvLoader = new CSVLoader<PropertiesArray, ThemeBuilder, Headers>(everyThemes, convertedContent => new ThemeBuilder(TemplateCreator.createTemplate(convertedContent)))
                .setDefaultConversion('emptyable string')

                .convertToBoolean(
                    'isInCourseTheme', 'isInWorldTheme',
                    'isInSuperMarioMaker1', 'isInSuperMarioMaker2',
                )
                .onAfterFinalObjectCreated(finalContent => references.set(finalContent.englishReference, finalContent.build(),))
                .load();

            //endregion -------------------- CSV Loader --------------------

            console.log('-------------------- theme has been loaded --------------------');// temporary console.log
            console.log(csvLoader.content);// temporary console.log

            this.#map = references;
        }
        return this.#map;
    }

}

//region -------------------- Template related methods & classes --------------------

class TemplateCreator {

    static readonly #EMPTY_PORTUGUESE = {simple: null, european: null, american: null,};
    static readonly #EMPTY_GREEK = null;

    public static createTemplate(content: PropertiesArray,): ThemeTemplate {
        return {
            isIn: {
                game: {
                    1: content[2],
                    2: content[3],
                },
                theme: {
                    course: content[0],
                    world: content[1],
                },
            },
            name: {
                english: {
                    simple: content[4],
                    american: content[5],
                    european: content[6],
                },
                french: {
                    simple: content[7],
                    canadian: content[8],
                    european: content[9],
                },
                german: content[10],
                spanish: {
                    simple: content[11],
                    american: content[12],
                    european: content[13],
                },
                italian: content[14],
                dutch: content[15],
                portuguese: this.#EMPTY_PORTUGUESE,
                russian: content[16],
                japanese: content[17],
                chinese: {
                    simple: content[18],
                    traditional: content[19],
                    simplified: content[20],
                },
                korean: content[21],
                greek: this.#EMPTY_GREEK,
            }
        };
    }

}

//endregion -------------------- Template related methods & classes --------------------
