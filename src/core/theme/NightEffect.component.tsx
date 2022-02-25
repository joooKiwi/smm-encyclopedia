import type {CourseTheme}   from './CourseTheme';
import type {ReactProperty} from '../../util/react/ReactProperty';

import {EMPTY_REACT_ELEMENT} from '../../util/emptyReactVariables';

interface NightEffectComponentProperties
    extends ReactProperty {

    theme: CourseTheme;

}

/**
 * @param properties
 * @reactComponent
 */
export default function NightEffectComponent({theme: {effect,},}: NightEffectComponentProperties,) {
    if (effect == null)
        return EMPTY_REACT_ELEMENT;
    return effect.createNewComponent;
}
