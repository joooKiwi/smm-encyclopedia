import './EditorVoiceSound.scss'

import type {Nullable} from '@joookiwi/type'

import type {EditorVoices}    from 'core/editorVoice/EditorVoices'
import type {ReactProperties} from 'util/react/ReactProperties'

import SimpleSoundComponent from 'util/file/sound/component/SimpleSound.component'

interface EditorVoiceSoundProperties
    extends ReactProperties {

    readonly editorVoice: Nullable<EditorVoices>

    readonly name?: string

}

/** @reactComponent */
export default function EditorVoiceSound({editorVoice, name,}: EditorVoiceSoundProperties,) {
    if (editorVoice == null)
        return null

    name ??= editorVoice.englishName
    const {regularFile, europeanFile,} = editorVoice
    if (europeanFile == null)
        return <div className="single-editorVoiceSound-container">
            <SimpleSoundComponent file={regularFile} title={name}/>
        </div>
    return <div className="double-editorVoiceSound-container container">
        <div className="single-editorVoiceSound-container">
            <SimpleSoundComponent file={regularFile} title={name}/>
        </div>
        <div className="single-editorVoiceSound-container">
            <SimpleSoundComponent file={europeanFile} title={name}/>
        </div>
    </div>

}
