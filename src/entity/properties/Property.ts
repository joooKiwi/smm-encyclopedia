import {GameProperty}      from './GameProperty';
import {GameStyleProperty} from './GameStyleProperty';
import {ThemeProperty}     from './ThemeProperty';
import {TimeProperty}      from './TimeProperty';

export interface Property
    extends GameProperty, GameStyleProperty, ThemeProperty, TimeProperty {

    get gameContainer(): GameProperty

    get gameStyleContainer(): GameStyleProperty

    get themeContainer(): ThemeProperty

    get timeContainer(): TimeProperty

}
