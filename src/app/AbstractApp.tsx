import {Component} from 'react';

import type {ReactComponent} from '../util/react/ReactComponent';

import Navigation from '../navigation/Navigation';
import Footer     from '../navigation/Footer';

/**
 * @reactComponent
 */
export default abstract class AbstractApp<T = {}>
    extends Component<T>
    implements ReactComponent {


    protected abstract _mainContent(): JSX.Element;


    public render() {
        return (<>
            <Navigation/>
            <main className="pt-3 pb-5 align-bottom container-fluid">
                {this._mainContent()}
            </main>
            <Footer/>
        </>);
    }

}