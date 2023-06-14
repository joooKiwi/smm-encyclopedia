import type {Route}        from 'route/instance/Route'
import type {RouteByGames} from 'route/instance/RouteByGames'

/** A {@link Route route} that has a redirection as a purpose */
export interface RedirectRoute<SIMPLE_NAME extends string, NAME extends string, PATH extends string, REDIRECT_PATH extends string, >
    extends Route<SIMPLE_NAME, NAME, PATH, null, readonly []>, RouteByGames<SIMPLE_NAME, NAME, PATH, readonly []> {

    get redirectPath(): REDIRECT_PATH

}
