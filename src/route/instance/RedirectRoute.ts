import type {Games}        from 'core/game/Games'
import type {Route}        from 'route/instance/Route'
import type {RouteByGames} from 'route/instance/RouteByGames'

/** A {@link Route route} that has a redirection as a purpose */
export interface RedirectRoute<SIMPLE_NAME extends string, NAME extends string, PATH extends string, REDIRECT_PATH extends string, GAMES extends readonly Games[] = readonly Games[], >
    extends Route<SIMPLE_NAME, NAME, PATH, null, GAMES>, RouteByGames<SIMPLE_NAME, NAME, PATH, GAMES> {

    get redirectPath(): REDIRECT_PATH

}
