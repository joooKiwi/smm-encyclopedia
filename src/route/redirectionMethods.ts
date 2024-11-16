import type {NullOr}             from '@joookiwi/type'
import type {LoaderFunctionArgs} from 'react-router/dist'
import {redirect}                from 'react-router/dist'

import {ViewDisplays}     from 'app/withInterpreter/ViewDisplays'
import {Games}            from 'core/game/Games'
import {GameStyles}       from 'core/gameStyle/GameStyles'
import {Times}            from 'core/time/Times'
import {getUserLanguage}  from 'lang/getUserLanguage'
import {ProjectLanguages} from 'lang/ProjectLanguages'
import {EveryRoutes}      from 'route/EveryRoutes'

// export function redirectTo(route: EveryRoutes, language: NullOr<ProjectLanguages> = null, games: NullOrArray<Games> = null, times: NullOrArray<Times> = null, gameStyles: NullOrArray<GameStyles> = null, viewDisplay: NullOr<ViewDisplays> = null,): never {
/**
 * Throw a {@link Response} having the {@link EveryPossibleRoutes route path} as an argument
 *
 * @param route    The route to redirect
 * @param language The language on the route
 */
export function redirectTo(route: EveryRoutes, language: NullOr<ProjectLanguages> = null,): never {
    if (language == null)
        throw redirect(route.getPath(ProjectLanguages.CompanionEnum.get.currentOrNull ?? getUserLanguage(), null, null, null, null,),)
    throw redirect(route.getPath(language, null, null, null, null,),)
}

// export function redirectToByUrl<const CONTEXT = unknown, >(loaderArguments: LoaderFunctionArgs<CONTEXT>, language: NullOr<ProjectLanguages> = null, games: NullOrArray<Games> = null, times: NullOrArray<Times> = null, gameStyles: NullOrArray<GameStyles> = null, viewDisplay: NullOr<ViewDisplays> = null,): never {
/**
 * Throw a {@link Response} having the {@link EveryPossibleRoutes route path} from the url contained in the {@link loaderArguments}
 *
 * @param loaderArguments The argument to retrieve its {@link Request.url url}
 * @param language        The forced language
 */
export function redirectToByUrl<const CONTEXT = unknown, >(loaderArguments: LoaderFunctionArgs<CONTEXT>, language: NullOr<ProjectLanguages> = null,): never {
    const url = loaderArguments.request.url
    throw redirect(
        (EveryRoutes.CompanionEnum.get.getValueInUrl(url,) ?? EveryRoutes.HOME).getPath(
            language ?? ProjectLanguages.CompanionEnum.get.getValueInUrl(url,),
            Games.CompanionEnum.get.getValueInUrl(url,),
            Times.CompanionEnum.get.getValueInUrl(url,),
            GameStyles.CompanionEnum.get.getValueInUrl(url,),
            ViewDisplays.CompanionEnum.get.getValueInUrl(url,),
        ),
    )
}
