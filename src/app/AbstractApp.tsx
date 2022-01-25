import './AbstractApp.scss';

import {Component} from 'react';

import type {AppStates}             from './AppStates.types';
import type {ReactComponent}        from '../util/react/ReactComponent';
import type {ReactElement}          from '../util/react/ReactProperty';
import type {SimpleModalProperties} from '../navigation/ModalContainers.types';

import Footer                from '../navigation/Footer';
import GlobalOptionComponent from './options/GlobalOption.component';
import ModalContainers       from '../navigation/ModalContainers';
import Navigation            from '../navigation/Navigation';

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
    static readonly #PARAMETER_DIV_ELEMENT_ID = 'parameter-container';

    static readonly #DISPLAY_VIEW_ELEMENT_ID = 'displayView-modal-container';
    static readonly #DISPLAY_VIEW_DIV_ELEMENT_ID = 'displayView-container';

    //endregion -------------------- Attributes --------------------

    protected abstract _mainContent(): ReactElement;

    protected _parameterContent(): ReactElement {
        return <GlobalOptionComponent id={AbstractApp.#PARAMETER_DIV_ELEMENT_ID}/>;
    }

    public render() {
        const languageChangerProperties: SimpleModalProperties = {id: AbstractApp.#LANGUAGE_CHANGER_ELEMENT_ID, divId: AbstractApp.#LANGUAGE_CHANGER_DIV_ELEMENT_ID,};
        const parameterProperties = {id: AbstractApp.#PARAMETER_ELEMENT_ID, content: this._parameterContent(),};
        const displayViewProperties: SimpleModalProperties = {id: AbstractApp.#DISPLAY_VIEW_ELEMENT_ID, divId: AbstractApp.#DISPLAY_VIEW_DIV_ELEMENT_ID,};

        return (<>
            <ModalContainers languageChanger={languageChangerProperties} parameter={parameterProperties} displayView={displayViewProperties}/>
            <Navigation parameterId={AbstractApp.#PARAMETER_ELEMENT_ID} displayView={displayViewProperties}/>
            <main id="main-container" className="pt-3 pb-5 align-bottom container-fluid">
                {this._mainContent()}
            </main>
            <Footer languageChanger={languageChangerProperties}/>
        </>);
    }

}
