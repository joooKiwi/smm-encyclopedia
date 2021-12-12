import type {Entity, PossibleOtherEntities} from '../Entity';
import type {GameStyleReferences}           from './GameStyleReferences';
import type {GameStyles}                    from '../../gameStyle/GameStyles';
import type {ThemeReferences}               from './ThemeReferences';
import type {Themes}                        from '../../theme/Themes';
import type {TimeReferences}                from './TimeReferences';
import type {Times}                         from '../../time/Times';

export interface EntityReferences
    extends GameStyleReferences, ThemeReferences, TimeReferences {

    getReferenceFrom(gameStyle: GameStyles,): PossibleOtherEntities

    getReferenceFrom(theme: Themes,): PossibleOtherEntities

    getReferenceFrom(time: Times,): PossibleOtherEntities

    getReferenceFrom(gameStyleOrThemeOrTime: | GameStyles | Themes | Times,): PossibleOtherEntities


    get everyReferences(): readonly Entity[]

}
