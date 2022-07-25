import type {CourseAndWorldTheme}                                      from './CourseAndWorldTheme';
import type {ClassWithNullObjectPattern, EmptyCourseAndWorldThemeName} from '../../util/ClassWithNullObjectPattern';

import {ClassContainingAName}                      from '../../lang/name/ClassContainingAName';
import {ClassThatIsAvailableFromTheStartContainer} from '../availableFromTheStart/ClassThatIsAvailableFromTheStart.container';
import {EMPTY_MAP}                                 from '../../util/emptyVariables';
import {EmptyCourseTheme}                          from './EmptyCourseTheme';
import {EmptyStringName}                           from '../../lang/name/EmptyStringName';
import {EmptyWorldTheme}                           from './EmptyWorldTheme';
import {GamePropertyContainer}                     from '../entity/properties/GameProperty.container';

/**
 * @singleton
 */
export class EmptyCourseAndWorldTheme
    extends ClassContainingAName<string>
    implements CourseAndWorldTheme, ClassWithNullObjectPattern<EmptyCourseAndWorldThemeName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyCourseAndWorldTheme;

    private constructor() {
        super(EmptyStringName.get,);
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------
    //region -------------------- Getter methods --------------------

    //region -------------------- Theme properties --------------------

    public readonly courseTheme = EmptyCourseTheme.get;
    public readonly isInCourseTheme = false;

    public readonly worldTheme = EmptyWorldTheme.get;
    public readonly isInWorldTheme = false;

    //endregion -------------------- Theme properties --------------------
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

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toGameMap() {
        return EMPTY_MAP;
    }

    //endregion -------------------- Convertor methods --------------------

    public override toString(): EmptyCourseAndWorldThemeName {
        return 'Empty course & world theme';
    }

}