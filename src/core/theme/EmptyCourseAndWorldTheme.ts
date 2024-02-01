import type {CourseAndWorldTheme}                                      from 'core/theme/CourseAndWorldTheme'
import type {ClassWithNullObjectPattern, EmptyCourseAndWorldThemeName} from 'util/ClassWithNullObjectPattern'

import {EmptyCourseTheme}     from 'core/theme/EmptyCourseTheme'
import {EmptyWorldTheme}      from 'core/theme/EmptyWorldTheme'
import {EmptyStringName}      from 'lang/name/EmptyStringName'
import {ClassContainingAName} from 'lang/name/ClassContainingAName'
import {EMPTY_MAP}            from 'util/emptyVariables'

/** @singleton */
export class EmptyCourseAndWorldTheme
    extends ClassContainingAName<string>
    implements CourseAndWorldTheme, ClassWithNullObjectPattern<EmptyCourseAndWorldThemeName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyCourseAndWorldTheme

    private constructor() {
        super(EmptyStringName.get,)
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------
    //region -------------------- Getter methods --------------------

    public readonly courseTheme = EmptyCourseTheme.get
    public readonly isInCourseTheme = false

    public readonly worldTheme = EmptyWorldTheme.get
    public readonly isInWorldTheme = false


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

    public override toString(): EmptyCourseAndWorldThemeName {
        return 'Empty course & world theme'
    }

}
