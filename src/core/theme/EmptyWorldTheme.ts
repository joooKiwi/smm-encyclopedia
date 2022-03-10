import type {ClassWithNullObjectPattern, EmptyWorldThemeName} from '../../util/ClassWithNullObjectPattern';
import type {WorldTheme}                                      from './WorldTheme';

import {ClassContainingAName}                      from '../../lang/name/ClassContainingAName';
import {ClassThatIsAvailableFromTheStartContainer} from '../availableFromTheStart/ClassThatIsAvailableFromTheStart.container';
import {EMPTY_MAP}                                 from '../../util/emptyVariables';
import {EmptyStringName}                           from '../../lang/name/EmptyStringName';
import {GamePropertyContainer}                     from '../entity/properties/GameProperty.container';

/**
 * @singleton
 */
export class EmptyWorldTheme
    extends ClassContainingAName<string>
    implements WorldTheme, ClassWithNullObjectPattern<EmptyWorldThemeName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyWorldTheme;

    private constructor() {
        super(EmptyStringName.get,);
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    //region -------------------- Game properties --------------------

    public readonly isInProperty = GamePropertyContainer.get(false, true,);

    public readonly isInSuperMarioMaker1 = this.isInProperty.isInSuperMarioMaker1;
    public readonly isInSuperMarioMakerFor3DS = this.isInProperty.isInSuperMarioMakerFor3DS;
    public readonly isInSuperMarioMaker2 = this.isInProperty.isInSuperMarioMaker2;

    //endregion -------------------- Game properties --------------------
    //region -------------------- "Is available from the start" properties --------------------

    public readonly isAvailableFromTheStartContainer = ClassThatIsAvailableFromTheStartContainer.get(null, null, null,);

    public readonly isAvailableFromTheStartInSMM1 = this.isAvailableFromTheStartContainer.isAvailableFromTheStartInSMM1;
    public readonly isAvailableFromTheStartInSMM3DS = this.isAvailableFromTheStartContainer.isAvailableFromTheStartInSMM3DS;
    public readonly isAvailableFromTheStartInSMM2 = this.isAvailableFromTheStartContainer.isAvailableFromTheStartInSMM2;

    //endregion -------------------- "Is available from the start" properties --------------------

    public toGameMap() {
        return EMPTY_MAP;
    }


    public toString(): EmptyWorldThemeName {
        return 'Empty world theme';
    }

}
