import type {Array, Nullable, Numeric} from '@joookiwi/type'
import type React                      from 'react'

declare global {

    /** A type-alias of the {@link React}.{@link React.JSX JSX}.{@link React.JSX.Element Element} */
    type ReactJSXElement = React.JSX.Element
    type ReactElement = Nullable<React.ReactElement>
    type NonNullReactElement = React.ReactElement
    type ArrayReactElement = Array<ReactElement>
    type ReactElementOrArray = | ReactElement | Array<ReactElement>
    type ReactElementOrString = | ReactElement | string
    type ReactElementOrNumeric = | ReactElement | Numeric
    type ReactElementOrNumber = | ReactElement | number
    type ReactElementOrStringOrNumeric = | ReactElement | string | Numeric
    type ReactElementOrStringOrNumber = | ReactElement | string | number
    type ReactElementOrStringOrArray = | ReactElement | string | Array<| ReactElement | string>
    type ReactElementOrNumericOrArray = | ReactElement | Numeric | Array<| ReactElement | Numeric>
    type ReactElementOrNumberOrArray = | ReactElement | number | Array<| ReactElement | number>
    type ReactElementOrStringOrNumericOrArray = | ReactElement | string | Numeric | Array<| ReactElement | string | Numeric>
    type ReactElementOrStringOrNumberOrArray = | ReactElement | string | number | Array<| ReactElement | string | number>

}
