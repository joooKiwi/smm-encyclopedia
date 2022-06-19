import './GroupOf4PowerUpPriority.scss';

import type {ReactElement, ReactProperty} from '../../../util/react/ReactProperty';

import Arrow    from '../../tools/arrow/Arrow';
import {Arrows} from '../../tools/arrow/Arrows';

interface GroupOf4PowerUpPriorityProperties
    extends ReactProperty {

    id: string

    children: readonly [ReactElement, ReactElement, ReactElement, ReactElement,]

}

/**
 * @param properties
 * @reactComponent
 */
export default function GroupOf4PowerUpPriority({id, children,}: GroupOf4PowerUpPriorityProperties,) {
    const [child1, child2, child3, child4,] = children;
    return <div id={id} className="groupOf4-powerUp-priority">
        <div className="start-container">
            {child1}
            <Arrow value={Arrows.HORIZONTAL_SEPARATED}/>
            {child2}
        </div>
        <div className="arrows-container">
            <div className="vertical-arrow-container">
                <Arrow value={Arrows.VERTICAL_SEPARATED}/></div>
            <div className="diagonal-arrows-container">
                <Arrow value={Arrows.VERTICAL_SEPARATED}/>
                <Arrow value={Arrows.VERTICAL_SEPARATED}/>
            </div>
            <div className="vertical-arrow-container">
                <Arrow value={Arrows.VERTICAL_SEPARATED}/>
            </div>
        </div>
        <div className="end-container">
            {child3}
            <Arrow value={Arrows.HORIZONTAL_SEPARATED}/>
            {child4}
        </div>
    </div>;
}
