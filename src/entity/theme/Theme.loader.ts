import everyThemes from '../../resources/Themes.csv';

import type {CourseAndWorldTheme, PossibleTheme}                                     from './Themes.types';
import type {Headers as GamesHeaders, PropertiesArray as GamesPropertyArray}         from '../game/Loader.types';
import type {Headers as LanguagesHeaders, PropertiesArray as LanguagesPropertyArray} from '../../lang/Loader.types';
import type {Loader}                                                                 from '../../util/loader/Loader';
import type {SMM2NameTemplate}                                                       from '../lang/SMM2Name.template';
import type {ThemeTemplate}                                                          from './Theme.template';

import {CSVLoader}    from '../../util/loader/CSVLoader';
import {EntityLoader} from '../simple/Entity.loader';
import {ThemeBuilder} from './Theme.builder';

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
    implements Loader<ReadonlyMap<PossibleTheme, CourseAndWorldTheme>> {

    static #instance?: ThemeLoader;
    #map?: Map<PossibleTheme, CourseAndWorldTheme>;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }


    public load(): ReadonlyMap<PossibleTheme, CourseAndWorldTheme> {
        if (this.#map == null) {
            const references = new Map<PossibleTheme, CourseAndWorldTheme>();

            //region -------------------- Builder initialisation --------------------

            ThemeBuilder.entitiesMap = EntityLoader.get.load();

            //endregion -------------------- Builder initialisation --------------------
            //region -------------------- CSV Loader --------------------

            new CSVLoader<PropertiesArray, ThemeBuilder, Headers>(everyThemes, convertedContent => new ThemeBuilder(TemplateCreator.createTemplate(convertedContent)))
                .setDefaultConversion('emptyable string')

                .convertToBoolean(
                    'isInCourseTheme', 'isInWorldTheme',
                    'isInSuperMarioMaker1', 'isInSuperMarioMaker2',
                )

                .onAfterFinalObjectCreated(finalContent => references.set(finalContent.englishReference as PossibleTheme, finalContent.build(),))
                .load();

            //endregion -------------------- CSV Loader --------------------

            console.log('-------------------- theme has been loaded --------------------');// temporary console.log
            console.log(references);// temporary console.log
            console.log('-------------------- theme has been loaded --------------------');// temporary console.log

            this.#map = references;
        }
        return this.#map;
    }

}

//region -------------------- Template related methods & classes --------------------
//TODO Move EMPTY_GREEK & __createNameTemplate() to anew AbstractTemplateCreator

class TemplateCreator {

    static readonly #EMPTY_GREEK = null;

    public static createTemplate(content: PropertiesArray,): ThemeTemplate {
        const languages: LanguagesPropertyArray = [content[4], content[5], content[6], content[7], content[8], content[9], content[10], content[11], content[12], content[13], content[14], content[15], content[16], content[17], content[18], content[19], content[20], content[21], content[22], content[23], content[24],] as LanguagesPropertyArray;

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
            name: this.__createToNameTemplate(languages),
        };
    }

    private static __createToNameTemplate([english, americanEnglish, europeanEnglish, french, canadianFrench, europeanFrench, german, spanish, americanSpanish, europeanSpanish, italian, dutch, portuguese, americanPortuguese, europeanPortuguese, russian, japanese, chinese, traditionalChinese, simplifiedChinese, korean,]: LanguagesPropertyArray,): SMM2NameTemplate {
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
