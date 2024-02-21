import ModalButton                from 'bootstrap/modal/element/ModalButton'
import Tooltip                    from 'bootstrap/tooltip/Tooltip'
import {contentTranslation}       from 'lang/components/translationMethods'
import {PARAMETER_MODAL_ID}       from 'navigation/button/modalIds'

const ID = "parameter-button"

/** @reactComponent */
export default function ParameterButton() {
    return <Tooltip elementId={ID} option={({title: contentTranslation('Options',), placement: 'left',})}>
        <ModalButton key={`navigation button (parameter)`} id={ID} elementToShow={PARAMETER_MODAL_ID} className="btn btn-outline-primary btn-navigation bi bi-gear-fill">
                <span key={`navigation text button (parameter)`} className={`btn-navigation-text d-none d-lg-inline-block`}>{contentTranslation('Options',)}</span>
        </ModalButton>
    </Tooltip>
}
