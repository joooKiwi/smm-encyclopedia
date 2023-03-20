import type {Location} from 'history'

import type {EveryPossibleRouteNames, EveryPossibleRoutePartialPaths, EveryPossibleRoutes} from 'route/everyRoutes.types'

import {ProjectLanguages}  from 'lang/ProjectLanguages'
import {everySimpleRoutes} from 'route/everyRoutes'
import {assert}            from 'util/utilitiesMethods'

export function route(partialPath: EveryPossibleRoutePartialPaths, language?: ProjectLanguages,): EveryPossibleRoutes
export function route(name: EveryPossibleRouteNames, language?: ProjectLanguages,): EveryPossibleRoutes
export function route(partialPath_or_name: | EveryPossibleRoutePartialPaths | EveryPossibleRouteNames, language?: ProjectLanguages,): EveryPossibleRoutes
export function route({pathname,}: Location, languageToReplace?: ProjectLanguages,): EveryPossibleRoutes
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
 * @param partialPath_or_name_or_location the {@link Location location} or the {@link EveryPossibleRoutePartialPaths partial path (EveryPossibleRoutePartialPaths)} or the {@link EveryPossibleRouteNames name (EveryPossibleRouteNames)}
 * @param language the language used (or by default {@link ProjectLanguages.current the current language})
 */
export function route(partialPath_or_name_or_location: PossibleParameterReceived, language: ProjectLanguages = ProjectLanguages.current,): EveryPossibleRoutes {
    if (typeof partialPath_or_name_or_location === 'string') {
        const simpleRoute = everySimpleRoutes.find(simpleRoute => simpleRoute.path === partialPath_or_name_or_location || simpleRoute.name === partialPath_or_name_or_location)

        assert(simpleRoute != null, `The route could not be found with the value "${partialPath_or_name_or_location}".`,)
        return `/${language.projectAcronym}${simpleRoute.path}`
    }

    const {pathname: pathName} = partialPath_or_name_or_location as Location

    return language.isCurrent
        ? pathName as EveryPossibleRoutes
        : pathName.replace(ProjectLanguages.current.projectAcronym, language.projectAcronym,) as EveryPossibleRoutes
}

type PossibleParameterReceived = | EveryPossibleRoutePartialPaths | EveryPossibleRouteNames | Location
