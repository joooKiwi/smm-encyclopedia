import type {Tracks}          from 'core/track/Tracks'
import type {ReactProperties} from 'util/react/ReactProperties'

import SimpleSoundComponent from 'util/file/sound/component/SimpleSound.component'

interface TrackProperties
    extends ReactProperties {

    readonly value: Tracks

}

export default function Track({value,}: TrackProperties,) {
    const file = value.file
    const titleName = value.titleName
    if (file == null || titleName == null)
        return <NonPresentMusicAudio/> //FIXME: Remove once the file are all present
    return <SimpleSoundComponent file={file} title={titleName}/>
}

function NonPresentMusicAudio() {
    return <div className="nonPresent-music-audio bg-danger bg-opacity-25 rounded" style={{width: '2cm', height: '1cm',}}/>
}
