import {IsInGameProperty}      from './IsInGameProperty';
import {IsInGameStyleProperty} from './IsInGameStyleProperty';
import {IsInThemeProperty}     from './IsInThemeProperty';

export interface IsInProperty
    extends IsInGameProperty, IsInGameStyleProperty, IsInThemeProperty {

    isInGameContainer: IsInGameProperty

    isInGameStyleContainer: IsInGameStyleProperty

    isInThemeContainer: IsInThemeProperty

    isInDayTheme: boolean
    isInNightTheme: null | boolean

}
