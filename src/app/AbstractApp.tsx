import './AbstractApp.scss';

import {Component} from 'react';

import type {AppStates}      from './AppStates.types';
import type {ReactComponent} from '../util/react/ReactComponent';
import type {ReactElement}   from '../util/react/ReactProperty';

import Navigation from '../navigation/Navigation';
import Footer     from '../navigation/Footer';

/**
 * @reactComponent
 */
export default abstract class AbstractApp<T = {}, S extends AppStates = AppStates, >
    extends Component<T, S>
    implements ReactComponent {

    protected abstract _mainContent(): ReactElement;

    public render() {
        return (<>
            <Navigation/>
            <main id="main-container" className="pt-3 pb-5 align-bottom container-fluid">
                {this._mainContent()}
            </main>
            <Footer/>
        </>);
    }

}
