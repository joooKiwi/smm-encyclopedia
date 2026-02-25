import 'app/tools/text/ContentWithInformativeTooltip.scss'

import {useRef} from 'react'

import type {ReactPropertiesWithChildren} from 'util/react/ReactProperties'

import Tooltip from 'bootstrap/tooltip/Tooltip'

interface TooltipComponentProperties
    extends ReactPropertiesWithChildren<ReactElementOrStringOrNumberOrArray> {

    tooltip: string

}

/**
 * A component to have its children shown with a tooltip being displayed
 *
 * @reactComponent
 */
export default function TooltipComponent({children, tooltip,}: TooltipComponentProperties,) {
    const htmlElement = useRef<HTMLDivElement>(null,)
    if (tooltip == null)
        return children

    return <Tooltip option={{title: tooltip,}} reference={htmlElement}>
        <div ref={htmlElement} className="tooltip-component d-inline">{children}</div>
    </Tooltip>
}
