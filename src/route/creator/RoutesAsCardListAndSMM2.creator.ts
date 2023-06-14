import type {RoutesAsCardListCreator}                                                            from 'route/creator/RoutesAsCardList.creator'
import type {PossibleCardListAndGameRouteName, PossibleGameRoutePath, PossibleCardListRoutePath} from 'route/creator/Routes.creator.types'
import type {Route}                                                                              from 'route/instance/Route'
import type {RenderCallbackByViewDisplayAndGames}                                                from 'route/instance/RouteByViewDisplayAndGames'

import {ViewDisplays}                     from 'app/withInterpreter/ViewDisplays'
import {RoutesCreator}                    from 'route/creator/Routes.creator'
import {SimpleRedirectRoute}              from 'route/instance/SimpleRedirectRoute'
import {SimpleRouteByViewDisplayAndGames} from 'route/instance/SimpleRouteByViewDisplayAndGames'

/**
 * Set a route to be applicable to a list ({@link ViewDisplays.SIMPLE_LIST simple} or {@link ViewDisplays.CARD_LIST card})
 * and the {@link Games.SUPER_MARIO_MAKER_2 SMM2} {@link Games game} from its url.
 *
 * And it does redirect every game path to the {@link Games.SUPER_MARIO_MAKER_2 SMM2} {@link Games game}
 * and the empty {@link ViewDisplays view display} with its {@link RoutesAsCardListCreator.defaultViewDisplay default value}
 *
 * @chainOfResponsibility
 * @endingChain
 */
export class RoutesAsCardListAndSMM2Creator<const PARENT_NAME extends string, const PARENT_PATH extends string, > {

    //region -------------------- Fields --------------------

    readonly #parentRoute

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(parentRoute: RoutesAsCardListCreator<PARENT_NAME, PARENT_PATH>,) {
        this.#parentRoute = parentRoute
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get parentRoute(): RoutesAsCardListCreator<PARENT_NAME, PARENT_PATH> {
        return this.#parentRoute
    }

    //endregion -------------------- Getter methods --------------------

    /**
     * Create every routes on a list ({@link ViewDisplays.SIMPLE_LIST simple} or {@link ViewDisplays.CARD_LIST card}),
     * only the {@link Games.SUPER_MARIO_MAKER_2 SMM2} {@link Games} (with the others as a {@link RedirectRoute redirection})
     * and the jointure of both.
     *
     * And if there is a default or wrong path, a simple {@link RedirectRoute redirection} to the proper location is used
     *
     * @param renderCallback The callback to render the selected application
     * @todo Simplify the creation of the games urls with view display
     */
    public create(renderCallback: RenderCallbackByViewDisplayAndGames,): readonly Route<PARENT_NAME, PossibleCardListAndGameRouteName<PARENT_NAME>, PossibleGameRoutePath<PossibleCardListRoutePath<PARENT_PATH>>>[] {
        const {parentRoute: {name, path,}, defaultViewDisplay,} = this.parentRoute,
            finalPath = `/game-2/${RoutesCreator.getUrlAsCardList(defaultViewDisplay)}${path}` as const,
            finalListPath = `/game-2/list${path}` as const,
            finalCardPath = `/game-2/card${path}` as const

        return [
            new SimpleRedirectRoute(name, name, path, finalPath,),

            new SimpleRedirectRoute(name,              `${name} (Game=1)`,            `/game-1${path}`,            finalPath,),
            new SimpleRedirectRoute(name,              `${name} (Game=3DS)`,          `/game-3ds${path}`,          finalPath,),
            new SimpleRedirectRoute(name,              `${name} (Game=2)`,            `/game-2${path}`,            finalPath,),
            new SimpleRedirectRoute(name,              `${name} (Game=all)`,          `/game-all${path}`,          finalPath,),
            new SimpleRedirectRoute(name,              `${name} (Game=1&3DS)`,        `/game-1,3ds${path}`,        finalPath,),
            new SimpleRedirectRoute(name,              `${name} (Game=1&2)`,          `/game-1,2${path}`,          finalPath,),
            new SimpleRedirectRoute(name,              `${name} (Game=3DS&2)`,        `/game-3ds,2${path}`,        finalPath,),

            new SimpleRedirectRoute(name,              `${name} (Game=1&1)`,          `/game-1,1${path}`,          finalPath,),
            new SimpleRedirectRoute(name,              `${name} (Game=3DS&3DS)`,      `/game-3ds,3ds${path}`,      finalPath,),
            new SimpleRedirectRoute(name,              `${name} (Game=2&2)`,          `/game-2,2${path}`,          finalPath,),

            new SimpleRedirectRoute(name,              `${name} (Game=3DS&1)`,        `/game-3ds,1${path}`,        finalPath,),
            new SimpleRedirectRoute(name,              `${name} (Game=2&1)`,          `/game-2,1${path}`,          finalPath,),
            new SimpleRedirectRoute(name,              `${name} (Game=2&3DS)`,        `/game-2,3ds${path}`,        finalPath,),


            new SimpleRedirectRoute(name,              `${name} (list Game=1)`,       `/game-1/list${path}`,       finalListPath,),
            new SimpleRedirectRoute(name,              `${name} (list Game=3DS)`,     `/game-3ds/list${path}`,     finalListPath,),
            new SimpleRouteByViewDisplayAndGames(name, `${name} (list Game=2)`,       finalListPath,                    ViewDisplays.SIMPLE_LIST, RoutesCreator.SMM2_ONLY_GAMES, renderCallback,),
            new SimpleRedirectRoute(name,              `${name} (list Game=all)`,     `/game-all/list${path}`,     finalListPath,),
            new SimpleRedirectRoute(name,              `${name} (list Game=1&3DS)`,   `/game-1,3ds/list${path}`,   finalListPath,),
            new SimpleRedirectRoute(name,              `${name} (list Game=1&2)`,     `/game-1,2/list${path}`,     finalListPath,),
            new SimpleRedirectRoute(name,              `${name} (list Game=3DS&2)`,   `/game-3ds,2/list${path}`,   finalListPath,),

            new SimpleRedirectRoute(name,              `${name} (list)`,              `/list${path}`,              finalListPath,),

            new SimpleRedirectRoute(name,              `${name} (list Game=1&1)`,     `/game-1,1/list${path}`,     finalListPath,),
            new SimpleRedirectRoute(name,              `${name} (list Game=3DS&3DS)`, `/game-3ds,3ds/list${path}`, finalListPath,),
            new SimpleRedirectRoute(name,              `${name} (list Game=2&2)`,     `/game-2,2/list${path}`,     finalListPath,),

            new SimpleRedirectRoute(name,              `${name} (list Game=3DS&1)`,   `/game-3ds,1/list${path}`,   finalListPath,),
            new SimpleRedirectRoute(name,              `${name} (list Game=2&1)`,     `/game-2,1/list${path}`,     finalListPath,),
            new SimpleRedirectRoute(name,              `${name} (list Game=2&3DS)`,   `/game-2,3ds/list${path}`,   finalListPath,),


            new SimpleRedirectRoute(name,              `${name} (card Game=1)`,       `/game-1/card${path}`,       finalCardPath,),
            new SimpleRedirectRoute(name,              `${name} (card Game=3DS)`,     `/game-3ds/card${path}`,     finalCardPath,),
            new SimpleRouteByViewDisplayAndGames(name, `${name} (card Game=2)`,       finalCardPath,                    ViewDisplays.CARD_LIST, RoutesCreator.SMM2_ONLY_GAMES, renderCallback,),
            new SimpleRedirectRoute(name,              `${name} (card Game=all)`,     `/game-all/card${path}`,     finalCardPath,),
            new SimpleRedirectRoute(name,              `${name} (card Game=1&3DS)`,   `/game-1,3ds/card${path}`,   finalCardPath,),
            new SimpleRedirectRoute(name,              `${name} (card Game=1&2)`,     `/game-1,2/card${path}`,     finalCardPath,),
            new SimpleRedirectRoute(name,              `${name} (card Game=3DS&2)`,   `/game-3ds,2/card${path}`,   finalCardPath,),

            new SimpleRedirectRoute(name,              `${name} (card)`,              `/card${path}`,              finalCardPath,),

            new SimpleRedirectRoute(name,              `${name} (card Game=1&1)`,     `/game-1,1/card${path}`,     finalCardPath,),
            new SimpleRedirectRoute(name,              `${name} (card Game=3DS&3DS)`, `/game-3ds,3ds/card${path}`, finalCardPath,),
            new SimpleRedirectRoute(name,              `${name} (card Game=2&2)`,     `/game-2,2/card${path}`,     finalCardPath,),

            new SimpleRedirectRoute(name,              `${name} (card Game=3DS&1)`,   `/game-3ds,1/card${path}`,   finalCardPath,),
            new SimpleRedirectRoute(name,              `${name} (card Game=2&1)`,     `/game-2,1/card${path}`,     finalCardPath,),
            new SimpleRedirectRoute(name,              `${name} (card Game=2&3DS)`,   `/game-2,3ds/card${path}`,   finalCardPath,),
        ]
    }

}
