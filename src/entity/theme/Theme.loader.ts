import everyThemes from '../../resources/Themes.csv';

import type {CourseAndWorldTheme, PossibleTheme}                                     from './Themes.types';
import type {Headers as GamesHeaders, PropertiesArray as GamesPropertyArray}         from '../game/Loader.types';
import type {Headers as LanguagesHeaders, PropertiesArray as LanguagesPropertyArray} from '../../lang/Loader.types';
import type {Loader}                                                                 from '../../util/loader/Loader';
import type {ThemeTemplate}                                                          from './Theme.template';

import {AbstractTemplateCreator} from '../AbstractTemplateCreator';
import {CSVLoader}               from '../../util/loader/CSVLoader';
import {EntityLoader}            from '../simple/Entity.loader';
import {ThemeBuilder}            from './Theme.builder';

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

    //region -------------------- Singleton usage --------------------

    static #instance?: ThemeLoader;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleTheme, CourseAndWorldTheme>;

    public load(): ReadonlyMap<PossibleTheme, CourseAndWorldTheme> {
        if (this.#map == null) {
            const references = new Map<PossibleTheme, CourseAndWorldTheme>();

            //region -------------------- Builder initialisation --------------------

            ThemeBuilder.entitiesMap = EntityLoader.get.load();

            //endregion -------------------- Builder initialisation --------------------
            //region -------------------- CSV Loader --------------------

            new CSVLoader<PropertiesArray, ThemeBuilder, Headers>(everyThemes, convertedContent => new ThemeBuilder(TemplateCreator.get.createTemplate(convertedContent)))
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

/**
 * @singleton
 */
class TemplateCreator
    extends AbstractTemplateCreator<ThemeTemplate, PropertiesArray> {

    //region -------------------- Singleton usage --------------------

    static #instance?: TemplateCreator;

    private constructor() {
        super();
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    public createTemplate(content: PropertiesArray,): ThemeTemplate {
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
            name: this._createNameTemplate(languages),
        };
    }

}

//endregion -------------------- Template related methods & classes --------------------
