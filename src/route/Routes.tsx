import type {LoaderFunctionArgs}                    from 'react-router-dom/dist'
import {createHashRouter, redirect, RouterProvider} from 'react-router-dom/dist'
import {Suspense}                                   from 'react'

import type {EveryPossibleRouteInstance} from 'route/everyRoutes.types'

import LoadingApp          from 'app/LoadingApp'
import {ViewDisplays}      from 'app/withInterpreter/ViewDisplays'
import {Games}             from 'core/game/Games'
import {ProjectLanguages}  from 'lang/ProjectLanguages'
import {everySimpleRoutes} from 'route/everyRoutes'
import {route}             from 'route/route'
import {isArrayEquals}     from 'util/utilitiesMethods'

const /** Every {@link ProjectLanguages project language} as an {@link Array} */
    languages = ProjectLanguages.values.toArray(),
    /**
     * Every route encapsulated in a hash router (for GitHub).
     *
     * It utilise at first the {@link ProjectLanguages} {@link ProjectLanguages.acronym acronym} in the path.
     *
     * If there is no {@link ProjectLanguages.acronym acronym} at first,
     * it should automatically detect the language on the device <i>(to be added)</i>.
     *
     * Also, it will create a specific route depending on the {@link Games game(s)} to be displayed.
     *
     * Then, by using the routes ({@link everySimpleRoutes}), the path are applied in the parameter.
     *
     * @see https://reactrouter.com/main/routers/create-hash-router
     */
    router = createHashRouter([{
        caseSensitive: false,
        path: '/',
        children: [
            everySimpleRoutes.map(route => ({
                path: route.path,
                loader: () => redirectToPathWithDefaultLanguage(route),
            })),

            languages.map(language => ({
                path: `/${language.projectAcronym}` as const,
                children: everySimpleRoutes.map(route => ({
                    path: `/${language.projectAcronym}${route.path}` as const,
                    element: <Suspense fallback={<LoadingApp/>}>{route.renderCallback()}</Suspense>,
                    loader: () => setDefaultValues(route,)
                })),
                loader: () => redirectToHomeIfNotCurrentLanguage(language),
            })),
        ].flat(),
        loader: loaderArguments => redirectToPathIfFound(loaderArguments),
    },], {basename: '/',},)

console.log(router.routes[0].children)

/** @reactComponent */
export default function Routes() {
    return <RouterProvider router={router} fallbackElement={<LoadingApp/>}/>//TODO change the loading app to have a different visual than afterward
}


/**
 * Redirect to a path specified by the {@link Request.url url} if a route has been found
 * via the {@link everySimpleRoutes} → {@link Route}.{@link Route.path path}.
 *
 * It will verify the routes depending on multiple factors:
 *  - The {@link ViewDisplays view display}
 *  - The {@link Games games}
 *
 * @param loaderArguments The arguments to retrieve the {@link Request request} {@link Request.url url}
 *
 * @note If the {@link ProjectLanguages.current current language} has been set or the path of the url is the <b>home page</b>, then, no redirection is necessary
 * @throws {TypeError} The route (with a default path & a {@link ViewDisplays} is not present <i>(this should never happen)</i>
 * @throws {Response} The route encapsulated in a response
 */
function redirectToPathIfFound(loaderArguments: LoaderFunctionArgs,): null {
    if (ProjectLanguages.currentOrNull != null)
        return null // The path is already in place and the current language has been set

    const url = loaderArguments.request.url

    const routeFoundByBasicPath = everySimpleRoutes.find(it => url.endsWith(it.path))
    if (routeFoundByBasicPath == null)
        throw redirect(route('home', ProjectLanguages.default,))

    const languageFound = ProjectLanguages.getInUrl(url)
    if (routeFoundByBasicPath.name === 'home' && languageFound === ProjectLanguages.default)
        return null // The path is "en-AM/home" without setting the current language (by an url redirection)

    ProjectLanguages.current = languageFound ?? ProjectLanguages.default

    const viewDisplayFound = ViewDisplays.getInUrl(url),
        gamesFound = Games.getInUrl(url)
    if (viewDisplayFound == null && gamesFound.length === 0)
        throw redirect(route(routeFoundByBasicPath.name, ProjectLanguages.current,))

    const expectedViewDisplayPath = viewDisplayFound == null ? '' : `/${(ViewDisplays.current = viewDisplayFound).urlValue}` as const,
        expectedGamesPath = gamesFound.length === 0 ? '' : `/${Games.setSelected(gamesFound).selectedGamesAsUrlValue}` as const,
        expectedPath = `${expectedGamesPath}${expectedViewDisplayPath}${routeFoundByBasicPath.path}`,
        routeFoundByArguments = everySimpleRoutes.find(it => it.path === expectedPath)
    if (routeFoundByArguments == null)
        throw new TypeError(`A route should be findable when trying to retrieve from the url "${expectedPath}".`)
    throw redirect(route(routeFoundByArguments.name, ProjectLanguages.current,))
}

/**
 * Redirect to the <b>home page</b> & set the {@link ProjectLanguages.current current language} to the language received
 * if the language {@link ProjectLanguages.isCurrent is not the current language}
 *
 * @param language The language to set the {@link ProjectLanguages.current current language} and validate if it {@link ProjectLanguages.isCurrent is the current language}
 * @throws {Response} The home route encapsulated in a response
 */
function redirectToHomeIfNotCurrentLanguage(language: ProjectLanguages,): null {
    if (language.isCurrent)
        return null
    throw redirect(route('home', ProjectLanguages.current = language,))
}

/**
 * Redirect to the {@link Route.path route path} with the {@link ProjectLanguages.default default language}
 *
 * @param route The route instance to retrieve its {@link Route.name name}
 * @throws {Response} The route path encapsulated in a response
 */
function redirectToPathWithDefaultLanguage({name,}: EveryPossibleRouteInstance,): never {
    throw redirect(route(name, ProjectLanguages.default,))
}

/**
 * Set the default selections <i>(if there are not already selected)</i>
 * for the {@link Games}
 *
 * @param route The {@link Route} to retrieve its {@link Route.path path} & {@link Route.games games}
 */
function setDefaultValues({path, games,}: EveryPossibleRouteInstance,): null {
    if (path.includes('/game-') && games.length !== 0 && !isArrayEquals(Games.selectedGames.toArray(), games,))
        Games.setSelected(games)
    return null
}