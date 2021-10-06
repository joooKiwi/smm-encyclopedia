import {Popover as BootstrapPopover} from 'bootstrap';
import {ReactElement, useEffect}     from 'react';

import type {PopoverConfiguration}      from './Popover.types';
import type {ReactPropertyWithChildren} from '../../util/ReactProperty';

/**
 * Create a new {@link BootstrapPopover Popover} instance once the element is rendered
 *
 * @param properties the properties received (containing the content, the option & the id)
 * @constructor
 * @see https://getbootstrap.com/docs/5.1/components/popovers/
 */
export default function Popover<T extends ReactElement = ReactElement, >({children, option, elementId,}: ReactPropertyWithChildren<PopoverConfiguration, T>,): T {
    useEffect(() => {
        BootstrapPopover.getOrCreateInstance(document.getElementById(elementId)!, option,);
    });
    return children;
}
