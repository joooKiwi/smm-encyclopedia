import {useRef} from 'react'

import Modal                   from 'bootstrap/modal/Modal'
import ModalBody               from 'bootstrap/modal/element/ModalBody'
import ModalContainer          from 'bootstrap/modal/element/ModalContainer'
import ModalFooter             from 'bootstrap/modal/element/ModalFooter'
import ModalHeader             from 'bootstrap/modal/element/ModalHeader'
import {contentTranslation}    from 'lang/components/translationMethods'
import DisplayViewBody         from 'navigation/DisplayView.body'
import {DISPLAY_VIEW_MODAL_ID} from 'navigation/button/modalIds'
import {SUSPENSION_POINT}      from 'util/commonVariables'

/** @reactComponent */
export default function DisplayViewModal() {
    const modal = useRef<HTMLDivElement>(null,)

    return <>
        <Modal modalReference={modal}/>
        <ModalContainer modalReference={modal} key="modal - display view (container)" id={DISPLAY_VIEW_MODAL_ID} verticallyCentered modalSize="lg">
            <ModalHeader key="modal - display view (header)" modalTitle={`${contentTranslation('Display')}${SUSPENSION_POINT}`}/>
            <ModalBody key="modal - display view (body)">
                <DisplayViewBody/>
            </ModalBody>
            <ModalFooter key="modal - display view (footer)"/>
        </ModalContainer>
    </>
}
