import {useRef} from 'react'

import TranslateIcon                               from 'bootstrap/icon/TranslateIcon'
import ModalButton                                 from 'bootstrap/modal/element/ModalButton'
import Tooltip                                     from 'bootstrap/tooltip/Tooltip'
import {contentTranslation}                        from 'lang/components/translationMethods'
import {COLOR_MODAL_ID, LANGUAGE_CHANGER_MODAL_ID} from 'navigation/button/modalIds'

export default function ColorToLanguageButton() {
    const htmlElement = useRef<HTMLButtonElement>(null,)

    return <Tooltip option={{title: contentTranslation('Change the language',), placement: 'right',}} reference={htmlElement}>
        <ModalButton ref={htmlElement} id="color-to-languageChanger-button" className="btn btn-outline-primary rounded-pill"
                     elementToShow={LANGUAGE_CHANGER_MODAL_ID} elementToHide={COLOR_MODAL_ID}>
            <TranslateIcon/>
        </ModalButton>
    </Tooltip>
}
