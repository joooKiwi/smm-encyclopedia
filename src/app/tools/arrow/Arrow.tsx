import './Arrow.scss'

import type {PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'

import type {ReactProperties} from '../../../util/react/ReactProperties'

import {Arrows} from './Arrows'

interface SingleArrowProperties
    extends ReactProperties {

    value: PossibleValueByEnumerable<Arrows>

}

/**
 * @reactComponent
 */
export default function Arrow({value,}: SingleArrowProperties,) {
    return Arrows.getValue(value).createArrow()
}
