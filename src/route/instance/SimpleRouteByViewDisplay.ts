import type {ViewDisplays}                                    from 'app/withInterpreter/ViewDisplays'
import type {RenderCallbackByViewDisplay, RouteByViewDisplay} from 'route/instance/RouteByViewDisplay'

import {AbstractRoute} from 'route/instance/AbstractRoute'
import {EMPTY_ARRAY}   from 'util/emptyVariables'

/** A simple route with only a single {@link ViewDisplays view display} */
export class SimpleRouteByViewDisplay<const SIMPLE_NAME extends string, const NAME extends string,
    const PATH extends string,
    const VIEW_DISPLAY extends ViewDisplays = ViewDisplays, >
    extends AbstractRoute<SIMPLE_NAME, NAME, PATH, VIEW_DISPLAY, readonly []>
    implements RouteByViewDisplay<SIMPLE_NAME, NAME, PATH, VIEW_DISPLAY> {

    public constructor(simpleName: SIMPLE_NAME, name: NAME, path: PATH, viewDisplay: VIEW_DISPLAY, renderCallback: RenderCallbackByViewDisplay<VIEW_DISPLAY>,) {
        super(simpleName, name, path, viewDisplay, EMPTY_ARRAY, () => renderCallback(this.viewDisplay),)
    }

}
