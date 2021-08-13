import everyThemes from '../../resources/Themes.csv';

import type {CourseTheme}                                                            from './CourseTheme';
import type {Headers as GamesHeaders, PropertiesArray as GamesPropertyArray}         from '../game/Loader.types';
import type {Headers as LanguagesHeaders, PropertiesArray as LanguagesPropertyArray} from '../../lang/Loader.types';
import type {Loader}                                                                 from '../../util/loader/Loader';
import type {ThemeTemplate}                                                          from './ThemeTemplate';
import type {WorldTheme}                                                             from './WorldTheme';

import {CallbackCaller} from '../../util/CallbackCaller';
import {CSVLoader}      from '../../util/loader/CSVLoader';
import {EntityLoader}   from '../simple/EntityLoader';
import {ThemeBuilder}   from './ThemeBuilder';

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
    implements Loader<ReadonlyMap<string, readonly [CourseTheme, WorldTheme]>> {

    static readonly #instance = new ThemeLoader();

    //region ---------- external object references ----------

    readonly #everyThemeMap: CallbackCaller<Map<string, readonly [CourseTheme, WorldTheme]>>;

    //endregion ---------- external object references ----------

    private constructor() {
        this.#everyThemeMap = new CallbackCaller(() => {
            const finalReferences: Map<string, readonly [CourseTheme, WorldTheme]> = new Map();

            ThemeBuilder.entitiesMap = EntityLoader.get.load();

            const csvLoader = new CSVLoader<PropertiesArray, ThemeBuilder, Headers>(everyThemes, convertedContent => new ThemeBuilder(TemplateCreator.createTemplate(convertedContent)))
                .convertToBoolean(
                    'isInCourseTheme', 'isInWorldTheme',
                    'isInSuperMarioMaker1', 'isInSuperMarioMaker2',
                )
                .convertToEmptyableString(
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

            console.log('-------------------- theme has been loaded --------------------');// temporary console.log
            console.log(csvLoader.content);// temporary console.log
            return finalReferences;
        });
    }

    public static get get() {
        return this.#instance;
    }


    public load() {
        return this.#everyThemeMap.get;
    }

}


//region -------------------- Template related methods & classes --------------------

class TemplateCreator {

    public static createTemplate(content: PropertiesArray): ThemeTemplate {
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
                portuguese: {
                    simple: content[16],
                    american: content[17],
                    european: content[18],
                },
                russian: content[19],
                japanese: content[20],
                chinese: {
                    simple: content[21],
                    simplified: content[22],
                    traditional: content[23],
                },
                korean: content[24],
            }
        };
    }

}

//endregion -------------------- Template related methods & classes --------------------
