import {ExclusiveSMM2GamePropertyInAnyStyle}      from './ExclusiveSMM2GamePropertyInAnyStyle';
import {ExclusiveSMM2GameStylePropertyInAnyStyle} from './ExclusiveSMM2GameStylePropertyInAnyStyle';
import {ExclusiveSMM2Property}                    from './ExclusiveSMM2Property';
import {ExclusiveSMM2ThemePropertyInAnyStyle}     from './ExclusiveSMM2ThemePropertyInAnyStyle';
import {ExclusiveSMM2TimePropertyInAnyStyle}      from './ExclusiveSMM2TimePropertyInAnyStyle';

export interface ExclusiveSMM2PropertyInAnyStyle
    extends ExclusiveSMM2Property, ExclusiveSMM2GamePropertyInAnyStyle, ExclusiveSMM2GameStylePropertyInAnyStyle, ExclusiveSMM2ThemePropertyInAnyStyle, ExclusiveSMM2TimePropertyInAnyStyle {

    get gameContainer(): ExclusiveSMM2GamePropertyInAnyStyle


    get gameStyleContainer(): ExclusiveSMM2GameStylePropertyInAnyStyle


    get themeContainer(): ExclusiveSMM2ThemePropertyInAnyStyle


    get timeContainer(): ExclusiveSMM2TimePropertyInAnyStyle

    get isInNightTheme(): boolean

}
