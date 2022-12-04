import {useEffect} from 'react'

import type {ModalConfiguration}                                from 'bootstrap/modal/Modal.types'
import type {ReactElement, ReactPropertiesWithOptionalChildren} from 'util/react/ReactProperties'

import {ModalInstance}       from 'bootstrap/modal/ModalInstance'
import {EMPTY_REACT_ELEMENT} from 'util/emptyReactVariables'

/**
 *
 * @reactComponent
 * @param properties
 */
export default function Modal<T extends ReactElement = ReactElement, >({children = EMPTY_REACT_ELEMENT as T, option, on: triggers, elementId, }: ReactPropertiesWithOptionalChildren<ModalConfiguration, T>,): T {
    useEffect(() => [elementId].flat().forEach(elementId => new ModalInstance(elementId, option, triggers,)))
    return children
}
