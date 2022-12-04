import type {ReactElement} from 'util/react/ReactProperties'

export interface SimpleRoute<NAME extends string, PATH extends string, > {

    get name(): NAME

    get path(): PATH

    get renderCallback(): () => ReactElement

}
