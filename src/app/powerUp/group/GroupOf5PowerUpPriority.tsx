import './GroupOf5PowerUpPriority.scss'

import type {ReactElement, ReactProperties} from 'util/react/ReactProperties'

import Arrow    from 'app/tools/arrow/Arrow'
import {Arrows} from 'app/tools/arrow/Arrows'

interface GroupOf5PowerUpPriorityProperties
    extends ReactProperties {

    id: string

    children: readonly [ReactElement, ReactElement, ReactElement, ReactElement, ReactElement,]

    hasSeparatedLines?: boolean

}

/**
 * @param properties
 * @reactComponent
 */
export default function GroupOf5PowerUpPriority({id, children: [child1, child2, child3, child4, child5,], hasSeparatedLines = false,}: GroupOf5PowerUpPriorityProperties,) {
    return <div id={id} className="groupOf5-powerUp-priority">
        <div className="start-container">{child1}</div>
        <div className="first-external-arrows-container">
            <div className="diagonal-arrow-container">
                <Arrow value={hasSeparatedLines ? Arrows.VERTICAL_SEPARATED : Arrows.VERTICAL_JOINED}/>
            </div>
            <div className="diagonal-arrow-container">
                <Arrow value={hasSeparatedLines ? Arrows.VERTICAL_SEPARATED : Arrows.VERTICAL_JOINED}/>
            </div>
        </div>
        <div className="middle-container">
            {child2}
            <div className="centered-arrows-container">
                <div className="horizontal-arrow-container">
                    <Arrow value={hasSeparatedLines ? Arrows.HORIZONTAL_SEPARATED : Arrows.HORIZONTAL_JOINED}/>
                </div>
                <div className="diagonal-arrows-container">
                    <div className="diagonal-arrow-container">
                        <Arrow value={hasSeparatedLines ? Arrows.VERTICAL_SEPARATED : Arrows.VERTICAL_JOINED}/>
                    </div>
                    <Arrow value={hasSeparatedLines ? Arrows.VERTICAL_SEPARATED : Arrows.VERTICAL_JOINED}/>
                </div>
                <div className="diagonal-arrows-container">
                    <div className="diagonal-arrow-container">
                        <Arrow value={hasSeparatedLines ? Arrows.VERTICAL_SEPARATED : Arrows.VERTICAL_JOINED}/>
                    </div>
                    <Arrow value={hasSeparatedLines ? Arrows.VERTICAL_SEPARATED : Arrows.VERTICAL_JOINED}/>
                </div>
            </div>
            {child3}
        </div>
        <div className="second-external-arrows-container px-3">
            <div className="diagonal-arrow-container">
                <Arrow value={hasSeparatedLines ? Arrows.VERTICAL_SEPARATED : Arrows.VERTICAL_JOINED}/>
            </div>
            <div className="diagonal-arrow-container">
                <Arrow value={hasSeparatedLines ? Arrows.VERTICAL_SEPARATED : Arrows.VERTICAL_JOINED}/>
            </div>
        </div>
        <div className="end-container">
            {child4}
            <Arrow value={hasSeparatedLines ? Arrows.HORIZONTAL_SEPARATED : Arrows.HORIZONTAL_JOINED}/>
            {child5}
        </div>
    </div>
}
