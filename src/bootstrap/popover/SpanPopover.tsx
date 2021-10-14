import Popover from './Popover';

import type {PopoverConfiguration}                            from './Popover.types';
import type {ReactElementOrString, ReactPropertyWithChildren} from '../../util/react/ReactProperty';

/**
 *
 * @param properties
 * @reactComponent
 */
export default function SpanPopover<T extends ReactElementOrString = ReactElementOrString, >({children, elementId, option,}: ReactPropertyWithChildren<PopoverConfiguration, T>,): JSX.Element {
    return <Popover elementId={elementId} option={option}>
        <span key={elementId} id={elementId} data-bs-toggle="popover">{children}</span>
    </Popover>;
}
