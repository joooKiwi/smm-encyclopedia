import './GroupOfPowerUpPriority.scss'
import './GroupOf6PowerUpPriority.scss'

import type {GroupOf6PowerUpPriorityArrowProperties} from 'app/powerUp/group/GroupPriority.types'
import type {ReactElement, ReactProperties}          from 'util/react/ReactProperties'

import Arrow    from 'app/tools/arrow/Arrow'
import {Arrows} from 'app/tools/arrow/Arrows'

interface GroupOf6PowerUpPriorityProperties
    extends ReactProperties {

    id: string

    children: readonly [ReactElement, ReactElement, ReactElement, ReactElement, ReactElement, ReactElement,]


    /** The arrow properties (from one child to another) */
    arrow?: GroupOf6PowerUpPriorityArrowProperties

    hasSeparatedLines?: boolean

}

/**
 * @param properties
 * @reactComponent
 */
export default function GroupOf6PowerUpPriority({id, children: [child1, child2, child3, child4, child5, child6,], arrow, hasSeparatedLines = false,}: GroupOf6PowerUpPriorityProperties,) {
    const horizontalArrow = hasSeparatedLines ? Arrows.HORIZONTAL_SEPARATED : Arrows.HORIZONTAL_JOINED,
        verticalArrow = hasSeparatedLines ? Arrows.VERTICAL_SEPARATED : Arrows.VERTICAL_JOINED

    return <div id={id} className="groupOf6-powerUp-priority powerUp-group-priority d-flex flex-column justify-content-between">
        <div className="start-container d-flex justify-content-center m-0 position-relative">
            {child1}
            <Arrow value={arrow?.topLeftTo?.topRight ?? horizontalArrow}/>
            {child2}
        </div>
        <div className="arrow-group-container top-bottom-arrow-group-container position-relative">
            <div className="vertical-arrow-container d-flex position-absolute">
                <Arrow value={arrow?.topLeftTo?.bottomLeft ?? verticalArrow}/>
            </div>
            <div className="diagonal-arrow-container d-flex angle angle-minus-30 angle-origin-top position-absolute">
                <Arrow value={arrow?.topLeftTo?.bottomRight ?? verticalArrow}/>
            </div>
            <div className="diagonal-arrow-container d-flex angle angle-30 angle-origin-top position-absolute">
                <Arrow value={arrow?.topRightTo?.bottomLeft ?? verticalArrow}/>
            </div>
            <div className="vertical-arrow-container d-flex position-absolute">
                <Arrow value={arrow?.topRightTo?.bottomRight ?? verticalArrow}/>
            </div>
        </div>
        <div className="arrow-group-container diagonal-arrow-group-container center-top-arrow-group-container position-relative">
            <div className="diagonal-arrow-container external-arrow-container d-flex angle angle-30 angle-origin-top position-absolute">
                <Arrow value={arrow?.topLeftTo?.centerLeft ?? verticalArrow}/>
            </div>
            <div className="diagonal-arrow-container internal-arrow-container d-flex angle angle-minus-60 angle-origin-top position-absolute">
                <Arrow value={arrow?.topLeftTo?.centerRight ?? verticalArrow}/>
            </div>
            <div className="diagonal-arrow-container internal-arrow-container d-flex angle angle-60 angle-origin-top position-absolute">
                <Arrow value={arrow?.topRightTo?.centerLeft ?? verticalArrow}/>
            </div>
            <div className="diagonal-arrow-container external-arrow-container d-flex angle angle-minus-30 angle-origin-top position-absolute">
                <Arrow value={arrow?.topRightTo?.centerRight ?? verticalArrow}/>
            </div>
        </div>
        <div className="middle-container d-flex justify-content-evenly">
            {child3}
            <Arrow value={arrow?.centerLeftTo?.centerRight ?? horizontalArrow}/>
            {child4}
        </div>
        <div className="arrow-group-container diagonal-arrow-group-container center-bottom-arrow-group-container position-relative">
            <div className="diagonal-arrow-container external-arrow-container d-flex angle angle-minus-210 angle-origin-top position-absolute">
                <Arrow value={arrow?.centerLeftTo?.bottomLeft ?? verticalArrow}/>
            </div>
            <div className="diagonal-arrow-container internal-arrow-container d-flex angle angle-240 angle-origin-top position-absolute">
                <Arrow value={arrow?.centerLeftTo?.bottomRight ?? verticalArrow}/>
            </div>
            <div className="diagonal-arrow-container internal-arrow-container d-flex angle angle-minus-240 angle-origin-top position-absolute">
                <Arrow value={arrow?.centerRightTo?.bottomLeft ?? verticalArrow}/>
            </div>
            <div className="diagonal-arrow-container external-arrow-container d-flex angle angle-210 angle-origin-top position-absolute">
                <Arrow value={arrow?.centerRightTo?.bottomRight ?? verticalArrow}/>
            </div>
        </div>
        <div className="end-container d-flex justify-content-center m-0">
            {child5}
            <Arrow value={arrow?.bottomLeftTo?.bottomRight ?? horizontalArrow}/>
            {child6}
        </div>
    </div>
}
