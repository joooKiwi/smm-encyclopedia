import {Times} from '../time/Times';

export interface TimeProperty {

    isInDayTheme: boolean
    isInNightTheme: null | boolean

    /**
     * Return a {@link Map} based on the enum {@link Times}
     * with every values stored inside this instance ({@link TimeProperty})
     * as a boolean only.
     */
    toTimeMap(): Map<Times, boolean>

}