import type {ViewDisplays} from 'app/withInterpreter/ViewDisplays'
import type {Games}        from 'core/game/Games'
import type {Route}        from 'route/instance/Route'
import type {NullOr}       from 'util/types/nullable'

/**
 * A simple {@link Route} with nothing specified,
 * but nothing specified
 *
 * @see SimpleRoute
 * @see SimpleRedirectRoute
 * @see SimpleRouteByViewDisplay
 * @see SimpleRouteByGames
 * @see SimpleRouteByViewDisplayAndGames
 */
export abstract class AbstractRoute<NAME extends string, PATH extends string, VIEW_DISPLAY extends NullOr<ViewDisplays> = NullOr<ViewDisplays>, GAMES extends readonly Games[] = readonly Games[], >
    implements Route<NAME, PATH, VIEW_DISPLAY, GAMES> {

    //region -------------------- Fields --------------------

    readonly #name
    readonly #path
    readonly #viewDisplay: VIEW_DISPLAY//FIXME this type is only there to help typescript (it's not the standard)
    readonly #games
    readonly #renderCallback

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    protected constructor(name: NAME, path: PATH, viewDisplay: VIEW_DISPLAY, games: GAMES, renderCallback: () => JSX.Element,) {
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

    public get renderCallback(): () => JSX.Element {
        return this.#renderCallback
    }

    //endregion -------------------- Getter methods --------------------

}
