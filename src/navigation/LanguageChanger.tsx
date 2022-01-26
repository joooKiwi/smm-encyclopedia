import './LanguageChanger.scss';

import type {ModalPropertiesWithDiv} from './ModalContainers.types';
import type {ReactProperty}          from '../util/react/ReactProperty';

import ContentTranslationComponent from '../lang/components/ContentTranslationComponent';
import ModalButton                 from '../bootstrap/modal/element/ModalButton';
import Tooltip                     from '../bootstrap/tooltip/Tooltip';

interface LanguageChangerProperties
    extends ReactProperty, ModalPropertiesWithDiv {

}

/**
 * @reactElement
 * @todo change the color to not be black for the "Change the language" tooltip
 */
export default function LanguageChanger({id, divId,}: LanguageChangerProperties,) {
    return <ContentTranslationComponent>{translation =>
        <Tooltip option={({title: translation('Change the language'), placement: 'left',})} elementId={divId}>
            <div id={divId} className="container">
                <ModalButton elementToShow={id} id="languageChanger-button" className="btn btn-lg btn-outline-light rounded-circle bi-translate"/>
            </div>
        </Tooltip>
    }</ContentTranslationComponent>;
}
