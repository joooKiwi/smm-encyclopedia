import type {TimeProperty} from '../TimeProperty';

export interface ExclusiveSMM1TimeProperty
    extends TimeProperty {

    get isInDayTheme(): true

    get isInNightTheme(): null

}