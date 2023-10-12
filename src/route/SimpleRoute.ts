import type {ViewDisplays}  from 'app/withInterpreter/ViewDisplays'
import type {Games}         from 'core/game/Games'
import type {RouteCallback} from 'route/EveryRoutes.types'

/**
 * The route encapsulator for a path and its name.
 *
 * It also has an {@link ReadonlyArray Array} of {@link Games}
 * as well as a {@link ViewDisplays} to help identify
 * the route without string interpretation.
 *
 * @see EveryRoutes
 */
export class SimpleRoute<const out NAME extends string = string,
    const out PATH extends string = string,
    const out GAMES extends NullOr<readonly Games[]> = NullOr<readonly Games[]>,
    const out VIEW_DISPLAY extends NullOr<ViewDisplays> = NullOr<ViewDisplays>, > {

    //region -------------------- Fields --------------------

    readonly #name
    readonly #path
    readonly #viewDisplay: VIEW_DISPLAY//FIXME this type is only there to help typescript (it's not the standard)
    readonly #games: GAMES//FIXME this type is only there to help typescript (it's not the standard)
    readonly #renderCallback

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(name: NAME, path: PATH, games: GAMES, viewDisplay: VIEW_DISPLAY, renderCallback: RouteCallback,) {
        this.#name = name
        this.#path = path
        this.#viewDisplay = viewDisplay
        this.#games = games
        this.#renderCallback = renderCallback
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get name(): NAME {
        return this.#name
    }

    public get path(): PATH {
        return this.#path
    }

    public get viewDisplay(): VIEW_DISPLAY {
        return this.#viewDisplay
    }

    public get games(): GAMES {
        return this.#games
    }

    public get renderCallback(): RouteCallback {
        return this.#renderCallback
    }

    //region -------------------- Getter methods --------------------

}
