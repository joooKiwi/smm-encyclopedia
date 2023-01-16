import type {RouteGroup}    from 'routes/RouteGroup'
import type {RedirectRoute} from 'routes/RedirectRoute'
import type {SimpleRoute}   from 'routes/SimpleRoute'

import {RedirectRouteContainer} from 'routes/RedirectRoute.container'
import {SimpleRouteContainer}   from 'routes/SimpleRoute.container'

export class RouteGroupContainer<NAME extends string, PATH extends string, REDIRECTS extends readonly (readonly [string, string,])[], >
    implements RouteGroup<NAME, PATH, REDIRECTS> {

    //region -------------------- Fields --------------------

    readonly #name
    readonly #path
    readonly #redirects
    #redirectNames?: readonly REDIRECTS[0][number][]
    #redirectPaths?: readonly REDIRECTS[1][number][]

    readonly #route
    readonly #redirectRoutes
    #allRoutes?: readonly (SimpleRoute<NAME, PATH> | RedirectRoute<REDIRECTS[0][number], REDIRECTS[1][number], PATH>)[]

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(name: NAME, path: PATH, renderCallback: () => JSX.Element, redirects: REDIRECTS,) {
        this.#name = name
        this.#path = path
        this.#route = SimpleRouteContainer.newInstance(name, path, renderCallback,)
        this.#redirectRoutes = (this.#redirects = redirects).map(([name, pathInRedirect,]) =>
            RedirectRouteContainer.newInstance(name, pathInRedirect, path,))
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

    public get redirectNames(): readonly REDIRECTS[0][number][] {
        return this.#redirectNames ??= this.redirects.map(it => it[0])
    }

    public get redirectPaths(): readonly REDIRECTS[1][number][] {
        return this.#redirectPaths ??= this.redirects.map(it => it[1])
    }


    public get route(): SimpleRoute<NAME, PATH> {
        return this.#route
    }

    public get redirectRoutes(): readonly RedirectRoute<REDIRECTS[0][number], REDIRECTS[1][number], PATH>[] {
        return this.#redirectRoutes
    }

    public get all(): readonly (SimpleRoute<NAME, PATH> | RedirectRoute<REDIRECTS[0][number], REDIRECTS[1][number], PATH>)[] {
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
    public static newInstance<NAME extends string, PATH extends string, REDIRECTS extends readonly (readonly [string, string,])[], >(name: NAME, path: PATH, renderCallback: () => JSX.Element, ...redirects: REDIRECTS): RouteGroup<NAME, PATH, REDIRECTS> {
        return new RouteGroupContainer(name, path, renderCallback, redirects,)
    }

    //endregion -------------------- Methods --------------------

}
