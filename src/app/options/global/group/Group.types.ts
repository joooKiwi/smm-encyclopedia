import type {Games}             from '../../../../core/game/Games'
import type {GameStyles}        from '../../../../core/gameStyle/GameStyles'
import type {GlobalAppOption}   from '../GlobalAppOption'
import type {GlobalThemeOption} from '../GlobalThemeOption'
import type {NullOr}            from '../../../../util/types'
import type {ReactProperties}   from '../../../../util/react/ReactProperties'
import type {Themes}            from '../../../../core/theme/Themes'
import type {Times}             from '../../../../core/time/Times'

export interface GroupProperties<T extends PossibleElement, U extends PossibleOptionValue, >
    extends ReactProperties {

    id: PossibleId

    isHidden?: boolean

    elements: readonly SingleElement<T, U>[]

}

export type PossibleId = | 'games' | 'gameStyles' | 'times' | 'themes'
export type PossibleElement = | Games | GameStyles | Times | Themes
export type PossibleOptionValue = | boolean | GlobalThemeOption
export type OnClickCallback = () => void

type PossibleIsDisabled = | boolean | [boolean, boolean,]
type PossibleIsHidden = boolean

export type SingleElement<T extends PossibleElement, U extends PossibleOptionValue, >
    = | readonly [element: T, option: GlobalAppOption<U>,]
      | readonly [element: T, option: GlobalAppOption<U>, isDisabled: PossibleIsDisabled,]
      | readonly [element: T, option: GlobalAppOption<U>, isDisabled: NullOr<PossibleIsDisabled>, isHidden: PossibleIsHidden,]
      | readonly [element: T, option: GlobalAppOption<U>, isDisabled: NullOr<PossibleIsDisabled>, isHidden: NullOr<PossibleIsHidden>, onClickCallback?: OnClickCallback,]
