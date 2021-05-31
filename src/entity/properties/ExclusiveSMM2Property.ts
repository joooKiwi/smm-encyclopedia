import {Property}                      from './Property';
import {ExclusiveSMM2GameProperty}      from './ExclusiveSMM2GameProperty';
import {ExclusiveSMM2GameStyleProperty} from './ExclusiveSMM2GameStyleProperty';
import {ExclusiveSMM2ThemeProperty} from './ExclusiveSMM2ThemeProperty';
import {ExclusiveSMM2TimeProperty}  from './ExclusiveSMM2TimeProperty';

export interface ExclusiveSMM2Property
    extends Property, ExclusiveSMM2GameProperty, ExclusiveSMM2GameStyleProperty, ExclusiveSMM2ThemeProperty, ExclusiveSMM2TimeProperty {

    gameContainer: ExclusiveSMM2GameProperty
    isInSuperMarioMaker1: false
    isInSuperMarioMaker2: true

    gameStyleContainer: ExclusiveSMM2GameStyleProperty
    isInSuperMario3DWorldStyle: boolean

    themeContainer: ExclusiveSMM2ThemeProperty
    isInDesertTheme: boolean
    isInSnowTheme: boolean
    isInSkyTheme: boolean
    isInForestTheme: boolean

    timeContainer: ExclusiveSMM2TimeProperty

}