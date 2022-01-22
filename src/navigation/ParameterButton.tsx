import './ParameterButton.scss';

import type {ReactProperty} from '../util/react/ReactProperty';

import ContentTranslationComponent from '../lang/components/ContentTranslationComponent';
import {EMPTY_OBJECT}              from '../util/emptyVariables';
import ModalButton                 from '../bootstrap/modal/element/ModalButton';
import Modal                       from '../bootstrap/modal/Modal';
import Tooltip                     from '../bootstrap/tooltip/Tooltip';

export interface ParameterButtonProperties
    extends ReactProperty {

    containerId: string

}

const DIV_ELEMENT_ID = 'parameter-container';

export default function ParameterButton({containerId,}: ParameterButtonProperties,) {
    return <ContentTranslationComponent>{translation =>
        <Tooltip elementId={DIV_ELEMENT_ID} option={({title: translation('Options'), placement: 'right',})}>
            <div id={DIV_ELEMENT_ID} className="container">
                <ModalButton elementToShow={containerId} className="btn btn-lg btn-outline-primary rounded-circle bi-gear-fill"/>
                <Modal elementId={containerId} option={EMPTY_OBJECT}/>
            </div>
        </Tooltip>
    }</ContentTranslationComponent>;
}
