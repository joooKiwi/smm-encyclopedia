import './GroupOfPowerUpPriority.scss'
import './GroupOf3PowerUpPriority.scss'

import type {ReactProperties} from 'util/react/ReactProperties'

import Arrow    from 'app/tools/arrow/Arrow'
import {Arrows} from 'app/tools/arrow/Arrows'

interface GroupOf3PowerUpPriorityProperties
    extends ReactProperties {

    readonly id: string

    readonly children: readonly [ReactElement, ReactElement, ReactElement,]

    readonly leftArrow?: Arrows
    readonly isLeftArrowSeparated?: boolean

    readonly rightArrow?: Arrows
    readonly isRightArrowSeparated?: boolean

    readonly bottomArrow?: Arrows
    readonly isBottomArrowSeparated?: boolean

}

/**
 * @param properties
 * @reactComponent
 */
export default function GroupOf3PowerUpPriority({id, children: [child1, child2, child3,], leftArrow, isLeftArrowSeparated = false, rightArrow, isRightArrowSeparated = false, bottomArrow, isBottomArrowSeparated = false,}: GroupOf3PowerUpPriorityProperties,) {
    return <div id={id} className="groupOf3-powerUp-priority powerUp-group-priority d-flex flex-column justify-content-evenly">
        <div className="start-container d-flex justify-content-center">{child1}</div>
        <div className="diagonal-arrow-group-container d-flex justify-content-evenly position-relative">
            <div className="diagonal-arrow-container d-flex angle angle-35 angle-origin-top position-absolute">
                <Arrow value={leftArrow ?? (isLeftArrowSeparated ? Arrows.VERTICAL_SEPARATED : Arrows.VERTICAL_JOINED)}/>
            </div>
            <div className="diagonal-arrow-container d-flex angle angle-minus-35 angle-origin-top position-absolute">
                <Arrow value={rightArrow ?? (isRightArrowSeparated ? Arrows.VERTICAL_SEPARATED : Arrows.VERTICAL_JOINED)}/>
            </div>
        </div>
        <div className="end-container d-flex justify-content-center">
            {child2}
            <Arrow value={bottomArrow ?? (isBottomArrowSeparated ? Arrows.HORIZONTAL_SEPARATED : Arrows.HORIZONTAL_JOINED)}/>
            {child3}
        </div>
    </div>
}
