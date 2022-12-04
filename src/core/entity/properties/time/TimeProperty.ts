import type {Times}         from 'core/time/Times'
import type {NullOrBoolean} from 'util/types/nullable'

export interface TimeProperty<DAY extends boolean = boolean, NIGHT extends NullOrBoolean = NullOrBoolean, > {

    get isInDayTheme(): DAY

    get isInNightTheme(): NIGHT

    /**
     * Return a {@link Map} based on the enum {@link Times}
     * with every values stored inside this instance ({@link TimeProperty})
     * as a boolean only.
     */
    toTimeMap(): ReadonlyMap<Times, boolean>

}

/**@deprecated*/export type ExclusiveSMM1TimeProperty = TimeProperty<true, null>
/**@deprecated*/export type AbstractExclusiveSMM2TimeProperty<DAY extends boolean = boolean, NIGHT extends NullOrBoolean = NullOrBoolean, >
    = TimeProperty<DAY, NIGHT>
/**@deprecated*/export type ExclusiveSMM2TimePropertyInSM3DW = AbstractExclusiveSMM2TimeProperty<true, null>
/**@deprecated*/export type ExclusiveSMM2TimeProperty = AbstractExclusiveSMM2TimeProperty<boolean, boolean>
