import type {Array} from '@joookiwi/type'

import type {ViewDisplays}      from 'app/withInterpreter/ViewDisplays'
import type {PossibleRouteName} from 'route/EveryRoutes.types'
import type {ReactProperties}   from 'util/react/ReactProperties'

export interface DisplayButtonGroupProperties
    extends ReactProperties {

    /** The React key (applicable to both "button group" & button) */
    readonly reactKey: string

    /** The views applicable to the button group (with its own route name) */
    readonly views: Array<ViewAndRouteName>

    /** The current type used for the group (if the route is the default one) */
    readonly currentView: ViewDisplays

}

export interface DisplayButtonProperties
    extends ReactProperties {

    /** The React key */
    readonly reactKey: string

    /** The views on the button */
    readonly view: ViewDisplays

    /** The current view displayed (if the route is the default one) */
    readonly currentView: ViewDisplays

    /** The route path on the button */
    readonly routeName: PossibleRouteName

}

export type ViewAndRouteName = readonly [ViewDisplays, PossibleRouteName,]
