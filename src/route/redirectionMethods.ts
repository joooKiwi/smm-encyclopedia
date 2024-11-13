import type {NullOr}             from '@joookiwi/type'
import type {LoaderFunctionArgs} from 'react-router/dist'
import {redirect}                from 'react-router/dist'

import {ViewDisplays}     from 'app/withInterpreter/ViewDisplays'
import {Games}            from 'core/game/Games'
import {GameStyles}       from 'core/gameStyle/GameStyles'
import {getUserLanguage}  from 'lang/getUserLanguage'
import {ProjectLanguages} from 'lang/ProjectLanguages'
import {EveryRoutes}      from 'route/EveryRoutes'


export function redirectTo(route: EveryRoutes, language: NullOr<ProjectLanguages> = null, games: NullOrArray<Games> = null, gameStyles: NullOrArray<GameStyles> = null, viewDisplay: NullOr<ViewDisplays> = null,): never {
    if (language == null)
        throw redirect(route.getPath(ProjectLanguages.CompanionEnum.get.currentOrNull ?? getUserLanguage(), games, gameStyles, viewDisplay,),)
    throw redirect(route.getPath(language, games, gameStyles, viewDisplay,),)
}

export function redirectToByUrl<const CONTEXT = unknown, >(loaderArguments: LoaderFunctionArgs<CONTEXT>, language: NullOr<ProjectLanguages> = null, games: NullOrArray<Games> = null, gameStyles: NullOrArray<GameStyles> = null, viewDisplay: NullOr<ViewDisplays> = null,): never {
    const url = loaderArguments.request.url
    throw redirect(
        (EveryRoutes.CompanionEnum.get.getValueInUrl(url,) ?? EveryRoutes.HOME).getPath(
            language ?? ProjectLanguages.CompanionEnum.get.getValueInUrl(url,),
            games ?? Games.CompanionEnum.get.getValueInUrl(url,),
            gameStyles ?? GameStyles.CompanionEnum.get.getValueInUrl(url,),
            viewDisplay ?? ViewDisplays.CompanionEnum.get.getValueInUrl(url,),
        ),
    )
}
