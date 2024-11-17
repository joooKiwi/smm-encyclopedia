import type {Times} from 'core/time/Times'

export interface TimeProperty {

    readonly isInDayTheme: boolean
    readonly isInNightTheme: boolean

    /**
     * Return a {@link Map} based on the enum {@link Times}
     * with every value stored inside this instance ({@link TimeProperty})
     * as a boolean only.
     */
    toTimeMap(): ReadonlyMap<Times, boolean>

}
