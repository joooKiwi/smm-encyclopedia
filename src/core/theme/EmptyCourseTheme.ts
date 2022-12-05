import type {CourseTheme}                                      from 'core/theme/CourseTheme'
import type {ClassWithNullObjectPattern, EmptyCourseThemeName} from 'util/ClassWithNullObjectPattern'

import {ClassThatIsAvailableFromTheStartProvider} from 'core/availableFromTheStart/ClassThatIsAvailableFromTheStart.provider'
import {EmptyIsInProperty}                        from 'core/entity/properties/EmptyIsInProperty'
import {ClassContainingAName}                     from 'lang/name/ClassContainingAName'
import {EmptyStringName}                          from 'lang/name/EmptyStringName'
import {EMPTY_ARRAY, EMPTY_MAP}                   from 'util/emptyVariables'

/**
 * @singleton
 */
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

    //region -------------------- Game properties --------------------

    public readonly isInProperty = EmptyIsInProperty.get

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
