import type {LoaderFunctionArgs} from 'react-router/dist'
import {redirect}                from 'react-router/dist'

import type {PossibleRouteName} from 'route/EveryRoutes.types'
import type {SimpleRoute}       from 'route/SimpleRoute'

import {ViewDisplays}     from 'app/withInterpreter/ViewDisplays'
import {Games}            from 'core/game/Games'
import {GameStyles}       from 'core/gameStyle/GameStyles'
import {ProjectLanguages} from 'lang/ProjectLanguages'
import {EveryRoutes}      from 'route/EveryRoutes'
import {routeFromName}    from 'route/route'


export function redirectTo(route: EveryRoutes, language: ProjectLanguages, games: NullOr<readonly Games[]> = null, gameStyles: NullOr<readonly GameStyles[]> = null, viewDisplay: NullOr<ViewDisplays> = null,): never {
    throw redirect(route.getPath(language, games, gameStyles, viewDisplay,),)
}

export function redirectToByUrl(loaderArguments: LoaderFunctionArgs, language: NullOr<ProjectLanguages> = null, games: NullOr<readonly Games[]> = null, gameStyles: NullOr<readonly GameStyles[]> = null, viewDisplay: NullOr<ViewDisplays> = null,): never {
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

export function redirectToByName(route: SimpleRoute, language: ProjectLanguages,): never {
    throw redirect(routeFromName(route.name as PossibleRouteName, language,),)
}
