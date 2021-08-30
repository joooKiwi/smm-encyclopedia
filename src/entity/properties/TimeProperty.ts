import type {Times} from '../time/Times';

export interface TimeProperty<DAY extends boolean = boolean, NIGHT extends | boolean | null = | boolean | null, > {

    get isInDayTheme(): DAY

    get isInNightTheme(): NIGHT

    /**
     * Return a {@link Map} based on the enum {@link Times}
     * with every values stored inside this instance ({@link TimeProperty})
     * as a boolean only.
     */
    toTimeMap(): ReadonlyMap<Times, boolean>

}

export type ExclusiveSMM1TimeProperty = TimeProperty<true, null>;
export type AbstractExclusiveSMM2TimeProperty<DAY extends boolean = boolean, NIGHT extends | boolean | null = | boolean | null, >
    = TimeProperty<DAY, NIGHT>;
export type ExclusiveSMM2TimePropertyInSM3DW = AbstractExclusiveSMM2TimeProperty<true, null>;
export type ExclusiveSMM2TimeProperty = AbstractExclusiveSMM2TimeProperty<boolean, boolean>;
