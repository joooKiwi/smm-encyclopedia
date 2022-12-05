import type {CourseTag}                from 'core/courseTag/CourseTag'
import type {PossibleMakerCentralName} from 'core/courseTag/CourseTags.types'
import type {Versions}                 from 'core/version/Versions'
import type {Name}                     from 'lang/name/Name'
import type {ObjectHolder}             from 'util/holder/ObjectHolder'
import type {NullOr}                   from 'util/types/nullable'

import {ClassContainingAName} from 'lang/name/ClassContainingAName'

export class CourseTagContainer
    extends ClassContainingAName<string>
    implements CourseTag {

    //region -------------------- Fields --------------------

    readonly #isAnOfficialTag
    readonly #makerCentralNameHolder
    readonly #firstAppearanceHolder

    //endregion -------------------- Fields --------------------

    public constructor(name: Name<string>, isAnOfficialTag: boolean, makerCentralName: ObjectHolder<NullOr<PossibleMakerCentralName>>, firstAppearance: ObjectHolder<NullOr<Versions>>,) {
        super(name)
        this.#isAnOfficialTag = isAnOfficialTag
        this.#makerCentralNameHolder = makerCentralName
        this.#firstAppearanceHolder = firstAppearance
    }

    //region -------------------- Getter methods --------------------

    public get isAnOfficialTag(): boolean {
        return this.#isAnOfficialTag
    }

    public get makerCentralName(): NullOr<PossibleMakerCentralName> {
        return this.#makerCentralNameHolder.get
    }

    public get firstAppearance(): NullOr<Versions> {
        return this.#firstAppearanceHolder.get
    }

    //endregion -------------------- Getter methods --------------------

}
