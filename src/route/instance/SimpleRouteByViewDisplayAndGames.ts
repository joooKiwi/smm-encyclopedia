import type {ViewDisplays}                                                    from 'app/withInterpreter/ViewDisplays'
import type {Games}                                                           from 'core/game/Games'
import type {RenderCallbackByViewDisplayAndGames, RouteByViewDisplayAndGames} from 'route/instance/RouteByViewDisplayAndGames'

import {AbstractRoute}  from 'route/instance/AbstractRoute'
import {GameCollection} from 'util/collection/GameCollection'

/** A simple route with both {@link ViewDisplays view display} & the {@link Games games} */
export class SimpleRouteByViewDisplayAndGames<NAME extends string, PATH extends string, VIEW_DISPLAY extends ViewDisplays = ViewDisplays, GAMES extends readonly Games[] = readonly Games[], >
    extends AbstractRoute<NAME, PATH, VIEW_DISPLAY, GAMES>
    implements RouteByViewDisplayAndGames<NAME, PATH, VIEW_DISPLAY, GAMES> {

    #games?: GameCollection<GAMES[number]>

    public constructor(name: NAME, path: PATH, viewDisplay: VIEW_DISPLAY, games: GAMES, renderCallback: RenderCallbackByViewDisplayAndGames<VIEW_DISPLAY, GameCollection<GAMES[number]>>,) {
        super(name, path, viewDisplay, games, () => renderCallback(this.viewDisplay, this.gamesAsCollection,),)
    }

    public get gamesAsCollection(): GameCollection<GAMES[number]> {
        return this.#games ??= new GameCollection(this.games)
    }

}