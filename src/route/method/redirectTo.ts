import type {Nullable} from '@joookiwi/type'
import {redirect}      from 'react-router'

import {getUserLanguage}  from 'lang/getUserLanguage'
import {ProjectLanguages} from 'lang/ProjectLanguages'
import {EveryRoutes}      from 'route/EveryRoutes'

import Companion = ProjectLanguages.Companion

// export function redirectTo(route: EveryRoutes, language: Nullable<ProjectLanguages> = null, games: NullableArray<Games> = null, times: NullableArray<Times> = null, gameStyles: NullableArray<GameStyles> = null, viewDisplay: Nullable<ViewDisplays> = null,): never {
/**
 * Throw a {@link Response} having the {@link EveryPossibleRoutes route path} as an argument
 *
 * @param route    The route to redirect
 * @param language The language on the route
 */
export function redirectTo(route: EveryRoutes, language: Nullable<ProjectLanguages> = null,): never {
    if (language == null)
        throw redirect(route.getPath(Companion.currentOrNull ?? getUserLanguage(),),)
    throw redirect(route.getPath(language,),)
}
