import type {Games}                               from 'core/game/Games'
import type {RenderCallbackByGames, RouteByGames} from 'route/instance/RouteByGames'

import {AbstractRoute}  from 'route/instance/AbstractRoute'
import {GameCollection} from 'util/collection/GameCollection'

/** A simple route with only {@link Games games} */
export class SimpleRouteByGames<const SIMPLE_NAME extends string, const NAME extends string,
    const PATH extends string,
    const GAMES extends readonly Games[] = readonly Games[], >
    extends AbstractRoute<SIMPLE_NAME, NAME, PATH, null, GAMES>
    implements RouteByGames<SIMPLE_NAME, NAME, PATH, GAMES> {

    #games?: GameCollection<GAMES[number]>

    public constructor(simpleName: SIMPLE_NAME, name: NAME, path: PATH, games: GAMES, renderCallback: RenderCallbackByGames<GameCollection<GAMES[number]>>,) {
        super(simpleName, name, path, null, games, () => renderCallback(this.gamesAsCollection),)
    }

    public get gamesAsCollection(): GameCollection<GAMES[number]> {
        return this.#games ??= new GameCollection(this.games)
    }

}
