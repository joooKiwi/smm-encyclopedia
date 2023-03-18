export interface SimpleRouteArgument<NAME extends string, PATH extends string, > {

    get name(): NAME

    get path(): PATH

}
