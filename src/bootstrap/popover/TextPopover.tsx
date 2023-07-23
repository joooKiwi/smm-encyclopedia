import type {SpanPopoverConfiguration}    from 'bootstrap/popover/Popover.types'
import type {ReactPropertiesWithChildren} from 'util/react/ReactProperties'

import Popover       from 'bootstrap/popover/Popover'
import TextComponent from 'app/tools/text/TextComponent'

/**
 *
 * @param properties
 * @reactComponent
 */
export default function TextPopover<const T extends ReactElementOrString = ReactElementOrString, >({children, elementId, ...otherProperties}: ReactPropertiesWithChildren<SpanPopoverConfiguration, T>,) {
    return <Popover elementId={elementId} {...otherProperties}>
        <TextComponent key={elementId} id={elementId} content={children} data-bs-toggle="popover"/>
    </Popover>
}
