import file from 'resources/compiled/Course tag (SMM2).json'

import type {Array, NullOrString} from '@joookiwi/type'
import {forEachByArray}           from '@joookiwi/collection'

import type {LanguageContent}                               from 'core/_template/LanguageContent'
import type {CourseTag}                                     from 'core/courseTag/CourseTag'
import type {PossibleEnglishName, PossibleMakerCentralName} from 'core/courseTag/CourseTags.types'
import type {PossibleFirstAppearanceInMarioMaker}           from 'core/courseTag/loader.types'
import type {Loader}                                        from 'util/loader/Loader'

import {isInDevelopment}       from 'variables'
import {CourseTagContainer}    from 'core/courseTag/CourseTag.container'
import {Versions}              from 'core/version/Versions'
import {createNameFromContent} from 'lang/name/createNameFromContent'

import VersionCompanion = Versions.Companion

/**
 * @dependsOn<{@link Versions}>
 * @singleton
 */
export class CourseTagLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, CourseTag>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: CourseTagLoader

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: ReadonlyMap<PossibleEnglishName, CourseTag>

    public load(): ReadonlyMap<PossibleEnglishName, CourseTag> {
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleEnglishName, CourseTag>()
        forEachByArray(file as Array<Content>, content => {
            const reference = createReference(content,)
            references.set(reference.english as PossibleEnglishName, reference,)
        },)

        if (isInDevelopment)
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

    //region -------------------- Language --------------------

    readonly english: PossibleEnglishName
    readonly americanEnglish: null
    readonly europeanEnglish: null

    //endregion -------------------- Language --------------------

    readonly isAnOfficialTag: boolean
    readonly makerCentralName: NullOrString<PossibleMakerCentralName>
    readonly firstAppearanceInMarioMaker: PossibleFirstAppearanceInMarioMaker

}

function createReference(content: Content,): CourseTag {
    const firstAppearance = content.firstAppearanceInMarioMaker
    const isAnOfficialTag = content.isAnOfficialTag

    return new CourseTagContainer(
        createNameFromContent(content, 2, isAnOfficialTag,),
        isAnOfficialTag,
        content.makerCentralName,
        firstAppearance == null ? null : VersionCompanion.getValueByName(firstAppearance,),
    )
}
