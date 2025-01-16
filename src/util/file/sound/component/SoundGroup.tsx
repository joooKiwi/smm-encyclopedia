import type {CollectionHolder} from '@joookiwi/collection'

import type {SoundFile}       from 'util/file/sound/SoundFile'
import type {ReactProperties} from 'util/react/ReactProperties'

import StandaloneSound from 'util/file/sound/component/StandaloneSound'

interface SoundGroupProperties<out T extends SoundFile, >
    extends ReactProperties {

    readonly value: CollectionHolder<T>

    title(soundFile: T,): string

}

/** @reactComponent */
export default function SoundGroup<const T extends SoundFile, >({value, title,}: SoundGroupProperties<T>,) {
    if (value.isEmpty)
        return null
    return <div className="soundGroup-container row g-1 justify-content-center">{value.map((it, i,) =>
            <div key={`sound container #${i + 1}`} className="w-auto"><StandaloneSound file={it} title={title(it,)}/></div>
        ,)}</div>

}
