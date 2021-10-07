import {useEffect} from 'react';

import type {TooltipConfiguration}                    from './Tooltip.types';
import type {ReactElement, ReactPropertyWithChildren} from '../../util/ReactProperty';

import {TooltipInstance} from './TooltipInstance';

/**
 * Create a new {@link bootstrap.Tooltip Tooltip} instance.
 *
 * @param properties the properties received (containing the content, the option, the triggers & the id)
 * @constructor
 * @see https://getbootstrap.com/docs/5.1/components/tooltips/
 */
export default function Tooltip<T extends ReactElement = ReactElement, >({children, option, on: triggers, elementId,}: ReactPropertyWithChildren<TooltipConfiguration, T>,): T {
    useEffect(() => {
        new TooltipInstance(elementId, option, triggers,);
    });
    return children;
}
