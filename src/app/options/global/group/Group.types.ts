import type {GlobalAppOption}   from 'app/options/global/GlobalAppOption'
import type {GlobalThemeOption} from 'app/options/global/GlobalThemeOption'
import type {Games}             from 'core/game/Games'
import type {GameStyles}        from 'core/gameStyle/GameStyles'
import type {Themes}            from 'core/theme/Themes'
import type {Times}             from 'core/time/Times'
import type {ReactProperties}   from 'util/react/ReactProperties'

export interface GroupProperties<T extends PossibleElement, U extends PossibleOptionValue, >
    extends ReactProperties {

    readonly id: PossibleId

    readonly isHidden?: boolean

    readonly elements: readonly SingleElement<T, U>[]

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
