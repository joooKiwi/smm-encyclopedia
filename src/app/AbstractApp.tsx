import './AbstractApp.scss'

import {Component} from 'react'

import type {AppProperties}                                      from 'app/AppProperties.types'
import type {AppStates}                                          from 'app/AppStates.types'
import type {ModalPropertiesWithContent, ModalPropertiesWithDiv} from 'navigation/ModalContainers.types'
import type {ReactComponent}                                     from 'util/react/ReactComponent'
import type {ReactElement}                                       from 'util/react/ReactProperties'

import GlobalOptionComponent from 'app/options/global/GlobalOption.component'
import Footer                from 'navigation/Footer'
import ModalContainers       from 'navigation/ModalContainers'
import Navigation            from 'navigation/Navigation'

/**
 * @reactComponent
 */
export default abstract class AbstractApp<T extends AppProperties = AppProperties, S extends AppStates = AppStates, >
    extends Component<T, S>
    implements ReactComponent {

    //region -------------------- Fields --------------------

    static readonly #LANGUAGE_CHANGER_ELEMENT_ID = 'languageChanger-modal-container'
    static readonly #LANGUAGE_CHANGER_DIV_ELEMENT_ID = 'languageChanger-container'

    static readonly #PARAMETER_ELEMENT_ID = 'parameter-modal-container'
    static readonly #PARAMETER_DIV_ELEMENT_ID = 'parameter-container'

    static readonly #DISPLAY_VIEW_ELEMENT_ID = 'displayView-modal-container'
    static readonly #DISPLAY_VIEW_DIV_ELEMENT_ID = 'displayView-container'

    static readonly #SEARCH_ELEMENT_ID = 'search-modal-container'
    static readonly #SEARCH_DIV_ELEMENT_ID = 'search-container'

    //endregion -------------------- Fields --------------------

    protected abstract _mainContent(): ReactElement

    protected _parameterContent(): ReactElement {
        return <GlobalOptionComponent id={AbstractApp.#PARAMETER_DIV_ELEMENT_ID}/>
    }

    public override render(): ReactElement {
        const languageChangerProperties: ModalPropertiesWithDiv = {id: AbstractApp.#LANGUAGE_CHANGER_ELEMENT_ID, divId: AbstractApp.#LANGUAGE_CHANGER_DIV_ELEMENT_ID,}
        const parametersProperties: ModalPropertiesWithContent = {id: AbstractApp.#PARAMETER_ELEMENT_ID, content: this._parameterContent(),}
        const displayViewProperties: ModalPropertiesWithDiv = {id: AbstractApp.#DISPLAY_VIEW_ELEMENT_ID, divId: AbstractApp.#DISPLAY_VIEW_DIV_ELEMENT_ID,}
        const searchProperties: ModalPropertiesWithDiv = {id: AbstractApp.#SEARCH_ELEMENT_ID, divId: AbstractApp.#SEARCH_DIV_ELEMENT_ID,}

        return <>
            <ModalContainers languageChanger={languageChangerProperties} parameter={parametersProperties} displayView={displayViewProperties} search={searchProperties}/>
            <Navigation parameter={parametersProperties} displayView={(displayViewProperties)} search={searchProperties}/>
            <main id="main-container" className="pt-3 pb-5 align-bottom container-fluid">
                {this._mainContent()}
            </main>
            <Footer languageChanger={languageChangerProperties}/>
        </>
    }

}
