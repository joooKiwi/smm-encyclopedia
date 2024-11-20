import type {Nullable}           from '@joookiwi/type'
import type {LoaderFunctionArgs} from 'react-router/dist'
import {redirect}                from 'react-router/dist'

import {ViewDisplays}     from 'app/withInterpreter/ViewDisplays'
import {Games}            from 'core/game/Games'
import {GameStyles}       from 'core/gameStyle/GameStyles'
import {Times}            from 'core/time/Times'
import {ProjectLanguages} from 'lang/ProjectLanguages'
import {EveryRoutes}      from 'route/EveryRoutes'

import GameCompanion =        Games.Companion
import GameStyleCompanion =   GameStyles.Companion
import LanguageCompanion =    ProjectLanguages.Companion
import RouteCompanion =       EveryRoutes.Companion
import TimeCompanion =        Times.Companion
import ViewDisplayCompanion = ViewDisplays.Companion

// export function redirectToByUrl<const CONTEXT = unknown, >(loaderArguments: LoaderFunctionArgs<CONTEXT>, language: Nullable<ProjectLanguages> = null, games: NullableArray<Games> = null, times: NullableArray<Times> = null, gameStyles: NullableArray<GameStyles> = null, viewDisplay: Nullable<ViewDisplays> = null,): never {
/**
 * Throw a {@link Response} having the {@link EveryPossibleRoutes route path} from the url contained in the {@link loaderArguments}
 *
 * @param loaderArguments The argument to retrieve its {@link Request.url url}
 * @param language        The forced language
 */
export function redirectToByUrl<const CONTEXT = unknown, >(loaderArguments: LoaderFunctionArgs<CONTEXT>, language: Nullable<ProjectLanguages> = null,): never {
    const url = loaderArguments.request.url
    throw redirect(
        (RouteCompanion.getValueInUrl(url,) ?? EveryRoutes.HOME).getPath(
            language ?? LanguageCompanion.getValueInUrl(url,),
            GameCompanion.findInUrl(url,),
            GameStyleCompanion.findInUrl(url,),
            TimeCompanion.findInUrl(url,),
            ViewDisplayCompanion.findInUrl(url,),
        ),
    )
}
