import {Entity}                        from './Entity';
import {IsInOnlySMM2GameProperty}      from '../properties/IsInOnlySMM2GameProperty';
import {IsInOnlySMM2GameStyleProperty} from '../properties/IsInOnlySMM2GameStyleProperty';
import {IsInOnlySMM2Property}          from '../properties/IsInOnlySMM2Property';
import {IsInOnlySMM2ThemeProperty}     from '../properties/IsInOnlySMM2ThemeProperty';
import {IsInOnlySMM2TimeProperty}      from '../properties/IsInOnlySMM2TimeProperty';

export interface SMM2ExclusiveEntity
    extends Entity, IsInOnlySMM2Property, IsInOnlySMM2GameProperty, IsInOnlySMM2GameStyleProperty, IsInOnlySMM2ThemeProperty, IsInOnlySMM2TimeProperty {

    isInPropertyContainer: IsInOnlySMM2Property

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

    isInTimeContainer: IsInOnlySMM2TimeProperty
    isInNightTheme: boolean

}
