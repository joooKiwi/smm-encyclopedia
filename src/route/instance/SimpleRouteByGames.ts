import type {Games}                               from 'core/game/Games'
import type {RenderCallbackByGames, RouteByGames} from 'route/instance/RouteByGames'

import {AbstractRoute} from 'route/instance/AbstractRoute'

/** A simple route with only {@link Games games} */
export class SimpleRouteByGames<NAME extends string, PATH extends string, GAMES extends readonly Games[] = readonly Games[], >
    extends AbstractRoute<NAME, PATH, null, GAMES>
    implements RouteByGames<NAME, PATH, GAMES> {

    public constructor(name: NAME, path: PATH, games: GAMES, renderCallback: RenderCallbackByGames<GAMES>,) {
        super(name, path, null, games, () => renderCallback(this.games),)
    }
}
