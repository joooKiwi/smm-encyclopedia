import type {Times} from 'core/time/Times'

export interface TimeProperty<out DAY extends boolean = boolean,
    out NIGHT extends NullOrBooleanOrNotApplicable = NullOrBooleanOrNotApplicable, > {

    get isInDayTheme(): DAY

    get isInNightTheme(): NIGHT

    /**
     * Return a {@link Map} based on the enum {@link Times}
     * with every value stored inside this instance ({@link TimeProperty})
     * as a boolean only.
     */
    toTimeMap(): ReadonlyMap<Times, boolean>

}
