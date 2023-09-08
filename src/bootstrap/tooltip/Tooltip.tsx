import {useEffect} from 'react'

import type {TooltipConfiguration}                from 'bootstrap/tooltip/Tooltip.types'
import type {ReactPropertiesWithOptionalChildren} from 'util/react/ReactProperties'

import {BootstrapInstanceHandler} from 'bootstrap/BootstrapInstanceHandler'
import {TooltipInstance}          from 'bootstrap/tooltip/TooltipInstance'

/**
 * Create a new {@link bootstrap.Tooltip Tooltip} instance
 *
 * @param properties the properties received (containing the content, the option, the triggers & the id)
 * @reactComponent
 * @see https://getbootstrap.com/docs/5.2/components/tooltips
 */
export default function Tooltip<const T extends ReactElement = ReactElement, >({children, option, on: triggers, elementId,}: ReactPropertiesWithOptionalChildren<TooltipConfiguration, T>,) {
    useEffect(() => {
        const instance = BootstrapInstanceHandler.get.add(elementId, new TooltipInstance(elementId, option, triggers,),)
        return () => BootstrapInstanceHandler.get.remove(instance,).destroy()
    },)
    return children ?? null
}
