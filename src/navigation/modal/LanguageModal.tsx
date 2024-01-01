import {useRef} from 'react'

import Modal                       from 'bootstrap/modal/Modal'
import ModalBody                   from 'bootstrap/modal/element/ModalBody'
import ModalContainer              from 'bootstrap/modal/element/ModalContainer'
import ModalFooter                 from 'bootstrap/modal/element/ModalFooter'
import ModalHeader                 from 'bootstrap/modal/element/ModalHeader'
import {contentTranslation}        from 'lang/components/translationMethods'
import LanguageChangerBody         from 'navigation/LanguageChanger.body'
import {LANGUAGE_CHANGER_MODAL_ID} from 'navigation/button/modalIds'

/** @reactComponent */
export default function LanguageModal() {
    const modal = useRef<HTMLDivElement>(null,)

    return <>
        <Modal modalReference={modal}/>
        <ModalContainer modalReference={modal} key="modal - language changer (container)" id={LANGUAGE_CHANGER_MODAL_ID} verticallyCentered={true} modalSize="xl">
            <ModalHeader key="modal - language changer (header)" modalTitle={contentTranslation('Change the language')}/>
            <ModalBody key="modal - language changer (body)"><LanguageChangerBody/></ModalBody>
            <ModalFooter key="modal - language changer (footer)"/>
        </ModalContainer>
    </>
}
