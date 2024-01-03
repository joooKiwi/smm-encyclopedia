import type {LoaderFunctionArgs, RouteObject} from 'react-router/dist'
import {RouterProvider, redirect}             from 'react-router/dist'
import {createHashRouter}                     from 'react-router-dom/dist'
import {Suspense}                             from 'react'

import type {PossibleRouteName} from 'route/EveryRoutes.types'

import LoadingApp         from 'app/LoadingApp'
import {ViewDisplays}     from 'app/withInterpreter/ViewDisplays'
import {Games}            from 'core/game/Games'
import {getUserLanguage}  from 'lang/getUserLanguage'
import {ProjectLanguages} from 'lang/ProjectLanguages'
import {EveryRoutes}      from 'route/EveryRoutes'
import {routeFromName}    from 'route/route'
import {GameCollection}   from 'util/collection/GameCollection'
import {EMPTY_ARRAY}      from 'util/emptyVariables'

/** Every {@link ProjectLanguages project language} as an {@link Array} */
const languages = ProjectLanguages.CompanionEnum.get.values.toArray()
const everyRouteInstance = EveryRoutes.CompanionEnum.get.values
const everyRouteInstanceWithMoreThat1Element = everyRouteInstance.filter(it => it.everyRoute.length !== 1,)
const everyRouteInstanceWithGameAndViewDisplay = everyRouteInstance.filter(it => it.everyRoute.find(it => it.games == null && it.viewDisplay == null,) == null,)
const everyRoute = EveryRoutes.CompanionEnum.get.everyRoute
const everyGames = Games.GamePossibilitiesCompanion.get.everyFields
const everyViewDisplay = ViewDisplays.CompanionEnum.get.values
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
 * Then, by using the routes ({@link EveryRoutes}), the path are applied in the parameter.
 *
 * @see https://reactrouter.com/main/routers/create-hash-router
 */
const router = createHashRouter([{
    caseSensitive: false,
    path: '/',
    children: [
        //region -------------------- Path from nothing --------------------

        {
            path: '/',
            loader() {
                throw redirect(EveryRoutes.HOME.getPath(ProjectLanguages.CompanionEnum.get.currentOrNull ?? getUserLanguage(), null, null,),)
            },
        } satisfies RouteObject,

        //endregion -------------------- Path from nothing --------------------
        //region -------------------- Path from simple route path --------------------

        everyRouteInstanceWithMoreThat1Element.map<RouteObject>(routeInstance => ({
            path: routeInstance.simplePath,
            loader() {
                throw redirect(routeInstance.getPath(ProjectLanguages.CompanionEnum.get.currentOrNull ?? getUserLanguage(), null, null,),)
            },
        }),).toArray(),

        //endregion -------------------- Path from simple route path --------------------
        //region -------------------- Path from route path --------------------

        everyRoute.map<RouteObject>(route => ({
            path: route.path,
            loader: () => {
                throw redirect(routeFromName(route.name as PossibleRouteName, ProjectLanguages.CompanionEnum.get.currentOrNull ?? getUserLanguage(),),)
            },
        }),),

        //endregion -------------------- Path from route path --------------------
        //region -------------------- Path from language --------------------

        languages.map<RouteObject>(language => {
            const pathFromLanguage = `/${language.projectAcronym}` as const
            return {
                path: pathFromLanguage,
                children: [
                    //region -------------------- Path from nothing --------------------

                    {
                        path: pathFromLanguage,
                        loader() {
                            throw redirect(EveryRoutes.HOME.getPath(language, null, null,),)
                        },
                    },

                    //endregion -------------------- Path from nothing --------------------
                    //region -------------------- Path from simple route path --------------------

                    everyRouteInstanceWithMoreThat1Element.map<RouteObject>(routeInstance => ({
                        path: `${pathFromLanguage}${routeInstance.simplePath}`,
                        loader() {
                            throw redirect(routeInstance.getPath(language, null, null,),)
                        },
                    }),).toArray(),

                    //endregion -------------------- Path from simple route path --------------------
                    //region -------------------- Path from route path --------------------

                    everyRoute.map<RouteObject>(route => ({
                        path: `${pathFromLanguage}${route.path}`,
                        element: <Suspense fallback={<LoadingApp/>}>{route.renderCallback(route.viewDisplay!, new GameCollection(route.games ?? EMPTY_ARRAY,),)}</Suspense>,
                        loader: () => {
                            const games = route.games
                            if (games != null)
                                Games.setSelected(games,)
                            return null
                        },
                    }),),

                    //endregion -------------------- Path from route path --------------------
                    //region -------------------- Path from game --------------------

                    everyGames.map<RouteObject>(games => {
                        const pathFromLanguageAndGame = `${pathFromLanguage}/game-${Games.getGroupUrlValue(games,)}` as const
                        return {
                            path: pathFromLanguageAndGame,
                            children: [
                                //region -------------------- Path from nothing --------------------

                                {
                                    path: pathFromLanguageAndGame,
                                    loader() {
                                        throw redirect(EveryRoutes.HOME.getPath(language, games, null,),)
                                    },
                                },

                                //endregion -------------------- Path from nothing --------------------
                                //region -------------------- Path from view display --------------------

                                everyViewDisplay.map<RouteObject>(viewDisplay => {
                                    const pathFromLanguageAndGameAndViewDisplay = `${pathFromLanguageAndGame}/${viewDisplay.urlValue}` as const
                                    return {
                                        path: pathFromLanguageAndGameAndViewDisplay,
                                        children: [
                                            //region -------------------- Path from nothing --------------------

                                            {
                                                path: pathFromLanguageAndGameAndViewDisplay,
                                                loader() {
                                                    throw redirect(EveryRoutes.HOME.getPath(language, games, viewDisplay,),)
                                                },
                                            },

                                            //endregion -------------------- Path from nothing --------------------
                                            //region -------------------- Path from simple route path --------------------

                                            everyRouteInstanceWithGameAndViewDisplay.map<RouteObject>(routeInstance => ({
                                                path: `${pathFromLanguageAndGameAndViewDisplay}${routeInstance.simplePath}`,
                                                loader() {
                                                    throw redirect(routeInstance.getPath(language, games, viewDisplay,),)
                                                },
                                            }),).toArray(),

                                            //endregion -------------------- Path from simple route path --------------------
                                            //region -------------------- Fallback if nothing was found --------------------

                                            {
                                                path: `${pathFromLanguageAndGameAndViewDisplay}*`,
                                                loader: loaderArguments => redirectToCorrectPathWithNoRoute2(loaderArguments, language, games, viewDisplay,),
                                            } satisfies RouteObject,

                                            //endregion -------------------- Fallback if nothing was found --------------------
                                        ].flat(),
                                        loader() {
                                            ViewDisplays.CompanionEnum.get.current = viewDisplay
                                            return null
                                        },
                                    }
                                },).toArray(),

                                //endregion -------------------- Path from view display --------------------
                                //region -------------------- Path from simple route path --------------------

                                everyRouteInstanceWithGameAndViewDisplay.map<RouteObject>(routeInstance => ({
                                    path: `${pathFromLanguageAndGame}${routeInstance.simplePath}`,
                                    loader() {
                                        throw redirect(routeInstance.getPath(language, games, null,),)
                                    },
                                }),).toArray(),

                                //endregion -------------------- Path from simple route path --------------------
                                //region -------------------- Fallback if nothing was found --------------------

                                {
                                    path: `${pathFromLanguageAndGame}*`,
                                    loader: loaderArguments => redirectToCorrectPathWithNoRoute1(loaderArguments, language, games,),
                                } satisfies RouteObject,

                                //endregion -------------------- Fallback if nothing was found --------------------
                            ].flat(),
                            loader() {
                                Games.setSelected(games,)
                                return null
                            },
                        }
                    },),

                    //endregion -------------------- Path from game --------------------
                    //region -------------------- Path from view display --------------------

                    everyViewDisplay.map<RouteObject>(viewDisplay => {
                        const pathFromLanguageAndViewDisplay = `${pathFromLanguage}/${viewDisplay.urlValue}` as const
                        return {
                            path: pathFromLanguageAndViewDisplay,
                            children: [
                                //region -------------------- Path from nothing --------------------

                                {
                                    path: pathFromLanguageAndViewDisplay,
                                    loader() {
                                        throw redirect(EveryRoutes.HOME.getPath(language, null, viewDisplay,),)
                                    },
                                },

                                //endregion -------------------- Path from nothing --------------------
                                //region -------------------- Path from simple route path --------------------

                                everyRouteInstanceWithGameAndViewDisplay.map<RouteObject>(routeInstance => ({
                                    path: `${pathFromLanguageAndViewDisplay}${routeInstance.simplePath}`,
                                    loader() {
                                        throw redirect(routeInstance.getPath(language, null, viewDisplay,),)
                                    },
                                }),).toArray(),

                                //endregion -------------------- Path from simple route path --------------------
                                //region -------------------- Fallback if nothing was found --------------------

                                {
                                    path: `${pathFromLanguageAndViewDisplay}*`,
                                    loader: loaderArguments => redirectToCorrectPathWithNoRouteAndGame2(loaderArguments, language, viewDisplay,),
                                } satisfies RouteObject,

                                //endregion -------------------- Fallback if nothing was found --------------------
                            ].flat(),
                            loader() {
                                ViewDisplays.CompanionEnum.get.current = viewDisplay
                                return null
                            },
                        }
                    },).toArray(),

                    //endregion -------------------- Path from view display --------------------
                    //region -------------------- Fallback if nothing was found --------------------

                    {
                        path: `${pathFromLanguage}/*`,
                        loader: loaderArguments => redirectToCorrectPathWithNoRouteAndGame1(loaderArguments, language,),
                    } satisfies RouteObject,

                    //endregion -------------------- Fallback if nothing was found --------------------
                ].flat(),
                loader() {
                    ProjectLanguages.CompanionEnum.get.current = language
                    return null
                },
            }
        },),

        //endregion -------------------- Path from language --------------------
        //region -------------------- Fallback if nothing was found --------------------

        {
            path: '/*',
            loader: loaderArguments => redirectToCorrectPathWithNoArguments(loaderArguments,),
        } satisfies RouteObject,

        //endregion -------------------- Fallback if nothing was found --------------------
    ].flat(),
} satisfies RouteObject,], {basename: '/',},)

// console.debug(router.routes[0].children)
//TODO Test the routes when the page is not on its first load

/** @reactComponent */
export default function Routes() {
    return <RouterProvider router={router} fallbackElement={<LoadingApp/>}/>//TODO change the loading app to have a different visual than afterward
}


/**
 * Redirect to the correct path from a value with only a {@link language}
 *
 * @param loaderArguments The arguments to retrieve the {@link Request request} {@link Request.url url}
 * @see redirectToCorrectPathWithEveryArguments
 * @throws {Response} The route encapsulated in a response
 */
function redirectToCorrectPathWithNoArguments(loaderArguments: LoaderFunctionArgs,): never {
    const url = loaderArguments.request.url
    throw redirectToCorrectPathWithEveryArguments(
        EveryRoutes.CompanionEnum.get.getValueInUrl(url,),
        ProjectLanguages.CompanionEnum.get.getValueInUrl(url,),
        Games.CompanionEnum.get.getValueInUrl(url,),
        ViewDisplays.CompanionEnum.get.getValueInUrl(url,),
    )
}
/**
 * Redirect to the correct path from a value with only a {@link language}
 *
 * @param loaderArguments The arguments to retrieve the {@link Request request} {@link Request.url url}
 * @param language The route language
 * @param games The games in the route
 * @see redirectToCorrectPathWithEveryArguments
 * @throws {Response} The route encapsulated in a response
 */
function redirectToCorrectPathWithNoRoute1(loaderArguments: LoaderFunctionArgs, language: ProjectLanguages, games: readonly Games[],): never {
    const url = loaderArguments.request.url
    throw redirectToCorrectPathWithEveryArguments(
        EveryRoutes.CompanionEnum.get.getValueInUrl(url,),
        language,
        games,
        ViewDisplays.CompanionEnum.get.getValueInUrl(url,),
    )
}
/**
 * Redirect to the correct path from a value with only a {@link language}
 *
 * @param loaderArguments The arguments to retrieve the {@link Request request} {@link Request.url url}
 * @param language The route language
 * @param games The games in the route
 * @param viewDisplay The view display in the route
 * @see redirectToCorrectPathWithEveryArguments
 * @throws {Response} The route encapsulated in a response
 */
function redirectToCorrectPathWithNoRoute2(loaderArguments: LoaderFunctionArgs, language: ProjectLanguages, games: readonly Games[], viewDisplay: ViewDisplays,): never {
    const url = loaderArguments.request.url
    throw redirectToCorrectPathWithEveryArguments(
        EveryRoutes.CompanionEnum.get.getValueInUrl(url,),
        language,
        games,
        viewDisplay,
    )
}
/**
 * Redirect to the correct path from a value with only a {@link language}
 *
 * @param loaderArguments The arguments to retrieve the {@link Request request} {@link Request.url url}
 * @param language The route language
 * @see redirectToCorrectPathWithEveryArguments
 * @throws {Response} The route encapsulated in a response
 */
function redirectToCorrectPathWithNoRouteAndGame1(loaderArguments: LoaderFunctionArgs, language: ProjectLanguages,): never {
    const url = loaderArguments.request.url
    throw redirectToCorrectPathWithEveryArguments(
        EveryRoutes.CompanionEnum.get.getValueInUrl(url,),
        language,
        Games.CompanionEnum.get.getValueInUrl(url,),
        ViewDisplays.CompanionEnum.get.getValueInUrl(url,),
    )
}
/**
 * Redirect to the correct path from a value with only a {@link language}
 *
 * @param loaderArguments The arguments to retrieve the {@link Request request} {@link Request.url url}
 * @param language The route language
 * @param viewDisplay The view display in the route
 * @see redirectToCorrectPathWithEveryArguments
 * @throws {Response} The route encapsulated in a response
 */
function redirectToCorrectPathWithNoRouteAndGame2(loaderArguments: LoaderFunctionArgs, language: ProjectLanguages, viewDisplay: ViewDisplays,): never {
    const url = loaderArguments.request.url
    throw redirectToCorrectPathWithEveryArguments(
        EveryRoutes.CompanionEnum.get.getValueInUrl(url,),
        language,
        Games.CompanionEnum.get.getValueInUrl(url,),
        viewDisplay,
    )
}
/**
 * Redirect to the correct path from a value with only a {@link route} {@link language}, a {@link viewDisplay} and the {@link games}
 *
 * @param route The nullable simple route
 * @param language The nullable route language
 * @param viewDisplay The nullable view display in the route
 * @param games The games in the route
 * @throws {Response} The route encapsulated in a response
 */
function redirectToCorrectPathWithEveryArguments(route: NullOr<EveryRoutes>, language: NullOr<ProjectLanguages>, games: readonly Games[], viewDisplay: NullOr<ViewDisplays>,): never {
    if (route == null)
        route = EveryRoutes.HOME
    throw redirect(route.getPath(language, games, viewDisplay,),)
}
