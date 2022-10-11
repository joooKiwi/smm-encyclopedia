import type {NameTemplate as OriginalNameTemplate} from '../../lang/name/Name.template'
import type {PossibleMakerCentralName}             from './CourseTags.types'
import type {TemplateWithNameTemplate}             from '../_template/TemplateWithName.template'

export interface CourseTagTemplate
    extends TemplateWithNameTemplate<NameTemplate> {

    isOfficial: boolean

    firstAppearance: PossibleFirstAppearanceInMarioMaker

}

export interface NameTemplate
    extends OriginalNameTemplate {

    makerCentral: | PossibleMakerCentralName | null

}

export type PossibleFirstAppearanceInMarioMaker = | `v${1 | 3}.0.0` | null
