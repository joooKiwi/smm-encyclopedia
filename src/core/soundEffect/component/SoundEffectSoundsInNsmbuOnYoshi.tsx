import type {ReactProperties} from 'util/react/ReactProperties'
import type {SoundEffects}    from 'core/soundEffect/SoundEffects'

import Image        from 'app/tools/images/Image'
import {Entities}   from 'core/entity/Entities'
import {GameStyles} from 'core/gameStyle/GameStyles'
import SoundGroup   from 'util/file/sound/component/SoundGroup'

import NSMBU = GameStyles.NSMBU

interface SoundEffectSoundsInNsmbuOnYoshiProperties
    extends ReactProperties {

    readonly value: SoundEffects

}

/** @reactComponent */
export default function SoundEffectSoundsInNsmbuOnYoshi({value,}: SoundEffectSoundsInNsmbuOnYoshiProperties,) {
    const sounds = value.soundsInNsmbuOnYoshi
    if (sounds.isEmpty)
        return null

    const englishName = value.englishName
    return <div className="text-center">
        <Image file={Entities.YOSHI_EGG.clearConditionImage.get(NSMBU,)} className="yoshi-image"/>
        <SoundGroup value={sounds} title={it => `${englishName} (NSMBU yoshi - ${it.key})`}/>
    </div>
}