import type {Sound} from './Sound';

import {EMPTY_ARRAY} from '../../../util/emptyVariables';

/**
 * @singleton
 */
export class NoSound
    implements Sound<never> {

    //region -------------------- Singleton usage --------------------

    static #instance?: NoSound;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------
    //region -------------------- Getter methods --------------------

    public readonly powerUpCollectedSounds = EMPTY_ARRAY;
    public readonly tauntSounds = EMPTY_ARRAY;
    public readonly jumpSounds = EMPTY_ARRAY;
    public readonly onGroundAfterJumpSounds = EMPTY_ARRAY;
    public readonly turningSounds = EMPTY_ARRAY;
    public readonly goalPoleSounds = EMPTY_ARRAY;
    public readonly lostALifeSounds = EMPTY_ARRAY;

    //endregion -------------------- Getter methods --------------------

}
