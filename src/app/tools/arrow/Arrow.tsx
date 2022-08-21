import './Arrow.scss';

import type {ReactProperties}          from '../../../util/react/ReactProperties';
import type {PossibleNonNullableValue} from './Arrows.types';

import {Arrows} from './Arrows';

interface SingleArrowProperties
    extends ReactProperties {

    value: PossibleNonNullableValue

}

/**
 * @reactComponent
 */
export default function Arrow({value,}: SingleArrowProperties,) {
    return Arrows.getValue(value).createArrow();
}
