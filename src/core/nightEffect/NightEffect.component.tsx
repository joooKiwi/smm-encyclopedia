import type {GameStyle}       from 'core/gameStyle/GameStyle'
import type {CourseTheme}     from 'core/theme/CourseTheme'
import type {ReactProperties} from 'util/react/ReactProperties'

import {gameContentTranslation} from 'lang/components/translationMethods'

interface NightEffectComponentProperties_GameStyle
    extends ReactProperties {

    readonly gameStyle: GameStyle

}

interface NightEffectComponentProperties_Theme
    extends ReactProperties {

    readonly theme: CourseTheme

}

/**
 * @param properties
 * @reactComponent
 */
export default function NightEffectComponent(properties: | NightEffectComponentProperties_GameStyle | NightEffectComponentProperties_Theme,) {
    return 'gameStyle' in properties
        ? <NightEffectByGameStyle {...properties}/>
        : <NightEffectByTheme {...properties}/>
}

function NightEffectByGameStyle({gameStyle: {nightDesertWindTranslationKey: translationKey,},}: NightEffectComponentProperties_GameStyle,) {
    return translationKey == null ? null : <>{gameContentTranslation(`nightEffect.nightDesertWindEffect.${translationKey}`,)}</>
}

function NightEffectByTheme({theme: {effect,},}: NightEffectComponentProperties_Theme,) {
    return effect?.createNewComponent ?? null
}
