import 'app/tools/text/TextWithInformativeTooltip.scss'

import type {Limits}                            from 'core/limit/Limits'
import type {SimpleReactPropertiesWithChildren} from 'util/react/ReactProperties'

import Tooltip from 'bootstrap/tooltip/Tooltip'
import {gameContentTranslation} from 'lang/components/translationMethods'

interface LimitAmountNoteProperties
    extends SimpleReactPropertiesWithChildren<ReactElementOrStringOrNumberOrArray> {

    readonly value: Limits

}

/** @reactComponent */
export default function LimitWithPossibleTooltipOnNote({value, children,}: LimitAmountNoteProperties,) {
    const id = `${value.englishNameInHtml}-limitWithPossibleTooltipOnNote-container`
    const note = value.reference.amountComment

    if (note == null)
        return children
    return <Tooltip elementId={id} option={{title: gameContentTranslation(`limit.note.${note}`, value.noteForTranslation,),}}>
        <div id={id} className="limitWithPossibleTooltipOnNote-container text-withInformativeTooltip-container d-inline">
            {children}
        </div>
    </Tooltip>
}
