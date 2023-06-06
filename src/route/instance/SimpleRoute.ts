import {AbstractRoute} from 'route/instance/AbstractRoute'
import {EMPTY_ARRAY}   from 'util/emptyVariables'

/** A simple route with no {@link ViewDisplays} and no {@link Games} */
export class SimpleRoute<NAME extends string, PATH extends string, >
    extends AbstractRoute<NAME, PATH, null, readonly []> {

    public constructor(name: NAME, path: PATH, renderCallback: () => JSX.Element,) {
        super(name, path, null, EMPTY_ARRAY, renderCallback,)
    }

}
