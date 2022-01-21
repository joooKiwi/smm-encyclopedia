import './LanguageChanger.scss';

import ContentTranslationComponent from '../lang/components/ContentTranslationComponent';
import {EMPTY_OBJECT}              from '../util/emptyVariables';
import LanguageChangerBody         from './LanguageChanger.body';
import Modal                       from '../bootstrap/modal/Modal';
import ModalButton                 from '../bootstrap/modal/element/ModalButton';
import ModalBody                   from '../bootstrap/modal/element/ModalBody';
import ModalContainer              from '../bootstrap/modal/element/ModalContainer';
import ModalFooter                 from '../bootstrap/modal/element/ModalFooter';
import ModalHeader                 from '../bootstrap/modal/element/ModalHeader';
import Tooltip                     from '../bootstrap/tooltip/Tooltip';

const DIV_ELEMENT_ID = 'language-container';
const ELEMENT_ID = 'language-modal-container';

/**
 * @reactElement
 * @todo change the color to not be black for the "Change the language" tooltip
 */
export default function LanguageChanger() {
    return <ContentTranslationComponent>{translation =>
        <Tooltip option={({title: translation('Change the language'), placement: 'left',})} elementId={DIV_ELEMENT_ID}>
            <div id={DIV_ELEMENT_ID} className="container">
                <ModalButton elementToShow={ELEMENT_ID} id="language-button" className="btn btn-lg btn-outline-light rounded-circle bi-translate"/>
                <ModalContainer id={ELEMENT_ID} verticallyCentered={true} modalSize="xl">
                    <ModalHeader modalTitle={translation('Change the language')}/>
                    <ModalBody>
                        <LanguageChangerBody containerId={ELEMENT_ID} divContainerId={DIV_ELEMENT_ID}/>
                    </ModalBody>
                    <ModalFooter/>
                </ModalContainer>
                <Modal elementId={ELEMENT_ID} option={EMPTY_OBJECT}/>
            </div>
        </Tooltip>
    }</ContentTranslationComponent>;
}
