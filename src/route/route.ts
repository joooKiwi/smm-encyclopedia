import type {Location} from 'history'

import type {EveryPossibleRouteInstance, EveryPossibleRouteNames, EveryPossibleRoutePartialPaths, EveryPossibleRoutes} from 'route/everyRoutes.types'
import type {Nullable, NullOr}                                                                                         from 'util/types/nullable'
import type {GameCollection}                                                                                           from 'util/collection/GameCollection'

import {ProjectLanguages}  from 'lang/ProjectLanguages'
import {everySimpleRoutes} from 'route/everyRoutes'
import {Games}             from 'core/game/Games'

/**
 * Retrieve the route URL from a {@link EveryPossibleRouteNames name}
 * and replace the {@link ProjectLanguages language} if it has been received
 *
 * @param name Any route {@link EveryPossibleRouteNames name}
 * @param language The {@link ProjectLanguages language} to use in the url
 */
export function routeFromName(name: EveryPossibleRouteNames, language?: Nullable<ProjectLanguages>,): EveryPossibleRoutes {
    language ??= ProjectLanguages.current
    const routes = everySimpleRoutes,
        size = routes.length,
        selectedGames = Games.selectedGames
    let index = -1
    while (++index < size) {
        const simpleRoute = routes[index],
            simpleRouteName = simpleRoute.name
        if (simpleRouteName !== name)
            continue

        const simpleRouteGames = simpleRoute.games
        if (simpleRouteGames.length === 0) { // Create a path with the selected games
            const routeWithSelectedGames = getRouteWithSelectedGames(routes, index, simpleRoute, selectedGames,)
            if (routeWithSelectedGames == null)
                throw ReferenceError(`The route having the name "${name}" could not be found with the selected games (${Games.selectedGames}).`)
            if ('redirectionPath' in routeWithSelectedGames)
                return `/${language.projectAcronym}${routeWithSelectedGames.redirectionPath as EveryPossibleRoutePartialPaths}`
            return `/${language.projectAcronym}${routeWithSelectedGames.path}`
        }
        if (selectedGames.hasAll(...simpleRouteGames,))
            return `/${language.projectAcronym}${simpleRoute.path}`
    }
    throw new ReferenceError(`No route could be found with the name "${name}".`)
}

/**
 * Get the {@link EveryPossibleRouteInstance route} with the {@link Games.selectedGames selected games} from an index reference.
 *
 * At first, it tries to find it before the index, then, after the index.
 *
 * And if nothing has been found, a <b>null</b> is returned
 *
 * @param routes The array for every routes
 * @param startingIndex The index that was found in the {@link routes}
 * @param referenceRoute The {@link EveryPossibleRouteInstance route} that was found in the {@link routes}
 * @param selectedGames A simple reference for the {@link Games.selectedGames selected games}
 */
function getRouteWithSelectedGames(routes: readonly EveryPossibleRouteInstance[], startingIndex: number, referenceRoute: EveryPossibleRouteInstance, selectedGames: GameCollection,): NullOr<EveryPossibleRouteInstance> {
    const size = routes.length,
        simpleName = referenceRoute.simpleName

    let index = startingIndex
    while (--index > 0) {
        const route = routes[index]
        if (!route.name.includes(simpleName))
            break // The name (before the current one) is no longer present in it
        const games = route.games
        if (selectedGames.size !== games.length)
            continue
        if (!selectedGames.hasAll(...games,))
            continue
        return route
    }

    index = startingIndex
    while (++index < size) {
        const route = routes[index]
        if (!route.name.includes(simpleName))
            return null // The name (after the current one) is no longer present in it
        const games = route.games
        if (selectedGames.size !== games.length)
            continue
        if (!selectedGames.hasAll(...games,))
            continue
        return route
    }

    return null // No route were found having the simple name
}


/**
 * Retrieve the route URL from a {@link Location} via its {@link Location.pathname path}
 * and replace the {@link ProjectLanguages language} if it has been received
 *
 * @param location The {@link Location} to retrieve its {@link Location.pathname path}
 * @param language The {@link ProjectLanguages language} to replace in the url
 */
export function routeFromLocation({pathname,}: Location, language?: Nullable<ProjectLanguages>,): EveryPossibleRoutes {
    language ??= ProjectLanguages.current

    return language.isCurrent
        ? pathname as EveryPossibleRoutes
        : pathname.replace(ProjectLanguages.current.projectAcronym, language.projectAcronym,) as EveryPossibleRoutes
}
