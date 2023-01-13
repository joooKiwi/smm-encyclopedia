import type {Times}         from 'core/time/Times'
import type {NullOrBoolean} from 'util/types/nullable'

export interface TimeProperty<DAY extends boolean = boolean, NIGHT extends NullOrBoolean = NullOrBoolean, > {

    get isInDayTheme(): DAY

    get isInNightTheme(): NIGHT

    /**
     * Return a {@link Map} based on the enum {@link Times}
     * with every value stored inside this instance ({@link TimeProperty})
     * as a boolean only.
     */
    toTimeMap(): ReadonlyMap<Times, boolean>

}
