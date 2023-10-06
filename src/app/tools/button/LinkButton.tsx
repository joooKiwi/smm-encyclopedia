import {Link} from 'react-router-dom'

import type {EveryPossibleRouteNames}                      from 'route/everyRoutes.types'
import type {ReactProperties, ReactPropertiesWithChildren} from 'util/react/ReactProperties'

import {routeFromName} from 'route/route'

interface LinkButtonsProperties
    extends ReactProperties {

    partialId: string

    routeName: Nullable<EveryPossibleRouteNames>

    color: BootstrapColor

}

/**
 * Create a {@link Link} button or a simple disabled button (if the {@link LinkButtonsProperties.routeName route name} is <b>null</b>)
 *
 * @reactComponent
 */
export default function LinkButton({partialId, routeName, color, children,}: ReactPropertiesWithChildren<LinkButtonsProperties, ReactElementOrString>,) {
    const id = `${partialId}-button`
    const className = `btn btn-${color} link-button`

    return routeName == null
        ? <button type="button" id={id} className={className} disabled>{children}</button>
        : <Link type="button" id={id} className={className} to={routeFromName(routeName)}>{children}</Link>
}
