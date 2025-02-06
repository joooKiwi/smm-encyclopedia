import type {NullOr}    from '@joookiwi/type'
import type {RefObject} from 'react'
import {useEffect}      from 'react'

import type {ModalConfiguration}                  from 'bootstrap/modal/Modal.types'
import type {ReactPropertiesWithOptionalChildren} from 'util/react/ReactProperties'

import {BootstrapInstanceHandler} from 'bootstrap/BootstrapInstanceHandler'
import {ModalInstance}            from 'bootstrap/modal/ModalInstance'

interface ModalProperties
    extends Omit<ModalConfiguration, 'elementId'>,
        ReactPropertiesWithOptionalChildren<ReactElement> {

    /** The reference to initialize a {@link ModalInstance} */
    readonly modalReference: RefObject<NullOr<HTMLDivElement>>

}

/**
 * Create a new {@link bootstrap.Modal Modal} instance.
 *
 * @reactComponent
 * @param properties the properties received (containing the content, the option, the triggers & the id)
 * @see https://getbootstrap.com/docs/5.2/components/modals
 */
export default function Modal({modalReference, children, option, on: triggers,}: ModalProperties,) {
    useEffect(() => {
        const reference = modalReference.current
        if (reference == null)
            return

        const handler = BootstrapInstanceHandler.get
        const instance = handler.add(reference, new ModalInstance(reference, option, triggers,),)
        return () => handler.remove(instance,).destroy()
    },)
    return children ?? null
}
