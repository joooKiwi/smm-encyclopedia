import type {ClassWithNullObjectPattern, EmptySoundEffectCategoryName} from '../../util/ClassWithNullObjectPattern';
import type {SoundEffectCategory}                                      from './SoundEffectCategory';

import {ClassContainingAName} from '../../lang/name/ClassContainingAName';
import {EmptyStringName}      from '../../lang/name/EmptyStringName';

/**
 * @singleton
 */
export class EmptySoundEffectCategory
    extends ClassContainingAName<string>
    implements SoundEffectCategory, ClassWithNullObjectPattern<EmptySoundEffectCategoryName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptySoundEffectCategory;

    private constructor() {
        super(EmptyStringName.get,);
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    public override toString(): EmptySoundEffectCategoryName {
        return 'Empty sound effect category';
    }

}
