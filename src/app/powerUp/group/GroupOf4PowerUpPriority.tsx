import './GroupOf4PowerUpPriority.scss'

import type {ReactElement, ReactProperties} from 'util/react/ReactProperties'

import Arrow    from 'app/tools/arrow/Arrow'
import {Arrows} from 'app/tools/arrow/Arrows'

interface GroupOf4PowerUpPriorityProperties
    extends ReactProperties {

    id: string

    children: readonly [ReactElement, ReactElement, ReactElement, ReactElement,]

    isTopArrowSeparated?: boolean
    isLeftArrowSeparated?: boolean
    isFirstDiagonalArrowSeparated?: boolean
    isSecondDiagonalArrowSeparated?: boolean
    isRightArrowSeparated?: boolean
    isBottomArrowSeparated?: boolean

}

/**
 * @param properties
 * @reactComponent
 */
export default function GroupOf4PowerUpPriority({id, children: [child1, child2, child3, child4,], isTopArrowSeparated = false, isLeftArrowSeparated = false, isFirstDiagonalArrowSeparated = false, isSecondDiagonalArrowSeparated = false, isRightArrowSeparated = false, isBottomArrowSeparated = false,}: GroupOf4PowerUpPriorityProperties,) {
    return <div id={id} className="groupOf4-powerUp-priority">
        <div className="start-container">
            {child1}
            <Arrow value={isTopArrowSeparated ? Arrows.HORIZONTAL_SEPARATED : Arrows.HORIZONTAL_JOINED}/>
            {child2}
        </div>
        <div className="arrows-container">
            <div className="vertical-arrow-container">
                <Arrow value={isLeftArrowSeparated ? Arrows.VERTICAL_SEPARATED : Arrows.VERTICAL_JOINED}/></div>
            <div className="diagonal-arrows-container">
                <Arrow value={isFirstDiagonalArrowSeparated ? Arrows.VERTICAL_SEPARATED : Arrows.VERTICAL_JOINED}/>
                <Arrow value={isSecondDiagonalArrowSeparated ? Arrows.VERTICAL_SEPARATED : Arrows.VERTICAL_JOINED}/>
            </div>
            <div className="vertical-arrow-container">
                <Arrow value={isRightArrowSeparated ? Arrows.VERTICAL_SEPARATED : Arrows.VERTICAL_JOINED}/>
            </div>
        </div>
        <div className="end-container">
            {child3}
            <Arrow value={isBottomArrowSeparated ? Arrows.HORIZONTAL_SEPARATED : Arrows.HORIZONTAL_JOINED}/>
            {child4}
        </div>
    </div>
}
