import type {NullableString} from '@joookiwi/type'
import {Link}                from 'react-router-dom'

import type {PossibleRouteName}                            from 'route/EveryRoutes.types'
import type {ReactProperties, ReactPropertiesWithChildren} from 'util/react/ReactProperties'

import {routeFromName} from 'route/method/route.fromName'

interface TextOrLinkProperties
    extends ReactProperties {

    readonly id: string

    readonly routeName: NullableString<PossibleRouteName>

}

/**
 * Create a {@link Link} or a text if the {@link TextOrLinkProperties.routeName route name} is <b>null</b>
 *
 * @reactComponent
 */
export default function TextOrLink({id, routeName, children,}: ReactPropertiesWithChildren<TextOrLinkProperties, ReactElementOrStringOrArray>,) {
    if (routeName == null)
        return <span id={id}>{children}</span>
    return <Link id={id} to={routeFromName(routeName,)}>{children}</Link>
}
