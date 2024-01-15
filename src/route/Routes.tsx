import type {LoaderFunctionArgs, RouteObject} from 'react-router/dist'
import {RouterProvider, redirect}             from 'react-router/dist'
import {createHashRouter}                     from 'react-router-dom/dist'
import {Suspense}                             from 'react'

import type {PossibleRouteName} from 'route/EveryRoutes.types'
import type {SimpleRoute}       from 'route/SimpleRoute'

import LoadingApp            from 'app/LoadingApp'
import {ViewDisplays}        from 'app/withInterpreter/ViewDisplays'
import {Games}               from 'core/game/Games'
import {GameStyles}          from 'core/gameStyle/GameStyles'
import {getUserLanguage}     from 'lang/getUserLanguage'
import {ProjectLanguages}    from 'lang/ProjectLanguages'
import {EveryRoutes}         from 'route/EveryRoutes'
import {routeFromName}       from 'route/route'
import {EMPTY_ARRAY}         from 'util/emptyVariables'
import {GameCollection}      from 'util/collection/GameCollection'
import {GameStyleCollection} from 'util/collection/GameStyleCollection'

const ProjectLanguageCompanion = ProjectLanguages.CompanionEnum.get
const EveryRouteCompanion = EveryRoutes.CompanionEnum.get
const ViewDisplayCompanion = ViewDisplays.CompanionEnum.get
const homeRoute = EveryRoutes.HOME
/** Every {@link ProjectLanguages project language} as an {@link Array} */
const languages = ProjectLanguageCompanion.values.toArray()
const everyRouteInstance = EveryRouteCompanion.values
const everyRouteInstanceWithMoreThat1Element = everyRouteInstance.filter(it => it.everyRoute.length !== 1,)
const everyRouteInstanceWithGameAndViewDisplay = everyRouteInstance.filter(it => it.everyRoute.find(it => it.games == null && it.viewDisplay == null,) == null,)
const everyRoute = EveryRouteCompanion.everyRoute
const everyGames = Games.GamePossibilitiesCompanion.get.everyFields
// const everyGameStyles = GameStyles.Possibilities.get.everyFields
const everyViewDisplay = ViewDisplayCompanion.values
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
 * @todo add GameStyles handling
 */
const router = createHashRouter([{
    caseSensitive: false,
    path: '/',
    children: [
        //region -------------------- Path from nothing --------------------

        {
            path: '/',
            loader: () => redirectTo(homeRoute, ProjectLanguageCompanion.currentOrNull ?? getUserLanguage(),),
        } satisfies RouteObject,

        //endregion -------------------- Path from nothing --------------------
        //region -------------------- Path from simple route path --------------------

        everyRouteInstanceWithMoreThat1Element.map<RouteObject>(routeInstance => ({
            path: routeInstance.simplePath,
            loader: () => redirectTo(routeInstance, ProjectLanguageCompanion.currentOrNull ?? getUserLanguage(),),
        }),).toArray(),

        //endregion -------------------- Path from simple route path --------------------
        //region -------------------- Path from route path --------------------

        everyRoute.map<RouteObject>(route => ({
            path: route.path,
            loader: () => redirectToByName(route, ProjectLanguageCompanion.currentOrNull ?? getUserLanguage(),),
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
                        loader: () => redirectTo(homeRoute, language,),
                    },

                    //endregion -------------------- Path from nothing --------------------
                    //region -------------------- Path from simple route path --------------------

                    everyRouteInstanceWithMoreThat1Element.map<RouteObject>(routeInstance => ({
                        path: `${pathFromLanguage}${routeInstance.simplePath}`,
                        loader: () => redirectTo(routeInstance, language,),
                    }),).toArray(),

                    //endregion -------------------- Path from simple route path --------------------
                    //region -------------------- Path from route path --------------------

                    everyRoute.map<RouteObject>(route => ({
                        path: `${pathFromLanguage}${route.path}`,
                        element: <Suspense fallback={<LoadingApp/>}>{route.renderCallback(route.viewDisplay!, new GameCollection(route.games ?? EMPTY_ARRAY,), new GameStyleCollection(route.gameStyles ?? EMPTY_ARRAY,),)}</Suspense>,
                        loader: () => {
                            const games = route.games
                            if (games != null)
                                Games.selected = games
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
                                    loader: () => redirectTo(homeRoute, language, games,),
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
                                                loader: () => redirectTo(homeRoute, language, games, null, viewDisplay,),
                                            },

                                            //endregion -------------------- Path from nothing --------------------
                                            //region -------------------- Path from simple route path --------------------

                                            everyRouteInstanceWithGameAndViewDisplay.map<RouteObject>(routeInstance => ({
                                                path: `${pathFromLanguageAndGameAndViewDisplay}${routeInstance.simplePath}`,
                                                loader: () => redirectTo(routeInstance, language, games, null, viewDisplay,),
                                            }),).toArray(),

                                            //endregion -------------------- Path from simple route path --------------------
                                            //region -------------------- Fallback if nothing was found --------------------

                                            {
                                                path: `${pathFromLanguageAndGameAndViewDisplay}*`,
                                                loader: loaderArguments => redirectToByUrl(loaderArguments, language, games, null, viewDisplay,),
                                            } satisfies RouteObject,

                                            //endregion -------------------- Fallback if nothing was found --------------------
                                        ].flat(),
                                        loader() {
                                            ViewDisplayCompanion.current = viewDisplay
                                            return null
                                        },
                                    }
                                },).toArray(),

                                //endregion -------------------- Path from view display --------------------
                                //region -------------------- Path from simple route path --------------------

                                everyRouteInstanceWithGameAndViewDisplay.map<RouteObject>(routeInstance => ({
                                    path: `${pathFromLanguageAndGame}${routeInstance.simplePath}`,
                                    loader: () => redirectTo(routeInstance, language, games,),
                                }),).toArray(),

                                //endregion -------------------- Path from simple route path --------------------
                                //region -------------------- Fallback if nothing was found --------------------

                                {
                                    path: `${pathFromLanguageAndGame}*`,
                                    loader: loaderArguments => redirectToByUrl(loaderArguments, language, games,),
                                } satisfies RouteObject,

                                //endregion -------------------- Fallback if nothing was found --------------------
                            ].flat(),
                            loader() {
                                Games.selected = games
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
                                    loader: () => redirectTo(homeRoute, language, null, null, viewDisplay,),
                                },

                                //endregion -------------------- Path from nothing --------------------
                                //region -------------------- Path from simple route path --------------------

                                everyRouteInstanceWithGameAndViewDisplay.map<RouteObject>(routeInstance => ({
                                    path: `${pathFromLanguageAndViewDisplay}${routeInstance.simplePath}`,
                                    loader: () => redirectTo(routeInstance, language, null, null, viewDisplay,),
                                }),).toArray(),

                                //endregion -------------------- Path from simple route path --------------------
                                //region -------------------- Fallback if nothing was found --------------------

                                {
                                    path: `${pathFromLanguageAndViewDisplay}*`,
                                    loader: loaderArguments => redirectToByUrl(loaderArguments, language, null, null, viewDisplay,),
                                } satisfies RouteObject,

                                //endregion -------------------- Fallback if nothing was found --------------------
                            ].flat(),
                            loader() {
                                ViewDisplayCompanion.current = viewDisplay
                                return null
                            },
                        }
                    },).toArray(),

                    //endregion -------------------- Path from view display --------------------
                    //region -------------------- Fallback if nothing was found --------------------

                    {
                        path: `${pathFromLanguage}/*`,
                        loader: loaderArguments => redirectToByUrl(loaderArguments, language,),
                    } satisfies RouteObject,

                    //endregion -------------------- Fallback if nothing was found --------------------
                ].flat(),
                loader() {
                    ProjectLanguageCompanion.current = language
                    return null
                },
            }
        },),

        //endregion -------------------- Path from language --------------------
        //region -------------------- Fallback if nothing was found --------------------

        {
            path: '/*',
            loader: loaderArguments => redirectToByUrl(loaderArguments,),
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

//region -------------------- Redirect method helper --------------------

function redirectTo(route: EveryRoutes, language: ProjectLanguages, games: NullOr<readonly Games[]> = null, gameStyles: NullOr<readonly GameStyles[]> = null, viewDisplay: NullOr<ViewDisplays> = null,): never {
    throw redirect(route.getPath(language, games, gameStyles, viewDisplay,),)
}

function redirectToByUrl(loaderArguments: LoaderFunctionArgs, language: NullOr<ProjectLanguages> = null, games: NullOr<readonly Games[]> = null, gameStyles: NullOr<readonly GameStyles[]> = null, viewDisplay: NullOr<ViewDisplays> = null,): never {
    const url = loaderArguments.request.url
    throw redirect((EveryRouteCompanion.getValueInUrl(url,) ?? homeRoute).getPath(
        language ?? ProjectLanguageCompanion.getValueInUrl(url,),
        games ?? Games.CompanionEnum.get.getValueInUrl(url,),
        gameStyles ?? GameStyles.CompanionEnum.get.getValueInUrl(url,),
        viewDisplay ?? ViewDisplayCompanion.getValueInUrl(url,),
    ),)
}

function redirectToByName(route: SimpleRoute, language: ProjectLanguages,): never {
    throw redirect(routeFromName(route.name as PossibleRouteName, language,),)
}

//endregion -------------------- Redirect method helper --------------------
