import type {RouteObject} from 'react-router/dist'
import {RouterProvider}   from 'react-router/dist'
import {createHashRouter} from 'react-router-dom/dist'
import {Suspense}         from 'react'

import LoadingApp                                      from 'app/LoadingApp'
import {ViewDisplays}                                  from 'app/withInterpreter/ViewDisplays'
import {Games}                                         from 'core/game/Games'
import {GameStyles}                                    from 'core/gameStyle/GameStyles'
import {getUserLanguage}                               from 'lang/getUserLanguage'
import {ProjectLanguages}                              from 'lang/ProjectLanguages'
import {EveryRoutes}                                   from 'route/EveryRoutes'
import {redirectTo, redirectToByName, redirectToByUrl} from 'route/redirectionMethods'
import {StraightFallbackRouteObject}                   from 'route/StraightFallbackRouteObject'
import {StraightRouteObject}                           from 'route/StraightRouteObject'
import {EMPTY_ARRAY}                                   from 'util/emptyVariables'
import {GameCollection}                                from 'util/collection/GameCollection'
import {GameStyleCollection}                           from 'util/collection/GameStyleCollection'

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
        new StraightRouteObject('/', () => redirectTo(homeRoute, ProjectLanguageCompanion.currentOrNull ?? getUserLanguage(),),),
        //region -------------------- Path from simple route path --------------------

        everyRouteInstanceWithMoreThat1Element.map(routeInstance =>
            new StraightRouteObject(routeInstance.simplePath, () => redirectTo(routeInstance, ProjectLanguageCompanion.currentOrNull ?? getUserLanguage(),),),
        ).toArray(),

        //endregion -------------------- Path from simple route path --------------------
        //region -------------------- Path from route path --------------------

        everyRoute.map(route =>
            new StraightRouteObject(route.path, () => redirectToByName(route, ProjectLanguageCompanion.currentOrNull ?? getUserLanguage(),),),
        ),

        //endregion -------------------- Path from route path --------------------
        //region -------------------- Path from language --------------------

        languages.map<RouteObject>(language => {
            const pathFromLanguage = `/${language.projectAcronym}` as const
            return {
                path: pathFromLanguage,
                children: [
                    new StraightRouteObject(pathFromLanguage, () => redirectTo(homeRoute, language,),),
                    //region -------------------- Path from simple route path --------------------

                    everyRouteInstanceWithMoreThat1Element.map(routeInstance =>
                        new StraightRouteObject(`${pathFromLanguage}${routeInstance.simplePath}`, () => redirectTo(routeInstance, language,),),
                    ).toArray(),

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
                                new StraightRouteObject(pathFromLanguageAndGame, () => redirectTo(homeRoute, language, games,),),
                                //region -------------------- Path from view display --------------------

                                everyViewDisplay.map<RouteObject>(viewDisplay => {
                                    const pathFromLanguageAndGameAndViewDisplay = `${pathFromLanguageAndGame}/${viewDisplay.urlValue}` as const
                                    return {
                                        path: pathFromLanguageAndGameAndViewDisplay,
                                        children: [
                                            new StraightRouteObject(pathFromLanguageAndGameAndViewDisplay, () => redirectTo(homeRoute, language, games, null, viewDisplay,),),
                                            //region -------------------- Path from simple route path --------------------

                                            everyRouteInstanceWithGameAndViewDisplay.map(routeInstance =>
                                                new StraightRouteObject(`${pathFromLanguageAndGameAndViewDisplay}${routeInstance.simplePath}`, () => redirectTo(routeInstance, language, games, null, viewDisplay,),),
                                            ).toArray(),

                                            //endregion -------------------- Path from simple route path --------------------
                                            new StraightFallbackRouteObject(pathFromLanguageAndGameAndViewDisplay, loaderArguments => redirectToByUrl(loaderArguments, language, games, null, viewDisplay,),),
                                        ].flat(),
                                        loader() {
                                            ViewDisplayCompanion.current = viewDisplay
                                            return null
                                        },
                                    }
                                },).toArray(),

                                //endregion -------------------- Path from view display --------------------
                                //region -------------------- Path from simple route path --------------------

                                everyRouteInstanceWithGameAndViewDisplay.map(routeInstance =>
                                    new StraightRouteObject(`${pathFromLanguageAndGame}${routeInstance.simplePath}`, () => redirectTo(routeInstance, language, games,),),
                                ).toArray(),

                                //endregion -------------------- Path from simple route path --------------------
                                new StraightFallbackRouteObject(pathFromLanguageAndGame, loaderArguments => redirectToByUrl(loaderArguments, language, games,),),
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
                                new StraightRouteObject(pathFromLanguageAndViewDisplay, () => redirectTo(homeRoute, language, null, null, viewDisplay,),),
                                //region -------------------- Path from simple route path --------------------

                                everyRouteInstanceWithGameAndViewDisplay.map(routeInstance =>
                                    new StraightRouteObject(`${pathFromLanguageAndViewDisplay}${routeInstance.simplePath}`, () => redirectTo(routeInstance, language, null, null, viewDisplay,),),
                                ).toArray(),

                                //endregion -------------------- Path from simple route path --------------------
                                new StraightFallbackRouteObject(pathFromLanguageAndViewDisplay, loaderArguments => redirectToByUrl(loaderArguments, language, null, null, viewDisplay,),),
                            ].flat(),
                            loader() {
                                ViewDisplayCompanion.current = viewDisplay
                                return null
                            },
                        }
                    },).toArray(),

                    //endregion -------------------- Path from view display --------------------
                    new StraightFallbackRouteObject(pathFromLanguage, loaderArguments => redirectToByUrl(loaderArguments, language,),),
                ].flat(),
                loader() {
                    ProjectLanguageCompanion.current = language
                    return null
                },
            }
        },),

        //endregion -------------------- Path from language --------------------
        new StraightFallbackRouteObject('/', loaderArguments => redirectToByUrl(loaderArguments,),),
    ].flat(),
} satisfies RouteObject,], {basename: '/',},)

// console.debug(router.routes[0].children)
//TODO Test the routes when the page is not on its first load

/** @reactComponent */
export default function Routes() {
    return <RouterProvider router={router} fallbackElement={<LoadingApp/>}/>//TODO change the loading app to have a different visual than afterward
}
