import {Link} from 'react-router-dom'

import type {BootstrapColor}                                                     from 'bootstrap/Bootstrap.types'
import type {EveryPossibleRouteNames}                                            from 'route/everyRoutes.types'
import type {ReactElementOrString, ReactProperties, ReactPropertiesWithChildren} from 'util/react/ReactProperties'
import type {Nullable}                                                           from 'util/types/nullable'

import {route} from 'route/route'

interface LinkButtonsProperties
    extends ReactProperties {

    partialId: string

    routeName: Nullable<EveryPossibleRouteNames>

    color: BootstrapColor

}

/**
 * @reactComponent
 */
export default function LinkButton({partialId, routeName, color, children,}: ReactPropertiesWithChildren<LinkButtonsProperties, ReactElementOrString>,) {
    const id = `${partialId}-button`,
        className = `btn btn-${color} link-button`

    return routeName == null
        ? <button type="button" id={id} className={className} disabled>{children}</button>
        : <Link type="button" id={id} className={className} to={route(routeName)}>{children}</Link>
}

/**
 * Create a {@link Link} button or a simple disabled button (if the route name is <b>null</b>)
 *
 * @param partialId The partial ID (with "-button") added after-end
 * @param routeName The route name
 * @param color The Bootstrap color
 * @param value The value to display
 */
export function createLinkButton(partialId: string, [routeName, color,]: readonly [Nullable<EveryPossibleRouteNames>, BootstrapColor,], value: ReactElementOrString,) {
    return <LinkButton partialId={partialId} routeName={routeName} color={color}>{value}</LinkButton>
}
