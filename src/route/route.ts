import type {Nullable} from '@joookiwi/type'
import type {Location} from 'history'

import type {EveryPossibleRoutes, PossibleRouteName} from 'route/EveryRoutes.types'

import {ProjectLanguages} from 'lang/ProjectLanguages'
import {EveryRoutes}      from 'route/EveryRoutes'

import Companion = EveryRoutes.Companion

/**
 * Retrieve the route URL from a {@link EveryPossibleRouteNames name}
 * and replace the {@link ProjectLanguages language} if it has been received
 *
 * @param name Any route {@link EveryPossibleRouteNames name}
 * @param language The {@link ProjectLanguages language} to use in the url
 */
export function routeFromName(name: PossibleRouteName, language?: Nullable<ProjectLanguages>,): EveryPossibleRoutes {
    return Companion.getRouteFromName(name, language,)
}

/**
 * Retrieve the route URL from a {@link Location} via its {@link Location.pathname path}
 * and replace the {@link ProjectLanguages language} if it has been received
 *
 * @param location The {@link Location} to retrieve its {@link Location.pathname path}
 * @param language The {@link ProjectLanguages language} to replace in the url
 */
export function routeFromLocation({pathname,}: Location, language?: Nullable<ProjectLanguages>,): EveryPossibleRoutes {
    language ??= ProjectLanguages.current

    if (language.isCurrent)
        return pathname as EveryPossibleRoutes
    return pathname.replace(ProjectLanguages.current.projectAcronym, language.projectAcronym,) as EveryPossibleRoutes
}
