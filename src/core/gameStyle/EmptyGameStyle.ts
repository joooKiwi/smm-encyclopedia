import type {ClassWithNullObjectPattern, EmptyGameStyleName} from '../../util/ClassWithNullObjectPattern';
import type {GameStyle}                                      from './GameStyle';

import {ClassContainingAName}   from '../../lang/name/ClassContainingAName';
import {EMPTY_ARRAY, EMPTY_MAP} from '../../util/emptyVariables';
import {EmptyIsInProperty}      from '../entity/properties/EmptyIsInProperty';
import {EmptyStringName}        from '../../lang/name/EmptyStringName';

/**
 * @singleton
 */
export class EmptyGameStyle
    extends ClassContainingAName<string>
    implements GameStyle, ClassWithNullObjectPattern<EmptyGameStyleName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyGameStyle;

    private constructor() {
        super(EmptyStringName.get,);
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    //region -------------------- Game properties --------------------

    public readonly isInProperty = EmptyIsInProperty.get;

    public readonly isInSuperMarioMaker1 = this.isInProperty.isInSuperMarioMaker1;
    public readonly isInSuperMarioMaker2 = this.isInProperty.isInSuperMarioMaker2;

    //endregion -------------------- Game properties --------------------

    public readonly entities = EMPTY_ARRAY;

    public readonly nightDesertWindTranslationKey = null;

    public toGameMap() {
        return EMPTY_MAP;
    }


    public toString(): EmptyGameStyleName {
        return 'Empty game style';
    }

}
