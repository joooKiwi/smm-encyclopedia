import Popover from './Popover';

import type {SpanPopoverConfiguration}                        from './Popover.types';
import type {ReactElementOrString, ReactPropertyWithChildren} from '../../util/react/ReactProperty';

import TextComponent from '../../app/tools/text/TextComponent';

/**
 *
 * @param properties
 * @reactComponent
 */
export default function TextPopover<T extends ReactElementOrString = ReactElementOrString, >({children, elementId, ...otherProperties}: ReactPropertyWithChildren<SpanPopoverConfiguration, T>,) {
    return <Popover elementId={elementId} {...otherProperties}>
        <TextComponent key={elementId} id={elementId} content={children} data-bs-toggle="popover"/>
    </Popover>;
}
