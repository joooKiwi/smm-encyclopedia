import {useRef} from 'react'

import Modal             from 'bootstrap/modal/Modal'
import ModalContainer    from 'bootstrap/modal/element/ModalContainer'
import {SEARCH_MODAL_ID} from 'navigation/button/modalIds'

/** @reactComponent */
export default function SearchModal() {
    const modal = useRef<HTMLDivElement>(null,)

    return <>
        <Modal modalReference={modal}/>
        <ModalContainer modalReference={modal} key="modal - search (container)" id={SEARCH_MODAL_ID} verticallyCentered modalSize="lg">
            {/*    <ModalHeader key="modal - search (header)" modalTitle={`${contentTranslation('Search',)}${SUSPENSION_POINT}`}/>*/}
            {/*    <ModalBody key="modal - search (body)">*/}
            {/*        <SearchBody/>*/}
            {/*    </ModalBody>*/}
            {/*    <ModalFooter key="modal - search (footer)" successButton={{children: contentTranslation('Search',)}}/>*/}
        </ModalContainer>
    </>
}
