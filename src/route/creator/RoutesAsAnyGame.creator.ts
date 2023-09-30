import type {GroupValidUrlValue}                           from 'core/game/Games.types'
import type {PossibleGameRouteName, PossibleGameRoutePath} from 'route/creator/Routes.creator.types'
import type {Route}                                        from 'route/instance/Route'
import type {RenderCallbackByGames}                        from 'route/instance/RouteByGames'

import {RoutesCreator}       from 'route/creator/Routes.creator'
import {SimpleRedirectRoute} from 'route/instance/SimpleRedirectRoute'
import {SimpleRouteByGames}  from 'route/instance/SimpleRouteByGames'
import {Games}               from 'core/game/Games'
import {EMPTY_ARRAY}         from 'util/emptyVariables'

//region -------------------- Import from deconstruction --------------------

const {
    SMM1_ONLY, SMM3DS_ONLY, SMM2_ONLY,
    SMM1_AND_3DS, SMM1_AND_2, SMM3DS_AND_2, ALL_GAMES,
    SMM1_2X, SMM3DS_2X, SMM2_2X,
    SMM3DS_AND_1, SMM2_AND_1, SMM2_AND_3DS,
} = Games.GamePossibilitiesCompanion.get

//endregion -------------------- Import from deconstruction --------------------

/**
 * Set a route to be applicable to any {@link Games} from its url.
 *
 * And it does not apply redirection on any valid url to change the games.
 *
 * @chainOfResponsibility
 * @endingChain
 */
export class RoutesAsAnyGameCreator<const PARENT_NAME extends string, const PARENT_PATH extends string, > {

    //region -------------------- Fields --------------------

    readonly #parentRoute
    readonly #defaultRoutePath

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(parentRoute: RoutesCreator<PARENT_NAME, PARENT_PATH>, defaultRoutePath: GroupValidUrlValue = RoutesCreator.DEFAULT_GAME_PATH,) {
        this.#parentRoute = parentRoute
        this.#defaultRoutePath = defaultRoutePath
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get parentRoute(): RoutesCreator<PARENT_NAME, PARENT_PATH> {
        return this.#parentRoute
    }

    public get defaultRoutePath(): GroupValidUrlValue {
        return this.#defaultRoutePath
    }

    //endregion -------------------- Getter methods --------------------

    /**
     * Create every route applicable to any selection of {@link Games} as
     *  - a single one
     *  - a group of 2
     *  - all of them
     *
     * And if there is some duplicate or wrong paths,
     * a simple {@link RedirectRoute redirection} is created instead
     *
     * @note The first route is always the basic path with the proper redirection
     *
     * @param renderCallback The callback to render the selected application
     * @todo Simplify the creation of the games urls
     */
    public create(renderCallback: RenderCallbackByGames,): readonly Route<PARENT_NAME, PossibleGameRouteName<PARENT_NAME>, PossibleGameRoutePath<PARENT_PATH>>[] {
        const {name, path,} = this.parentRoute,
            defaultRoutePath = this.defaultRoutePath

        return [
            new SimpleRedirectRoute(name, name, path, `/game-${defaultRoutePath}${path}`, EMPTY_ARRAY,),

            new SimpleRouteByGames(name, `${name} (Game=1)`,       `/game-1${path}`,       SMM1_ONLY,    renderCallback,),
            new SimpleRouteByGames(name, `${name} (Game=3DS)`,     `/game-3ds${path}`,     SMM3DS_ONLY,  renderCallback,),
            new SimpleRouteByGames(name, `${name} (Game=2)`,       `/game-2${path}`,       SMM2_ONLY,    renderCallback,),
            new SimpleRouteByGames(name, `${name} (Game=all)`,     `/game-all${path}`,     ALL_GAMES,    renderCallback,),
            new SimpleRouteByGames(name, `${name} (Game=1&3DS)`,   `/game-1,3ds${path}`,   SMM1_AND_3DS, renderCallback,),
            new SimpleRouteByGames(name, `${name} (Game=1&2)`,     `/game-1,2${path}`,     SMM1_AND_2,   renderCallback,),
            new SimpleRouteByGames(name, `${name} (Game=3DS&2)`,   `/game-3ds,2${path}`,   SMM3DS_AND_2, renderCallback,),

            new SimpleRedirectRoute(name, `${name} (Game=1&1)`,     `/game-1,1${path}`,     `/game-1${path}`,     SMM1_2X,),
            new SimpleRedirectRoute(name, `${name} (Game=3DS&3DS)`, `/game-3ds,3ds${path}`, `/game-3ds${path}`,   SMM3DS_2X,),
            new SimpleRedirectRoute(name, `${name} (Game=2&2)`,     `/game-2,2${path}`,     `/game-2${path}`,     SMM2_2X,),

            new SimpleRedirectRoute(name, `${name} (Game=3DS&1)`,   `/game-3ds,1${path}`,   `/game-1,3ds${path}`, SMM3DS_AND_1,),
            new SimpleRedirectRoute(name, `${name} (Game=2&1)`,     `/game-2,1${path}`,     `/game-1,2${path}`,   SMM2_AND_1,),
            new SimpleRedirectRoute(name, `${name} (Game=2&3DS)`,   `/game-2,3ds${path}`,   `/game-3ds,2${path}`, SMM2_AND_3DS,),
        ]
    }

}
