import type {WorldTheme}                                      from 'core/theme/WorldTheme'
import type {ClassWithNullObjectPattern, EmptyWorldThemeName} from 'util/ClassWithNullObjectPattern'

import {ClassThatIsAvailableFromTheStartProvider} from 'core/availableFromTheStart/ClassThatIsAvailableFromTheStart.provider'
import {GamePropertyProvider}                     from 'core/entity/properties/game/GameProperty.provider'
import {ClassContainingAName}                     from 'lang/name/ClassContainingAName'
import {EmptyStringName}                          from 'lang/name/EmptyStringName'
import {EMPTY_MAP}                                from 'util/emptyVariables'

/** @singleton */
export class EmptyWorldTheme
    extends ClassContainingAName<string>
    implements WorldTheme, ClassWithNullObjectPattern<EmptyWorldThemeName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyWorldTheme

    private constructor() {
        super(EmptyStringName.get,)
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------
    //region -------------------- Getter methods --------------------

    //region -------------------- Game properties --------------------

    public readonly isInProperty = GamePropertyProvider.get.smm2Only

    public readonly isInSuperMarioMaker1 = this.isInProperty.isInSuperMarioMaker1
    public readonly isInSuperMarioMakerFor3DS = this.isInProperty.isInSuperMarioMakerFor3DS
    public readonly isInSuperMarioMaker2 = this.isInProperty.isInSuperMarioMaker2

    //endregion -------------------- Game properties --------------------
    //region -------------------- "Is available from the start" properties --------------------

    public readonly isAvailableFromTheStartContainer = ClassThatIsAvailableFromTheStartProvider.get.null

    public readonly isAvailableFromTheStartInSMM1 = this.isAvailableFromTheStartContainer.isAvailableFromTheStartInSMM1
    public readonly isAvailableFromTheStartInSMM3DS = this.isAvailableFromTheStartContainer.isAvailableFromTheStartInSMM3DS
    public readonly isAvailableFromTheStartInSMM2 = this.isAvailableFromTheStartContainer.isAvailableFromTheStartInSMM2

    //endregion -------------------- "Is available from the start" properties --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toGameMap() {
        return EMPTY_MAP
    }

    //endregion -------------------- Convertor methods --------------------

    public override toString(): EmptyWorldThemeName {
        return 'Empty world theme'
    }

}
