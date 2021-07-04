import {ExclusiveSMM2GamePropertyInSM3DW}      from './ExclusiveSMM2GamePropertyInSM3DW';
import {ExclusiveSMM2GameStylePropertyInSM3DW} from './ExclusiveSMM2GameStylePropertyInSM3DW';
import {ExclusiveSMM2Property}                 from './ExclusiveSMM2Property';
import {ExclusiveSMM2ThemeProperty}            from './ExclusiveSMM2ThemeProperty';
import {ExclusiveSMM2TimePropertyInSM3DW}      from './ExclusiveSMM2TimePropertyInSM3DW';

export interface ExclusiveSMM2PropertyInSM3DW
    extends ExclusiveSMM2Property, ExclusiveSMM2GamePropertyInSM3DW, ExclusiveSMM2GameStylePropertyInSM3DW, ExclusiveSMM2ThemeProperty, ExclusiveSMM2TimePropertyInSM3DW {

    get gameContainer(): ExclusiveSMM2GamePropertyInSM3DW


    get gameStyleContainer(): ExclusiveSMM2GameStylePropertyInSM3DW

    get isInSuperMarioBrosStyle(): false

    get isInSuperMarioBros3Style(): false

    get isInSuperMarioWorldStyle(): false

    get isInNewSuperMarioBrosUStyle(): false

    get isInSuperMario3DWorldStyle(): true


    get themeContainer(): ExclusiveSMM2ThemeProperty


    get timeContainer(): ExclusiveSMM2TimePropertyInSM3DW

    get isInDayTheme(): true

    get isInNightTheme(): null

}
