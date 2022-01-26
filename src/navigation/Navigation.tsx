import './Navigation.scss';

import type {ReactProperty}                           from '../util/react/ReactProperty';
import type {ModalProperties, ModalPropertiesWithDiv} from './ModalContainers.types';

import DisplayView     from './DisplayView';
import HomeButton      from './HomeButton';
import ParameterButton from './Parameter.button';

export interface NavigationProperties
    extends ReactProperty {

    parameter: ModalProperties

    displayView: ModalPropertiesWithDiv

}


/**
 * @reactComponent
 */
export default function Navigation({parameter, displayView,}: NavigationProperties,) {
    return <nav id="navigation-container" className="container-fluid bg-light bg-gradient">
        <div id="navigation-sub-container" className="position-relative">
            <HomeButton/>
            <DisplayView {...displayView}/>
            <ParameterButton {...parameter}/>
        </div>
    </nav>;
}
