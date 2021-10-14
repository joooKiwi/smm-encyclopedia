import type {EveryPossibleRouteNames, EveryPossibleRoutePartialPaths, EveryPossibleRoutes} from './everyRoutes.types';

import {everySimpleRoutes} from './everyRoutes';
import {ProjectLanguages}  from '../lang/ProjectLanguages';

/**
 * <p>
 *  Retrieve the route from a {@link EveryPossibleRoutePartialPaths partial path (EveryPossibleRoutePartialPaths)}
 *  or a {@link EveryPossibleRouteNames name (EveryPossibleRouteNames)}.
 * </p>
 *
 * <p>
 *  It can throw an {@link EvalError} if the route received is not within the possible values of {@link everySimpleRoutes every simple routes}.
 * </p>
 *
 * @param partialPath_or_name the {@link EveryPossibleRoutePartialPaths partial path (EveryPossibleRoutePartialPaths)} or the {@link EveryPossibleRouteNames name (EveryPossibleRouteNames)}
 */
export function route(partialPath_or_name: | EveryPossibleRoutePartialPaths | EveryPossibleRouteNames,): EveryPossibleRoutes {
    const simpleRoute = everySimpleRoutes.find(simpleRoute => simpleRoute.path === partialPath_or_name || simpleRoute.name === partialPath_or_name);

    if (simpleRoute == null)
        throw new EvalError(`The route could not be found with the value "${partialPath_or_name}".`);
    return `/${ProjectLanguages.currentLanguage.projectAcronym}${simpleRoute.path}`;
}
