import {useEffect} from 'react';

import type {TooltipConfiguration}                            from './Tooltip.types';
import type {ReactElement, ReactPropertyWithOptionalChildren} from '../../util/react/ReactProperty';

import {EMPTY_REACT_ELEMENT} from '../../util/emptyReactVariables';
import {TooltipInstance}     from './TooltipInstance';

/**
 * Create a new {@link bootstrap.Tooltip Tooltip} instance.
 *
 * @param properties the properties received (containing the content, the option, the triggers & the id)
 * @reactComponent
 * @see https://getbootstrap.com/docs/5.1/components/tooltips/
 */
export default function Tooltip<T extends ReactElement = ReactElement, >({children = EMPTY_REACT_ELEMENT as T, option, on: triggers, elementId,}: ReactPropertyWithOptionalChildren<TooltipConfiguration, T>): T {
    useEffect(() => [elementId].flat().forEach(elementId => new TooltipInstance(elementId, option, triggers,)));
    return children;
}
