import './AbstractApp.scss'

import {Component} from 'react'

import type {AppProperties}  from 'app/AppProperties.types'
import type {AppStates}      from 'app/AppStates.types'
import type {ReactComponent} from 'util/react/ReactComponent'

import Footer           from 'navigation/Footer'
import Navigation       from 'navigation/Navigation'
import LanguageModal    from 'navigation/modal/LanguageModal'
import ParameterModal   from 'navigation/modal/ParameterModal'
import DisplayViewModal from 'navigation/modal/DisplayViewModal'
import SearchModal      from 'navigation/modal/SearchModal'
import ColorModal       from 'navigation/modal/ColorModal'

/** @reactComponent */
export default abstract class AbstractApp<const out T extends AppProperties = AppProperties,
    const S extends AppStates = AppStates, >
    extends Component<T, S>
    implements ReactComponent {

    protected abstract _mainContent(): ReactElement

    public override render(): ReactJSXElement {
        return <>
            <aside id="modal-container">
                <LanguageModal/>
                <ParameterModal/>
                <DisplayViewModal/>
                <SearchModal/>
                <ColorModal/>
            </aside>
            <Navigation/>
            <main id="main-container" className="container-fluid flex-grow-1 align-bottom pt-3 pb-5">
                {this._mainContent()}
            </main>
            <Footer/>
        </>
    }

}
