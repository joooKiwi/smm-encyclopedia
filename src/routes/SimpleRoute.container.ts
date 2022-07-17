import type {SimpleRoute}  from './SimpleRoute';
import type {ReactElement} from '../util/react/ReactProperty';

/**
 * @provider
 */
export class SimpleRouteContainer<NAME extends string, PATH extends string, >
    implements SimpleRoute<NAME, PATH> {

    //region -------------------- Fields --------------------

    readonly #name;
    readonly #path;
    readonly #renderCallback;

    //endregion -------------------- Fields --------------------

    public constructor(name: NAME, path: PATH, renderCallback: () => ReactElement,) {
        this.#name = name;
        this.#path = path;
        this.#renderCallback = renderCallback;
    }

    //region -------------------- Getter methods --------------------

    public get name() {
        return this.#name;
    }

    public get path() {
        return this.#path;
    }

    public get renderCallback() {
        return this.#renderCallback;
    }

    //endregion -------------------- Getter methods --------------------

    public static newInstance<NAME extends string, PATH extends string, >(name: NAME, path: PATH, renderCallback: () => ReactElement,): SimpleRoute<NAME, PATH> {
        return new SimpleRouteContainer(name, path, renderCallback,);
    }

}
