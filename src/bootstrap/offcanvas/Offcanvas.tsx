import type {NullOr}           from '@joookiwi/type'
import type {MutableRefObject} from 'react'
import {useEffect}             from 'react'

import type {OffcanvasConfiguration}                    from 'bootstrap/offcanvas/Offcanvas.types'
import type {SimpleReactPropertiesWithOptionalChildren} from 'util/react/ReactProperties'

import {BootstrapInstanceHandler} from 'bootstrap/BootstrapInstanceHandler'
import {OffcanvasInstance}        from 'bootstrap/offcanvas/OffcanvasInstance'

interface OffcanvasProperties<out T extends ReactElement, >
    extends Omit<OffcanvasConfiguration, 'elementId'>,
        SimpleReactPropertiesWithOptionalChildren<T> {

    readonly modalReference: MutableRefObject<NullOr<HTMLDivElement>>

}

/**
 * Create a new {@link bootstrap.Offcanvas Offcanvas} instance
 *
 * @param properties the properties received (containing the content, the option, the triggers & the id)
 * @reactComponent
 * @see https://getbootstrap.com/docs/5.2/components/offcanvas
 */
export default function Offcanvas<const T extends ReactElement = ReactElement, >({modalReference, children, option, on: triggers,}: OffcanvasProperties<T>,) {
    useEffect(() => {
        const reference = modalReference.current
        if (reference == null)
            return

        const handler = BootstrapInstanceHandler.get
        const instance = handler.add(reference, new OffcanvasInstance(reference, option, triggers,),)
        return () => handler.remove(instance,).destroy()
    },)
    return children ?? null
}
