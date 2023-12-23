import './AbstractApp.scss'

import {Component} from 'react'

import type {AppProperties}  from 'app/AppProperties.types'
import type {AppStates}      from 'app/AppStates.types'
import type {ReactComponent} from 'util/react/ReactComponent'

import GlobalOptionComponent from 'app/options/global/GlobalOption.component'
import Footer                from 'navigation/Footer'
import ModalContainers       from 'navigation/ModalContainers'
import Navigation            from 'navigation/Navigation'

/** @reactComponent */
export default abstract class AbstractApp<T extends AppProperties = AppProperties, S extends AppStates = AppStates, >
    extends Component<T, S>
    implements ReactComponent {

    protected abstract _mainContent(): ReactElement

    protected _parameterContent(): NonNullable<ReactElement> {
        return <GlobalOptionComponent/>
    }

    public override render(): ReactJSXElement {
        return <>
            <ModalContainers parameter={this._parameterContent()}/>
            <Navigation/>
            <main id="main-container" className="container-fluid flex-grow-1 align-bottom pt-3 pb-5">
                {this._mainContent()}
            </main>
            <Footer/>
        </>
    }

}
