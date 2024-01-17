import {useRef} from 'react'

import Modal            from 'bootstrap/modal/Modal'
import ModalContainer   from 'bootstrap/modal/element/ModalContainer'
import {COLOR_MODAL_ID} from 'navigation/button/modalIds'

/** @reactComponent */
export default function ColorModal() {
    const modal = useRef<HTMLDivElement>(null,)

    return <>
        <Modal modalReference={modal}/>
        <ModalContainer modalReference={modal} key="modal - color (container)" id={COLOR_MODAL_ID} verticallyCentered modalSize="sm">

        </ModalContainer>
    </>
}
