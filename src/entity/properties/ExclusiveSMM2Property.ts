import {Property}                      from './Property';
import {ExclusiveSMM2GameProperty}      from './ExclusiveSMM2GameProperty';
import {ExclusiveSMM2GameStyleProperty} from './ExclusiveSMM2GameStyleProperty';
import {ExclusiveSMM2ThemeProperty} from './ExclusiveSMM2ThemeProperty';
import {ExclusiveSMM2TimeProperty}  from './ExclusiveSMM2TimeProperty';

export interface ExclusiveSMM2Property
    extends Property, ExclusiveSMM2GameProperty, ExclusiveSMM2GameStyleProperty, ExclusiveSMM2ThemeProperty, ExclusiveSMM2TimeProperty {

    isInGameContainer: ExclusiveSMM2GameProperty
    isInSuperMarioMaker1: false
    isInSuperMarioMaker2: true

    isInGameStyleContainer: ExclusiveSMM2GameStyleProperty
    isInSuperMario3DWorldStyle: boolean

    isInThemeContainer: ExclusiveSMM2ThemeProperty
    isInDesertTheme: boolean
    isInSnowTheme: boolean
    isInSkyTheme: boolean
    isInForestTheme: boolean

    isInTimeContainer: ExclusiveSMM2TimeProperty

}