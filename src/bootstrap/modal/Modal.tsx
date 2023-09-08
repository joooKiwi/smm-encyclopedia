import {useEffect} from 'react'

import type {ModalConfiguration}                  from 'bootstrap/modal/Modal.types'
import type {ReactPropertiesWithOptionalChildren} from 'util/react/ReactProperties'

import {BootstrapInstanceHandler} from 'bootstrap/BootstrapInstanceHandler'
import {ModalInstance}            from 'bootstrap/modal/ModalInstance'

/**
 * Create a new {@link bootstrap.Modal Modal} instance.
 *
 * @reactComponent the properties received (containing the content, the option, the triggers & the id)
 * @param properties
 * @see https://getbootstrap.com/docs/5.2/components/modals
 */
export default function Modal<const T extends ReactElement = ReactElement, >({children, option, on: triggers, elementId,}: ReactPropertiesWithOptionalChildren<ModalConfiguration, T>,) {
    useEffect(() => {
        const instance = BootstrapInstanceHandler.get.add(elementId, new ModalInstance(elementId, option, triggers,),)
        return () => BootstrapInstanceHandler.get.remove(instance,).destroy()
    },)
    return children ?? null
}
