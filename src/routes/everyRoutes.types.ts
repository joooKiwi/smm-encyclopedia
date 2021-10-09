import type {everySimpleRoutes}               from './everyRoutes';
import type {PossibleProjectLanguagesAcronym} from '../lang/EveryLanguages.types';

export type EveryPossibleRoutes = `/${PossibleProjectLanguagesAcronym}${EveryPossibleRoutePartialPaths}`;

export type EveryPossibleRoutePartialPaths = typeof everySimpleRoutes[number]['path'];
export type EveryPossibleRouteNames = typeof everySimpleRoutes[number]['name'];
