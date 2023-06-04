import ModalButton                from 'bootstrap/modal/element/ModalButton'
import Tooltip                    from 'bootstrap/tooltip/Tooltip'
import {contentTranslation}       from 'lang/components/translationMethods'

const ID = "parameter-button"
export const MODAL_ID = "parameter-modal-container"

/**
 * @reactComponent
 */
export default function ParameterButton() {
    return <Tooltip elementId={ID} option={({title: contentTranslation('Options'), placement: 'left',})}>
        <ModalButton key={`navigation button (parameter)`} id={ID} elementToShow={ID} className="btn btn-lg btn-outline-primary btn-navigation rounded-pill bi bi-gear-fill">
                <span key={`navigation text button (parameter)`} className={`btn-navigation-text d-none d-lg-inline-block`}>{contentTranslation('Options')}</span>
        </ModalButton>
    </Tooltip>
}
