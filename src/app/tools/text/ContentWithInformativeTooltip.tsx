import './ContentWithInformativeTooltip.scss'

import {useRef} from 'react'

import type {ReactPropertiesWithChildren} from 'util/react/ReactProperties'

import Tooltip from 'bootstrap/tooltip/Tooltip'

interface ContentWithInformativeTooltipProperties
    extends ReactPropertiesWithChildren<ReactElementOrStringOrNumberOrArray> {

    tooltip: string

    /** A value to tell that the {@link ContentWithInformativeTooltipProperties.tooltip tooltip} will be placed partially inside the content */
    inside?: boolean

}

/** @reactComponent */
export default function ContentWithInformativeTooltip({children, inside = false, tooltip,}: ContentWithInformativeTooltipProperties,) {
    const htmlElement = useRef<HTMLDivElement>(null,)
    if (tooltip == null)
        return children

    return <Tooltip option={{title: tooltip,}} reference={htmlElement}>
        <div ref={htmlElement} className={`content-withInformativeTooltip-container${inside ? ' tooltip-inside' : ''} d-inline`}>{children}</div>
    </Tooltip>
}
