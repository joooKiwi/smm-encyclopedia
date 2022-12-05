import './GroupOf3PowerUpPriority.scss'

import type {ReactElement, ReactProperties} from 'util/react/ReactProperties'

import Arrow    from 'app/tools/arrow/Arrow'
import {Arrows} from 'app/tools/arrow/Arrows'

interface GroupOf3PowerUpPriorityProperties
    extends ReactProperties {

    id: string

    children: readonly [ReactElement, ReactElement, ReactElement,]

}

/**
 * @param properties
 * @reactComponent
 */
export default function GroupOf3PowerUpPriority({id, children,}: GroupOf3PowerUpPriorityProperties,) {
    const [child1, child2, child3,] = children
    return <div id={id} className="groupOf3-powerUp-priority">
        <div className="start-container">{child1}</div>
        <div className="diagonal-arrows-container">
            <div className="diagonal-arrow-container">
                <Arrow value={Arrows.VERTICAL_SEPARATED}/>
            </div>
            <div className="diagonal-arrow-container">
                <Arrow value={Arrows.VERTICAL_SEPARATED}/>
            </div>
        </div>
        <div className="end-container">
            <div className="left-end-container">{child2}</div>
            <div className="middle-end-container"><Arrow value={Arrows.HORIZONTAL_SEPARATED}/></div>
            <div className="right-end-container">{child3}</div>
        </div>
    </div>
}
