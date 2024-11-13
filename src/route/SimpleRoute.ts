import type {NullOr} from '@joookiwi/type'

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
export class SimpleRoute<const NAME extends string = string,
    const PATH extends string = string, > {

    //region -------------------- Fields --------------------

    readonly #name
    readonly #path
    readonly #viewDisplay
    readonly #games
    readonly #gameStyles
    readonly #renderCallback

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(name: NAME, path: PATH, games: NullOrArray<Games>, gameStyles: NullOrArray<GameStyles>, viewDisplay: NullOr<ViewDisplays>, renderCallback: RouteCallback,) {
        this.#name = name
        this.#path = path
        this.#viewDisplay = viewDisplay
        this.#games = games
        this.#gameStyles = gameStyles
        this.#renderCallback = renderCallback
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get name() {
        return this.#name
    }

    public get path() {
        return this.#path
    }

    public get viewDisplay() {
        return this.#viewDisplay
    }

    public get games() {
        return this.#games
    }

    public get gameStyles() {
        return this.#gameStyles
    }

    public get renderCallback() {
        return this.#renderCallback
    }

    //region -------------------- Getter methods --------------------

}
