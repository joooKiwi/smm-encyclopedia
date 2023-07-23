import {useEffect} from 'react'

import type {PopoverConfiguration}                from 'bootstrap/popover/Popover.types'
import type {ReactPropertiesWithOptionalChildren} from 'util/react/ReactProperties'

import {PopoverInstance} from 'bootstrap/popover/PopoverInstance'

/**
 * Create a new {@link bootstrap.Popover Popover} instance once the element is rendered
 *
 * @param properties the properties received (containing the content, the option & the id)
 * @reactComponent
 * @see https://getbootstrap.com/docs/5.1/components/popovers/
 */
export default function Popover<const T extends ReactElement = ReactElement, >({children, option, on: triggers, elementId,}: ReactPropertiesWithOptionalChildren<PopoverConfiguration, T>,) {
    useEffect(() => [elementId].flat().forEach(elementId => new PopoverInstance(elementId, option, triggers,)))
    return children ?? null
}
