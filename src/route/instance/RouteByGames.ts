import type {Games}     from 'core/game/Games'
import type {Route}     from 'route/instance/Route'
import {GameCollection} from 'util/collection/GameCollection'

/** A route specialized to only have {@link Games} */
export interface RouteByGames<NAME extends string, PATH extends string, GAMES extends readonly Games[] = readonly Games[], >
    extends Route<NAME, PATH, null, GAMES> {
}

/**
 * A simple type made to be similar to the render callback in a {@link Route},
 * but with {@link Games games} as a parameter
 */
export type RenderCallbackByGames<GAMES extends GameCollection = GameCollection, > = (games: GAMES,) => JSX.Element