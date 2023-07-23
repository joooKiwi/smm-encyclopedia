import type {ViewDisplays}    from 'app/withInterpreter/ViewDisplays'
import type {Route}           from 'route/instance/Route'
import type {ReactJSXElement} from 'util/react/ReactProperties'

/** A route specialized to only have {@link ViewDisplays} */
export interface RouteByViewDisplay<SIMPLE_NAME extends string, NAME extends string, PATH extends string, VIEW_DISPLAY extends ViewDisplays = ViewDisplays, >
    extends Route<SIMPLE_NAME, NAME, PATH, VIEW_DISPLAY, readonly[]> {
}

/**
 * A simple type made to be similar to the render callback in a {@link Route},
 * but with {@link ViewDisplays "view display"} as a parameter
 */
export type RenderCallbackByViewDisplay<VIEW_DISPLAY extends ViewDisplays = ViewDisplays, > = (viewDisplay: VIEW_DISPLAY,) => ReactJSXElement
