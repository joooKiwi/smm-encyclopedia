import resource from '../../resources/compiled/Course tag (SMM2).json';

import type {CourseTag}                                              from './CourseTag';
import type {CourseTagTemplate, PossibleFirstAppearanceInMarioMaker} from './CourseTag.template';
import type {Loader}                                                 from '../../util/loader/Loader';
import type {PossibleEnglishName}                                    from './CourseTags.types';
import type {PropertiesArray as LanguagesPropertyArray}              from '../../lang/Loader.types';

import {AbstractTemplateBuilder} from '../_template/AbstractTemplate.builder';
import {CSVLoader}               from '../../util/loader/CSVLoader';
import {CourseTagBuilder}        from './CourseTag.builder';
import {HeaderTypesForConvertor} from '../_util/loader/HeaderTypesForConvertor';

//region -------------------- CSV array related types --------------------

enum Headers {

    isAnOfficialTag,
    firstAppearanceInMarioMaker,

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

    //endregion -------------------- Languages --------------------

}

//region -------------------- Properties --------------------

type ExclusivePropertiesArray = [
    isAnOfficialTag: boolean,
    firstAppearanceInMarioMaker: PossibleFirstAppearanceInMarioMaker,
];

type PropertiesArray = [
    ...ExclusivePropertiesArray,
    ...LanguagesPropertyArray,
]

//endregion -------------------- Properties --------------------

//endregion -------------------- CSV array related types --------------------

/**
 * @singleton
 * @recursiveReference<{@link CourseTags}>
 */
export class CourseTagLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, CourseTag>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: CourseTagLoader;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, CourseTag>;

    public load(): ReadonlyMap<PossibleEnglishName, CourseTag> {
        if (this.#map == null) {
            const references = new Map<PossibleEnglishName, CourseTag>();

            //region -------------------- CSV Loader --------------------

            new CSVLoader<PropertiesArray, CourseTag, keyof typeof Headers>(resource, convertedContent => new CourseTagBuilder(new TemplateBuilder(convertedContent)).build())
                .setDefaultConversion('emptyable string')

                .convertToBoolean('isAnOfficialTag',)
                .convertToEmptyableStringAnd(HeaderTypesForConvertor.everyPossibleName_version, 'firstAppearanceInMarioMaker',)

                .onAfterFinalObjectCreated(finalContent => references.set((finalContent.english ?? finalContent.americanEnglish) as PossibleEnglishName, finalContent,))
                .load();

            //endregion -------------------- CSV Loader --------------------

            console.log('-------------------- "course tag" has been loaded --------------------');// temporary console.log
            console.log(references);// temporary console.log
            console.log('-------------------- "course tag" has been loaded --------------------');// temporary console.log

            this.#map = references;
        }
        return this.#map;
    }

}

class TemplateBuilder
    extends AbstractTemplateBuilder<CourseTagTemplate, PropertiesArray, typeof Headers> {

    public constructor(content: PropertiesArray,) {
        super(content);
    }

    protected override get _headersIndexMap() {
        return Headers;
    }

    public override build(): CourseTagTemplate {
        return {
            name: this._createNameTemplate(),
            isOfficial: this._getContent(this._headersIndexMap.isAnOfficialTag),
            firstAppearance: this._getContent(this._headersIndexMap.firstAppearanceInMarioMaker),
        };
    }

}
