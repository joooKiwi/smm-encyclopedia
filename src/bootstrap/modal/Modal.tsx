import type {MutableRefObject, ReactElement} from 'react'
import {useEffect}                           from 'react'

import type {ModalConfiguration}                        from 'bootstrap/modal/Modal.types'
import type {SimpleReactPropertiesWithOptionalChildren} from 'util/react/ReactProperties'

import {BootstrapInstanceHandler} from 'bootstrap/BootstrapInstanceHandler'
import {ModalInstance}            from 'bootstrap/modal/ModalInstance'

interface ModalProperties<out T extends ReactElement, >
    extends Omit<ModalConfiguration, 'elementId'>,
        SimpleReactPropertiesWithOptionalChildren<T> {

    /** The reference to initialize a {@link ModalInstance} */
    readonly modalReference: MutableRefObject<NullOr<HTMLDivElement>>

}

/**
 * Create a new {@link bootstrap.Modal Modal} instance.
 *
 * @reactComponent
 * @param properties the properties received (containing the content, the option, the triggers & the id)
 * @see https://getbootstrap.com/docs/5.2/components/modals
 */
export default function Modal<const T extends ReactElement = ReactElement, >({modalReference, children, option, on: triggers,}: ModalProperties<T>,) {
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
