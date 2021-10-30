import {useEffect} from 'react';

import type {OffcanvasConfiguration}                          from './Offcanvas.types';
import type {ReactElement, ReactPropertyWithOptionalChildren} from '../../util/react/ReactProperty';

import {EMPTY_REACT_ELEMENT} from '../../util/emptyReactVariables';
import {OffcanvasInstance}   from './OffcanvasInstance';

/**
 * Create a new {@link bootstrap.Offcanvas Offcanvas} instance once the element is rendered
 *
 * @param properties the properties received (containing the content & the id)
 * @reactComponent
 * @see https://getbootstrap.com/docs/5.1/components/offcanvas/
 */
export default function Offcanvas<T extends ReactElement = ReactElement, >({children = EMPTY_REACT_ELEMENT as T, on: triggers, elementId,}: ReactPropertyWithOptionalChildren<OffcanvasConfiguration, T>,): T {
    useEffect(() => [elementId].flat().forEach(elementId => new OffcanvasInstance(elementId, triggers,)));
    return children;
}
