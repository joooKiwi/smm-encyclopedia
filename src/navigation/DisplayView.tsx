import './DisplayView.scss';

import type {ModalPropertiesWithDiv} from './ModalContainers.types';
import type {ReactProperty}          from '../util/react/ReactProperty';

import ContentTranslationComponent from '../lang/components/ContentTranslationComponent';
import ModalButton                 from '../bootstrap/modal/element/ModalButton';
import Tooltip                     from '../bootstrap/tooltip/Tooltip';

export interface DisplayViewProperties
    extends ReactProperty, ModalPropertiesWithDiv {

}

/**
 * @param properties
 * @reactComponent
 */
export default function DisplayView({id, divId,}: DisplayViewProperties,) {
    return <ContentTranslationComponent>{translation =>
        <Tooltip elementId={divId} option={({title: `${translation('Display')}…`, placement: 'bottom',})}>
            <div id={divId}>
                <ModalButton elementToShow={id} className="btn btn-lg btn-outline-primary rounded-pill">
                    {translation('Display')}…
                </ModalButton>
            </div>
        </Tooltip>
    }</ContentTranslationComponent>;
}
