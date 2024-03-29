import type {PossibleMakerCentralName} from 'core/courseTag/CourseTags.types'
import type {Versions}                 from 'core/version/Versions'
import type {NameTrait}                from 'lang/name/NameTrait'

export interface CourseTag
    extends NameTrait<string> {

    get isAnOfficialTag(): boolean

    get makerCentralName(): NullOr<PossibleMakerCentralName>

    get firstAppearance(): NullOr<Versions>

}
