import {ReactElement, useEffect} from 'react';

import type {PopoverConfiguration}      from './Popover.types';
import type {ReactPropertyWithChildren} from '../../util/react/ReactProperty';

import {PopoverInstance} from './PopoverInstance';

/**
 * Create a new {@link bootstrap.Popover Popover} instance once the element is rendered
 *
 * @param properties the properties received (containing the content, the option & the id)
 * @constructor
 * @see https://getbootstrap.com/docs/5.1/components/popovers/
 */
export default function Popover<T extends ReactElement = ReactElement, >({children, option, on: triggers, elementId,}: ReactPropertyWithChildren<PopoverConfiguration, T>,): T {
    useEffect(() => {
        new PopoverInstance(document.getElementById(elementId)!, option, triggers,);
    });
    return children;
}
