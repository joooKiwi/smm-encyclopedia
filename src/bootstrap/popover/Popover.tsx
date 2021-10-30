import {useEffect}         from 'react';

import type {PopoverConfiguration}                            from './Popover.types';
import type {ReactElement, ReactPropertyWithOptionalChildren} from '../../util/ReactProperty';

import {EMPTY_REACT_ELEMENT} from '../../util/emptyReactVariables';
import {PopoverInstance}     from './PopoverInstance';

/**
 * Create a new {@link bootstrap.Popover Popover} instance once the element is rendered
 *
 * @param properties the properties received (containing the content, the option & the id)
 * @reactComponent
 * @see https://getbootstrap.com/docs/5.1/components/popovers/
 */
export default function Popover<T extends ReactElement = ReactElement, >({children = EMPTY_REACT_ELEMENT as T, option, on: triggers, elementId,}: ReactPropertyWithOptionalChildren<PopoverConfiguration, T>,): T {
    useEffect(() => [elementId].flat().forEach(elementId => new PopoverInstance(elementId, option, triggers,)));
    return children;
}
