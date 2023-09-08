import {useEffect} from 'react'

import type {OffcanvasConfiguration}              from 'bootstrap/offcanvas/Offcanvas.types'
import type {ReactPropertiesWithOptionalChildren} from 'util/react/ReactProperties'

import {BootstrapInstanceHandler} from 'bootstrap/BootstrapInstanceHandler'
import {OffcanvasInstance}        from 'bootstrap/offcanvas/OffcanvasInstance'

/**
 * Create a new {@link bootstrap.Offcanvas Offcanvas} instance
 *
 * @param properties the properties received (containing the content, the option, the triggers & the id)
 * @reactComponent
 * @see https://getbootstrap.com/docs/5.2/components/offcanvas
 */
export default function Offcanvas<const T extends ReactElement = ReactElement, >({children, option, on: triggers, elementId,}: ReactPropertiesWithOptionalChildren<OffcanvasConfiguration, T>,) {
    useEffect(() => {
        const instance = BootstrapInstanceHandler.get.add(elementId, new OffcanvasInstance(elementId, option, triggers,),)
        return () => BootstrapInstanceHandler.get.remove(instance,).destroy()
    },)
    return children ?? null
}
