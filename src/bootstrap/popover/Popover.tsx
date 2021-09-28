import {Popover as BootstrapPopover} from 'bootstrap';
import {useEffect}                   from 'react';

import type {PopoverConfiguration}      from './Popover.types';
import type {ReactPropertyWithChildren} from '../../util/ReactProperty';

export default function Popover<T extends JSX.Element = JSX.Element, >({children, option, elementId,}: ReactPropertyWithChildren<PopoverConfiguration, T>,): T {
    useEffect(() => {
        new BootstrapPopover(document.getElementById(elementId)!, option,);
    });
    return children;
}
