import './EditorVoiceSound.scss';

import type {EditorVoiceSound} from './EditorVoiceSound';
import type {ReactProperties}  from '../../util/react/ReactProperties';

import {EMPTY_REACT_ELEMENT} from '../../util/emptyReactVariables';
import SimpleSoundComponent  from '../../util/sound/component/SimpleSound.component';

interface EditorVoiceSoundComponentProperties
    extends ReactProperties {

    editorVoiceSound: EditorVoiceSound

    name: string

}

/**
 * @param properties
 * @reactComponent
 */
export default function EditorVoiceSoundComponent({editorVoiceSound: {file, europeanFile,}, name,}: EditorVoiceSoundComponentProperties,) {
    return file == null
        ? EMPTY_REACT_ELEMENT
        : europeanFile == null
            ? <div key={`Editor voice sound container (single - ${name})`} className="single-editorVoiceSound-container">
                <SimpleSoundComponent file={file} title={name}/>
            </div>
            : <div key={`Editor voice sound container (double - ${name})`} className="double-editorVoiceSound-container container">
                <div key={`Editor voice sound container (single #1 - ${name}`} className="single-editorVoiceSound-container">
                    <SimpleSoundComponent file={file} title={name}/>
                </div>
                <div key={`Editor voice sound container (single #2 - ${name})`} className="single-editorVoiceSound-container">
                    <SimpleSoundComponent file={europeanFile} title={name}/>
                </div>
            </div>;

}
