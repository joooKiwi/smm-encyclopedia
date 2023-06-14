import type {SimpleListRouteName, SimpleListRoutePath}        from 'route/creator/Routes.creator.types'
import type {RedirectRoute}                                   from 'route/instance/RedirectRoute'
import type {RenderCallbackByViewDisplay, RouteByViewDisplay} from 'route/instance/RouteByViewDisplay'

import {ViewDisplays}                     from 'app/withInterpreter/ViewDisplays'
import {RoutesAsSimpleListAndSMM2Creator} from 'route/creator/RoutesAsSimpleListAndSMM2.creator'
import {RoutesCreator}                    from 'route/creator/Routes.creator'
import {SimpleRedirectRoute}              from 'route/instance/SimpleRedirectRoute'
import {SimpleRouteByViewDisplay}         from 'route/instance/SimpleRouteByViewDisplay'

/**
 * Set a route to be applicable to a "{@link ViewDisplays.SIMPLE_LIST simple list}" in its url
 *
 * @chainOfResponsibility
 * @intermediateChain
 * @see RoutesAsSimpleListAndSMM2Creator
 */
export class RoutesAsSimpleListCreator<const PARENT_NAME extends string, const PARENT_PATH extends string, > {

    //region -------------------- Fields --------------------

    readonly #parentRoute
    readonly #defaultViewDisplay

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(parentRoute: RoutesCreator<PARENT_NAME, PARENT_PATH>,) {
        this.#parentRoute = parentRoute
        this.#defaultViewDisplay = ViewDisplays.SIMPLE_LIST
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
     * Put the routes to be applicable to a {@link ViewDisplays.SIMPLE_LIST simple list}
     * as well as only the {@link Games.SUPER_MARIO_MAKER_2 SMM2} {@link Games game}
     */
    public asSMM2Game(): RoutesAsSimpleListAndSMM2Creator<PARENT_NAME, PARENT_PATH> {
        return new RoutesAsSimpleListAndSMM2Creator(this,)
    }


    /**
     * Create 2 routes encapsulated in an {@link Array}.
     *  1. A redirection
     *  2. The {@link ViewDisplays.SIMPLE_LIST simple list}
     *
     * @param renderCallback The callback to render the element with a {@link ViewDisplays}
     */
    public create(renderCallback: RenderCallbackByViewDisplay,): readonly [
        redirection: RedirectRoute<PARENT_NAME, PARENT_NAME, PARENT_PATH, SimpleListRoutePath<PARENT_PATH>>,
        simpleList: RouteByViewDisplay<PARENT_NAME, SimpleListRouteName<PARENT_NAME>, SimpleListRoutePath<PARENT_PATH>>,] {
        const {name, path,} = this.parentRoute,
            finalPath = `/${RoutesCreator.getUrlAsSimpleList(this.defaultViewDisplay)}${path}` as const

        return [
            new SimpleRedirectRoute(name, name, path, finalPath,),
            new SimpleRouteByViewDisplay(name, `${name} (list)`, finalPath, ViewDisplays.SIMPLE_LIST, renderCallback,),
        ]
    }

}
