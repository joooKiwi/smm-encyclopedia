import type {CollectionHolder} from '@joookiwi/collection'
import type {NullOr}           from '@joookiwi/type'

import type {Games}         from 'core/game/Games'
import type {GameStyles}    from 'core/gameStyle/GameStyles'
import type {Times}         from 'core/time/Times'
import type {ViewDisplays}  from 'display/ViewDisplays'
import type {RouteCallback} from 'route/EveryRoutes.types'

/**
 * The route encapsulator for a path and its name.
 *
 * It also has an {@link CollectionHolder} of {@link Games}, {@link Times} and {@link GameStyles}
 * and value of {@link ViewDisplays} to help identify
 * the route without string interpretation.
 *
 * @see EveryRoutes
 */
export class Route<const NAME extends string = string,
    const PATH extends string = string, > {

    //region -------------------- Fields --------------------

    readonly #name
    readonly #path
    readonly #viewDisplay
    readonly #games
    readonly #times
    readonly #gameStyles
    readonly #renderCallback

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(name: NAME, path: PATH, games: NullOr<CollectionHolder<Games>>, times: NullOrArray<Times>, gameStyles: NullOr<CollectionHolder<GameStyles>>, viewDisplay: NullOr<ViewDisplays>, renderCallback: RouteCallback,) {
        this.#name = name
        this.#path = path
        this.#viewDisplay = viewDisplay
        this.#games = games
        this.#times = times
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

    public get times() {
        return this.#times
    }

    public get gameStyles() {
        return this.#gameStyles
    }

    public get renderCallback() {
        return this.#renderCallback
    }

    //region -------------------- Getter methods --------------------

}
