import type {GroupValidUrlValue}                                                                 from 'core/game/Games.types'
import type {RoutesAsCardListCreator}                                                            from 'route/creator/RoutesAsCardList.creator'
import type {PossibleCardListAndGameRouteName, PossibleGameRoutePath, PossibleCardListRoutePath} from 'route/creator/Routes.creator.types'
import type {Route}                                                                              from 'route/instance/Route'
import type {RenderCallbackByViewDisplayAndGames}                                                from 'route/instance/RouteByViewDisplayAndGames'

import {ViewDisplays}                     from 'app/withInterpreter/ViewDisplays'
import {Games}                            from 'core/game/Games'
import {RoutesCreator}                    from 'route/creator/Routes.creator'
import {SimpleRedirectRoute}              from 'route/instance/SimpleRedirectRoute'
import {SimpleRouteByViewDisplayAndGames} from 'route/instance/SimpleRouteByViewDisplayAndGames'
import {EMPTY_ARRAY}                      from 'util/emptyVariables'

//region -------------------- Import from deconstruction --------------------

const {
    SMM1_ONLY, SMM3DS_ONLY, SMM2_ONLY,
    SMM1_AND_3DS, SMM1_AND_2, SMM3DS_AND_2, ALL_GAMES,
    SMM1_2X, SMM3DS_2X, SMM2_2X,
    SMM3DS_AND_1, SMM2_AND_1, SMM2_AND_3DS,
} = Games.GamePossibilitiesCompanion.get

//endregion -------------------- Import from deconstruction --------------------

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
            defaultRoutePath = this.defaultRoutePath

        return [
            new SimpleRedirectRoute(name, name, path, `/game-${defaultRoutePath}/${defaultViewDisplayUrl}${path}`, EMPTY_ARRAY,),

            new SimpleRedirectRoute(name,              `${name} (Game=1)`,            `/game-1${path}`,             `/game-1/${defaultViewDisplayUrl}${path}`,      SMM1_ONLY,),
            new SimpleRedirectRoute(name,              `${name} (Game=3DS)`,          `/game-3ds${path}`,           `/game-3ds/${defaultViewDisplayUrl}${path}`,    SMM3DS_ONLY,),
            new SimpleRedirectRoute(name,              `${name} (Game=2)`,            `/game-2${path}`,             `/game-2/${defaultViewDisplayUrl}${path}`,      SMM2_ONLY,),
            new SimpleRedirectRoute(name,              `${name} (Game=all)`,          `/game-all${path}`,           `/game-all/${defaultViewDisplayUrl}${path}`,    ALL_GAMES,),
            new SimpleRedirectRoute(name,              `${name} (Game=1&3DS)`,        `/game-1,3ds${path}`,         `/game-1,3ds/${defaultViewDisplayUrl}${path}`,  SMM1_AND_3DS,),
            new SimpleRedirectRoute(name,              `${name} (Game=1&2)`,          `/game-1,2${path}`,           `/game-1,2/${defaultViewDisplayUrl}${path}`,    SMM1_AND_2,),
            new SimpleRedirectRoute(name,              `${name} (Game=3DS&2)`,        `/game-3ds,2${path}`,         `/game-3ds,2/${defaultViewDisplayUrl}${path}`,  SMM3DS_AND_2,),

            new SimpleRedirectRoute(name,              `${name} (Game=1&1)`,          `/game-1,1${path}`,           `/game-1/${defaultViewDisplayUrl}${path}`,      SMM1_2X,),
            new SimpleRedirectRoute(name,              `${name} (Game=3DS&3DS)`,      `/game-3ds,3ds${path}`,       `/game-3ds/${defaultViewDisplayUrl}${path}`,    SMM3DS_2X,),
            new SimpleRedirectRoute(name,              `${name} (Game=2&2)`,          `/game-2,2${path}`,           `/game-2/${defaultViewDisplayUrl}${path}`,      SMM2_2X,),

            new SimpleRedirectRoute(name,              `${name} (Game=3DS&1)`,        `/game-3ds,1${path}`,         `/game-1,3ds/${defaultViewDisplayUrl}${path}`,  SMM3DS_AND_1,),
            new SimpleRedirectRoute(name,              `${name} (Game=2&1)`,          `/game-2,1${path}`,           `/game-1,2/${defaultViewDisplayUrl}${path}`,    SMM2_AND_1,),
            new SimpleRedirectRoute(name,              `${name} (Game=2&3DS)`,        `/game-2,3ds${path}`,         `/game-3ds,2/${defaultViewDisplayUrl}${path}`,  SMM2_AND_3DS,),


            new SimpleRouteByViewDisplayAndGames(name, `${name} (list Game=1)`,       `/game-1/list${path}`,        ViewDisplays.SIMPLE_LIST, SMM1_ONLY, renderCallback,),
            new SimpleRouteByViewDisplayAndGames(name, `${name} (list Game=3DS)`,     `/game-3ds/list${path}`,      ViewDisplays.SIMPLE_LIST, SMM3DS_ONLY, renderCallback,),
            new SimpleRouteByViewDisplayAndGames(name, `${name} (list Game=2)`,       `/game-2/list${path}`,        ViewDisplays.SIMPLE_LIST, SMM2_ONLY, renderCallback,),
            new SimpleRouteByViewDisplayAndGames(name, `${name} (list Game=all)`,     `/game-all/list${path}`,      ViewDisplays.SIMPLE_LIST, ALL_GAMES, renderCallback,),
            new SimpleRouteByViewDisplayAndGames(name, `${name} (list Game=1&3DS)`,   `/game-1,3ds/list${path}`,    ViewDisplays.SIMPLE_LIST, SMM1_AND_3DS, renderCallback,),
            new SimpleRouteByViewDisplayAndGames(name, `${name} (list Game=1&2)`,     `/game-1,2/list${path}`,      ViewDisplays.SIMPLE_LIST, SMM1_AND_2, renderCallback,),
            new SimpleRouteByViewDisplayAndGames(name, `${name} (list Game=3DS&2)`,   `/game-3ds,2/list${path}`,    ViewDisplays.SIMPLE_LIST, SMM3DS_AND_2, renderCallback,),

            new SimpleRedirectRoute(name,              `${name} (list)`,              `/list${path}`,               `/game-${defaultRoutePath}/list${path}`, EMPTY_ARRAY,),
            new SimpleRedirectRoute(name,              `${name} (list Game=1&1)`,     `/game-1,1/list${path}`,      `/game-1/list${path}`,      SMM1_2X,),
            new SimpleRedirectRoute(name,              `${name} (list Game=3DS&3DS)`, `/game-3ds,3ds/list${path}`,  `/game-3ds/list${path}`,    SMM3DS_2X,),
            new SimpleRedirectRoute(name,              `${name} (list Game=2&2)`,     `/game-2,2/list${path}`,      `/game-2/list${path}`,      SMM2_2X,),

            new SimpleRedirectRoute(name,              `${name} (list Game=3DS&1)`,   `/game-3ds,1/list${path}`,    `/game-1,3ds/list${path}`,  SMM3DS_AND_1,),
            new SimpleRedirectRoute(name,              `${name} (list Game=2&1)`,     `/game-2,1/list${path}`,      `/game-1,2/list${path}`,    SMM2_AND_1,),
            new SimpleRedirectRoute(name,              `${name} (list Game=2&3DS)`,   `/game-2,3ds/list${path}`,    `/game-3ds,2/list${path}`,  SMM2_AND_3DS,),


            new SimpleRouteByViewDisplayAndGames(name, `${name} (card Game=1)`,       `/game-1/card${path}`,        ViewDisplays.CARD_LIST, SMM1_ONLY,    renderCallback,),
            new SimpleRouteByViewDisplayAndGames(name, `${name} (card Game=3DS)`,     `/game-3ds/card${path}`,      ViewDisplays.CARD_LIST, SMM3DS_ONLY,  renderCallback,),
            new SimpleRouteByViewDisplayAndGames(name, `${name} (card Game=2)`,       `/game-2/card${path}`,        ViewDisplays.CARD_LIST, SMM2_ONLY,    renderCallback,),
            new SimpleRouteByViewDisplayAndGames(name, `${name} (card Game=all)`,     `/game-all/card${path}`,      ViewDisplays.CARD_LIST, ALL_GAMES,    renderCallback,),
            new SimpleRouteByViewDisplayAndGames(name, `${name} (card Game=1&3DS)`,   `/game-1,3ds/card${path}`,    ViewDisplays.CARD_LIST, SMM1_AND_3DS, renderCallback,),
            new SimpleRouteByViewDisplayAndGames(name, `${name} (card Game=1&2)`,     `/game-1,2/card${path}`,      ViewDisplays.CARD_LIST, SMM1_AND_2,   renderCallback,),
            new SimpleRouteByViewDisplayAndGames(name, `${name} (card Game=3DS&2)`,   `/game-3ds,2/card${path}`,    ViewDisplays.CARD_LIST, SMM3DS_AND_2, renderCallback,),

            new SimpleRedirectRoute(name,              `${name} (card)`,              `/card${path}`,               `/game-${defaultRoutePath}/card${path}`, EMPTY_ARRAY,),

            new SimpleRedirectRoute(name,              `${name} (card Game=1&1)`,     `/game-1,1/card${path}`,      `/game-1/card${path}`,      SMM1_2X,),
            new SimpleRedirectRoute(name,              `${name} (card Game=3DS&3DS)`, `/game-3ds,3ds/card${path}`,  `/game-3ds/card${path}`,    SMM3DS_2X,),
            new SimpleRedirectRoute(name,              `${name} (card Game=2&2)`,     `/game-2,2/card${path}`,      `/game-2/card${path}`,      SMM2_2X,),

            new SimpleRedirectRoute(name,              `${name} (card Game=3DS&1)`,   `/game-3ds,1/card${path}`,    `/game-1,3ds/card${path}`,  SMM3DS_AND_1,),
            new SimpleRedirectRoute(name,              `${name} (card Game=2&1)`,     `/game-2,1/card${path}`,      `/game-1,2/card${path}`,    SMM2_AND_1,),
            new SimpleRedirectRoute(name,              `${name} (card Game=2&3DS)`,   `/game-2,3ds/card${path}`,    `/game-3ds,2/card${path}`,  SMM2_AND_3DS,),
        ]
    }

}
