import file from 'resources/compiled/Course tag (SMM2).json'

import type {LanguageContent}                                        from 'core/_template/LanguageContent'
import type {CourseTag}                                              from 'core/courseTag/CourseTag'
import type {CourseTagTemplate, PossibleFirstAppearanceInMarioMaker} from 'core/courseTag/CourseTag.template'
import type {PossibleEnglishName, PossibleMakerCentralName}          from 'core/courseTag/CourseTags.types'
import type {Loader}                                                 from 'util/loader/Loader'

import {isInProduction}     from 'variables'
import * as TemplateMethods from 'core/_template/templateMethods'
import {createContent}      from 'core/courseTag/CourseTag.creator'

/** @singleton */
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
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleEnglishName, CourseTag>()
        let index = file.length
        while (index-- > 0) {
            const reference = createContent(createTemplate(file[index] as Content,),)
            references.set(reference.english as PossibleEnglishName, reference,)
        }

        if (!isInProduction)
            console.info(
                '-------------------- "course tag" has been loaded --------------------\n',
                references,
                '\n-------------------- "course tag" has been loaded --------------------',
            )

        return this.#map = references
    }

}


interface Content
    extends LanguageContent {

    readonly isAnOfficialTag: boolean
    readonly makerCentralName: NullOr<PossibleMakerCentralName>
    readonly firstAppearanceInMarioMaker: PossibleFirstAppearanceInMarioMaker

}

function createTemplate(content: Content,): CourseTagTemplate {
    return {
        name: {
            ...TemplateMethods.createNameTemplate(content,),
            makerCentral: content.makerCentralName,
        },
        isOfficial: content.isAnOfficialTag,
        firstAppearance: content.firstAppearanceInMarioMaker,
    }
}
