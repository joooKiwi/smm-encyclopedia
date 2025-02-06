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
export class Route {

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

    public constructor(name: string, path: string, games: NullOr<CollectionHolder<Games>>, times: NullOrArray<Times>, gameStyles: NullOr<CollectionHolder<GameStyles>>, viewDisplay: NullOr<ViewDisplays>, renderCallback: RouteCallback,) {
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

    public get name(): string {
        return this.#name
    }

    public get path(): string {
        return this.#path
    }

    public get viewDisplay(): NullOr<ViewDisplays> {
        return this.#viewDisplay
    }

    public get games(): NullOr<CollectionHolder<Games>> {
        return this.#games
    }

    public get times(): NullOrArray<Times> {
        return this.#times
    }

    public get gameStyles(): NullOr<CollectionHolder<GameStyles>> {
        return this.#gameStyles
    }

    public get renderCallback(): RouteCallback {
        return this.#renderCallback
    }

    //region -------------------- Getter methods --------------------

}
