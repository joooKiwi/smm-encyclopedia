import type {NameTrait}                from '../../lang/name/NameTrait'
import type {NullOr}                   from '../../util/types'
import type {PossibleMakerCentralName} from './CourseTags.types'
import type {Versions}                 from '../version/Versions'

export interface CourseTag
    extends NameTrait<string> {

    get isAnOfficialTag(): boolean

    get makerCentralName(): NullOr<PossibleMakerCentralName>

    get firstAppearance(): NullOr<Versions>

}
