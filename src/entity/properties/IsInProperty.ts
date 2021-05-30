import {IsInGameProperty}      from './IsInGameProperty';
import {IsInGameStyleProperty} from './IsInGameStyleProperty';
import {IsInThemeProperty}     from './IsInThemeProperty';
import {IsInTimeProperty}      from './IsInTimeProperty';

export interface IsInProperty
    extends IsInGameProperty, IsInGameStyleProperty, IsInThemeProperty, IsInTimeProperty {

    isInGameContainer: IsInGameProperty
    isInGameStyleContainer: IsInGameStyleProperty
    isInThemeContainer: IsInThemeProperty
    isInTimeContainer: IsInTimeProperty

}
