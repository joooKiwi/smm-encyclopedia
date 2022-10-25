import type {CourseTheme}     from '../theme/CourseTheme'
import type {GameStyle}       from '../gameStyle/GameStyle'
import type {ReactProperties} from '../../util/react/ReactProperties'

import {EMPTY_REACT_ELEMENT}    from '../../util/emptyReactVariables'
import {gameContentTranslation} from '../../lang/components/translationMethods'

interface NightEffectComponentProperties_GameStyle
    extends ReactProperties {

    gameStyle: GameStyle

}

interface NightEffectComponentProperties_Theme
    extends ReactProperties {

    theme: CourseTheme

}

/**
 * @param properties
 * @reactComponent
 */
export default function NightEffectComponent(properties: | NightEffectComponentProperties_GameStyle | NightEffectComponentProperties_Theme,) {
    return 'gameStyle' in properties
        ? createGameStyleComponent(properties)
        : createThemeComponent(properties)
}

function createGameStyleComponent({gameStyle: {nightDesertWindTranslationKey: translationKey,},}: NightEffectComponentProperties_GameStyle,) {
    if (translationKey == null)
        return EMPTY_REACT_ELEMENT
    return <>{gameContentTranslation(`nightEffect.nightDesertWindEffect.${translationKey}`)}</>
}

function createThemeComponent({theme: {effect,},}: NightEffectComponentProperties_Theme,) {
    if (effect == null)
        return EMPTY_REACT_ELEMENT
    return effect.createNewComponent
}
