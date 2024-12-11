import {forwardRef} from 'react'

import type {ReactProperties}      from 'util/react/ReactProperties'
import type {HTMLButtonProperties} from 'util/react/html/HTMLButtonProperties'

import {BootstrapInstanceHandler} from 'bootstrap/BootstrapInstanceHandler'

interface ModalButtonProperties
    extends ReactProperties, Omit<HTMLButtonProperties, | 'type' | 'onClick'> {

    readonly elementToShow: | string | HTMLElement

    readonly elementToHide?: | string | HTMLElement

}

const instanceHandler = BootstrapInstanceHandler.get

/**
 * A button made to trigger a {@link bootstrap.Modal} from a Javascript standpoint
 *
 * @reactComponent
 * @param properties
 * @see https://getbootstrap.com/docs/5.3/components/modal
 */
const ModalButton = forwardRef<HTMLButtonElement, ModalButtonProperties>(({elementToShow, elementToHide, ...otherProperties}, ref,) =>
    <button ref={ref} {...otherProperties} type="button" onClick={() => {
        instanceHandler.getModalInstanceOrNull(elementToShow,)?.instance.show()
        if (elementToHide != null)
            instanceHandler.getModalInstanceOrNull(elementToHide,)?.instance.hide()
    }}/>,)

export default ModalButton
