import type {Numeric} from '@joookiwi/type'
import type React     from 'react'

declare global {

    /** A simple alias of the {@link React}.{@link React.JSX JSX}.{@link React.JSX.Element Element} */
    type ReactJSXElement = React.JSX.Element
    type ReactElement = Nullable<React.ReactElement>
    type NonNullReactElement = React.ReactElement
    type ReactElementOrString = | ReactElement | string
    type ReactElementOrNumeric = | ReactElement | Numeric
    type ReactElementOrNumber = | ReactElement | number
    type ReactElementOrStringOrNumeric = | ReactElement | string | Numeric
    type ReactElementOrStringOrNumber = | ReactElement | string | number
    type ReactElementOrStringOrArray = | ReactElement | string | readonly (| ReactElement | string)[]
    type ReactElementOrNumericOrArray = | ReactElement | Numeric | readonly (| ReactElement | Numeric)[]
    type ReactElementOrNumberOrArray = | ReactElement | number | readonly (| ReactElement | number)[]
    type ReactElementOrStringOrNumericOrArray = | ReactElement | string | Numeric | readonly (| ReactElement | string | Numeric)[]
    type ReactElementOrStringOrNumberOrArray = | ReactElement | string | number | readonly (| ReactElement | string | number)[]

}
