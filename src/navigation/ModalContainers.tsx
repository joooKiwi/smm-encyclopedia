import {useEffect} from 'react';

import type {ReactElement, ReactProperty} from '../util/react/ReactProperty';
import type {SimpleModalProperties}       from './ModalContainers.types';

import ContentTranslationComponent from '../lang/components/ContentTranslationComponent';
import DisplayViewBody             from './DisplayView.body';
import LanguageChangerBody         from './LanguageChanger.body';
import ModalBody                   from '../bootstrap/modal/element/ModalBody';
import ModalContainer              from '../bootstrap/modal/element/ModalContainer';
import ModalFooter                 from '../bootstrap/modal/element/ModalFooter';
import ModalHeader                 from '../bootstrap/modal/element/ModalHeader';
import {ModalInstance}             from '../bootstrap/modal/ModalInstance';

interface ModalContainersProperties
    extends ReactProperty {

    languageChanger: SimpleModalProperties

    parameter: {

        id: string

        content: ReactElement

    }

    displayView: SimpleModalProperties

}

/**
 * @param properties
 * @reactComponent
 */
export default function ModalContainers({
                                            languageChanger: {id: languageId, divId: languageDivId,},
                                            parameter: {id: parameterId, content: parameterContent,},
                                            displayView: {id: displayViewId, divId: displayViewDivId,},
                                        }: ModalContainersProperties,) {
    useEffect(() => {
        new ModalInstance(languageId,);
        new ModalInstance(parameterId,);
        new ModalInstance(displayViewId,);
    });

    return <aside key="modal container" id="modal-container">
        <ContentTranslationComponent>{translation =>
            <>
                <ModalContainer key="modal - language changer (container)" id={languageId} verticallyCentered={true} modalSize="xl">
                    <ModalHeader key="modal - language changer (header)" modalTitle={translation('Change the language')}/>
                    <ModalBody key="modal - language changer (body)">
                        <LanguageChangerBody containerId={languageId} divContainerId={languageDivId}/>
                    </ModalBody>
                    <ModalFooter key="modal - language changer (footer)"/>
                </ModalContainer>

                <ModalContainer key="modal - parameter (container)" id={parameterId} verticallyCentered modalSize="xl">
                    <ModalHeader key="modal - parameter (header)" modalTitle={translation('Options')}/>
                    <ModalBody key="modal - parameter (body)">{parameterContent}</ModalBody>
                    <ModalFooter key="modal - parameter (footer)" successButton={({children: translation('Confirm'),})}/>
                </ModalContainer>

                <ModalContainer key="modal - display view (container)" id={displayViewId} verticallyCentered modalSize="lg">
                    <ModalHeader key="modal - display view (header)" modalTitle={`${translation('Display')}…`}/>
                    <ModalBody key="modal - display view (body)">
                        <DisplayViewBody id={displayViewId} divId={displayViewDivId}/>
                    </ModalBody>
                    <ModalFooter key="modal - display view (footer)"/>
                </ModalContainer>

            </>
        }</ContentTranslationComponent>
    </aside>;
}
