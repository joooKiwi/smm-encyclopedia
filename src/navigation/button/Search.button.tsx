import {useRef} from 'react'

import Tooltip              from 'bootstrap/tooltip/Tooltip'
import ModalButton          from 'bootstrap/modal/element/ModalButton'
import {contentTranslation} from 'lang/components/translationMethods'
import {SEARCH_MODAL_ID}    from 'navigation/button/modalIds'
import {SUSPENSION_POINT}   from 'util/commonVariables'


/** @reactComponent */
export default function SearchButton() {
    const htmlElement = useRef<HTMLButtonElement>(null,)
    const content = `${contentTranslation('Search',)}${SUSPENSION_POINT}`

    return <Tooltip option={({title: content, placement: 'bottom',})} reference={htmlElement}>
        <ModalButton ref={htmlElement} id="search-button" className="btn btn-lg btn-outline-primary btn-navigation rounded-pill bi bi-search" elementToShow={SEARCH_MODAL_ID} disabled aria-disabled>
            <span className="btn-navigation-text d-none d-md-inline-block">{content}</span>
        </ModalButton>
    </Tooltip>
}
