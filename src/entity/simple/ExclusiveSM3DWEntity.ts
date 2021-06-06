import {ExclusiveSMM2Entity}                   from './ExclusiveSMM2Entity';
import {ExclusiveSMM2PropertyInSM3DW}          from '../properties/exclusive/ExclusiveSMM2PropertyInSM3DW';
import {ExclusiveSMM2GamePropertyInSM3DW}      from '../properties/exclusive/ExclusiveSMM2GamePropertyInSM3DW';
import {ExclusiveSMM2GameStylePropertyInSM3DW} from '../properties/exclusive/ExclusiveSMM2GameStylePropertyInSM3DW';
import {ExclusiveSMM2ThemePropertyInSM3DW}     from '../properties/exclusive/ExclusiveSMM2ThemePropertyInSM3DW';
import {ExclusiveSMM2TimePropertyInSM3DW}      from '../properties/exclusive/ExclusiveSMM2TimePropertyInSM3DW';

export interface ExclusiveSM3DWEntity
    extends ExclusiveSMM2Entity, ExclusiveSMM2PropertyInSM3DW, ExclusiveSMM2GamePropertyInSM3DW, ExclusiveSMM2GameStylePropertyInSM3DW, ExclusiveSMM2ThemePropertyInSM3DW, ExclusiveSMM2TimePropertyInSM3DW {

    propertyContainer: ExclusiveSMM2PropertyInSM3DW

    gameContainer: ExclusiveSMM2GamePropertyInSM3DW

    gameStyleContainer: ExclusiveSMM2GameStylePropertyInSM3DW
    isInSuperMarioBrosStyle: false
    isInSuperMarioBros3Style: false
    isInSuperMarioWorldStyle: false
    isInNewSuperMarioBrosUStyle: false
    isInSuperMario3DWorldStyle: true

    themeContainer: ExclusiveSMM2ThemePropertyInSM3DW

    timeContainer: ExclusiveSMM2TimePropertyInSM3DW
    isInDayTheme: true
    isInNightTheme: null

}