import {Fragment} from 'react';

import type {PowerUpPriority} from './PowerUpPriority';
import type {ReactProperty}   from '../../../util/react/ReactProperty';

import {EMPTY_REACT_ELEMENT} from '../../../util/emptyReactVariables';
import NameComponent         from '../../../lang/name/component/Name.component';
import Image                 from '../../tools/images/Image';

interface PowerUpPriorityProperties<T extends PowerUpPriority, >
    extends ReactProperty {

    id: string

    value: | T| readonly T[]

    images?: (priority: T,) => readonly string[]

    /**
     * @temporaryProperty
     */
    displayName?: boolean

}

const DEFAULT_CALLBACK = (priority: PowerUpPriority,) => priority.images;

/**
 * @param properties
 * @reactComponent
 */
export default function PowerUpPriorityComponent<T extends PowerUpPriority, >({id, value, images: imagesCallback = DEFAULT_CALLBACK, displayName = false,}: PowerUpPriorityProperties<T>,) {
    const priorities = value instanceof Array ? value : [value];
    return <div key={`Power-up priority (${id})`} id={id}>
        {priorities.map((priority, index,) =>
            <Fragment key={`Power-up priority (group - ${priority.name.english} #${index + 1})`}>
                {displayName
                    ? <NameComponent key={`Power-up priority (name - ${priority.name.english} #${index + 1})`} id={`powerUpPriority-${priority.name.english}`} name={priority.name}/>
                    : EMPTY_REACT_ELEMENT}
                {imagesCallback(priority).map((image, index2,) =>
                    <Image key={`Power-up priority (image - ${priority.name.english} #${index + 1}-${index2 + 1})`} source={image} fallbackName={`${priority.name.english} (${image})`}/>)}
            </Fragment>
        )}
    </div>;
}
