import type {SimpleRoute} from 'routes/SimpleRoute'

export interface RedirectRoute<NAME extends string, PATH extends string, REDIRECT_PATH extends string, >
    extends SimpleRoute<NAME, PATH> {

    get redirectPath(): REDIRECT_PATH

}