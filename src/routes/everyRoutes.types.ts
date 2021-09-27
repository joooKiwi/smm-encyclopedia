import type {everySimpleRoutes}               from './everyRoutes';
import type {PossibleProjectLanguagesAcronym} from '../lang/EveryLanguages.types';

export type EveryPossibleRoutes = `/${PossibleProjectLanguagesAcronym}${typeof everySimpleRoutes[number]['path']}`;
