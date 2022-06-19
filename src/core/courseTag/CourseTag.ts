import type {NameTrait} from '../../lang/name/NameTrait';
import type {Versions}  from '../version/Versions';

export interface CourseTag
    extends NameTrait<string> {

    get isAnOfficialTag(): boolean

    get firstAppearance(): | Versions | null

}
