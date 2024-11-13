import type {NullOrBoolean, NullOrTrue} from '@joookiwi/type'

import type {Theme} from 'core/theme/Theme'
import type {Games} from 'core/game/Games'
import type {Name}  from 'lang/name/Name'

import {ClassContainingAName} from 'lang/name/ClassContainingAName'
import {GameMap}              from 'util/collection/GameMap'

export class AbstractTheme<const out SMM1_AND_SMM3DS extends boolean = boolean,
    const out AVAILABLE_FROM_START_SMM1 extends NullOrBoolean = NullOrBoolean,
    const out AVAILABLE_FROM_START_SMM3DS extends NullOrTrue = NullOrTrue, >
    extends ClassContainingAName<string>
    implements Theme {

    //region -------------------- Fields --------------------

    readonly #isInSuperMarioMaker1And3DS
    readonly #isAvailableFromTheStartInSuperMarioMaker1: AVAILABLE_FROM_START_SMM1
    readonly #isAvailableFromTheStartInSuperMarioMakerFor3DS: AVAILABLE_FROM_START_SMM3DS
    #gameMap?: GameMap<boolean, Theme>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    protected constructor(name: Name<string>,
                          isInSuperMarioMaker1And3DS: SMM1_AND_SMM3DS,
                          isAvailableFromTheStartInSuperMarioMaker1: AVAILABLE_FROM_START_SMM1, isAvailableFromTheStartInSuperMarioMakerFor3DS: AVAILABLE_FROM_START_SMM3DS,) {
        super(name,)
        this.#isInSuperMarioMaker1And3DS = isInSuperMarioMaker1And3DS
        this.#isAvailableFromTheStartInSuperMarioMaker1 = isAvailableFromTheStartInSuperMarioMaker1
        this.#isAvailableFromTheStartInSuperMarioMakerFor3DS = isAvailableFromTheStartInSuperMarioMakerFor3DS
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get isInSuperMarioMaker1(): SMM1_AND_SMM3DS {
        return this.#isInSuperMarioMaker1And3DS
    }

    public get isInSuperMarioMakerFor3DS(): SMM1_AND_SMM3DS {
        return this.#isInSuperMarioMaker1And3DS
    }

    public get isInSuperMarioMaker2(): true {
        return true
    }


    public get isAvailableFromTheStartInSMM1(): AVAILABLE_FROM_START_SMM1 {
        return this.#isAvailableFromTheStartInSuperMarioMaker1
    }

    public get isAvailableFromTheStartInSMM3DS(): AVAILABLE_FROM_START_SMM3DS {
        return this.#isAvailableFromTheStartInSuperMarioMakerFor3DS
    }

    public get isAvailableFromTheStartInSMM2(): true {
        return true
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toGameMap(): ReadonlyMap<Games, boolean> {
        return this.#gameMap ??= new GameMap(this,)
    }

    //endregion -------------------- Convertor methods --------------------

}
