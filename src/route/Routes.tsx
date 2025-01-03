import type {MutableArray, NullOrString}    from '@joookiwi/type'
import type {RouteObject}                   from 'react-router/dist'
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
import {ArrayAsCollection}           from 'util/collection/ArrayAsCollection'
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

const home =         EveryRoutes.HOME
const all =          new ArrayAsCollection(ALL,)
const allLanguages = new ArrayAsCollection(ALL_LANGUAGES,)

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
 * in parallel to the {@link EveryRoutes route instances} {@link Route.path path}.
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
    HydrateFallback: LoadingApp,//TODO change the loading app to have a different visual than afterward
    children: [
        new StraightRouteObject('/', () => redirectTo(home,),),
        //region -------------------- Path from route path --------------------

        ...all.map(it => new StraightRouteObject(it.urlValue, () => redirectTo(it,),),),

        //endregion -------------------- Path from route path --------------------
        //region -------------------- Path from language --------------------

        ...allLanguages.map<RouteObject>(language => ({
            path: language.projectAcronym,
            id: `language-${language.projectAcronym}`,
            children: all.map(it => new StraightFallbackRouteObject(it.urlName, () => redirectTo(it, language,),),).toMutableArray(),
            loader() {
                LanguageCompanion.current = language
                return null
            },
        }),),

        //endregion -------------------- Path from language --------------------
        new StraightFallbackRouteObject(EMPTY_STRING, it => redirectToByUrl(it,),),
    ],
} satisfies RouteObject,], {
    basename: '/',
    patchRoutesOnNavigation: it => resolveLazyRoute(it.path, it.patch,),
    future: {
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_relativeSplatPath: true,
        v7_skipActionErrorRevalidation: true,
    },
},)

/**
 * Add the {@link Route} if it exists by the {@link path} received
 *
 * @param path   The path to find a route
 * @param action The action to add a {@link RouteObject} for the {@link Route}
 */
function resolveLazyRoute(path: string, action: (routeId: NullOrString, children: MutableArray<RouteObject>,) => void,): void {
    const route = new ArrayAsCollection(ALL_ROUTES,).findFirstOrNull(it => path.endsWith(it.path,),)
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
    return <RouterProvider router={router} future={{v7_startTransition: true,}}/>
}

// @ts-ignore: TODO remove once the application is more complete
(window.test ??= {}).router = router
// @ts-ignore: TODO remove once the application is more complete
window.test.routes = router.routes[0]!.children
