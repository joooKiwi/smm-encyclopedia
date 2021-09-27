export interface SimpleRoute {

    get path(): string

    renderCallback(): JSX.Element

}
