import type {Games}                               from 'core/game/Games'
import type {RenderCallbackByGames, RouteByGames} from 'route/instance/RouteByGames'

import {AbstractRoute}  from 'route/instance/AbstractRoute'
import {GameCollection} from 'util/collection/GameCollection'

/** A simple route with only {@link Games games} */
export class SimpleRouteByGames<NAME extends string, PATH extends string, GAMES extends readonly Games[] = readonly Games[], >
    extends AbstractRoute<NAME, PATH, null, GAMES>
    implements RouteByGames<NAME, PATH, GAMES> {

    #games?: GameCollection<GAMES[number]>

    public constructor(name: NAME, path: PATH, games: GAMES, renderCallback: RenderCallbackByGames<GameCollection<GAMES[number]>>,) {
        super(name, path, null, games, () => renderCallback(this.gamesAsCollection),)
    }

    public get gamesAsCollection(): GameCollection<GAMES[number]> {
        return this.#games ??= new GameCollection(this.games)
    }

}
