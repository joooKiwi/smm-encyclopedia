import Popover from './Popover';

import type {SpanPopoverConfiguration}                        from './Popover.types';
import type {ReactElementOrString, ReactPropertyWithChildren} from '../../util/ReactProperty';

/**
 *
 * @param properties
 * @reactComponent
 */
export default function SpanPopover<T extends ReactElementOrString = ReactElementOrString, >({children, elementId, option,}: ReactPropertyWithChildren<SpanPopoverConfiguration, T>,) {
    return <Popover elementId={elementId} option={option}>
        <span key={elementId} id={elementId} data-bs-toggle="popover">{children}</span>
    </Popover>;
}
