import {Times} from '../time/Times';

export interface TimeProperty {

    get isInDayTheme(): boolean

    get isInNightTheme(): null | boolean

    /**
     * Return a {@link Map} based on the enum {@link Times}
     * with every values stored inside this instance ({@link TimeProperty})
     * as a boolean only.
     */
    toTimeMap(): ReadonlyMap<Times, boolean>

}