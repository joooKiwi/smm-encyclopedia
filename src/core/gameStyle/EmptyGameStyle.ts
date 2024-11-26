import type {GameStyle}                                      from 'core/gameStyle/GameStyle'
import type {ClassWithNullObjectPattern, EmptyGameStyleName} from 'util/ClassWithNullObjectPattern'

import {ClassContainingAName} from 'lang/name/ClassContainingAName'
import {EmptyStringName}      from 'lang/name/EmptyStringName'
import {Empty}                from 'util/emptyVariables'

import EMPTY_ARRAY = Empty.EMPTY_ARRAY
import EMPTY_MAP =   Empty.EMPTY_MAP

/** @singleton */
export class EmptyGameStyle
    extends ClassContainingAName<string>
    implements GameStyle, ClassWithNullObjectPattern<EmptyGameStyleName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyGameStyle

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
    public readonly isInSuperMarioMaker2 = false


    public readonly isAvailableFromTheStartInSMM1 = null
    public readonly isAvailableFromTheStartInSMM3DS = null
    public readonly isAvailableFromTheStartInSMM2 = null


    public readonly entities = EMPTY_ARRAY

    public readonly nightDesertWindTranslationKey = null

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toGameMap() {
        return EMPTY_MAP
    }

    //endregion -------------------- Convertor methods --------------------

    public override toString(): EmptyGameStyleName {
        return 'Empty game style'
    }

}
