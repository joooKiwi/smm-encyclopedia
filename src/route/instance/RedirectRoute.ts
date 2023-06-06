import type {Route}        from 'route/instance/Route'
import type {RouteByGames} from 'route/instance/RouteByGames'

/** A {@link Route route} that has a redirection as a purpose */
export interface RedirectRoute<NAME extends string, PATH extends string, REDIRECT_PATH extends string, >
    extends Route<NAME, PATH, null, readonly []>, RouteByGames<NAME, PATH, readonly []> {

    get redirectPath(): REDIRECT_PATH

}
