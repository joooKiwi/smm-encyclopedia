import {Fragment} from 'react'

import type {ImagesCallbackByPriority, PowerUpPriority} from 'app/powerUp/priority/PowerUpPriority'
import type {ReactProperties}                           from 'util/react/ReactProperties'

import Image from 'app/tools/images/Image'

interface PowerUpPriorityProperties<T extends PowerUpPriority, >
    extends ReactProperties {

    id: string

    value: | T | readonly T[]

    images?: ImagesCallbackByPriority<T>

}

const DEFAULT_CALLBACK = (priority: PowerUpPriority,) => priority.images

/**
 * @param properties
 * @reactComponent
 */
export default function PowerUpPriorityComponent<T extends PowerUpPriority, >({id, value, images: imagesCallback = DEFAULT_CALLBACK,}: PowerUpPriorityProperties<T>,) {
    const priorities = value instanceof Array ? value : [value]
    return <div key={`Power-up priority (${id})`} id={id}>
        {priorities.map((priority, index,) => {
                const priorityName = priority.name,
                    priorityEnglishName = priorityName.english

                return <Fragment key={`Power-up priority (group - ${priorityEnglishName} #${index + 1})`}>
                    {imagesCallback(priority).map((image, index2,) =>
                        <Image key={`Power-up priority (image - ${priorityEnglishName} #${index + 1}-${index2 + 1})`} file={image}/>)}
                </Fragment>
            }
        )}
    </div>
}
