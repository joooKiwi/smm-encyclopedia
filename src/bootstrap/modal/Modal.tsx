import {useEffect} from 'react'

import type {ModalConfiguration}                                from 'bootstrap/modal/Modal.types'
import type {ReactElement, ReactPropertiesWithOptionalChildren} from 'util/react/ReactProperties'

import {ModalInstance} from 'bootstrap/modal/ModalInstance'

/**
 *
 * @reactComponent
 * @param properties
 */
export default function Modal<T extends ReactElement = ReactElement, >({children, option, on: triggers, elementId,}: ReactPropertiesWithOptionalChildren<ModalConfiguration, T>,) {
    useEffect(() => [elementId].flat().forEach(elementId => new ModalInstance(elementId, option, triggers,)))
    return children
}
