import type {ViewDisplays}                                    from 'app/withInterpreter/ViewDisplays'
import type {RenderCallbackByViewDisplay, RouteByViewDisplay} from 'route/instance/RouteByViewDisplay'

import {AbstractRoute} from 'route/instance/AbstractRoute'
import {EMPTY_ARRAY}   from 'util/emptyVariables'

/** A simple route with only a single {@link ViewDisplays view display} */
export class SimpleRouteByViewDisplay<NAME extends string, PATH extends string, VIEW_DISPLAY extends ViewDisplays = ViewDisplays, >
    extends AbstractRoute<NAME, PATH, VIEW_DISPLAY, readonly []>
    implements RouteByViewDisplay<NAME, PATH, VIEW_DISPLAY> {

    public constructor(name: NAME, path: PATH, viewDisplay: VIEW_DISPLAY, renderCallback: RenderCallbackByViewDisplay<VIEW_DISPLAY>,) {
        super(name, path, viewDisplay, EMPTY_ARRAY, () => renderCallback(this.viewDisplay),)
    }

}
