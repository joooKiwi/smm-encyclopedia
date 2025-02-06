import {useEffect} from 'react'

import type {PopoverConfiguration}                from 'bootstrap/popover/Popover.types'
import type {ReactPropertiesWithOptionalChildren} from 'util/react/ReactProperties'

import {BootstrapInstanceHandler} from 'bootstrap/BootstrapInstanceHandler'
import {PopoverInstance}          from 'bootstrap/popover/PopoverInstance'

interface PopoverProperties
    extends ReactPropertiesWithOptionalChildren<ReactElement>, PopoverConfiguration {}

/**
 * Create a new {@link bootstrap.Popover Popover} instance
 *
 * @param properties the properties received (containing the content, the option & the id)
 * @reactComponent
 * @see https://getbootstrap.com/docs/5.2/components/popovers
 */
export default function Popover({children, option, on: triggers, elementId,}: PopoverProperties,) {
    useEffect(() => {
        const instance = BootstrapInstanceHandler.get.add(elementId, new PopoverInstance(elementId, option, triggers,),)
        return () => BootstrapInstanceHandler.get.remove(instance,).destroy()
    },)
    return children ?? null
}
