import {Offcanvas as BootstrapOffcanvas} from 'bootstrap';
import {ReactElement, useEffect}         from 'react';

import type {OffcanvasConfiguration}    from './Offcanvas.types';
import type {ReactPropertyWithChildren} from '../../util/ReactProperty';

/**
 * Create a new {@link BootstrapOffcanvas Offcanvas} instance once the element is rendered
 *
 * @param properties the properties received (containing the content & the id)
 * @constructor
 * @see https://getbootstrap.com/docs/5.1/components/offcanvas/
 */
export default function Offcanvas<T extends ReactElement = ReactElement, >({children, elementId,}: ReactPropertyWithChildren<OffcanvasConfiguration, T>,): T {
    useEffect(() => {
        BootstrapOffcanvas.getOrCreateInstance(document.getElementById(elementId)!,);
    });
    return children;
}
