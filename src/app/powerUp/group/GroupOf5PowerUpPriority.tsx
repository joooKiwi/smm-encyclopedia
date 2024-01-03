import './GroupOfPowerUpPriority.scss'
import './GroupOf5PowerUpPriority.scss'

import type {GroupOf5PowerUpPriorityArrowProperties} from 'app/powerUp/group/GroupPriority.types'
import type {ReactProperties}                        from 'util/react/ReactProperties'

import Arrow    from 'app/tools/arrow/Arrow'
import {Arrows} from 'app/tools/arrow/Arrows'

interface GroupOf5PowerUpPriorityProperties
    extends ReactProperties {

    id: string

    children: readonly [ReactElement, ReactElement, ReactElement, ReactElement, ReactElement,]

    arrow?: GroupOf5PowerUpPriorityArrowProperties

    hasSeparatedLines?: boolean

}

/**
 * @param properties
 * @reactComponent
 */
export default function GroupOf5PowerUpPriority({id, children: [child1, child2, child3, child4, child5,], arrow, hasSeparatedLines = false,}: GroupOf5PowerUpPriorityProperties,) {
    const horizontalArrow = hasSeparatedLines ? Arrows.HORIZONTAL_SEPARATED : Arrows.HORIZONTAL_JOINED
    const verticalArrow = hasSeparatedLines ? Arrows.VERTICAL_SEPARATED : Arrows.VERTICAL_JOINED

    return <div id={id} className="groupOf5-powerUp-priority powerUp-group-priority d-flex flex-column justify-content-evenly">
        <div className="start-container d-flex justify-content-center">{child1}</div>
        <div className="arrow-group-container diagonal-arrow-group-container top-center-top-arrow-group-container position-relative">
            <div className="external-arrow-container diagonal-arrow-container d-flex angle angle-45 angle-origin-top position-absolute">
                <Arrow value={arrow?.topTo?.centerLeft ?? verticalArrow}/>
            </div>
            <div className="internal-arrow-container diagonal-arrow-container d-flex angle angle-minus-15 angle-origin-top position-absolute">
                <Arrow value={arrow?.topTo?.bottomLeft ?? verticalArrow}/>
            </div>
            <div className="internal-arrow-container diagonal-arrow-container d-flex angle angle-15 angle-origin-top position-absolute">
                <Arrow value={arrow?.topTo?.bottomRight ?? verticalArrow}/>
            </div>
            <div className="external-arrow-container diagonal-arrow-container d-flex angle angle-minus-45 angle-origin-top position-absolute">
                <Arrow value={arrow?.topTo?.centerRight ?? verticalArrow}/>
            </div>
        </div>
        <div className="middle-container d-flex justify-content-evenly">
            {child2}
            <Arrow value={arrow?.centerLeftTo?.centerRight ?? horizontalArrow}/>
            {child3}
        </div>
        <div className="arrow-group-container diagonal-arrow-group-container bottom-arrow-group-container position-relative">
            <div className="external-arrow-container diagonal-arrow-container d-flex angle angle-minus-35 angle-origin-top position-absolute">
                <Arrow value={arrow?.centerLeftTo?.bottomLeft ?? verticalArrow}/>
            </div>
            <div className="internal-arrow-container diagonal-arrow-container d-flex angle angle-minus-60 angle-origin-top position-absolute">
                <Arrow value={arrow?.centerLeftTo?.bottomRight ?? verticalArrow}/>
            </div>
            <div className="internal-arrow-container diagonal-arrow-container d-flex angle angle-60 angle-origin-top position-absolute">
                <Arrow value={arrow?.centerRightTo?.bottomLeft ?? verticalArrow}/>
            </div>
            <div className="external-arrow-container diagonal-arrow-container d-flex angle angle-35 angle-origin-top position-absolute">
                <Arrow value={arrow?.centerRightTo?.bottomRight ?? verticalArrow}/>
            </div>
        </div>
        <div className="end-container d-flex justify-content-evenly">
            {child4}
            <Arrow value={arrow?.bottomLeftTo?.bottomRight ?? horizontalArrow}/>
            {child5}
        </div>
    </div>
}
