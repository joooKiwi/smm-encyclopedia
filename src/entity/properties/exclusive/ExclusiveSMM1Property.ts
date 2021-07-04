import {ExclusiveSMM1GameProperty}      from './ExclusiveSMM1GameProperty';
import {ExclusiveSMM1GameStyleProperty} from './ExclusiveSMM1GameStyleProperty';
import {ExclusiveSMM1ThemeProperty}     from './ExclusiveSMM1ThemeProperty';
import {ExclusiveSMM1TimeProperty}      from './ExclusiveSMM1TimeProperty';
import {Property}                       from '../Property';

export interface ExclusiveSMM1Property
    extends Property, ExclusiveSMM1GameProperty, ExclusiveSMM1GameStyleProperty, ExclusiveSMM1ThemeProperty, ExclusiveSMM1TimeProperty {

    get gameContainer(): ExclusiveSMM1GameProperty

    get isInSuperMarioMaker1(): true

    get isInSuperMarioMaker2(): false


    get gameStyleContainer(): ExclusiveSMM1GameStyleProperty

    get isInSuperMarioBrosStyle(): true

    get isInSuperMarioBros3Style(): false

    get isInSuperMarioWorldStyle(): false

    get isInNewSuperMarioBrosUStyle(): false

    get isInSuperMario3DWorldStyle(): null


    get themeContainer(): ExclusiveSMM1ThemeProperty

    get isInGroundTheme(): true

    get isInUndergroundTheme(): true

    get isInUnderwaterTheme(): true

    get isInDesertTheme(): null

    get isInSnowTheme(): null

    get isInSkyTheme(): null

    get isInForestTheme(): null

    get isInGhostHouseTheme(): true

    get isInAirshipTheme(): true

    get isInCastleTheme(): true


    get timeContainer(): ExclusiveSMM1TimeProperty

    get isInDayTheme(): true

    get isInNightTheme(): null

}