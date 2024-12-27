import type {ReactPropertiesWithChildren} from 'util/react/ReactProperties'

/** @reactComponent */
export default function AppTitle({children,}: ReactPropertiesWithChildren<NonNullReactElementOrString>,) {
    return <h1 id="app-title" className="w-100 text-decoration-underline text-center">{children}</h1>
}
