import type {Tracks}          from 'core/track/Tracks'
import type {ReactProperties} from 'util/react/ReactProperties'

import StandaloneSound from 'util/file/sound/component/StandaloneSound'

interface TrackProperties
    extends ReactProperties {

    readonly value: Tracks

}

/** @reactComponent */
export default function Track(properties: TrackProperties,) {
    const value = properties.value
    const file = value.file
    if (file == null)
        return <NonPresentMusicAudio/> //FIXME: Remove once the file are all present
    return <StandaloneSound file={file} title={value.titleName}/>
}

/** @reactComponent */
function NonPresentMusicAudio() {
    return <div className="nonPresent-music-audio bg-danger bg-opacity-25 rounded" style={{minWidth: '5rem', height: '2rem',}}/>
}
