export interface SimpleRoute<PATH extends string, > {

    get path(): PATH

    get renderCallback(): () => JSX.Element

}
