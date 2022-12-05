import './GroupOf5PowerUpPriority.scss'

import type {ReactElement, ReactProperties} from 'util/react/ReactProperties'

import Arrow    from 'app/tools/arrow/Arrow'
import {Arrows} from 'app/tools/arrow/Arrows'

interface GroupOf5PowerUpPriorityProperties
    extends ReactProperties {

    id: string

    children: readonly [ReactElement, ReactElement, ReactElement, ReactElement, ReactElement,]

}

/**
 * @param properties
 * @reactComponent
 */
export default function GroupOf5PowerUpPriority({id, children,}: GroupOf5PowerUpPriorityProperties,) {
    const [child1, child2, child3, child4, child5,] = children
    return <div id={id} className="groupOf5-powerUp-priority">
        <div className="start-container">{child1}</div>
        <div className="first-external-arrows-container">
            <div className="diagonal-arrow-container">
                <Arrow value={Arrows.VERTICAL_SEPARATED}/>
            </div>
            <div className="diagonal-arrow-container">
                <Arrow value={Arrows.VERTICAL_SEPARATED}/>
            </div>
        </div>
        <div className="middle-container">
            {child2}
            <div className="centered-arrows-container">
                <div className="horizontal-arrow-container">
                    <Arrow value={Arrows.HORIZONTAL_SEPARATED}/>
                </div>
                <div className="diagonal-arrows-container">
                    <div className="diagonal-arrow-container">
                        <Arrow value={Arrows.VERTICAL_SEPARATED}/>
                    </div>
                    <Arrow value={Arrows.VERTICAL_SEPARATED}/>
                </div>
                <div className="diagonal-arrows-container">
                    <div className="diagonal-arrow-container">
                        <Arrow value={Arrows.VERTICAL_SEPARATED}/>
                    </div>
                    <Arrow value={Arrows.VERTICAL_SEPARATED}/>
                </div>
            </div>
            {child3}
        </div>
        <div className="second-external-arrows-container">
            <div className="diagonal-arrow-container">
                <Arrow value={Arrows.VERTICAL_SEPARATED}/>
            </div>
            <div className="diagonal-arrow-container">
                <Arrow value={Arrows.VERTICAL_SEPARATED}/>
            </div>
        </div>
        <div className="end-container">
            {child4}
            <Arrow value={Arrows.HORIZONTAL_SEPARATED}/>
            {child5}
        </div>
    </div>
}
