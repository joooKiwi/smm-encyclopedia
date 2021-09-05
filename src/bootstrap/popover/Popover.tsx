import {Popover as BootstrapPopover} from 'bootstrap';
import {useEffect}                   from 'react';

import type {PopoverConfiguration} from './Popover.types';

interface Properties<T extends JSX.Element = JSX.Element>
    extends PopoverConfiguration {

    children: T

}

export default function Popover<T extends JSX.Element = JSX.Element, >({children, option, elementId,}: Properties<T>,): T {
    useEffect(() => {
        new BootstrapPopover(document.getElementById(elementId)!, option,);
    });
    return children;
}
