import type {CourseTag}                from './CourseTag'
import type {Name}                     from '../../lang/name/Name'
import type {ObjectHolder}             from '../../util/holder/ObjectHolder'
import type {PossibleMakerCentralName} from './CourseTags.types'
import type {Versions}                 from '../version/Versions'

import {ClassContainingAName} from '../../lang/name/ClassContainingAName'

export class CourseTagContainer
    extends ClassContainingAName<string>
    implements CourseTag {

    //region -------------------- Fields --------------------

    readonly #isAnOfficialTag
    readonly #makerCentralNameHolder
    readonly #firstAppearanceHolder

    //endregion -------------------- Fields --------------------

    public constructor(name: Name<string>, isAnOfficialTag: boolean, makerCentralName: ObjectHolder<| PossibleMakerCentralName | null>, firstAppearance: ObjectHolder<| Versions | null>,) {
        super(name)
        this.#isAnOfficialTag = isAnOfficialTag
        this.#makerCentralNameHolder = makerCentralName
        this.#firstAppearanceHolder = firstAppearance
    }

    //region -------------------- Getter methods --------------------

    public get isAnOfficialTag(): boolean {
        return this.#isAnOfficialTag
    }

    public get makerCentralName(): | PossibleMakerCentralName | null {
        return this.#makerCentralNameHolder.get
    }

    public get firstAppearance(): | Versions | null {
        return this.#firstAppearanceHolder.get
    }

    //endregion -------------------- Getter methods --------------------

}
