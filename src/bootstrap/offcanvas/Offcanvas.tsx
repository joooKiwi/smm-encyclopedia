import type {NullOr}    from '@joookiwi/type'
import type {RefObject} from 'react'
import {useEffect}      from 'react'

import type {OffcanvasConfiguration}              from 'bootstrap/offcanvas/Offcanvas.types'
import type {ReactPropertiesWithOptionalChildren} from 'util/react/ReactProperties'

import {BootstrapInstanceHandler} from 'bootstrap/BootstrapInstanceHandler'
import {OffcanvasInstance}        from 'bootstrap/offcanvas/OffcanvasInstance'

interface OffcanvasProperties
    extends Omit<OffcanvasConfiguration, 'elementId'>,
        ReactPropertiesWithOptionalChildren<ReactElement> {

    readonly modalReference: RefObject<NullOr<HTMLDivElement>>

}

/**
 * Create a new {@link bootstrap.Offcanvas Offcanvas} instance
 *
 * @param properties the properties received (containing the content, the option, the triggers & the id)
 * @reactComponent
 * @see https://getbootstrap.com/docs/5.2/components/offcanvas
 */
export default function Offcanvas({modalReference, children, option, on: triggers,}: OffcanvasProperties,) {
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
