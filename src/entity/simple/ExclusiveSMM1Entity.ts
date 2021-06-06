import {Entity}                         from './Entity';
import {ExclusiveSMM1GameProperty}      from '../properties/exclusive/ExclusiveSMM1GameProperty';
import {ExclusiveSMM1GameStyleProperty} from '../properties/exclusive/ExclusiveSMM1GameStyleProperty';
import {ExclusiveSMM1Property}          from '../properties/exclusive/ExclusiveSMM1Property';
import {ExclusiveSMM1ThemeProperty}     from '../properties/exclusive/ExclusiveSMM1ThemeProperty';
import {ExclusiveSMM1TimeProperty}      from '../properties/exclusive/ExclusiveSMM1TimeProperty';

export interface ExclusiveSMM1Entity
    extends Entity, ExclusiveSMM1Property, ExclusiveSMM1GameProperty, ExclusiveSMM1GameStyleProperty, ExclusiveSMM1ThemeProperty, ExclusiveSMM1TimeProperty {

    propertyContainer: ExclusiveSMM1Property

    gameContainer: ExclusiveSMM1GameProperty
    isInSuperMarioMaker1: true
    isInSuperMarioMaker2: false

    gameStyleContainer: ExclusiveSMM1GameStyleProperty
    isInSuperMarioBrosStyle: true
    isInSuperMarioBros3Style: false
    isInSuperMarioWorldStyle: false
    isInNewSuperMarioBrosUStyle: false
    isInSuperMario3DWorldStyle: null

    themeContainer: ExclusiveSMM1ThemeProperty
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

    timeContainer: ExclusiveSMM1TimeProperty
    isInDayTheme: true
    isInNightTheme: null

}
