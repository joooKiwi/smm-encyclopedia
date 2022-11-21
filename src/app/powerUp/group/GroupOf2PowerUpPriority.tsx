import './GroupOf2PowerUpPriority.scss'

import type {PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'

import type {ReactElement, ReactProperties} from '../../../util/react/ReactProperties'

import Arrow             from '../../tools/arrow/Arrow'
import {Arrows}          from '../../tools/arrow/Arrows'
import {ArrowDirections} from '../../tools/arrow/ArrowDirections'

interface GroupOf2PowerUpPriorityProperties
    extends ReactProperties {

    id: string

    children: readonly [ReactElement, ReactElement,]

    arrow: PossibleValueByEnumerable<Arrows>

}

/**
 * @param properties
 * @reactComponent
 */
export default function GroupOf2PowerUpPriority({id, children, arrow,}: GroupOf2PowerUpPriorityProperties,) {
    const [child1, child2,] = children
    const direction = Arrows.getValue(arrow).direction
    const directionValue = direction.value
    const isVertical = direction === ArrowDirections.VERTICAL

    return <div id={id} className={`groupOf2-powerUp-priority ${directionValue}-group`}>
        <div className={`${isVertical ? 'top' : 'left'}-container`}>{child1}</div>
        <Arrow value={arrow}/>
        <div className={`${isVertical ? 'bottom' : 'right'}-container`}>{child2}</div>
    </div>
}
