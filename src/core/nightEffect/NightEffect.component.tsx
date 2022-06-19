import type {CourseTheme}   from '../theme/CourseTheme';
import type {GameStyle}     from '../gameStyle/GameStyle';
import type {ReactProperty} from '../../util/react/ReactProperty';

import {EMPTY_REACT_ELEMENT}           from '../../util/emptyReactVariables';
import GameContentTranslationComponent from '../../lang/components/GameContentTranslationComponent';

interface NightEffectComponentProperties_GameStyle
    extends ReactProperty {

    gameStyle: GameStyle

}

interface NightEffectComponentProperties_Theme
    extends ReactProperty {

    theme: CourseTheme

}

/**
 * @param properties
 * @reactComponent
 */
export default function NightEffectComponent(properties: | NightEffectComponentProperties_GameStyle | NightEffectComponentProperties_Theme,) {
    return 'gameStyle' in properties
        ? createGameStyleComponent(properties)
        : createThemeComponent(properties);
}

function createGameStyleComponent({gameStyle: {nightDesertWindTranslationKey: translationKey,},}: NightEffectComponentProperties_GameStyle,) {
    if (translationKey == null)
        return EMPTY_REACT_ELEMENT;
    return <GameContentTranslationComponent translationKey={`nightEffect.nightDesertWindEffect.${translationKey}`}/>;
}

function createThemeComponent({theme: {effect,},}: NightEffectComponentProperties_Theme,) {
    if (effect == null)
        return EMPTY_REACT_ELEMENT;
    return effect.createNewComponent;
}
