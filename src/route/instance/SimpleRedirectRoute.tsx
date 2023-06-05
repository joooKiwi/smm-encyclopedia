import {Navigate} from 'react-router-dom'

import type {RedirectRoute} from 'route/instance/RedirectRoute'

import {ProjectLanguages} from 'lang/ProjectLanguages'
import {SimpleRoute}      from 'route/instance/SimpleRoute'

/** A simple redirection route with a relocation to the path on its {@link Route.renderCallback render callback} */
export class SimpleRedirectRoute<NAME extends string, PATH extends string, REDIRECT_PATH extends string, >
    extends SimpleRoute<NAME, PATH>
    implements RedirectRoute<NAME, PATH, REDIRECT_PATH> {

    readonly #redirectPath

    public constructor(name: NAME, path: PATH, redirectPath: REDIRECT_PATH,) {
        super(name, path, () => <Navigate replace to={`/${(ProjectLanguages.currentOrNull ?? ProjectLanguages.default).projectAcronym}${redirectPath}`}/>,)
        this.#redirectPath = redirectPath
    }

    public get redirectPath(): REDIRECT_PATH {
        return this.#redirectPath
    }

}
