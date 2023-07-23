import './EditorVoiceSound.component.scss'

import type {EditorVoiceSoundFileHolder} from 'core/editorVoice/holder/sound/EditorVoiceSoundFileHolder'
import type {ReactProperties}            from 'util/react/ReactProperties'

import SimpleSoundComponent from 'util/file/sound/component/SimpleSound.component'

interface EditorVoiceSoundComponentProperties
    extends ReactProperties {

    editorVoiceSound: Nullable<EditorVoiceSoundFileHolder>

    name: string

}

/**
 * @param properties
 * @reactComponent
 */
export default function EditorVoiceSoundComponent({editorVoiceSound, name,}: EditorVoiceSoundComponentProperties,) {
    if (editorVoiceSound == null)
        return null

    const {regularSoundFile: regularFile, europeanSoundFile: europeanFile,} = editorVoiceSound
    return regularFile == null
        ? null
        : europeanFile == null
            ? <div key={`Editor voice sound container (single - ${name})`} className="single-editorVoiceSound-container">
                <SimpleSoundComponent file={regularFile} title={name}/>
            </div>
            : <div key={`Editor voice sound container (double - ${name})`} className="double-editorVoiceSound-container container">
                <div key={`Editor voice sound container (single #1 - ${name}`} className="single-editorVoiceSound-container">
                    <SimpleSoundComponent file={regularFile} title={name}/>
                </div>
                <div key={`Editor voice sound container (single #2 - ${name})`} className="single-editorVoiceSound-container">
                    <SimpleSoundComponent file={europeanFile} title={name}/>
                </div>
            </div>

}
