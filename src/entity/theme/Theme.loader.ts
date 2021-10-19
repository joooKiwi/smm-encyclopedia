import everyThemes from '../../resources/Themes.csv';

import type {CourseAndWorldTheme, PossibleTheme}        from './Themes.types';
import type {PropertiesArray as GamesPropertyArray}     from '../game/Loader.types';
import type {PropertiesArray as LanguagesPropertyArray} from '../../lang/Loader.types';
import type {Loader}                                    from '../../util/loader/Loader';
import type {ThemeTemplate}                             from './Theme.template';

import {AbstractTemplateBuilder} from '../_template/AbstractTemplate.builder';
import {CSVLoader}               from '../../util/loader/CSVLoader';
import {EntityLoader}            from '../simple/Entity.loader';
import {ThemeBuilder}            from './Theme.builder';

//region -------------------- CSV array related types --------------------

enum Headers {

    isInCourseTheme,
    isInWorldTheme,

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

type ExclusivePropertiesArray = [
    isInCourseTheme: boolean,
    isInWorldTheme: boolean,
];
type PropertiesArray = [
    ...ExclusivePropertiesArray,
    ...GamesPropertyArray,
    ...LanguagesPropertyArray,
];

//endregion -------------------- Properties --------------------

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

            new CSVLoader<PropertiesArray, ThemeBuilder, keyof typeof Headers>(everyThemes, convertedContent => new ThemeBuilder(new TemplateBuilder(convertedContent)))
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

class TemplateBuilder
    extends AbstractTemplateBuilder<ThemeTemplate, PropertiesArray, typeof Headers> {

    public constructor(content: PropertiesArray,) {
        super(content);
    }

    protected get _headersIndexMap() {
        return Headers;
    }

    public build(): ThemeTemplate {
        return {
            isIn: {
                game: this._createGameTemplate(),
                theme: {
                    course: this._getContent(this._headersIndexMap.isInCourseTheme),
                    world: this._getContent(this._headersIndexMap.isInWorldTheme),
                },
            },
            name: this._createNameTemplate(),
        };
    }

}
