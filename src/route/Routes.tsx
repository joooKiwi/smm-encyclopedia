import type {LoaderFunctionArgs, RouteObject} from 'react-router/dist'
import {RouterProvider, redirect}             from 'react-router/dist'
import {createHashRouter}                     from 'react-router-dom/dist'
import {Suspense}                             from 'react'

import type {EveryPossibleRouteInstance} from 'route/everyRoutes.types'

import LoadingApp          from 'app/LoadingApp'
import {ViewDisplays}      from 'app/withInterpreter/ViewDisplays'
import {Games}             from 'core/game/Games'
import {getUserLanguage}   from 'lang/getUserLanguage'
import {ProjectLanguages}  from 'lang/ProjectLanguages'
import {everySimpleRoutes} from 'route/everyRoutes'
import {routeFromName}     from 'route/route'

const /** Every {@link ProjectLanguages project language} as an {@link Array} */
    languages = ProjectLanguages.CompanionEnum.get.values.toArray(),
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
            everySimpleRoutes.map<RouteObject>(route => ({
                path: route.path,
                loader: () => redirectToPathWithUserLanguage(route,),
            }),),

            languages.map<RouteObject>(language => ({
                path: `/${language.projectAcronym}` as const,
                children: everySimpleRoutes.map<RouteObject>(route => ({
                    path: `/${language.projectAcronym}${route.path}` as const,
                    element: <Suspense fallback={<LoadingApp/>}>{route.renderCallback()}</Suspense>,
                    loader: () => setDefaultValues(route,)
                }),),
                loader: () => redirectToHomeIfNotCurrentLanguage(language,),
            }),),

            languages.map(language => everySimpleRoutes.map<RouteObject>(route => ({
                path: `/${language.projectAcronym}/*/${route.path}` as const,
                loader: loaderArguments => redirectToCorrectPath2(loaderArguments, language,),
            }))).flat(),
            languages.map<RouteObject>(language => ({
                path: `/${language.projectAcronym}/*`,
                loader: loaderArguments => redirectToCorrectPath2(loaderArguments, language,),
            }),),
            {
                path: '/*',
                loader: loaderArguments => redirectToCorrectPath1(loaderArguments,),
            } as const satisfies RouteObject,
        ].flat(),
        loader: loaderArguments => redirectToCorrectPath1(loaderArguments,),
    },], {basename: '/',},)

// console.debug(router.routes[0].children)

/** @reactComponent */
export default function Routes() {
    return <RouterProvider router={router} fallbackElement={<LoadingApp/>}/>//TODO change the loading app to have a different visual than afterward
}


/**
 * Redirect to the correct path from a value with only a {@link language}
 *
 * @param loaderArguments The arguments to retrieve the {@link Request request} {@link Request.url url}
 * @see redirectToCorrectPath4
 * @throws {Response} The route encapsulated in a response
 * @throws {TypeError} The route was not found from the url
 */
function redirectToCorrectPath1(loaderArguments: LoaderFunctionArgs,): null {
    if (ProjectLanguages.CompanionEnum.get.currentOrNull != null)
        return null // The path is already in place and the current language has been set

    const url = loaderArguments.request.url
    redirectToCorrectPath4(
        loaderArguments,
        ProjectLanguages.CompanionEnum.get.getValueInUrl(url,),
        ViewDisplays.CompanionEnum.get.getValueInUrl(url,),
        Games.CompanionEnum.get.getValueInUrl(url,),
    )
}
/**
 * Redirect to the correct path from no values
 *
 * @param loaderArguments The arguments to retrieve the {@link Request request} {@link Request.url url}
 * @param language The route language
 * @see redirectToCorrectPath4
 * @throws {Response} The route encapsulated in a response
 * @throws {TypeError} The route was not found from the url excluding the {@link language}
 */
function redirectToCorrectPath2(loaderArguments: LoaderFunctionArgs, language: ProjectLanguages,): never {
    const url = loaderArguments.request.url
    redirectToCorrectPath4(
        loaderArguments,
        language,
        ViewDisplays.CompanionEnum.get.getValueInUrl(url,),
        Games.CompanionEnum.get.getValueInUrl(url,),
    )
}
/**
 * Redirect to the correct path from a value with only a {@link language} and a {@link viewDisplay}
 *
 * @param loaderArguments The arguments to retrieve the {@link Request request} {@link Request.url url}
 * @param language The route language
 * @param viewDisplay The nullable view display
 * @see redirectToCorrectPath4
 * @throws {Response} The route encapsulated in a response
 * @throws {TypeError} The route was not found from the url excluding the {@link language} and {@link viewDisplay}
 */
// function redirectToCorrectPath3(loaderArguments: LoaderFunctionArgs, language: ProjectLanguages, viewDisplay: NullOr<ViewDisplays>,): never {
//     const url = loaderArguments.request.url
//     redirectToCorrectPath4(
//         loaderArguments,
//         language,
//         viewDisplay,
//         Games.CompanionEnum.get.getValueInUrl(url,),
//     )
// }
/**
 * Redirect to the correct path from a value with only a {@link language}, a {@link viewDisplay} and the {@link games}
 *
 * @param loaderArguments The arguments to retrieve the {@link Request request} {@link Request.url url}
 * @param language The nullable route language
 * @param viewDisplay The nullable view display
 * @param games The games in the route
 * @see redirectToCorrectPath4
 * @throws {Response} The route encapsulated in a response
 * @throws {TypeError} The route was not found from the url excluding the {@link language}, {@link viewDisplay} and {@link games}
 */
function redirectToCorrectPath4(loaderArguments: LoaderFunctionArgs, language: NullOr<ProjectLanguages>, viewDisplay: NullOr<ViewDisplays>, games: readonly Games[],): never {
    const url = loaderArguments.request.url

    const routeFoundByBasicPath = everySimpleRoutes.find(it => url.endsWith(it.path,),)

    const expectedViewDisplayPath = viewDisplay == null ? '' : `/${(ViewDisplays.CompanionEnum.get.current = viewDisplay).urlValue}` as const
    const expectedGamesPath = games.length === 0 ? '' : `/${Games.setSelected(games,).selectedGamesAsUrlValue}` as const
    const expectedBasicPath = routeFoundByBasicPath == null ? '/home' : routeFoundByBasicPath.path
    const expectedLanguage = ProjectLanguages.CompanionEnum.get.current = language == null ? getUserLanguage() : language
    const expectedPath = `${expectedGamesPath}${expectedViewDisplayPath}${expectedBasicPath}`
    const routeFoundByArguments = everySimpleRoutes.find(it => it.path === expectedPath,)
    if (routeFoundByArguments == null)
        throw new TypeError(`A route should be findable when trying to retrieve from the url "${expectedPath}".`,)
    throw redirect(routeFromName(routeFoundByArguments.name, expectedLanguage,),)
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
    throw redirect(routeFromName('home', ProjectLanguages.CompanionEnum.get.current = language,),)
}

/**
 * Redirect to the {@link Route.path route path} with
 * the {@link ProjectLanguages.default default language} using the {@link getUserLanguage}
 *
 * @param route The route instance to retrieve its {@link Route.name name}
 *
 * @canSetSelectedGames
 * @throws {Response} The route path encapsulated in a response
 */
function redirectToPathWithUserLanguage({name, games,}: EveryPossibleRouteInstance,): never {
    if (!Games.selectedGames.hasAll(...games,))
        Games.setSelected(games,)
    throw redirect(routeFromName(name, ProjectLanguages.CompanionEnum.get.defaultValue = getUserLanguage(),),)
}

/**
 * Set the default selections <i>(if there are not already selected)</i>
 * for the {@link Games}
 *
 * @param route The {@link Route} to retrieve its {@link Route.path path} & {@link Route.games games}
 *
 * @canSetSelectedGames
 */
function setDefaultValues({path, games,}: EveryPossibleRouteInstance,): null {
    if (path.includes(Games.CompanionEnum.get.PREFIX,) && games.length !== 0 && !Games.selectedGames.hasAll(...games,))
        Games.setSelected(games,)
    return null
}