import {useRef} from 'react'

import ModalButton                          from 'bootstrap/modal/element/ModalButton'
import Tooltip                              from 'bootstrap/tooltip/Tooltip'
import {contentTranslation}                 from 'lang/components/translationMethods'
import {COLOR_MODAL_ID, PARAMETER_MODAL_ID} from 'navigation/button/modalIds'

export default function ColorToParameterButton() {
    const htmlElement = useRef<HTMLButtonElement>(null,)

    return <Tooltip option={{title: contentTranslation('Option',), placement: 'right',}} reference={htmlElement}>
        <ModalButton ref={htmlElement} id="color-to-parameter-button" className="btn btn-outline-primary bi bi-gear-fill rounded-pill"
                     elementToShow={PARAMETER_MODAL_ID} elementToHide={COLOR_MODAL_ID}/>
    </Tooltip>
}
