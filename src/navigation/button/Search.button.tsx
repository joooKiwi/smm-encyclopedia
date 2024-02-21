import Tooltip              from 'bootstrap/tooltip/Tooltip'
import ModalButton          from 'bootstrap/modal/element/ModalButton'
import {contentTranslation} from 'lang/components/translationMethods'
import {SEARCH_MODAL_ID}    from 'navigation/button/modalIds'
import {SUSPENSION_POINT}   from 'util/commonVariables'

const ID = 'search-button'

/** @reactComponent */
export default function SearchButton() {
    const content = `${contentTranslation('Search',)}${SUSPENSION_POINT}`

    return <Tooltip elementId={ID} option={({title: content, placement: 'bottom',})}>
        <ModalButton key={`navigation button (search)`} id={ID} elementToShow={SEARCH_MODAL_ID} className="btn btn-lg btn-outline-primary btn-navigation rounded-pill bi bi-search" disabled>
            <span key={`navigation text button (search)`} className="btn-navigation-text d-none d-md-inline-block">{content}</span>
        </ModalButton>
    </Tooltip>
}
