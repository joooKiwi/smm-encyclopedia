import type {ViewDisplays}            from 'app/withInterpreter/ViewDisplays'
import type {EveryPossibleRouteNames} from 'routes/everyRoutes.types'
import type {ReactProperties}         from 'util/react/ReactProperties'

export interface DisplayButtonGroupProperties
    extends ReactProperties {

    /** The React key (applicable to both "button group" & button) */
    reactKey: string

    /** The views applicable to the button group (with its own route name) */
    views: readonly ViewAndRouteName[]

    /** The current type used for the group (if the route is the default one) */
    currentView: ViewDisplays

}

export interface DisplayButtonProperties
    extends ReactProperties {

    /** The React key */
    reactKey: string

    /** The views on the button */
    view: ViewDisplays

    /** The current view displayed (if the route is the default one) */
    currentView: ViewDisplays

    /** The route path on the button */
    routeName: EveryPossibleRouteNames

}

export type ViewAndRouteName = readonly [ViewDisplays, EveryPossibleRouteNames,]