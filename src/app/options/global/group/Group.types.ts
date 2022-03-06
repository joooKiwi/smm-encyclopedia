import type {ReactProperty}     from '../../../../util/react/ReactProperty';
import type {Games}             from '../../../../core/game/Games';
import type {GameStyles}        from '../../../../core/gameStyle/GameStyles';
import type {GlobalAppOption}   from '../GlobalAppOption';
import type {GlobalThemeOption} from '../GlobalThemeOption';
import type {Themes}            from '../../../../core/theme/Themes';
import type {Times}             from '../../../../core/time/Times';

export interface GroupProperties<T extends PossibleElement, U extends PossibleOptionValue, >
    extends ReactProperty {

    id: PossibleId

    elements: readonly SingleElement<T, U>[]

}

export type PossibleId = |'games'|'gameStyles'|'times'|'themes';
export type PossibleElement = | Games | GameStyles | Times | Themes;
export type PossibleOptionValue = | boolean | GlobalThemeOption;
export type OnClickCallback = () => void;

export type SingleElement<T extends PossibleElement, U extends PossibleOptionValue, >
    = | readonly [element: T, option: GlobalAppOption<U>,]
      | readonly [element: T, option: GlobalAppOption<U>, isDisabled: | boolean | null,]
      | readonly [element: T, option: GlobalAppOption<U>, isDisabled: [boolean, boolean,],]
      | readonly [element: T, option: GlobalAppOption<U>, isDisabled: | boolean | null, onClickCallback?: OnClickCallback,];
