import type {ReactElement} from '../util/react/ReactProperty';

export interface SimpleRoute<NAME extends string, PATH extends string, > {

    get name(): NAME

    get path(): PATH

    get renderCallback(): () => ReactElement

}
