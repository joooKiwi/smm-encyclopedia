import './GroupOfPowerUpPriority.scss'
import './GroupOf4PowerUpPriority.scss'

import type {ReactProperties} from 'util/react/ReactProperties'

import Arrow    from 'app/tools/arrow/Arrow'
import {Arrows} from 'app/tools/arrow/Arrows'

interface GroupOf4PowerUpPriorityProperties
    extends ReactProperties {

    readonly id: string

    readonly children: readonly [ReactElement, ReactElement, ReactElement, ReactElement,]

    readonly topArrow?: Arrows
    readonly isTopArrowSeparated?: boolean

    readonly leftArrow?: Arrows
    readonly isLeftArrowSeparated?: boolean

    readonly firstDiagonalArrow?: Arrows
    readonly isFirstDiagonalArrowSeparated?: boolean

    readonly secondDiagonalArrow?: Arrows
    readonly isSecondDiagonalArrowSeparated?: boolean

    readonly rightArrow?: Arrows
    readonly isRightArrowSeparated?: boolean

    readonly bottomArrow?: Arrows
    readonly isBottomArrowSeparated?: boolean

}

/**
 * @param properties
 * @reactComponent
 */
export default function GroupOf4PowerUpPriority({id, children: [child1, child2, child3, child4,], topArrow, isTopArrowSeparated = false, leftArrow, isLeftArrowSeparated = false, firstDiagonalArrow, isFirstDiagonalArrowSeparated = false, secondDiagonalArrow, isSecondDiagonalArrowSeparated = false, rightArrow, isRightArrowSeparated = false, bottomArrow, isBottomArrowSeparated = false,}: GroupOf4PowerUpPriorityProperties,) {
    return <div id={id} className="groupOf4-powerUp-priority powerUp-group-priority d-flex flex-column justify-content-between">
        <div className="start-container d-flex justify-content-center">
            {child1}
            <Arrow value={topArrow ?? (isTopArrowSeparated ? Arrows.HORIZONTAL_SEPARATED : Arrows.HORIZONTAL_JOINED)}/>
            {child2}
        </div>
        <div className="arrow-group-container center-arrow-group-container d-flex justify-content-between position-relative">
            <div className="vertical-arrow-container external-arrow-container d-flex">
                <Arrow value={leftArrow ?? (isLeftArrowSeparated ? Arrows.VERTICAL_SEPARATED : Arrows.VERTICAL_JOINED)}/>
            </div>
            <div className="diagonal-arrow-container internal-arrow-container d-flex angle angle-minus-45 angle-origin-top position-absolute">
                <Arrow value={firstDiagonalArrow ?? (isFirstDiagonalArrowSeparated ? Arrows.VERTICAL_SEPARATED : Arrows.VERTICAL_JOINED)}/>
            </div>
            <div className="diagonal-arrow-container internal-arrow-container d-flex angle angle-45 angle-origin-top position-absolute">
                <Arrow value={secondDiagonalArrow ?? (isSecondDiagonalArrowSeparated ? Arrows.VERTICAL_SEPARATED : Arrows.VERTICAL_JOINED)}/>
            </div>
            <div className="vertical-arrow-container external-arrow-container d-flex">
                <Arrow value={rightArrow ?? (isRightArrowSeparated ? Arrows.VERTICAL_SEPARATED : Arrows.VERTICAL_JOINED)}/>
            </div>
        </div>
        <div className="end-container d-flex justify-content-center">
            {child3}
            <Arrow value={bottomArrow ?? (isBottomArrowSeparated ? Arrows.HORIZONTAL_SEPARATED : Arrows.HORIZONTAL_JOINED)}/>
            {child4}
        </div>
    </div>
}
