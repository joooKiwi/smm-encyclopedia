import {ExclusiveSMM2TimeProperty} from './ExclusiveSMM2TimeProperty';

export interface ExclusiveSMM2TimePropertyInSM3DW
    extends ExclusiveSMM2TimeProperty {

    get isInDayTheme(): true

    get isInNightTheme(): null

}
