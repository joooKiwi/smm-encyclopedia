import {Navigate} from 'react-router-dom'

import type {RedirectRoute} from 'routes/RedirectRoute'

import {ProjectLanguages}     from 'lang/ProjectLanguages'
import {SimpleRouteContainer} from 'routes/SimpleRoute.container'
import {assert}               from 'util/utilitiesMethods'

export class RedirectRouteContainer<NAME extends string, PATH extends string, REDIRECT_PATH extends string, >
    extends SimpleRouteContainer<NAME, PATH>
    implements RedirectRoute<NAME, PATH, REDIRECT_PATH> {

    //region -------------------- Fields --------------------

    readonly #redirectPath

    //endregion -------------------- Fields --------------------

    private constructor(name: NAME, path: PATH, redirectPath: REDIRECT_PATH,) {
        super(name, path, () => <Navigate replace to={`/${ProjectLanguages.currentLanguage.projectAcronym}${redirectPath}`}/>,)
        this.#redirectPath = redirectPath
    }

    public get redirectPath(): REDIRECT_PATH {
        return this.#redirectPath
    }

    public static override newInstance<NAME extends string, PATH extends string, REDIRECT_PATH extends string, >(name: NAME, path: PATH, redirectPath: REDIRECT_PATH,): RedirectRoute<NAME, PATH, REDIRECT_PATH>
    public static override newInstance<NAME extends string, PATH extends string, >(name: NAME, path: PATH, renderCallback: () => JSX.Element,): never
    public static override newInstance(name: string, path: string, redirectPathOrRenderCallback: string | (() => JSX.Element),): RedirectRoute<string, string, string> {
        assert(typeof redirectPathOrRenderCallback == 'string', `The redirect instance cannot create a regular route for "${name}": "${path}".`,)
        return new RedirectRouteContainer(name, path, redirectPathOrRenderCallback,)
    }

}
