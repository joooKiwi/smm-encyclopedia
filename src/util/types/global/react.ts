import type {Array, Nullable, Numeric} from '@joookiwi/type'
import type React                      from 'react'

declare global {

    type ReactReference<T,> = React.Ref<T>

    /** A type-alias of the {@link React}.{@link React.JSX JSX}.{@link React.JSX.Element Element} */
    type ReactJSXElement = React.JSX.Element
    type ReactElement = Nullable<React.ReactElement>
    type NonNullReactElement = React.ReactElement

    type ArrayReactElement =        Array<ReactElement>
    type ArrayNonNullReactElement = Array<NonNullReactElement>
    type ReactElementOrArray =        | ReactElement        | Array<ReactElement>
    type NonNullReactElementOrArray = | NonNullReactElement | Array<NonNullReactElement>

    type ReactElementOrString =                 | ReactElement        | string
    type NonNullReactElementOrString =          | NonNullReactElement | string
    type ReactElementOrNumeric =                | ReactElement        | Numeric
    type NonNullReactElementOrNumeric =         | NonNullReactElement | Numeric
    type ReactElementOrNumber =                 | ReactElement        | number
    type NonNullReactElementOrNumber =          | NonNullReactElement | number
    type ReactElementOrStringOrNumeric =        | ReactElement        | string | Numeric
    type NonNullReactElementOrStringOrNumeric = | NonNullReactElement | string | Numeric
    type ReactElementOrStringOrNumber =         | ReactElement        | string | number
    type NonNullReactElementOrStringOrNumber =  | NonNullReactElement | string | number

    type ReactElementOrStringOrArray =                 | ReactElement        | string           | Array<| ReactElement        | string>
    type NonNullReactElementOrStringOrArray =          | NonNullReactElement | string           | Array<| NonNullReactElement | string>
    type ReactElementOrNumericOrArray =                | ReactElement        | Numeric          | Array<| ReactElement        | Numeric>
    type NonNullReactElementOrNumericOrArray =         | NonNullReactElement | Numeric          | Array<| NonNullReactElement | Numeric>
    type ReactElementOrNumberOrArray =                 | ReactElement        | number           | Array<| ReactElement        | number>
    type NonNullReactElementOrNumberOrArray =          | NonNullReactElement | number           | Array<| NonNullReactElement | number>
    type ReactElementOrStringOrNumericOrArray =        | ReactElement        | string | Numeric | Array<| ReactElement        | string | Numeric>
    type NonNullReactElementOrStringOrNumericOrArray = | NonNullReactElement | string | Numeric | Array<| NonNullReactElement | string | Numeric>
    type ReactElementOrStringOrNumberOrArray =         | ReactElement        | string | number  | Array<| ReactElement        | string | number>
    type NonNullReactElementOrStringOrNumberOrArray =  | NonNullReactElement | string | number  | Array<| NonNullReactElement | string | number>

}
