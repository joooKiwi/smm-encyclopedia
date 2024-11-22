import type {LoaderFunctionArgs} from 'react-router/dist'

import {StraightRouteObject} from 'route/StraightRouteObject'

/**
 * An implementation of a {@link import('react-router/dist').RouteObject route object}
 * that is straight (as a fallback route) to the path it needs to go.
 *
 * Meaning it only has a {@link StraightRouteObject.path path} and a redirection action.
 */
export class StraightFallbackRouteObject<const out PATH extends string, const CONTEXT = unknown, >
    extends StraightRouteObject<`${PATH}/*`, CONTEXT> {

    public constructor(path: PATH, redirectionAction: (loaderArguments: LoaderFunctionArgs<CONTEXT>,) => never,) {
        super(`${path}/*`, redirectionAction,)
    }

}
