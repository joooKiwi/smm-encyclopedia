import type {PossibleAcronym}   from 'lang/ProjectLanguages.types'
import type {everySimpleRoutes} from 'routes/everyRoutes'
import type {SimpleRoute}       from 'routes/SimpleRoute'

export type EveryPossibleRoutes = `/${PossibleAcronym}${EveryPossibleRoutePartialPaths}`

export type EveryPossibleRoutePartialPaths = typeof everySimpleRoutes[number]['path']
export type EveryPossibleRouteNames = typeof everySimpleRoutes[number]['name']

export type EveryPossibleRouteInstance = SimpleRoute<EveryPossibleRouteNames, EveryPossibleRoutePartialPaths>
