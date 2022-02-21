import './EditorVoiceSound.scss';

import type {EditorVoiceSound} from './EditorVoiceSound';
import type {ReactProperty}    from '../../util/react/ReactProperty';

import {EMPTY_REACT_ELEMENT} from '../../util/emptyReactVariables';
import SimpleSound           from '../../app/tools/sounds/SimpleSound';

interface EditorVoiceSoundComponentProperties
    extends ReactProperty {

    editorVoiceSound: EditorVoiceSound

    name: string

}

/**
 * @param properties
 * @reactComponent
 */
export default function EditorVoiceSoundComponent({editorVoiceSound: {fileName, europeanFileName,}, name,}: EditorVoiceSoundComponentProperties,) {
    return fileName == null
        ? EMPTY_REACT_ELEMENT
        : europeanFileName == null
            ? <div key={`Editor voice sound container (single - ${name})`} className="single-editorVoiceSound-container">
                <SimpleSound source={fileName} title={name}/>
            </div>
            : <div key={`Editor voice sound container (double - ${name})`} className="double-editorVoiceSound-container container">
                <div key={`Editor voice sound container (single #1 - ${name}`} className="single-editorVoiceSound-container">
                    <SimpleSound source={fileName} title={name}/>
                </div>
                <div key={`Editor voice sound container (single #2 - ${name})`} className="single-editorVoiceSound-container">
                    <SimpleSound source={europeanFileName} title={name}/>
                </div>
            </div>;

}
