import file from 'resources/compiled/Sample course (SMM).json'

import type {LanguageContent}                                                                                              from 'core/_template/LanguageContent'
import type {PossibleAcronym_GameStyle_SMM1}                                                                               from 'core/gameReference/GameReferences.types'
import type {PossibleEnglishName_CourseTheme_SMM1}                                                                         from 'core/theme/Themes.types'
import type {SampleCourse}                                                                                                 from 'core/sampleCourse/SampleCourse'
import type {PossibleAmountOfTime, PossibleFirstNumberInFirst10MarioChallenges, PossibleWorldNumber, SampleCourseTemplate} from 'core/sampleCourse/SampleCourse.template'
import type {PossibleEnglishName}                                                                                          from 'core/sampleCourse/SampleCourses.types'
import type {Loader}                                                                                                       from 'util/loader/Loader'

import {AbstractTemplateCreator} from 'core/_template/AbstractTemplate.creator'
import * as TemplateMethods      from 'core/_template/templateMethods'
import {SampleCourseCreator}     from 'core/sampleCourse/SampleCourse.creator'
import {isInProduction}          from 'variables'

/** @singleton */
export class SampleCourseLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, SampleCourse>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: SampleCourseLoader

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, SampleCourse>

    public load(): ReadonlyMap<PossibleEnglishName, SampleCourse> {
        if (this.#map == null) {
            const references = new Map<PossibleEnglishName, SampleCourse>()

            file.map(it => new SampleCourseCreator(new TemplateCreator(it as Content,).create(),),)
                .forEach(it => references.set(`Level ${it.template.numbers.world}`, it.create(),),)

            if (!isInProduction)
                console.info(
                    '-------------------- "sample course" has been loaded --------------------\n',
                    references,
                    '\n-------------------- "sample course" has been loaded --------------------',
                )

            this.#map = references
        }
        return this.#map
    }
}

interface Content
    extends LanguageContent {

    readonly worldNumber: PossibleWorldNumber
    readonly courseNumberInFirst10MarioChallenge: PossibleFirstNumberInFirst10MarioChallenges

    readonly gameStyle: PossibleAcronym_GameStyle_SMM1
    readonly courseTheme_mainArea: PossibleEnglishName_CourseTheme_SMM1
    readonly courseTheme_subArea: NullOr<PossibleEnglishName_CourseTheme_SMM1>

    readonly amountOfTime: PossibleAmountOfTime

}

class TemplateCreator
    extends AbstractTemplateCreator<SampleCourseTemplate, Content> {

    public constructor(content: Content,) {
        super(content,)
    }

    public override create(): SampleCourseTemplate {
        const content = this._content

        return {
            name: TemplateMethods.createNameTemplate(content,),
            numbers: {world: content.worldNumber, first: content.courseNumberInFirst10MarioChallenge,},
            gameStyle: content.gameStyle,
            courseThemeArea: {main: content.courseTheme_mainArea, sub: content.courseTheme_subArea,},
            amountOfTime: content.amountOfTime,
        }
    }

}