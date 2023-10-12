import './Navigation.scss'

import ColorButton              from 'navigation/button/Color.button'
import DisplayViewButton        from 'navigation/button/DisplayView.button'
import HomeButton               from 'navigation/button/Home.button'
import ParameterButton          from 'navigation/button/Parameter.button'
import SearchButton             from 'navigation/button/Search.button'
import TopLanguageChangerButton from 'navigation/button/TopLanguageChanger.button'

/** @reactComponent */
export default function Navigation() {
    return <nav id="navigation-container" className="container-fluid bg-light bg-gradient">
        <div id="navigation-sub-container" className="position-relative">
            <HomeButton/>
            <DisplayViewButton/>
            <SearchButton/>
            <div className="btn-group">
                <ColorButton/>
                <TopLanguageChangerButton/>
                <ParameterButton/>
            </div>
        </div>
    </nav>
}
