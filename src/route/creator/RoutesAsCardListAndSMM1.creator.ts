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
} = Games.GamePossibilitiesCompanion.get

//endregion -------------------- Import from deconstruction --------------------

export class RoutesAsCardListAndSMM1Creator<PARENT_NAME extends string, PARENT_PATH extends string, > {

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
     * only the {@link Games.SUPER_MARIO_MAKER_1 SMM1} {@link Games} (with the others as a {@link RedirectRoute redirection})
     * and the jointure of both.
     *
     * And if there is a default or wrong path, a simple {@link RedirectRoute redirection} to the proper location is used
     *
     * @param renderCallback The callback to render the selected application
     * @todo Simplify the creation of the games urls with view display
     */
    public create(renderCallback: RenderCallbackByViewDisplayAndGames,): readonly Route<PARENT_NAME, PossibleCardListAndGameRouteName<PARENT_NAME>, PossibleGameRoutePath<PossibleCardListRoutePath<PARENT_PATH>>>[] {
        const {parentRoute: {name, path,}, defaultViewDisplay,} = this.parentRoute,
            finalPath = `/game-1/${RoutesCreator.getUrlAsCardList(defaultViewDisplay)}${path}` as const,
            finalListPath = `/game-1/list${path}` as const,
            finalCardPath = `/game-1/card${path}` as const

        return [
            new SimpleRedirectRoute(name, name, path, finalPath, EMPTY_ARRAY,),

            new SimpleRedirectRoute(name,              `${name} (Game=1)`,            `/game-1${path}`,            finalPath, SMM1_ONLY,),
            new SimpleRedirectRoute(name,              `${name} (Game=3DS)`,          `/game-3ds${path}`,          finalPath, SMM3DS_ONLY,),
            new SimpleRedirectRoute(name,              `${name} (Game=2)`,            `/game-2${path}`,            finalPath, SMM2_ONLY,),
            new SimpleRedirectRoute(name,              `${name} (Game=all)`,          `/game-all${path}`,          finalPath, ALL_GAMES,),
            new SimpleRedirectRoute(name,              `${name} (Game=1&3DS)`,        `/game-1,3ds${path}`,        finalPath, SMM1_AND_3DS,),
            new SimpleRedirectRoute(name,              `${name} (Game=1&2)`,          `/game-1,2${path}`,          finalPath, SMM1_AND_2,),
            new SimpleRedirectRoute(name,              `${name} (Game=3DS&2)`,        `/game-3ds,2${path}`,        finalPath, SMM3DS_AND_2,),


            new SimpleRouteByViewDisplayAndGames(name, `${name} (list Game=1)`,        finalListPath,                   ViewDisplays.SIMPLE_LIST, SMM1_ONLY, renderCallback,),
            new SimpleRedirectRoute(name,              `${name} (list Game=3DS)`,     `/game-3ds/list${path}`,     finalListPath,            SMM3DS_ONLY,),
            new SimpleRedirectRoute(name,              `${name} (list Game=2)`,       `/game-2/list${path}`,       finalListPath,            SMM2_ONLY,),
            new SimpleRedirectRoute(name,              `${name} (list Game=all)`,     `/game-all/list${path}`,     finalListPath,            ALL_GAMES,),
            new SimpleRedirectRoute(name,              `${name} (list Game=1&3DS)`,   `/game-1,3ds/list${path}`,   finalListPath,            SMM1_AND_3DS,),
            new SimpleRedirectRoute(name,              `${name} (list Game=1&2)`,     `/game-1,2/list${path}`,     finalListPath,            SMM1_AND_2,),
            new SimpleRedirectRoute(name,              `${name} (list Game=3DS&2)`,   `/game-3ds,2/list${path}`,   finalListPath,            SMM3DS_AND_2,),

            new SimpleRedirectRoute(name,              `${name} (list)`,              `/list${path}`,              finalListPath,            EMPTY_ARRAY,),


            new SimpleRouteByViewDisplayAndGames(name, `${name} (card Game=1)`,       finalCardPath,                    ViewDisplays.CARD_LIST, SMM1_ONLY, renderCallback,),
            new SimpleRedirectRoute(name,              `${name} (card Game=3DS)`,     `/game-3ds/card${path}`,     finalCardPath,          SMM3DS_ONLY,),
            new SimpleRedirectRoute(name,              `${name} (card Game=2)`,       `/game-2/card${path}`,       finalCardPath,          SMM2_ONLY,),
            new SimpleRedirectRoute(name,              `${name} (card Game=all)`,     `/game-all/card${path}`,     finalCardPath,          ALL_GAMES,),
            new SimpleRedirectRoute(name,              `${name} (card Game=1&3DS)`,   `/game-1,3ds/card${path}`,   finalCardPath,          SMM1_AND_3DS,),
            new SimpleRedirectRoute(name,              `${name} (card Game=1&2)`,     `/game-1,2/card${path}`,     finalCardPath,          SMM1_AND_2,),
            new SimpleRedirectRoute(name,              `${name} (card Game=3DS&2)`,   `/game-3ds,2/card${path}`,   finalCardPath,          SMM3DS_AND_2,),

            new SimpleRedirectRoute(name,              `${name} (card)`,              `/card${path}`,              finalCardPath,          EMPTY_ARRAY,),
        ]
    }

}
