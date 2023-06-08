import type {Location} from 'history'

import type {EveryPossibleRouteNames, EveryPossibleRoutePartialPaths, EveryPossibleRoutes} from 'route/everyRoutes.types'

import {ProjectLanguages}  from 'lang/ProjectLanguages'
import {everySimpleRoutes} from 'route/everyRoutes'
import {Games}             from 'core/game/Games'

/**
 * Retrieve the route URL from a {@link EveryPossibleRouteNames name}
 * and replace the {@link ProjectLanguages language} if it has been received
 *
 * @param name Either route {@link EveryPossibleRouteNames name}
 * @param language The language to replace in the url
 */
export function route(name: EveryPossibleRouteNames, language?: ProjectLanguages,): EveryPossibleRoutes
/**
 * Retrieve the route URL from a {@link EveryPossibleRoutePartialPaths partial path}
 * and replace the {@link ProjectLanguages language} if it has been received
 *
 * @param partialPath Either the route {@link EveryPossibleRoutePartialPaths partial path}
 * @param language The language to replace in the url
 */
export function route(partialPath: EveryPossibleRoutePartialPaths, language?: ProjectLanguages,): EveryPossibleRoutes
/**
 * Retrieve the route URL from a {@link EveryPossibleRoutePartialPaths partial path} or {@link EveryPossibleRouteNames name}
 * and replace the {@link ProjectLanguages language} if it has been received
 *
 * @param partialPath_or_name Either the {@link EveryPossibleRoutePartialPaths partial path} or {@link EveryPossibleRouteNames name}
 * @param language The language to replace in the url
 */
export function route(partialPath_or_name: | EveryPossibleRoutePartialPaths | EveryPossibleRouteNames, language?: ProjectLanguages,): EveryPossibleRoutes
/**
 * Retrieve the route URL from a {@link Location} via its {@link Location.pathname path}
 * and replace the {@link ProjectLanguages language} if it has been received
 *
 * @param location The {@link Location} to retrieve its path
 * @param languageToReplace The language to replace in the url
 */
export function route({pathname,}: Location, languageToReplace?: ProjectLanguages,): EveryPossibleRoutes
/**
 * Retrieve the route from a {@link EveryPossibleRoutePartialPaths partial path}
 * or a {@link EveryPossibleRouteNames name}.
 *
 * It can throw an {@link EvalError} if the route received is not within
 * the possible values of {@link everySimpleRoutes every simple routes}.
 *
 * @param partialPath_or_name_or_location the {@link Location location} or the {@link EveryPossibleRoutePartialPaths partial path (EveryPossibleRoutePartialPaths)} or the {@link EveryPossibleRouteNames name (EveryPossibleRouteNames)}
 * @param language the language used (or by default {@link ProjectLanguages.current the current language})
 * @throws {ReferenceError} The route could not be found by the path or name
 * @throws {ReferenceError} The route could not be found with the games
 */
export function route(partialPath_or_name_or_location: | EveryPossibleRoutePartialPaths | EveryPossibleRouteNames | Location, language: ProjectLanguages = ProjectLanguages.current,): EveryPossibleRoutes {
    if (typeof partialPath_or_name_or_location === 'string') {
        const simpleRoute = everySimpleRoutes.find(it => it.path === partialPath_or_name_or_location || it.name === partialPath_or_name_or_location)
        if (simpleRoute == null)
            throw new ReferenceError(`The route could not be found with the value "${partialPath_or_name_or_location}".`)
        if ('redirectPath' in simpleRoute)
            return simpleRoute.redirectPath as EveryPossibleRoutes

        if (Games.selectedGames.hasAll(...simpleRoute.games,))
            return `/${language.projectAcronym}${simpleRoute.path}`

        const expectedPath = `/${Games.selectedGamesAsUrlValue}${simpleRoute.path}`,
            routeWithGames = everySimpleRoutes.find(it => it.path === expectedPath)
        if (routeWithGames == null)
            throw new ReferenceError(`The route could not be found by the url "${expectedPath}".`)

        return `/${language.projectAcronym}${routeWithGames.path}`
    }

    const {pathname: pathName} = partialPath_or_name_or_location as Location

    return language.isCurrent
        ? pathName as EveryPossibleRoutes
        : pathName.replace(ProjectLanguages.current.projectAcronym, language.projectAcronym,) as EveryPossibleRoutes
}
