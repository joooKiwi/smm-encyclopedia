import 'app/tools/text/TextWithInformativeTooltip.scss'

import {useRef} from 'react'

import type {Limits}                            from 'core/limit/Limits'
import type {SimpleReactPropertiesWithChildren} from 'util/react/ReactProperties'

import Tooltip                  from 'bootstrap/tooltip/Tooltip'
import {gameContentTranslation} from 'lang/components/translationMethods'

interface LimitAmountNoteProperties
    extends SimpleReactPropertiesWithChildren<ReactElementOrStringOrNumberOrArray> {

    readonly value: Limits

}

/** @reactComponent */
export default function LimitWithPossibleTooltipOnNote({value, children,}: LimitAmountNoteProperties,) {
    const htmlElement = useRef<HTMLDivElement>(null,)
    const note = value.reference.amountComment

    if (note == null)
        return <div className="limit-withNoTooltipOnNote-container d-inline">{children}</div>
    return <Tooltip option={{title: gameContentTranslation(`limit.note.${note}`, value.noteForTranslation,),}} reference={htmlElement}>
        <div ref={htmlElement} className="limitWithPossibleTooltipOnNote-container text-withInformativeTooltip-container d-inline">
            {children}
        </div>
    </Tooltip>
}
