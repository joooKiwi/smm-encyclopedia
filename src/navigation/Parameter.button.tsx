import type {ModalProperties} from './ModalContainers.types';
import type {ReactProperty}   from '../util/react/ReactProperty';

import ContentTranslationComponent from '../lang/components/ContentTranslationComponent';
import ModalButton                 from '../bootstrap/modal/element/ModalButton';
import Tooltip                     from '../bootstrap/tooltip/Tooltip';

export interface ParameterButtonProperties
    extends ReactProperty, ModalProperties {

}

const ID = 'parameter-button';

/**
 * @param properties
 * @reactComponent
 */
export default function ParameterButton({id,}: ParameterButtonProperties,) {
    return <ContentTranslationComponent>{translation =>
        <Tooltip elementId={ID} option={({title: translation('Options'), placement: 'left',})}>
            <div id={ID}>
                <ModalButton elementToShow={id} className="btn btn-lg btn-outline-primary rounded-circle bi-gear-fill"/>
            </div>
        </Tooltip>
    }</ContentTranslationComponent>;
}
