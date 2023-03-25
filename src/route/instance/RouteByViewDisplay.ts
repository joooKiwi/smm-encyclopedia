import type {ViewDisplays} from 'app/withInterpreter/ViewDisplays'
import type {Route}        from 'route/instance/Route'

/** A route specialized to only have {@link ViewDisplays} */
export interface RouteByViewDisplay<NAME extends string, PATH extends string, VIEW_DISPLAY extends ViewDisplays = ViewDisplays, >
    extends Route<NAME, PATH, VIEW_DISPLAY, readonly[]> {
}

/**
 * A simple type made to be similar to the render callback in a {@link Route},
 * but with {@link ViewDisplays "view display"} as a parameter
 */
export type RenderCallbackByViewDisplay<VIEW_DISPLAY extends ViewDisplays = ViewDisplays, > = (viewDisplay: VIEW_DISPLAY,) => JSX.Element
