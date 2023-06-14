import type {RoutesAsCardListCreator}                                                            from 'route/creator/RoutesAsCardList.creator'
import type {PossibleCardListAndGameRouteName, PossibleGameRoutePath, PossibleCardListRoutePath} from 'route/creator/Routes.creator.types'
import type {Route}                                                                              from 'route/instance/Route'
import type {RenderCallbackByViewDisplayAndGames}                                                from 'route/instance/RouteByViewDisplayAndGames'

import {ViewDisplays}                     from 'app/withInterpreter/ViewDisplays'
import {GroupValidUrlValue}               from 'core/game/Games.types'
import {RoutesCreator}                    from 'route/creator/Routes.creator'
import {SimpleRedirectRoute}              from 'route/instance/SimpleRedirectRoute'
import {SimpleRouteByViewDisplayAndGames} from 'route/instance/SimpleRouteByViewDisplayAndGames'

/**
 * Set a route to be applicable to a list ({@link ViewDisplays.SIMPLE_LIST simple} or {@link ViewDisplays.CARD_LIST card})
 * and any {@link Games} from its url.
 *
 * And for the {@link Games}, there is no redirection associated to each valid path.
 *
 * @chainOfResponsibility
 * @endingChain
 */
export class RoutesAsCardListAndAnyGameCreator<const PARENT_NAME extends string, const PARENT_PATH extends string, > {

    //region -------------------- Fields --------------------

    readonly #parentRoute
    readonly #defaultRoutePath

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(parentRoute: RoutesAsCardListCreator<PARENT_NAME, PARENT_PATH>, defaultRoutePath: GroupValidUrlValue = RoutesCreator.DEFAULT_GAME_PATH,) {
        this.#parentRoute = parentRoute
        this.#defaultRoutePath = defaultRoutePath
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get parentRoute(): RoutesAsCardListCreator<PARENT_NAME, PARENT_PATH> {
        return this.#parentRoute
    }

    public get defaultRoutePath(): GroupValidUrlValue {
        return this.#defaultRoutePath
    }

    //endregion -------------------- Getter methods --------------------

    /**
     * Create every routes on a list ({@link ViewDisplays.SIMPLE_LIST simple} or {@link ViewDisplays.CARD_LIST card}),
     * any selection of {@link Games} (1 to 3) and the jointure of both.
     *
     * And if there is a default or wrong path, a simple {@link RedirectRoute redirection} to the proper location is used
     *
     * @param renderCallback The callback to render the selected application
     * @todo Simplify the creation of the games urls with view display
     */
    public create(renderCallback: RenderCallbackByViewDisplayAndGames,): readonly Route<PARENT_NAME, PossibleCardListAndGameRouteName<PARENT_NAME>, PossibleGameRoutePath<PossibleCardListRoutePath<PARENT_PATH>>>[] {
        const {parentRoute: {name, path,}, defaultViewDisplay,} = this.parentRoute,
            defaultViewDisplayUrl = RoutesCreator.getUrlAsCardList(defaultViewDisplay),
            defaultGameUrl = this.defaultRoutePath

        return [
            new SimpleRedirectRoute(name, name, path, `/game-${defaultGameUrl}/${defaultViewDisplayUrl}${path}`,),

            new SimpleRedirectRoute(name,              `${name} (Game=1)`,            `/game-1${path}`,             `/game-1/${defaultViewDisplayUrl}${path}`,),
            new SimpleRedirectRoute(name,              `${name} (Game=3DS)`,          `/game-3ds${path}`,           `/game-3ds/${defaultViewDisplayUrl}${path}`,),
            new SimpleRedirectRoute(name,              `${name} (Game=2)`,            `/game-2${path}`,             `/game-2/${defaultViewDisplayUrl}${path}`,),
            new SimpleRedirectRoute(name,              `${name} (Game=all)`,          `/game-all${path}`,           `/game-all/${defaultViewDisplayUrl}${path}`,),
            new SimpleRedirectRoute(name,              `${name} (Game=1&3DS)`,        `/game-1,3ds${path}`,         `/game-1,3ds/${defaultViewDisplayUrl}${path}`,),
            new SimpleRedirectRoute(name,              `${name} (Game=1&2)`,          `/game-1,2${path}`,           `/game-1,2/${defaultViewDisplayUrl}${path}`,),
            new SimpleRedirectRoute(name,              `${name} (Game=3DS&2)`,        `/game-3ds,2${path}`,         `/game-3ds,2/${defaultViewDisplayUrl}${path}`,),

            new SimpleRedirectRoute(name,              `${name} (Game=1&1)`,          `/game-1,1${path}`,           `/game-1/${defaultViewDisplayUrl}${path}`,),
            new SimpleRedirectRoute(name,              `${name} (Game=3DS&3DS)`,      `/game-3ds,3ds${path}`,       `/game-3ds/${defaultViewDisplayUrl}${path}`,),
            new SimpleRedirectRoute(name,              `${name} (Game=2&2)`,          `/game-2,2${path}`,           `/game-2/${defaultViewDisplayUrl}${path}`,),

            new SimpleRedirectRoute(name,              `${name} (Game=3DS&1)`,        `/game-3ds,1${path}`,         `/game-1,3ds/${defaultViewDisplayUrl}${path}`,),
            new SimpleRedirectRoute(name,              `${name} (Game=2&1)`,          `/game-2,1${path}`,           `/game-1,2/${defaultViewDisplayUrl}${path}`,),
            new SimpleRedirectRoute(name,              `${name} (Game=2&3DS)`,        `/game-2,3ds${path}`,         `/game-3ds,2/${defaultViewDisplayUrl}${path}`,),


            new SimpleRouteByViewDisplayAndGames(name, `${name} (list Game=1)`,       `/game-1/list${path}`,        ViewDisplays.SIMPLE_LIST, RoutesCreator.SMM1_ONLY_GAMES, renderCallback,),
            new SimpleRouteByViewDisplayAndGames(name, `${name} (list Game=3DS)`,     `/game-3ds/list${path}`,      ViewDisplays.SIMPLE_LIST, RoutesCreator.SMM3DS_ONLY_GAMES, renderCallback,),
            new SimpleRouteByViewDisplayAndGames(name, `${name} (list Game=2)`,       `/game-2/list${path}`,        ViewDisplays.SIMPLE_LIST, RoutesCreator.SMM2_ONLY_GAMES, renderCallback,),
            new SimpleRouteByViewDisplayAndGames(name, `${name} (list Game=all)`,     `/game-all/list${path}`,      ViewDisplays.SIMPLE_LIST, RoutesCreator.ALL_GAMES, renderCallback,),
            new SimpleRouteByViewDisplayAndGames(name, `${name} (list Game=1&3DS)`,   `/game-1,3ds/list${path}`,    ViewDisplays.SIMPLE_LIST, RoutesCreator.SMM1_AND_SMM3DS_GAMES, renderCallback,),
            new SimpleRouteByViewDisplayAndGames(name, `${name} (list Game=1&2)`,     `/game-1,2/list${path}`,      ViewDisplays.SIMPLE_LIST, RoutesCreator.SMM1_AND_SMM2_GAMES, renderCallback,),
            new SimpleRouteByViewDisplayAndGames(name, `${name} (list Game=3DS&2)`,   `/game-3ds,2/list${path}`,    ViewDisplays.SIMPLE_LIST, RoutesCreator.SMM3DS_AND_SMM2_GAMES, renderCallback,),

            new SimpleRedirectRoute(name,              `${name} (list)`,              `/list${path}`,               `/game-${defaultGameUrl}/list${path}`,),
            new SimpleRedirectRoute(name,              `${name} (list Game=1&1)`,     `/game-1,1/list${path}`,      `/game-1/list${path}`,),
            new SimpleRedirectRoute(name,              `${name} (list Game=3DS&3DS)`, `/game-3ds,3ds/list${path}`,  `/game-3ds/list${path}`,),
            new SimpleRedirectRoute(name,              `${name} (list Game=2&2)`,     `/game-2,2/list${path}`,      `/game-2/list${path}`,),

            new SimpleRedirectRoute(name,              `${name} (list Game=3DS&1)`,   `/game-3ds,1/list${path}`,    `/game-1,3ds/list${path}`,),
            new SimpleRedirectRoute(name,              `${name} (list Game=2&1)`,     `/game-2,1/list${path}`,      `/game-1,2/list${path}`,),
            new SimpleRedirectRoute(name,              `${name} (list Game=2&3DS)`,   `/game-2,3ds/list${path}`,    `/game-3ds,2/list${path}`,),


            new SimpleRouteByViewDisplayAndGames(name, `${name} (card Game=1)`,       `/game-1/card${path}`,        ViewDisplays.CARD_LIST, RoutesCreator.SMM1_ONLY_GAMES, renderCallback,),
            new SimpleRouteByViewDisplayAndGames(name, `${name} (card Game=3DS)`,     `/game-3ds/card${path}`,      ViewDisplays.CARD_LIST, RoutesCreator.SMM3DS_ONLY_GAMES, renderCallback,),
            new SimpleRouteByViewDisplayAndGames(name, `${name} (card Game=2)`,       `/game-2/card${path}`,        ViewDisplays.CARD_LIST, RoutesCreator.SMM2_ONLY_GAMES, renderCallback,),
            new SimpleRouteByViewDisplayAndGames(name, `${name} (card Game=all)`,     `/game-all/card${path}`,      ViewDisplays.CARD_LIST, RoutesCreator.ALL_GAMES, renderCallback,),
            new SimpleRouteByViewDisplayAndGames(name, `${name} (card Game=1&3DS)`,   `/game-1,3ds/card${path}`,    ViewDisplays.CARD_LIST, RoutesCreator.SMM1_AND_SMM3DS_GAMES, renderCallback,),
            new SimpleRouteByViewDisplayAndGames(name, `${name} (card Game=1&2)`,     `/game-1,2/card${path}`,      ViewDisplays.CARD_LIST, RoutesCreator.SMM1_AND_SMM2_GAMES, renderCallback,),
            new SimpleRouteByViewDisplayAndGames(name, `${name} (card Game=3DS&2)`,   `/game-3ds,2/card${path}`,    ViewDisplays.CARD_LIST, RoutesCreator.SMM3DS_AND_SMM2_GAMES, renderCallback,),

            new SimpleRedirectRoute(name,              `${name} (card)`,              `/card${path}`,               `/game-${defaultGameUrl}/card${path}`,),

            new SimpleRedirectRoute(name,              `${name} (card Game=1&1)`,     `/game-1,1/card${path}`,      `/game-1/card${path}`,),
            new SimpleRedirectRoute(name,              `${name} (card Game=3DS&3DS)`, `/game-3ds,3ds/card${path}`,  `/game-3ds/card${path}`,),
            new SimpleRedirectRoute(name,              `${name} (card Game=2&2)`,     `/game-2,2/card${path}`,      `/game-2/card${path}`,),

            new SimpleRedirectRoute(name,              `${name} (card Game=3DS&1)`,   `/game-3ds,1/card${path}`,    `/game-1,3ds/card${path}`,),
            new SimpleRedirectRoute(name,              `${name} (card Game=2&1)`,     `/game-2,1/card${path}`,      `/game-1,2/card${path}`,),
            new SimpleRedirectRoute(name,              `${name} (card Game=2&3DS)`,   `/game-2,3ds/card${path}`,    `/game-3ds,2/card${path}`,),
        ]
    }

}
