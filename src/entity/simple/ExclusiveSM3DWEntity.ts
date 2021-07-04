import {ExclusiveSMM2Entity}                   from './ExclusiveSMM2Entity';
import {ExclusiveSMM2PropertyInSM3DW}          from '../properties/exclusive/ExclusiveSMM2PropertyInSM3DW';
import {ExclusiveSMM2GamePropertyInSM3DW}      from '../properties/exclusive/ExclusiveSMM2GamePropertyInSM3DW';
import {ExclusiveSMM2GameStylePropertyInSM3DW} from '../properties/exclusive/ExclusiveSMM2GameStylePropertyInSM3DW';
import {ExclusiveSMM2ThemePropertyInSM3DW}     from '../properties/exclusive/ExclusiveSMM2ThemePropertyInSM3DW';
import {ExclusiveSMM2TimePropertyInSM3DW}      from '../properties/exclusive/ExclusiveSMM2TimePropertyInSM3DW';

export interface ExclusiveSM3DWEntity
    extends ExclusiveSMM2Entity, ExclusiveSMM2PropertyInSM3DW, ExclusiveSMM2GamePropertyInSM3DW, ExclusiveSMM2GameStylePropertyInSM3DW, ExclusiveSMM2ThemePropertyInSM3DW, ExclusiveSMM2TimePropertyInSM3DW {

    get propertyContainer(): ExclusiveSMM2PropertyInSM3DW


    get gameContainer(): ExclusiveSMM2GamePropertyInSM3DW


    get gameStyleContainer(): ExclusiveSMM2GameStylePropertyInSM3DW

    get isInSuperMarioBrosStyle(): false

    get isInSuperMarioBros3Style(): false

    get isInSuperMarioWorldStyle(): false

    get isInNewSuperMarioBrosUStyle(): false

    get isInSuperMario3DWorldStyle(): true


    get themeContainer(): ExclusiveSMM2ThemePropertyInSM3DW


    get timeContainer(): ExclusiveSMM2TimePropertyInSM3DW

    get isInDayTheme(): true

    get isInNightTheme(): null

}