import type {SimpleRoute}   from 'routes/SimpleRoute'
import type {RedirectRoute} from 'routes/RedirectRoute'

export interface RouteGroup<NAME extends string, PATH extends string, REDIRECTS extends readonly (readonly [name: string, path: string,])[], > {

    get name(): NAME

    get path(): PATH

    get redirects(): REDIRECTS

    get redirectNames(): readonly REDIRECTS[0][number][]

    get redirectPaths(): readonly REDIRECTS[0][number][]


    get route(): SimpleRoute<NAME, PATH>

    get redirectRoutes(): readonly RedirectRoute<REDIRECTS[0][number], REDIRECTS[1][number], PATH>[]

    get all(): readonly (SimpleRoute<NAME, PATH>|RedirectRoute<REDIRECTS[0][number], REDIRECTS[1][number], PATH>)[]

}
