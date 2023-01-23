import type {SimpleRouteArgument} from 'routes/SimpleRouteArgument'

export class SimpleRouteArgumentContainer<NAME extends string, REDIRECT_PATH extends string, >
    implements SimpleRouteArgument<NAME, REDIRECT_PATH> {

    //region -------------------- Fields --------------------

    readonly #name
    readonly #redirectPath

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(name: NAME, redirectPath: REDIRECT_PATH,) {
        this.#name = name
        this.#redirectPath = redirectPath
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get name(): NAME {
        return this.#name
    }

    public get path(): REDIRECT_PATH {
        return this.#redirectPath
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    /**
     * Create a basic argument holding a name & a path
     *
     * @param name The route name
     * @param path The route path
     */
    public static newInstance<NAME extends string, REDIRECT_PATH extends string, >(name: NAME, path: REDIRECT_PATH,): SimpleRouteArgument<NAME, REDIRECT_PATH> {
        return new SimpleRouteArgumentContainer(name, path,)
    }

    //endregion -------------------- Methods --------------------

}
