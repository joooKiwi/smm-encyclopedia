import {useRef}            from 'react'
import {Link, useLocation} from 'react-router-dom'

import type {PossibleRouteName} from 'route/EveryRoutes.types'
import type {ReactProperties}   from 'util/react/ReactProperties'

import {BootstrapInstanceHandler} from 'bootstrap/BootstrapInstanceHandler'
import Tooltip                    from 'bootstrap/tooltip/Tooltip'
import {DISPLAY_VIEW_MODAL_ID}    from 'navigation/button/modalIds'
import {routeFromName}            from 'route/route'

interface DisplayViewRouteButtonProperty
    extends ReactProperties {

    readonly routeName: PossibleRouteName

    readonly value: ReactElementOrString

    readonly tooltipValue: string

}

/**
 * @param properties
 * @reactComponent
 */
export default function DisplayViewRouteButton({routeName, value, tooltipValue,}: DisplayViewRouteButtonProperty,) {
    const htmlElement = useRef<HTMLAnchorElement>(null,)
    const {pathname,} = useLocation()

    const key = `route button (${routeName})`
    const routeValue = routeFromName(routeName,)
    const isRouteSameFromPathName = routeValue === pathname

    if (isRouteSameFromPathName)
        return <button key={key} className="btn btn-primary" disabled>{value}</button>

    return <Tooltip option={{placement: 'top', title: tooltipValue,}} reference={htmlElement}>
        <Link ref={htmlElement} key={key} to={routeValue} className="btn btn-outline-primary"
              onClick={() => BootstrapInstanceHandler.get.getModalInstanceOrNull(DISPLAY_VIEW_MODAL_ID,)?.instance.hide()}>{value}</Link>
    </Tooltip>
}
