import type {MutableArray, NullOrString}    from '@joookiwi/type'
import type {RouteObject}                   from 'react-router/dist'
import {findFirstOrNullByArray, mapByArray} from '@joookiwi/collection'
import {RouterProvider}                     from 'react-router/dist'
import {createHashRouter}                   from 'react-router-dom/dist'
import {Suspense}                           from 'react'

import PageLayout                    from 'app/_PageLayout'
import LoadingApp                    from 'app/LoadingApp'
import {Games}                       from 'core/game/Games'
import {GameStyles}                  from 'core/gameStyle/GameStyles'
import {Times}                       from 'core/time/Times'
import {ProjectLanguages}            from 'lang/ProjectLanguages'
import {EveryRoutes}                 from 'route/EveryRoutes'
import {redirectTo}                  from 'route/method/redirectTo'
import {redirectToByUrl}             from 'route/method/redirectTo.byUrl'
import {StraightFallbackRouteObject} from 'route/StraightFallbackRouteObject'
import {StraightRouteObject}         from 'route/StraightRouteObject'
import {Empty}                       from 'util/emptyVariables'
import {GameCollection}              from 'util/collection/GameCollection'
import {GameStyleCollection}         from 'util/collection/GameStyleCollection'
import {TimeCollection}              from 'util/collection/TimeCollection'

import ALL =                EveryRoutes.ALL
import ALL_LANGUAGES =      ProjectLanguages.ALL
import ALL_ROUTES =         EveryRoutes.ALL_ROUTES
import EMPTY_STRING =       Empty.EMPTY_STRING
import GameCompanion =      Games.Companion
import GameStyleCompanion = GameStyles.Companion
import LanguageCompanion =  ProjectLanguages.Companion
import TimeCompanion =      Times.Companion

const homeRoute = EveryRoutes.HOME

// const everyGames = Games.Possibilities.get.everyFields
// const everyGamesAsUrl = everyGames.map(it => GameCompanion.getGroupUrlValue(it,),)
// const everyGameStyles = GameStyles.Possibilities.get.everyFields
// const everyGameStylesAsUrl = everyGameStyles.map(it => GameStyleCompanion.getGroupUrlValue(it,),)
// const everyViewDisplay = ViewDisplayCompanion.values
/**
 * All the routes encapsulated in a {@link Router HashRouter}.
 * The reason it is not a BrowserRouter is because of GitHub hosting service.
 *
 * At the root it has a "/"
 * and then the {@link ProjectLanguages project language} {@link ProjectLanguages.acronym acronym}
 * in parallel to the {@link EveryRoutes route instances} {@link SimpleRoute.path basic path}.
 *
 * If the path is correct for the {@link ProjectLanguages language},
 * then the {@link EveryRoutes route instances}'s values are processed with the mutation
 * on the {@link CompanionEnumWithCurrentAndSetCurrentEventAsCollection.current current value} (if applicable)
 *
 * @see https://reactrouter.com/main/routers/create-hash-router
 */
const router = createHashRouter([{
    caseSensitive: false,
    path: '/',
    id: 'root',
    element: <PageLayout/>,
    children: [
        new StraightRouteObject('/', () => redirectTo(homeRoute,),),
        //region -------------------- Path from route path --------------------

        ...mapByArray(ALL, it => new StraightRouteObject(it.urlValue, () => redirectTo(it,),),),

        //endregion -------------------- Path from route path --------------------
        //region -------------------- Path from language --------------------

        ...mapByArray<ProjectLanguages, RouteObject>(ALL_LANGUAGES, language => {
            const pathFromLanguage = `/${language.projectAcronym}` as const
            return {
                path: pathFromLanguage,
                id: `language-${language.projectAcronym}`,
                children: mapByArray(ALL, it => new StraightFallbackRouteObject(it.urlName, () => redirectTo(it, language,),),).toMutableArray(),
                loader() {
                    LanguageCompanion.current = language
                    return null
                },
            }
        },),

        //endregion -------------------- Path from language --------------------
        new StraightFallbackRouteObject(EMPTY_STRING, it => redirectToByUrl(it,),),
    ],
} satisfies RouteObject,], {
    basename: '/',
    patchRoutesOnNavigation: it => resolveLazyRoute(it.path, it.patch,),
},)

/**
 * Add the {@link SimpleRoute route found} if it exists by the {@link path} received
 *
 * @param path   The path to find a route
 * @param action The action to add a {@link RouteObject} for the {@link SimpleRoute route found}
 */
function resolveLazyRoute(path: string, action: (routeId: NullOrString, children: MutableArray<RouteObject>,) => void,): void {
    const route = findFirstOrNullByArray(ALL_ROUTES, it => path.endsWith(it.path,),)
    if (route == null)
        return

    const language = LanguageCompanion.getValueInUrl(path,)
    if (language == null)
        return // We are not expecting to have no language by the url
    const viewDisplay = route.viewDisplay!
    const games = route.games
    const gameStyles = route.gameStyles
    const times = route.times

    action(`language-${language.projectAcronym}`, [{
        path: `/${language.projectAcronym}${route.path}`,
        element: <Suspense fallback={<LoadingApp/>}>{route.renderCallback(viewDisplay, GameCollection.of(games,), GameStyleCollection.of(gameStyles,), TimeCollection.of(times,),)}</Suspense>,
        loader() {
            if (games != null)
                GameCompanion.current = games
            if (gameStyles != null)
                GameStyleCompanion.current = gameStyles
            if (times != null)
                TimeCompanion.current = times
            return null
        },
    },],)
}

// console.debug(router.routes[0]!.children)

/** @reactComponent */
export default function Routes() {
    return <RouterProvider router={router} fallbackElement={<LoadingApp/>}/>//TODO change the loading app to have a different visual than afterward
}

// @ts-ignore: TODO remove once the application is more complete
(window.test ??= {}).router = router
// @ts-ignore: TODO remove once the application is more complete
window.test.routes = router.routes[0]!.children
