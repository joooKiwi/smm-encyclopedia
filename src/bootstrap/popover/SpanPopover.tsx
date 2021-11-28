import Popover from './Popover';

import type {SpanPopoverConfiguration}                        from './Popover.types';
import type {ReactElementOrString, ReactPropertyWithChildren} from '../../util/react/ReactProperty';

/**
 *
 * @param properties
 * @reactComponent
 */
export default function SpanPopover<T extends ReactElementOrString = ReactElementOrString, >({children, elementId, ...otherProperties}: ReactPropertyWithChildren<SpanPopoverConfiguration, T>,) {
    return <Popover elementId={elementId} {...otherProperties}>
        <span key={elementId} id={elementId} data-bs-toggle="popover">{children}</span>
    </Popover>;
}
