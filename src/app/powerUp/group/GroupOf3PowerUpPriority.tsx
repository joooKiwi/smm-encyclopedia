import './GroupOf3PowerUpPriority.scss'

import type {ReactElement, ReactProperties} from 'util/react/ReactProperties'

import Arrow    from 'app/tools/arrow/Arrow'
import {Arrows} from 'app/tools/arrow/Arrows'

interface GroupOf3PowerUpPriorityProperties
    extends ReactProperties {

    id: string

    children: readonly [ReactElement, ReactElement, ReactElement,]

    isLeftArrowSeparated?: boolean

    isRightArrowSeparated?: boolean

    isBottomArrowSeparated?: boolean

}

/**
 * @param properties
 * @reactComponent
 */
export default function GroupOf3PowerUpPriority({id, children, isLeftArrowSeparated = false, isRightArrowSeparated = false, isBottomArrowSeparated = false,}: GroupOf3PowerUpPriorityProperties,) {
    const [child1, child2, child3,] = children
    return <div id={id} className="groupOf3-powerUp-priority">
        <div className="start-container">{child1}</div>
        <div className="diagonal-arrows-container">
            <div className="diagonal-arrow-container">
                <Arrow value={isLeftArrowSeparated ? Arrows.VERTICAL_SEPARATED : Arrows.VERTICAL_JOINED}/>
            </div>
            <div className="diagonal-arrow-container">
                <Arrow value={isRightArrowSeparated ? Arrows.VERTICAL_SEPARATED : Arrows.VERTICAL_JOINED}/>
            </div>
        </div>
        <div className="end-container">
            <div className="left-end-container">{child2}</div>
            <div className="middle-end-container"><Arrow value={isBottomArrowSeparated ? Arrows.HORIZONTAL_SEPARATED : Arrows.HORIZONTAL_JOINED}/></div>
            <div className="right-end-container">{child3}</div>
        </div>
    </div>
}
