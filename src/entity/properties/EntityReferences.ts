import type {Entity}             from '../simple/Entity';
import type {GameStyleReferences} from './GameStyleReferences';
import type {GameStyles}          from '../gameStyle/GameStyles';
import type {ThemeReferences}     from './ThemeReferences';
import type {Themes}              from '../theme/Themes';
import type {TimeReferences}      from './TimeReferences';
import type {Times}               from '../time/Times';

export interface EntityReferences
    extends GameStyleReferences, ThemeReferences, TimeReferences {

    getReferenceFrom(gameStyle: GameStyles,): Entity

    getReferenceFrom(theme: Themes,): Entity

    getReferenceFrom(time: Times,): Entity

    getReferenceFrom(gameStyleOrThemeOrTime: | GameStyles | Themes | Times,): Entity


    get everyReferences(): readonly Entity[]

}
