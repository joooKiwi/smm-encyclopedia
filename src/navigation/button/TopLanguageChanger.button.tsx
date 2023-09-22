import TranslateIcon               from 'bootstrap/icon/TranslateIcon'
import Tooltip                     from 'bootstrap/tooltip/Tooltip'
import ModalButton                 from 'bootstrap/modal/element/ModalButton'
import {contentTranslation}        from 'lang/components/translationMethods'
import {LANGUAGE_CHANGER_MODAL_ID} from 'navigation/button/modalIds'

const ID = 'topLanguageChanger-button'

export default function TopLanguageChangerButton() {
    return <Tooltip elementId={ID} option={({title: contentTranslation('Change the language'), placement: 'left',})}>
        <ModalButton key={`navigation button (top language changer)`} id={ID} elementToShow={LANGUAGE_CHANGER_MODAL_ID} className="btn btn-outline-primary btn-navigation icon-link gap-0">
            <TranslateIcon/>
            <span key={`navigation text button (top language changer)`} className="btn-navigation-text d-none d-xl-inline-block">{contentTranslation('Change the language')}</span>
        </ModalButton>
    </Tooltip>
}