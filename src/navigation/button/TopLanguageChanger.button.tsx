import {useRef} from 'react'

import TranslateIcon               from 'bootstrap/icon/TranslateIcon'
import ModalButton                 from 'bootstrap/modal/element/ModalButton'
import Tooltip                     from 'bootstrap/tooltip/Tooltip'
import {contentTranslation}        from 'lang/components/translationMethods'
import {LANGUAGE_CHANGER_MODAL_ID} from 'navigation/button/modalIds'

export default function TopLanguageChangerButton() {
    const htmlElement = useRef<HTMLButtonElement>(null,)

    return <Tooltip option={({title: contentTranslation('Change the language',), placement: 'left',})} reference={htmlElement}>
        <ModalButton ref={htmlElement} id="topLanguageChanger-button" className="btn btn-outline-primary btn-navigation icon-link gap-0" elementToShow={LANGUAGE_CHANGER_MODAL_ID}>
            <TranslateIcon/>
            <span className="btn-navigation-text d-none d-xl-inline-block">{contentTranslation('Change the language',)}</span>
        </ModalButton>
    </Tooltip>
}
