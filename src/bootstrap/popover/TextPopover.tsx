import Popover from './Popover'

import type {SpanPopoverConfiguration}                          from './Popover.types'
import type {ReactElementOrString, ReactPropertiesWithChildren} from '../../util/react/ReactProperties'

import TextComponent from '../../app/tools/text/TextComponent'

/**
 *
 * @param properties
 * @reactComponent
 */
export default function TextPopover<T extends ReactElementOrString = ReactElementOrString, >({children, elementId, ...otherProperties}: ReactPropertiesWithChildren<SpanPopoverConfiguration, T>,) {
    return <Popover elementId={elementId} {...otherProperties}>
        <TextComponent key={elementId} id={elementId} content={children} data-bs-toggle="popover"/>
    </Popover>
}
