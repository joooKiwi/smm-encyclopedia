import type {everySimpleRoutes} from './everyRoutes'
import type {PossibleAcronym}   from '../lang/ProjectLanguages.types'
import type {SimpleRoute}       from './SimpleRoute'

export type EveryPossibleRoutes = `/${PossibleAcronym}${EveryPossibleRoutePartialPaths}`

export type EveryPossibleRoutePartialPaths = typeof everySimpleRoutes[number]['path']
export type EveryPossibleRouteNames = typeof everySimpleRoutes[number]['name']

export type EveryPossibleRouteInstance = SimpleRoute<EveryPossibleRouteNames, EveryPossibleRoutePartialPaths>
