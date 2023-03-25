import type {GroupValidUrlValue}                                                             from 'core/game/Games.types'
import type {CardListRouteName, CardListRoutePath, SimpleListRouteName, SimpleListRoutePath} from 'route/creator/Routes.creator.types'
import type {RedirectRoute}                                                                  from 'route/instance/RedirectRoute'
import type {RenderCallbackByViewDisplay, RouteByViewDisplay}                                from 'route/instance/RouteByViewDisplay'

import {ViewDisplays}                      from 'app/withInterpreter/ViewDisplays'
import {RoutesAsCardListAndAnyGameCreator} from 'route/creator/RoutesAsCardListAndAnyGame.creator'
import {RoutesAsCardListAndSMM2Creator}    from 'route/creator/RoutesAsCardListAndSMM2.creator'
import {RoutesCreator}                     from 'route/creator/Routes.creator'
import {SimpleRedirectRoute}               from 'route/instance/SimpleRedirectRoute'
import {SimpleRouteByViewDisplay}          from 'route/instance/SimpleRouteByViewDisplay'

/**
 * Set a route to be applicable to either a "{@link ViewDisplays.SIMPLE_LIST simple list}"
 * or a "{@link ViewDisplays.CARD_LIST card list}" in its url
 *
 * @chainOfResponsibility
 * @intermediateChain
 * @see RoutesAsCardListAndAnyGameCreator
 * @see RoutesAsCardListAndSMM2Creator
 */
export class RoutesAsCardListCreator<PARENT_NAME extends string, PARENT_PATH extends string, > {

    //region -------------------- Fields --------------------

    readonly #parentRoute
    readonly #defaultViewDisplay

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(parentRoute: RoutesCreator<PARENT_NAME, PARENT_PATH>, defaultViewDisplay: ViewDisplays = ViewDisplays.CARD_LIST,) {
        this.#parentRoute = parentRoute
        this.#defaultViewDisplay = defaultViewDisplay
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get parentRoute(): RoutesCreator<PARENT_NAME, PARENT_PATH> {
        return this.#parentRoute
    }

    public get defaultViewDisplay(): ViewDisplays {
        return this.#defaultViewDisplay
    }

    //endregion -------------------- Getter methods --------------------

    /**
     * Put the routes to be applicable to a list ({@link ViewDisplays.SIMPLE_LIST simple} or {@link ViewDisplays.CARD_LIST card})
     * as well as any {@link Games game} by keeping its game paths
     *
     * @param defaultRoutePath  The default {@link Games.selectedGames} to be used
     */
    public asAnyGame(defaultRoutePath?: GroupValidUrlValue,): RoutesAsCardListAndAnyGameCreator<PARENT_NAME, PARENT_PATH> {
        return new RoutesAsCardListAndAnyGameCreator(this, defaultRoutePath,)
    }

    /**
     * Put the routes to be applicable to a list ({@link ViewDisplays.SIMPLE_LIST simple} or {@link ViewDisplays.CARD_LIST card})
     * as well as only the {@link Games.SUPER_MARIO_MAKER_2 SMM2} {@link Games game}
     */
    public asSMM2Game(): RoutesAsCardListAndSMM2Creator<PARENT_NAME, PARENT_PATH> {
        return new RoutesAsCardListAndSMM2Creator(this,)
    }


    /**
     * Create 3 routes encapsulated in an {@link Array}.
     *  1. A redirection dependant on the {@link defaultViewDisplay default} {@link ViewDisplays view display}
     *  2. The {@link ViewDisplays.SIMPLE_LIST simple list} route
     *  3. The {@link ViewDisplays.CARD_LIST card list} route
     *
     * @param renderCallback The callback to render the element with a {@link ViewDisplays}
     */
    public create(renderCallback: RenderCallbackByViewDisplay,): readonly [RedirectRoute<PARENT_NAME, PARENT_PATH, | SimpleListRoutePath<PARENT_PATH> | CardListRoutePath<PARENT_PATH>>, RouteByViewDisplay<SimpleListRouteName<PARENT_NAME>, SimpleListRoutePath<PARENT_PATH>>, RouteByViewDisplay<CardListRouteName<PARENT_NAME>, CardListRoutePath<PARENT_PATH>>,] {
        const {name, path,} = this.parentRoute

        return [
            new SimpleRedirectRoute(name, path, `/${RoutesCreator.getUrlAsCardList(this.defaultViewDisplay)}${path}`,),
            new SimpleRouteByViewDisplay(`${name} (list)`, `/list${path}`, ViewDisplays.SIMPLE_LIST, renderCallback,),
            new SimpleRouteByViewDisplay(`${name} (card)`, `/card${path}`, ViewDisplays.CARD_LIST, renderCallback,),
        ]
    }


}
