import {Tooltip as BootstrapTooltip} from 'bootstrap';
import {useEffect}                   from 'react';

import type {TooltipConfiguration}                    from './Tooltip.types';
import type {ReactElement, ReactPropertyWithChildren} from '../../util/ReactProperty';

/**
 * Create a new {@link BootstrapTooltip Tooltip} instance.
 *
 * @param properties the properties received (containing the content, the option & the id)
 * @constructor
 * @see https://getbootstrap.com/docs/5.1/components/tooltips/
 */
export default function Tooltip<T extends ReactElement = ReactElement, >({children, option, elementId,}: ReactPropertyWithChildren<TooltipConfiguration,T>,): T {
    useEffect(() => {
       BootstrapTooltip.getOrCreateInstance(document.getElementById(elementId)!, option,);
    });
    return children;
}
