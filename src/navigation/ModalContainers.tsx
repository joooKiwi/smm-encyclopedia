import type {ReactProperties} from 'util/react/ReactProperties'

import Modal                                                                                                   from 'bootstrap/modal/Modal'
import ModalBody                                                                                               from 'bootstrap/modal/element/ModalBody'
import ModalContainer                                                                                          from 'bootstrap/modal/element/ModalContainer'
import ModalFooter                                                                                             from 'bootstrap/modal/element/ModalFooter'
import ModalHeader                                                                                             from 'bootstrap/modal/element/ModalHeader'
import {contentTranslation}                                                                                    from 'lang/components/translationMethods'
import DisplayViewBody                                                                                         from 'navigation/DisplayView.body'
import LanguageChangerBody                                                                                     from 'navigation/LanguageChanger.body'
import {COLOR_MODAL_ID, DISPLAY_VIEW_MODAL_ID, LANGUAGE_CHANGER_MODAL_ID, PARAMETER_MODAL_ID, SEARCH_MODAL_ID} from 'navigation/button/modalIds'
import {SUSPENSION_POINT}                                                                                      from 'util/commonVariables'

interface ModalContainersProperties
    extends ReactProperties {

    parameter: NonNullable<ReactElement>

}

/**
 * @reactComponent
 */
export default function ModalContainers({parameter,}: ModalContainersProperties,) {
    return <aside key="modal container" id="modal-container">
        <Modal elementId={LANGUAGE_CHANGER_MODAL_ID}/>
        <ModalContainer key="modal - language changer (container)" id={LANGUAGE_CHANGER_MODAL_ID} verticallyCentered={true} modalSize="xl">
            <ModalHeader key="modal - language changer (header)" modalTitle={contentTranslation('Change the language')}/>
            <ModalBody key="modal - language changer (body)"><LanguageChangerBody/></ModalBody>
            <ModalFooter key="modal - language changer (footer)"/>
        </ModalContainer>

        <Modal elementId={PARAMETER_MODAL_ID}/>
        <ModalContainer key="modal - parameter (container)" id={PARAMETER_MODAL_ID} verticallyCentered modalSize="xl">
            <ModalHeader key="modal - parameter (header)" modalTitle={contentTranslation('Options')}/>
            <ModalBody key="modal - parameter (body)">{parameter}</ModalBody>
            {/*<ModalFooter key="modal - parameter (footer)" successButton={({children: contentTranslation('Confirm'),})}/>*/}
        </ModalContainer>

        <Modal elementId={DISPLAY_VIEW_MODAL_ID}/>
        <ModalContainer key="modal - display view (container)" id={DISPLAY_VIEW_MODAL_ID} verticallyCentered modalSize="lg">
            <ModalHeader key="modal - display view (header)" modalTitle={`${contentTranslation('Display')}${SUSPENSION_POINT}`}/>
            <ModalBody key="modal - display view (body)">
                <DisplayViewBody/>
            </ModalBody>
            <ModalFooter key="modal - display view (footer)"/>
        </ModalContainer>

        <Modal elementId={SEARCH_MODAL_ID}/>
        <ModalContainer key="modal - search (container)" id={SEARCH_MODAL_ID} verticallyCentered modalSize="lg">
        {/*    <ModalHeader key="modal - search (header)" modalTitle={`${contentTranslation('Search')}${SUSPENSION_POINT}`}/>*/}
        {/*    <ModalBody key="modal - search (body)">*/}
        {/*        <SearchBody/>*/}
        {/*    </ModalBody>*/}
        {/*    <ModalFooter key="modal - search (footer)" successButton={({children: contentTranslation('Search')})}/>*/}
        </ModalContainer>

        <Modal elementId={COLOR_MODAL_ID}/>
        <ModalContainer key="modal - color (container)" id={COLOR_MODAL_ID} verticallyCentered modalSize="sm">

        </ModalContainer>
    </aside>
}
