import type {SimpleRoute} from 'routes/SimpleRoute'

/**
 * @provider
 */
export class SimpleRouteContainer<NAME extends string, PATH extends string, >
    implements SimpleRoute<NAME, PATH> {

    //region -------------------- Fields --------------------

    readonly #name
    readonly #path
    readonly #renderCallback

    //endregion -------------------- Fields --------------------

    protected constructor(name: NAME, path: PATH, renderCallback: () => JSX.Element,) {
        this.#name = name
        this.#path = path
        this.#renderCallback = renderCallback
    }

    //region -------------------- Getter methods --------------------

    public get name() {
        return this.#name
    }

    public get path() {
        return this.#path
    }

    public get renderCallback() {
        return this.#renderCallback
    }

    //endregion -------------------- Getter methods --------------------

    /**
     * Create a new basic route
     *
     * @param name The route name
     * @param path The route path
     * @param renderCallback The React element to render
     */
    public static newInstance<NAME extends string, PATH extends string, >(name: NAME, path: PATH, renderCallback: () => JSX.Element,): SimpleRoute<NAME, PATH> {
        return new SimpleRouteContainer(name, path, renderCallback,)
    }

}
