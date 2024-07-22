import {useRef} from 'react'

import ModalButton          from 'bootstrap/modal/element/ModalButton'
import Tooltip              from 'bootstrap/tooltip/Tooltip'
import {contentTranslation} from 'lang/components/translationMethods'
import {PARAMETER_MODAL_ID} from 'navigation/button/modalIds'

/** @reactComponent */
export default function ParameterButton() {
    const htmlElement = useRef<HTMLButtonElement>(null,)

    //FIXME: Re-enable once the global parameter works
    return <Tooltip option={({title: contentTranslation('Options',), placement: 'left',})} reference={htmlElement}>
        <ModalButton ref={htmlElement} id="parameter-button" className="btn btn-outline-primary btn-navigation bi bi-gear-fill" elementToShow={PARAMETER_MODAL_ID} disabled aria-disabled>
            <span className={`btn-navigation-text d-none d-lg-inline-block`}>{contentTranslation('Options',)}</span>
        </ModalButton>
    </Tooltip>
}
