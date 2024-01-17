import type {ViewDisplays}  from 'app/withInterpreter/ViewDisplays'
import type {Games}         from 'core/game/Games'
import type {GameStyles}    from 'core/gameStyle/GameStyles'
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
export class SimpleRoute {

    //region -------------------- Fields --------------------

    readonly #name
    readonly #path
    readonly #viewDisplay
    readonly #games
    readonly #gameStyles
    readonly #renderCallback

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(name: string, path: string, games: NullOr<readonly Games[]>, gameStyles: NullOr<readonly GameStyles[]>, viewDisplay: NullOr<ViewDisplays>, renderCallback: RouteCallback,) {
        this.#name = name
        this.#path = path
        this.#viewDisplay = viewDisplay
        this.#games = games
        this.#gameStyles = gameStyles
        this.#renderCallback = renderCallback
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get name(): string {
        return this.#name
    }

    public get path(): string {
        return this.#path
    }

    public get viewDisplay(): NullOr<ViewDisplays> {
        return this.#viewDisplay
    }

    public get games(): NullOr<readonly Games[]> {
        return this.#games
    }

    public get gameStyles(): NullOr<readonly GameStyles[]> {
        return this.#gameStyles
    }

    public get renderCallback(): RouteCallback {
        return this.#renderCallback
    }

    //region -------------------- Getter methods --------------------

}
