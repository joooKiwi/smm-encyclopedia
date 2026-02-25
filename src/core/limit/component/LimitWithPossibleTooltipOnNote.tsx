import type {Limits}                      from 'core/limit/Limits'
import type {ReactPropertiesWithChildren} from 'util/react/ReactProperties'

import ContentWithInformativeTooltip from 'app/tools/text/ContentWithInformativeTooltip'
import {gameContentTranslation}      from 'lang/components/translationMethods'

interface LimitAmountNoteProperties
    extends ReactPropertiesWithChildren<ReactElementOrStringOrNumberOrArray> {

    readonly value: Limits

}

/** @reactComponent */
export default function LimitWithPossibleTooltipOnNote({value, children,}: LimitAmountNoteProperties,) {
    const note = value.reference.amountComment

    if (note == null)
        return <div className="limit-withNoTooltipOnNote-container d-inline">{children}</div>
    return <ContentWithInformativeTooltip tooltip={gameContentTranslation(`limit.note.${note}`, value.noteForTranslation,)}>
        <div className="limitWithPossibleTooltipOnNote-container d-inline">
            {children}
        </div>
    </ContentWithInformativeTooltip>
}
