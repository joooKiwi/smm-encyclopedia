import {ExclusiveSMM2GamePropertyInSM3DW}      from './ExclusiveSMM2GamePropertyInSM3DW';
import {ExclusiveSMM2GameStylePropertyInSM3DW} from './ExclusiveSMM2GameStylePropertyInSM3DW';
import {ExclusiveSMM2Property}                 from './ExclusiveSMM2Property';
import {ExclusiveSMM2ThemeProperty}            from './ExclusiveSMM2ThemeProperty';
import {ExclusiveSMM2TimePropertyInSM3DW}      from './ExclusiveSMM2TimePropertyInSM3DW';

export interface ExclusiveSMM2PropertyInSM3DW
    extends ExclusiveSMM2Property, ExclusiveSMM2GamePropertyInSM3DW, ExclusiveSMM2GameStylePropertyInSM3DW, ExclusiveSMM2ThemeProperty, ExclusiveSMM2TimePropertyInSM3DW {

    gameContainer: ExclusiveSMM2GamePropertyInSM3DW

    gameStyleContainer: ExclusiveSMM2GameStylePropertyInSM3DW
    isInSuperMarioBrosStyle: false
    isInSuperMarioBros3Style: false
    isInSuperMarioWorldStyle: false
    isInNewSuperMarioBrosUStyle: false
    isInSuperMario3DWorldStyle: true

    themeContainer: ExclusiveSMM2ThemeProperty

    timeContainer: ExclusiveSMM2TimePropertyInSM3DW
    isInDayTheme: true
    isInNightTheme: null

}
