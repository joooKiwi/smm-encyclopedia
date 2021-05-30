import {IsInProperty}                  from './IsInProperty';
import {IsInOnlySMM2GameProperty}      from './IsInOnlySMM2GameProperty';
import {IsInOnlySMM2GameStyleProperty} from './IsInOnlySMM2GameStyleProperty';
import {IsInOnlySMM2ThemeProperty}     from './IsInOnlySMM2ThemeProperty';

export interface IsInOnlySMM2Property
    extends IsInProperty, IsInOnlySMM2GameProperty, IsInOnlySMM2GameStyleProperty, IsInOnlySMM2ThemeProperty {

    isInGameContainer: IsInOnlySMM2GameProperty
    isInSuperMarioMaker1: false
    isInSuperMarioMaker2: true

    isInGameStyleContainer: IsInOnlySMM2GameStyleProperty
    isInSuperMario3DWorldStyle: boolean

    isInThemeContainer: IsInOnlySMM2ThemeProperty
    isInDesertTheme: boolean
    isInSnowTheme: boolean
    isInSkyTheme: boolean
    isInForestTheme: boolean

}