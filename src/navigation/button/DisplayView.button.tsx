import {useRef} from 'react'

import {contentTranslation}    from 'lang/components/translationMethods'
import ModalButton             from 'bootstrap/modal/element/ModalButton'
import Tooltip                 from 'bootstrap/tooltip/Tooltip'
import {DISPLAY_VIEW_MODAL_ID} from 'navigation/button/modalIds'
import {SUSPENSION_POINT}      from 'util/commonVariables'

/** @reactComponent */
export default function DisplayViewButton() {
    const htmlElement = useRef<HTMLButtonElement>(null,)
    const content = `${contentTranslation('Display',)}${SUSPENSION_POINT}`

    return <Tooltip option={({title: content, placement: 'bottom',})} reference={htmlElement}>
        <ModalButton ref={htmlElement} id="displayView-button" className="btn btn-lg btn-outline-primary btn-navigation rounded-pill" elementToShow={DISPLAY_VIEW_MODAL_ID}>
            <span className="btn-navigation-text">{content}</span>
        </ModalButton>
    </Tooltip>
}
