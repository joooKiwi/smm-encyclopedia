import './Navigation.scss'

import type {ModalProperties, ModalPropertiesWithDiv} from 'navigation/ModalContainers.types'
import type {ReactProperties}                         from 'util/react/ReactProperties'

import DisplayViewButton        from 'navigation/button/DisplayView.button'
import HomeButton               from 'navigation/button/Home.button'
import ParameterButton          from 'navigation/button/Parameter.button'
import SearchButton             from 'navigation/button/Search.button'
import TopLanguageChangerButton from 'navigation/button/TopLanguageChanger.button'

export interface NavigationProperties
    extends ReactProperties {

    displayView: ModalPropertiesWithDiv

    search: ModalProperties

}


/**
 * @reactComponent
 */
export default function Navigation({displayView, search,}: NavigationProperties,) {
    return <nav id="navigation-container" className="container-fluid bg-light bg-gradient">
        <div id="navigation-sub-container" className="position-relative">
            <HomeButton/>
            <DisplayViewButton {...displayView}/>
            <SearchButton {...search}/>
            <div className="btn-group btn-group-lg">
                <TopLanguageChangerButton/>
                <ParameterButton/>
            </div>
        </div>
    </nav>
}
