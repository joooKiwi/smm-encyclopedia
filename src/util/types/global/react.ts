import type React from 'react'

declare global {

    /** A simple alias of the {@link React}.{@link React.JSX JSX}.{@link React.JSX.Element Element} */
    type ReactJSXElement = React.JSX.Element
    type ReactElement = Nullable<React.ReactElement>
    type ReactElementOrString = | ReactElement | string

}
