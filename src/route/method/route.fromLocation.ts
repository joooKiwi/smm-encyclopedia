import type {Nullable} from '@joookiwi/type'
import type {Location} from 'history'

import type {EveryPossibleRoutes} from 'route/EveryRoutes.types'

import {ProjectLanguages} from 'lang/ProjectLanguages'

import Companion = ProjectLanguages.Companion

/**
 * Retrieve the route URL from a {@link Location} via its {@link Location.pathname path}
 * and replace the {@link ProjectLanguages language} if it has been received
 *
 * @param location The {@link Location} to retrieve its {@link Location.pathname path}
 * @param language The {@link ProjectLanguages language} to replace in the url
 */
export function routeFromLocation({pathname,}: Location, language?: Nullable<ProjectLanguages>,): EveryPossibleRoutes {
    language ??= Companion.current

    if (language.isCurrent)
        return pathname as EveryPossibleRoutes
    return pathname.replace(Companion.current.projectAcronym, language.projectAcronym,) as EveryPossibleRoutes
}
