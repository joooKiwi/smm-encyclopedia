import type {NameTemplate}             from '../../lang/name/Name.template';
import type {TemplateWithNameTemplate} from '../_template/TemplateWithName.template';

export interface CourseTagTemplate
    extends TemplateWithNameTemplate<NameTemplate> {

    isOfficial: boolean

    firstAppearance: PossibleFirstAppearanceInMarioMaker

}

export type PossibleFirstAppearanceInMarioMaker = | `${1 | 3}.0.0` | null;
