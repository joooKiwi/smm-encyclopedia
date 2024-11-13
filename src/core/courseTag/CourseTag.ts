import type {NullOr, NullOrString} from '@joookiwi/type'

import type {PossibleMakerCentralName} from 'core/courseTag/CourseTags.types'
import type {Versions}                 from 'core/version/Versions'
import type {NameTrait}                from 'lang/name/NameTrait'

export interface CourseTag
    extends NameTrait<string> {

    get isAnOfficialTag(): boolean

    get makerCentralName(): NullOrString<PossibleMakerCentralName>

    get firstAppearance(): NullOr<Versions>

}
