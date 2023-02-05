import file from 'resources/compiled/Course tag (SMM2).json'

import type {LanguageContent}                                        from 'core/_template/LanguageContent'
import type {CourseTag}                                              from 'core/courseTag/CourseTag'
import type {CourseTagTemplate, PossibleFirstAppearanceInMarioMaker} from 'core/courseTag/CourseTag.template'
import type {PossibleEnglishName, PossibleMakerCentralName}          from 'core/courseTag/CourseTags.types'
import type {Loader}                                                 from 'util/loader/Loader'
import type {NullOr}                                                 from 'util/types/nullable'

import {isInProduction}          from 'variables'
import {AbstractTemplateCreator} from 'core/_template/AbstractTemplate.creator'
import {CourseTagCreator}        from 'core/courseTag/CourseTag.creator'

/**
 * @singleton
 */
export class CourseTagLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, CourseTag>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: CourseTagLoader

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, CourseTag>

    public load(): ReadonlyMap<PossibleEnglishName, CourseTag> {
        if (this.#map == null) {
            const references = new Map<PossibleEnglishName, CourseTag>()

            file.map(it => new CourseTagCreator(new TemplateCreator(it as Content).create()).create())
                .forEach(it => references.set(it.english as PossibleEnglishName, it,))

            if (!isInProduction)
                console.info(
                    '-------------------- "course tag" has been loaded --------------------\n',
                    references,
                    '\n-------------------- "course tag" has been loaded --------------------',
                )

            this.#map = references
        }
        return this.#map
    }

}


interface Content
    extends LanguageContent {

    isAnOfficialTag: boolean
    makerCentralName: NullOr<PossibleMakerCentralName>
    firstAppearanceInMarioMaker: PossibleFirstAppearanceInMarioMaker

}

class TemplateCreator
    extends AbstractTemplateCreator<CourseTagTemplate, Content> {

    public constructor(content: Content,) {
        super(content,)
    }

    public override create(): CourseTagTemplate {
        const content = this._content

        return {
            name: {
                ...this._createNameTemplate(),
                makerCentral: content.makerCentralName,
            },
            isOfficial: content.isAnOfficialTag,
            firstAppearance: content.firstAppearanceInMarioMaker,
        }
    }

}
