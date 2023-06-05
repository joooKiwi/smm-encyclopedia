import type {GroupValidUrlValue}                           from 'core/game/Games.types'
import type {PossibleGameRouteName, PossibleGameRoutePath} from 'route/creator/Routes.creator.types'
import type {Route}                                        from 'route/instance/Route'
import type {RenderCallbackByGames}                        from 'route/instance/RouteByGames'

import {RoutesCreator}       from 'route/creator/Routes.creator'
import {SimpleRedirectRoute} from 'route/instance/SimpleRedirectRoute'
import {SimpleRouteByGames}  from 'route/instance/SimpleRouteByGames'

/**
 * Set a route to be applicable to any {@link Games} from its url.
 *
 * And it does not apply redirection on any valid url to change the games.
 *
 * @chainOfResponsibility
 * @endingChain
 */
export class RoutesAsAnyGameCreator<PARENT_NAME extends string, PARENT_PATH extends string, > {

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
    public create(renderCallback: RenderCallbackByGames,): readonly Route<PossibleGameRouteName<PARENT_NAME>, PossibleGameRoutePath<PARENT_PATH>>[] {
        const {name, path,} = this.parentRoute

        return [
            new SimpleRedirectRoute(name, path, `/game-${this.defaultRoutePath}${path}`,),

            new SimpleRouteByGames( `${name} (Game=1)`,       `/game-1${path}`,       RoutesCreator.SMM1_ONLY_GAMES, renderCallback,),
            new SimpleRouteByGames( `${name} (Game=3DS)`,     `/game-3ds${path}`,     RoutesCreator.SMM3DS_ONLY_GAMES, renderCallback,),
            new SimpleRouteByGames( `${name} (Game=2)`,       `/game-2${path}`,       RoutesCreator.SMM2_ONLY_GAMES, renderCallback,),
            new SimpleRouteByGames( `${name} (Game=all)`,     `/game-all${path}`,     RoutesCreator.ALL_GAMES, renderCallback,),
            new SimpleRouteByGames( `${name} (Game=1&3DS)`,   `/game-1,3ds${path}`,   RoutesCreator.SMM1_AND_SMM3DS_GAMES, renderCallback,),
            new SimpleRouteByGames( `${name} (Game=1&2)`,     `/game-1,2${path}`,     RoutesCreator.SMM1_AND_SMM2_GAMES, renderCallback,),
            new SimpleRouteByGames( `${name} (Game=3DS&2)`,   `/game-3ds,2${path}`,   RoutesCreator.SMM3DS_AND_SMM2_GAMES, renderCallback,),

            new SimpleRedirectRoute(`${name} (Game=1&1)`,     `/game-1,1${path}`,     `/game-1${path}`,),
            new SimpleRedirectRoute(`${name} (Game=3DS&3DS)`, `/game-3ds,3ds${path}`, `/game-3ds${path}`,),
            new SimpleRedirectRoute(`${name} (Game=2&2)`,     `/game-2,2${path}`,     `/game-2${path}`,),

            new SimpleRedirectRoute(`${name} (Game=3DS&1)`,   `/game-3ds,1${path}`,   `/game-1,3ds${path}`,),
            new SimpleRedirectRoute(`${name} (Game=2&1)`,     `/game-2,1${path}`,     `/game-1,2${path}`,),
            new SimpleRedirectRoute(`${name} (Game=2&3DS)`,   `/game-2,3ds${path}`,   `/game-3ds,2${path}`,),
        ]
    }

}
