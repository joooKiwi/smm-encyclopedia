export interface SimpleRoute<NAME extends string, PATH extends string, > {

    get name(): NAME

    get path(): PATH

    get renderCallback(): () => JSX.Element

}
