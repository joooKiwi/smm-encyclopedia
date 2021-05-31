import {GameProperty}      from './GameProperty';
import {GameStyleProperty} from './GameStyleProperty';
import {ThemeProperty} from './ThemeProperty';
import {TimeProperty}  from './TimeProperty';

export interface Property
    extends GameProperty, GameStyleProperty, ThemeProperty, TimeProperty {

    isInGameContainer: GameProperty
    isInGameStyleContainer: GameStyleProperty
    isInThemeContainer: ThemeProperty
    isInTimeContainer: TimeProperty

}
