import {useRef} from 'react'

import type {ReactProperties} from 'util/react/ReactProperties'

import Modal                from 'bootstrap/modal/Modal'
import ModalBody            from 'bootstrap/modal/element/ModalBody'
import ModalContainer       from 'bootstrap/modal/element/ModalContainer'
import ModalHeader          from 'bootstrap/modal/element/ModalHeader'
import {contentTranslation} from 'lang/components/translationMethods'
import {PARAMETER_MODAL_ID} from 'navigation/button/modalIds'

interface ParameterModalProperties
    extends ReactProperties {

    reference: NonNullable<ReactElement>

}

/** @reactComponent */
export default function ParameterModal({reference}: ParameterModalProperties,) {
    const modal = useRef<HTMLDivElement>(null,)

    return <>
        <Modal modalReference={modal}/>
        <ModalContainer modalReference={modal} key="modal - parameter (container)" id={PARAMETER_MODAL_ID} verticallyCentered modalSize="xl">
            <ModalHeader key="modal - parameter (header)" modalTitle={contentTranslation('Options')}/>
            <ModalBody key="modal - parameter (body)">{reference}</ModalBody>
            {/*<ModalFooter key="modal - parameter (footer)" successButton={({children: contentTranslation('Confirm'),})}/>*/}
        </ModalContainer>
    </>
}
