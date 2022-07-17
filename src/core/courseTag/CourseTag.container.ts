import type {CourseTag}       from './CourseTag';
import type {Name}            from '../../lang/name/Name';
import type {Versions}        from '../version/Versions';
import type {ObjectHolder}    from '../../util/holder/ObjectHolder';
import {ClassContainingAName} from '../../lang/name/ClassContainingAName';

export class CourseTagContainer
    extends ClassContainingAName<string>
    implements CourseTag {

    //region -------------------- Fields --------------------

    readonly #isAnOfficialTag;
    readonly #firstAppearanceContainer;

    //endregion -------------------- Fields --------------------

    public constructor(name: Name<string>, isAnOfficialTag: boolean, firstAppearance: ObjectHolder<| Versions | null>,) {
        super(name);
        this.#isAnOfficialTag = isAnOfficialTag;
        this.#firstAppearanceContainer = firstAppearance;
    }

    //region -------------------- Getter methods --------------------

    public get isAnOfficialTag(): boolean {
        return this.#isAnOfficialTag;
    }

    public get firstAppearance(): | Versions | null {
        return this.#firstAppearanceContainer.get;
    }

    //endregion -------------------- Getter methods --------------------

}
