import type {NullableString} from '@joookiwi/type'
import {Link}                from 'react-router-dom'

import type {PossibleRouteName}           from 'route/EveryRoutes.types'
import type {ReactPropertiesWithChildren} from 'util/react/ReactProperties'

import {routeFromName} from 'route/method/route.fromName'

interface LinkTextProperties
    extends ReactPropertiesWithChildren<ReactElementOrStringOrArray> {

    readonly 'partial-id': string

    readonly routeName: NullableString<PossibleRouteName>

    readonly color: BootstrapColor

}

/**
 * Create a {@link Link} text or an underlined text if the {@link LinkTextProperties.routeName route name} is <b>null</b>
 *
 * @reactComponent
 */
export default function LinkText(properties: LinkTextProperties,) {
    const {routeName, color, children,} = properties
    const id = `${properties['partial-id']}-text`

    if (routeName == null)
        return <span id={id} className="text-decoration-underline">{children}</span>
    return <Link id={id} className={`link-${color}`} to={routeFromName(routeName,)}>{children}</Link>
}
