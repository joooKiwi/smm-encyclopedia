import './AbstractApp.scss';

import {Component} from 'react';

import type {AppStates}      from './AppStates.types';
import type {ReactComponent} from '../util/react/ReactComponent';
import type {ReactElement}   from '../util/react/ReactProperty';

import ContentTranslationComponent from '../lang/components/ContentTranslationComponent';
import Footer                      from '../navigation/Footer';
import ModalBody                   from '../bootstrap/modal/element/ModalBody';
import ModalContainer              from '../bootstrap/modal/element/ModalContainer';
import ModalFooter                 from '../bootstrap/modal/element/ModalFooter';
import ModalHeader                 from '../bootstrap/modal/element/ModalHeader';
import Navigation                  from '../navigation/Navigation';

/**
 * @reactComponent
 */
export default abstract class AbstractApp<T = {}, S extends AppStates = AppStates, >
    extends Component<T, S>
    implements ReactComponent {

    public static readonly PARAMETER_ELEMENT_ID = 'parameter-modal-container';

    protected abstract _mainContent(): ReactElement;

    protected _optionContent(): ReactElement {
        //TODO add some general parameter
        return <></>;
    }

    public render() {
        return (<>
            <Navigation parameterId={AbstractApp.PARAMETER_ELEMENT_ID}/>
            <main id="main-container" className="pt-3 pb-5 align-bottom container-fluid">
                {this._mainContent()}
            </main>
            <ContentTranslationComponent>{translation =>
                <ModalContainer id={AbstractApp.PARAMETER_ELEMENT_ID} verticallyCentered modalSize="xl">
                    <ModalHeader modalTitle={translation('Options')}/>
                    <ModalBody>{this._optionContent()}</ModalBody>
                    <ModalFooter successButton={({children: translation('Confirm'),})}/>
                </ModalContainer>
            }</ContentTranslationComponent>
            <Footer/>
        </>);
    }

}
