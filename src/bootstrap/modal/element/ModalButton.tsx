import {forwardRef} from 'react'

import type {ReactProperties}      from 'util/react/ReactProperties'
import type {HTMLButtonProperties} from 'util/react/html/HTMLButtonProperties'

import {BootstrapInstanceHandler} from 'bootstrap/BootstrapInstanceHandler'

interface ModalButtonProperties
    extends ReactProperties, Omit<HTMLButtonProperties, | 'type' | 'onClick'> {

    readonly elementToShow: | string | HTMLElement

}

/**
 * A button made to trigger a {@link bootstrap.Modal} from a Javascript standpoint
 *
 * @reactComponent
 * @param properties
 * @see https://getbootstrap.com/docs/5.3/components/modal
 */
const ModalButton = forwardRef<HTMLButtonElement, ModalButtonProperties>(({elementToShow, ...otherProperties}, ref,) =>
    <button ref={ref} {...otherProperties} type="button" onClick={() => BootstrapInstanceHandler.get.getModalInstanceOrNull(elementToShow,)?.instance.show()}/>,)

export default ModalButton
