import resource from '../../resources/compiled/Theme.json'

import type {CourseAndWorldTheme}                            from './CourseAndWorldTheme'
import type {PossibleEnglishName}                            from './Themes.types'
import type {PropertiesArrayFrom1And2 as GamesPropertyArray} from '../game/Loader.types'
import type {PropertiesArray as LanguagesPropertyArray}      from '../../lang/Loader.types'
import type {PossibleEffectInNightTheme, ThemeTemplate}      from './Theme.template'
import type {PossibleIsAvailableFromTheStart}                from '../availableFromTheStart/loader.types'
import type {Loader}                                         from '../../util/loader/Loader'

import {AbstractTemplateBuilder} from '../_template/AbstractTemplate.builder'
import {CSVLoader}               from '../../util/loader/CSVLoader'
import {HeaderTypesForConvertor} from '../_util/loader/HeaderTypesForConvertor'
import {ThemeBuilder}            from './Theme.builder'

//region -------------------- CSV array related types --------------------

enum Headers {

    isInCourseTheme,
    isInWorldTheme,

    //region -------------------- Games --------------------

    isInSuperMarioMaker1And3DS,
    isInSuperMarioMaker2,

    //endregion -------------------- Games --------------------

    isAvailableFromTheStart_SMM1,
    effectInNightTheme,

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

type ExclusivePropertiesArray1 = [
    isInCourseTheme: boolean,
    isInWorldTheme: boolean,
]
type ExclusivePropertiesArray2 = [
    isAvailableFromTheStart_SMM1: PossibleIsAvailableFromTheStart,
    effectInNightTheme: PossibleEffectInNightTheme,
]
type PropertiesArray = [
    ...ExclusivePropertiesArray1,
    ...GamesPropertyArray,
    ...ExclusivePropertiesArray2,
    ...LanguagesPropertyArray,
]

//endregion -------------------- Properties --------------------

//endregion -------------------- CSV array related types --------------------

/**
 * @singleton
 * @recursiveReferenceVia<{@link ThemeBuilder}, {@link Themes}>
 * @recursiveReference<{@link Themes}>
 */
export class ThemeLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, CourseAndWorldTheme>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: ThemeLoader

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, CourseAndWorldTheme>

    public load(): ReadonlyMap<PossibleEnglishName, CourseAndWorldTheme> {
        if (this.#map == null) {
            const references = new Map<PossibleEnglishName, CourseAndWorldTheme>()

            //region -------------------- CSV Loader --------------------

            new CSVLoader<PropertiesArray, CourseAndWorldTheme, keyof typeof Headers>(resource, convertedContent => new ThemeBuilder(new TemplateBuilder(convertedContent)).build())
                .setDefaultConversion('emptyable string')

                .convertToBoolean(
                    'isInCourseTheme', 'isInWorldTheme',
                    'isInSuperMarioMaker1And3DS', 'isInSuperMarioMaker2',
                )
                .convertToNullableBoolean('isAvailableFromTheStart_SMM1',)
                .convertTo(HeaderTypesForConvertor.everyPossibleName_themeNightEffect, 'effectInNightTheme')

                .onAfterFinalObjectCreated(finalContent => references.set(finalContent.english as PossibleEnglishName, finalContent,))
                .load()

            //endregion -------------------- CSV Loader --------------------

            console.log('-------------------- theme has been loaded --------------------')// temporary console.log
            console.log(references)// temporary console.log
            console.log('-------------------- theme has been loaded --------------------')// temporary console.log

            this.#map = references
        }
        return this.#map
    }

}

class TemplateBuilder
    extends AbstractTemplateBuilder<ThemeTemplate, PropertiesArray, typeof Headers> {

    public constructor(content: PropertiesArray,) {
        super(content)
    }

    protected override get _headersIndexMap() {
        return Headers
    }

    public override build(): ThemeTemplate {
        return {
            is: {
                in: {
                    game: this._createGameTemplateFrom1And2(),
                    theme: {
                        course: this._getContent(this._headersIndexMap.isInCourseTheme),
                        world: this._getContent(this._headersIndexMap.isInWorldTheme),
                    },
                },
                availableFromTheStart: this._getContent(this._headersIndexMap.isAvailableFromTheStart_SMM1),
            },
            effect: this._getContent(this._headersIndexMap.effectInNightTheme),
            name: this._createNameTemplate(),
        }
    }

}
