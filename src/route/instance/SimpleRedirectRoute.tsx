import {Navigate} from 'react-router-dom'

import type {Games}         from 'core/game/Games'
import type {RedirectRoute} from 'route/instance/RedirectRoute'

import {ProjectLanguages}   from 'lang/ProjectLanguages'
import {getCurrentLanguage} from 'lang/getCurrentLanguage'
import {AbstractRoute}      from 'route/instance/AbstractRoute'

/** A simple redirection route with a relocation to the path on its {@link Route.renderCallback render callback} */
export class SimpleRedirectRoute<const SIMPLE_NAME extends string, const NAME extends string,
    const PATH extends string,
    const REDIRECT_PATH extends string,
    GAMES extends readonly Games[] = readonly Games[], >
    extends AbstractRoute<SIMPLE_NAME, NAME, PATH, null, GAMES>
    implements RedirectRoute<SIMPLE_NAME, NAME, PATH, REDIRECT_PATH> {

    readonly #redirectPath

    public constructor(simpleName: SIMPLE_NAME, name: NAME, path: PATH, redirectPath: REDIRECT_PATH, games: GAMES,) {
        super(simpleName, name, path, null, games, () => <Navigate replace to={`/${(ProjectLanguages.currentOrNull ?? getCurrentLanguage()).projectAcronym}${redirectPath}`}/>,)
        this.#redirectPath = redirectPath
    }

    public get redirectPath(): REDIRECT_PATH {
        return this.#redirectPath
    }

}
