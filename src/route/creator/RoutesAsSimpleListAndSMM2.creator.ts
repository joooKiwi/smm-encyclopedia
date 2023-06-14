import type {RoutesAsSimpleListCreator}                                                              from 'route/creator/RoutesAsSimpleList.creator'
import type {PossibleGameRoutePath, PossibleSimpleListAndGameRouteName, PossibleSimpleListRoutePath} from 'route/creator/Routes.creator.types'
import type {Route}                                                                                  from 'route/instance/Route'
import type {RenderCallbackByViewDisplayAndGames}                                                    from 'route/instance/RouteByViewDisplayAndGames'

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
 * Set a route to be applicable to a {@link ViewDisplays.SIMPLE_LIST simple list}
 * and the {@link Games.SUPER_MARIO_MAKER_2 SMM2} {@link Games game} from its url.
 *
 * And it does redirect every game path to the {@link Games.SUPER_MARIO_MAKER_2 SMM2} {@link Games game}
 * and the empty {@link ViewDisplays view display} with its {@link RoutesAsSimpleListCreator.defaultViewDisplay default value}
 *
 * @chainOfResponsibility
 * @endingChain
 */
export class RoutesAsSimpleListAndSMM2Creator<const PARENT_NAME extends string, const PARENT_PATH extends string, > {

    //region -------------------- Fields --------------------

    readonly #parentRoute

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(parentRoute: RoutesAsSimpleListCreator<PARENT_NAME, PARENT_PATH>,) {
        this.#parentRoute = parentRoute
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get parentRoute(): RoutesAsSimpleListCreator<PARENT_NAME, PARENT_PATH> {
        return this.#parentRoute
    }

    //endregion -------------------- Getter methods --------------------

    /**
     * Create every routes on a {@link ViewDisplays.SIMPLE_LIST simple list},
     * only the {@link Games.SUPER_MARIO_MAKER_2 SMM2} {@link Games} (with the others as a {@link RedirectRoute redirection})
     * and the jointure of both.
     *
     * And if there is a default or wrong path, a simple {@link RedirectRoute redirection} to the proper location is used
     *
     * @param renderCallback The callback to render the selected application
     * @todo Simplify the creation of the games urls with view display
     */
    public create(renderCallback: RenderCallbackByViewDisplayAndGames,): readonly Route<PARENT_NAME, PossibleSimpleListAndGameRouteName<PARENT_NAME>, PossibleGameRoutePath<PossibleSimpleListRoutePath<PARENT_PATH>>>[] {
        const {parentRoute: {name, path,}, defaultViewDisplay,} = this.parentRoute,
            finalPath = `/game-2/${RoutesCreator.getUrlAsSimpleList(defaultViewDisplay)}${path}` as const

        return [
            new SimpleRedirectRoute(name, name, path, finalPath, EMPTY_ARRAY,),

            new SimpleRedirectRoute(name,              `${name} (Game=1)`,            `/game-1${path}`,             finalPath, SMM1_ONLY,),
            new SimpleRedirectRoute(name,              `${name} (Game=3DS)`,          `/game-3ds${path}`,           finalPath, SMM3DS_ONLY,),
            new SimpleRedirectRoute(name,              `${name} (Game=2)`,            `/game-2${path}`,             finalPath, SMM2_ONLY,),
            new SimpleRedirectRoute(name,              `${name} (Game=all)`,          `/game-all${path}`,           finalPath, ALL_GAMES,),
            new SimpleRedirectRoute(name,              `${name} (Game=1&3DS)`,        `/game-1,3ds${path}`,         finalPath, SMM1_AND_3DS,),
            new SimpleRedirectRoute(name,              `${name} (Game=1&2)`,          `/game-1,2${path}`,           finalPath, SMM1_AND_2,),
            new SimpleRedirectRoute(name,              `${name} (Game=3DS&2)`,        `/game-3ds,2${path}`,         finalPath, SMM3DS_AND_2,),

            new SimpleRedirectRoute(name,              `${name} (Game=1&1)`,          `/game-1,1${path}`,           finalPath, SMM1_2X,),
            new SimpleRedirectRoute(name,              `${name} (Game=3DS&3DS)`,      `/game-3ds,3ds${path}`,       finalPath, SMM3DS_2X,),
            new SimpleRedirectRoute(name,              `${name} (Game=2&2)`,          `/game-2,2${path}`,           finalPath, SMM2_2X,),

            new SimpleRedirectRoute(name,              `${name} (Game=3DS&1)`,        `/game-3ds,1${path}`,         finalPath, SMM3DS_AND_1,),
            new SimpleRedirectRoute(name,              `${name} (Game=2&1)`,          `/game-2,1${path}`,           finalPath, SMM2_AND_1,),
            new SimpleRedirectRoute(name,              `${name} (Game=2&3DS)`,        `/game-2,3ds${path}`,         finalPath, SMM2_AND_3DS,),


            new SimpleRedirectRoute(name,              `${name} (list Game=1)`,       `/game-1/list${path}`,        finalPath, SMM1_ONLY,),
            new SimpleRedirectRoute(name,              `${name} (list Game=3DS)`,     `/game-3ds/list${path}`,      finalPath, SMM3DS_ONLY,),
            new SimpleRouteByViewDisplayAndGames(name, `${name} (list Game=2)`,       `/game-2/list${path}`,        ViewDisplays.SIMPLE_LIST, SMM2_ONLY, renderCallback,),
            new SimpleRedirectRoute(name,              `${name} (list Game=all)`,     `/game-all/list${path}`,      finalPath, ALL_GAMES,),
            new SimpleRedirectRoute(name,              `${name} (list Game=1&3DS)`,   `/game-1,3ds/list${path}`,    finalPath, SMM1_AND_3DS,),
            new SimpleRedirectRoute(name,              `${name} (list Game=1&2)`,     `/game-1,2/list${path}`,      finalPath, SMM1_AND_2,),
            new SimpleRedirectRoute(name,              `${name} (list Game=3DS&2)`,   `/game-3ds,2/list${path}`,    finalPath, SMM3DS_AND_2,),

            new SimpleRedirectRoute(name,              `${name} (list)`,              `/list${path}`,               finalPath, EMPTY_ARRAY,),
            new SimpleRedirectRoute(name,              `${name} (list Game=1&1)`,     `/game-1,1/list${path}`,      finalPath, SMM1_2X,),
            new SimpleRedirectRoute(name,              `${name} (list Game=3DS&3DS)`, `/game-3ds,3ds/list${path}`,  finalPath, SMM3DS_2X,),
            new SimpleRedirectRoute(name,              `${name} (list Game=2&2)`,     `/game-2,2/list${path}`,      finalPath, SMM2_2X,),

            new SimpleRedirectRoute(name,              `${name} (list Game=3DS&1)`,   `/game-3ds,1/list${path}`,    finalPath, SMM3DS_AND_1,),
            new SimpleRedirectRoute(name,              `${name} (list Game=2&1)`,     `/game-2,1/list${path}`,      finalPath, SMM2_AND_1,),
            new SimpleRedirectRoute(name,              `${name} (list Game=2&3DS)`,   `/game-2,3ds/list${path}`,    finalPath, SMM2_AND_3DS,),
        ]
    }

}
