import {ReactElement, useEffect} from 'react';

import type {OffcanvasConfiguration}    from './Offcanvas.types';
import type {ReactPropertyWithChildren} from '../../util/react/ReactProperty';

import {OffcanvasInstance} from './OffcanvasInstance';

/**
 * Create a new {@link bootstrap.Offcanvas Offcanvas} instance once the element is rendered
 *
 * @param properties the properties received (containing the content & the id)
 * @reactComponent
 * @see https://getbootstrap.com/docs/5.1/components/offcanvas/
 */
export default function Offcanvas<T extends ReactElement = ReactElement, >({children, on: triggers, elementId,}: ReactPropertyWithChildren<OffcanvasConfiguration, T>,): T {
    useEffect(() => {
        new OffcanvasInstance(elementId, triggers,);
    });
    return children;
}
