import './GroupOfPowerUpPriority.scss'
import './GroupOf2PowerUpPriority.scss'

import type {Arrows}          from 'app/tools/arrow/Arrows'
import type {ReactProperties} from 'util/react/ReactProperties'

import Arrow from 'app/tools/arrow/Arrow'

interface GroupOf2PowerUpPriorityProperties
    extends ReactProperties {

    id: string

    children: readonly [ReactElement, ReactElement,]

    arrow: Arrows

}

/**
 * @param properties
 * @reactComponent
 */
export default function GroupOf2PowerUpPriority({id, children: [child1, child2,], arrow,}: GroupOf2PowerUpPriorityProperties,) {
    const direction = arrow.direction

    return <div id={id} className={`groupOf2-powerUp-priority powerUp-group-priority ${direction.value}-group d-flex flex-${direction.direction} justify-content-center`}>
        {child1}
        <Arrow value={arrow}/>
        {child2}
    </div>
}
