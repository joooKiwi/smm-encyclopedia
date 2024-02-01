import type {CourseTheme}                                      from 'core/theme/CourseTheme'
import type {ClassWithNullObjectPattern, EmptyCourseThemeName} from 'util/ClassWithNullObjectPattern'

import {ClassContainingAName}   from 'lang/name/ClassContainingAName'
import {EmptyStringName}        from 'lang/name/EmptyStringName'
import {EMPTY_ARRAY, EMPTY_MAP} from 'util/emptyVariables'

/** @singleton */
export class EmptyCourseTheme
    extends ClassContainingAName<string>
    implements CourseTheme, ClassWithNullObjectPattern<EmptyCourseThemeName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyCourseTheme

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
    public readonly effect = null

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toGameMap() {
        return EMPTY_MAP
    }

    //endregion -------------------- Convertor methods --------------------

    public override toString(): EmptyCourseThemeName {
        return 'Empty course theme'
    }

}
