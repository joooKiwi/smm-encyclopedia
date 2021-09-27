import {SimpleRoute} from './SimpleRoute';

/**
 * @provider
 */
export class SimpleRouteContainer<PATH extends string, >
    implements SimpleRoute<PATH> {

    readonly #path;
    readonly #renderCallback;


    public constructor(path: PATH, renderCallback: () => JSX.Element,) {
        this.#path = path;
        this.#renderCallback = renderCallback;
    }


    public get path() {
        return this.#path;
    }

    public get renderCallback() {
        return this.#renderCallback;
    }


    public static newInstance<PATH extends string, >(path: PATH, renderCallback: () => JSX.Element,): SimpleRoute<PATH> {
        return new SimpleRouteContainer(path, renderCallback,);
    }

}
