import {Link, useLocation} from 'react-router-dom';

import type {EveryPossibleRouteNames}       from '../routes/everyRoutes.types';
import type {ModalPropertiesWithDiv}        from './ModalContainers.types';
import type {ReactElement, ReactProperties} from '../util/react/ReactProperties';

import {ModalInstance}   from '../bootstrap/modal/ModalInstance';
import {route}           from '../routes/route';
import Tooltip           from '../bootstrap/tooltip/Tooltip';
import {TooltipInstance} from '../bootstrap/tooltip/TooltipInstance';

interface DisplayViewRouteButtonProperty
    extends ReactProperties, ModalPropertiesWithDiv {

    elementId: string

    routeName: EveryPossibleRouteNames

    value: | string | ReactElement

    tooltipValue: string

}

/**
 * @param properties
 * @reactComponent
 */
export default function DisplayViewRouteButton({routeName, value, tooltipValue, elementId, id, divId,}: DisplayViewRouteButtonProperty,) {
    const {pathname: pathName,} = useLocation();

    const key = `route button (${routeName})`;
    const routeValue = route(routeName);
    const isRouteSameFromPathName = routeValue === pathName;

    return isRouteSameFromPathName
        ? <button key={key} id={elementId} className="btn btn-primary" disabled>{value}</button>
        : <Tooltip option={{placement: 'top', title: tooltipValue,}} elementId={elementId}>
            <Link key={key} id={elementId} to={routeValue} className="btn btn-outline-primary"
                  onClick={() => {
                      ModalInstance.getInstance(id).instance.hide();
                      TooltipInstance.getInstance(divId).instance.hide();//FIXME, this throws an assertion error once the link is clicked.
                  }}>{value}</Link>
        </Tooltip>;
}
