import './InstrumentProperty.scss';

import type {ReactProperties} from '../../../../util/react/ReactProperties';
import type {Entities}        from '../../Entities';

import {EMPTY_REACT_ELEMENT}           from '../../../../util/emptyReactVariables';
import GameContentTranslationComponent from '../../../../lang/components/GameContentTranslationComponent';
import Tooltip                         from '../../../../bootstrap/tooltip/Tooltip';

interface InstrumentPropertyProperties
    extends ReactProperties {

    value: Entities

}

/**
 * @todo add on click event to play the music block sound (randomly if more than one)
 * @reactComponent
 */
export default function InstrumentPropertyComponent({value: {englishNameInHtml, reference: {canMakeASoundOutOfAMusicBlock: value, canMakeASoundOutOfAMusicBlockComment: comment,},},}: InstrumentPropertyProperties,) {
    if (value !== true)
        return EMPTY_REACT_ELEMENT;
    const id = `${englishNameInHtml}-instrumentProperty`;

    if (comment == null)
        return <i id={id} className="music-block"/>;
    return <GameContentTranslationComponent>{translation =>
        <Tooltip option={{title: translation(`instrument.${comment}`),}} elementId={id}>
            <i id={id} className="music-block-with-comment"/>
        </Tooltip>
    }</GameContentTranslationComponent>;
}
