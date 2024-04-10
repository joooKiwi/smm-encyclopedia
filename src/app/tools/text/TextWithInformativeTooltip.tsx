import type {ReactProperties} from 'util/react/ReactProperties'

import Tooltip from 'bootstrap/tooltip/Tooltip'

interface TextWithInformativeTooltipProperties
    extends ReactProperties {

    id: string

    value: ReactElementOrStringOrNumberOrArray

    tooltip: string

}

/** @reactComponent */
export default function TextWithInformativeTooltip({id, value, tooltip,}: TextWithInformativeTooltipProperties,) {
    if (tooltip == null)
        return value

    return <Tooltip elementId={id} option={{title: tooltip,}}>
        <div id={id} className="text-withInformativeTooltip-container d-inline">{value}</div>
    </Tooltip>
}
