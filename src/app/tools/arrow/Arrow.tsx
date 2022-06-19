import './Arrow.scss';

import type {ReactProperty}            from '../../../util/react/ReactProperty';
import type {PossibleNonNullableValue} from './Arrows.types';

import {Arrows} from './Arrows';

interface SingleArrowProperties
    extends ReactProperty {

    value: PossibleNonNullableValue

}

/**
 * @reactComponent
 */
export default function Arrow({value,}: SingleArrowProperties,) {
    return Arrows.getValue(value).createArrow();
}
