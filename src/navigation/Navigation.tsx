import './Navigation.scss';

import type {ReactProperty}                           from '../util/react/ReactProperty';
import type {ModalProperties, ModalPropertiesWithDiv} from './ModalContainers.types';

import DisplayViewButton from './button/DisplayView.button';
import HomeButton        from './button/Home.button';
import ParameterButton   from './button/Parameter.button';
import SearchButton      from './button/Search.button';

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
            <DisplayViewButton {...displayView}/>
            <SearchButton {...search}/>
            <ParameterButton {...parameter}/>
        </div>
    </nav>;
}
