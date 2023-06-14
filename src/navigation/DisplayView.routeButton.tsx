import {Link, useLocation} from 'react-router-dom'

import type {EveryPossibleRouteNames}               from 'route/everyRoutes.types'
import type {ReactElementOrString, ReactProperties} from 'util/react/ReactProperties'

import {ModalInstance}         from 'bootstrap/modal/ModalInstance'
import Tooltip                 from 'bootstrap/tooltip/Tooltip'
import {DISPLAY_VIEW_MODAL_ID} from 'navigation/button/modalIds'
import {routeFromName}         from 'route/route'

interface DisplayViewRouteButtonProperty
    extends ReactProperties {

    readonly elementId: string

    readonly routeName: EveryPossibleRouteNames

    readonly value: ReactElementOrString

    readonly tooltipValue: string

}

/**
 * @param properties
 * @reactComponent
 */
export default function DisplayViewRouteButton({routeName, value, tooltipValue, elementId,}: DisplayViewRouteButtonProperty,) {
    const {pathname,} = useLocation()

    const key = `route button (${routeName})`,
        routeValue = routeFromName(routeName),
        isRouteSameFromPathName = routeValue === pathname

    return isRouteSameFromPathName
        ? <button key={key} id={elementId} className="btn btn-primary" disabled>{value}</button>
        : <Tooltip option={{placement: 'top', title: tooltipValue,}} elementId={elementId}>
            <Link key={key} id={elementId} to={routeValue} className="btn btn-outline-primary"
                  onClick={() => ModalInstance.getInstance(DISPLAY_VIEW_MODAL_ID).instance.hide()}>{value}</Link>
        </Tooltip>
}
