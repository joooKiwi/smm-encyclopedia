import {Property}                      from './Property';
import {ExclusiveSMM1GameProperty}      from './ExclusiveSMM1GameProperty';
import {ExclusiveSMM1GameStyleProperty} from './ExclusiveSMM1GameStyleProperty';
import {ExclusiveSMM1ThemeProperty} from './ExclusiveSMM1ThemeProperty';
import {ExclusiveSMM1TimeProperty}  from './ExclusiveSMM1TimeProperty';

export interface ExclusiveSMM1Property
    extends Property, ExclusiveSMM1GameProperty, ExclusiveSMM1GameStyleProperty, ExclusiveSMM1ThemeProperty, ExclusiveSMM1TimeProperty {

    isInGameContainer: ExclusiveSMM1GameProperty
    isInSuperMarioMaker1: true
    isInSuperMarioMaker2: false

    isInGameStyleContainer: ExclusiveSMM1GameStyleProperty
    isInSuperMarioBrosStyle: true
    isInSuperMarioBros3Style: false
    isInSuperMarioWorldStyle: false
    isInNewSuperMarioBrosUStyle: false
    isInSuperMario3DWorldStyle: null

    isInThemeContainer: ExclusiveSMM1ThemeProperty
    isInGroundTheme: true
    isInUndergroundTheme: true
    isInUnderwaterTheme: true
    isInDesertTheme: null
    isInSnowTheme: null
    isInSkyTheme: null
    isInForestTheme: null
    isInGhostHouseTheme: true
    isInAirshipTheme: true
    isInCastleTheme: true

    isInTimeContainer: ExclusiveSMM1TimeProperty
    isInDayTheme: true
    isInNightTheme: null

}