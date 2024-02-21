import {contentTranslation}    from 'lang/components/translationMethods'
import ModalButton             from 'bootstrap/modal/element/ModalButton'
import Tooltip                 from 'bootstrap/tooltip/Tooltip'
import {DISPLAY_VIEW_MODAL_ID} from 'navigation/button/modalIds'
import {SUSPENSION_POINT}      from 'util/commonVariables'

const ID = 'displayView-button'

/** @reactComponent */
export default function DisplayViewButton() {
    const content = `${contentTranslation('Display',)}${SUSPENSION_POINT}`

    return <Tooltip elementId={ID} option={({title: content, placement: 'bottom',})}>
        <ModalButton key={`navigation button (display view)`} id={ID} elementToShow={DISPLAY_VIEW_MODAL_ID} className="btn btn-lg btn-outline-primary btn-navigation rounded-pill">
            <span key={`navigation text button (display view)`} className="btn-navigation-text">{content}</span>
        </ModalButton>
    </Tooltip>
}
