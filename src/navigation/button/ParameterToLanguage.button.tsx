import {useRef} from 'react'

import TranslateIcon                                   from 'bootstrap/icon/TranslateIcon'
import ModalButton                                     from 'bootstrap/modal/element/ModalButton'
import Tooltip                                         from 'bootstrap/tooltip/Tooltip'
import {contentTranslation}                            from 'lang/components/translationMethods'
import {LANGUAGE_CHANGER_MODAL_ID, PARAMETER_MODAL_ID} from 'navigation/button/modalIds'

export default function ParameterToLanguageButton() {
    const htmlElement = useRef<HTMLButtonElement>(null,)

    return <Tooltip option={{title: contentTranslation('Change the language',), placement: 'right',}} reference={htmlElement}>
        <ModalButton ref={htmlElement} id="parameter-to-languageChanger-button" className="btn btn-outline-primary rounded-pill"
                     elementToShow={LANGUAGE_CHANGER_MODAL_ID} elementToHide={PARAMETER_MODAL_ID}>
            <TranslateIcon/>
        </ModalButton>
    </Tooltip>
}
