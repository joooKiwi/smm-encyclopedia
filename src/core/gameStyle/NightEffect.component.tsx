import type {ReactProperty} from '../../util/react/ReactProperty';
import type {GameStyle}     from './GameStyle';

import {EMPTY_REACT_ELEMENT}           from '../../util/emptyReactVariables';
import GameContentTranslationComponent from '../../lang/components/GameContentTranslationComponent';

interface NightEffectComponentProperties
    extends ReactProperty {

    gameStyle: GameStyle

}

/**
 * @reactComponent
 */
export default function NightEffectComponent({gameStyle: {nightDesertWindTranslationKey: translationKey,},}: NightEffectComponentProperties,) {
    if (translationKey == null)
        return EMPTY_REACT_ELEMENT;
    return <GameContentTranslationComponent translationKey={`nightEffect.nightDesertWindEffect.${translationKey}`}/>;
}
