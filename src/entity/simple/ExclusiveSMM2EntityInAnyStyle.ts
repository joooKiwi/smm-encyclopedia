import {ExclusiveSMM2Entity}                      from './ExclusiveSMM2Entity';
import {ExclusiveSMM2GamePropertyInAnyStyle}      from '../properties/exclusive/ExclusiveSMM2GamePropertyInAnyStyle';
import {ExclusiveSMM2GameStylePropertyInAnyStyle} from '../properties/exclusive/ExclusiveSMM2GameStylePropertyInAnyStyle';
import {ExclusiveSMM2PropertyInAnyStyle}          from '../properties/exclusive/ExclusiveSMM2PropertyInAnyStyle';
import {ExclusiveSMM2ThemePropertyInAnyStyle}     from '../properties/exclusive/ExclusiveSMM2ThemePropertyInAnyStyle';
import {ExclusiveSMM2TimePropertyInAnyStyle}      from '../properties/exclusive/ExclusiveSMM2TimePropertyInAnyStyle';

export interface ExclusiveSMM2EntityInAnyStyle
    extends ExclusiveSMM2Entity, ExclusiveSMM2PropertyInAnyStyle, ExclusiveSMM2GamePropertyInAnyStyle, ExclusiveSMM2GameStylePropertyInAnyStyle, ExclusiveSMM2ThemePropertyInAnyStyle, ExclusiveSMM2TimePropertyInAnyStyle {

    propertyContainer: ExclusiveSMM2PropertyInAnyStyle

    gameContainer: ExclusiveSMM2GamePropertyInAnyStyle

    gameStyleContainer: ExclusiveSMM2GameStylePropertyInAnyStyle

    themeContainer: ExclusiveSMM2ThemePropertyInAnyStyle

    timeContainer: ExclusiveSMM2TimePropertyInAnyStyle
    isInNightTheme: boolean

}
