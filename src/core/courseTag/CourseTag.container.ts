import type {Lazy} from '@joookiwi/lazy'

import type {CourseTag}                from 'core/courseTag/CourseTag'
import type {PossibleMakerCentralName} from 'core/courseTag/CourseTags.types'
import type {Versions}                 from 'core/version/Versions'
import type {Name}                     from 'lang/name/Name'

import {ClassContainingAName} from 'lang/name/ClassContainingAName'

export class CourseTagContainer
    extends ClassContainingAName<string>
    implements CourseTag {

    //region -------------------- Fields --------------------

    readonly #isAnOfficialTag
    readonly #makerCentralNameHolder
    readonly #firstAppearanceHolder

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(name: Name<string>,
                       isAnOfficialTag: boolean,
                       makerCentralName: Lazy<NullOr<PossibleMakerCentralName>>,
                       firstAppearance: Lazy<NullOr<Versions>>,) {
        super(name)
        this.#isAnOfficialTag = isAnOfficialTag
        this.#makerCentralNameHolder = makerCentralName
        this.#firstAppearanceHolder = firstAppearance
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get isAnOfficialTag(): boolean {
        return this.#isAnOfficialTag
    }

    public get makerCentralName(): NullOr<PossibleMakerCentralName> {
        return this.#makerCentralNameHolder.value
    }

    public get firstAppearance(): NullOr<Versions> {
        return this.#firstAppearanceHolder.value
    }

    //endregion -------------------- Getter methods --------------------

}
