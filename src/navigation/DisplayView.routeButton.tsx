import {Link, useLocation} from 'react-router-dom';

import type {EveryPossibleRouteNames}     from '../routes/everyRoutes.types';
import type {ModalPropertiesWithDiv}      from './ModalContainers.types';
import type {ReactElement, ReactProperty} from '../util/react/ReactProperty';

import {ModalInstance}   from '../bootstrap/modal/ModalInstance';
import {route}           from '../routes/route';
import {TooltipInstance} from '../bootstrap/tooltip/TooltipInstance';

interface DisplayViewRouteButtonProperty
    extends ReactProperty, ModalPropertiesWithDiv {

    routeName: EveryPossibleRouteNames

    value: | string | ReactElement

}

/**
 * @param properties
 * @reactComponent
 */
export default function DisplayViewRouteButton({routeName, value, id, divId,}: DisplayViewRouteButtonProperty,) {
    const {pathname: pathName,} = useLocation();

    const key = `route button (${routeName})`;
    const routeValue = route(routeName);
    const isRouteSameFromPathName = routeValue === pathName;

    return isRouteSameFromPathName
        ? <button key={key} className="btn btn-primary" disabled>{value}</button>
        : <Link key={key} to={routeValue} className="btn btn-outline-primary"
                onClick={() => {
                    ModalInstance.getInstance(id).instance.hide();
                    TooltipInstance.getInstance(divId).instance.hide();//FIXME, this throws an assertion error once the link is clicked.
                }}>{value}</Link>;
}
