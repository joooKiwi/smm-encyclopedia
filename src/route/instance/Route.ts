import type {ViewDisplays} from 'app/withInterpreter/ViewDisplays'
import type {Games}        from 'core/game/Games'
import type {NullOr}       from 'util/types/nullable'

/**
 * The base of a path to be used in the application holding the arguments to redirect specifically to the path needed
 *
 * @see everySimpleRoutes
 */
export interface Route<SIMPLE_NAME extends string, NAME extends string, PATH extends string, VIEW_DISPLAY extends NullOr<ViewDisplays> = NullOr<ViewDisplays>, GAMES extends readonly Games[] = readonly Games[], > {

    get simpleName(): SIMPLE_NAME

    get name(): NAME//TODO change to simple name and divide it to includes other possible names

    get path(): PATH//TODO change to simple path and divide it to includes other possible paths

    get viewDisplay(): VIEW_DISPLAY

    get games(): GAMES

    get renderCallback(): () => JSX.Element

}
