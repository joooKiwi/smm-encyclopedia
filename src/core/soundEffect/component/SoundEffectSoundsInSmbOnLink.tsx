import type {ReactProperties} from 'util/react/ReactProperties'
import type {SoundEffects}    from 'core/soundEffect/SoundEffects'

import Image        from 'app/tools/images/Image'
import {Entities}   from 'core/entity/Entities'
import {GameStyles} from 'core/gameStyle/GameStyles'
import {Themes}     from 'core/theme/Themes'
import {Times}      from 'core/time/Times'
import SoundGroup   from 'util/file/sound/component/SoundGroup'

import SMB = GameStyles.SMB

interface SoundEffectSoundsInSmbOnLinkProperties
    extends ReactProperties {

    readonly value: SoundEffects

}

/** @reactComponent */
export default function SoundEffectSoundsInSmbOnLink({value,}: SoundEffectSoundsInSmbOnLinkProperties,) {
    const sounds = value.soundsInSmbOnLink
    if (sounds.isEmpty)
        return null

    const englishName = value.englishName
    return <div className="text-center">
        <Image file={Entities.MASTER_SWORD.editorImage.get(SMB, Themes.GROUND, Times.DAY,).getFirst()} className="link-image"/>
        <SoundGroup value={sounds} title={it => `${englishName} (SMB link - ${it.key})`}/>
    </div>
}
