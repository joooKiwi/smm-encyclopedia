import type {ReactProperty}   from '../util/react/ReactProperty';
import type {ModalProperties} from './ModalContainers.types';

import ContentTranslationComponent from '../lang/components/ContentTranslationComponent';
import ModalButton                 from '../bootstrap/modal/element/ModalButton';
import Tooltip                     from '../bootstrap/tooltip/Tooltip';

export interface SearchProperties
    extends ReactProperty, ModalProperties {

}

const ID = 'search-button';

/**
 * @param properties
 * @reactComponent
 */
export default function SearchButton({id,}: SearchProperties,) {
    return <ContentTranslationComponent>{translation =>
        <Tooltip elementId={ID} option={({title: `${translation('Search')}…`, placement: 'bottom',})}>
            <ModalButton id={ID} elementToShow={id} className="btn btn-lg btn-outline-primary rounded-pill bi-search">
                {translation('Search')}…
            </ModalButton>
        </Tooltip>
    }</ContentTranslationComponent>;
}