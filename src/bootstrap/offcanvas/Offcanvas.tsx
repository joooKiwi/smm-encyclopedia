import {useEffect} from 'react'

import type {OffcanvasConfiguration}                            from 'bootstrap/offcanvas/Offcanvas.types'
import type {ReactElement, ReactPropertiesWithOptionalChildren} from 'util/react/ReactProperties'

import {OffcanvasInstance}   from 'bootstrap/offcanvas/OffcanvasInstance'
import {EMPTY_REACT_ELEMENT} from 'util/emptyReactVariables'

/**
 * Create a new {@link bootstrap.Offcanvas Offcanvas} instance once the element is rendered
 *
 * @param properties the properties received (containing the content & the id)
 * @reactComponent
 * @see https://getbootstrap.com/docs/5.1/components/offcanvas/
 */
export default function Offcanvas<T extends ReactElement = ReactElement, >({children = EMPTY_REACT_ELEMENT as T, on: triggers, elementId,}: ReactPropertiesWithOptionalChildren<OffcanvasConfiguration, T>,): T {
    useEffect(() => [elementId].flat().forEach(elementId => new OffcanvasInstance(elementId, triggers,)))
    return children
}
