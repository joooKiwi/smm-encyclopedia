import './SoundEffect.scss'

import type {SoundEffects}    from 'core/soundEffect/SoundEffects'
import type {Name}            from 'lang/name/Name'
import type {ReactProperties} from 'util/react/ReactProperties'

import Image               from 'app/tools/images/Image'
import {Games}             from 'core/game/Games'
import SoundEffectImage    from 'core/soundEffect/SoundEffectImage'
import {Empty}             from 'util/emptyVariables'
import {StringContainer}   from 'util/StringContainer'
import {ArrayAsCollection} from 'util/collection/ArrayAsCollection'

import EMPTY_STRING = Empty.EMPTY_STRING
import getInHtml =    StringContainer.getInHtml
import SMM1 =         Games.SMM1

interface SoundEffectProperties
    extends ReactProperties {

    readonly reference: SoundEffects

    readonly game?: Games

    readonly name?: Name<string>

}

/**
 * @deprecated This should be replaced with something else
 * @reactComponent
 */
export default function SoundEffectComponent({reference, game, name,}: SoundEffectProperties,) {
    if (game === SMM1) {
        const [imageFile1, imageFile2,] = reference.SMM1ImageFiles!
        if (imageFile2 == null)
            return <SoundEffectImage reference={reference} file={imageFile1}/>

        const themeEnglishNameInHtml = reference.englishNameInHtml
        const identifier = name?.english
        const id = identifier == null ? `${themeEnglishNameInHtml}-image` : `${getInHtml(identifier,)}-${themeEnglishNameInHtml}-soundEffect${game == null ? EMPTY_STRING : `-${game.acronym}`}-image`
        return <Image partial-id={id} images={new ArrayAsCollection([
            {file: imageFile1, className: `soundEffect-image ${themeEnglishNameInHtml}-image`,},
            {file: imageFile2, className: `soundEffect-image ${themeEnglishNameInHtml}-image`,},
        ],)} className={`soundEffect-animated-image ${themeEnglishNameInHtml}-image`}/>
    }
    return <SoundEffectImage reference={reference}/>
}
