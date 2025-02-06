import {useRef} from 'react'

import ModalButton                                 from 'bootstrap/modal/element/ModalButton'
import Tooltip                                     from 'bootstrap/tooltip/Tooltip'
import {contentTranslation}                        from 'lang/components/translationMethods'
import {COLOR_MODAL_ID, LANGUAGE_CHANGER_MODAL_ID} from 'navigation/button/modalIds'

export default function LanguageToColorButton() {
    const htmlElement = useRef<HTMLButtonElement>(null,)

    return <Tooltip option={{title: contentTranslation('Change the color modes',), placement: 'right',}} reference={htmlElement}>
        <ModalButton ref={htmlElement} id="languageChanger-to-color-button" className="btn btn-outline-primary bi bi-palette-fill rounded-pill"
                     elementToShow={COLOR_MODAL_ID} elementToHide={LANGUAGE_CHANGER_MODAL_ID}/>
    </Tooltip>
}
