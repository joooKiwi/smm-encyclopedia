import type {TemplateWithNameTemplate}             from 'core/_template/TemplateWithName.template'
import type {PossibleMakerCentralName}             from 'core/courseTag/CourseTags.types'
import type {NameTemplate as OriginalNameTemplate} from 'lang/name/Name.template'

export interface CourseTagTemplate
    extends TemplateWithNameTemplate<NameTemplate> {

    isOfficial: boolean

    firstAppearance: PossibleFirstAppearanceInMarioMaker

}

export interface NameTemplate
    extends OriginalNameTemplate {

    makerCentral: NullOr<PossibleMakerCentralName>

}

export type PossibleFirstAppearanceInMarioMaker = NullOr<`v${1 | 3}.0.0`>
