import './BottomLanguageChanger.button.scss'

import ModalButton                from 'bootstrap/modal/element/ModalButton'
import Tooltip                    from 'bootstrap/tooltip/Tooltip'
import {contentTranslation}       from 'lang/components/translationMethods'
import {LANGUAGE_CHANGER_MODAL_ID} from 'navigation/button/modalIds'

const ID = 'bottomLanguageChanger-button'

/**
 * @reactComponent
 * @todo change the color to not be black for the "Change the language" tooltip
 */
export default function BottomLanguageChangerButton(){
    return <Tooltip elementId={ID} option={({title: contentTranslation('Change the language'), placement: 'left',})}>
        <ModalButton key={`navigation button (bottom language changer)`} id={ID} elementToShow={LANGUAGE_CHANGER_MODAL_ID} className="btn btn-lg btn-outline-light btn-navigation rounded-pill bi bi-translate">
            <span key={`navigation text button (bottom language changer)`} className="btn-navigation-text d-none d-lg-inline-block">{contentTranslation('Change the language')}</span>
        </ModalButton>
    </Tooltip>
}
