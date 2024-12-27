import type {PopoverConfiguration}        from 'bootstrap/popover/Popover.types'
import type {ReactPropertiesWithChildren} from 'util/react/ReactProperties'

import Popover       from 'bootstrap/popover/Popover'
import TextComponent from 'app/tools/text/TextComponent'

interface TextPopoverProperties
    extends ReactPropertiesWithChildren<ReactElementOrString>, PopoverConfiguration {}

/**
 *
 * @param properties
 * @reactComponent
 */
export default function TextPopover({children, elementId, ...otherProperties}: TextPopoverProperties,) {
    return <Popover elementId={elementId} {...otherProperties}>
        <TextComponent key={elementId} id={elementId} content={children} data-bs-toggle="popover"/>
    </Popover>
}
