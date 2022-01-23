import './Navigation.scss';

import type {ReactProperty}         from '../util/react/ReactProperty';
import type {SimpleModalProperties} from './ModalContainers.types';

import DisplayView     from './DisplayView';
import HomeButton      from './HomeButton';
import ParameterButton from './ParameterButton';

export interface NavigationProperties
    extends ReactProperty {

    parameterId: string

    displayView: SimpleModalProperties

}


/**
 * @reactComponent
 */
export default function Navigation({parameterId, displayView,}: NavigationProperties,) {
    return <nav id="navigation-container" className="container-fluid bg-light bg-gradient">
        <div id="navigation-sub-container" className="position-relative">
            <HomeButton/>
            <DisplayView {...displayView}/>
            <ParameterButton containerId={parameterId}/>
        </div>
    </nav>;
}
