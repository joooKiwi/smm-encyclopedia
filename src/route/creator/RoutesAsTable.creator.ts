import type {CardListRouteName, CardListRoutePath, SimpleListRouteName, SimpleListRoutePath, TableRouteName, TableRoutePath} from 'route/creator/Routes.creator.types'
import type {RedirectRoute}                                                                                                  from 'route/instance/RedirectRoute'
import type {RenderCallbackByViewDisplay, RouteByViewDisplay}                                                                from 'route/instance/RouteByViewDisplay'

import {ViewDisplays}                   from 'app/withInterpreter/ViewDisplays'
import {GroupValidUrlValue}             from 'core/game/Games.types'
import {RoutesAsTableAndAnyGameCreator} from 'route/creator/RoutesAsTableAndAnyGame.creator'
import {RoutesAsTableAndSMM1Creator}    from 'route/creator/RoutesAsTableAndSMM1.creator'
import {RoutesAsTableAndSMM2Creator}    from 'route/creator/RoutesAsTableAndSMM2.creator'
import {RoutesCreator}                  from 'route/creator/Routes.creator'
import {SimpleRedirectRoute}            from 'route/instance/SimpleRedirectRoute'
import {SimpleRouteByViewDisplay}       from 'route/instance/SimpleRouteByViewDisplay'
import {EMPTY_ARRAY}                    from 'util/emptyVariables'

/**
 * Set a route to be applicable to a {@link ViewDisplays view display} ("{@link ViewDisplays.SIMPLE_LIST simple list}",
 * a "{@link ViewDisplays.CARD_LIST card list}" or a {@link ViewDisplays.TABLE table}) in its url
 *
 * @chainOfResponsibility
 * @intermediateChain
 * @see RoutesAsTableAndAnyGameCreator
 * @see RoutesAsTableAndSMM1Creator
 * @see RoutesAsTableAndSMM2Creator
 */
export class RoutesAsTableCreator<const PARENT_NAME extends string, const PARENT_PATH extends string, > {

    //region -------------------- Fields --------------------

    readonly #parentRoute
    readonly #defaultViewDisplay

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(parentRoute: RoutesCreator<PARENT_NAME, PARENT_PATH>, defaultViewDisplay: ViewDisplays = ViewDisplays.TABLE,) {
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
     * Put the routes to be applicable to a {@link ViewDisplays view display} ({@link ViewDisplays.SIMPLE_LIST simple list}, {@link ViewDisplays.CARD_LIST card list} or a {@link ViewDisplays.TABLE table})
     * as well as any {@link Games game} by keeping its game paths
     *
     * @param defaultRoutePath  The default {@link Games.selectedGames} to be used
     */
    public asAnyGame(defaultRoutePath?: GroupValidUrlValue,): RoutesAsTableAndAnyGameCreator<PARENT_NAME, PARENT_PATH> {
        return new RoutesAsTableAndAnyGameCreator(this, defaultRoutePath,)
    }

    /**
     * Put the routes to be applicable to a {@link ViewDisplays view display} ({@link ViewDisplays.SIMPLE_LIST simple list}, {@link ViewDisplays.CARD_LIST card list} or a {@link ViewDisplays.TABLE table})
     * as well as only the {@link Games.SUPER_MARIO_MAKER_1 SMM1} {@link Games game}
     */
    public asSMM1Game(): RoutesAsTableAndSMM1Creator<PARENT_NAME, PARENT_PATH> {
        return new RoutesAsTableAndSMM1Creator(this,)
    }

    /**
     * Put the routes to be applicable to a {@link ViewDisplays view display} ({@link ViewDisplays.SIMPLE_LIST simple list}, {@link ViewDisplays.CARD_LIST card list} or a {@link ViewDisplays.TABLE table})
     * as well as only the {@link Games.SUPER_MARIO_MAKER_2 SMM2} {@link Games game}
     */
    public asSMM2Game(): RoutesAsTableAndSMM2Creator<PARENT_NAME, PARENT_PATH> {
        return new RoutesAsTableAndSMM2Creator(this,)
    }


    /**
     * Create 4 routes encapsulated in an {@link Array}.
     *  1. A redirection dependant on the {@link defaultViewDisplay default} {@link ViewDisplays view display}
     *  2. The {@link ViewDisplays.SIMPLE_LIST simple list} route
     *  3. The {@link ViewDisplays.CARD_LIST card list} route
     *  4. The {@link ViewDisplays.TABLE table} route
     *
     * @param renderCallback The callback to render the element with a {@link ViewDisplays}
     */
    public create(renderCallback: RenderCallbackByViewDisplay,): readonly [
        redirection: RedirectRoute<PARENT_NAME, PARENT_NAME, PARENT_PATH, | SimpleListRoutePath<PARENT_PATH> | CardListRoutePath<PARENT_PATH> | TableRoutePath<PARENT_PATH>>,
        simpleList: RouteByViewDisplay<PARENT_NAME, SimpleListRouteName<PARENT_NAME>, SimpleListRoutePath<PARENT_PATH>>,
        cardList: RouteByViewDisplay<PARENT_NAME, CardListRouteName<PARENT_NAME>, CardListRoutePath<PARENT_PATH>>,
        table: RouteByViewDisplay<PARENT_NAME, TableRouteName<PARENT_NAME>, TableRoutePath<PARENT_PATH>>,] {
        const {name, path,} = this.parentRoute

        return [
            new SimpleRedirectRoute(name, name, path, `/${RoutesCreator.getUrlAsTable(this.defaultViewDisplay)}${path}`, EMPTY_ARRAY,),
            new SimpleRouteByViewDisplay(name, `${name} (list)`, `/list${path}`, ViewDisplays.SIMPLE_LIST, renderCallback,),
            new SimpleRouteByViewDisplay(name, `${name} (card)`, `/card${path}`, ViewDisplays.CARD_LIST, renderCallback,),
            new SimpleRouteByViewDisplay(name, `${name} (table)`, `/table${path}`, ViewDisplays.TABLE, renderCallback,),
        ]
    }

}
