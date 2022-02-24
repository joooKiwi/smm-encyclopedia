import type {ClassWithNullObjectPattern, EmptyMiiCostumeName} from '../../util/ClassWithNullObjectPattern';
import type {MiiCostume}                                      from './MiiCostume';

import {ClassContainingAName} from '../../lang/name/ClassContainingAName';
import {EmptyStringName}      from '../../lang/name/EmptyStringName';

export class EmptyMiiCostume
    extends ClassContainingAName<string>
    implements MiiCostume, ClassWithNullObjectPattern<EmptyMiiCostumeName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyMiiCostume;

    private constructor() {
        super(EmptyStringName.get,);
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly mode = null;
    public readonly conditionToUnlockId = null;
    public readonly version = null;
    public readonly category = null;

    public toString(): EmptyMiiCostumeName {
        return 'Empty Mii costume';
    }

}
