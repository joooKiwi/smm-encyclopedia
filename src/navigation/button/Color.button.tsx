import {useRef} from 'react'

import ModalButton          from 'bootstrap/modal/element/ModalButton'
import Tooltip              from 'bootstrap/tooltip/Tooltip'
import {contentTranslation} from 'lang/components/translationMethods'
import {COLOR_MODAL_ID}     from 'navigation/button/modalIds'


/** @reactComponent */
export default function ColorButton() {
    const htmlElement = useRef<HTMLButtonElement>(null,)

    return <Tooltip option={({title: contentTranslation('color.plural',), placement: 'left',})} reference={htmlElement}>
        <ModalButton ref={htmlElement} id="color-button" className="btn btn-outline-primary btn-navigation bi bi-palette-fill" disabled aria-disabled elementToShow={COLOR_MODAL_ID}>
            <span className={`btn-navigation-text d-none d-md-inline-block`}>{contentTranslation('color.plural',)}</span>
        </ModalButton>
    </Tooltip>
}
