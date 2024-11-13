import './EditorVoiceSound.component.scss'

import type {Nullable} from '@joookiwi/type'

import type {EditorVoiceSound} from 'core/editorVoice/sound/EditorVoiceSound'
import type {ReactProperties}  from 'util/react/ReactProperties'

import SimpleSoundComponent from 'util/file/sound/component/SimpleSound.component'

interface EditorVoiceSoundComponentProperties
    extends ReactProperties {

    readonly editorVoiceSound: Nullable<EditorVoiceSound>

    readonly name: string

}

/**
 * @param properties
 * @reactComponent
 */
export default function EditorVoiceSoundComponent({editorVoiceSound, name,}: EditorVoiceSoundComponentProperties,) {
    if (editorVoiceSound == null)
        return null

    const {regularSound: regularFile, europeanSound: europeanFile,} = editorVoiceSound
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
