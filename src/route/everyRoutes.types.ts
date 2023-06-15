import type {PossibleAcronym}   from 'lang/ProjectLanguages.types'
import type {everySimpleRoutes} from 'route/everyRoutes'
import type {Route}             from 'route/instance/Route'

export type EveryPossibleRoutes = `/${PossibleAcronym}${EveryPossibleRoutePartialPaths}`

/** The {@link Route.path partial path} of a route (without the language before) */
export type EveryPossibleRoutePartialPaths = typeof everySimpleRoutes[number]['path']
/** Every possible route {@link Route.name name} applicable to the project */
export type EveryPossibleRouteNames = typeof everySimpleRoutes[number]['name']
/** Every possible route {@link Route.simpleName simple name} applicable to the project */
export type EveryPossibleRouteSimpleNames = typeof everySimpleRoutes[number]['simpleName']

export type EveryPossibleRouteInstance = Route<EveryPossibleRouteSimpleNames, EveryPossibleRouteNames, EveryPossibleRoutePartialPaths>
