import {SimpleRoute} from './SimpleRoute';

/**
 * @provider
 */
export class SimpleRouteContainer<NAME extends string, PATH extends string, >
    implements SimpleRoute<NAME, PATH> {

    readonly #name;
    readonly #path;
    readonly #renderCallback;


    public constructor(name: NAME, path: PATH, renderCallback: () => JSX.Element,) {
        this.#name = name;
        this.#path = path;
        this.#renderCallback = renderCallback;
    }


    public get name() {
        return this.#name;
    }

    public get path() {
        return this.#path;
    }

    public get renderCallback() {
        return this.#renderCallback;
    }


    public static newInstance<NAME extends string, PATH extends string, >(name: NAME, path: PATH, renderCallback: () => JSX.Element,): SimpleRoute<NAME, PATH> {
        return new SimpleRouteContainer(name, path, renderCallback,);
    }

}
