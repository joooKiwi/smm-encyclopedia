import ModalButton                from 'bootstrap/modal/element/ModalButton'
import Tooltip                    from 'bootstrap/tooltip/Tooltip'
import {contentTranslation}       from 'lang/components/translationMethods'
import {PARAMETER_MODAL_ID}       from 'navigation/button/modalIds'

const ID = "color-button"

/**
 * @reactComponent
 */
export default function ColorButton() {
    return <Tooltip elementId={ID} option={({title: contentTranslation('color.plural'), placement: 'left',})}>
        <ModalButton key={`navigation button (color)`} id={ID} elementToShow={PARAMETER_MODAL_ID} className="btn btn-outline-primary btn-navigation bi bi-palette-fill" disabled aria-disabled>
                <span key={`navigation text button (color)`} className={`btn-navigation-text d-none d-md-inline-block`}>{contentTranslation('color.plural')}</span>
        </ModalButton>
    </Tooltip>
}
