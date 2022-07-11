import type {ClassThatIsAvailableFromTheStart} from '../availableFromTheStart/ClassThatIsAvailableFromTheStart';
import type {CourseTheme}                      from './CourseTheme';
import type {GameProperty}                     from '../entity/properties/GameProperty';
import type {Name}                             from '../../lang/name/Name';
import type {ObjectHolder}                     from '../../util/holder/ObjectHolder';
import type {WorldTheme}                       from './WorldTheme';

import {AbstractCourseAndWorldTheme} from './AbstractCourseAndWorldTheme';

export class CourseAndWorldThemeContainer
    extends AbstractCourseAndWorldTheme {

    //region Attributes

    readonly #isInPropertyHolder;
    readonly #isAvailableFromTheStartHolder;

    //endregion Attributes

    public constructor(name: Name<string>, gameProperty: ObjectHolder<GameProperty>, isAvailableFromTheStart: ObjectHolder<ClassThatIsAvailableFromTheStart>, courseTheme: CourseTheme, worldTheme: WorldTheme,) {
        super(name, courseTheme, worldTheme,);
        this.#isInPropertyHolder = gameProperty;
        this.#isAvailableFromTheStartHolder = isAvailableFromTheStart;
    }

    //region -------------------- Theme properties --------------------

    public override get isInCourseTheme(): true {
        return true;
    }


    public override get isInWorldTheme(): true {
        return true;
    }

    //endregion -------------------- Theme properties --------------------
    //region -------------------- Game properties --------------------

    public override get isInProperty(): GameProperty {
        return this.#isInPropertyHolder.get;
    }

    //endregion -------------------- Game properties --------------------
    //region -------------------- "Is available from the start" properties --------------------

    public override get isAvailableFromTheStartContainer() {
        return this.#isAvailableFromTheStartHolder.get;
    }

    //endregion -------------------- "Is available from the start" properties --------------------

}
