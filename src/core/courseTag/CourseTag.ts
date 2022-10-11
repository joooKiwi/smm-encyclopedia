import type {NameTrait}                from '../../lang/name/NameTrait'
import type {PossibleMakerCentralName} from './CourseTags.types'
import type {Versions}                 from '../version/Versions'

export interface CourseTag
    extends NameTrait<string> {

    get isAnOfficialTag(): boolean

    get makerCentralName(): | PossibleMakerCentralName | null

    get firstAppearance(): | Versions | null

}
