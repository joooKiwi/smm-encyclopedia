import {useEffect} from 'react';

import type {ReactElement, ReactPropertyWithOptionalChildren} from '../../util/react/ReactProperty';
import type {ModalConfiguration}                              from './Modal.types';

import {EMPTY_REACT_ELEMENT} from '../../util/emptyReactVariables';
import {ModalInstance}       from './ModalInstance';

/**
 *
 * @reactComponent
 * @param properties
 */
export default function Modal<T extends ReactElement = ReactElement, >({children = EMPTY_REACT_ELEMENT as T, option, on: triggers, elementId, }: ReactPropertyWithOptionalChildren<ModalConfiguration, T>,): T {
    useEffect(() => [elementId].flat().forEach(elementId => new ModalInstance(elementId, option, triggers,)));
    return children;
}
