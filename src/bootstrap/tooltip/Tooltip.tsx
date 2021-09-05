import {Tooltip as BootstrapTooltip} from 'bootstrap';
import {useEffect}                   from 'react';

import type {TooltipConfiguration} from './Tooltip.types';

interface Properties<T extends JSX.Element = JSX.Element>
    extends TooltipConfiguration {

    children: T

}

export default function Tooltip<T extends JSX.Element = JSX.Element, >({children, option, elementId,}: Properties<T>,): T {
    useEffect(() => {
        new BootstrapTooltip(document.getElementById(elementId)!, option,);
    });
    return children;
}
