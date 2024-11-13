import type {WorldTheme}                                      from 'core/theme/WorldTheme'
import type {ClassWithNullObjectPattern, EmptyWorldThemeName} from 'util/ClassWithNullObjectPattern'

import {ClassContainingAName} from 'lang/name/ClassContainingAName'
import {EmptyStringName}      from 'lang/name/EmptyStringName'
import {Empty}                from 'util/emptyVariables'

import EMPTY_MAP = Empty.EMPTY_MAP

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

    public readonly isInSuperMarioMaker1 = false
    public readonly isInSuperMarioMakerFor3DS = false
    public readonly isInSuperMarioMaker2 = true


    public readonly isAvailableFromTheStartInSMM1 = null
    public readonly isAvailableFromTheStartInSMM3DS = null
    public readonly isAvailableFromTheStartInSMM2 = null

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
