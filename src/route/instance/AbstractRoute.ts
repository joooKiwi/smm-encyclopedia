import type {ViewDisplays} from 'app/withInterpreter/ViewDisplays'
import type {Games}        from 'core/game/Games'
import type {Route}        from 'route/instance/Route'

/**
 * A simple {@link Route} with nothing specified,
 * but nothing specified
 *
 * @see SimpleRedirectRoute
 * @see SimpleRouteByViewDisplay
 * @see SimpleRouteByGames
 * @see SimpleRouteByViewDisplayAndGames
 */
export abstract class AbstractRoute<const SIMPLE_NAME extends string, const NAME extends string,
    const PATH extends string,
    const VIEW_DISPLAY extends NullOr<ViewDisplays> = NullOr<ViewDisplays>,
    const GAMES extends readonly Games[] = readonly Games[], >
    implements Route<SIMPLE_NAME, NAME, PATH, VIEW_DISPLAY, GAMES> {

    //region -------------------- Fields --------------------

    readonly #simpleName
    readonly #name
    readonly #path
    readonly #viewDisplay: VIEW_DISPLAY//FIXME this type is only there to help typescript (it's not the standard)
    readonly #games
    readonly #renderCallback

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    protected constructor(simpleName: SIMPLE_NAME, name: NAME, path: PATH, viewDisplay: VIEW_DISPLAY, games: GAMES, renderCallback: () => ReactJSXElement,) {
        this.#simpleName = simpleName
        this.#name = name
        this.#path = path
        this.#viewDisplay = viewDisplay
        this.#games = games
        this.#renderCallback = renderCallback
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get simpleName(): SIMPLE_NAME {
        return this.#simpleName
    }

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

    public get renderCallback(): () => ReactJSXElement {
        return this.#renderCallback
    }

    //endregion -------------------- Getter methods --------------------

}
