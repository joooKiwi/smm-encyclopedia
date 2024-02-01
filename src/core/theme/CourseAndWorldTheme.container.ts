import type {Games}               from 'core/game/Games'
import type {CourseTheme}         from 'core/theme/CourseTheme'
import type {CourseAndWorldTheme} from 'core/theme/CourseAndWorldTheme'
import type {WorldTheme}          from 'core/theme/WorldTheme'
import type {Name}                from 'lang/name/Name'

import {AbstractCourseAndWorldTheme} from 'core/theme/AbstractCourseAndWorldTheme'
import {GameMap}                     from 'util/collection/GameMap'

export class CourseAndWorldThemeContainer
    extends AbstractCourseAndWorldTheme {

    //region -------------------- Fields --------------------

    readonly #isInSuperMarioMaker1And3DS
    readonly #isAvailableFromTheStartInSuperMarioMaker1
    readonly #isAvailableFromTheStartInSuperMarioMakerFor3DS: NullOrTrue
    #gameMap?: GameMap<boolean, CourseAndWorldTheme>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(name: Name<string>,
                       isInSuperMarioMaker1And3DS: boolean,
                       isAvailableFromTheStartInSuperMarioMaker1: NullOrBoolean,
                       courseTheme: CourseTheme,
                       worldTheme: WorldTheme,) {
        super(name, courseTheme, worldTheme,)
        this.#isInSuperMarioMaker1And3DS = isInSuperMarioMaker1And3DS
        if ((this.#isAvailableFromTheStartInSuperMarioMaker1 = isAvailableFromTheStartInSuperMarioMaker1) == null)
            this.#isAvailableFromTheStartInSuperMarioMakerFor3DS = null
        else
            this.#isAvailableFromTheStartInSuperMarioMakerFor3DS = true
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public override get isInCourseTheme(): true {
        return true
    }


    public override get isInWorldTheme(): true {
        return true
    }


    public override get isInSuperMarioMaker1() {
        return this.#isInSuperMarioMaker1And3DS
    }

    public override get isInSuperMarioMakerFor3DS() {
        return this.#isInSuperMarioMaker1And3DS
    }

    public override get isInSuperMarioMaker2(): true {
        return true
    }


    public override get isAvailableFromTheStartInSMM1() {
        return this.#isAvailableFromTheStartInSuperMarioMaker1
    }

    public override get isAvailableFromTheStartInSMM3DS() {
        return this.#isAvailableFromTheStartInSuperMarioMakerFor3DS
    }

    public override get isAvailableFromTheStartInSMM2(): true {
        return true
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toGameMap(): ReadonlyMap<Games, boolean> {
        return this.#gameMap ??= new GameMap(this,)
    }

    //endregion -------------------- Convertor methods --------------------
}
