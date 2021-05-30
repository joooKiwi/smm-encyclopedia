import {Times} from '../time/Times';

export interface IsInTimeProperty {

    isInDayTheme: boolean
    isInNightTheme: null | boolean

    /**
     * Return a {@link Map} based on the enum {@link Times}
     * with every values stored inside this instance ({@link IsInTimeProperty})
     * as a boolean only.
     */
    toTimeMap(): Map<Times, boolean>

}