import type {ReactProperty} from '../util/react/ReactProperty';

import ContentTranslationComponent from '../lang/components/ContentTranslationComponent';
import ModalButton                 from '../bootstrap/modal/element/ModalButton';
import Tooltip                     from '../bootstrap/tooltip/Tooltip';

export interface ParameterButtonProperties
    extends ReactProperty {

    containerId: string

}

const DIV_ELEMENT_ID = 'parameter-container';

/**
 * @param properties
 * @reactComponent
 */
export default function ParameterButton({containerId,}: ParameterButtonProperties,) {
    return <ContentTranslationComponent>{translation =>
        <Tooltip elementId={DIV_ELEMENT_ID} option={({title: translation('Options'), placement: 'left',})}>
            <div id={DIV_ELEMENT_ID}>
                <ModalButton elementToShow={containerId} className="btn btn-lg btn-outline-primary rounded-circle bi-gear-fill"/>
            </div>
        </Tooltip>
    }</ContentTranslationComponent>;
}
