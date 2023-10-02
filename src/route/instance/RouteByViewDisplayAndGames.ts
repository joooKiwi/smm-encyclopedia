import type {ViewDisplays}    from 'app/withInterpreter/ViewDisplays'
import type {Games}           from 'core/game/Games'
import type {Route}           from 'route/instance/Route'
import type {GameCollection}  from 'util/collection/GameCollection'

/**
 * A route specialized with both {@link ViewDisplays} and {@link Games}
 *
 * @see RouteByViewDisplay
 * @see RouteByGames
 */
export interface RouteByViewDisplayAndGames<SIMPLE_NAME extends string, NAME extends string, PATH extends string, VIEW_DISPLAY extends ViewDisplays = ViewDisplays, GAMES extends readonly Games[] = readonly Games[], >
    extends Route<SIMPLE_NAME, NAME, PATH, VIEW_DISPLAY, GAMES> {}

/**
 * A simple type made to be similar to the render callback in a {@link Route},
 * but with {@link ViewDisplays "view display"} and {@link Games games} as a parameter
 *
 * @see RenderCallbackByViewDisplay
 * @see RenderCallbackByGames
 */
export type RenderCallbackByViewDisplayAndGames<VIEW_DISPLAY extends ViewDisplays = ViewDisplays, GAMES extends GameCollection = GameCollection, > = (viewDisplay: VIEW_DISPLAY, games: GAMES,) => ReactJSXElement
