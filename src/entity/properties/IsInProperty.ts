import {IsInGameProperty}      from './IsInGameProperty';
import {IsInGameStyleProperty} from './IsInGameStyleProperty';
import {IsInThemeProperty}     from './IsInThemeProperty';

export interface IsInProperty
    extends IsInGameProperty, IsInGameStyleProperty, IsInThemeProperty {

    isInGame: IsInGameProperty

    isInGameStyle: IsInGameStyleProperty

    isInTheme: IsInThemeProperty

    isInDayTheme: boolean
    isInNightTheme: null | boolean

}
