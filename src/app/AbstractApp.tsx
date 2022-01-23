import './AbstractApp.scss';

import {Component} from 'react';

import type {AppStates}      from './AppStates.types';
import type {ReactComponent} from '../util/react/ReactComponent';
import type {ReactElement}   from '../util/react/ReactProperty';

import Footer          from '../navigation/Footer';
import ModalContainers from '../navigation/ModalContainers';
import Navigation      from '../navigation/Navigation';

/**
 * @reactComponent
 */
export default abstract class AbstractApp<T = {}, S extends AppStates = AppStates, >
    extends Component<T, S>
    implements ReactComponent {

    //region -------------------- Attributes --------------------

    static readonly #LANGUAGE_CHANGER_ELEMENT_ID = 'languageChanger-modal-container';
    static readonly #LANGUAGE_CHANGER_DIV_ELEMENT_ID = 'languageChanger-container';

    static readonly #PARAMETER_ELEMENT_ID = 'parameter-modal-container';

    static readonly #DISPLAY_VIEW_ELEMENT_ID = 'displayView-modal-container';
    static readonly #DISPLAY_VIEW_DIV_ELEMENT_ID = 'displayView-container';

    //endregion -------------------- Attributes --------------------

    protected abstract _mainContent(): ReactElement;

    protected _parameterContent(): ReactElement {
        //TODO add some general parameter
        return <></>;
    }

    public render() {
        return (<>
            <ModalContainers languageChanger={({id: AbstractApp.#LANGUAGE_CHANGER_ELEMENT_ID, divId: AbstractApp.#LANGUAGE_CHANGER_DIV_ELEMENT_ID,})}
                             parameter={({id: AbstractApp.#PARAMETER_ELEMENT_ID, content: this._parameterContent(),})}
                             displayView={({id: AbstractApp.#DISPLAY_VIEW_ELEMENT_ID, divId: AbstractApp.#DISPLAY_VIEW_DIV_ELEMENT_ID,})}/>
            <Navigation parameterId={AbstractApp.#PARAMETER_ELEMENT_ID}
                        displayView={({id: AbstractApp.#DISPLAY_VIEW_ELEMENT_ID, divId: AbstractApp.#DISPLAY_VIEW_DIV_ELEMENT_ID,})}/>
            <main id="main-container" className="pt-3 pb-5 align-bottom container-fluid">
                {this._mainContent()}
            </main>
            <Footer languageChanger={({id: AbstractApp.#LANGUAGE_CHANGER_ELEMENT_ID, divId: AbstractApp.#LANGUAGE_CHANGER_DIV_ELEMENT_ID,})}/>
        </>);
    }

}
