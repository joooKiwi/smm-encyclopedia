import {useEffect} from 'react'

import type {TooltipConfiguration}                from 'bootstrap/tooltip/Tooltip.types'
import type {ReactPropertiesWithOptionalChildren} from 'util/react/ReactProperties'

import {TooltipInstance} from 'bootstrap/tooltip/TooltipInstance'

/**
 * Create a new {@link bootstrap.Tooltip Tooltip} instance.
 *
 * @param properties the properties received (containing the content, the option, the triggers & the id)
 * @reactComponent
 * @see https://getbootstrap.com/docs/5.1/components/tooltips/
 */
export default function Tooltip<T extends ReactElement = ReactElement, >({children, option, on: triggers, elementId,}: ReactPropertiesWithOptionalChildren<TooltipConfiguration, T>) {
    useEffect(() => [elementId].flat().forEach(elementId => new TooltipInstance(elementId, option, triggers,)))
    return children ?? null
}
