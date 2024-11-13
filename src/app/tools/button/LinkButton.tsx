import type {NullableString} from '@joookiwi/type'
import {Link}                from 'react-router-dom'

import type {PossibleRouteName}                            from 'route/EveryRoutes.types'
import type {ReactProperties, ReactPropertiesWithChildren} from 'util/react/ReactProperties'

import {routeFromName} from 'route/route'

interface LinkButtonsProperties
    extends ReactProperties {

    readonly partialId: string

    readonly routeName: NullableString<PossibleRouteName>

    readonly color: BootstrapColor

}

/**
 * Create a {@link Link} button or a disabled button (if the {@link LinkButtonsProperties.routeName route name} is <b>null</b>)
 *
 * @reactComponent
 */
export default function LinkButton({partialId, routeName, color, children,}: ReactPropertiesWithChildren<LinkButtonsProperties, ReactElementOrStringOrArray>,) {
    const id = `${partialId}-button`
    const className = `btn btn-${color} link-button`

    if (routeName == null)
        return <button type="button" id={id} className={className} disabled>{children}</button>
    return <Link type="button" id={id} className={className} to={routeFromName(routeName,)}>{children}</Link>
}
