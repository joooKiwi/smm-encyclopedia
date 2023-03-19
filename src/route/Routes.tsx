import type {LoaderFunctionArgs}                    from 'react-router-dom'
import {createHashRouter, redirect, RouterProvider} from 'react-router-dom'
import {Suspense}                                   from 'react'

import LoadingApp          from 'app/LoadingApp'
import {ProjectLanguages}  from 'lang/ProjectLanguages'
import {everySimpleRoutes} from 'route/everyRoutes'
import {route}             from 'route/route'

import type {EveryPossibleRouteInstance} from 'route/everyRoutes.types'
import {ViewDisplays}                    from 'app/withInterpreter/ViewDisplays'

const /** Every {@link ProjectLanguages project language} as an {@link Array} */
    languages = ProjectLanguages.values.toArray(),
    viewDisplays = ViewDisplays.values.toArray(),
    /**
     * Every route encapsulated in a hash router (for GitHub)
     *
     * @see https://reactrouter.com/main/routers/create-hash-router
     */
    router = createHashRouter([{
        caseSensitive: false,
        path: '/',
        children: [
            languages.map(language => ({
                path: `/${language.projectAcronym}` as const,
                children: everySimpleRoutes.map(route => ({
                    path: `/${language.projectAcronym}${route.path}` as const,
                    element: <Suspense fallback={<LoadingApp/>}>{route.renderCallback()}</Suspense>,
                })),
                loader: () => redirectToHomeIfNotCurrentLanguage(language),
            })),

            everySimpleRoutes.map(route => ({
                path: route.path,
                loader: () => redirectToPathWithDefaultLanguage(route),
            })),
        ].flat(),
        loader: loaderArguments => redirectToPathIfFound(loaderArguments),
    },], {basename: '/',},)

/** @reactComponent */
export default function Routes() {
    return <RouterProvider router={router} fallbackElement={<LoadingApp/>}/>//TODO change the loading app to have a different visual than afterward
}


/**
 * Redirect to a path specified by the {@link Request.url url} if a route has been found
 * via the {@link everySimpleRoutes} → {@link SimpleRoute}.{@link SimpleRoute.path path}.
 *
 * And if there is one, it will find a {@link ProjectLanguages language}
 * or use the {@link ProjectLanguages.default default language} if no {@link ProjectLanguages language} has been found in the {@link Request.url url}.
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

    const url = loaderArguments.request.url.toLowerCase()

    const routeFoundByBasicPath = everySimpleRoutes.find(it => url.endsWith(it.path))
    if (routeFoundByBasicPath == null)
        throw redirect(route('home', ProjectLanguages.default,))

    const languageFound = languages.find(it => url.includes(`/${it.projectAcronym.toLowerCase()}/`))
    if (routeFoundByBasicPath.name === 'home' && languageFound === ProjectLanguages.default)
        return null // The path is "en-AM/home" without setting the current language (by an url redirection)

    ProjectLanguages.current = languageFound ?? ProjectLanguages.default

    const viewDisplayFound = viewDisplays.find(it => url.endsWith(`/${it.routeType}${routeFoundByBasicPath.path}`))
    if (viewDisplayFound != null) {
        ViewDisplays.current = viewDisplayFound
        const expectedPath = `/${viewDisplayFound.routeType}${routeFoundByBasicPath.path}`,
            routeFoundByViewDisplayPath = everySimpleRoutes.find(it => it.path === expectedPath)
        if (routeFoundByViewDisplayPath == null)
            throw new TypeError(`A route should be found when trying to retrieve from an url "${expectedPath}".`)
        throw redirect(route(routeFoundByViewDisplayPath.name, ProjectLanguages.current,))
    }

    throw redirect(route(routeFoundByBasicPath.name, ProjectLanguages.current,))
}

/**
 * Redirect to the <b>home page</b> & set the {@link ProjectLanguages.current current language} to the language received
 * if the language {@link ProjectLanguages.isCurrent is not the current language}
 *
 * @param language The language to set the {@link ProjectLanguages.current current language} and validate if it {@link Project.isCurrentLanguage is the current language}
 * @throws {Response} The home route encapsulated in a response
 */
function redirectToHomeIfNotCurrentLanguage(language: ProjectLanguages): null {
    if (language.isCurrent)
        return null
    throw redirect(route('home', ProjectLanguages.current = language,))
}

/**
 * Redirect to the {@link SimpleRoute.path route path} with the {@link ProjectLanguages.default default language}
 *
 * @param route The route instance to retrieve its {@link SimpleRoute.name name}
 * @throws {Response} The route path encapsulated in a response
 */
function redirectToPathWithDefaultLanguage({name,}: EveryPossibleRouteInstance,): never {
    throw redirect(route(name, ProjectLanguages.default,))
}
