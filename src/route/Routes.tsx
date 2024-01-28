import type {RouteObject} from 'react-router/dist'
import {RouterProvider}   from 'react-router/dist'
import {createHashRouter} from 'react-router-dom/dist'
import {Suspense}         from 'react'

import LoadingApp                    from 'app/LoadingApp'
import {Games}                       from 'core/game/Games'
import {GameStyles}                  from 'core/gameStyle/GameStyles'
import {ProjectLanguages}            from 'lang/ProjectLanguages'
import {EveryRoutes}                 from 'route/EveryRoutes'
import {redirectTo, redirectToByUrl} from 'route/redirectionMethods'
import {StraightFallbackRouteObject} from 'route/StraightFallbackRouteObject'
import {StraightRouteObject}         from 'route/StraightRouteObject'
import {EMPTY_ARRAY}                 from 'util/emptyVariables'
import {GameCollection}              from 'util/collection/GameCollection'
import {GameStyleCollection}         from 'util/collection/GameStyleCollection'

const ProjectLanguageCompanion = ProjectLanguages.CompanionEnum.get
const EveryRouteCompanion = EveryRoutes.CompanionEnum.get
// const ViewDisplayCompanion = ViewDisplays.CompanionEnum.get
const GameCompanion = Games.CompanionEnum.get
const GameStyleCompanion = GameStyles.CompanionEnum.get
const homeRoute = EveryRoutes.HOME
/** Every {@link ProjectLanguages project language} as an {@link Array} */
const languages = ProjectLanguageCompanion.values
const everyRouteInstance = EveryRouteCompanion.values
const everyRoute = EveryRouteCompanion.everyRoute
// const everyGames = Games.GamePossibilitiesCompanion.get.everyFields
// const everyGamesAsUrl = everyGames.map(it => GameCompanion.getGroupUrlValue(it,),)
// const everyGameStyles = GameStyles.Possibilities.get.everyFields
// const everyGameStylesAsUrl = everyGameStyles.map(it => GameStyleCompanion.getGroupUrlValue(it,),)
// const everyViewDisplay = ViewDisplayCompanion.values
/**
 * Every route encapsulated in a hash router (for GitHub).
 *
 * It utilizes at first the {@link ProjectLanguages} {@link ProjectLanguages.acronym acronym} in the path.
 *
 * If there is no {@link ProjectLanguages.acronym acronym} at first,
 * it should automatically detect the language on the device <i>(to be added)</i>.
 *
 * Also, it will create a specific route depending on the {@link Games game(s)}
 * and the {@link GameStyles game style(s)} to be displayed.
 *
 * Then, by using the routes ({@link EveryRoutes}), the paths are applied in the parameter.
 *
 * @see https://reactrouter.com/main/routers/create-hash-router
 */
const router = createHashRouter([{
    caseSensitive: false,
    path: '/',
    children: [
        new StraightRouteObject('/', () => redirectTo(homeRoute,),),
        //region -------------------- Path from route path --------------------

        ...everyRouteInstance.map<RouteObject>(routeInstance =>
            new StraightRouteObject(routeInstance.simplePath, () => redirectTo(routeInstance,),),),

        //endregion -------------------- Path from route path --------------------
        //region -------------------- Path from language --------------------

        ...languages.map<RouteObject>(language => {
            const pathFromLanguage = `/${language.projectAcronym}` as const
            return {
                path: pathFromLanguage,
                children: [
                    new StraightRouteObject(pathFromLanguage, () => redirectTo(homeRoute, language,),),
                    //region -------------------- Path from route path --------------------

                    ...everyRoute.map<RouteObject>(route => ({
                        path: `${pathFromLanguage}${route.path}`,
                        element: <Suspense fallback={<LoadingApp/>}>{route.renderCallback(route.viewDisplay!, new GameCollection(route.games ?? EMPTY_ARRAY,), new GameStyleCollection(route.gameStyles ?? EMPTY_ARRAY,),)}</Suspense>,
                        loader() {
                            const games = route.games
                            if (games != null)
                                GameCompanion.selected = games

                            const gameStyles = route.gameStyles
                            if (gameStyles != null)
                                GameStyleCompanion.selected = gameStyles

                            return null
                        },
                    }),),

                    //endregion -------------------- Path from route path --------------------
                    new StraightFallbackRouteObject(pathFromLanguage, loaderArguments => redirectToByUrl(loaderArguments, language,),),
                ],
                loader() {
                    ProjectLanguageCompanion.current = language
                    return null
                },
            }
        },),

        //endregion -------------------- Path from language --------------------
        new StraightFallbackRouteObject('/', loaderArguments => redirectToByUrl(loaderArguments,),),
    ],
} satisfies RouteObject,], {basename: '/',},)

// console.debug(router.routes[0].children)

/** @reactComponent */
export default function Routes() {
    return <RouterProvider router={router} fallbackElement={<LoadingApp/>}/>//TODO change the loading app to have a different visual than afterward
}
