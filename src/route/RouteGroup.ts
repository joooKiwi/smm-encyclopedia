import type {SimpleRoute}         from 'route/SimpleRoute'
import type {RedirectRoute}       from 'route/RedirectRoute'
import type {SimpleRouteArgument} from 'route/SimpleRouteArgument'

export interface RouteGroup<NAME extends string, PATH extends string, REDIRECTS extends readonly SimpleRouteArgument<string, string>[], > {

    get name(): NAME

    get path(): PATH

    get redirects(): REDIRECTS

    get redirectNames(): readonly REDIRECTS[number]['name'][]

    get redirectPaths(): readonly REDIRECTS[number]['path'][]


    get route(): SimpleRoute<NAME, PATH>

    get redirectRoutes(): readonly RedirectRoute<REDIRECTS[number]['name'], REDIRECTS[number]['path'], PATH>[]

    get all(): readonly (SimpleRoute<NAME, PATH> | RedirectRoute<REDIRECTS[number]['name'], REDIRECTS[number]['path'], PATH>)[]

}
