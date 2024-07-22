import './BottomLanguageChanger.button.scss'

import {useRef}                    from 'react'
import TranslateIcon               from 'bootstrap/icon/TranslateIcon'
import Tooltip                     from 'bootstrap/tooltip/Tooltip'
import {contentTranslation}        from 'lang/components/translationMethods'
import {LANGUAGE_CHANGER_MODAL_ID} from 'navigation/button/modalIds'
import ModalButton                 from 'bootstrap/modal/element/ModalButton'

/** @reactComponent */
export default function BottomLanguageChangerButton() {
    const htmlElement = useRef<HTMLButtonElement>(null,)

    return <Tooltip option={({title: contentTranslation('Change the language',), placement: 'left', customClass: 'bottomLanguage-tooltip',})} reference={htmlElement}>
        <ModalButton ref={htmlElement} id="bottomLanguageChanger-button" className="btn btn-lg btn-outline-light btn-navigation rounded-pill" elementToShow={LANGUAGE_CHANGER_MODAL_ID}>
            <TranslateIcon/>
            <span className="btn-navigation-text d-none d-lg-inline-block">{contentTranslation('Change the language',)}</span>
        </ModalButton>
    </Tooltip>
}
