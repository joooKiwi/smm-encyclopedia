import type {NameTemplate as OriginalNameTemplate} from '../../lang/name/Name.template'
import type {NullOr}                               from '../../util/types'
import type {PossibleMakerCentralName}             from './CourseTags.types'
import type {TemplateWithNameTemplate}             from '../_template/TemplateWithName.template'

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
