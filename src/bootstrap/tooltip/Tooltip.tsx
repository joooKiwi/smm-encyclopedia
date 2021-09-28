import {Tooltip as BootstrapTooltip} from 'bootstrap';
import {useEffect}                   from 'react';

import type {TooltipConfiguration}      from './Tooltip.types';
import type {ReactPropertyWithChildren} from '../../util/ReactProperty';

export default function Tooltip<T extends JSX.Element = JSX.Element, >({children, option, elementId,}: ReactPropertyWithChildren<TooltipConfiguration,T>,): T {
    useEffect(() => {
       new BootstrapTooltip(document.getElementById(elementId)!, option,);
    });
    return children;
}
