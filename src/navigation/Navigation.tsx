import './Navigation.scss';

import type {ReactProperty}                           from '../util/react/ReactProperty';
import type {ModalProperties, ModalPropertiesWithDiv} from './ModalContainers.types';

import DisplayViewButton from './DisplayView';
import HomeButton        from './HomeButton';
import ParameterButton   from './Parameter.button';
import SearchButton      from './Search.button';

export interface NavigationProperties
    extends ReactProperty {

    parameter: ModalProperties

    displayView: ModalPropertiesWithDiv

    search: ModalProperties

}


/**
 * @reactComponent
 */
export default function Navigation({parameter, displayView, search,}: NavigationProperties,) {
    return <nav id="navigation-container" className="container-fluid bg-light bg-gradient">
        <div id="navigation-sub-container" className="position-relative">
            <HomeButton/>
            <DisplayView {...displayView}/>
            <SearchButton {...search}/>
            <ParameterButton {...parameter}/>
        </div>
    </nav>;
}
