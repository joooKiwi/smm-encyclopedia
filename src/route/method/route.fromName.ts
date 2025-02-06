import type {Nullable} from '@joookiwi/type'

import type {ColorThemes}                            from 'color/ColorThemes'
import type {ProjectLanguages}                       from 'lang/ProjectLanguages'
import type {EveryPossibleRoutes, PossibleRouteName} from 'route/EveryRoutes.types'

import {EveryRoutes} from 'route/EveryRoutes'

import Companion = EveryRoutes.Companion

/**
 * Retrieve the route URL from a {@link EveryPossibleRouteNames name}
 * and replace the {@link ProjectLanguages language} or {@link ColorThemes colour} if it has been received
 *
 * @param name Any route {@link EveryPossibleRouteNames name}
 * @param language The {@link ProjectLanguages language} to use in the url
 * @param color    The {@link ColorThemes colour} to use in the url
 */
export function routeFromName(name: PossibleRouteName, language?: Nullable<ProjectLanguages>, color?: Nullable<ColorThemes>,): EveryPossibleRoutes {
    return Companion.getRouteFromName(name, language, color,)
}
