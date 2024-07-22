import {useRef} from 'react'

import type {ReactProperties} from 'util/react/ReactProperties'

import Tooltip from 'bootstrap/tooltip/Tooltip'

interface TextWithInformativeTooltipProperties
    extends ReactProperties {

    id: string

    value: ReactElementOrStringOrNumberOrArray

    tooltip: string

}

/** @reactComponent */
export default function TextWithInformativeTooltip({value, tooltip,}: TextWithInformativeTooltipProperties,) {
    const htmlElement = useRef<HTMLDivElement>(null,)
    if (tooltip == null)
        return value

    return <Tooltip option={{title: tooltip,}} reference={htmlElement}>
        <div ref={htmlElement} className="text-withInformativeTooltip-container d-inline">{value}</div>
    </Tooltip>
}
