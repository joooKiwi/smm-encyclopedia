import type {PossibleAcronym}   from 'lang/ProjectLanguages.types'
import type {everySimpleRoutes} from 'route/everyRoutes'
import type {SimpleRoute}       from 'route/SimpleRoute'

export type EveryPossibleRoutes = `/${PossibleAcronym}${EveryPossibleRoutePartialPaths}`

/** The partial path of a route (without the language before) */
export type EveryPossibleRoutePartialPaths = typeof everySimpleRoutes[number]['path']
/** Every possible route name applicable to the project */
export type EveryPossibleRouteNames = typeof everySimpleRoutes[number]['name']

export type EveryPossibleRouteInstance = SimpleRoute<EveryPossibleRouteNames, EveryPossibleRoutePartialPaths>
