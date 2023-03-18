import type {RouteGroup}          from 'route/RouteGroup'
import type {RedirectRoute}       from 'route/RedirectRoute'
import type {SimpleRouteArgument} from 'route/SimpleRouteArgument'
import type {SimpleRoute}         from 'route/SimpleRoute'

import {RedirectRouteContainer} from 'route/RedirectRoute.container'
import {SimpleRouteContainer}   from 'route/SimpleRoute.container'

export class RouteGroupContainer<NAME extends string, PATH extends string, REDIRECTS extends readonly SimpleRouteArgument<string, string>[], >
    implements RouteGroup<NAME, PATH, REDIRECTS> {

    //region -------------------- Fields --------------------

    readonly #name
    readonly #path
    readonly #redirects
    #redirectNames?: readonly REDIRECTS[number]['name'][]
    #redirectPaths?: readonly REDIRECTS[number]['path'][]

    readonly #route
    readonly #redirectRoutes
    #allRoutes?: readonly (SimpleRoute<NAME, PATH> | RedirectRoute<REDIRECTS[number]['name'], REDIRECTS[number]['path'], PATH>)[]

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(name: NAME, path: PATH, renderCallback: () => JSX.Element, redirects: REDIRECTS,) {
        this.#name = name
        this.#path = path
        this.#route = SimpleRouteContainer.newInstance(name, path, renderCallback,)
        this.#redirectRoutes = (this.#redirects = redirects).map(({name, path: redirectPath,}) =>
            RedirectRouteContainer.newInstance(name, redirectPath, path,))
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get name(): NAME {
        return this.#name
    }

    public get path(): PATH {
        return this.#path
    }

    public get redirects(): REDIRECTS {
        return this.#redirects
    }

    public get redirectNames(): readonly REDIRECTS[number]['name'][] {
        return this.#redirectNames ??= this.redirects.map(it => it.name)
    }

    public get redirectPaths(): readonly REDIRECTS[number]['path'][] {
        return this.#redirectPaths ??= this.redirects.map(it => it.path)
    }


    public get route(): SimpleRoute<NAME, PATH> {
        return this.#route
    }

    public get redirectRoutes(): readonly RedirectRoute<REDIRECTS[number]['name'], REDIRECTS[number]['path'], PATH>[] {
        return this.#redirectRoutes
    }

    public get all(): readonly (SimpleRoute<NAME, PATH> | RedirectRoute<REDIRECTS[number]['name'], REDIRECTS[number]['path'], PATH>)[] {
        return this.#allRoutes ??= [this.route, ...this.redirectRoutes,]
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    /**
     * Create a new route group (with a single {@link SimpleRoute simple route}). The rest are a {@link RedirectRoute redirect route}
     *
     * @param name The route name in the {@link SimpleRoute}
     * @param path The route path in the {@link SimpleRoute} & the redirect path in the {@link RedirectRoute}
     * @param renderCallback The React element to render in the {@link SimpleRoute}
     * @param redirects An array of both name & path for each {@link RedirectRoute}
     */
    public static newInstance<NAME extends string, PATH extends string, REDIRECTS extends readonly SimpleRouteArgument<string, string>[], >(name: NAME, path: PATH, renderCallback: () => JSX.Element, ...redirects: REDIRECTS): RouteGroup<NAME, PATH, REDIRECTS> {
        return new RouteGroupContainer(name, path, renderCallback, redirects,)
    }

    //endregion -------------------- Methods --------------------

}
